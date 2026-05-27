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
  /** When false, content is visible immediately (no scroll fade). Use for long card lists. */
  reveal?: boolean
}

const sectionClass = (variant: Props['variant']) =>
  variant === 'highlight'
    ? 'scroll-mt-[120px] rounded-[4px] border border-brand/30 bg-gradient-to-br from-brand/15 via-paper-100 to-paper-100 p-[28px] shadow-soft ring-1 ring-inset ring-brand/15 sm:p-[36px]'
    : 'scroll-mt-[120px] border-b border-ink-900/10 pb-[48px] last:border-0 last:pb-0'

function ContentBlockBody({
  label,
  title,
  children,
  cta,
}: Pick<Props, 'label' | 'title' | 'children' | 'cta'>) {
  return (
    <>
      <p className="section-label">{label}</p>
      <h2 className="mt-[10px] text-xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-2xl">{title}</h2>
      <div className="prose-body mt-[20px]">{children}</div>
      {cta ? (
        <Link to={cta.to} className="link-text mt-[24px]">
          {cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </>
  )
}

export function ContentBlock({
  id,
  label,
  title,
  children,
  cta,
  variant = 'default',
  reveal = true,
}: Props) {
  const className = sectionClass(variant)

  if (!reveal) {
    return (
      <section id={id} className={className}>
        <ContentBlockBody label={label} title={title} cta={cta}>
          {children}
        </ContentBlockBody>
      </section>
    )
  }

  return (
    <SectionReveal as="section" id={id} accent className={className}>
      <ContentBlockBody label={label} title={title} cta={cta}>
        {children}
      </ContentBlockBody>
    </SectionReveal>
  )
}
