# 2-2-3 Calendar

A single-page tool for answering one question about a 2-2-3 custody rotation:
**do I have my kids on that date?**

Pick which two weekdays you had this week (Mon & Tue, or Wed & Thu), pick any
date, and it tells you who has the kids that night — plus the full stretch that
date sits in, the next changeover, and a month calendar you can page through.

Live at **[223custody.net](https://223custody.net/)**.

Entirely client side: no server, no accounts, no analytics, nothing uploaded.
Once built, it is a folder of static files that works offline.

## The rotation

Anchored on a Monday that opens a week where you have Mon & Tue, the 14-day
cycle is fixed:

| Week | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|------|-----|-----|-----|-----|-----|-----|-----|
| 1 | You | You | Other | Other | You | You | You |
| 2 | Other | Other | You | You | Other | Other | Other |

Each date counts as an **overnight**, so a Friday-through-Monday-morning
weekend covers Fri/Sat/Sun and the handoff Monday belongs to the parent whose
block starts it. Seven days each per cycle.

Holiday swaps, vacation weeks, and one-off trades are not modeled — the
parenting plan overrides whatever this says.

## Stack

Vue 3 + vue-i18n, installed with **npm** and bundled with **webpack**. Nothing
is vendored into the repository; `npm ci` restores the dependency tree from
`package-lock.json`.

```
npm install     # once
npm run dev     # dev server with hot reload on http://localhost:5173
npm run build   # production bundle into dist/
npm run check   # locale key/placeholder/plural audit (also runs before build)
```

`npm run build` emits `dist/`, which is the whole deployable site. `dist/` and
`node_modules/` are gitignored — only sources are committed.

| Path | Purpose |
|------|---------|
| `src/main.js` | Entry point: creates the app and the i18n instance |
| `src/App.vue` | Single-file component holding the page and its state |
| `src/schedule.js` | The rotation itself, as pure functions |
| `src/locales/index.js` | Language registry and on-demand loading |
| `src/locales/*.js` | One message module per language |
| `src/styles.css` | Aleph Void dark palette, layout, RTL handling |
| `public/index.html` | HTML shell: all meta tags, the mount point, `<noscript>` |
| `public/` | `CNAME`, `robots.txt`, `sitemap.xml`, `assets/`, copied verbatim |
| `webpack.config.cjs` | Build config |
| `scripts/check-locales.mjs` | Pre-build translation audit |

### What the build does

- **Templates compile at build time.** `resolve.alias` pins Vue to
  `vue.runtime.esm-bundler`, so the template compiler never reaches the browser.
- **Locales are code-split.** English rides along in the entry chunk so the
  first paint is never empty; the other twenty are dynamic imports webpack
  splits into ~8 KB chunks, fetched only when that language is picked.
- **Dead feature flags are defined away** — `__VUE_I18N_LEGACY_API__`,
  `__VUE_PROD_DEVTOOLS__`, `__INTLIFY_PROD_DEVTOOLS__` and friends — so unused
  vue-i18n and Vue paths drop out of the bundle.
- **Output is content-hashed** (`js/main.<hash>.js`) and safe to cache forever.

Entry payload is roughly 217 KB uncompressed: 170 KB vendor (Vue + vue-i18n),
28 KB app, 20 KB CSS.

## Deploying

`.github/workflows/deploy.yml` runs on every push to `main` or `master`, and
can be triggered by hand from the Actions tab. It installs with `npm ci`, runs
the locale check, builds, verifies the output (required files present, twenty
locale chunks emitted, meta tags intact), and publishes **only `dist/`** to the
**gh-pages** branch. Sources and `node_modules` never reach the published
branch.

Before the first run:

1. Push this directory to the repository:
   `git add -A && git commit -m "2-2-3 Calendar" && git push -u origin master`
2. **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `(root)`.**
   The branch appears only after the workflow has run once, so let it run and
   then set this.
3. Point `223custody.net` at GitHub Pages in DNS. `CNAME` is copied into
   `dist/` by the build, so the custom domain survives each deploy.

The workflow uses only first-party actions (`actions/checkout`,
`actions/setup-node`) and needs `contents: write` and nothing else. A deploy
that would produce no change exits without an empty commit.

## Languages

English plus the twenty most widely used other languages: Chinese
(Simplified), Hindi, Spanish, Arabic, Bengali, Portuguese, Russian, Japanese,
German, French, Urdu, Indonesian, Turkish, Italian, Korean, Vietnamese,
Persian, Polish, Dutch, and Thai.

- **No English is left in the markup.** Every user-visible string lives in
  `src/locales/en.js`; the other files mirror its key set exactly.
- The picker in the nav lists each language by its own name with an emoji
  flag. Flags map countries, not languages, so the native name is what
  actually identifies each entry; on Windows, whose emoji font carries no flag
  glyphs, they render as two-letter country codes instead.
- The initial language comes from `navigator.languages`, and the picker
  choice is remembered in `localStorage`.
- Only English is loaded up front; the rest arrive as lazy webpack chunks when
  a language is chosen.
- **Weekday and month names are never translated.** They come from `Intl` for
  the active locale, so there is no per-language day-name table to drift.
- `result.nights` is keyed by CLDR plural category (`one` / `two` / `few` /
  `many` / `other`) and resolved through `Intl.PluralRules`, so Russian gets
  «2 ночи», Arabic gets «ليلتان», and English gets "3 nights".
- Arabic, Urdu, and Persian set `dir="rtl"` on `<html>`. The calendar keeps
  Monday first, which mirrors into a right-to-left column order natively.

### Adding a language

1. Copy `src/locales/en.js` to `src/locales/<code>.js` and translate the
   values, leaving the `{placeholders}` intact.
2. Add an entry to `LOCALES` in `src/locales/index.js` with the BCP-47 `tag`,
   the language's own `name`, a `flag`, and `dir: 'rtl'` if applicable.
3. Trim `result.nights` to the categories
   `Intl.PluralRules(tag).resolvedOptions().pluralCategories` reports.
4. Run `npm run check`. It fails the build on a missing key, a mismatched
   placeholder, a stray `|` or `@` (vue-i18n syntax), an invalid plural
   category, or a language listed in `LOCALES` without a message file.

Add the new language to the `hreflang` block and `og:locale:alternate` list in
`public/index.html`, and to `sitemap.xml`, so crawlers see it too.

## Notes

- All date math runs on UTC midnights, so DST transitions can never shift a day.
- Your Step 1 choice is remembered in `localStorage` as the **anchor Monday**,
  not as the label — so it stays correct in later weeks instead of silently
  inverting after seven days.
- The page is dark-only and needs JavaScript; a `<noscript>` block explains why.

## License

MIT — see [LICENSE](LICENSE).

---

Created by [Aleph Void LLC](https://alephvoid.com).
