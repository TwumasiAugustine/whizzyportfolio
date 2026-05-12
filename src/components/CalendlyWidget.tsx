import { useEffect } from 'react'
import { motion } from 'motion/react'

type CalendlyWidgetProps = {
  url: string
  /**
   * Height of the inline widget (default: 700px)
   */
  height?: number
  /**
   * Prefill data for the booking form
   */
  prefill?: {
    name?: string
    email?: string
    customAnswers?: Record<string, string>
  }
}

/**
 * Calendly inline widget component
 * Requires the Calendly widget script to be loaded
 * Add to index.html: <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
 */
export function CalendlyWidget({ url, height = 700, prefill }: CalendlyWidgetProps) {
  useEffect(() => {
    // Check if Calendly script is loaded
    const script = document.querySelector('script[src*="calendly.com"]')
    
    if (!script) {
      console.warn('Calendly script not found. Add to index.html: <script src="https://assets.calendly.com/assets/external/widget.js"></script>')
    }

    // Initialize Calendly widget
    if (window.Calendly && url !== '#') {
      window.Calendly.initInlineWidget({
        url,
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: prefill || {},
      })
    }
  }, [url, prefill])

  // If no valid URL, show fallback
  if (!url || url === '#') {
    return (
      <motion.div 
        className="calendly-fallback"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="calendly-placeholder">
          <svg width="64" height="64" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <h3>Ready to Connect?</h3>
          <p>
            Calendly integration not configured yet. Please add your Calendly URL to enable booking.
          </p>
          <a href="mailto:twumasiaugustine007@gmail.com" className="btn btn-primary">
            Email Instead
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      id="calendly-inline-widget"
      style={{ minWidth: '320px', height: `${height}px` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    />
  )
}

/**
 * Calendly popup button component
 * Opens Calendly in a modal overlay
 */
type CalendlyPopupButtonProps = {
  url: string
  text?: React.ReactNode
  className?: string
  prefill?: {
    name?: string
    email?: string
  }
}

export function CalendlyPopupButton({ 
  url, 
  text = 'Schedule a Call', 
  className = 'btn btn-primary',
  prefill 
}: CalendlyPopupButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    if (window.Calendly && url !== '#') {
      window.Calendly.initPopupWidget({
        url,
        prefill: prefill || {},
      })
    } else if (url === '#') {
      // Fallback to contact section
      window.location.href = '#contact'
    }
  }

  return (
    <a 
      href={url}
      onClick={handleClick}
      className={className}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

// Extend Window type for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement | null; prefill?: Record<string, unknown> }) => void
      initPopupWidget: (options: { url: string; prefill?: Record<string, unknown> }) => void
    }
  }
}
