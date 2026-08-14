/* Deutsch */
export default {
  meta: {
    tagline: 'Habe ich an dem Tag meine Kinder?',
    description: 'Ein winziges, vollständig lokales Werkzeug für das 2-2-3-Wechselmodell. Sagen Sie, welche zwei Tage Sie diese Woche hatten, wählen Sie ein beliebiges Datum, und es sagt Ihnen, ob die Kinder bei Ihnen sind.'
  },
  nav: {
    check: 'Datum prüfen',
    how: 'So funktioniert es',
    alephvoid: 'Aleph Void',
    language: 'Sprache'
  },
  hero: {
    badge: '2-2-3-Wechselmodell',
    title: 'Habe ich meine Kinder {accent}',
    titleAccent: 'an dem Tag?',
    subtitle: 'Der 2-2-3-Rhythmus läuft in einem 14-Tage-Zyklus. Alles, was mehr als eine Woche entfernt liegt, wird damit zum Ratespiel. Sagen Sie, welche zwei Wochentage Sie diese Woche hatten, wählen Sie ein Datum, bekommen Sie eine Antwort.',
    claim: '{strong} Keine Konten, kein Server, keine Daten verlassen Ihren Browser — funktioniert auch im Flugzeug.',
    claimStrong: 'Läuft komplett im Browser.'
  },
  step1: {
    num: 'Schritt 1',
    title: 'An welchen zwei Wochentagen hatten Sie diese Woche die Kinder?',
    note: '„Diese Woche“ ist die Woche ab {date}. Wählen Sie das passende Paar — den Rest des Zyklus rechnet das Werkzeug aus.',
    group: 'An welchen zwei Wochentagen Sie diese Woche die Kinder hatten'
  },
  choice: {
    pair: '{a} & {b}',
    montueSub: 'Dieses Wochenende gehört ebenfalls Ihnen — von Freitag bis Montagmorgen.',
    wedthuSub: 'Dieses Wochenende gehört der Mutter — von Freitag bis Montagmorgen.'
  },
  step2: {
    num: 'Schritt 2',
    title: 'Wählen Sie das Datum, das Sie prüfen möchten',
    dateLabel: 'Zu prüfendes Datum',
    check: 'Dieses Datum prüfen',
    jump: 'Springen zu',
    today: 'Heute',
    tomorrow: 'Morgen',
    plusWeek: '+1 Woche',
    plus30: '+30 Tage',
    plus90: '+90 Tage'
  },
  error: {
    pattern: 'Wählen Sie zuerst eine der beiden Optionen in Schritt 1.',
    date: 'Wählen Sie ein Datum zum Prüfen.'
  },
  result: {
    yes: 'Ja',
    no: 'Nein',
    withYou: 'In dieser Nacht sind die Kinder bei Ihnen.',
    withThem: 'In dieser Nacht sind die Kinder bei ihrer Mutter.',
    stretchLabel: 'Dieser Block',
    cycleLabel: 'Position im Zyklus',
    nextLabel: 'Nächster Wechsel',
    range: '{from} → {to}',
    stretchYou: 'Bei Ihnen: {span} ({nights})',
    stretchThem: 'Bei der Mutter: {span} ({nights})',
    nights: {
      one: '{n} Nacht',
      other: '{n} Nächte'
    },
    cycle: 'Tag {day} von 14 — Woche {week}, {weekday}',
    nextToThem: '{date} früh — sie gehen zu ihrer Mutter',
    nextToYou: '{date} früh — sie kommen zu Ihnen',
    prevMonth: 'Vorheriger Monat',
    nextMonth: 'Nächster Monat',
    legendYou: 'Bei Ihnen',
    legendThem: 'Bei der Mutter',
    legendTarget: 'Geprüftes Datum',
    cellYou: '{date} — bei Ihnen',
    cellThem: '{date} — bei der Mutter'
  },
  share: {
    button: 'Link kopieren',
    native: 'Teilen',
    copied: 'Link kopiert.',
    label: 'Link zum Teilen',
    hint: 'Der Link enthält diesen Rhythmus und dieses Datum — wer ihn öffnet, sieht dieselbe Antwort.',
    opened: 'Über einen geteilten Link geöffnet — der Rhythmus unten stammt aus diesem Link, nicht aus Ihrer eigenen gespeicherten Auswahl.'
  },
  how: {
    eyebrow: 'Das Muster',
    title: 'Ein Zyklus, vierzehn Tage',
    lead: 'Jeder Elternteil bekommt dieselben sieben von vierzehn Tagen. Woche eins ist das Spiegelbild von Woche zwei — deshalb reicht ein Blick auf eine einzelne Woche nie aus.',
    week1: 'Woche 1 — Sie hatten {pair}',
    week2: 'Woche 2 — alles dreht sich um',
    you: 'Sie',
    mother: 'Mutter',
    note1Title: 'Gezählt werden Übernachtungen',
    note1Body: 'Ein Datum gehört dem, bei dem die Kinder in dieser Nacht schlafen. Ein Wochenende von Freitag bis Sonntag endet bei der Übergabe am Montagmorgen; dieser Montag zählt also für den Elternteil, dessen Block beginnt.',
    note2Title: 'Wochen beginnen am Montag',
    note2Body: 'Schritt 1 fragt nach der Montag-bis-Sonntag-Woche, in der Sie gerade sind. Ist heute Sonntag, ist das immer noch die Woche, die vor sechs Tagen begonnen hat.',
    note3Title: 'Feiertage sind nicht abgebildet',
    note3Body: 'Das hier ist der reine Rhythmus. Feiertagstausch, Ferienwochen und einmalige Absprachen aus Ihrer Umgangsregelung gehen dem vor, was hier steht.'
  },
  footer: {
    home: 'Start',
    link: 'Aleph Void LLC',
    copy: 'Erstellt von {link}. © {year} {brand}. Läuft vollständig in Ihrem Browser; nichts wird hochgeladen. Keine Rechtsberatung — maßgeblich ist Ihre Umgangsregelung.'
  }
};
