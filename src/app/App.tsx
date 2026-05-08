import { lazy, Suspense, useEffect, useState } from 'react'
import { InsightsPopup } from '../components/InsightsPopup'
import { ScrollProgress } from '../components/ScrollProgress'
import { siteContent } from '../data/site-content'
import { AboutSection } from '../sections/AboutSection'
import { HeroSection } from '../sections/HeroSection'
import { ServicesSection } from '../sections/ServicesSection'

// Lazy load below-the-fold sections
const SkillsSection = lazy(() => import('../sections/SkillsSection').then(m => ({ default: m.SkillsSection })))
const PortfolioSection = lazy(() => import('../sections/PortfolioSection').then(m => ({ default: m.PortfolioSection })))
const ProcessSection = lazy(() => import('../sections/ProcessSection').then(m => ({ default: m.ProcessSection })))
const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })))
const LeadMagnetSection = lazy(() => import('../sections/LeadMagnetSection').then(m => ({ default: m.LeadMagnetSection })))
const FaqSection = lazy(() => import('../sections/FaqSection').then(m => ({ default: m.FaqSection })))
const ContactSection = lazy(() => import('../sections/ContactSection').then(m => ({ default: m.ContactSection })))
const FooterSection = lazy(() => import('../sections/FooterSection').then(m => ({ default: m.FooterSection })))

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [showInsightsPopup, setShowInsightsPopup] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('insights-popup-dismissed')
    if (seen === '1') {
      return
    }

    const timer = window.setTimeout(() => {
      setShowInsightsPopup(true)
    }, 15000)

    return () => window.clearTimeout(timer)
  }, [])

  const closeInsightsPopup = () => {
    sessionStorage.setItem('insights-popup-dismissed', '1')
    setShowInsightsPopup(false)
  }

  const openInsightsPopup = () => {
    setShowInsightsPopup(true)
  }

  return (
    <>
      <ScrollProgress />
      <InsightsPopup content={siteContent} open={showInsightsPopup} onClose={closeInsightsPopup} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header" aria-label="Main header">
        <p className="brand-mark">{siteContent.brandName}</p>
        <nav aria-label="Primary navigation" className="top-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-secondary nav-cta" href="#contact">
          Hire Me
        </a>
      </header>

      <main id="main-content" className="page-shell">
        <HeroSection content={siteContent} />
        <AboutSection />
        <ServicesSection content={siteContent} />
        <Suspense fallback={<div className="section-shell" style={{ minHeight: '400px' }} />}>
          <SkillsSection content={siteContent} />
          <PortfolioSection content={siteContent} />
          <ProcessSection />
          <TestimonialsSection content={siteContent} />
          <FaqSection content={siteContent} />
          <LeadMagnetSection content={siteContent} onOpenPopup={openInsightsPopup} />
          <ContactSection content={siteContent} />
        </Suspense>
      </main>

      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FooterSection content={siteContent} />
      </Suspense>
    </>
  )
}

export default App
