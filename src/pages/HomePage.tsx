import { lazy, Suspense } from 'react'
import { useOutletContext } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'
import { siteContent } from '../data/site-content'
import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'
import { ServicesSection } from '../sections/ServicesSection'
import { SkillsSection } from '../sections/SkillsSection'
import { PortfolioSection } from '../sections/PortfolioSection'
import { BlogSection } from '../sections/BlogSection'
import { ContactSection } from '../sections/ContactSection'
import { BookingSection } from '../sections/BookingSection'
import { CertificationsSection } from '../sections/CertificationsSection'

const TestimonialsSection = lazy(() =>
  import('../sections/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection })),
)
const ProofSection = lazy(() => import('../sections/ProofSection').then((m) => ({ default: m.ProofSection })))
const ProcessSection = lazy(() => import('../sections/ProcessSection').then((m) => ({ default: m.ProcessSection })))
const LeadMagnetSection = lazy(() =>
  import('../sections/LeadMagnetSection').then((m) => ({ default: m.LeadMagnetSection })),
)
const FaqSection = lazy(() => import('../sections/FaqSection').then((m) => ({ default: m.FaqSection })))
const FooterSection = lazy(() => import('../sections/FooterSection').then((m) => ({ default: m.FooterSection })))

type OutletContext = { openInsightsPopup: () => void }

export function HomePage() {
  usePageMeta(pageMeta.home)
  const { openInsightsPopup } = useOutletContext<OutletContext>()

  return (
    <>
      <main id="main-content" className="page-shell">
        <HeroSection content={siteContent} />
        <AboutSection compact />
        <ServicesSection content={siteContent} compact />
        <SkillsSection compact />
        <PortfolioSection content={siteContent} limit={6} showViewAll />
        <Suspense fallback={<div className="section-shell" style={{ minHeight: '400px' }} />}>
          <TestimonialsSection content={siteContent} />
          <ProofSection content={siteContent} />
          <ProcessSection />
          <CertificationsSection content={siteContent} />
          <BlogSection content={siteContent} limit={3} showViewAll />
          <FaqSection content={siteContent} />
          <LeadMagnetSection content={siteContent} onOpenPopup={openInsightsPopup} />
          <BookingSection content={siteContent} />
          <ContactSection content={siteContent} />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FooterSection content={siteContent} />
      </Suspense>
    </>
  )
}
