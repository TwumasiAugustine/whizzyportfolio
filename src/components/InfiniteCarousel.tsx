import { motion } from 'motion/react'

type Logo = {
  name: string
  imageUrl: string
}

type InfiniteCarouselProps = {
  items: Logo[]
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
          <div key={`${item.name}-${index}`} className="carousel-item">
            <img 
              src={item.imageUrl} 
              alt={`${item.name} logo`}
              className="carousel-logo"
              loading="lazy"
              width="80"
              height="40"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
