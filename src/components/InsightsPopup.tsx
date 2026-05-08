import type { SiteContent } from '../types/site'

type InsightsPopupProps = {
  content: SiteContent
  open: boolean
  onClose: () => void
}

export function InsightsPopup({ content, open, onClose }: InsightsPopupProps) {
  if (!open) {
    return null
  }

  return (
    <div className="insights-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="insights-modal"
        aria-labelledby="insights-modal-title"
        aria-modal="true"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="insights-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="eyebrow">Free Marketing Audit</p>
        <h3 id="insights-modal-title">{content.insights.title}</h3>
        <p>{content.insights.summary}</p>

        <form className="insights-form" action={content.contact.insightsFormUrl} method="get">
          <label htmlFor="insight-name">Your Name</label>
          <input id="insight-name" name="name" type="text" required />

          <label htmlFor="insight-email">Email Address</label>
          <input id="insight-email" name="email" type="email" required />

          <label htmlFor="insight-site">Website or Main Social Media Link</label>
          <input id="insight-site" name="url" type="url" placeholder="https://yourwebsite.com or social profile" required />

          <button type="submit" className="btn btn-primary">
            Get My Free Audit Report
          </button>
        </form>
      </section>
    </div>
  )
}
