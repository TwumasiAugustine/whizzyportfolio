import { ServiceLandingPage } from './ServiceLandingPage'
import { getServicePageBySlug } from '../data/service-pages'
import { NotFoundPage } from './NotFoundPage'

type Props = {
  slug: string
}

export function ServicePageRoute({ slug }: Props) {
  const page = getServicePageBySlug(slug)

  if (!page) {
    return (
      <main id="main-content" className="page-shell">
        <NotFoundPage />
      </main>
    )
  }

  return <ServiceLandingPage page={page} />
}
