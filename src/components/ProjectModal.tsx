import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '../types/site'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (project) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="project-modal-content"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>

          <div className="project-modal-header">
            {project.image && (
              <div className="project-modal-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-modal-image"
                />
              </div>
            )}
            <span className="project-modal-category">{project.category}</span>
            <h2 id="project-modal-title" className="project-modal-title">
              {project.title}
            </h2>
          </div>

          <div className="project-modal-body">
            <div className="project-modal-section">
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </div>

            <div className="project-modal-section">
              <h3>Outcome</h3>
              <p>{project.result}</p>
            </div>

            {project.techStack && project.techStack.length > 0 && (
              <div className="project-modal-section">
                <h3>Tech Stack</h3>
                <div className="tech-stack-badges">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.tags.filter((tag) => !project.techStack?.includes(tag)).length > 0 && (
              <div className="project-modal-section">
                <h3>Additional Tags</h3>
                <ul className="tag-list">
                  {project.tags
                    .filter((tag) => !project.techStack?.includes(tag))
                    .map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                </ul>
              </div>
            )}

            {(project.url || project.demoUrl) && (
              <div className="project-modal-links">
                {project.url && project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    View Live
                  </a>
                )}
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View Repository
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
