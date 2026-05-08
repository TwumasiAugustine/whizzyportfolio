import { motion } from 'motion/react'

type InfiniteCarouselProps = {
  items: string[]
  duration?: number
}

export function InfiniteCarousel({ items, duration = 20 }: InfiniteCarouselProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items]

  return (
    <div className="carousel-container" aria-label="Client logos carousel">
      <motion.div
        className="carousel-track"
        animate={{
          x: [0, -50 + '%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="carousel-item">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
