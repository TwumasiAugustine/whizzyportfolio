import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import type { SiteContent } from '../types/site'

type PortfolioSectionProps = {
  content: SiteContent
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
}

export function PortfolioSection({ content }: PortfolioSectionProps) {
  const [selectedSkill, setSelectedSkill] = useState('All')

  const skillFilters = useMemo(() => {
    const tags = new Set<string>()
    content.projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag))
    })
    return ['All', ...Array.from(tags)]
  }, [content.projects])

  const visibleProjects = useMemo(() => {
    if (selectedSkill === 'All') {
      return content.projects
    }

    const normalized = selectedSkill.toLowerCase()

    return content.projects.filter((project) =>
      project.tags.some((tag) => {
        const tagText = tag.toLowerCase()
        return tagText.includes(normalized) || normalized.includes(tagText)
      }),
    )
  }, [content.projects, selectedSkill])

  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <SectionTitle
        eyebrow="Portfolio"
        title="Works and Projects"
        blurb="A focused portfolio of SEO, social, and conversion campaigns built for measurable business impact."
      />
      <motion.div
        className="project-filters"
        role="toolbar"
        aria-label="Filter projects by skill"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skillFilters.map((skill) => (
          <button
            type="button"
            key={skill}
            className={selectedSkill === skill ? 'filter-pill active' : 'filter-pill'}
            onClick={() => setSelectedSkill(skill)}
          >
            {skill}
          </button>
        ))}
      </motion.div>
      <div className="project-grid">
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
            <div className="project-media" aria-hidden="true">
              <span className="media-arrow">↗</span>
            </div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>
              <strong>Challenge:</strong> {project.challenge}
            </p>
            <p>
              <strong>Outcome:</strong> {project.result}
            </p>
            <ul className="tag-list" aria-label={`${project.title} tags`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {(project.url || project.demoUrl) && (
              <div className="project-links">
                {project.url && (
                  <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> View Project
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaEye /> Live Demo
                  </a>
                )}
              </div>
            )}
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      {visibleProjects.length === 0 ? (
        <p className="empty-state">No projects match this skill yet. Add case studies for this capability.</p>
      ) : null}
    </section>
  )
}
