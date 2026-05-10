import { FaLinkedin, FaXTwitter, FaInstagram, FaGithub, FaHeart } from 'react-icons/fa6'
import type { SiteContent } from '../types/site'

type FooterSectionProps = {
  content: SiteContent
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaGithub,
}

export function FooterSection({ content }: FooterSectionProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-logo">{content.brandName}</p>
          <p className="footer-tagline">Digital marketing that converts.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-nav-group">
            <p className="footer-nav-heading">Quick Links</p>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="footer-nav-group">
            <p className="footer-nav-heading">Connect</p>
            <a href="#contact">Contact</a>
            <a href="#insights">Insights</a>
            <a href="#faq">FAQ</a>
            <a href={`mailto:${content.contact.email}`}>Email</a>
          </div>
        </nav>

        <div className="footer-social">
          <p className="footer-social-heading">Follow</p>
          <div className="footer-social-links">
            {content.socialLinks.map((item) => {
              const IconComponent = iconMap[item.icon]
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {IconComponent && <IconComponent />}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} {content.personName}. Made with <FaHeart className="footer-heart" /> for growth-focused clients.
        </p>
      </div>
    </footer>
  )
}
