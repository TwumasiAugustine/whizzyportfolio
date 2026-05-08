import { motion } from 'motion/react'
import { SectionTitle } from '../components/SectionTitle'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import type { SiteContent } from '../types/site'

type TestimonialsSectionProps = {
  content: SiteContent
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
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
          blurb="Real feedback from businesses and individuals who've seen measurable growth through strategic digital marketing."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <TestimonialCarousel testimonials={content.testimonials} />
      </motion.div>
    </section>
  )
}
