import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

export function GoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  useEffect(() => {
    // Only load GA if measurement ID is configured
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.info('Google Analytics not configured. Add VITE_GA_MEASUREMENT_ID to .env file.')
      return
    }

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script1)

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', measurementId, {
      page_path: window.location.pathname,
      send_page_view: true,
    })

    // Track scroll depth
    let maxScroll = 0
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent

        // Track 25%, 50%, 75%, 100% scroll milestones
        if ([25, 50, 75, 100].includes(maxScroll)) {
          window.gtag?.('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${maxScroll}%`,
            value: maxScroll,
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Cleanup script if needed (optional - scripts typically stay loaded)
    }
  }, [measurementId])

  return null
}

// Utility functions for tracking custom events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: ctaName,
    cta_location: ctaLocation,
  })
}

export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formName,
    success: success,
  })
}

export const trackProjectView = (projectTitle: string) => {
  trackEvent('project_view', {
    event_category: 'engagement',
    event_label: projectTitle,
  })
}

export const trackExternalLink = (linkUrl: string, linkText: string) => {
  trackEvent('external_link_click', {
    event_category: 'engagement',
    event_label: linkText,
    link_url: linkUrl,
  })
}
