import { motion } from 'motion/react'
import { FaLightbulb, FaCode, FaComments, FaCalendarAlt, FaClock, FaStar } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { CalendlyPopupButton } from '../components/CalendlyWidget'
import type { SiteContent } from '../types/site'

type BookingSectionProps = {
  content: SiteContent
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLightbulb,
  FaCode,
  FaComments,
  FaCalendarAlt,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

export function BookingSection({ content }: BookingSectionProps) {
  const bookingOptions = content.bookingOptions || []

  // If no booking options configured, don't render the section
  if (bookingOptions.length === 0) {
    return null
  }

  return (
    <section id="booking" className="section-shell booking-section" aria-labelledby="booking-title">
      <SectionTitle
        eyebrow="Book a Call"
        title="Let's Talk About Your Project"
        blurb="Choose the call type that best fits your needs. All calls are commitment-free and focused on understanding how I can help you succeed."
      />

      <motion.div
        className="booking-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {bookingOptions.map((option) => {
          const IconComponent = iconMap[option.icon] || FaCalendarAlt
          const isRecommended = option.recommended

          return (
            <motion.article
              key={option.id}
              className={`booking-card ${isRecommended ? 'booking-card-recommended' : ''}`}
              variants={cardVariants}
            >
              {isRecommended && (
                <div className="booking-badge">
                  <FaStar aria-hidden="true" />
                  <span>Recommended</span>
                </div>
              )}
              
              <div className="booking-card-header">
                <div className="booking-icon">
                  <IconComponent aria-hidden="true" />
                </div>
                <h3>{option.title}</h3>
                <div className="booking-duration">
                  <FaClock aria-hidden="true" />
                  <span>{option.duration}</span>
                </div>
              </div>

              <p className="booking-description">{option.description}</p>

              <CalendlyPopupButton
                url={option.calendlyUrl}
                text={`Book ${option.title}`}
                className={isRecommended ? 'btn btn-primary' : 'btn btn-secondary'}
              />
            </motion.article>
          )
        })}
      </motion.div>

      <motion.div
        className="booking-footnote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>
          <strong>Note:</strong> All calls are conducted via Google Meet or Zoom. You'll receive a confirmation email with the meeting link after booking.
        </p>
      </motion.div>
    </section>
  )
}
