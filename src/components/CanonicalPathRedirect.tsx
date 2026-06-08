import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { canonicalizePath } from '@/lib/canonicalRoutes'

/** Redirect legacy translated URLs (e.g. /産業/金融) to canonical English routes. */
export function CanonicalPathRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const current = `${location.pathname}${location.search}${location.hash}`
    const canonical = canonicalizePath(current)
    if (canonical !== current) {
      navigate(canonical, { replace: true })
    }
  }, [location.hash, location.pathname, location.search, navigate])

  return null
}
