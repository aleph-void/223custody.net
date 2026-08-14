/* Locale registry and on-demand loading.
 *
 * English is bundled with the entry chunk so the first paint is never empty.
 * Every other language is a dynamic import, which webpack splits into its own
 * chunk and fetches only when that language is chosen.
 */
// Extension is explicit so plain Node (the locale checker) resolves this too.
import en from './en.js'

export const STORE_LOCALE = '223-calendar.locale'

/* `code` is the message file name, `tag` the BCP-47 tag handed to Intl, `name`
 * the language's own name for itself.
 *
 * `flag` is the country most associated with the language, which is a rough fit
 * by nature — Spanish is not only Spain, Arabic spans twenty-odd countries — so
 * the language's own name is always shown next to it and is what actually
 * identifies the entry. On Windows, whose emoji font has no flag glyphs, these
 * degrade to their two-letter country code. */
export const LOCALES = [
  { code: 'en', tag: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', tag: 'zh-Hans', name: '简体中文', flag: '🇨🇳' },
  { code: 'hi', tag: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', tag: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', tag: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'bn', tag: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'pt', tag: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', tag: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', tag: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', tag: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', tag: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ur', tag: 'ur', name: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'id', tag: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'tr', tag: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'it', tag: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ko', tag: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'vi', tag: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'fa', tag: 'fa', name: 'فارسی', flag: '🇮🇷', dir: 'rtl' },
  { code: 'pl', tag: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'nl', tag: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'th', tag: 'th', name: 'ไทย', flag: '🇹🇭' }
]

export const byCode = LOCALES.reduce((acc, l) => {
  acc[l.code] = l
  return acc
}, {})

export const messages = { en }

let i18nRef = null

// main.js hands the composer over once it exists, so this module stays free of
// import cycles.
export function registerI18n (i18n) {
  i18nRef = i18n
}

export function loadLocale (code) {
  if (!byCode[code]) return Promise.reject(new Error('unknown locale ' + code))
  if (!i18nRef) return Promise.reject(new Error('i18n not registered'))
  if (i18nRef.global.availableLocales.includes(code)) return Promise.resolve()

  return import(
    /* webpackChunkName: "locale-[request]" */
    /* webpackMode: "lazy" */
    `./${code}.js`
  ).then(mod => {
    i18nRef.global.setLocaleMessage(code, mod.default)
  })
}

export function preferredLocale () {
  // An explicit ?lang= wins: it is what the hreflang alternates point at.
  let pinned = null
  try {
    pinned = new URLSearchParams(window.location.search).get('lang')
  } catch (e) { /* no URL API */ }
  if (pinned && byCode[pinned]) return pinned

  try {
    const saved = localStorage.getItem(STORE_LOCALE)
    if (saved && byCode[saved]) return saved
  } catch (e) { /* private mode */ }

  const wanted = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || 'en']

  for (let i = 0; i < wanted.length; i++) {
    const base = String(wanted[i]).toLowerCase().split('-')[0]
    if (byCode[base]) return base
  }
  return 'en'
}
