import { motion } from 'motion/react'
import { SectionTitle } from '../components/SectionTitle'

const steps = [
  {
    title: 'Discovery and Positioning',
    detail: 'Clarify audience, goals, and offer narrative before visual execution.',
  },
  {
    title: 'Experience and System Design',
    detail: 'Map content hierarchy, interaction intent, and conversion pathways.',
  },
  {
    title: 'Build and Optimization',
    detail: 'Implement performant frontend architecture and refine with SEO and CRO checks.',
  },
]

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

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export function ProcessSection() {
  return (
    <section id="process" className="section-shell" aria-labelledby="process-title">
      <SectionTitle
        eyebrow="Process"
        title="How The Work Moves From Strategy To Results"
        blurb="A fast, structured workflow designed for quality and launch speed."
      />
      <motion.ol
        className="process-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {steps.map((step) => (
          <motion.li key={step.title} variants={stepVariants}>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
