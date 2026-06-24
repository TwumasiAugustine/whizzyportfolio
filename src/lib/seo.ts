export const SITE_URL = 'https://augustinetwumasi.vercel.app'

export type PageMeta = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article'
}

export const defaultMeta: PageMeta = {
  title: 'Augustine Twumasi | Full-Stack Developer, SEO Specialist & AI Engineer',
  description:
    'Full-stack software developer, technical SEO specialist, digital marketing strategist, and AI engineer. Web development, SEO audits, GEO optimization, and growth marketing.',
  path: '/',
}

export const pageMeta: Record<string, PageMeta> = {
  home: defaultMeta,
  about: {
    title: 'About Augustine Twumasi | Full-Stack Developer & Digital Strategist',
    description:
      'Learn about Augustine Twumasi — full-stack developer, technical SEO specialist, AI engineer, and digital marketing strategist helping businesses grow through software and search.',
    path: '/about',
  },
  services: {
    title: 'Services | Web Development, SEO, AI & Digital Marketing',
    description:
      'Professional services: full-stack web development, technical SEO, local SEO, GEO optimization, AI consulting, digital marketing, paid ads, and email marketing.',
    path: '/services',
  },
  projects: {
    title: 'Projects & Case Studies | Portfolio',
    description:
      'Explore full-stack web applications, SEO case studies, AI-powered apps, marketing websites, and performance optimization projects by Augustine Twumasi.',
    path: '/projects',
  },
  blog: {
    title: 'Blog | Software Engineering, SEO & AI Insights',
    description:
      'Technical articles on React, TypeScript, Node.js, technical SEO, local SEO, GEO, AI development, digital marketing, and professional growth.',
    path: '/blog',
  },
  contact: {
    title: 'Contact Augustine Twumasi | Hire for Development & SEO',
    description:
      'Available for freelance projects, SEO consulting, AI consulting, contract work, and full-time opportunities. Book a call or send a message.',
    path: '/contact',
  },
}

export function applyPageMeta(meta: PageMeta) {
  document.title = meta.title

  const setMeta = (name: string, content: string, property = false) => {
    const attr = property ? 'property' : 'name'
    let el = document.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('title', meta.title)
  setMeta('description', meta.description)
  setMeta('og:title', meta.title, true)
  setMeta('og:description', meta.description, true)
  setMeta('og:url', `${SITE_URL}${meta.path}`, true)
  setMeta('twitter:title', meta.title)
  setMeta('twitter:description', meta.description)

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = `${SITE_URL}${meta.path}`
}
