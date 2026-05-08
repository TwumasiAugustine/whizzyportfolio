import { useEffect } from 'react'
import type { SiteContent } from '../types/site'

type InsightsPopupProps = {
  content: SiteContent
  open: boolean
  onClose: () => void
}

export function InsightsPopup({ content, open, onClose }: InsightsPopupProps) {
  useEffect(() => {
    if (!open) return

    // Prevent body scroll
    document.body.style.overflow = 'hidden'

    // Escape key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    // Focus first input after a brief delay
    const timer = setTimeout(() => {
      const firstInput = document.getElementById('insight-name')
      firstInput?.focus()
    }, 100)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
      clearTimeout(timer)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div 
      className="insights-modal-backdrop" 
      role="presentation" 
      onClick={onClose}
      aria-hidden={!open}
    >
      <section
        className="insights-modal"
        aria-labelledby="insights-modal-title"
        aria-modal="true"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button 
          type="button" 
          className="insights-modal-close" 
          onClick={onClose} 
          aria-label="Close visibility audit popup"
        >
          ×
        </button>
        
        <p className="eyebrow">Free 15-Minute Audit</p>
        <h3 id="insights-modal-title">{content.insights.title}</h3>
        <p className="insights-summary">{content.insights.summary}</p>

        {content.insights.deliverables && (
          <ul className="insights-deliverables">
            {content.insights.deliverables.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        )}

        <form className="insights-form" action={content.contact.insightsFormUrl} method="get">
          <label htmlFor="insight-name">Your Name</label>
          <input 
            id="insight-name" 
            name="name" 
            type="text" 
            required 
            autoComplete="name"
          />

          <label htmlFor="insight-email">Email Address</label>
          <input 
            id="insight-email" 
            name="email" 
            type="email" 
            required 
            autoComplete="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
          />

          <label htmlFor="insight-site">Website or Main Social Media Link</label>
          <input 
            id="insight-site" 
            name="url" 
            type="url" 
            placeholder="https://yourwebsite.com or social profile" 
            required 
            autoComplete="url"
          />

          <button type="submit" className="btn btn-primary">
            Show Me My Visibility Gaps
          </button>
          
          <p className="insights-trust-line">
            ⚡ Free. No credit card. Delivered in 48 hours.
          </p>
        </form>
      </section>
    </div>
  )
}
