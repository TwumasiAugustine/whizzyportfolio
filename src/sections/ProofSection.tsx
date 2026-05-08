import { SectionTitle } from '../components/SectionTitle'
import type { SiteContent } from '../types/site'

type ProofSectionProps = {
  content: SiteContent
}

export function ProofSection({ content }: ProofSectionProps) {
  return (
    <section id="proof" className="section-shell" aria-labelledby="proof-title">
      <SectionTitle
        eyebrow="Social Proof"
        title="Built On Real Work And Measurable Outcomes"
        blurb="Proof signals are intentionally visible across the page to support confidence and decision speed."
      />
      <div className="stats-grid">
        {content.stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <p className="stat-value">{stat.value}</p>
            <p>{stat.label}</p>
          </article>
        ))}
      </div>
      <div className="logo-strip" aria-label="Client logos">
        {content.clientLogos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </section>
  )
}
