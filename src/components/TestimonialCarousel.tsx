import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import type { Testimonial } from '../types/site'

type TestimonialCarouselProps = {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div className="testimonial-carousel">
      <div className="carousel-content">
        <button
          className="carousel-nav carousel-nav-prev"
          onClick={handlePrevious}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>

        <div className="carousel-viewport">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="carousel-slide"
            >
              <blockquote className="testimonial-card-carousel">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
                <footer className="testimonial-footer">
                  <cite>
                    <strong>{testimonials[currentIndex].author}</strong>
                    <span>{testimonials[currentIndex].role}</span>
                    {testimonials[currentIndex].company && (
                      <span className="testimonial-company">{testimonials[currentIndex].company}</span>
                    )}
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="carousel-nav carousel-nav-next"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
