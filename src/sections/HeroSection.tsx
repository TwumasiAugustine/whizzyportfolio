import { motion } from 'motion/react'
import { FaLinkedin, FaXTwitter, FaInstagram, FaGithub, FaDownload } from 'react-icons/fa6'
import { InfiniteCarousel } from '../components/InfiniteCarousel'
import { trackEvent } from '../lib/analytics'
import type { SiteContent } from '../types/site'

type HeroSectionProps = {
  content: SiteContent
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaGithub,
}

export function HeroSection({ content }: HeroSectionProps) {
  const handleResumeDownload = () => {
    trackEvent('resume_download', {
      event_category: 'engagement',
      event_label: 'hero_section',
    })
  }

  return (
    <section id="home" className="hero-section section-shell" aria-labelledby="hero-title">
      <div className="hero-bento">
        <motion.article
          className="profile-bento"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="avatar-ring">
            <img 
              src={content.profileImage} 
              alt={`${content.personName} profile`}
              loading="eager"
              fetchPriority="high"
              width="200"
              height="200"
            />
          </div>
          <p className="profile-name">{content.personName}</p>
          <p>{content.profileLine}</p>
          <div className="social-row" aria-label="Social links">
            {content.socialLinks.map((item) => {
              const IconComponent = iconMap[item.icon]
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="social-link">
                  {IconComponent && <IconComponent className="social-icon" />}
                </a>
              )
            })}
          </div>
          <a
            href="/resume.pdf"
            download="Augustine_Twumasi_Resume.pdf"
            className="btn btn-primary btn-sm hero-resume-btn"
            onClick={handleResumeDownload}
            aria-label="Download resume as PDF"
          >
            <FaDownload style={{ marginRight: '0.4rem' }} />
            Get My Resume
          </a>
        </motion.article>

        <div className="hero-right-column">
          <motion.article
            className="intro-bento"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="hero-kicker">Hello There!</p>
            <h1 id="hero-title">{content.heroHeadline}</h1>
            <p className="hero-subtitle">{content.heroSubheadline}</p>
            <p className="availability-dot">
              <span /> Available for consulting
            </p>
            <div className="hero-cta-group">
              <a className="btn btn-primary" href="#booking">
                {content.primaryCta}
              </a>
              <a className="btn btn-secondary" href="#insights">
                {content.secondaryCta}
              </a>
            </div>
          </motion.article>

          <motion.article
            className="company-bento  lg:mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Companies And Platforms I Worked With</h3>
            <InfiniteCarousel items={content.clientLogos} duration={25} />
          </motion.article>
        </div>
      </div>
    </section>
  )
}
