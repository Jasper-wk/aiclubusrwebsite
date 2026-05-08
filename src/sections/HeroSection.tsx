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
        // Three breakpoints — each gets its own safe scale
        isDesktop : '(min-width: 1024px)',
        isTablet  : '(min-width: 768px) and (max-width: 1023px)',
        isMobile  : '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isTablet } = context.conditions as {
          isDesktop: boolean
          isTablet: boolean
        }

        /*
         * Scale values deliberately conservative:
         * — text uses white-space:nowrap (see index.css)
         * — opacity reaches 0 BEFORE text edge hits viewport
         * — this guarantees no clipping on any device
         */
        const scaleAmount = isDesktop ? 4.5 : isTablet ? 3 : 2.2

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          },
        })

        // UI chrome fades out first (Logo, arrow, buttons)
        tl.to([logoRef.current, arrowRef.current], {
          opacity: 0,
          duration: 0.12,
          ease: 'power2.in',
        }, 0)

        tl.to(btnRef.current, {
          opacity: 0,
          y: -8,
          duration: 0.12,
          ease: 'power2.in',
        }, 0)

        // Core: scale the headline block
        tl.fromTo(
          textRef.current,
          { scale: 1, opacity: 1 },
          {
            scale: scaleAmount,
            opacity: 1,
            ease: 'none',
            duration: 0.7,
          },
          0.08
        )

        /*
         * Fade-out begins at 50% of the timeline scroll progress.
         * At scale=4.5 the text is already visually "filling" the screen,
         * so fading at 50% ensures it's gone before edges are cropped.
         */
        tl.to(textRef.current, {
          opacity: 0,
          ease: 'power2.in',
          duration: 0.3,
        }, 0.5)

        return () => { tl.kill() }
      }
    )

    return () => mm.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={wrapperRef}
      className="hero-wrapper"
      style={{ height: '300vh' }}
    >
      {/* ── Sticky Viewport ─────────────────────────────── */}
      <div className="hero-sticky">

        {/* Background */}
        <div className="hero-bg absolute inset-0 z-0">
          {images.map((src, i) => (
            <div
              key={src}
              className={`hero-bg-slide ${i === current ? 'active' : 'inactive'}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/38 to-black/65" />
        </div>

        {/* ── Main Content ──────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">

          {/* Logo */}
          <div ref={logoRef} className="mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/12 blur-2xl scale-150" />
              <img
                src="/aiclubusrwebsite/logo.jpg"
                alt="艋舺ESG競賽 Logo"
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover
                           shadow-2xl border-[3px] border-white/30 mx-auto animate-scale-in"
                style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
              />
            </div>
          </div>

          {/* ── GSAP Scale Target ────────────────────────── */}
          <div ref={textRef} className="hero-scroll-target">

            {/* Small eyebrow label */}
            <div
              className="section-label text-white/50 text-[0.6rem] tracking-[0.5em] uppercase mb-3 animate-fade-in"
              style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
            >
              2026 競賽
            </div>

            {/* Main headline — BOLD */}
            <h1
              className="hero-text-shadow text-4xl md:text-6xl lg:text-7xl font-black
                         text-white tracking-tight leading-[1.1] mb-4 animate-fade-in-up"
              style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
            >
              艋舺商圈
              <br />
              <span className="font-black bg-gradient-to-r from-emerald-300 to-green-400
                               bg-clip-text text-transparent">
                ESG 永續消費
              </span>
              <br />
              體驗競賽
            </h1>

            {/* Subtitle */}
            <p
              className="hero-text-shadow text-sm md:text-base text-white/75 max-w-lg mx-auto
                         font-medium leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
            >
              在地飲食文化與青銀友善・綠色飲食
              <br className="hidden md:block" />
              邀請全國大專院校及高中學生共同參與
            </p>
          </div>

          {/* ── CTA Buttons ──────────────────────────────── */}
          <div
            ref={btnRef}
            className="mt-8 flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up"
            style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => scrollToSection('timeline')}
              className="px-8 py-4 bg-primary text-white font-bold rounded-2xl
                         hover:bg-primary-dark transition-all hover:scale-105
                         shadow-lg shadow-primary/40 text-base tracking-wide"
            >
              立即報名
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 matte-glass-dark text-white font-medium rounded-2xl
                         hover:bg-white/12 transition-all hover:scale-105 text-base"
            >
              了解更多
            </button>
          </div>
        </div>

        {/* Scroll arrow */}
        <div
          ref={arrowRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow z-10"
        >
          <div className="flex flex-col items-center gap-2 text-white/35">
            <span className="text-[0.55rem] tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-6 bg-white' : 'w-2 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
