import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
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

type AboutSectionProps = {
  compact?: boolean
}

export function AboutSection({ compact = false }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <SectionTitle
        eyebrow="About"
        title="Full-Stack Development, SEO & AI — Built to Scale"
        blurb="I design, build, optimize, and scale websites, applications, and digital marketing systems that improve business visibility, user experience, and measurable growth."
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
            I start by understanding your business goals — then deliver integrated solutions across software engineering,
            search optimization, content strategy, and AI automation. Every project is built for performance, discoverability,
            and conversion.
          </p>
        </motion.article>
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaHandshake />
          </div>
          <h3>Why Work With Me</h3>
          <p>
            You get full-stack development, technical SEO, digital marketing, and AI engineering in one partner. I've built
            platforms serving 10,000+ users with 98 Lighthouse scores and scaled campaigns generating 140%+ traffic increases.
          </p>
        </motion.article>
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaChartLine />
          </div>
          <h3>Core Expertise</h3>
          <ul className="about-skill-list" aria-label="Core expertise areas">
            <li>Full-Stack Web Development (React, TypeScript, Node.js)</li>
            <li>Technical SEO, Local SEO & GEO Optimization</li>
            <li>AI Engineering, Prompt Engineering & Automation</li>
            <li>Digital Marketing & Content Strategy</li>
            <li>Social Media Marketing & Paid Advertising</li>
            <li>Analytics, Core Web Vitals & Performance</li>
          </ul>
        </motion.article>
      </motion.div>
      {compact && (
        <p className="section-view-all">
          <Link to="/about">Learn more about me →</Link>
        </p>
      )}
    </section>
  )
}
