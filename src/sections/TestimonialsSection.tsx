import { useState, useMemo } from 'react'
import { motion } from 'motion/react'
import { SectionTitle } from '../components/SectionTitle'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import type { SiteContent } from '../types/site'

type TestimonialsSectionProps = {
  content: SiteContent
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredTestimonials = useMemo(() => {
    if (selectedCategory === 'all') {
      return content.testimonials
    }
    return content.testimonials.filter((t) => t.category === selectedCategory)
  }, [content.testimonials, selectedCategory])

  return (
    <section id="testimonials" className="section-shell" aria-labelledby="testimonials-title">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle
          eyebrow="Testimonials"
          title="What Clients Say About Working Together"
          blurb="Real feedback from businesses and individuals who've seen measurable growth."
        />
      </motion.div>

      {/* Testimonial Category Filters */}
      <motion.div
        className="testimonial-filters"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <button
          type="button"
          className={selectedCategory === 'all' ? 'filter-pill active' : 'filter-pill'}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          type="button"
          className={selectedCategory === 'development' ? 'filter-pill active' : 'filter-pill'}
          onClick={() => setSelectedCategory('development')}
        >
          Development
        </button>
        <button
          type="button"
          className={selectedCategory === 'marketing' ? 'filter-pill active' : 'filter-pill'}
          onClick={() => setSelectedCategory('marketing')}
        >
          Marketing
        </button>
        <button
          type="button"
          className={selectedCategory === 'hybrid' ? 'filter-pill active' : 'filter-pill'}
          onClick={() => setSelectedCategory('hybrid')}
        >
          Both
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <TestimonialCarousel testimonials={filteredTestimonials} />
      </motion.div>
    </section>
  )
}
