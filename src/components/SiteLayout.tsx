import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { GoogleAnalytics } from './GoogleAnalytics'
import { ScrollProgress } from './ScrollProgress'
import { BackToTop } from './BackToTop'
import { SiteHeader } from './SiteHeader'
import { ErrorBoundary } from './ErrorBoundary'
import { InsightsPopup } from './InsightsPopup'
import { siteContent } from '../data/site-content'

export function SiteLayout() {
  const [showInsightsPopup, setShowInsightsPopup] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.pathname !== '/') return

    const seen = sessionStorage.getItem('insights-popup-dismissed')
    if (seen === '1') return

    let triggered = false

    const handleScroll = () => {
      if (triggered) return

      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercent >= 50) {
        triggered = true
        setShowInsightsPopup(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const closeInsightsPopup = () => {
    sessionStorage.setItem('insights-popup-dismissed', '1')
    setShowInsightsPopup(false)
  }

  return (
    <>
      <GoogleAnalytics />
      <ScrollProgress />
      <InsightsPopup content={siteContent} open={showInsightsPopup} onClose={closeInsightsPopup} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuOpen={() => setMobileMenuOpen(true)}
        onMobileMenuClose={() => setMobileMenuOpen(false)}
      />
      <ErrorBoundary>
        <Outlet context={{ openInsightsPopup: () => setShowInsightsPopup(true) }} />
      </ErrorBoundary>
      <BackToTop />
    </>
  )
}
