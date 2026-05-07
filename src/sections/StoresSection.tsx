const STORES = [
  { id: 1, name: '忠義號', category: '傳統美食' },
  { id: 2, name: '川業肉圓', category: '在地小吃' },
  { id: 3, name: '二和珍傳統餅鋪', category: '傳統糕點' },
  { id: 4, name: '雲水食堂', category: '健康料理' },
  { id: 5, name: 'CURA PIZZA', category: '創意餐飲' },
  { id: 6, name: '坐坐吧', category: '休閒飲食' },
  { id: 7, name: '上官木桶和牛海鮮火鍋', category: '精緻火鍋' },
  { id: 8, name: '布田食品 艋舺老爐火花生糖', category: '傳統糖果' },
  { id: 9, name: '一肥仔', category: '在地美食' },
  { id: 10, name: '一鑫鵝肉', category: '傳統料理' },
  { id: 11, name: '家辣麻辣鴨血', category: '特色小吃' },
  { id: 12, name: '唯星蛋糕', category: '甜點烘焙' },
]

const CATEGORY_COLORS: Record<string, string> = {
  '傳統美食': 'bg-orange-100 text-orange-700',
  '在地小吃': 'bg-red-100 text-red-700',
  '傳統糕點': 'bg-yellow-100 text-yellow-800',
  '健康料理': 'bg-green-100 text-green-700',
  '創意餐飲': 'bg-purple-100 text-purple-700',
  '休閒飲食': 'bg-blue-100 text-blue-700',
  '精緻火鍋': 'bg-rose-100 text-rose-700',
  '傳統糖果': 'bg-amber-100 text-amber-700',
  '在地美食': 'bg-teal-100 text-teal-700',
  '傳統料理': 'bg-indigo-100 text-indigo-700',
  '特色小吃': 'bg-pink-100 text-pink-700',
  '甜點烘焙': 'bg-fuchsia-100 text-fuchsia-700',
}

export default function StoresSection() {
  return (
    <section id="stores" className="py-28 px-4 bg-bg-warm">
      <div className="max-w-6xl mx-auto">
        <div className="section-label text-secondary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-2">
          Partner Stores
        </div>
        <h2 className="text-4xl md:text-5xl font-thin text-center text-gray-900 mb-4 scroll-scale">
          合作<span className="font-semibold text-secondary">店家</span>
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-6 scroll-anim font-light leading-relaxed">
          本次競賽設有 12 家合作店家，每隊需從名單中挑選一家作為提案對象，設計完整行銷企劃案。
        </p>
        <div className="text-center mb-16 scroll-anim">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            每隊選擇 1 家店進行提案
          </span>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {STORES.map((store, i) => (
            <div
              key={store.id}
              className={`scroll-anim stagger-${Math.min(i + 1, 6)} card-hover matte-glass p-5 rounded-2xl group cursor-default`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl font-thin text-gray-200 leading-none">
                  {String(store.id).padStart(2, '0')}
                </span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[store.category]}`}>
                  {store.category}
                </span>
              </div>
              <h3 className="text-gray-800 font-medium leading-snug group-hover:text-secondary transition-colors">
                {store.name}
              </h3>
              <div className="mt-4 h-0.5 w-0 bg-secondary rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10 scroll-anim font-light">
          ＊每家店只可由一隊參賽者提案，請提早確認選定店家。
        </p>
      </div>
    </section>
  )
}
