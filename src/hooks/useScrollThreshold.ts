import { useEffect, useState } from 'react'
import { getLenis, getScrollY } from '@/lib/smoothScroll'
import { LENIS_READY_EVENT } from '@/lib/scroll/constants'

/** Tracks whether the user has scrolled past a threshold (navbar solid state). */
export function useScrollThreshold(threshold = 48) {
  const [pastThreshold, setPastThreshold] = useState(false)

  useEffect(() => {
    const update = () => setPastThreshold(getScrollY() > threshold)
    update()

    let lenisOff: (() => void) | undefined

    const bindLenis = () => {
      lenisOff?.()
      const instance = getLenis()
      if (instance) {
        lenisOff = instance.on('scroll', update)
        update()
      }
    }

    bindLenis()
    window.addEventListener(LENIS_READY_EVENT, bindLenis)
    window.addEventListener('scroll', update, { passive: true })

    return () => {
      lenisOff?.()
      window.removeEventListener(LENIS_READY_EVENT, bindLenis)
      window.removeEventListener('scroll', update)
    }
  }, [threshold])

  return pastThreshold
}
