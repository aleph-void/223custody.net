/* The 2-2-3 rotation, as pure functions.
 *
 * The cycle is 14 days. Anchored on a Monday that starts a week in which YOU
 * have Mon + Tue, the whole thing is fixed:
 *
 *   week 1:  Mon You  Tue You  Wed Her  Thu Her  Fri You  Sat You  Sun You
 *   week 2:  Mon Her  Tue Her  Wed You  Thu You  Fri Her  Sat Her  Sun Her
 *
 * Each date is counted as an overnight, so a Friday-through-Monday-morning
 * weekend covers Fri/Sat/Sun and hands off on the Monday that opens week 2.
 *
 * Every timestamp here is a UTC midnight, so DST shifts can never move a day.
 */

export const MS_DAY = 86400000
export const YOU = 1
export const THEM = 0

export const CYCLE = [
  YOU, YOU, THEM, THEM, YOU, YOU, YOU,        // week 1: Mon..Sun
  THEM, THEM, YOU, YOU, THEM, THEM, THEM      // week 2: Mon..Sun
]

export const BRAND = '2-2-3 Calendar'
export const STORE_ANCHOR = '223-calendar.anchor'

export function todayUTC () {
  const n = new Date()
  return Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())
}

export function parseInput (value) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '')
  if (!m) return null
  const y = +m[1]
  const mo = +m[2]
  const d = +m[3]
  const ts = Date.UTC(y, mo - 1, d)
  const back = new Date(ts)
  // reject impossible dates like 2026-02-31
  if (back.getUTCFullYear() !== y || back.getUTCMonth() !== mo - 1 || back.getUTCDate() !== d) return null
  return ts
}

export function toInputValue (ts) {
  const d = new Date(ts)
  return d.getUTCFullYear() + '-' +
    String(d.getUTCMonth() + 1).padStart(2, '0') + '-' +
    String(d.getUTCDate()).padStart(2, '0')
}

// Monday that opens the Mon–Sun week containing ts
export function mondayOf (ts) {
  const dow = new Date(ts).getUTCDay()     // 0 = Sun
  return ts - ((dow + 6) % 7) * MS_DAY     // 0 = Mon
}

// The Monday that opens a "week 1" (you have Mon + Tue) for a given choice.
export function anchorFor (pattern) {
  const thisMonday = mondayOf(todayUTC())
  return pattern === 'wedthu' ? thisMonday - 7 * MS_DAY : thisMonday
}

export function cycleIndex (ts, anchor) {
  const n = Math.round((ts - anchor) / MS_DAY)
  return ((n % 14) + 14) % 14
}

export function hasKids (ts, anchor) {
  return CYCLE[cycleIndex(ts, anchor)] === YOU
}

// First and last day of the unbroken stretch containing ts
export function stretchOf (ts, anchor) {
  const who = hasKids(ts, anchor)
  let start = ts
  let end = ts
  while (hasKids(start - MS_DAY, anchor) === who) start -= MS_DAY
  while (hasKids(end + MS_DAY, anchor) === who) end += MS_DAY
  return { start, end, you: who }
}

export function queryParam (name) {
  try {
    return new URLSearchParams(window.location.search).get(name)
  } catch (e) {
    return null
  }
}
