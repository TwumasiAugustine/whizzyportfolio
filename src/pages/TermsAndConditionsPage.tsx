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

export function TermsAndConditionsPage() {
  usePageMeta(pageMeta.termsAndConditions)

  return (
    <>
      <main id="main-content" className="page-shell legal-page">
        <section
          className="section-shell page-hero"
          aria-labelledby="terms-page-title"
        >
          <SectionTitle
            eyebrow="Legal"
            title="Terms & Conditions"
            blurb={`The terms that govern your use of this website, operated by ${siteContent.personName}.`}
            headingLevel="h1"
          />
          <p className="page-intro legal-updated">Last updated: {LAST_UPDATED}</p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-intro-title">
          <h2 id="terms-intro-title">Agreement to Terms</h2>
          <p>
            These Terms & Conditions ("Terms") govern your use of this website (the "Site"), operated by{' '}
            {siteContent.personName} ("{siteContent.brandName}", "I", "me", or "my"). By accessing or using the
            Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-use-title">
          <h2 id="terms-use-title">Use of the Site</h2>
          <p>
            This Site is a portfolio showcasing my work, services, and professional background as a full stack
            developer, technical SEO specialist, AI engineer, and digital marketing strategist. You agree to
            use the Site only for lawful purposes and in a way that does not infringe the rights of, or
            restrict or inhibit the use of, the Site by anyone else.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-ip-title">
          <h2 id="terms-ip-title">Intellectual Property</h2>
          <p>
            Unless otherwise stated, all content on this Site, including text, graphics, logos, project
            case studies, and code samples, is the property of {siteContent.personName} and is protected by
            applicable copyright and intellectual property laws. Client and project names may be trademarks
            of their respective owners and are referenced for portfolio purposes only.
          </p>
          <p>
            You may view and share pages of this Site for personal, non-commercial purposes. You may not
            reproduce, distribute, or create derivative works from this Site's content without prior written
            permission.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-links-title">
          <h2 id="terms-links-title">Third-Party Links & Services</h2>
          <p>
            The Site may contain links to third-party websites or services, such as social media profiles,
            scheduling tools, or client websites. I am not responsible for the content, privacy practices, or
            availability of any third-party sites, and inclusion of a link does not imply endorsement.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-inquiries-title">
          <h2 id="terms-inquiries-title">Inquiries, Bookings & Services</h2>
          <p>
            Submitting a contact form, booking a call, or emailing me through this Site does not, by itself,
            create a contract for services. Any paid work, project engagement, or service arrangement is
            governed by a separate agreement or proposal agreed between the parties.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-disclaimer-title">
          <h2 id="terms-disclaimer-title">Disclaimer</h2>
          <p>
            This Site and its content are provided "as is" without warranties of any kind, express or implied.
            While I make reasonable efforts to keep information accurate and up to date, I make no guarantee
            regarding the completeness, reliability, or availability of the Site at all times.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-liability-title">
          <h2 id="terms-liability-title">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {siteContent.personName} shall not be liable for any
            indirect, incidental, or consequential damages arising from your use of, or inability to use,
            this Site.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-changes-title">
          <h2 id="terms-changes-title">Changes to These Terms</h2>
          <p>
            These Terms may be updated from time to time. Changes will be posted on this page with an updated
            "Last updated" date, and continued use of the Site after changes are posted constitutes acceptance
            of the revised Terms.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-governing-title">
          <h2 id="terms-governing-title">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Republic of Ghana, without regard to conflict of law
            principles.
          </p>
        </section>

        <section className="section-shell legal-content" aria-labelledby="terms-contact-title">
          <h2 id="terms-contact-title">Contact</h2>
          <p>
            If you have questions about these Terms, contact me at{' '}
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