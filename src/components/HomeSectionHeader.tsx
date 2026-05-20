import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Props = {
  label?: string
  title: string
  description?: string
  action?: { to: string; label: string }
  trailing?: ReactNode
}

export function HomeSectionHeader({ label, title, description, action, trailing }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-[16px]">
      <div className="max-w-2xl">
        {label ? <p className="section-label">{label}</p> : null}
        <h2 className={label ? 'home-section-title' : 'home-section-title !mt-0'}>{title}</h2>
        {description ? (
          <p className="mt-[12px] text-base leading-relaxed text-ink-600 sm:text-lg">{description}</p>
        ) : null}
      </div>
      {trailing ??
        (action ? (
          <Link
            to={action.to}
            className="inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
          >
            {action.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null)}
    </div>
  )
}
