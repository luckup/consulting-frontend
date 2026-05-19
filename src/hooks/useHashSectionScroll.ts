import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSectionId } from '@/lib/scrollToSection'

export function useHashSectionScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const frame = requestAnimationFrame(() => {
      scrollToSectionId(id, 'smooth')
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
}
