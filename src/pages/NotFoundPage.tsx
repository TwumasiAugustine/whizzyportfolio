import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FaHome, FaEnvelope } from 'react-icons/fa'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'

export function NotFoundPage() {
  usePageMeta(pageMeta.notFound)

  return (
    <div className="not-found-page">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="not-found-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="not-found-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="not-found-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </motion.p>

        <motion.div
          className="not-found-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/"
            className="btn btn-primary"
          >
            <FaHome style={{ marginRight: '0.5rem' }} />
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="btn btn-secondary"
          >
            <FaEnvelope style={{ marginRight: '0.5rem' }} />
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}