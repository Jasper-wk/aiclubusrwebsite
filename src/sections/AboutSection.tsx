import { Users, Leaf, BarChart3 } from 'lucide-react'
import AnimatedTitle from '../components/AnimatedTitle'

const ESG_PILLARS = [
  {
    letter: 'E',
    icon: Leaf,
    title: '環境友善',
    desc: '綠色飲食、低碳食材、惜食行動，打造永續餐飲生態。',
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    letterColor: 'text-green-600',
    iconColor: 'text-green-500',
  },
  {
    letter: 'S',
    icon: Users,
    title: '社會共好',
    desc: '青銀共融、高齡友善設計、在地小農連結，促進社會包容。',
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    letterColor: 'text-orange-600',
    iconColor: 'text-orange-500',
  },
  {
    letter: 'G',
    icon: BarChart3,
    title: '治理創新',
    desc: 'AI 數據分析、數位轉型工具應用，推動商圈智慧治理。',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    letterColor: 'text-blue-600',
    iconColor: 'text-blue-500',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 bg-bg-warm">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label text-primary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-4">
            About
          </div>
          <AnimatedTitle
            text="活動緣起"
            highlight="緣起"
            highlightClass="text-primary"
            className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
          />
          <p className="mt-6 text-center text-gray-500 max-w-2xl mx-auto scroll-anim font-medium leading-relaxed">
            結合商學教育、ESG 理念與在地文化，推動萬華商圈永續轉型
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          {/* Left: image */}
          <div className="scroll-anim-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/aiclubusrwebsite/images/hero-1.jpg"
                alt="萬華商圈"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-medium tracking-[0.25em] opacity-70 uppercase">Wanhua District</p>
                <p className="text-2xl font-black mt-1">萬華・艋舺</p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="scroll-anim-right space-y-5">
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              為呼應<strong className="text-primary font-bold">大學社會責任（USR）</strong>精神、強化商學 ESG 教育，並結合傳統商圈永續轉型需求，特舉辦「艋舺商圈ESG永續消費體驗企劃書提案競賽」。
            </p>
            <p className="text-gray-600 leading-relaxed font-medium">
              本競賽以萬華商圈為實作場域，廣邀全國大專院校及高中學生共同參與，以永續消費為核心，運用青年創新思維提出創意提案。
            </p>
            <p className="text-gray-600 leading-relaxed font-medium">
              透過青年創意與跨域思考，推廣艋舺在地飲食文化，發展兼顧<strong className="text-secondary font-bold">高齡友善、青年友善與環境友善</strong>的永續消費體驗。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: '12', label: '合作店家' },
                { num: '2–4', label: '參賽人數/隊' },
                { num: '2萬', label: '最高金獎獎金' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <p className="text-2xl font-black text-primary">{stat.num}</p>
                  <p className="text-xs text-gray-500 mt-1 font-semibold tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ESG Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {ESG_PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`scroll-anim card-hover p-8 rounded-3xl bg-gradient-to-br ${pillar.color} border ${pillar.border}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-4xl font-black ${pillar.letterColor}`}>{pillar.letter}</span>
                  <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-lg font-black text-gray-800 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
