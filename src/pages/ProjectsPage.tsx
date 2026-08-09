import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'
import { siteContent } from '../data/site-content'
import { SectionTitle } from '../components/SectionTitle'
import { PortfolioSection } from '../sections/PortfolioSection'

const FooterSection = lazy(() => import('../sections/FooterSection').then((m) => ({ default: m.FooterSection })))

export function ProjectsPage() {
  usePageMeta(pageMeta.projects)

  return (
    <>
      <main id="main-content" className="page-shell">
        <section className="section-shell page-hero" aria-labelledby="projects-page-title">
          <SectionTitle
            eyebrow="Portfolio"
            title="Projects & Case Studies"
            blurb="Full-stack web applications, SEO case studies, AI-powered apps, marketing websites, and performance optimization projects."
            headingLevel="h1"
          />
        </section>
        <PortfolioSection content={siteContent} />
        <section className="section-shell cta-banner" aria-label="Start a project">
          <h2>Have a project in mind?</h2>
          <p>Let's discuss your goals and build something that performs — technically and commercially.</p>
          <Link to="/contact" className="btn btn-primary">
            Start a Project
          </Link>
        </section>
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FooterSection content={siteContent} />
      </Suspense>
    </>
  )
}
