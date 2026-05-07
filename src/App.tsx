import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ThemeSection from './sections/ThemeSection'
import StoresSection from './sections/StoresSection'
import RulesSection from './sections/RulesSection'
import TimelineSection from './sections/TimelineSection'
import PrizesSection from './sections/PrizesSection'
import OrganizersSection from './sections/OrganizersSection'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import './index.css'

export default function App() {
  useScrollAnimation()

  // Re-run observer when DOM changes (for sections loaded after initial render)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger a scroll to re-evaluate visible elements
      window.dispatchEvent(new Event('scroll'))
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-bg-warm">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ThemeSection />
        <StoresSection />
        <RulesSection />
        <TimelineSection />
        <PrizesSection />
        <OrganizersSection />
      </main>
      <Footer />
    </div>
  )
}
