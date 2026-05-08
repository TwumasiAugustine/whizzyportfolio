import type { SiteContent } from '../types/site'

export const siteContent: SiteContent = {
  personName: 'Augustine Twumasi',
  brandName: 'Codiq',
  profileLine: 'Digital Marketing Strategist for growth-focused businesses and individuals.',
  positioning:
    'I help businesses, entrepreneurs, and individuals grow revenue through SEO, social media strategy, and conversion-focused digital marketing systems.',
  heroHeadline: 'Transform Your Digital Presence Into a Predictable Lead Generation System',
  heroSubheadline:
    'I help businesses and entrepreneurs build SEO-optimized, conversion-focused marketing systems that consistently attract qualified leads. Strategy first, tactics second, measurable growth always.',
  primaryCta: 'Book a Strategy Call',
  secondaryCta: 'See Growth Opportunities',
  services: [
    {
      title: 'SEO Strategy and Auditing',
      summary:
        'Practical SEO roadmaps that improve rankings, visibility, and inbound lead quality for businesses and personal brands.',
      outcomes: ['Technical SEO audits', 'Keyword intent mapping', 'Metadata and content optimization'],
      icon: 'FaSearch',
    },
    {
      title: 'Social Media Growth Management',
      summary:
        'Brand-aligned social strategy and publishing systems that convert engagement into pipeline opportunities.',
      outcomes: ['Channel strategy planning', 'Content calendar execution', 'Audience growth and lead routing'],
      icon: 'FaChartLine',
    },
    {
      title: 'Conversion Landing Optimization',
      summary:
        'Lightweight landing-page improvements for campaigns when UX friction is blocking lead conversion.',
      outcomes: ['Offer positioning clarity', 'CTA and funnel optimization', 'Analytics-backed improvements'],
      icon: 'FaBullseye',
    },
  ],
  skills: [
    'SEO',
    'Social Media',
    'Content Strategy',
    'Brand Positioning',
    'Analytics',
    'CRO',
    'Landing Pages',
    'Email Marketing',
  ],
  projects: [
    {
      title: 'Local SEO Acceleration Campaign',
      category: 'SEO',
      challenge: 'Low search visibility and inconsistent inbound leads for a service business.',
      result: 'Improved keyword positioning and stronger lead consistency through technical and on-page fixes.',
      tags: ['SEO', 'Analytics', 'Content Strategy'],
      url: '#',
    },
    {
      title: 'Social Media Lead Funnel Sprint',
      category: 'Social Media',
      challenge: 'Strong posting activity but weak conversion into inquiries.',
      result: 'Built a campaign funnel with clearer offer messaging and lead routing pathways.',
      tags: ['Social Media', 'CRO', 'Brand Positioning'],
      url: '#',
    },
    {
      title: 'Campaign Landing Page Refresh',
      category: 'Landing Pages',
      challenge: 'Paid and social traffic bounced due to unclear value proposition.',
      result: 'Refined layout and message hierarchy to improve conversion readiness and form starts.',
      tags: ['Landing Pages', 'CRO', 'SEO'],
      url: '#',
      demoUrl: '#',
    },
    {
      title: 'Email Reactivation and Nurture Sequence',
      category: 'Email Marketing',
      challenge: 'Dormant leads and low follow-up conversion rates.',
      result: 'Introduced segmented nurture content that reactivated inactive prospects.',
      tags: ['Email Marketing', 'Content Strategy', 'Analytics'],
      url: '#',
    },
  ],
  testimonials: [
    {
      quote:
        'Augustine transformed our SEO approach completely. Within 8 weeks, we saw a 140% increase in organic traffic and our lead quality improved dramatically. His technical audits uncovered issues our previous agency missed.',
      author: 'Sarah Mitchell',
      role: 'Marketing Director',
      company: 'GreenLeaf Consulting',
    },
    {
      quote:
        'Working with Augustine on our social media strategy was a game-changer. He helped us build a content system that actually converts followers into customers. Our Instagram engagement went from 2% to 8% in three months.',
      author: 'Marcus Thompson',
      role: 'Founder & CEO',
      company: 'FitLife Studios',
    },
    {
      quote:
        'The landing page optimization Augustine did for our campaign increased our conversion rate from 2.3% to 6.1%. His attention to messaging clarity and funnel psychology made all the difference. ROI improved by 165%.',
      author: 'Jennifer Park',
      role: 'Head of Growth',
      company: 'CloudSync Tech',
    },
    {
      quote:
        'I hired Augustine to help with my personal brand SEO as a freelance consultant. He made technical SEO accessible and actionable. Now I rank page 1 for my target keywords and get 3-4 quality inquiries per week.',
      author: 'David Osei',
      role: 'Freelance Business Consultant',
    },
    {
      quote:
        "Augustine's email nurture sequences brought back 28% of our dormant leads. His segmentation strategy and messaging framework turned cold contacts into warm opportunities. Best investment we made this quarter.",
      author: 'Priya Sharma',
      role: 'Sales Operations Lead',
      company: 'Apex Solutions',
    },
    {
      quote:
        'As a solopreneur, I needed someone who understood both strategy and execution. Augustine set up my entire content calendar, optimized my LinkedIn presence, and helped me land two major clients in my first month.',
      author: 'Alex Rivera',
      role: 'Independent Brand Strategist',
    },
  ],
  faqs: [
    {
      question: 'Who do you work with?',
      answer:
        'I work with businesses, entrepreneurs, freelancers, creators, and individuals who need stronger digital marketing performance and lead consistency. From SMEs to personal brands, I help clients achieve measurable growth.',
    },
    {
      question: 'Do you provide full web development projects?',
      answer:
        'My focus is digital marketing execution. I only include web development work when landing-page or conversion fixes are required for campaign performance.',
    },
    {
      question: 'How fast can we start seeing impact?',
      answer:
        'Most clients begin with quick-win SEO and funnel improvements in the first 2-3 weeks, then scale based on results.',
    },
    {
      question: 'Can we start with an SEO audit first?',
      answer: 'Yes. The free SEO audit is designed as the best first step before any larger engagement.',
    },
  ],
  stats: [
    { value: '100%', label: 'Digital Marketing Focus' },
    { value: '2-3 Weeks', label: 'Typical Audit-to-Action Cycle' },
    { value: 'Global', label: 'Remote Campaign Support' },
  ],
  clientLogos: ['Walmart', 'LinkedIn', 'Google', 'Slack', 'Amazon'],
  insights: {
    title: 'Get Your Free Digital Visibility Audit',
    summary:
      "I'll review your website and social media presence to show you exactly what's stopping you from being found online—and the quickest ways to fix it. No jargon, just clear next steps.",
  },
  socialLinks: [
    { label: 'LinkedIn', href: '#', icon: 'FaLinkedin' },
    { label: 'X', href: '#', icon: 'FaXTwitter' },
    { label: 'Instagram', href: '#', icon: 'FaInstagram' },
    { label: 'GitHub', href: '#', icon: 'FaGithub' },
  ],
  contact: {
    email: 'hello@codiqstudio.com',
    calendlyUrl: '#',
    generalMessageFormUrl: '#',
    insightsFormUrl: '#',
  },
}
