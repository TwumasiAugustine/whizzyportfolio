import { Link } from 'react-router-dom'
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
          <p className="footer-tagline">
            Full-stack development, SEO, AI & digital marketing that drives measurable growth.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-nav-group">
            <p className="footer-nav-heading">Quick Links</p>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="footer-nav-group">
            <p className="footer-nav-heading">Connect</p>
            <Link to="/contact">Contact</Link>
            <Link to="/contact#booking">Book a Call</Link>
            <Link to={{ pathname: '/', hash: '#faq' }}>FAQ</Link>
            <a href={`mailto:${content.contact.email}`}>Email</a>
            <a href="/projects/Augustine_Twumasi_Resume.pdf" download="Augustine_Twumasi_Resume.pdf">
              Download Resume
            </a>
          </div>
          <div className="footer-nav-group">
            <p className="footer-nav-heading">Resources</p>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
              llms.txt
            </a>
            <a href="/llms-full.txt" target="_blank" rel="noopener noreferrer">
              llms-full.txt
            </a>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
              Sitemap
            </a>
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
