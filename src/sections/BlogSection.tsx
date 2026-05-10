import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SectionTitle } from '../components/SectionTitle'
import type { SiteContent } from '../types/site'

type BlogSectionProps = {
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
}

export function BlogSection({ content }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = content.blogPosts || []

  const categories = useMemo(() => {
    const cats = new Set<string>()
    blogPosts.forEach((post) => cats.add(post.category))
    return ['All', ...Array.from(cats)]
  }, [blogPosts])

  const visiblePosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return blogPosts
    }
    return blogPosts.filter((post) => post.category === selectedCategory)
  }, [blogPosts, selectedCategory])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  if (!blogPosts.length) {
    return null
  }

  return (
    <section id="blog" className="section-shell" aria-labelledby="blog-title">
      <SectionTitle
        eyebrow="Insights & Resources"
        title="Latest Articles"
        blurb="Practical insights on web development, SEO, digital marketing strategy, and conversion optimization."
      />

      <motion.div
        className="project-filters"
        role="toolbar"
        aria-label="Filter blog posts by category"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={selectedCategory === category ? 'filter-pill active' : 'filter-pill'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="blog-grid">
        <AnimatePresence mode="wait">
          {visiblePosts.map((post, i) => (
            <motion.article
              key={post.id}
              className={`blog-card ${post.featured ? 'featured' : ''}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              layout
            >
              {post.image && (
                <div className="blog-card-image">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    width="800"
                    height="450"
                    style={{ aspectRatio: '16 / 9' }}
                  />
                  {post.featured && <span className="featured-badge">Featured</span>}
                </div>
              )}
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-divider">•</span>
                  <span className="blog-read-time">{post.readTime} min read</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <time className="blog-date" dateTime={post.publishDate}>
                    {formatDate(post.publishDate)}
                  </time>
                  <div className="blog-tags">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={post.externalUrl || `#blog/${post.id}`}
                  className="blog-read-more" 
                  aria-label={`Read article: ${post.title}`}
                  target={post.externalUrl ? '_blank' : '_self'}
                  rel={post.externalUrl ? 'noopener noreferrer' : undefined}
                >
                  Read Article →
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {visiblePosts.length === 0 && (
        <div className="empty-state">
          <p>No articles found in this category.</p>
        </div>
      )}
    </section>
  )
}
