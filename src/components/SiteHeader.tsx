import { Link, useLocation } from 'react-router-dom'
import { MobileMenu } from './MobileMenu'
import { siteContent } from '../data/site-content'
import { navItems } from '../lib/navigation'

type SiteHeaderProps = {
  mobileMenuOpen: boolean
  onMobileMenuOpen: () => void
  onMobileMenuClose: () => void
}

function NavLink({ href, label, isRoute }: { href: string; label: string; isRoute?: boolean }) {
  const location = useLocation()
  const isActive = isRoute && (location.pathname === href || location.pathname === href.split('#')[0])

  if (isRoute && !href.includes('#')) {
    return (
      <Link to={href} className={isActive ? 'active' : undefined} aria-current={isActive ? 'page' : undefined}>
        {label}
      </Link>
    )
  }

  if (isRoute && href.includes('#')) {
    const [path, hash] = href.split('#')
    return (
      <Link to={{ pathname: path, hash: `#${hash}` }} className={location.pathname === path ? 'active' : undefined}>
        {label}
      </Link>
    )
  }

  return <a href={href}>{label}</a>
}

export function SiteHeader({ mobileMenuOpen, onMobileMenuOpen, onMobileMenuClose }: SiteHeaderProps) {
  return (
    <>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={onMobileMenuClose}
        navItems={navItems.map(({ label, href }) => ({ label, href }))}
        brandName={siteContent.brandName}
        useRouter
      />
      <header className="site-header" aria-label="Main header">
        <Link to="/" className="brand-mark" aria-label={`${siteContent.brandName} home`}>
          {siteContent.brandName}
        </Link>
        <nav aria-label="Primary navigation" className="top-nav">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} label={item.label} isRoute={item.isRoute} />
          ))}
        </nav>
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={onMobileMenuOpen}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <Link className="hidden desktop-cta btn btn-primary" to="/contact">
          Hire Me
        </Link>
      </header>
    </>
  )
}
