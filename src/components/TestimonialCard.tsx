import { Quote } from 'lucide-react'
import type { Testimonial } from '@/lib/clientsData'

type Props = {
  item: Testimonial
}

export function TestimonialCard({ item }: Props) {
  return (
    <article className="home-card flex h-full flex-col p-[28px]">
      <Quote className="h-[28px] w-[28px] text-brand/50" aria-hidden />
      <blockquote className="mt-[16px] flex-1 text-base leading-relaxed text-ink-700">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <footer className="mt-[24px] border-t border-transparent pt-[20px]">
        <p className="font-semibold text-ink-900">{item.name}</p>
        <p className="mt-[4px] text-sm text-ink-600">
          {item.role}, {item.company}
        </p>
        <p className="mt-[8px] text-xs font-semibold uppercase tracking-[0.12em] text-brand">{item.industry}</p>
      </footer>
    </article>
  )
}
