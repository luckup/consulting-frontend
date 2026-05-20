import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'

type Props = {
  id?: string
  label: string
  title: string
  children: import('react').ReactNode
  cta?: { label: string; to: string }
  variant?: 'default' | 'highlight'
}

export function ContentBlock({ id, label, title, children, cta, variant = 'default' }: Props) {
  return (
    <SectionReveal
      as="section"
      id={id}
      accent
      className={
        variant === 'highlight'
          ? 'scroll-mt-[120px] rounded-[4px] border border-brand/25 bg-brand-light/80 p-[28px] shadow-soft sm:p-[36px]'
          : 'scroll-mt-[120px] border-b border-ink-900/10 pb-[48px] last:border-0 last:pb-0'
      }
    >
      <p className="section-label">{label}</p>
      <h2 className="mt-[10px] text-xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-2xl">{title}</h2>
      <div className="prose-body mt-[20px]">{children}</div>
      {cta ? (
        <Link to={cta.to} className="link-text mt-[24px]">
          {cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </SectionReveal>
  )
}
