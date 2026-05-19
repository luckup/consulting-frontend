import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Reset window scroll when the route changes (unless targeting a hash). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash])

  return null
}
