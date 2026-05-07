const SCORES = [
  { label: '企劃書架構完整性', desc: '問題、目標、策略、執行與基本分析', pct: 20, color: 'bg-blue-500' },
  { label: 'ESG 議題整合程度', desc: '在地文化、高齡/青年需求、綠色飲食、食農教育', pct: 25, color: 'bg-green-500' },
  { label: '提案創新與數位應用', desc: '數據分析與數位行銷之運用', pct: 25, color: 'bg-purple-500' },
  { label: '實務可行性與落地效益', desc: '方案可行性、市場評估、執行效益', pct: 30, color: 'bg-primary' },
]

export default function RulesSection() {
  return (
    <section id="rules" className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="section-label text-primary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-2">
          Competition Rules
        </div>
        <h2 className="text-4xl md:text-5xl font-thin text-center text-gray-900 mb-4 scroll-scale">
          競賽<span className="font-semibold text-primary">辦法</span>
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-20 scroll-anim font-light">
          了解參賽資格、競賽流程與評分標準
        </p>

        {/* Eligibility */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="scroll-anim-left p-8 rounded-3xl bg-primary/5 border border-primary/15">
            <h3 className="text-xl font-semibold text-primary mb-4">🎓 參賽資格</h3>
            <ul className="space-y-3 text-gray-700 font-light">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                全國大專院校及高中學生（含當年畢業者）
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                可跨校、跨系組隊參加
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                每隊 <strong>2 至 4 人</strong>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                需邀請一位<strong>指導老師</strong>提供專業輔導
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <span className="px-4 py-2 bg-primary text-white text-sm rounded-xl">大專院校組</span>
              <span className="px-4 py-2 bg-secondary text-white text-sm rounded-xl">高中組</span>
            </div>
          </div>

          <div className="scroll-anim-right p-8 rounded-3xl bg-secondary/5 border border-secondary/15">
            <h3 className="text-xl font-semibold text-secondary mb-4">📋 競賽方式</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              每隊參賽者需從「合作店家」名單中挑選一家店作為提案對象，針對該店設計完整行銷企劃案。
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              企劃內容可涵蓋品牌再造、永續飲食、數位轉型、顧客體驗等方向，並提出具創意、可行性與 ESG 理念整合的具體方案，以<strong>書面企劃與簡報</strong>方式呈現。
            </p>
          </div>
        </div>

        {/* Competition Phases — Stepper */}
        <div className="space-y-6 mb-20">
          <h3 className="text-2xl font-light text-gray-800 text-center mb-10 scroll-anim">
            競賽流程
          </h3>
          {[
            {
              phase: '初賽',
              type: '書面審查',
              icon: '📄',
              items: [
                '繳交企劃書（A4 10–15頁，含市場分析、提案與ESG關聯性、經濟效益評估等）',
                '完整繳交者，每位隊員及指導老師皆提供參賽證明',
                '選出若干隊伍進入決賽',
              ],
              color: 'border-blue-300 bg-blue-50',
              badge: 'bg-blue-500',
            },
            {
              phase: '決賽',
              type: '簡報發表',
              icon: '🎤',
              items: [
                '繳交修改後完整企劃書（A4 10–20頁）及簡報檔（PPT）',
                '口頭簡報 10 分鐘，另安排專家評審現場提問',
                '完整繳交者，每位隊員及指導老師致贈活動紀念品',
                '得獎者頒發獎狀；未得獎者頒發入選決賽證明',
              ],
              color: 'border-primary/30 bg-green-50',
              badge: 'bg-primary',
            },
          ].map((step, i) => (
            <div key={step.phase} className={`scroll-anim stagger-${i + 1} p-7 rounded-3xl border-2 ${step.color}`}>
              <div className="flex items-center gap-4 mb-4">
                <span className={`w-10 h-10 rounded-full ${step.badge} text-white flex items-center justify-center font-bold text-sm`}>
                  0{i + 1}
                </span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{step.type}</p>
                  <h4 className="text-lg font-semibold text-gray-800">{step.phase}</h4>
                </div>
                <span className="ml-auto text-2xl">{step.icon}</span>
              </div>
              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 font-light text-sm">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scoring */}
        <div className="scroll-anim p-8 rounded-3xl bg-gray-950 text-white">
          <h3 className="text-xl font-semibold mb-8 text-center">📊 評分標準</h3>
          <div className="space-y-6">
            {SCORES.map((score) => (
              <div key={score.label}>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="font-medium text-white">{score.label}</p>
                    <p className="text-xs text-white/50 mt-0.5">{score.desc}</p>
                  </div>
                  <span className="text-2xl font-thin text-white/80 ml-4 shrink-0">
                    {score.pct}%
                  </span>
                </div>
                <div className="score-bar-track">
                  <div
                    className={`score-bar-fill ${score.color}`}
                    style={{ width: `${score.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
