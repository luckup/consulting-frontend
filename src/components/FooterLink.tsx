import { Link } from 'react-router-dom'
import type { AppNavLink } from '@/lib/navLinks'
import { externalLinkProps, isExternalNavLink } from '@/lib/navLinks'
import { routePrefetchHandlers } from '@/lib/routePrefetch'

type Props = {
  link: AppNavLink
  className: string
}

export function FooterLink({ link, className }: Props) {
  if (isExternalNavLink(link)) {
    return (
      <a href={link.to} {...externalLinkProps} className={className}>
        {link.label}
      </a>
    )
  }

  return (
    <Link to={link.to} {...routePrefetchHandlers(link.to)} className={className}>
      {link.label}
    </Link>
  )
}
