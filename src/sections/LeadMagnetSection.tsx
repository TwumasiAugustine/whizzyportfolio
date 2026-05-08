import { motion } from 'motion/react'
import { FaSearch, FaArrowRight } from 'react-icons/fa'
import type { SiteContent } from '../types/site'

type LeadMagnetSectionProps = {
  content: SiteContent
  onOpenPopup?: () => void
}

export function LeadMagnetSection({ content, onOpenPopup }: LeadMagnetSectionProps) {
  return (
    <section id="insights" className="section-shell" aria-labelledby="insights-title">
      <motion.div
        className="insights-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="insights-icon"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <FaSearch />
        </motion.div>
        <p className="eyebrow">Free Resource</p>
        <h2 id="insights-title">{content.insights.title}</h2>
        <p className="blurb">{content.insights.summary}</p>
        <motion.button
          className="btn btn-primary btn-lg"
          onClick={onOpenPopup}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          type="button"
        >
          Request Your Free Audit <FaArrowRight className="btn-icon" />
        </motion.button>
      </motion.div>
    </section>
  )
}
