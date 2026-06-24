import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  FaCode,
  FaSearch,
  FaFileAlt,
  FaLink,
  FaMapMarkerAlt,
  FaBuilding,
  FaRobot,
  FaChartLine,
  FaHashtag,
  FaBullseye,
  FaEnvelope,
  FaFunnelDollar,
  FaBrain,
} from 'react-icons/fa'
import { lazy, Suspense } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'
import { serviceCatalog } from '../data/service-catalog'
import { siteContent } from '../data/site-content'
import { SectionTitle } from '../components/SectionTitle'
import { TrustBadges } from '../components/TrustBadges'

const FooterSection = lazy(() => import('../sections/FooterSection').then((m) => ({ default: m.FooterSection })))

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCode,
  FaSearch,
  FaFileAlt,
  FaLink,
  FaMapMarkerAlt,
  FaBuilding,
  FaRobot,
  FaChartLine,
  FaHashtag,
  FaBullseye,
  FaEnvelope,
  FaFunnelDollar,
  FaBrain,
}

export function ServicesPage() {
  usePageMeta(pageMeta.services)

  return (
    <>
      <main id="main-content" className="page-shell">
        <section className="section-shell page-hero" aria-labelledby="services-page-title">
          <SectionTitle
            eyebrow="Services"
            title="Software, SEO, AI & Digital Marketing Services"
            blurb={siteContent.mission}
          />
          <p className="page-intro">
            From full-stack development to technical SEO, GEO optimization, and AI consulting — I help businesses,
            startups, and professionals grow through integrated digital solutions.
          </p>
        </section>

        <section className="section-shell" aria-label="Service categories">
          <div className="service-catalog-grid">
            {serviceCatalog.map((category, index) => {
              const IconComponent = iconMap[category.icon]
              return (
                <motion.article
                  key={category.id}
                  id={category.id}
                  className="service-catalog-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                >
                  {IconComponent && (
                    <div className="service-icon">
                      <IconComponent />
                    </div>
                  )}
                  <h2>{category.title}</h2>
                  <p>{category.summary}</p>
                  <ul className="service-catalog-list">
                    {category.services.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section className="section-shell" aria-labelledby="industries-title">
          <SectionTitle
            eyebrow="Industries"
            title="Industries Served"
            blurb="Experience across startups, SMBs, enterprise, education, healthcare, e-commerce, and more."
          />
          <ul className="tag-cloud" aria-label="Industries served">
            {(siteContent.industriesServed ?? []).map((industry) => (
              <li key={industry} className="tag-pill">
                {industry}
              </li>
            ))}
          </ul>
        </section>

        <section className="section-shell cta-banner" aria-label="Get started">
          <h2>Ready to start?</h2>
          <p>Book a strategy call or request a free SEO audit to identify your fastest growth opportunities.</p>
          <div className="hero-cta-group">
            <Link to="/contact#booking" className="btn btn-primary">
              Book a Strategy Call
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Send a Message
            </Link>
          </div>
          <TrustBadges />
        </section>
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FooterSection content={siteContent} />
      </Suspense>
    </>
  )
}
