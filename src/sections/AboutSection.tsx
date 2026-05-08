import { motion } from 'motion/react'
import { FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function AboutSection() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <SectionTitle
        eyebrow="About"
        title="Strategic Digital Marketing Built on Data, Not Guesswork"
        blurb="I partner with ambitious businesses and entrepreneurs who are tired of inconsistent marketing results and ready for systematic, measurable growth."
      />
      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaLightbulb />
          </div>
          <h3>How I Work</h3>
          <p>
            Every strategy starts with understanding your business goals, audience behavior, and competitive landscape. I then build practical, data-driven campaigns across website SEO, social media presence, and conversion optimization that deliver measurable ROI—not vanity metrics.
          </p>
        </motion.article>
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaHandshake />
          </div>
          <h3>Why Work With Me</h3>
          <p>
            You get a strategic partner who focuses on revenue impact, not just traffic numbers. I combine technical website SEO with social media strategy, conversion psychology, and content distribution to build marketing systems that scale with your business.
          </p>
        </motion.article>
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaChartLine />
          </div>
          <h3>Core Expertise</h3>
          <ul className="about-skill-list" aria-label="Core expertise areas">
            <li>On-Page SEO (Website Optimization)</li>
            <li>Off-Page SEO (Social Media & Brand Presence)</li>
            <li>Content Strategy & Distribution</li>
            <li>Landing Page Optimization & CRO</li>
            <li>Analytics & Performance Tracking</li>
          </ul>
        </motion.article>
      </motion.div>
    </section>
  )
}
