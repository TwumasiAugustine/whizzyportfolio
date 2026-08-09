import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteLayout } from '../components/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { ServicesPage } from '../pages/ServicesPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { BlogPage } from '../pages/BlogPage'
import { ContactPage } from '../pages/ContactPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ServicePageRoute } from '../pages/ServicePageRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="web-development" element={<ServicePageRoute slug="web-development" />} />
          <Route path="seo" element={<ServicePageRoute slug="seo" />} />
          <Route path="ai-automation" element={<ServicePageRoute slug="ai-automation" />} />
          <Route path="digital-marketing" element={<ServicePageRoute slug="digital-marketing" />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <main id="main-content" className="page-shell">
                <NotFoundPage />
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
