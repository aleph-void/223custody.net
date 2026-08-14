/* 日本語 */
export default {
  meta: {
    tagline: 'その日、子どもは自分のところ？',
    description: '2-2-3 の共同養育スケジュール専用の、すべてブラウザ内で完結する小さなツール。今週どの2日を過ごしたかを選び、任意の日付を指定すると、その日子どもが自分のところにいるかを教えます。'
  },
  nav: {
    check: '日付を調べる',
    how: '仕組み',
    alephvoid: 'Aleph Void',
    language: '言語'
  },
  hero: {
    badge: '2-2-3 の共同養育スケジュール',
    title: 'その日、子どもは{accent}',
    titleAccent: '自分のところ？',
    subtitle: '2-2-3 のローテーションは14日周期。だから1週間より先の日付は、どうしても当てずっぽうになります。今週どの2日が自分の担当だったかを選び、日付を指定すれば答えが出ます。',
    claim: '{strong} アカウント不要、サーバーなし、データはブラウザの外に出ません。機内でもそのまま使えます。',
    claimStrong: 'すべてブラウザ内で動作します。'
  },
  step1: {
    num: 'ステップ 1',
    title: '今週、子どもと過ごした平日はどの2日ですか？',
    note: '「今週」とは {date} から始まる週のことです。当てはまる組み合わせを選べば、残りの周期はツールが計算します。',
    group: '今週、子どもと過ごした平日2日'
  },
  choice: {
    pair: '{a}・{b}',
    montueSub: '今週末も自分の担当です（金曜から月曜の朝まで）。',
    wedthuSub: '今週末は母親の担当です（金曜から月曜の朝まで）。'
  },
  step2: {
    num: 'ステップ 2',
    title: '調べたい日付を選んでください',
    dateLabel: '調べる日付',
    check: 'この日付を調べる',
    jump: 'ジャンプ',
    today: '今日',
    tomorrow: '明日',
    plusWeek: '+1週間',
    plus30: '+30日',
    plus90: '+90日'
  },
  error: {
    pattern: 'まずステップ 1 で2つのうちどちらかを選んでください。',
    date: '調べる日付を選んでください。'
  },
  result: {
    yes: 'はい',
    no: 'いいえ',
    withYou: 'その夜、子どもは自分のところにいます。',
    withThem: 'その夜、子どもは母親のところにいます。',
    stretchLabel: 'この期間',
    cycleLabel: '周期上の位置',
    nextLabel: '次の引き渡し',
    range: '{from} → {to}',
    stretchYou: '自分のところ：{span}（{nights}）',
    stretchThem: '母親のところ：{span}（{nights}）',
    nights: {
      other: '{n}泊'
    },
    cycle: '14日中 {day} 日目 — 第 {week} 週、{weekday}',
    nextToThem: '{date}の朝 — 母親のところへ',
    nextToYou: '{date}の朝 — 自分のところへ',
    prevMonth: '前の月',
    nextMonth: '次の月',
    legendYou: '自分のところ',
    legendThem: '母親のところ',
    legendTarget: '調べた日付',
    cellYou: '{date} — 自分のところ',
    cellThem: '{date} — 母親のところ'
  },
  share: {
    button: '共有リンクをコピー',
    native: '共有',
    copied: 'リンクをコピーしました。',
    label: '共有リンク',
    hint: 'このリンクには予定と日付が含まれているので、誰が開いても同じ答えが表示されます。',
    opened: '共有リンクから開いています。下の予定はそのリンクの内容で、自分で保存した設定ではありません。'
  },
  how: {
    eyebrow: 'パターン',
    title: '1周期は14日',
    lead: 'どちらの親も14日のうち同じ7日を受け持ちます。1週目と2週目はちょうど鏡写しなので、1週間だけ眺めても答えは出ません。',
    week1: '第1週 — 担当は {pair}',
    week2: '第2週 — すべて入れ替わる',
    you: '自分',
    mother: '母親',
    note1Title: '日数は宿泊で数える',
    note1Body: 'ある日付は、その夜に子どもと過ごす側のものです。金曜から日曜の週末は月曜の朝の引き渡しで終わるため、その月曜は次の期間を始める側に数えます。',
    note2Title: '週は月曜から始まる',
    note2Body: 'ステップ 1 で聞いているのは、いま自分がいる月曜〜日曜の週のことです。今日が日曜でも、6日前に始まったその週を指します。',
    note3Title: '祝日は考慮していません',
    note3Body: 'ここにあるのは基本のローテーションだけです。祝日の交代、長期休暇、単発の交換など、取り決めの内容が常にこの表示より優先されます。'
  },
  footer: {
    home: 'ホーム',
    link: 'Aleph Void LLC',
    copy: '制作：{link}　© {year} {brand}　すべてブラウザ内で動作し、何もアップロードされません。法的助言ではありません — 実際の取り決めが優先されます。'
  }
};
