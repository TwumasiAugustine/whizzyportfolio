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
} from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import type { SiteContent } from '../types/site'

type SkillsSectionProps = {
  content: SiteContent
}

const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SEO: FaSearch,
  'Social Media': FaHashtag,
  'Content Strategy': FaPenNib,
  'Brand Positioning': FaBullhorn,
  Analytics: FaChartBar,
  CRO: FaBullseye,
  'Landing Pages': FaLaptopCode,
  'Email Marketing': FaEnvelope,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <SectionTitle
        eyebrow="Skills"
        title="Digital Marketing and Growth Skill Stack"
        blurb="Capabilities used to plan, launch, and optimize high-converting campaigns."
      />
      <motion.ul
        className="pill-list"
        aria-label="Skills list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {content.skills.map((skill) => {
          const IconComponent = skillIconMap[skill]
          return (
            <motion.li key={skill} variants={pillVariants} className="skill-pill">
              {IconComponent && <IconComponent className="skill-icon" />}
              <span>{skill}</span>
            </motion.li>
          )
        })}
      </motion.ul>
    </section>
  )
}
