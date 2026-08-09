export const SITE_URL = 'https://augustinetwumasi.vercel.app'

export type PageMeta = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article'
  index?: boolean
}

export const defaultMeta: PageMeta = {
  title: 'Full Stack Developer in Ghana | Augustine Twumasi',
  description:
    'Augustine Twumasi is a full stack developer, AI engineer, and technical SEO specialist based in Kumasi, Ghana. React, TypeScript, Node.js, SEO audits, and digital marketing for businesses in Ghana and worldwide.',
  path: '/',
  ogType: 'website',
}

export const pageMeta: Record<string, PageMeta> = {
  home: defaultMeta,

  about: {
    title: 'About Augustine Twumasi | Full Stack Developer in Kumasi, Ghana',
    description:
      'Learn about Augustine Twumasi — full stack software developer, technical SEO specialist, AI engineer, and digital marketing strategist based in Kumasi, Ashanti Region, Ghana.',
    path: '/about',
    ogType: 'website',
  },

  services: {
    title: 'Web Development, SEO & AI Services in Ghana | Augustine Twumasi',
    description:
      'Professional services in Kumasi and across Ghana: full stack web development, technical SEO, local SEO, AI automation, digital marketing, and performance optimization.',
    path: '/services',
    ogType: 'website',
  },

  webDevelopment: {
    title: 'Full Stack Web Development Services in Ghana | Augustine Twumasi',
    description:
      'Hire a full stack developer in Kumasi, Ghana. Custom web applications, business websites, and React/TypeScript/Node.js development for Ghanaian startups, SMEs, and international clients.',
    path: '/web-development',
    ogType: 'website',
  },

  seo: {
    title: 'Technical SEO Services in Ghana | Augustine Twumasi',
    description:
      'Technical SEO specialist and SEO consultant in Kumasi, Ghana. SEO audits, local SEO, Core Web Vitals, structured data, and GEO optimization for businesses in Ghana and beyond.',
    path: '/seo',
    ogType: 'website',
  },

  aiAutomation: {
    title: 'AI Automation Services in Ghana | Augustine Twumasi',
    description:
      'AI engineer and automation consultant in Kumasi, Ghana. Prompt engineering, AI agents, OpenAI/Anthropic API integration, and RAG systems for businesses and developers.',
    path: '/ai-automation',
    ogType: 'website',
  },

  digitalMarketing: {
    title: 'Digital Marketing Services in Ghana | Augustine Twumasi',
    description:
      'Digital marketing consultant in Kumasi, Ghana. Strategy, social media, paid ads, email marketing, and conversion optimization for Ghanaian businesses and organizations.',
    path: '/digital-marketing',
    ogType: 'website',
  },

  projects: {
    title: 'Projects & Case Studies | Augustine Twumasi',
    description:
      'Full stack web applications, SEO case studies, and marketing projects by Augustine Twumasi — full stack developer and SEO specialist based in Kumasi, Ghana.',
    path: '/projects',
    ogType: 'website',
  },

  blog: {
    title: 'Blog | Web Development, SEO & AI Insights | Augustine Twumasi',
    description:
      'Technical articles on React, TypeScript, Node.js, technical SEO, local SEO, AI development, and digital marketing by Augustine Twumasi, developer in Kumasi, Ghana.',
    path: '/blog',
    ogType: 'website',
  },

  contact: {
    title: 'Hire a Web Developer in Kumasi, Ghana | Augustine Twumasi',
    description:
      'Contact Augustine Twumasi for web development, SEO consulting, AI automation, and digital marketing in Kumasi, Ghana. Available for freelance, contract, and remote work worldwide.',
    path: '/contact',
    ogType: 'website',
  },
   privacyPolicy: {
    title: 'Privacy Policy | Augustine Twumasi',
   description:
      'Privacy policy for augustinetwumasi.vercel.app, explaining what information is collected from visitors of Augustine Twumasi\'s portfolio website, how it is used, and your rights.',
    path: '/privacy-policy',
    ogType: 'website',
  },

 termsAndConditions: {
    title: 'Terms & Conditions | Augustine Twumasi',
    description:
     'Terms and conditions governing the use of augustinetwumasi.vercel.app, the portfolio website of Augustine Twumasi, full stack developer in Kumasi, Ghana.',
    path: '/terms-and-conditions',
    ogType: 'website',
  },

  notFound: {
    title: 'Page Not Found | Augustine Twumasi',
    description: 'The page you are looking for does not exist.',
    path: '/404',
    index: false,
    ogType: 'website',
  },
}

