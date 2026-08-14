<template>
<!-- Navigation -->
  <nav id="nav">
    <div class="nav-inner">
      <a href="/" class="nav-brand">
        <svg class="nav-logo" viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="#6d28d9"/>
          <rect x="6" y="9" width="7" height="6" rx="1.5" fill="#c4b5fd"/>
          <rect x="15" y="9" width="11" height="6" rx="1.5" fill="#312e81"/>
          <rect x="6" y="17" width="11" height="6" rx="1.5" fill="#312e81"/>
          <rect x="19" y="17" width="7" height="6" rx="1.5" fill="#c4b5fd"/>
        </svg>
        <span class="brand-name" dir="ltr">{{ brand }}</span>
      </a>
      <div class="nav-links">
        <a href="#tool">{{ $t('nav.check') }}</a>
        <a href="#how-it-works">{{ $t('nav.how') }}</a>
        <a href="https://alephvoid.com" target="_blank" rel="noopener">{{ $t('nav.alephvoid') }}</a>
      </div>
      <div class="nav-actions">
        <label class="lang" :title="$t('nav.language')">
          <span class="visually-hidden">{{ $t('nav.language') }}</span>
          <svg class="lang-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <path d="M3.2 9h17.6M3.2 15h17.6" stroke="currentColor" stroke-width="1.6" fill="none"/>
          </svg>
          <div class="lang-picker" ref="langPicker">
            <button
              type="button"
              class="lang-select lang-trigger"
              :aria-expanded="String(languageMenuOpen)"
              :aria-controls="languageMenuOpen ? 'language-menu' : undefined"
              :aria-label="$t('nav.language')"
              @click="languageMenuOpen = !languageMenuOpen">
              <span class="fi" :class="flagClass(selectedLocale.code)" aria-hidden="true"></span>
              <span>{{ selectedLocale.name }}</span>
              <span class="lang-chevron" aria-hidden="true">▾</span>
            </button>
            <div v-if="languageMenuOpen" id="language-menu" class="lang-menu" role="listbox" :aria-label="$t('nav.language')">
              <button
                v-for="l in locales"
                :key="l.code"
                type="button"
                class="lang-option"
                role="option"
                :lang="l.tag"
                :aria-selected="String(locale === l.code)"
                @click="chooseLocale(l.code)">
                <span class="fi" :class="flagClass(l.code)" aria-hidden="true"></span>
                <span>{{ l.name }}</span>
              </button>
            </div>
          </div>
        </label>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <span class="hero-badge">{{ $t('hero.badge') }}</span>
        <h1>
          <i18n-t keypath="hero.title" scope="global">
            <template #accent><span class="text-gradient">{{ $t('hero.titleAccent') }}</span></template>
          </i18n-t>
        </h1>
        <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
        <p class="hero-claim">
          <i18n-t keypath="hero.claim" scope="global">
            <template #strong><strong>{{ $t('hero.claimStrong') }}</strong></template>
          </i18n-t>
        </p>
      </div>
    </div>
  </section>

  <!-- Tool -->
  <section id="tool" class="section">
    <div class="container">

      <!-- Step 1 -->
      <div class="card step">
        <div class="step-head">
          <span class="step-num">{{ $t('step1.num') }}</span>
          <h2>{{ $t('step1.title') }}</h2>
        </div>
        <p class="step-note">
          <i18n-t keypath="step1.note" scope="global">
            <template #date><strong>{{ thisMondayLabel }}</strong></template>
          </i18n-t>
        </p>
        <div class="choice-grid" role="radiogroup" :aria-label="$t('step1.group')">
          <button
            v-for="opt in patterns"
            :key="opt.key"
            type="button"
            class="choice"
            role="radio"
            :aria-checked="String(pattern === opt.key)"
            @click="selectPattern(opt.key)">
            <span class="choice-days">{{ opt.label }}</span>
            <span class="choice-sub">{{ $t(opt.sub) }}</span>
            <span class="choice-strip" aria-hidden="true">
              <em v-for="(d, i) in narrowDays" :key="i" :class="{ on: opt.days.includes(i) }">{{ d }}</em>
            </span>
          </button>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="card step">
        <div class="step-head">
          <span class="step-num">{{ $t('step2.num') }}</span>
          <h2>{{ $t('step2.title') }}</h2>
        </div>
        <div class="date-row">
          <input type="date" class="date-input" v-model="dateValue" :aria-label="$t('step2.dateLabel')" @keydown.enter.prevent="check" @change="onDateChange" />
          <button type="button" class="btn btn-lg btn-primary" @click="check">{{ $t('step2.check') }}</button>
        </div>
        <div class="quick-row">
          <span class="quick-label">{{ $t('step2.jump') }}</span>
          <button v-for="j in jumps" :key="j.days" type="button" class="chip" @click="jumpTo(j.days)">{{ $t(j.label) }}</button>
        </div>
        <p class="form-error" v-if="error" role="alert">{{ $t(error) }}</p>
      </div>

      <!-- Result -->
      <div class="card result" v-if="answer" :class="answer.you ? 'yes' : 'no'" ref="resultEl">
        <p class="result-note" v-if="fromShared">{{ $t('share.opened') }}</p>
        <div class="result-head">
          <span class="result-verdict">{{ answer.you ? $t('result.yes') : $t('result.no') }}</span>
          <div class="result-meta">
            <p class="result-date">{{ answer.dateLong }}</p>
            <p class="result-line">{{ answer.you ? $t('result.withYou') : $t('result.withThem') }}</p>
          </div>
        </div>
        <div class="result-detail">
          <div class="detail">
            <span class="detail-label">{{ $t('result.stretchLabel') }}</span>
            <span class="detail-value">{{ answer.stretch }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">{{ $t('result.cycleLabel') }}</span>
            <span class="detail-value">{{ answer.cycle }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">{{ $t('result.nextLabel') }}</span>
            <span class="detail-value">{{ answer.next }}</span>
          </div>
        </div>

        <div class="cal">
          <div class="cal-head">
            <button type="button" class="cal-nav" @click="stepMonth(-1)" :aria-label="$t('result.prevMonth')">&#8249;</button>
            <span class="cal-title">{{ calTitle }}</span>
            <button type="button" class="cal-nav" @click="stepMonth(1)" :aria-label="$t('result.nextMonth')">&#8250;</button>
          </div>
          <div class="cal-dows" aria-hidden="true">
            <span v-for="(d, i) in shortDays" :key="i">{{ d }}</span>
          </div>
          <div class="cal-grid">
            <div
              v-for="(cell, i) in calCells"
              :key="i"
              class="cal-cell"
              :class="cell.empty ? 'empty' : [cell.you ? 'you' : 'them', { today: cell.today, target: cell.target }]"
              :title="cell.title">{{ cell.day }}</div>
          </div>
          <div class="cal-legend">
            <span class="legend"><i class="swatch swatch-you"></i> {{ $t('result.legendYou') }}</span>
            <span class="legend"><i class="swatch swatch-them"></i> {{ $t('result.legendThem') }}</span>
            <span class="legend"><i class="swatch swatch-target"></i> {{ $t('result.legendTarget') }}</span>
          </div>
        </div>

        <div class="share">
          <div class="share-row">
            <button type="button" class="btn btn-outline share-btn" @click="share">
              <svg class="btn-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
                <path d="M12 15V3" /><path d="M8 7l4-4 4 4" />
              </svg>
              {{ canShareNatively ? $t('share.native') : $t('share.button') }}
            </button>
            <input class="share-input" type="text" readonly :value="shareUrl" :aria-label="$t('share.label')" ref="shareInput" @focus="selectShareUrl" />
          </div>
          <p class="share-hint" :class="{ ok: shareFeedback }">{{ shareFeedback ? $t('share.copied') : $t('share.hint') }}</p>
        </div>
      </div>

    </div>
  </section>

  <!-- How it works -->
  <section id="how-it-works" class="section section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">{{ $t('how.eyebrow') }}</span>
        <h2>{{ $t('how.title') }}</h2>
        <p>{{ $t('how.lead') }}</p>
      </div>

      <div class="cycle">
        <div class="cycle-week" v-for="(week, w) in cycleWeeks" :key="w">
          <span class="cycle-label">{{ week.label }}</span>
          <div class="cycle-days">
            <span v-for="(d, i) in week.days" :key="i" class="cd" :class="{ on: d.you }">
              <em>{{ d.name }}</em>{{ d.you ? $t('how.you') : $t('how.otherParent') }}
            </span>
          </div>
        </div>
      </div>

      <div class="notes">
        <div class="note" v-for="n in [1, 2, 3]" :key="n">
          <h3>{{ $t('how.note' + n + 'Title') }}</h3>
          <p>{{ $t('how.note' + n + 'Body') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <svg class="footer-logo" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#6d28d9"/>
            <rect x="6" y="9" width="7" height="6" rx="1.5" fill="#c4b5fd"/>
            <rect x="15" y="9" width="11" height="6" rx="1.5" fill="#312e81"/>
            <rect x="6" y="17" width="11" height="6" rx="1.5" fill="#312e81"/>
            <rect x="19" y="17" width="7" height="6" rx="1.5" fill="#c4b5fd"/>
          </svg>
          <span class="brand-name" dir="ltr">{{ brand }}</span>
        </div>
        <div class="footer-links">
          <a href="index.html">{{ $t('footer.home') }}</a>
          <a href="#tool">{{ $t('nav.check') }}</a>
          <a href="#how-it-works">{{ $t('nav.how') }}</a>
          <a href="https://alephvoid.com" target="_blank" rel="noopener">{{ $t('nav.alephvoid') }}</a>
        </div>
        <p class="footer-copy">
          <i18n-t keypath="footer.copy" scope="global">
            <template #link><a href="https://alephvoid.com" target="_blank" rel="noopener">{{ $t('footer.link') }}</a></template>
            <template #year>{{ year }}</template>
            <template #brand><span class="brand-name" dir="ltr">{{ brand }}</span></template>
          </i18n-t>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { LOCALES, byCode, loadLocale, preferredLocale, STORE_LOCALE } from './locales/index.js'
import {
  MS_DAY, CYCLE, YOU, BRAND, STORE_ANCHOR,
  todayUTC, parseInput, toInputValue, mondayOf,
  anchorFor, cycleIndex, hasKids, stretchOf, queryParam
} from './schedule.js'

export default {
  name: 'App',
  setup () {
    const { t, te, locale: activeLocale } = useI18n({ useScope: 'global' })

    const locale = ref('en')
    const languageMenuOpen = ref(false)
    const langPicker = ref(null)
    const pattern = ref(null)          // 'montue' | 'wedthu'
    const dateValue = ref(toInputValue(todayUTC()))
    const error = ref(null)
    const targetTs = ref(null)         // last checked date
    const calAnchor = ref(null)        // first of the month on display
    const resultEl = ref(null)
    const shareInput = ref(null)
    const shareFeedback = ref(false)
    const fromShared = ref(false)
    const canShareNatively = typeof navigator !== 'undefined' && typeof navigator.share === 'function'

    const flagCountries = {
      en: 'us', zh: 'cn', hi: 'in', es: 'es', ar: 'sa', bn: 'bd', pt: 'br',
      ru: 'ru', ja: 'jp', de: 'de', fr: 'fr', ur: 'pk', id: 'id', tr: 'tr',
      it: 'it', ko: 'kr', vi: 'vn', fa: 'ir', pl: 'pl', nl: 'nl', th: 'th'
    }

    const selectedLocale = computed(() => byCode[locale.value])

    function flagClass (code) {
      return 'fi-' + flagCountries[code]
    }

    function chooseLocale (code) {
      locale.value = code
      languageMenuOpen.value = false
    }

    function closeLanguageMenu (event) {
      if (langPicker.value && !langPicker.value.contains(event.target)) languageMenuOpen.value = false
    }

    onMounted(() => document.addEventListener('click', closeLanguageMenu))
    onBeforeUnmount(() => document.removeEventListener('click', closeLanguageMenu))

    const tag = computed(() => byCode[locale.value].tag)

    // -- Intl formatting, all reactive on the active locale --

    function fmt (ts, opts) {
      return new Date(ts).toLocaleDateString(tag.value, Object.assign({ timeZone: 'UTC' }, opts))
    }

    const FULL = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const SHORT = { weekday: 'short', month: 'short', day: 'numeric' }

    // A known Monday, so weekday names can be generated without hardcoding.
    const MONDAY = Date.UTC(2024, 0, 1)

    function weekdayNames (width) {
      const out = []
      for (let i = 0; i < 7; i++) out.push(fmt(MONDAY + i * MS_DAY, { weekday: width }))
      return out
    }

    const narrowDays = computed(() => weekdayNames('narrow'))
    const shortDays = computed(() => weekdayNames('short'))

    function pair (a, b) {
      return t('choice.pair', { a: shortDays.value[a], b: shortDays.value[b] })
    }

    // CLDR plural category, so "3 nights" inflects correctly per language.
    function nights (n) {
      let cat = 'other'
      try { cat = new Intl.PluralRules(tag.value).select(n) } catch (e) { /* older engine */ }
      let key = 'result.nights.' + cat
      if (!te(key, locale.value)) key = 'result.nights.other'
      return t(key, { n })
    }

    // -- derived state --

    const anchor = computed(() => (pattern.value ? anchorFor(pattern.value) : null))

    const thisMondayLabel = computed(() => fmt(mondayOf(todayUTC()), { month: 'long', day: 'numeric' }))

    const patterns = computed(() => [
      { key: 'montue', label: pair(0, 1), sub: 'choice.montueSub', days: [0, 1] },
      { key: 'wedthu', label: pair(2, 3), sub: 'choice.wedthuSub', days: [2, 3] }
    ])

    const jumps = [
      { days: 0, label: 'step2.today' },
      { days: 1, label: 'step2.tomorrow' },
      { days: 7, label: 'step2.plusWeek' },
      { days: 30, label: 'step2.plus30' },
      { days: 90, label: 'step2.plus90' }
    ]

    const answer = computed(() => {
      if (targetTs.value === null || anchor.value === null) return null
      const ts = targetTs.value
      const a = anchor.value
      const you = hasKids(ts, a)
      const s = stretchOf(ts, a)
      const handoff = s.end + MS_DAY
      const count = Math.round((s.end - s.start) / MS_DAY) + 1
      const span = s.start === s.end
        ? fmt(s.start, SHORT)
        : t('result.range', { from: fmt(s.start, SHORT), to: fmt(s.end, SHORT) })
      const idx = cycleIndex(ts, a)

      return {
        you,
        dateLong: fmt(ts, FULL),
        stretch: t(you ? 'result.stretchYou' : 'result.stretchThem', { span, nights: nights(count) }),
        cycle: t('result.cycle', {
          day: idx + 1, week: idx < 7 ? 1 : 2, weekday: fmt(ts, { weekday: 'long' })
        }),
        next: t(you ? 'result.nextToThem' : 'result.nextToYou', { date: fmt(handoff, SHORT) })
      }
    })

    const calTitle = computed(() =>
      (calAnchor.value === null ? '' : fmt(calAnchor.value, { month: 'long', year: 'numeric' })))

    const calCells = computed(() => {
      if (calAnchor.value === null || anchor.value === null) return []
      const a = anchor.value
      const d = new Date(calAnchor.value)
      const y = d.getUTCFullYear()
      const m = d.getUTCMonth()
      const daysInMonth = new Date(Date.UTC(y, m + 1, 0)).getUTCDate()
      const lead = (d.getUTCDay() + 6) % 7      // Mon-first offset
      const today = todayUTC()
      const cells = []

      for (let i = 0; i < lead; i++) cells.push({ empty: true, day: '' })

      for (let day = 1; day <= daysInMonth; day++) {
        const ts = Date.UTC(y, m, day)
        const you = hasKids(ts, a)
        cells.push({
          empty: false,
          day,
          you,
          today: ts === today,
          target: ts === targetTs.value,
          title: t(you ? 'result.cellYou' : 'result.cellThem', { date: fmt(ts, FULL) })
        })
      }
      return cells
    })

    const cycleWeeks = computed(() => {
      const names = shortDays.value
      return [0, 1].map(w => ({
        label: w === 0 ? t('how.week1', { pair: pair(0, 1) }) : t('how.week2'),
        days: names.map((name, i) => ({ name, you: CYCLE[w * 7 + i] === YOU }))
      }))
    })

    // -- actions --

    function selectPattern (key) {
      pattern.value = key
      error.value = null
      // Persist the anchor Monday, not the label: "Mon & Tue this week" is only
      // true for one week, but the Monday it points at is true forever.
      try { localStorage.setItem(STORE_ANCHOR, String(anchorFor(key))) } catch (e) { /* private mode */ }
    }

    function check () {
      if (!pattern.value) {
        error.value = 'error.pattern'
        const first = document.querySelector('.choice')
        if (first) first.focus()
        return
      }
      const ts = parseInput(dateValue.value)
      if (ts === null) {
        error.value = 'error.date'
        return
      }
      error.value = null
      const fresh = targetTs.value === null
      targetTs.value = ts
      const d = new Date(ts)
      calAnchor.value = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)
      nextTick(() => {
        if (resultEl.value) {
          resultEl.value.scrollIntoView({ behavior: fresh ? 'auto' : 'smooth', block: 'start' })
        }
      })
    }

    function onDateChange () {
      if (pattern.value && parseInput(dateValue.value) !== null) check()
    }

    function jumpTo (days) {
      dateValue.value = toInputValue(todayUTC() + days * MS_DAY)
      check()
    }

    function stepMonth (delta) {
      if (calAnchor.value === null) return
      const d = new Date(calAnchor.value)
      calAnchor.value = Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + delta, 1)
    }

    // -- sharing --
    //
    // The link carries the anchor Monday as an absolute date, never the
    // "Mon & Tue this week" label — a label would mean the opposite thing to
    // anyone opening the link a week later. The language is deliberately left
    // out so recipients get their own.

    const shareUrl = computed(() => {
      if (anchor.value === null) return ''
      const loc = window.location
      const base = (loc.origin && loc.origin !== 'null')
        ? loc.origin + loc.pathname
        : loc.href.split('#')[0].split('?')[0]
      let q = '?a=' + toInputValue(anchor.value)
      if (targetTs.value !== null) q += '&d=' + toInputValue(targetTs.value)
      return base + q
    })

    let feedbackTimer = null

    function flashCopied () {
      shareFeedback.value = true
      if (feedbackTimer) clearTimeout(feedbackTimer)
      feedbackTimer = setTimeout(() => { shareFeedback.value = false }, 2500)
    }

    function selectFallback () {
      // Clipboard API needs a secure context; selecting the field at least
      // leaves the link one keystroke away when it is unavailable.
      const el = shareInput.value
      if (!el) return
      el.focus()
      el.select()
      try { if (document.execCommand('copy')) flashCopied() } catch (e) { /* nothing left to try */ }
    }

    function copyLink (url) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(flashCopied, selectFallback)
      } else {
        selectFallback()
      }
    }

    function share () {
      const url = shareUrl.value
      if (!url) return

      // Desktop browsers may expose navigator.share and still refuse the call,
      // so any failure other than the user dismissing the sheet drops through
      // to copying.
      if (canShareNatively) {
        try {
          const p = navigator.share({ title: BRAND, text: t('meta.tagline'), url })
          if (p && p.catch) {
            p.catch(err => { if (!err || err.name !== 'AbortError') copyLink(url) })
          }
          return
        } catch (e) { /* fall through to copying */ }
      }
      copyLink(url)
    }

    function selectShareUrl (e) { e.target.select() }

    // Keep the address bar shareable too, so copying it does the same thing as
    // the button.
    watch([anchor, targetTs], () => {
      if (!shareUrl.value) return
      try { window.history.replaceState(null, '', shareUrl.value) } catch (e) { /* file:// */ }
    })

    // -- locale switching --

    function setMeta (id, value) {
      const el = document.getElementById(id)
      if (el) el.setAttribute('content', value)
    }

    watch(locale, code => {
      loadLocale(code).then(() => {
        activeLocale.value = code
        const meta = byCode[code]
        const html = document.documentElement
        html.setAttribute('lang', meta.tag)
        html.setAttribute('dir', meta.dir || 'ltr')
        document.title = BRAND + ' — ' + t('meta.tagline')
        const desc = t('meta.description')
        setMeta('meta-description', desc)
        setMeta('og-description', desc)
        setMeta('og-title', document.title)
        setMeta('tw-description', desc)
        setMeta('tw-title', document.title)
        try { localStorage.setItem(STORE_LOCALE, code) } catch (e) { /* private mode */ }
      }).catch(() => {
        locale.value = activeLocale.value   // roll back a failed load
      })
    })

    // -- restore prior visit --

    // Only the parity of the week gap matters: an even number of weeks since an
    // anchor Monday means this week is a week 1 (you have Mon + Tue).
    function patternForAnchor (ts) {
      const weeks = Math.round((mondayOf(todayUTC()) - mondayOf(ts)) / (7 * MS_DAY))
      return ((weeks % 2) + 2) % 2 === 0 ? 'montue' : 'wedthu'
    }

    try {
      const saved = Number(localStorage.getItem(STORE_ANCHOR))
      if (saved && isFinite(saved)) pattern.value = patternForAnchor(saved)
    } catch (e) { /* private mode */ }

    // -- open a shared link --
    // A shared anchor overrides the saved one for this visit but is never
    // written to storage: someone else's schedule must not quietly replace
    // your own.

    const sharedAnchor = parseInput(queryParam('a'))
    if (sharedAnchor !== null) {
      pattern.value = patternForAnchor(sharedAnchor)
      fromShared.value = true
    }

    const sharedDate = parseInput(queryParam('d'))
    if (sharedDate !== null) dateValue.value = toInputValue(sharedDate)

    if (pattern.value && (sharedAnchor !== null || sharedDate !== null)) check()

    locale.value = preferredLocale()

    return {
      brand: BRAND,
      year: new Date().getFullYear(),
      locales: LOCALES,
      locale,
      selectedLocale,
      languageMenuOpen,
      langPicker,
      flagClass,
      chooseLocale,
      pattern,
      patterns,
      jumps,
      dateValue,
      error,
      answer,
      resultEl,
      shareInput,
      shareUrl,
      shareFeedback,
      canShareNatively,
      fromShared,
      share,
      selectShareUrl,
      narrowDays,
      shortDays,
      thisMondayLabel,
      calTitle,
      calCells,
      cycleWeeks,
      selectPattern,
      check,
      onDateChange,
      jumpTo,
      stepMonth
    }
  }
}
</script>
