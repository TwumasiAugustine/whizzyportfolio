import { motion } from 'motion/react'

type SectionTitleProps = {
  eyebrow: string
  title: string
  blurb: string
  headingLevel?: 'h1' | 'h2'
}

export function SectionTitle({
  eyebrow,
  title,
  blurb,
  headingLevel = 'h2',
}: SectionTitleProps) {
  const Heading = headingLevel

  return (
    <motion.header
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow">{eyebrow}</p>

      <Heading>{title}</Heading>

      <p className="blurb">{blurb}</p>
    </motion.header>
  )
}