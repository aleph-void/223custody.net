/* English — the source locale. Every other file in this folder mirrors these
 * keys. Weekday and month names are never translated here; they come from Intl
 * at runtime. */
export default {
  meta: {
    tagline: 'Do I Have My Kids That Day?',
    description: 'A tiny, entirely client-side tool for 2-2-3 custody schedules. Tell it which two days you had this week, pick any date in the future, and it tells you whether the kids are with you.'
  },
  nav: {
    check: 'Check a Date',
    how: 'How It Works',
    alephvoid: 'Aleph Void',
    language: 'Language'
  },
  hero: {
    badge: '2-2-3 Custody Schedule',
    title: 'Do I have my kids {accent}',
    titleAccent: 'on that day?',
    subtitle: 'The 2-2-3 rotation is a 14-day cycle, which makes any date more than a week out a guessing game. Tell it which two weekdays you had this week, pick a date, get an answer.',
    claim: '{strong} No accounts, no server, no data leaves your browser — open it on a plane if you want.',
    claimStrong: 'Entirely client-side.'
  },
  step1: {
    num: 'Step 1',
    title: 'Which two weekdays did you have the kids this week?',
    note: '“This week” means the week starting {date}. Pick whichever pair matches — the tool works out the rest of the cycle from there.',
    group: 'Which two weekdays you had the kids this week'
  },
  choice: {
    pair: '{a} & {b}',
    montueSub: 'You also have this weekend — Friday through Monday morning.',
    wedthuSub: 'The other parent has this weekend — Friday through Monday morning.'
  },
  step2: {
    num: 'Step 2',
    title: 'Pick the date you want to check',
    dateLabel: 'Date to check',
    check: 'Check This Date',
    jump: 'Jump to',
    today: 'Today',
    tomorrow: 'Tomorrow',
    plusWeek: '+1 week',
    plus30: '+30 days',
    plus90: '+90 days'
  },
  error: {
    pattern: 'Choose one of the two options in Step 1 first.',
    date: 'Pick a date to check.'
  },
  result: {
    yes: 'Yes',
    no: 'No',
    withYou: 'The kids are with you that night.',
    withThem: 'The kids are with the other parent that night.',
    stretchLabel: 'This stretch',
    cycleLabel: 'Cycle position',
    nextLabel: 'Next changeover',
    range: '{from} → {to}',
    stretchYou: 'Yours: {span} ({nights})',
    stretchThem: 'Other parent: {span} ({nights})',
    nights: {
      one: '{n} night',
      other: '{n} nights'
    },
    cycle: 'Day {day} of 14 — week {week}, {weekday}',
    nextToThem: '{date} morning — they go to the other parent',
    nextToYou: '{date} morning — they come to you',
    prevMonth: 'Previous month',
    nextMonth: 'Next month',
    legendYou: 'With you',
    legendThem: 'With the other parent',
    legendTarget: 'Date you checked',
    cellYou: '{date} — with you',
    cellThem: '{date} — with the other parent'
  },
  share: {
    button: 'Copy share link',
    native: 'Share',
    copied: 'Link copied.',
    label: 'Share link',
    hint: 'The link carries this schedule and date, so it opens to the same answer for anyone.',
    opened: 'Opened from a shared link — the schedule below came from that link, not from your own saved choice.'
  },
  how: {
    eyebrow: 'The Pattern',
    title: 'One cycle, fourteen days',
    lead: 'Each parent gets the same seven days out of every fourteen. Week one is the mirror of week two, which is why a single-week glance never tells you enough.',
    week1: 'Week 1 — you had {pair}',
    week2: 'Week 2 — everything flips',
    you: 'You',
    otherParent: 'Other Parent',
    note1Title: 'Days are counted as overnights',
    note1Body: 'A date belongs to whoever has the kids that night. A Friday–Sunday weekend ends at Monday morning drop-off, so that Monday counts for the parent whose block starts it.',
    note2Title: 'Weeks start on Monday',
    note2Body: 'Step 1 asks about the Monday–Sunday week you are currently in. If today is a Sunday, that is still the week that began six days ago.',
    note3Title: 'Holidays are not modeled',
    note3Body: 'This is the plain rotation. Holiday swaps, vacation weeks, and one-off trades in your parenting plan override whatever this says.'
  },
  footer: {
    home: 'Home',
    link: 'Aleph Void LLC',
    copy: 'Created by {link}. © {year} {brand}. Runs entirely in your browser; nothing is uploaded. Not legal advice — your parenting plan is the authority.'
  }
};
