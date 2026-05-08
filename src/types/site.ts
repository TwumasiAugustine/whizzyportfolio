export type Service = {
  title: string
  summary: string
  outcomes: string[]
  icon: string
}

export type Project = {
  title: string
  category: string
  challenge: string
  result: string
  tags: string[]
  image?: string
  url?: string
  demoUrl?: string
}

export type Testimonial = {
  quote: string
  author: string
  role: string
  company?: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type SiteContent = {
  personName: string
  brandName: string
  profileImage: string
  profileLine: string
  positioning: string
  heroHeadline: string
  heroSubheadline: string
  primaryCta: string
  secondaryCta: string
  services: Service[]
  skills: string[]
  projects: Project[]
  testimonials: Testimonial[]
  faqs: FaqItem[]
  stats: Array<{ value: string; label: string }>
  clientLogos: string[]
  insights: {
    title: string
    summary: string
  }
  socialLinks: Array<{
    label: string
    href: string
    icon: string
  }>
  contact: {
    email: string
    calendlyUrl: string
    generalMessageFormUrl: string
    insightsFormUrl: string
  }
}
