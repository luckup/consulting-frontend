import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteMeta } from '@/lib/routeMeta'

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getRouteMeta(pathname)
    document.title = meta.title

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }
    description.content = meta.description
  }, [pathname])

  return null
}
