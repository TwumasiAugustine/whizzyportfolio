import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FaSearch, FaChartLine, FaBullseye, FaCode, FaRocket, FaChartBar } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { TrustBadges } from '../components/TrustBadges'
import type { SiteContent } from '../types/site'

type ServicesSectionProps = {
  content: SiteContent
  compact?: boolean
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaSearch,
  FaChartLine,
  FaBullseye,
  FaCode,
  FaRocket,
  FaChartBar,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ServicesSection({ content, compact = false }: ServicesSectionProps) {
  const services = compact ? content.services.slice(0, 6) : content.services
  return (
    <section id="services" className="section-shell" aria-labelledby="services-title">
      <SectionTitle
        eyebrow="Services"
        title="Web Development, SEO & AI Services"
        blurb={`Full stack development, technical SEO, and AI engineering for businesses in ${content.location.city}, ${content.location.country}, and worldwide.`}
      />
      <motion.div
        className="service-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map((service) => {
          const IconComponent = iconMap[service.icon]
          return (
            <motion.article key={service.title} className="service-card" variants={cardVariants}>
              {IconComponent && (
                <div className="service-icon">
                  <IconComponent />
                </div>
              )}
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </motion.div>

      {compact && (
        <p className="section-view-all">
          <Link to="/services">Explore web development, SEO & AI services →</Link>
        </p>
      )}
      
      <TrustBadges />
    </section>
  )
}
