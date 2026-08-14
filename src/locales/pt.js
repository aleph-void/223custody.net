/* Português */
export default {
  meta: {
    tagline: 'Estou com meus filhos nesse dia?',
    description: 'Uma ferramenta minúscula e totalmente local para a guarda 2-2-3. Diga quais dois dias você ficou com eles nesta semana, escolha qualquer data futura e ela informa se as crianças estão com você.'
  },
  nav: {
    check: 'Consultar uma data',
    how: 'Como funciona',
    alephvoid: 'Aleph Void',
    language: 'Idioma'
  },
  hero: {
    badge: 'Guarda 2-2-3',
    title: 'Estou com meus filhos {accent}',
    titleAccent: 'nesse dia?',
    subtitle: 'O rodízio 2-2-3 é um ciclo de 14 dias, o que transforma qualquer data com mais de uma semana de distância em adivinhação. Diga quais dois dias da semana foram seus, escolha uma data e receba a resposta.',
    claim: '{strong} Sem contas, sem servidor, nenhum dado sai do seu navegador — funciona até dentro de um avião.',
    claimStrong: 'Tudo roda no seu navegador.'
  },
  step1: {
    num: 'Passo 1',
    title: 'Em quais dois dias úteis você ficou com as crianças esta semana?',
    note: '“Esta semana” é a que começa em {date}. Escolha o par correspondente — a ferramenta deduz o resto do ciclo.',
    group: 'Em quais dois dias úteis você ficou com as crianças esta semana'
  },
  choice: {
    pair: '{a} e {b}',
    montueSub: 'Este fim de semana também é seu — de sexta até segunda de manhã.',
    wedthuSub: 'Este fim de semana é do outro progenitor — de sexta até segunda de manhã.'
  },
  step2: {
    num: 'Passo 2',
    title: 'Escolha a data que quer consultar',
    dateLabel: 'Data a consultar',
    check: 'Consultar esta data',
    jump: 'Ir para',
    today: 'Hoje',
    tomorrow: 'Amanhã',
    plusWeek: '+1 semana',
    plus30: '+30 dias',
    plus90: '+90 dias'
  },
  error: {
    pattern: 'Escolha primeiro uma das duas opções do passo 1.',
    date: 'Escolha uma data para consultar.'
  },
  result: {
    yes: 'Sim',
    no: 'Não',
    withYou: 'Nessa noite as crianças estão com você.',
    withThem: 'Nessa noite as crianças estão com o outro progenitor.',
    stretchLabel: 'Este bloco',
    cycleLabel: 'Posição no ciclo',
    nextLabel: 'Próxima troca',
    range: '{from} → {to}',
    stretchYou: 'Com você: {span} ({nights})',
    stretchThem: 'Com o outro progenitor: {span} ({nights})',
    nights: {
      one: '{n} noite',
      many: '{n} noites',
      other: '{n} noites'
    },
    cycle: 'Dia {day} de 14 — semana {week}, {weekday}',
    nextToThem: '{date} de manhã — vão para o outro progenitor',
    nextToYou: '{date} de manhã — vêm para você',
    prevMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    legendYou: 'Com você',
    legendThem: 'Com o outro progenitor',
    legendTarget: 'Data consultada',
    cellYou: '{date} — com você',
    cellThem: '{date} — com o outro progenitor'
  },
  share: {
    button: 'Copiar link',
    native: 'Compartilhar',
    copied: 'Link copiado.',
    label: 'Link para compartilhar',
    hint: 'O link leva este rodízio e esta data, então abre com a mesma resposta para qualquer pessoa.',
    opened: 'Aberto a partir de um link compartilhado — o rodízio abaixo veio desse link, não da sua própria escolha salva.'
  },
  how: {
    eyebrow: 'O padrão',
    title: 'Um ciclo, catorze dias',
    lead: 'Cada um dos pais fica com os mesmos sete dias a cada catorze. A semana um é o espelho da semana dois — por isso olhar uma única semana nunca basta.',
    week1: 'Semana 1 — você ficou com {pair}',
    week2: 'Semana 2 — tudo se inverte',
    you: 'Você',
    otherParent: 'Outro progenitor',
    note1Title: 'Os dias são contados como pernoites',
    note1Body: 'Uma data pertence a quem fica com as crianças naquela noite. Um fim de semana de sexta a domingo termina na entrega de segunda de manhã, então essa segunda conta para quem inicia o bloco seguinte.',
    note2Title: 'As semanas começam na segunda',
    note2Body: 'O passo 1 pergunta sobre a semana de segunda a domingo em que você está agora. Se hoje for domingo, ainda é a semana que começou seis dias atrás.',
    note3Title: 'Feriados não são considerados',
    note3Body: 'Este é o rodízio puro. Trocas de feriado, semanas de férias e combinados pontuais do seu plano de convivência prevalecem sobre o que aparece aqui.'
  },
  footer: {
    home: 'Início',
    link: 'Aleph Void LLC',
    copy: 'Criado por {link}. © {year} {brand}. Funciona inteiramente no seu navegador; nada é enviado. Não é orientação jurídica — o seu plano de convivência é que vale.'
  }
};
