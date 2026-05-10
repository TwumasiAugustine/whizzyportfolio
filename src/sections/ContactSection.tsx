import { useState, useRef } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'motion/react'
import emailjs from '@emailjs/browser'
import { trackFormSubmit } from '../components/GoogleAnalytics'
import type { SiteContent } from '../types/site'

type ContactSectionProps = {
  content: SiteContent
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection({ content }: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    setErrorMessage('')

    if (!formRef.current) return

    try {
      // EmailJS configuration - user needs to set up their own account
      // Get these values from https://www.emailjs.com/
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // Check if EmailJS is configured
      if (SERVICE_ID === 'YOUR_SERVICE_ID' || !SERVICE_ID) {
        throw new Error('EmailJS not configured. Please add your credentials to .env file.')
      }

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)

      setFormStatus('success')
      formRef.current.reset()
      
      // Track successful form submission
      trackFormSubmit('contact_form', true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setFormStatus('error')
      
      // Track failed form submission
      trackFormSubmit('contact_form', false)
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again or email directly.'
      )

      // Reset error after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <section id="contact" className="section-shell contact-shell" aria-labelledby="contact-title">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">General Message</h2>
        <p className="blurb">
          Send a direct message for collaborations, speaking, partnerships, or general questions.
        </p>
        <div className="contact-links">
          <a className="btn btn-secondary" href={content.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
          <a className="btn btn-secondary" href={`mailto:${content.contact.email}`}>
            Email Directly
          </a>
        </div>
      </motion.div>
      <motion.form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <label htmlFor="name">
          Name <span aria-label="required">*</span>
        </label>
        <input id="name" name="from_name" type="text" required disabled={formStatus === 'loading'} />

        <label htmlFor="email">
          Email <span aria-label="required">*</span>
        </label>
        <input id="email" name="reply_to" type="email" required disabled={formStatus === 'loading'} />

        <label htmlFor="subject">
          Subject <span aria-label="required">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="How can I help?"
          required
          disabled={formStatus === 'loading'}
        />

        <label htmlFor="message">
          Message <span aria-label="required">*</span>
        </label>
        <textarea id="message" name="message" rows={5} required disabled={formStatus === 'loading'} />

        <button type="submit" className="btn btn-primary" disabled={formStatus === 'loading'}>
          {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {/* Status Messages */}
        {formStatus === 'success' && (
          <motion.div
            className="form-message form-success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            aria-live="polite"
          >
            ✓ Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {formStatus === 'error' && (
          <motion.div
            className="form-message form-error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            aria-live="assertive"
          >
            ✗ {errorMessage}
          </motion.div>
        )}

        <p className="fine-print">For direct communication: {content.contact.email}</p>
      </motion.form>
    </section>
  )
}
