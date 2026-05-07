import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useBackgroundSlider } from '../hooks/useBackgroundSlider'

gsap.registerPlugin(ScrollTrigger)

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const { images, current } = useBackgroundSlider()

  // ── Refs ──────────────────────────────────────────────
  const wrapperRef    = useRef<HTMLDivElement>(null)  // 300vh 捲動空間
  const textRef       = useRef<HTMLDivElement>(null)  // 放大目標 (標題 + 標語)
  const btnRef        = useRef<HTMLDivElement>(null)  // 按鈕 (先淡出再走)
  const logoRef       = useRef<HTMLDivElement>(null)  // Logo 先淡出
  const arrowRef      = useRef<HTMLDivElement>(null)  // 向下箭頭

  useEffect(() => {
    if (!wrapperRef.current || !textRef.current) return

    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean }
        // 桌面放大 6 倍，手機放大 3 倍（避免溢出）
        const scaleAmount = isDesktop ? 6 : 3

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,         // Apple 慣性滑動感
            // markers: true,   // 調試時開啟這行看觸發點
          },
        })

        // Step 1: 進場時 Logo 和箭頭先提早淡出（不跟著放大）
        tl.to([logoRef.current, arrowRef.current], {
          opacity: 0,
          duration: 0.15,
          ease: 'power1.in',
        }, 0)

        // Step 2: 按鈕也淡出
        tl.to(btnRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.15,
          ease: 'power1.in',
        }, 0)

        // Step 3: 主標題 + 標語放大（核心動畫）
        // 使用 scale() 不改 font-size → GPU 加速
        tl.fromTo(
          textRef.current,
          { scale: 1, opacity: 1 },
          {
            scale: scaleAmount,
            opacity: 1,
            ease: 'none',
            duration: 0.75,
          },
          0.1  // 稍微延後開始，讓 UI 先收整
        )

        // Step 4: 放大到 70% 進度時開始淡出
        tl.to(
          textRef.current,
          {
            opacity: 0,
            ease: 'power1.in',
            duration: 0.25,
          },
          0.65  // 在 timeline 的 65% 開始淡出
        )

        return () => {
          tl.kill()
        }
      }
    )

    return () => mm.revert()
  }, [])

  return (
    /*
     * .hero-wrapper = 300vh 的捲動空間
     * .hero-sticky  = position: sticky 固定在視窗頂部
     */
    <section
      id="hero"
      ref={wrapperRef}
      className="hero-wrapper"
      style={{ height: '300vh' }}
    >
      {/* ── Sticky Container ─────────────────────────── */}
      <div className="hero-sticky">

        {/* 背景圖片輪播（模糊） */}
        <div className="hero-bg absolute inset-0 z-0">
          {images.map((src, i) => (
            <div
              key={src}
              className={`hero-bg-slide ${i === current ? 'active' : 'inactive'}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          {/* 暗色漸層遮罩 — 提高文字對比 */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
        </div>

        {/* ── 主要內容（居中）── */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">

          {/* Logo（捲動時先淡出） */}
          <div ref={logoRef} className="mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/15 blur-2xl scale-150" />
              <img
                src="/aiclubusrwebsite/logo.jpg"
                alt="艋舺ESG競賽 Logo"
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover
                           shadow-2xl border-[3px] border-white/35 mx-auto
                           animate-scale-in"
                style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
              />
            </div>
          </div>

          {/* ── GSAP 放大目標 ──────────────────────────── */}
          <div ref={textRef} className="hero-scroll-target">
            {/* 小標籤 */}
            <div
              className="section-label text-white/55 text-[0.65rem] tracking-[0.45em] uppercase mb-3
                         animate-fade-in"
              style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
            >
              2026 競賽
            </div>

            {/* 主標題 */}
            <h1
              className="hero-text-shadow text-4xl md:text-6xl lg:text-7xl font-thin
                         text-white tracking-tight leading-[1.15] mb-4
                         animate-fade-in-up"
              style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
            >
              艋舺商圈
              <br />
              <span className="font-semibold bg-gradient-to-r from-emerald-300 to-green-400
                               bg-clip-text text-transparent drop-shadow-none">
                ESG 永續消費
              </span>
              <br />
              體驗競賽
            </h1>

            {/* 副標 */}
            <p
              className="hero-text-shadow text-base md:text-lg text-white/80 max-w-xl mx-auto
                         font-light leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
            >
              在地飲食文化與青銀友善・綠色飲食
              <br className="hidden md:block" />
              邀請全國大專院校及高中學生共同參與
            </p>
          </div>

          {/* ── 按鈕（捲動時淡出，不跟著放大）── */}
          <div
            ref={btnRef}
            className="mt-8 flex flex-col sm:flex-row gap-4 items-center
                       animate-fade-in-up"
            style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => scrollToSection('timeline')}
              className="px-8 py-4 bg-primary text-white font-medium rounded-2xl
                         hover:bg-primary-dark transition-all hover:scale-105
                         shadow-lg shadow-primary/40 text-base"
            >
              立即報名
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 matte-glass-dark text-white font-light rounded-2xl
                         hover:bg-white/15 transition-all hover:scale-105 text-base"
            >
              了解更多
            </button>
          </div>
        </div>

        {/* 向下箭頭 */}
        <div
          ref={arrowRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow z-10"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-[0.6rem] tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        {/* 輪播指示點 */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-6 bg-white' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
