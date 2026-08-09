import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { siteContent } from '../data/site-content'

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
  const { location } = siteContent

  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <SectionTitle
        eyebrow="About"
        title="Full Stack Development, SEO & AI — From Kumasi to Worldwide"
        blurb={`Based in ${location.city}, ${location.region}, ${location.country}, I design, build, and optimize websites and applications for Ghanaian businesses, startups, schools, and international clients.`}
      />
      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaLightbulb />
          </div>
          <h3>How I Work</h3>
          <p>
            I start with your business goals and audience — then deliver integrated solutions across software
            engineering, search optimization, content strategy, and AI automation. Every project is built for
            performance on mobile, discoverability in search, and measurable conversion outcomes.
          </p>
        </motion.article>
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaHandshake />
          </div>
          <h3>Why Work With Me</h3>
          <p>
            You get a full stack developer, technical SEO specialist, and AI engineer in one partner. I have built
            platforms serving 10,000+ users with 98 Lighthouse scores and delivered SEO campaigns that increased
            organic traffic by 140% for client businesses.
          </p>
        </motion.article>
        <motion.article variants={itemVariants}>
          <div className="about-icon">
            <FaChartLine />
          </div>
          <h3>Core Expertise</h3>
          <ul className="about-skill-list" aria-label="Core expertise areas">
            <li>
              <Link to="/web-development">Full stack web development</Link> (React, TypeScript, Node.js)
            </li>
            <li>
              <Link to="/seo">Technical SEO, local SEO & GEO optimization</Link>
            </li>
            <li>
              <Link to="/ai-automation">AI engineering, prompt engineering & automation</Link>
            </li>
            <li>
              <Link to="/digital-marketing">Digital marketing & content strategy</Link>
            </li>
            <li>Social media marketing & paid advertising</li>
            <li>Analytics, Core Web Vitals & performance optimization</li>
          </ul>
        </motion.article>
      </motion.div>
      {compact && (
        <p className="section-view-all">
          <Link to="/about">Learn more about Augustine Twumasi →</Link>
        </p>
      )}
    </section>
  )
}
