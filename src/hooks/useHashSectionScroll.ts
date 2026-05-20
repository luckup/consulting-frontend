import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LENIS_READY_EVENT } from '@/lib/scroll/constants'
import { scrollToSectionId } from '@/lib/scrollToSection'

export function useHashSectionScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.slice(1)
    const run = () => {
      scrollToSectionId(id, 'smooth')
    }

    const frame = requestAnimationFrame(run)
    window.addEventListener(LENIS_READY_EVENT, run)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener(LENIS_READY_EVENT, run)
    }
  }, [pathname, hash])
}
