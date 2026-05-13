// Utility functions for tracking custom Google Analytics events

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
