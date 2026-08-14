/* Español */
export default {
  meta: {
    tagline: '¿Tengo a mis hijos ese día?',
    description: 'Una herramienta diminuta y totalmente local para custodias 2-2-3. Dile qué dos días te tocaron esta semana, elige cualquier fecha futura y te dirá si los niños están contigo.'
  },
  nav: {
    check: 'Consultar una fecha',
    how: 'Cómo funciona',
    alephvoid: 'Aleph Void',
    language: 'Idioma'
  },
  hero: {
    badge: 'Custodia 2-2-3',
    title: '¿Tengo a mis hijos {accent}',
    titleAccent: 'ese día?',
    subtitle: 'La rotación 2-2-3 es un ciclo de 14 días, así que cualquier fecha a más de una semana vista se convierte en una adivinanza. Dile qué dos días te tocaron esta semana, elige una fecha y obtén la respuesta.',
    claim: '{strong} Sin cuentas, sin servidor: ningún dato sale de tu navegador; funciona hasta en un avión.',
    claimStrong: 'Todo ocurre en tu navegador.'
  },
  step1: {
    num: 'Paso 1',
    title: '¿Qué dos días entre semana tuviste a los niños esta semana?',
    note: '«Esta semana» es la que empieza el {date}. Elige el par que corresponda: la herramienta deduce el resto del ciclo.',
    group: 'Qué dos días entre semana tuviste a los niños esta semana'
  },
  choice: {
    pair: '{a} y {b}',
    montueSub: 'Este fin de semana también es tuyo: del viernes al lunes por la mañana.',
    wedthuSub: 'Este fin de semana es de su madre: del viernes al lunes por la mañana.'
  },
  step2: {
    num: 'Paso 2',
    title: 'Elige la fecha que quieres consultar',
    dateLabel: 'Fecha a consultar',
    check: 'Consultar esta fecha',
    jump: 'Ir a',
    today: 'Hoy',
    tomorrow: 'Mañana',
    plusWeek: '+1 semana',
    plus30: '+30 días',
    plus90: '+90 días'
  },
  error: {
    pattern: 'Primero elige una de las dos opciones del paso 1.',
    date: 'Elige una fecha para consultar.'
  },
  result: {
    yes: 'Sí',
    no: 'No',
    withYou: 'Esa noche los niños están contigo.',
    withThem: 'Esa noche los niños están con su madre.',
    stretchLabel: 'Este bloque',
    cycleLabel: 'Posición en el ciclo',
    nextLabel: 'Próximo cambio',
    range: '{from} → {to}',
    stretchYou: 'Contigo: {span} ({nights})',
    stretchThem: 'Con su madre: {span} ({nights})',
    nights: {
      one: '{n} noche',
      other: '{n} noches'
    },
    cycle: 'Día {day} de 14 — semana {week}, {weekday}',
    nextToThem: '{date} por la mañana: pasan con su madre',
    nextToYou: '{date} por la mañana: pasan contigo',
    prevMonth: 'Mes anterior',
    nextMonth: 'Mes siguiente',
    legendYou: 'Contigo',
    legendThem: 'Con su madre',
    legendTarget: 'Fecha consultada',
    cellYou: '{date}: contigo',
    cellThem: '{date}: con su madre'
  },
  share: {
    button: 'Copiar enlace',
    native: 'Compartir',
    copied: 'Enlace copiado.',
    label: 'Enlace para compartir',
    hint: 'El enlace lleva este calendario y esta fecha, así que quien lo abra verá la misma respuesta.',
    opened: 'Abierto desde un enlace compartido: el calendario de abajo viene de ese enlace, no de tu propia elección guardada.'
  },
  how: {
    eyebrow: 'El patrón',
    title: 'Un ciclo, catorce días',
    lead: 'Cada progenitor tiene los mismos siete días de cada catorce. La semana uno es el espejo de la dos; por eso mirar una sola semana nunca basta.',
    week1: 'Semana 1: tuviste {pair}',
    week2: 'Semana 2: todo se invierte',
    you: 'Tú',
    mother: 'Madre',
    note1Title: 'Los días se cuentan por noches',
    note1Body: 'Una fecha pertenece a quien tiene a los niños esa noche. Un fin de semana de viernes a domingo termina en la entrega del lunes por la mañana, así que ese lunes cuenta para el progenitor que inicia el bloque.',
    note2Title: 'Las semanas empiezan el lunes',
    note2Body: 'El paso 1 pregunta por la semana de lunes a domingo en la que estás ahora. Si hoy es domingo, sigue siendo la semana que empezó hace seis días.',
    note3Title: 'Los festivos no están contemplados',
    note3Body: 'Esto es la rotación simple. Los intercambios por festivos, las vacaciones y los cambios puntuales de tu convenio regulador tienen prioridad sobre lo que diga esta página.'
  },
  footer: {
    home: 'Inicio',
    link: 'Aleph Void LLC',
    copy: 'Creado por {link}. © {year} {brand}. Funciona íntegramente en tu navegador; no se sube nada. No es asesoramiento legal: tu convenio regulador manda.'
  }
};
