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
         * Architecture: 200vh wrapper → sticky holds for 100vh of scroll.
         * Animation fills the ENTIRE 100vh scroll distance — no dead zone.
         *
         * Timeline breakdown (0 → 1):
         *  0.00 – 0.15 : Logo + arrow + buttons fade out
         *  0.10 – 0.72 : Text scales up (1x → max)
         *  0.65 – 1.00 : Text fades to opacity 0
         *
         * Scale is chosen so text reaches ~70% of viewport width at fade-end.
         * At fade-end (progress=1.0), opacity=0 → never visually clipped.
         */
        const scaleAmount = isDesktop ? 3.0 : isTablet ? 2.2 : 1.6

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom bottom',   // fires when wrapper-bottom hits viewport-bottom
            scrub: 0.8,             // short lag → snappy, tracks user intent
          },
        })

        // 0–15%: chrome UI (logo, arrow, buttons) fades first
        tl.to([logoRef.current, arrowRef.current], {
          opacity: 0, duration: 0.15, ease: 'power2.in',
        }, 0)
        tl.to(btnRef.current, {
          opacity: 0, y: -6, duration: 0.15, ease: 'power2.in',
        }, 0)

        // 10–72%: headline block scales up
        tl.fromTo(
          textRef.current,
          { scale: 1, opacity: 1 },
          { scale: scaleAmount, ease: 'none', duration: 0.62 },
          0.10
        )

        // 65–100%: fade out — overlaps with final scale phase
        // Text is never visible when it would overflow; opacity hits 0 at end
        tl.to(textRef.current, {
          opacity: 0, ease: 'power1.in', duration: 0.35,
        }, 0.65)

        return () => { tl.kill() }
      }
    )

    return () => mm.revert()
  }, [])

  return (
    /*
     * 200vh = sticky holds for exactly 100vh of scrolling.
     * No dead scroll zone — animation fills the entire range.
     * background:#000 on both wrapper + sticky (set in CSS) prevents any white flash.
     */
    <section
      id="hero"
      ref={wrapperRef}
      className="hero-wrapper"
      style={{ height: '200vh' }}
    >
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
