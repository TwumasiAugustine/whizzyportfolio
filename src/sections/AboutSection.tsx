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
        title="Building High-Performance Platforms + Strategic Growth Marketing"
        blurb="I help businesses by building technically excellent web applications and scaling them with data-driven marketing. Whether you need development, growth strategy, or both—I deliver integrated solutions that work."
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
            I start by understanding your business goals and technical requirements. Then I build solutions that integrate development excellence with growth strategy—whether that's a high-performance web platform with built-in SEO architecture, or growth marketing systems that scale your existing product.
          </p>
        </motion.article>
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaHandshake />
          </div>
          <h3>Why Work With Me</h3>
          <p>
            You get both technical expertise and growth strategy in one person. I've built platforms serving 10,000+ users with 98 Lighthouse scores, and I've scaled marketing campaigns generating 140%+ traffic increases. I understand code architecture and conversion psychology—so I build things that perform AND convert.
          </p>
        </motion.article>
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaChartLine />
          </div>
          <h3>Core Expertise</h3>
          <ul className="about-skill-list" aria-label="Core expertise areas">
            <li>Full-Stack Web Development (React, TypeScript, Node.js)</li>
            <li>High-Performance Architecture & AWS Deployment</li>
            <li>Technical SEO & Core Web Vitals Optimization</li>
            <li>Conversion-Focused Landing Pages & CRO</li>
            <li>Growth Marketing & Social Media Strategy</li>
            <li>Analytics, Tracking & Performance Measurement</li>
          </ul>
        </motion.article>
      </motion.div>
    </section>
  )
}
