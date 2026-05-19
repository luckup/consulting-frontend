import type { MouseEvent } from 'react'
import type { Location, NavigateFunction } from 'react-router-dom'

export const SECTION_SCROLL_OFFSET = 120

export function scrollToSectionId(id: string, behavior: ScrollBehavior = 'smooth') {
  const el = document.getElementById(id)
  if (!el) return false
  const top = el.getBoundingClientRect().top + window.scrollY - SECTION_SCROLL_OFFSET
  window.scrollTo({ top: Math.max(0, top), behavior })
  return true
}

export function isSectionNavActive(to: string, location: Location) {
  const [path, id] = to.split('#')
  if (location.pathname !== path) return false
  if (id) {
    return location.hash === `#${id}` || (!location.hash && id === 'about-us')
  }
  return !location.hash
}

export function handleSectionNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  to: string,
  location: Location,
  navigate: NavigateFunction,
) {
  const [path, id] = to.split('#')
  if (path !== location.pathname) return

  event.preventDefault()
  if (id) {
    scrollToSectionId(id)
    navigate(`${path}#${id}`, { replace: true })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
  navigate(path, { replace: true })
}
