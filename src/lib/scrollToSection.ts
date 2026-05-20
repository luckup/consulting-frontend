import type { MouseEvent } from 'react'
import type { Location, NavigateFunction } from 'react-router-dom'
import { SECTION_SCROLL_OFFSET } from '@/lib/scroll/constants'
import { scrollToSectionElement, scrollWindowTo } from '@/lib/smoothScroll'

export { SECTION_SCROLL_OFFSET }

export function scrollToSectionId(id: string, behavior: ScrollBehavior = 'smooth') {
  return scrollToSectionElement(id, { immediate: behavior === 'auto' })
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
  scrollWindowTo(0)
  navigate(path, { replace: true })
}
