import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'
import { siteContent } from '../data/site-content'
import type { ServicePageContent } from '../data/service-pages'

const FooterSection = lazy(() =>
  import('../sections/FooterSection').then((m) => ({ default: m.FooterSection })),
)

type ServiceLandingPageProps = {
  page: ServicePageContent
}

export function ServiceLandingPage({ page }: ServiceLandingPageProps) {
  const meta = pageMeta[page.metaKey as keyof typeof pageMeta]
  usePageMeta(meta)

  return (
    <>
      <main id="main-content" className="page-shell">
        <section className="section-shell page-hero" aria-labelledby="service-page-title">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 id="service-page-title">{page.h1}</h1>
          <p className="page-intro">{page.intro}</p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-primary">
              {page.ctaPrimary}
            </Link>
            <Link to={page.relatedLinks[2]?.href ?? '/projects'} className="btn btn-secondary">
              {page.ctaSecondary}
            </Link>
          </div>
        </section>

        <section className="section-shell" aria-labelledby="problems-heading">
          <h2 id="problems-heading">{page.problemHeading}</h2>
          <ul className="service-page-list">
            {page.problems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section-shell" aria-labelledby="offerings-heading">
          <h2 id="offerings-heading">{page.offeringsHeading}</h2>
          <div className="service-offerings-grid">
            {page.offerings.map((offering, index) => (
              <motion.article
                key={offering.title}
                className="service-offering-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {page.technologies && (
          <section className="section-shell" aria-labelledby="tech-heading">
            <h2 id="tech-heading">Technologies & Tools</h2>
            <ul className="tag-cloud" aria-label="Technologies and tools">
              {page.technologies.map((tech) => (
                <li key={tech} className="tag-pill">
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="section-shell" aria-labelledby="local-heading">
          <h2 id="local-heading">
            Serving {siteContent.location.city}, {siteContent.location.country} & Worldwide
          </h2>
          <p className="page-intro">{page.localContext}</p>
          <p className="location-note">
            Based in {siteContent.location.city}, {siteContent.location.region},{' '}
            {siteContent.location.country}. {siteContent.location.serviceArea}.
          </p>
        </section>

        <section className="section-shell" aria-labelledby="related-heading">
          <h2 id="related-heading">Related Services</h2>
          <ul className="related-links-list">
            {page.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-shell cta-banner" aria-label="Get started">
          <h2>{page.ctaHeading}</h2>
          <p>{page.ctaText}</p>
          <div className="hero-cta-group">
            <Link to="/contact#booking" className="btn btn-primary">
              Book a Consultation
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Send a Message
            </Link>
          </div>
        </section>
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FooterSection content={siteContent} />
      </Suspense>
    </>
  )
}
