import { lazy, Suspense } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'
import { siteContent } from '../data/site-content'
import { SectionTitle } from '../components/SectionTitle'
import { ContactSection } from '../sections/ContactSection'
import { BookingSection } from '../sections/BookingSection'
import { FaCheckCircle } from 'react-icons/fa'

const FooterSection = lazy(() => import('../sections/FooterSection').then((m) => ({ default: m.FooterSection })))

const availabilityItems = [
  'Freelance projects',
  'Technical consulting',
  'SEO consulting',
  'Digital marketing consulting',
  'AI consulting',
  'Contract work',
  'Full-time employment',
  'Technical mentoring',
  'Public speaking & workshops',
]

export function ContactPage() {
  usePageMeta(pageMeta.contact)

  return (
    <>
      <main id="main-content" className="page-shell">
        <section className="section-shell page-hero" aria-labelledby="contact-page-title">
          <SectionTitle
            eyebrow="Contact"
            title="Hire a Web Developer in Kumasi, Ghana"
            blurb={`Contact Augustine Twumasi for web development, SEO consulting, AI automation, and digital marketing. Based in ${siteContent.location.city}, ${siteContent.location.region}, serving ${siteContent.location.country} and clients worldwide.`}
            headingLevel="h1"
          />
          <p className="page-intro">
            Email:{' '}
            <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          </p>
        </section>

        <section className="section-shell" aria-labelledby="availability-title">
          <h2 id="availability-title">Available For</h2>
          <ul className="availability-list">
            {availabilityItems.map((item) => (
              <li key={item}>
                <FaCheckCircle aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <BookingSection content={siteContent} />
        <ContactSection content={siteContent} />
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FooterSection content={siteContent} />
      </Suspense>
    </>
  )
}
