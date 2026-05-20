import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { refreshSmoothScroll, scrollWindowTo } from '@/lib/smoothScroll'

/** Reset window scroll when the route changes (unless targeting a hash). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return
    scrollWindowTo(0, { immediate: true })
    refreshSmoothScroll()
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash])

  return null
}
