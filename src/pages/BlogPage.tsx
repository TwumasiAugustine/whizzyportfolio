import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../lib/seo'
import { siteContent } from '../data/site-content'
import { SectionTitle } from '../components/SectionTitle'
import { BlogSection } from '../sections/BlogSection'

const FooterSection = lazy(() => import('../sections/FooterSection').then((m) => ({ default: m.FooterSection })))

const blogTopics = [
  {
    title: 'Software Engineering',
    topics: ['React', 'TypeScript', 'Node.js', 'APIs', 'Performance', 'Accessibility', 'Deployment'],
  },
  {
    title: 'Search Engine Optimization',
    topics: ['Technical SEO', 'Local SEO', 'GEO', 'Structured Data', 'Core Web Vitals', 'Content Strategy'],
  },
  {
    title: 'Artificial Intelligence',
    topics: ['Prompt Engineering', 'AI Agents', 'RAG', 'AI Automation', 'LLM Optimization'],
  },
  {
    title: 'Digital Marketing',
    topics: ['Content Marketing', 'Social Media', 'CRO', 'Email Marketing', 'Analytics', 'Paid Advertising'],
  },
  {
    title: 'Professional Development',
    topics: ['Portfolio Building', 'Freelancing', 'Technical Writing', 'Career Development'],
  },
]

export function BlogPage() {
  usePageMeta(pageMeta.blog)

  return (
    <>
      <main id="main-content" className="page-shell">
        <section className="section-shell page-hero" aria-labelledby="blog-page-title">
          <SectionTitle
            eyebrow="Blog"
            title="Technical Articles & Insights"
            blurb="Educational content on software engineering, SEO, AI development, digital marketing, and professional growth."
            headingLevel="h1"
          />
        </section>

        <section className="section-shell" aria-labelledby="topics-title">
          <SectionTitle
            eyebrow="Topics"
            title="What I Write About"
            blurb="Practical guides and insights across development, search, AI, and marketing."
          />
          <div className="blog-topics-grid">
            {blogTopics.map((group) => (
              <article key={group.title} className="blog-topic-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <BlogSection content={siteContent} />

        <section className="section-shell cta-banner" aria-label="Subscribe">
          <h2>Stay updated</h2>
          <p>Get practical insights on development, SEO, and AI delivered to your inbox.</p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </section>
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FooterSection content={siteContent} />
      </Suspense>
    </>
  )
}
