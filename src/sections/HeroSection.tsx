import { ChevronDown } from 'lucide-react'
import { useBackgroundSlider } from '../hooks/useBackgroundSlider'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const { images, current } = useBackgroundSlider()

  return (
    <section id="hero" className="hero-wrapper">
      {/* Blurred Background Slides */}
      <div className="hero-bg">
        {images.map((src, i) => (
          <div
            key={src}
            className={`hero-bg-slide ${i === current ? 'active' : 'inactive'}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45 z-[1]" />
      </div>

      {/* Content */}
      <div className="hero-content flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl scale-150" />
            <img
              src="/aiclubusrwebsite/logo.jpg"
              alt="艋舺ESG競賽 Logo"
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-2xl border-4 border-white/30 mx-auto"
            />
          </div>
        </div>

        {/* Label */}
        <div
          className="animate-fade-in mb-4"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="section-label text-white/60 text-xs tracking-[0.4em] uppercase">
            2026 競賽
          </div>
        </div>

        {/* Main Title */}
        <h1
          className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-thin text-white tracking-tight leading-tight mb-4"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          艋舺商圈
          <br />
          <span className="font-semibold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
            ESG 永續消費
          </span>
          <br />
          體驗競賽
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-4 font-light leading-relaxed"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          在地飲食文化與青銀友善・綠色飲食
          <br className="hidden md:block" />
          邀請全國大專院校及高中學生共同參與
        </p>

        {/* Year badge */}
        <div
          className="animate-fade-in mb-10"
          style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/25 text-white/60 text-sm tracking-widest">
            2026 年度主軸
          </span>
        </div>

        {/* CTA Buttons — Cubeline style */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 items-center"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('timeline')}
            className="px-8 py-4 bg-primary text-white font-medium rounded-2xl hover:bg-primary-dark transition-all hover:scale-105 shadow-lg shadow-primary/40 text-base"
          >
            立即報名
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 matte-glass-dark text-white font-light rounded-2xl hover:bg-white/10 transition-all hover:scale-105 text-base"
          >
            了解更多
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Slide indicators */}
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
    </section>
  )
}
