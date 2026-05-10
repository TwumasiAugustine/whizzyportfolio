import { motion, AnimatePresence } from 'motion/react'
import { useEffect } from 'react'
import * as FocusTrapModule from 'focus-trap-react'

const FocusTrap = FocusTrapModule.default

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ label: string; href: string }>
  brandName: string
}

export function MobileMenu({ isOpen, onClose, navItems, brandName }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      onClose()
      // Small delay to allow menu to close before scrolling
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <FocusTrap
            active={isOpen}
            focusTrapOptions={{
              initialFocus: false,
              allowOutsideClick: true,
              escapeDeactivates: false,
            }}
          >
            <motion.div
              className="mobile-menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Header */}
              <div className="mobile-menu-header">
                <p className="mobile-menu-brand">{brandName}</p>
                <button
                  type="button"
                  className="mobile-menu-close"
                  onClick={onClose}
                  aria-label="Close menu"
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
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="mobile-menu-nav" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="mobile-menu-link"
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                className="mobile-menu-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <a
                  href="#contact"
                  className="btn btn-primary btn-block"
                  onClick={handleNavClick}
                >
                  Hire Me
                </a>
              </motion.div>
            </motion.div>
          </FocusTrap>
        </>
      )}
    </AnimatePresence>
  )
}
