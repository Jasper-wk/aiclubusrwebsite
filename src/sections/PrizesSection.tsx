const PRIZES = {
  university: [
    { rank: '金獎', amount: '20,000', icon: '🥇', color: 'from-yellow-500/20 to-amber-500/10 border-yellow-500/30' },
    { rank: '銀獎', amount: '10,000', icon: '🥈', color: 'from-gray-400/20 to-slate-500/10 border-gray-400/30' },
    { rank: '銅獎', amount: '6,000', icon: '🥉', color: 'from-orange-400/20 to-amber-600/10 border-orange-400/30' },
    { rank: '佳作（若干）', amount: '3,000', icon: '🎖️', color: 'from-white/10 to-white/5 border-white/15' },
  ],
  highschool: [
    { rank: '金獎', amount: '10,000', icon: '🥇', color: 'from-yellow-500/20 to-amber-500/10 border-yellow-500/30' },
    { rank: '銀獎', amount: '6,000', icon: '🥈', color: 'from-gray-400/20 to-slate-500/10 border-gray-400/30' },
    { rank: '銅獎', amount: '3,000', icon: '🥉', color: 'from-orange-400/20 to-amber-600/10 border-orange-400/30' },
    { rank: '佳作（若干）', amount: '1,000', icon: '🎖️', color: 'from-white/10 to-white/5 border-white/15' },
  ],
}

export default function PrizesSection() {
  return (
    <section id="prizes" className="py-28 px-4 bg-prize-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="section-label text-white/40 text-xs tracking-[0.4em] uppercase scroll-anim mb-2">
          Prizes
        </div>
        <h2 className="text-4xl md:text-5xl font-thin text-center text-white mb-4 scroll-scale">
          獎金<span className="font-semibold text-accent">資訊</span>
        </h2>
        <p className="text-center text-white/50 max-w-xl mx-auto mb-20 scroll-anim font-light">
          若未達得獎標準得從缺。完整繳交決賽資料之隊伍，每位隊員及指導老師皆致贈活動紀念品。
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* University */}
          <div className="scroll-anim-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-white/10 text-white rounded-xl font-medium text-sm border border-white/15">
                🎓 大專院校組
              </span>
            </div>
            <div className="space-y-3">
              {PRIZES.university.map((prize, i) => (
                <div
                  key={prize.rank}
                  className={`scroll-anim stagger-${i + 1} p-5 rounded-2xl border bg-gradient-to-r ${prize.color} flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{prize.icon}</span>
                    <span className="text-white font-medium">{prize.rank}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-accent font-semibold text-xl">NT$ {prize.amount}</span>
                    <span className="text-white/50 text-xs ml-1">元</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* High School */}
          <div className="scroll-anim-right">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-white/10 text-white rounded-xl font-medium text-sm border border-white/15">
                🏫 高中組
              </span>
            </div>
            <div className="space-y-3">
              {PRIZES.highschool.map((prize, i) => (
                <div
                  key={prize.rank}
                  className={`scroll-anim stagger-${i + 1} p-5 rounded-2xl border bg-gradient-to-r ${prize.color} flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{prize.icon}</span>
                    <span className="text-white font-medium">{prize.rank}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-accent font-semibold text-xl">NT$ {prize.amount}</span>
                    <span className="text-white/50 text-xs ml-1">元</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate note */}
        <div className="mt-12 text-center scroll-anim">
          <p className="text-white/40 text-sm font-light">
            🎖 得獎隊伍頒發獎狀 · 入選決賽者頒發入選決賽證明 · 完整參賽者提供參賽證明
          </p>
        </div>
      </div>
    </section>
  )
}
