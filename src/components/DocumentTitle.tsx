import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteMeta, setPageMeta } from '@/lib/routeMeta'

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    setPageMeta(getRouteMeta(pathname), pathname)
  }, [pathname])

  return null
}
