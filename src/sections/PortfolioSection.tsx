import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { ImageLightbox } from '../components/ImageLightbox'
import { ProjectModal } from '../components/ProjectModal'
import type { SiteContent, Project } from '../types/site'

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
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categoryFilters = useMemo(() => {
    const categories = new Set<string>()
    content.projects.forEach((project) => {
      categories.add(project.category)
    })
    return ['All', ...Array.from(categories)]
  }, [content.projects])

  const skillFilters = useMemo(() => {
    const skills = new Set<string>()
    
    // Filter projects by selected category first
    const relevantProjects = selectedCategory === 'All' 
      ? content.projects 
      : content.projects.filter(p => p.category === selectedCategory)
    
    // Extract skills only from relevant projects
    const categoryNames = new Set(categoryFilters.filter(c => c !== 'All'))
    
    relevantProjects.forEach((project) => {
      // Add techStack items (primarily from web dev projects)
      if (project.techStack) {
        project.techStack.forEach((tech) => skills.add(tech))
      }
      
      // Add tags that aren't categories
      project.tags.forEach((tag) => {
        if (!categoryNames.has(tag)) {
          skills.add(tag)
        }
      })
    })
    
    return ['All', ...Array.from(skills).sort()]
  }, [content.projects, categoryFilters, selectedCategory])

  const visibleProjects = useMemo(() => {
    let filtered = content.projects

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((project) => project.category === selectedCategory)
    }

    // Filter by skill/tag
    if (selectedSkill !== 'All') {
      const normalized = selectedSkill.toLowerCase()
      filtered = filtered.filter((project) => {
        // Check techStack first
        if (project.techStack?.some((tech) => tech.toLowerCase().includes(normalized) || normalized.includes(tech.toLowerCase()))) {
          return true
        }
        
        // Then check tags
        return project.tags.some((tag) => {
          const tagText = tag.toLowerCase()
          return tagText.includes(normalized) || normalized.includes(tagText)
        })
      })
    }

    return filtered
  }, [content.projects, selectedSkill, selectedCategory])

  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <SectionTitle
        eyebrow="Portfolio"
        title="Development & Marketing Projects"
        blurb="Web applications, SaaS platforms, and marketing campaigns built with technical excellence and growth focus."
      />
      
      {/* Category Filters */}
      <motion.div
        className="project-category-filters"
        role="toolbar"
        aria-label="Filter projects by category"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {categoryFilters.map((category) => (
          <button
            type="button"
            key={category}
            className={selectedCategory === category ? 'filter-pill category-pill active' : 'filter-pill category-pill'}
            onClick={() => {
              setSelectedCategory(category)
              setSelectedSkill('All') // Reset skill filter when category changes
            }}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Skill/Tag Filters - Only show when a specific category is selected */}
      {selectedCategory !== 'All' && (
        <motion.div
          className="project-filters"
          role="toolbar"
          aria-label="Filter projects by skill"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
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
      )}
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
            <div
              className="project-media"
              onClick={() => project.image && setLightboxImage({ src: project.image, alt: project.title })}
              role={project.image ? 'button' : undefined}
              tabIndex={project.image ? 0 : undefined}
              onKeyDown={(e) => {
                if (project.image && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault()
                  setLightboxImage({ src: project.image, alt: project.title })
                }
              }}
              aria-label={project.image ? `View ${project.title} image` : undefined}
              style={{ cursor: project.image ? 'pointer' : 'default' }}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} loading="lazy" />
              ) : (
                <div className="project-media-placeholder">
                  <span className="media-arrow">↗</span>
                </div>
              )}
            </div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <div className="project-preview">
              <p className="project-preview-text">
                <strong>Challenge:</strong> {project.challenge}
              </p>
              <p className="project-preview-text">
                <strong>Outcome:</strong> {project.result}
              </p>
            </div>
            {project.techStack && project.techStack.length > 0 && (
              <div className="tech-stack-badges">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="project-links">
              <button
                type="button"
                className="project-link project-link-details"
                onClick={() => setSelectedProject(project)}
              >
                <FaEye /> Learn More
              </button>
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
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      {visibleProjects.length === 0 ? (
        <p className="empty-state">No projects match this skill yet. Add case studies for this capability.</p>
      ) : null}
      <ImageLightbox
        image={lightboxImage?.src || ''}
        alt={lightboxImage?.alt || ''}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
