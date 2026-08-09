import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'
import { siteContent } from '../data/site-content'
import { SectionTitle } from '../components/SectionTitle'

const FooterSection = lazy(() =>
  import('../sections/FooterSection').then((m) => ({
    default: m.FooterSection,
  })),
)

const LAST_UPDATED = 'August 9, 2026'

export function PrivacyPolicyPage() {
  usePageMeta(pageMeta.privacyPolicy)

  return (
    <>
      <main id="main-content" className="page-shell legal-page">
        <section
          className="section-shell page-hero"
          aria-labelledby="privacy-page-title"
        >
          <SectionTitle
            eyebrow="Legal"
            title="Privacy Policy"
            blurb={`How ${siteContent.personName} collects, uses, and protects information on this website.`}
            headingLevel="h1"
          />
          <p className="page-intro legal-updated">Last updated: {LAST_UPDATED}</p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-intro-title">
          <h2 id="privacy-intro-title">Introduction</h2>
          <p>
            This Privacy Policy explains how {siteContent.personName} ("{siteContent.brandName}", "I", "me", or "my")
            collects, uses, and protects information when you visit this website
            (the "Site"). By using the Site, you agree to the practices described in this policy.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-collect-title">
          <h2 id="privacy-collect-title">Information I Collect</h2>
          <h3>Information you provide</h3>
          <p>
            When you use the contact form, booking form, or email me directly, I collect the information you
            choose to share, such as your name, email address, and the details of your message or project.
          </p>
          <h3>Information collected automatically</h3>
          <p>
            Like most websites, this Site may use analytics tools (such as Google Analytics or similar services)
            and standard web server logs to collect non-identifying technical information, including your
            approximate location, browser type, device type, pages visited, and referring website. This data
            helps me understand how visitors use the Site and improve it.
          </p>
          <h3>Cookies</h3>
          <p>
            The Site may use cookies or similar technologies for basic functionality and analytics. You can
            disable cookies in your browser settings; doing so may affect some features of the Site.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-use-title">
          <h2 id="privacy-use-title">How I Use Your Information</h2>
          <ul>
            <li>To respond to inquiries, booking requests, and project discussions</li>
            <li>To provide, maintain, and improve the Site and its content</li>
            <li>To understand how visitors interact with the Site, using aggregated analytics</li>
            <li>To comply with legal obligations where applicable</li>
          </ul>
          <p>I do not sell your personal information to third parties.</p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-sharing-title">
          <h2 id="privacy-sharing-title">Sharing of Information</h2>
          <p>
            Information may be shared with trusted third-party service providers who help operate the Site
            (for example, hosting providers, analytics services, or scheduling tools like Calendly), and only
            to the extent necessary for them to perform their services. I may also disclose information if
            required to do so by law.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-rights-title">
          <h2 id="privacy-rights-title">Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data, including the right
            to access, correct, or request deletion of information you have provided, and the right to object
            to or restrict certain processing. To exercise any of these rights, contact me using the details
            below.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-retention-title">
          <h2 id="privacy-retention-title">Data Retention & Security</h2>
          <p>
            I retain information only for as long as needed to respond to your inquiry or fulfil the purpose
            for which it was collected, and I take reasonable measures to protect information from
            unauthorized access, loss, or misuse. No method of transmission or storage is completely secure,
            and I cannot guarantee absolute security.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-children-title">
          <h2 id="privacy-children-title">Children's Privacy</h2>
          <p>
            This Site is not directed at children under 13, and I do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-changes-title">
          <h2 id="privacy-changes-title">Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Changes will be posted on this page with an
            updated "Last updated" date.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="privacy-contact-title">
          <h2 id="privacy-contact-title">Contact</h2>
          <p>
            If you have questions about this Privacy Policy or how your information is handled, contact me at{' '}
            <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a> or via the{' '}
            <Link to="/contact">contact page</Link>.
          </p>
        </section>
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FooterSection content={siteContent} />
      </Suspense>
    </>
  )
}