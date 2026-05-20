import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  children: ReactNode
}

export function PageTransition({ children }: Props) {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  )
}
