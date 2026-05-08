import { motion } from 'motion/react'
import {
  FaSearch,
  FaHashtag,
  FaPenNib,
  FaBullhorn,
  FaChartBar,
  FaBullseye,
  FaLaptopCode,
  FaEnvelope,
  FaPalette,
} from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'

type Skill = {
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const skillData: Skill[] = [
  {
    name: 'SEO & Search Strategy',
    icon: FaSearch,
    description: 'Organic visibility, keyword research, and technical optimization',
  },
  {
    name: 'Social Media Marketing',
    icon: FaHashtag,
    description: 'Platform strategy, community building, and engagement growth',
  },
  {
    name: 'Content Strategy',
    icon: FaPenNib,
    description: 'Editorial planning, messaging architecture, and storytelling',
  },
  {
    name: 'Brand Positioning',
    icon: FaBullhorn,
    description: 'Market differentiation, voice development, and identity systems',
  },
  {
    name: 'Analytics & Insights',
    icon: FaChartBar,
    description: 'Data interpretation, performance tracking, and reporting',
  },
  {
    name: 'Conversion Optimization',
    icon: FaBullseye,
    description: 'A/B testing, funnel analysis, and user journey refinement',
  },
  {
    name: 'Landing Page Design',
    icon: FaLaptopCode,
    description: 'High-converting layouts, UX design, and frontend development',
  },
  {
    name: 'Email Marketing',
    icon: FaEnvelope,
    description: 'Campaign automation, segmentation, and deliverability',
  },
  {
    name: 'Graphic Design',
    icon: FaPalette,
    description: 'Visual identity, marketing collateral, and brand assets',
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

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <SectionTitle
        eyebrow="Skills"
        title="Digital Marketing and Growth Skill Stack"
        blurb="Core capabilities spanning strategy, execution, and optimization across the marketing funnel."
      />
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
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
    </section>
  )
}
