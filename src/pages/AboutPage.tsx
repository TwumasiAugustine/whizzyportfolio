import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'
import { siteContent } from '../data/site-content'
import { AboutSection } from '../sections/AboutSection'
import { SkillsSection } from '../sections/SkillsSection'
import { CertificationsSection } from '../sections/CertificationsSection'
import { SectionTitle } from '../components/SectionTitle'

const FooterSection = lazy(() => import('../sections/FooterSection').then((m) => ({ default: m.FooterSection })))

export function AboutPage() {
  usePageMeta(pageMeta.about)

  return (
    <>
      <main id="main-content" className="page-shell">
        <section className="section-shell page-hero" aria-labelledby="about-page-title">
          <SectionTitle
            eyebrow="About"
            title={siteContent.personName}
            blurb={siteContent.positioning}
          />
          <p className="page-intro">{siteContent.mission}</p>
        </section>

        <AboutSection />

        <section className="section-shell" aria-labelledby="roles-title">
          <SectionTitle
            eyebrow="Expertise"
            title="Core Professional Roles"
            blurb="Integrated expertise across development, search, marketing, and AI."
          />
          <ul className="tag-cloud" aria-label="Professional roles">
            {(siteContent.professionalRoles ?? []).map((role) => (
              <li key={role} className="tag-pill">
                {role}
              </li>
            ))}
          </ul>
        </section>

        <SkillsSection />

        <section className="section-shell" aria-labelledby="clients-title">
          <SectionTitle
            eyebrow="Ideal Clients"
            title="Who I Work With"
            blurb="Business owners, startup founders, marketing teams, recruiters, developers, and content creators."
          />
          <ul className="tag-cloud" aria-label="Ideal clients">
            {(siteContent.idealClients ?? []).map((client) => (
              <li key={client} className="tag-pill">
                {client}
              </li>
            ))}
          </ul>
        </section>

        <CertificationsSection content={siteContent} />

        <section className="section-shell cta-banner" aria-label="Work together">
          <h2>Let's build something together</h2>
          <p>Explore my services or get in touch to discuss your project.</p>
          <div className="hero-cta-group">
            <Link to="/services" className="btn btn-primary">
              View Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
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
