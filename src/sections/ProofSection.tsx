import { SectionTitle } from '../components/SectionTitle'
import type { SiteContent } from '../types/site'

type ProofSectionProps = {
  content: SiteContent
}

export function ProofSection({ content }: ProofSectionProps) {
  return (
    <section id="proof" className="section-shell proof-section" aria-labelledby="proof-title">
      <SectionTitle
        eyebrow="Social Proof"
        title="Built On Real Work And Measurable Outcomes"
        blurb="Proof signals are intentionally visible across the page to support confidence and decision speed."
      />
      <div className="stats-grid">
        {content.stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </article>
        ))}
      </div>
      <div className="proof-divider">
        <p className="proof-divider-text">Trusted By Industry Leaders</p>
      </div>
      <div className="logo-strip" aria-label="Client logos">
        {content.clientLogos.map((logo) => (
          <div key={logo.name} className="client-logo-wrapper">
            <img 
              src={logo.imageUrl} 
              alt={`${logo.name} logo`}
              className="client-logo-img"
              loading="lazy"
              width="120"
              height="60"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
