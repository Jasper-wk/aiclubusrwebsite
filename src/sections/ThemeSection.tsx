const THEMES = [
  {
    emoji: '🧓',
    title: '高齡者友善飲食設計',
    desc: '軟質餐食、營養規劃、無障礙動線，打造長者友善的用餐空間。',
    tag: 'Age-Friendly',
    color: 'bg-amber-50 border-amber-200',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    emoji: '👩‍🎤',
    title: '青年族群品牌再造',
    desc: '聚會餐飲、紓壓或健身飲食，吸引年輕世代走進萬華。',
    tag: 'Youth Brand',
    color: 'bg-purple-50 border-purple-200',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    emoji: '🥬',
    title: '健康與永續食材應用',
    desc: '在地小農、低碳飲食、惜食行動、青銀共好餐飲，推動食農友好。',
    tag: 'Sustainable',
    color: 'bg-green-50 border-green-200',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    emoji: '🤖',
    title: 'AI 與數據分析導入',
    desc: '顧客數據分析、需求分群、數位轉型工具應用，讓科技走進萬華。',
    tag: 'AI × Digital',
    color: 'bg-blue-50 border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    emoji: '📊',
    title: 'ESG 行動方案與數位行銷',
    desc: '商圈 ESG 策略規劃，結合社群與數位行銷，拓展品牌影響力。',
    tag: 'ESG Strategy',
    color: 'bg-teal-50 border-teal-200',
    tagColor: 'bg-teal-100 text-teal-700',
  },
]

export default function ThemeSection() {
  return (
    <section id="theme" className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-label text-primary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-2">
          Theme
        </div>
        <h2 className="text-4xl md:text-5xl font-thin text-center text-gray-900 mb-4 scroll-scale">
          競賽<span className="font-semibold text-primary">主題</span>
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-6 scroll-anim font-light">
          2026 年度主軸
        </p>

        {/* Year axis badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 scroll-anim">
          <span className="px-6 py-3 bg-primary text-white rounded-full font-medium shadow-md shadow-primary/25">
            🍚 在地飲食文化與青銀友善
          </span>
          <span className="px-6 py-3 bg-secondary text-white rounded-full font-medium shadow-md shadow-secondary/25">
            🌿 綠色飲食
          </span>
        </div>

        {/* Theme Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {THEMES.map((theme, i) => (
            <div
              key={theme.title}
              className={`scroll-anim stagger-${i + 1} card-hover p-7 rounded-3xl border ${theme.color} relative overflow-hidden group`}
            >
              {/* Background blur emoji */}
              <div className="absolute -right-2 -top-2 text-7xl opacity-10 group-hover:opacity-20 transition-opacity select-none">
                {theme.emoji}
              </div>

              <div className="relative">
                <div className="text-3xl mb-4">{theme.emoji}</div>
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${theme.tagColor}`}>
                  {theme.tag}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{theme.title}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{theme.desc}</p>
              </div>
            </div>
          ))}

          {/* Participation info card */}
          <div className="scroll-anim stagger-6 p-7 rounded-3xl bg-gray-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="relative">
              <div className="text-3xl mb-4">✨</div>
              <p className="text-white/60 text-xs tracking-wider uppercase mb-2">企劃方向</p>
              <h3 className="text-lg font-semibold mb-3">可多選方向</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                參賽隊伍可針對以上方向自由組合，提出具創意、可行性與 ESG 理念整合的具體方案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
