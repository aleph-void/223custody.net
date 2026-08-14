/* Nederlands */
export default {
  meta: {
    tagline: 'Heb ik die dag mijn kinderen?',
    description: 'Een klein, volledig lokaal hulpmiddel voor de 2-2-3-omgangsregeling. Geef aan welke twee dagen je deze week had, kies een willekeurige datum en het vertelt of de kinderen bij jou zijn.'
  },
  nav: {
    check: 'Datum controleren',
    how: 'Hoe het werkt',
    alephvoid: 'Aleph Void',
    language: 'Taal'
  },
  hero: {
    badge: '2-2-3-omgangsregeling',
    title: 'Heb ik mijn kinderen {accent}',
    titleAccent: 'op die dag?',
    subtitle: 'Het 2-2-3-ritme loopt in een cyclus van 14 dagen, waardoor elke datum verder dan een week vooruit giswerk wordt. Geef aan welke twee weekdagen je deze week had, kies een datum, krijg antwoord.',
    claim: '{strong} Geen account, geen server, geen gegevens verlaten je browser — werkt zelfs in het vliegtuig.',
    claimStrong: 'Draait volledig in je browser.'
  },
  step1: {
    num: 'Stap 1',
    title: 'Welke twee weekdagen had je deze week de kinderen?',
    note: '“Deze week” is de week die begint op {date}. Kies het paar dat klopt — de rest van de cyclus rekent het hulpmiddel uit.',
    group: 'Welke twee weekdagen je deze week de kinderen had'
  },
  choice: {
    pair: '{a} en {b}',
    montueSub: 'Dit weekend is ook van jou — van vrijdag tot maandagochtend.',
    wedthuSub: 'Dit weekend is van hun moeder — van vrijdag tot maandagochtend.'
  },
  step2: {
    num: 'Stap 2',
    title: 'Kies de datum die je wilt controleren',
    dateLabel: 'Te controleren datum',
    check: 'Deze datum controleren',
    jump: 'Ga naar',
    today: 'Vandaag',
    tomorrow: 'Morgen',
    plusWeek: '+1 week',
    plus30: '+30 dagen',
    plus90: '+90 dagen'
  },
  error: {
    pattern: 'Kies eerst een van de twee opties in stap 1.',
    date: 'Kies een datum om te controleren.'
  },
  result: {
    yes: 'Ja',
    no: 'Nee',
    withYou: 'Die nacht zijn de kinderen bij jou.',
    withThem: 'Die nacht zijn de kinderen bij hun moeder.',
    stretchLabel: 'Dit blok',
    cycleLabel: 'Positie in de cyclus',
    nextLabel: 'Volgende wissel',
    range: '{from} → {to}',
    stretchYou: 'Bij jou: {span} ({nights})',
    stretchThem: 'Bij hun moeder: {span} ({nights})',
    nights: {
      one: '{n} nacht',
      other: '{n} nachten'
    },
    cycle: 'Dag {day} van 14 — week {week}, {weekday}',
    nextToThem: '{date} ochtend — ze gaan naar hun moeder',
    nextToYou: '{date} ochtend — ze komen naar jou',
    prevMonth: 'Vorige maand',
    nextMonth: 'Volgende maand',
    legendYou: 'Bij jou',
    legendThem: 'Bij hun moeder',
    legendTarget: 'Gecontroleerde datum',
    cellYou: '{date} — bij jou',
    cellThem: '{date} — bij hun moeder'
  },
  share: {
    button: 'Link kopiëren',
    native: 'Delen',
    copied: 'Link gekopieerd.',
    label: 'Deelbare link',
    hint: 'De link bevat dit schema en deze datum, dus iedereen die hem opent ziet hetzelfde antwoord.',
    opened: 'Geopend via een gedeelde link — het schema hieronder komt uit die link, niet uit je eigen opgeslagen keuze.'
  },
  how: {
    eyebrow: 'Het patroon',
    title: 'Eén cyclus, veertien dagen',
    lead: 'Elke ouder krijgt dezelfde zeven van de veertien dagen. Week één is het spiegelbeeld van week twee — daarom zegt één week kijken nooit genoeg.',
    week1: 'Week 1 — jij had {pair}',
    week2: 'Week 2 — alles keert om',
    you: 'Jij',
    mother: 'Moeder',
    note1Title: 'Dagen tellen als overnachtingen',
    note1Body: 'Een datum hoort bij wie de kinderen die nacht heeft. Een weekend van vrijdag tot zondag eindigt bij het brengen op maandagochtend, dus die maandag telt voor de ouder wiens blok begint.',
    note2Title: 'Weken beginnen op maandag',
    note2Body: 'Stap 1 gaat over de week van maandag tot zondag waarin je nu zit. Is het vandaag zondag, dan is dat nog steeds de week die zes dagen geleden begon.',
    note3Title: 'Feestdagen zitten er niet in',
    note3Body: 'Dit is het kale ritme. Feestdagenruil, vakantieweken en eenmalige afspraken uit je ouderschapsplan gaan boven wat hier staat.'
  },
  footer: {
    home: 'Home',
    link: 'Aleph Void LLC',
    copy: 'Gemaakt door {link}. © {year} {brand}. Draait volledig in je browser; er wordt niets geüpload. Geen juridisch advies — je ouderschapsplan is bepalend.'
  }
};
