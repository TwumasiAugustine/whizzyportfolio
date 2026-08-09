export type ServicePageContent = {
  slug: string
  metaKey: string
  eyebrow: string
  h1: string
  intro: string
  problemHeading: string
  problems: string[]
  offeringsHeading: string
  offerings: Array<{ title: string; description: string }>
  technologies?: string[]
  localContext: string
  ctaHeading: string
  ctaText: string
  ctaPrimary: string
  ctaSecondary: string
  relatedLinks: Array<{ href: string; label: string }>
}

export const servicePages: ServicePageContent[] = [
  {
    slug: 'web-development',
    metaKey: 'webDevelopment',
    eyebrow: 'Web Development',
    h1: 'Full Stack Web Development in Kumasi, Ghana',
    intro:
      'Augustine Twumasi is a full stack developer in Kumasi, Ghana who builds modern web applications, business websites, and custom software using React, TypeScript, Node.js, and PostgreSQL. Based in the Ashanti Region, he works with Ghanaian startups, SMEs, schools, NGOs, and international clients who need reliable, performance-first digital products.',
    problemHeading: 'What I Help You Build',
    problems: [
      'Business websites that load fast on mobile — critical for Ghanaian users on varying network speeds',
      'Custom web applications and admin dashboards for schools, agencies, and service businesses',
      'SaaS platforms and internal tools with scalable React and Node.js architecture',
      'E-commerce and landing pages optimized for conversion and search visibility',
      'API integrations, authentication systems, and database-driven applications',
    ],
    offeringsHeading: 'Web Development Services',
    offerings: [
      {
        title: 'Full-Stack Web Applications',
        description:
          'End-to-end development with React, TypeScript, Node.js, Express, and PostgreSQL or MongoDB — from UI to API to deployment.',
      },
      {
        title: 'Business & Portfolio Websites',
        description:
          'Professional websites for Ghanaian businesses, personal brands, coaches, and organizations — mobile-first and SEO-ready.',
      },
      {
        title: 'Landing Pages & Funnels',
        description:
          'Conversion-focused landing pages for campaigns, product launches, and lead generation with analytics integration.',
      },
      {
        title: 'Performance & Refactoring',
        description:
          'Speed optimization, Core Web Vitals improvements, accessibility fixes, and codebase modernization for existing sites.',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Next.js',
      'Vite',
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'Tailwind CSS',
      'Vercel',
    ],
    localContext:
      'Whether you are a startup in Kumasi, a business across the Ashanti Region, or an organization anywhere in Ghana, I deliver web development remotely and on-site when needed. Projects are built with mobile-first users in mind and deployed on reliable global infrastructure.',
    ctaHeading: 'Discuss Your Web Project',
    ctaText:
      'Tell me about your website or application idea. I will help you scope the build, choose the right stack, and deliver a product that performs.',
    ctaPrimary: 'Discuss Your Project',
    ctaSecondary: 'View Web Development Projects',
    relatedLinks: [
      { href: '/seo', label: 'technical SEO services in Ghana' },
      { href: '/ai-automation', label: 'AI automation solutions' },
      { href: '/projects', label: 'full stack development portfolio' },
    ],
  },
  {
    slug: 'seo',
    metaKey: 'seo',
    eyebrow: 'Search Engine Optimization',
    h1: 'Technical SEO Specialist in Kumasi, Ghana',
    intro:
      'Augustine Twumasi provides technical SEO, local SEO, and SEO audit services for businesses in Kumasi, across Ghana, and internationally. He identifies crawl issues, improves site architecture, optimizes Core Web Vitals, implements structured data, and builds search strategies that increase organic visibility.',
    problemHeading: 'SEO Problems I Solve',
    problems: [
      'Websites that Google cannot crawl or index properly due to technical errors',
      'Poor local search visibility for Kumasi and Ghana-based service businesses',
      'Slow page speeds and Core Web Vitals failures hurting rankings and user experience',
      'Missing or incorrect structured data, metadata, and internal linking',
      'Content that does not match search intent or target the right keywords',
    ],
    offeringsHeading: 'SEO Services',
    offerings: [
      {
        title: 'Technical SEO Audits',
        description:
          'Comprehensive audits covering crawlability, indexability, site architecture, JavaScript SEO, redirects, and structured data.',
      },
      {
        title: 'Local SEO for Ghana',
        description:
          'Google Business Profile optimization, local citations, NAP consistency, and geo-targeted content for Kumasi and Ghanaian markets.',
      },
      {
        title: 'On-Page & Content SEO',
        description:
          'Keyword research, search intent mapping, metadata optimization, heading structure, and semantic content improvements.',
      },
      {
        title: 'Generative Engine Optimization (GEO)',
        description:
          'llms.txt implementation, AI-readable site architecture, and content structuring for ChatGPT, Claude, Gemini, and Perplexity.',
      },
    ],
    technologies: [
      'Google Search Console',
      'Google Analytics 4',
      'Screaming Frog',
      'Ahrefs',
      'Semrush',
      'Schema.org',
      'Core Web Vitals',
      'llms.txt',
    ],
    localContext:
      'Local SEO is especially valuable for Ghanaian businesses — restaurants, clinics, schools, agencies, and service providers in Kumasi and the Ashanti Region who need to appear in Google Maps and local search results. I also support national and international SEO campaigns.',
    ctaHeading: 'Request an SEO Audit',
    ctaText:
      'Start with a free SEO audit to identify the technical gaps and ranking opportunities holding your site back.',
    ctaPrimary: 'Request an SEO Audit',
    ctaSecondary: 'View SEO Case Studies',
    relatedLinks: [
      { href: '/web-development', label: 'SEO-friendly web development' },
      { href: '/digital-marketing', label: 'digital marketing services in Ghana' },
      { href: '/blog', label: 'SEO articles and guides' },
    ],
  },
  {
    slug: 'ai-automation',
    metaKey: 'aiAutomation',
    eyebrow: 'AI Engineering',
    h1: 'AI Engineer & Automation Consultant in Kumasi, Ghana',
    intro:
      'Augustine Twumasi helps businesses and developers in Ghana and worldwide integrate artificial intelligence into their workflows. From prompt engineering and AI agents to OpenAI and Anthropic API integrations, he builds practical AI automation that saves time and improves output quality.',
    problemHeading: 'AI Solutions I Deliver',
    problems: [
      'Manual workflows that could be automated with AI agents and structured prompts',
      'Businesses unsure how to integrate ChatGPT, Claude, or custom LLM APIs safely',
      'Content teams needing AI-assisted workflows without sacrificing quality',
      'Developers wanting RAG systems, knowledge bases, or AI-powered application features',
      'Marketing and SEO teams exploring AI automation for research, reporting, and optimization',
    ],
    offeringsHeading: 'AI & Automation Services',
    offerings: [
      {
        title: 'AI Consulting & Strategy',
        description:
          'Evaluate your use cases, select the right AI platforms, and design workflows that deliver measurable productivity gains.',
      },
      {
        title: 'Prompt Engineering',
        description:
          'Structured prompt systems for content creation, code assistance, customer support, and technical documentation.',
      },
      {
        title: 'API Integrations',
        description:
          'OpenAI, Anthropic, and LangChain integrations for custom applications, chatbots, and automation pipelines.',
      },
      {
        title: 'AI Agents & RAG Systems',
        description:
          'Retrieval-augmented generation pipelines, knowledge management systems, and multi-step AI agent workflows.',
      },
    ],
    technologies: [
      'OpenAI API',
      'Anthropic API',
      'LangChain',
      'ChatGPT',
      'Claude',
      'GitHub Copilot',
      'Prompt Engineering',
      'RAG',
    ],
    localContext:
      'AI adoption is growing among Ghanaian startups, agencies, and professional organizations. I help teams in Kumasi and across Ghana implement AI tools responsibly — with clear use cases, proper API integration, and workflows that complement human expertise rather than replace it.',
    ctaHeading: 'Start an AI Automation Project',
    ctaText:
      'Whether you need a one-time AI integration or ongoing automation support, let us map the highest-impact opportunities for your team.',
    ctaPrimary: 'Start an AI Project',
    ctaSecondary: 'Read AI Articles',
    relatedLinks: [
      { href: '/web-development', label: 'custom web application development' },
      { href: '/seo', label: 'AI search optimization (GEO)' },
      { href: '/blog', label: 'AI development insights' },
    ],
  },
  {
    slug: 'digital-marketing',
    metaKey: 'digitalMarketing',
    eyebrow: 'Digital Marketing',
    h1: 'Digital Marketing Consultant in Kumasi, Ghana',
    intro:
      'Augustine Twumasi provides digital marketing strategy, content marketing, social media management, paid advertising, and conversion optimization for businesses in Kumasi, Ghana, and beyond. He combines marketing expertise with technical knowledge to build campaigns that drive measurable leads and revenue.',
    problemHeading: 'Marketing Challenges I Address',
    problems: [
      'Ghanaian SMEs and startups struggling to generate consistent online leads',
      'Social media presence that gets engagement but not business results',
      'Landing pages and funnels with high bounce rates and low conversions',
      'Paid ad campaigns without proper tracking or ROI measurement',
      'Email lists and dormant contacts that are not being nurtured effectively',
    ],
    offeringsHeading: 'Digital Marketing Services',
    offerings: [
      {
        title: 'Digital Marketing Strategy',
        description:
          'Channel planning, audience research, messaging architecture, and growth roadmaps aligned to your business goals.',
      },
      {
        title: 'Social Media Marketing',
        description:
          'Content calendars, platform strategy, and organic growth systems for LinkedIn, Instagram, Facebook, TikTok, and YouTube.',
      },
      {
        title: 'Paid Advertising',
        description:
          'Google Ads, Meta Ads, and LinkedIn Ads setup, conversion tracking, remarketing, and campaign optimization.',
      },
      {
        title: 'Conversion Rate Optimization',
        description:
          'Landing page improvements, funnel analysis, A/B testing guidance, and analytics-backed messaging refinements.',
      },
    ],
    technologies: [
      'Google Ads',
      'Meta Ads',
      'Google Analytics 4',
      'Mailchimp',
      'HubSpot',
      'Looker Studio',
      'Conversion Tracking',
    ],
    localContext:
      'Ghanaian businesses face unique digital marketing dynamics — mobile-first audiences, growing social commerce, and increasing competition in local search. I help organizations in Kumasi and across Ghana build marketing systems that work for their market, not generic templates copied from other regions.',
    ctaHeading: 'Grow Your Digital Presence',
    ctaText:
      'Let us review your current marketing performance and identify the fastest paths to more leads, visibility, and conversions.',
    ctaPrimary: 'Book a Marketing Consultation',
    ctaSecondary: 'View Marketing Projects',
    relatedLinks: [
      { href: '/seo', label: 'SEO services for organic growth' },
      { href: '/web-development', label: 'conversion-ready website development' },
      { href: '/projects', label: 'marketing case studies' },
    ],
  },
]

export function getServicePageBySlug(slug: string): ServicePageContent | undefined {
  return servicePages.find((page) => page.slug === slug)
}
