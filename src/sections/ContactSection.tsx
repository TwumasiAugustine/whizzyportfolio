import { motion } from 'motion/react'
import type { SiteContent } from '../types/site'

type ContactSectionProps = {
  content: SiteContent
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell contact-shell" aria-labelledby="contact-title">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">General Message</h2>
        <p className="blurb">
          Send a direct message for collaborations, speaking, partnerships, or general questions.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={content.contact.generalMessageFormUrl}>
            Open Message Form
          </a>
          <a className="btn btn-secondary" href={content.contact.calendlyUrl}>
            Book a Call
          </a>
        </div>
      </motion.div>
      <motion.form
        className="contact-form"
        action={content.contact.generalMessageFormUrl}
        method="get"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="How can I help?" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
        <p className="fine-print">For direct communication: {content.contact.email}</p>
      </motion.form>
    </section>
  )
}
