/* Guards the translation set before every build.
 *
 * English is the source of truth: every other locale must expose exactly the
 * same keys with the same {placeholders}, and its result.nights forms must be
 * plural categories that Intl actually produces for that language.
 */
import { readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const localeDir = join(here, '..', 'src', 'locales')
const moduleUrl = name => pathToFileURL(join(localeDir, name)).href

const { LOCALES } = await import(moduleUrl('index.js'))

const files = readdirSync(localeDir).filter(f => /^[a-z]{2}\.js$/.test(f)).map(f => f.slice(0, -3))

const messages = {}
for (const code of files) {
  const mod = await import(moduleUrl(code + '.js'))
  messages[code] = mod.default
}

const flatten = (obj, prefix = '') =>
  Object.entries(obj).reduce((acc, [k, v]) => {
    const key = prefix ? `${prefix}.${k}` : k
    if (v && typeof v === 'object') Object.assign(acc, flatten(v, key))
    else acc[key] = v
    return acc
  }, {})

const placeholders = s => (String(s).match(/{[a-zA-Z]+}/g) || []).sort().join(',')

const en = flatten(messages.en)
const baseKeys = Object.keys(en).filter(k => !k.startsWith('result.nights.'))
const problems = []

// Every language in the picker needs a file, and vice versa.
for (const { code } of LOCALES) {
  if (!messages[code]) problems.push(`${code}: listed in LOCALES but src/locales/${code}.js is missing`)
}
for (const code of files) {
  if (!LOCALES.some(l => l.code === code)) problems.push(`${code}: message file exists but is not in LOCALES`)
}

for (const { code, tag } of LOCALES) {
  if (!messages[code]) continue
  const flat = flatten(messages[code])
  const keys = Object.keys(flat).filter(k => !k.startsWith('result.nights.'))

  for (const k of baseKeys) {
    if (!(k in flat)) problems.push(`${code}: missing key ${k}`)
    else if (placeholders(en[k]) !== placeholders(flat[k])) {
      problems.push(`${code}: ${k} placeholders ${placeholders(flat[k]) || '(none)'} != en ${placeholders(en[k]) || '(none)'}`)
    }
    if (typeof flat[k] === 'string' && /[|@]/.test(flat[k])) {
      problems.push(`${code}: ${k} contains | or @, which vue-i18n reads as plural/link syntax`)
    }
  }
  for (const k of keys) {
    if (!baseKeys.includes(k)) problems.push(`${code}: unexpected key ${k}`)
  }

  // Plural forms: only categories this language actually uses, and the ones a
  // 2-night and 3-night stretch resolve to must exist (or fall back to other).
  const cats = Object.keys(messages[code].result?.nights ?? {})
  const valid = new Intl.PluralRules(tag).resolvedOptions().pluralCategories
  for (const c of cats) {
    if (!valid.includes(c)) problems.push(`${code}: result.nights.${c} is not a plural category for ${tag}`)
  }
  for (const n of [2, 3]) {
    const need = new Intl.PluralRules(tag).select(n)
    if (!cats.includes(need) && !cats.includes('other')) {
      problems.push(`${code}: no result.nights.${need} (or .other) for n=${n}`)
    }
  }
}

if (problems.length) {
  console.error('Locale check failed:\n  ' + problems.join('\n  '))
  process.exit(1)
}

console.log(`Locale check passed: ${LOCALES.length} locales, ${baseKeys.length} keys each.`)
