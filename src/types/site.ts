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
  metric?: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type BlogPost = {
  id: string
  title: string
  excerpt: string
  content?: string
  category: string
  readTime: number
  publishDate: string
  image?: string
  tags: string[]
  featured?: boolean
  externalUrl?: string
}

export type Certification = {
  title: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  image?: string
}

export type Achievement = {
  title: string
  description: string
  date: string
  icon?: string
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
  blogPosts?: BlogPost[]
  certifications?: Certification[]
  achievements?: Achievement[]
  stats: Array<{ value: string; label: string }>
  clientLogos: Array<{ name: string; imageUrl: string }>
  insights: {
    title: string
    summary: string
    deliverables?: string[]
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
