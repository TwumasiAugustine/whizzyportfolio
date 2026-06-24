import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  FaSearch,
  FaHashtag,
  FaPenNib,
  FaBullhorn,
  FaChartBar,
  FaBullseye,
  FaLaptopCode,
  FaEnvelope,
  FaRobot,
  FaServer,
} from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'

type Skill = {
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const defaultSkillData: Skill[] = [
  {
    name: 'Full-Stack Development',
    icon: FaLaptopCode,
    description: 'React, TypeScript, Node.js, APIs, databases, and scalable architecture',
  },
  {
    name: 'Technical SEO & GEO',
    icon: FaSearch,
    description: 'Crawl optimization, structured data, Core Web Vitals, and AI search visibility',
  },
  {
    name: 'AI Engineering',
    icon: FaRobot,
    description: 'Prompt engineering, AI agents, RAG, OpenAI/Anthropic APIs, and automation',
  },
  {
    name: 'Digital Marketing',
    icon: FaBullhorn,
    description: 'Growth strategy, content marketing, CRO, and funnel optimization',
  },
  {
    name: 'Social Media Marketing',
    icon: FaHashtag,
    description: 'Platform strategy, content calendars, and organic growth systems',
  },
  {
    name: 'Paid Advertising',
    icon: FaBullseye,
    description: 'Google Ads, Meta Ads, LinkedIn Ads, and conversion tracking',
  },
  {
    name: 'Content Strategy',
    icon: FaPenNib,
    description: 'Editorial planning, semantic SEO, and E-E-A-T optimization',
  },
  {
    name: 'Analytics & Insights',
    icon: FaChartBar,
    description: 'GA4, Search Console, GTM, Looker Studio, and KPI dashboards',
  },
  {
    name: 'Email Marketing',
    icon: FaEnvelope,
    description: 'Campaign automation, segmentation, and CRM integration',
  },
  {
    name: 'Backend & DevOps',
    icon: FaServer,
    description: 'Node.js, Express, PostgreSQL, MongoDB, Supabase, and Vercel deployment',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

type SkillsSectionProps = {
  compact?: boolean
}

export function SkillsSection({ compact = false }: SkillsSectionProps) {
  const skillData = compact ? defaultSkillData.slice(0, 6) : defaultSkillData

  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <SectionTitle
        eyebrow="Skills"
        title="Development, SEO, AI & Marketing Stack"
        blurb="Core capabilities spanning software engineering, search optimization, artificial intelligence, and digital growth."
      />
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {skillData.map((skill) => {
          const IconComponent = skill.icon
          return (
            <motion.div key={skill.name} variants={cardVariants} className="skill-card">
              <div className="skill-card-icon">
                <IconComponent />
              </div>
              <h3 className="skill-card-title">{skill.name}</h3>
              <p className="skill-card-description">{skill.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
      {compact && (
        <p className="section-view-all">
          <Link to="/about">See full expertise →</Link>
        </p>
      )}
    </section>
  )
}
