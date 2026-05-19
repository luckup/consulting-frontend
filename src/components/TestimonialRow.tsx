import { Building2, Quote } from 'lucide-react'
import type { Testimonial } from '@/lib/clientsData'

type Props = {
  item: Testimonial
  /** Alternate profile left / right on large screens */
  reverse?: boolean
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function TestimonialRow({ item, reverse = false }: Props) {
  const profilePanel = (
    <div className="flex h-full flex-col justify-center px-[24px] py-[32px] sm:px-[32px] sm:py-[40px] lg:px-[40px]">
      <div
        className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-brand/20 bg-brand-light text-sm font-semibold tracking-wide text-brand"
        aria-hidden
      >
        {initials(item.name)}
      </div>
      <p className="mt-[24px] text-xs font-semibold uppercase tracking-[0.14em] text-brand">{item.industry}</p>
      <p className="mt-[12px] text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">{item.name}</p>
      <p className="mt-[8px] text-base font-medium text-ink-700">{item.role}</p>
      <p className="mt-[4px] flex items-center gap-[8px] text-sm text-ink-600">
        <Building2 className="h-[16px] w-[16px] shrink-0 text-ink-400" aria-hidden />
        {item.company}
      </p>
    </div>
  )

  const quotePanel = (
    <div className="relative flex h-full flex-col justify-center bg-paper-100/80 px-[24px] py-[32px] sm:px-[32px] sm:py-[40px] lg:px-[40px]">
      <Quote className="h-[32px] w-[32px] text-brand/40" aria-hidden />
      <blockquote className="mt-[20px] text-lg font-medium leading-[1.65] text-ink-800 sm:text-xl sm:leading-[1.7]">
        <span className="text-brand/70">&ldquo;</span>
        {item.quote}
        <span className="text-brand/70">&rdquo;</span>
      </blockquote>
    </div>
  )

  return (
    <article className="bg-paper-50">
      <div className="grid lg:grid-cols-2">
        <div
          className={
            reverse
              ? 'border-b border-ink-900/10 lg:order-2 lg:border-b-0 lg:border-l lg:border-ink-900/10'
              : 'border-b border-ink-900/10 lg:border-b-0 lg:border-r lg:border-ink-900/10'
          }
        >
          {profilePanel}
        </div>
        <div className={reverse ? 'lg:order-1' : undefined}>{quotePanel}</div>
      </div>
    </article>
  )
}
