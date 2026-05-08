import { motion } from 'motion/react'
import { SectionTitle } from '../components/SectionTitle'
import type { SiteContent } from '../types/site'

type FaqSectionProps = {
  content: SiteContent
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section id="faq" className="section-shell" aria-labelledby="faq-title">
      <SectionTitle
        eyebrow="FAQ"
        title="Questions Clients Ask Before Starting"
        blurb="Transparent answers reduce friction and improve conversion confidence."
      />
      <motion.div
        className="faq-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {content.faqs.map((faq) => (
          <motion.details key={faq.question} variants={itemVariants}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </motion.details>
        ))}
      </motion.div>
    </section>
  )
}
