const ORGANIZERS = [
  {
    type: '指導單位',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    orgs: ['臺北市政府產業發展局（邀請中）', '台北市商業處（邀請中）', '台北市萬華街區發展協會'],
  },
  {
    type: '主辦單位',
    color: 'border-primary/20 bg-green-50',
    badge: 'bg-primary/10 text-primary',
    orgs: [
      '東吳大學商學院',
      '東吳大USR計畫「艋舺商圈永續共創數位加值」',
      '東吳大學人本AI研究中心',
      '東吳大學人工智慧應用社',
    ],
  },
  {
    type: '協辦單位',
    color: 'border-secondary/20 bg-orange-50',
    badge: 'bg-secondary/10 text-secondary',
    orgs: ['東吳大學ESG永續發展研究中心', '東吳大學尤努斯社會企業中心'],
  },
]

export default function OrganizersSection() {
  return (
    <section id="organizers" className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="section-label text-gray-400 text-xs tracking-[0.4em] uppercase scroll-anim mb-2">
          Organizers
        </div>
        <h2 className="text-4xl md:text-5xl font-thin text-center text-gray-900 mb-4 scroll-scale">
          指導・主辦・<span className="font-semibold text-primary">協辦單位</span>
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-20 scroll-anim font-light">
          感謝各單位的支持與協助，共同推動艋舺商圈永續發展
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {ORGANIZERS.map((org, i) => (
            <div key={org.type} className={`scroll-anim stagger-${i + 1} p-7 rounded-3xl border-2 ${org.color}`}>
              <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wider uppercase ${org.badge}`}>
                {org.type}
              </span>
              <ul className="space-y-3">
                {org.orgs.map((name) => (
                  <li key={name} className="flex items-start gap-3 text-gray-700 text-sm font-light leading-snug">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom contact note */}
        <div className="mt-16 text-center scroll-anim">
          <div className="inline-block px-8 py-6 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="text-gray-600 text-sm font-light">
              如有任何問題，歡迎聯繫主辦單位東吳大學商學院
            </p>
            <p className="text-primary text-sm font-medium mt-2">
              東吳大學人工智慧應用社
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
