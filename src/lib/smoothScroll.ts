import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {
  LENIS_READY_EVENT,
  LENIS_SCROLL_DURATION,
  SECTION_SCROLL_OFFSET,
} from '@/lib/scroll/constants'

let lenis: Lenis | null = null

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function initSmoothScroll(): Lenis | null {
  if (typeof window === 'undefined' || lenis || prefersReducedMotion()) return lenis

  document.documentElement.classList.add('lenis')

  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.085,
    duration: LENIS_SCROLL_DURATION,
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.4,
    anchors: {
      offset: -SECTION_SCROLL_OFFSET,
      duration: LENIS_SCROLL_DURATION,
    },
  })

  window.dispatchEvent(new Event(LENIS_READY_EVENT))
  return lenis
}

export function destroySmoothScroll() {
  lenis?.destroy()
  lenis = null
  document.documentElement.classList.remove('lenis')
}

export function getLenis() {
  return lenis
}

export function getScrollY() {
  return lenis?.scroll ?? window.scrollY
}

export function scrollWindowTo(top: number, options?: { immediate?: boolean }) {
  const immediate = options?.immediate ?? false
  if (lenis) {
    lenis.scrollTo(top, { immediate, duration: immediate ? 0 : LENIS_SCROLL_DURATION })
    return
  }
  window.scrollTo({ top, behavior: immediate ? 'auto' : 'smooth' })
}

export function scrollToSectionElement(id: string, options?: { immediate?: boolean }) {
  const el = document.getElementById(id)
  if (!el) return false

  const immediate = options?.immediate ?? false
  if (lenis) {
    lenis.scrollTo(el, {
      offset: -SECTION_SCROLL_OFFSET,
      immediate,
      duration: immediate ? 0 : LENIS_SCROLL_DURATION,
    })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - SECTION_SCROLL_OFFSET
    window.scrollTo({ top: Math.max(0, top), behavior: immediate ? 'auto' : 'smooth' })
  }
  return true
}

export function refreshSmoothScroll() {
  lenis?.resize()
}
