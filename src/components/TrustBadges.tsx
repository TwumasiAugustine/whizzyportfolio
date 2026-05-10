import { motion } from 'motion/react'
import { FaCheckCircle, FaClock, FaShieldAlt, FaAward } from 'react-icons/fa'

export function TrustBadges() {
  const badges = [
    {
      icon: FaCheckCircle,
      text: '100% Client Satisfaction',
      subtext: '5-star rating across all platforms',
    },
    {
      icon: FaClock,
      text: '24-Hour Response Time',
      subtext: 'Quick replies, always available',
    },
    {
      icon: FaShieldAlt,
      text: 'Quality Guaranteed',
      subtext: 'Measurable results or we iterate',
    },
    {
      icon: FaAward,
      text: '50+ Projects Delivered',
      subtext: 'Proven track record of success',
    },
  ]

  return (
    <div className="trust-badges-wrapper">
      <div className="trust-badges-grid">
        {badges.map((badge, i) => {
          const IconComponent = badge.icon
          return (
            <motion.div
              key={badge.text}
              className="trust-badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="trust-badge-icon">
                <IconComponent />
              </div>
              <div className="trust-badge-content">
                <p className="trust-badge-text">{badge.text}</p>
                <p className="trust-badge-subtext">{badge.subtext}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
