/* Français */
export default {
  meta: {
    tagline: 'Ai-je mes enfants ce jour-là ?',
    description: 'Un petit outil entièrement local pour les gardes alternées 2-2-3. Indiquez quels deux jours vous avez eus cette semaine, choisissez une date, et il vous dit si les enfants sont chez vous.'
  },
  nav: {
    check: 'Vérifier une date',
    how: 'Comment ça marche',
    alephvoid: 'Aleph Void',
    language: 'Langue'
  },
  hero: {
    badge: 'Garde alternée 2-2-3',
    title: 'Ai-je mes enfants {accent}',
    titleAccent: 'ce jour-là ?',
    subtitle: 'La rotation 2-2-3 suit un cycle de 14 jours : au-delà d’une semaine, toute date devient une devinette. Indiquez les deux jours que vous avez eus cette semaine, choisissez une date, obtenez la réponse.',
    claim: '{strong} Aucun compte, aucun serveur, aucune donnée ne quitte votre navigateur — utilisable même en avion.',
    claimStrong: 'Tout se passe dans votre navigateur.'
  },
  step1: {
    num: 'Étape 1',
    title: 'Quels deux jours de semaine avez-vous eu les enfants cette semaine ?',
    note: '« Cette semaine » désigne la semaine qui commence le {date}. Choisissez la paire qui correspond : l’outil en déduit le reste du cycle.',
    group: 'Quels deux jours de semaine vous avez eu les enfants cette semaine'
  },
  choice: {
    pair: '{a} et {b}',
    montueSub: 'Ce week-end est aussi le vôtre — du vendredi au lundi matin.',
    wedthuSub: 'Ce week-end est celui de leur mère — du vendredi au lundi matin.'
  },
  step2: {
    num: 'Étape 2',
    title: 'Choisissez la date à vérifier',
    dateLabel: 'Date à vérifier',
    check: 'Vérifier cette date',
    jump: 'Aller à',
    today: 'Aujourd’hui',
    tomorrow: 'Demain',
    plusWeek: '+1 semaine',
    plus30: '+30 jours',
    plus90: '+90 jours'
  },
  error: {
    pattern: 'Choisissez d’abord l’une des deux options de l’étape 1.',
    date: 'Choisissez une date à vérifier.'
  },
  result: {
    yes: 'Oui',
    no: 'Non',
    withYou: 'Cette nuit-là, les enfants sont chez vous.',
    withThem: 'Cette nuit-là, les enfants sont chez leur mère.',
    stretchLabel: 'Cette période',
    cycleLabel: 'Position dans le cycle',
    nextLabel: 'Prochain relais',
    range: '{from} → {to}',
    stretchYou: 'Chez vous : {span} ({nights})',
    stretchThem: 'Chez leur mère : {span} ({nights})',
    nights: {
      one: '{n} nuit',
      many: '{n} nuits',
      other: '{n} nuits'
    },
    cycle: 'Jour {day} sur 14 — semaine {week}, {weekday}',
    nextToThem: '{date} au matin — ils partent chez leur mère',
    nextToYou: '{date} au matin — ils arrivent chez vous',
    prevMonth: 'Mois précédent',
    nextMonth: 'Mois suivant',
    legendYou: 'Chez vous',
    legendThem: 'Chez leur mère',
    legendTarget: 'Date vérifiée',
    cellYou: '{date} — chez vous',
    cellThem: '{date} — chez leur mère'
  },
  share: {
    button: 'Copier le lien',
    native: 'Partager',
    copied: 'Lien copié.',
    label: 'Lien de partage',
    hint: 'Le lien contient ce calendrier et cette date : il affichera la même réponse pour tout le monde.',
    opened: 'Ouvert depuis un lien partagé — le calendrier ci-dessous vient de ce lien, et non de votre propre choix enregistré.'
  },
  how: {
    eyebrow: 'Le rythme',
    title: 'Un cycle, quatorze jours',
    lead: 'Chaque parent obtient les mêmes sept jours sur quatorze. La semaine un est le miroir de la semaine deux : c’est pourquoi un coup d’œil sur une seule semaine ne suffit jamais.',
    week1: 'Semaine 1 — vous aviez {pair}',
    week2: 'Semaine 2 — tout s’inverse',
    you: 'Vous',
    mother: 'Mère',
    note1Title: 'Les jours se comptent en nuits',
    note1Body: 'Une date appartient à celui qui a les enfants cette nuit-là. Un week-end du vendredi au dimanche se termine à la remise du lundi matin : ce lundi compte donc pour le parent dont la période commence.',
    note2Title: 'Les semaines commencent le lundi',
    note2Body: 'L’étape 1 porte sur la semaine du lundi au dimanche dans laquelle vous vous trouvez. Si nous sommes dimanche, il s’agit toujours de la semaine commencée six jours plus tôt.',
    note3Title: 'Les jours fériés ne sont pas pris en compte',
    note3Body: 'Il s’agit de la rotation brute. Les échanges pour les fêtes, les semaines de vacances et les arrangements ponctuels prévus par votre convention parentale priment sur ce qui est affiché ici.'
  },
  footer: {
    home: 'Accueil',
    link: 'Aleph Void LLC',
    copy: 'Créé par {link}. © {year} {brand}. Fonctionne entièrement dans votre navigateur ; rien n’est envoyé. Ceci n’est pas un conseil juridique — votre convention parentale fait foi.'
  }
};
