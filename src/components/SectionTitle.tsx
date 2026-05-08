import { motion } from 'motion/react'

type SectionTitleProps = {
  eyebrow: string
  title: string
  blurb: string
}

export function SectionTitle({ eyebrow, title, blurb }: SectionTitleProps) {
  return (
    <motion.header
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="blurb">{blurb}</p>
    </motion.header>
  )
}
