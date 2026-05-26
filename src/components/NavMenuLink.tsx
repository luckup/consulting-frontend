import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { Calendar } from 'lucide-react'
import { contactInfo } from '@/lib/contactInfo'
import type { AppNavLink } from '@/lib/navLinks'
import { externalLinkProps, isExternalNavLink } from '@/lib/navLinks'
import { routePrefetchHandlers } from '@/lib/routePrefetch'
import { trackEvent } from '@/lib/analytics'

type Props = {
  link: AppNavLink
  className: string
  role?: string
  onClick?: () => void
}

export function NavMenuLink({ link, className, role, onClick }: Props) {
  if (isExternalNavLink(link)) {
    return (
      <a href={link.to} {...externalLinkProps} role={role} className={className} onClick={onClick}>
        {link.label}
      </a>
    )
  }

  return (
    <Link
      to={link.to}
      role={role}
      {...routePrefetchHandlers(link.to)}
      className={className}
      onClick={onClick}
    >
      {link.label}
    </Link>
  )
}

type ScheduleButtonProps = {
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost-light' | 'nav-hero'
  showIcon?: boolean
  onClick?: () => void
}

export function ScheduleConsultationButton({
  className,
  variant = 'secondary',
  showIcon = false,
  onClick,
}: ScheduleButtonProps) {
  function handleClick() {
    trackEvent('schedule_consultation_click', {
      location: variant,
      target: 'calendly',
    })
    onClick?.()
  }

  return (
    <a
      href={contactInfo.calendlyUrl}
      {...externalLinkProps}
      onClick={handleClick}
      className={clsx(
        'btn inline-flex items-center justify-center gap-[8px]',
        variant === 'primary' && 'btn-primary',
        variant === 'secondary' && 'btn-secondary',
        variant === 'ghost-light' && 'btn-ghost-light',
        variant === 'nav-hero' &&
          'border border-[white] bg-[white]/95 text-brand hover:bg-[white] hover:text-brand-600',
        className,
      )}
    >
      {showIcon ? <Calendar className="h-4 w-4 shrink-0" aria-hidden /> : null}
      {contactInfo.calendlyLabel}
    </a>
  )
}
