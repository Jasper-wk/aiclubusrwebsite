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

  const wrapperRef = useRef<HTMLElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)
  const btnRef     = useRef<HTMLDivElement>(null)
  const logoRef    = useRef<HTMLDivElement>(null)
  const arrowRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current || !textRef.current) return

    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop : '(min-width: 1024px)',
        isTablet  : '(min-width: 768px) and (max-width: 1023px)',
        isMobile  : '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isTablet } = context.conditions as {
          isDesktop: boolean; isTablet: boolean
        }

        /*
         * Scale values — must be conservative enough that text fades
         * to opacity:0 BEFORE it visually hits the overflow:hidden boundary.
         *
         * Mobile  (390px vp): widest text line ~200px → overflow at ~1.9x
         *   → fade finishes at 0.55 progress when scale ≈ 1.6x → safe ✓
         * Tablet  (768px vp): widest line ~300px → overflow at ~2.5x
         *   → scale 2.5, fade finishes at 0.55 → scale ≈ 2.0x at fade end → safe ✓
         * Desktop (1280px vp): widest line ~400px → overflow at ~3.2x
         *   → scale 3.2, fade finishes at 0.55 → scale ≈ 2.5x at fade end → safe ✓
         */
        const scaleAmount = isDesktop ? 3.2 : isTablet ? 2.5 : 1.8

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,      // 1s lag — short enough to track without jumping ahead
          },
        })

        // 0–15%: Chrome UI (logo, arrow, buttons) fades out quickly
        tl.to([logoRef.current, arrowRef.current], {
          opacity: 0, duration: 0.15, ease: 'power2.in',
        }, 0)
        tl.to(btnRef.current, {
          opacity: 0, y: -6, duration: 0.15, ease: 'power2.in',
        }, 0)

        // 8–75%: Headline scales up
        tl.fromTo(
          textRef.current,
          { scale: 1, opacity: 1 },
          { scale: scaleAmount, opacity: 1, ease: 'none', duration: 0.7 },
          0.08
        )

        /*
         * Fade starts at 30%, ends at 55%.
         * At 30% progress, scale ≈ 1 + (scale-1) * (0.22/0.7) — always small.
         * Text is fully transparent by 55% progress.
         * This guarantees text vanishes well before it could be clipped.
         * Remaining 45% of scroll: user sees the hero background (dark), no blank.
         */
        tl.to(textRef.current, {
          opacity: 0, ease: 'power1.in', duration: 0.25,
        }, 0.30)

        return () => { tl.kill() }
      }
    )

    return () => mm.revert()
  }, [])

  return (
    /*
     * 300vh wrapper — background:#000 (set in CSS) prevents
     * white body from showing once sticky scrolls away.
     */
    <section
      id="hero"
      ref={wrapperRef}
      className="hero-wrapper"
      style={{ height: '300vh' }}
    >
      {/* 100vh sticky panel — overflow:hidden (set in CSS) prevents layout reflow */}
      <div className="hero-sticky">

        {/* Background slides */}
        <div className="hero-bg absolute inset-0 z-0">
          {images.map((src, i) => (
            <div
              key={src}
              className={`hero-bg-slide ${i === current ? 'active' : 'inactive'}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">

          {/* Logo */}
          <div ref={logoRef} className="mb-5 md:mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-150" />
              <img
                src="/aiclubusrwebsite/logo.jpg"
                alt="艋舺ESG競賽 Logo"
                className="relative w-20 h-20 md:w-28 md:h-28 rounded-full object-cover
                           shadow-2xl border-[3px] border-white/30 mx-auto animate-scale-in"
                style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
              />
            </div>
          </div>

          {/* GSAP scale target */}
          <div ref={textRef} className="hero-scroll-target">
            <div
              className="section-label text-white/50 text-[0.55rem] tracking-[0.5em] uppercase mb-2 animate-fade-in"
              style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
            >
              2026 競賽
            </div>

            <h1
              className="hero-text-shadow text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black
                         text-white tracking-tight leading-[1.15] mb-3 animate-fade-in-up"
              style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
            >
              艋舺商圈
              <br />
              <span className="font-black bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
                ESG 永續消費
              </span>
              <br />
              體驗競賽
            </h1>

            <p
              className="hero-text-shadow text-xs sm:text-sm md:text-base text-white/75
                         max-w-sm md:max-w-lg mx-auto font-medium leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
            >
              在地飲食文化與青銀友善・綠色飲食
              <br className="hidden sm:block" />
              邀請全國大專院校及高中學生共同參與
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={btnRef}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 items-center animate-fade-in-up"
            style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => scrollToSection('timeline')}
              className="w-full sm:w-auto px-7 py-3.5 bg-primary text-white font-bold rounded-2xl
                         hover:bg-primary-dark transition-all hover:scale-105
                         shadow-lg shadow-primary/40 text-sm md:text-base tracking-wide"
            >
              立即報名
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto px-7 py-3.5 matte-glass-dark text-white font-medium rounded-2xl
                         hover:bg-white/12 transition-all hover:scale-105 text-sm md:text-base"
            >
              了解更多
            </button>
          </div>
        </div>

        {/* Scroll arrow */}
        <div
          ref={arrowRef}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow z-10"
        >
          <div className="flex flex-col items-center gap-1.5 text-white/35">
            <span className="text-[0.5rem] tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-6 md:bottom-8 right-5 md:right-8 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
