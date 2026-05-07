export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 bg-bg-warm">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="section-label text-primary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-2">
          About
        </div>
        <h2 className="text-4xl md:text-5xl font-thin text-center text-gray-900 mb-6 scroll-scale">
          活動<span className="font-semibold text-primary">緣起</span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-20 scroll-anim font-light leading-relaxed">
          結合商學教育、ESG 理念與在地文化，推動萬華商圈永續轉型
        </p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: image */}
          <div className="scroll-anim-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/aiclubusrwebsite/images/hero-1.jpg"
                alt="萬華商圈"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-light tracking-wider opacity-80">Wanhua District</p>
                <p className="text-xl font-semibold">萬華・艋舺</p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="scroll-anim-right space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              為呼應<strong className="text-primary font-medium">大學社會責任（USR）</strong>精神、強化商學 ESG 教育，並結合傳統商圈永續轉型需求，特舉辦「艋舺商圈ESG永續消費體驗企劃書提案競賽」。
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              本競賽以萬華商圈為實作場域，廣邀全國大專院校及高中學生共同參與，以永續消費為核心，運用青年創新思維提出創意提案。
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              透過青年創意與跨域思考，推廣艋舺在地飲食文化，發展兼顧<strong className="text-secondary font-medium">高齡友善、青年友善與環境友善</strong>的永續消費體驗，吸引更多人走進商圈、認識艋舺。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: '12', label: '合作店家' },
                { num: '4', label: '參賽人數' },
                { num: 'NT$', label: '最高金獎 2萬' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <p className="text-2xl font-semibold text-primary">{stat.num}</p>
                  <p className="text-xs text-gray-500 mt-1 font-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ESG Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🌿',
              title: '環境友善 (E)',
              desc: '綠色飲食、低碳食材、惜食行動，打造永續餐飲生態。',
              color: 'from-green-50 to-emerald-50',
              border: 'border-green-200',
            },
            {
              icon: '👥',
              title: '社會共好 (S)',
              desc: '青銀共融、高齡友善設計、在地小農連結，促進社會包容。',
              color: 'from-orange-50 to-amber-50',
              border: 'border-orange-200',
            },
            {
              icon: '📊',
              title: '治理創新 (G)',
              desc: 'AI 數據分析、數位轉型工具應用，推動商圈智慧治理。',
              color: 'from-blue-50 to-indigo-50',
              border: 'border-blue-200',
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className={`scroll-anim card-hover p-8 rounded-3xl bg-gradient-to-br ${pillar.color} border ${pillar.border}`}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
