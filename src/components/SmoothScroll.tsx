import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { destroySmoothScroll, initSmoothScroll, refreshSmoothScroll } from '@/lib/smoothScroll'

/** Lenis smooth scroll — similar feel to premium marketing sites (e.g. Somnio). */
export function SmoothScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    initSmoothScroll()
    return () => destroySmoothScroll()
  }, [])

  useEffect(() => {
    refreshSmoothScroll()
  }, [pathname])

  return null
}
