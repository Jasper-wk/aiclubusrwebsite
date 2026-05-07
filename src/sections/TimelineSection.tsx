const MILESTONES = [
  { date: '5月25日', label: '開放報名', desc: '競賽正式開放報名，請盡早組隊', icon: '🚀', active: true },
  { date: '7月2日', label: '說明會與工作坊', desc: '自由報名參加，獲得更多競賽資訊與指導', icon: '📚', active: false },
  { date: '8月2日', label: '報名與初賽資料繳件截止', desc: '書面企劃書（A4 10–15頁）完整繳交', icon: '📋', active: false },
  { date: '8月13日', label: '決賽入選名單公告', desc: '初賽結果公告，晉級隊伍名單發布', icon: '📢', active: false },
  { date: '9月10日', label: '決賽資料繳件截止', desc: '修改後企劃書（A4 10–20頁）及簡報檔 PPT', icon: '📝', active: false },
  { date: '10月3日', label: '決賽暨頒獎典禮', desc: '口頭簡報、評審提問、得獎公佈與頒獎', icon: '🏆', active: false },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-28 px-4 bg-bg-warm">
      <div className="max-w-4xl mx-auto">
        <div className="section-label text-primary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-2">
          Schedule
        </div>
        <h2 className="text-4xl md:text-5xl font-thin text-center text-gray-900 mb-4 scroll-scale">
          重要<span className="font-semibold text-primary">時程</span>
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-20 scroll-anim font-light">
          競賽流程與關鍵截止日期一覽
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-8">
            {MILESTONES.map((m, i) => (
              <div
                key={m.date}
                className={`scroll-anim stagger-${Math.min(i + 1, 6)} relative flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div
                    className={`inline-block p-5 rounded-2xl ${
                      m.active
                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                        : 'matte-glass'
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-xl">{m.icon}</span>
                      <p className={`text-sm font-medium ${m.active ? 'text-white/80' : 'text-primary'}`}>
                        {m.date}
                      </p>
                    </div>
                    <h3 className={`font-semibold mb-1 ${m.active ? 'text-white' : 'text-gray-800'}`}>
                      {m.label}
                    </h3>
                    <p className={`text-sm font-light ${m.active ? 'text-white/70' : 'text-gray-500'}`}>
                      {m.desc}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-white items-center justify-center z-10">
                  {m.active && (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>

                {/* Empty half */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Register CTA */}
        <div className="mt-20 text-center scroll-anim">
          <div className="inline-block p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/30">
            <p className="text-white/80 text-sm mb-2">報名截止</p>
            <p className="text-3xl font-semibold mb-1">8 月 2 日</p>
            <p className="text-white/70 text-sm mb-6">把握報名機會，展現青年創意！</p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
            >
              立即報名 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
