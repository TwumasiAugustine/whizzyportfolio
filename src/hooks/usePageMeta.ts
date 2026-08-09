import { useEffect } from 'react'
import {
  applyPageMeta,
  type PageMeta,
} from '../lib/seo'

export function usePageMeta(meta: PageMeta): void {
  useEffect(() => {
    applyPageMeta(meta)
  }, [meta])
}