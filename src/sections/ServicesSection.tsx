import { motion } from 'motion/react'
import { FaSearch, FaChartLine, FaBullseye, FaCode, FaRocket, FaChartBar } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { TrustBadges } from '../components/TrustBadges'
import type { SiteContent } from '../types/site'

type ServicesSectionProps = {
  content: SiteContent
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

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section id="services" className="section-shell" aria-labelledby="services-title">
      <SectionTitle
        eyebrow="Services"
        title="Full-Stack Development & Growth Marketing Solutions"
        blurb="From building high-performance web applications to scaling them with strategic marketing—I deliver technical excellence and growth results."
      />
      <motion.div
        className="service-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {content.services.map((service) => {
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
      
      <TrustBadges />
    </section>
  )
}
