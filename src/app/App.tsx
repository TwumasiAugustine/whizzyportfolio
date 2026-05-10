import { lazy, Suspense, useEffect, useState } from 'react'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { GoogleAnalytics } from '../components/GoogleAnalytics'
import { InsightsPopup } from '../components/InsightsPopup'
import { MobileMenu } from '../components/MobileMenu'
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
const ProofSection = lazy(() => import('../sections/ProofSection').then(m => ({ default: m.ProofSection })))
const BlogSection = lazy(() => import('../sections/BlogSection').then(m => ({ default: m.BlogSection })))
const CertificationsSection = lazy(() => import('../sections/CertificationsSection').then(m => ({ default: m.CertificationsSection })))
const LeadMagnetSection = lazy(() => import('../sections/LeadMagnetSection').then(m => ({ default: m.LeadMagnetSection })))
const FaqSection = lazy(() => import('../sections/FaqSection').then(m => ({ default: m.FaqSection })))
const ContactSection = lazy(() => import('../sections/ContactSection').then(m => ({ default: m.ContactSection })))
const FooterSection = lazy(() => import('../sections/FooterSection').then(m => ({ default: m.FooterSection })))

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [showInsightsPopup, setShowInsightsPopup] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll-based lead magnet trigger only (removed time-based trigger)
  useEffect(() => {
    const seen = sessionStorage.getItem('insights-popup-dismissed')
    if (seen === '1') {
      return
    }

    let triggered = false

    // Trigger on 50% scroll depth
    const handleScroll = () => {
      if (triggered) return
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      
      if (scrollPercent >= 50) {
        triggered = true
        setShowInsightsPopup(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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
      <GoogleAnalytics />
      <ScrollProgress />
      <InsightsPopup content={siteContent} open={showInsightsPopup} onClose={closeInsightsPopup} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        brandName={siteContent.brandName}
      />
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
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <a className="hidden desktop-cta btn btn-primary" href="#contact">
          Hire Me
        </a>
      </header>

      <main id="main-content" className="page-shell">
        <HeroSection content={siteContent} />
        <AboutSection />
        <ServicesSection content={siteContent} />
        <ErrorBoundary>
          <Suspense fallback={<div className="section-shell" style={{ minHeight: '400px' }} />}>
            <SkillsSection />
            <PortfolioSection content={siteContent} />
            <TestimonialsSection content={siteContent} />
            <ProofSection content={siteContent} />
            <ProcessSection />
            <CertificationsSection content={siteContent} />
            <BlogSection content={siteContent} />
            <FaqSection content={siteContent} />
            <LeadMagnetSection content={siteContent} onOpenPopup={openInsightsPopup} />
            <ContactSection content={siteContent} />
          </Suspense>
        </ErrorBoundary>
      </main>

      <ErrorBoundary>
        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          <FooterSection content={siteContent} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