/**
 * Normalize a URL pathname.
 *
 * Examples:
 *
 * "/"          → "/"
 * "/about"     → "/about"
 * "/about/"    → "/about"
 * "//about//"  → "/about"
 */
export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/'
  }

  const normalized = pathname
    .replace(/\/+/g, '/')
    .replace(/\/+$/, '')

  return normalized || '/'
}

/**
 * Convert a site path into an absolute canonical URL.
 */
export function getCanonicalUrl(path: string): string {
  const normalizedPath = normalizePath(path)

  if (normalizedPath === '/') {
    return `${SITE_URL}/`
  }

  return `${SITE_URL}${normalizedPath}`
}

/**
 * Find a meta definition for the current route.
 */
export function getPageMetaByPath(pathname: string): PageMeta | null {
  const normalizedPath = normalizePath(pathname)

  return (
    Object.values(pageMeta).find(
      (meta) => normalizePath(meta.path) === normalizedPath,
    ) ?? null
  )
}

/**
 * Update or create a meta tag.
 */
function setMeta(
  name: string,
  content: string,
  property = false,
): void {
  const attribute = property ? 'property' : 'name'

  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${name}"]`,
  )

  if (!element) {
    element = document.createElement('meta')

    element.setAttribute(attribute, name)

    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

/**
 * Update the canonical link.
 *
 * There should only ever be ONE canonical link.
 */
function setCanonical(path: string): void {
  const canonicalUrl = getCanonicalUrl(path)

  let canonical = document.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )

  if (!canonical) {
    canonical = document.createElement('link')

    canonical.setAttribute('rel', 'canonical')

    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', canonicalUrl)
}

/**
 * Update robots directive.
 */
function setRobots(index = true): void {
  setMeta(
    'robots',
    index ? 'index, follow' : 'noindex, nofollow',
  )
}

/**
 * Apply SEO metadata for a page.
 */
export function applyPageMeta(meta: PageMeta): void {
  const canonicalUrl = getCanonicalUrl(meta.path)

  document.title = meta.title

  setMeta('title', meta.title)

  setMeta('description', meta.description)

  setMeta(
    'og:title',
    meta.title,
    true,
  )

  setMeta(
    'og:description',
    meta.description,
    true,
  )

  setMeta(
    'og:url',
    canonicalUrl,
    true,
  )

  setMeta(
    'og:type',
    meta.ogType ?? 'website',
    true,
  )

  setMeta(
    'twitter:title',
    meta.title,
  )

  setMeta(
    'twitter:description',
    meta.description,
  )

  setMeta(
    'twitter:url',
    canonicalUrl,
  )

  setRobots(meta.index !== false)

  setCanonical(meta.path)
}

/**
 * Immediately correct the canonical URL when the SPA loads.
 *
 * This prevents every route from initially inheriting
 * the homepage canonical from index.html.
 */
export function initializeCanonical(): void {
  if (
    typeof window === 'undefined' ||
    typeof document === 'undefined'
  ) {
    return
  }

  const currentPath = normalizePath(window.location.pathname)

  const page = getPageMetaByPath(currentPath)

  if (page) {
    setCanonical(page.path)
    setRobots(page.index !== false)

    return
  }

  /**
   * Unknown URLs are 404 pages.
   *
   * Do NOT allow arbitrary URLs such as:
   *
   * /abc
   * /hello
   * /random-page
   *
   * to become indexable duplicates.
   */
  setRobots(false)

  setCanonical('/404')
}

/**
 * Run immediately when this module loads.
 */
if (
  typeof window !== 'undefined' &&
  typeof document !== 'undefined'
) {
  initializeCanonical()
}