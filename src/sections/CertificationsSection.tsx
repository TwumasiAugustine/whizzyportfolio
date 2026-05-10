import { motion } from 'motion/react'
import { FaTrophy, FaAward, FaStar, FaMedal, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import type { SiteContent } from '../types/site'

type CertificationsSectionProps = {
  content: SiteContent
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaTrophy,
  FaAward,
  FaStar,
  FaMedal,
  FaCertificate,
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
    },
  }),
}

export function CertificationsSection({ content }: CertificationsSectionProps) {
  const certifications = content.certifications || []
  const achievements = content.achievements || []

  if (!certifications.length && !achievements.length) {
    return null
  }

  return (
    <section id="certifications" className="section-shell" aria-labelledby="certifications-title">
      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="achievements-wrapper">
          <SectionTitle
            eyebrow="Recognition"
            title="Achievements & Milestones"
            blurb="Key results and recognition earned through delivering measurable client success."
          />
          <div className="achievements-grid">
            {achievements.map((achievement, i) => {
              const IconComponent = achievement.icon ? iconMap[achievement.icon] : FaTrophy
              return (
                <motion.article
                  key={achievement.title}
                  className="achievement-card"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                >
                  <div className="achievement-icon">
                    {IconComponent && <IconComponent className="icon" />}
                  </div>
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                    <time className="achievement-date" dateTime={achievement.date}>
                      {new Date(achievement.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </time>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="certifications-wrapper">
          <SectionTitle
            eyebrow="Professional Development"
            title="Certifications & Training"
            blurb="Continuous learning and validated expertise across web development and digital marketing domains."
          />
          <div className="certifications-grid">
            {certifications.map((cert, i) => (
              <motion.article
                key={cert.title}
                className="certification-card"
                custom={i + achievements.length}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className="certification-header">
                  <FaCertificate className="cert-icon" />
                  <div className="certification-meta">
                    <h3 className="certification-title">{cert.title}</h3>
                    <p className="certification-issuer">{cert.issuer}</p>
                  </div>
                </div>
                <div className="certification-footer">
                  <time className="certification-date" dateTime={cert.date}>
                    {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </time>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-link"
                      aria-label={`View credential for ${cert.title}`}
                    >
                      View Credential <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                {cert.credentialId && <p className="certification-id">ID: {cert.credentialId}</p>}
              </motion.article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
