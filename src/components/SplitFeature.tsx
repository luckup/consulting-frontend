import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { MediaImage } from '@/components/MediaImage'
import { SectionReveal } from '@/components/SectionReveal'

type Props = {
  label: string
  title: string
  body: string
  cta?: { label: string; to: string }
  image?: string
  reverse?: boolean
}

export function SplitFeature({ label, title, body, cta, image, reverse = false }: Props) {
  return (
    <SectionReveal as="div" accent className="scroll-mt-[120px]">
      <article className={`card grid overflow-hidden lg:grid-cols-2 ${reverse ? 'lg:[direction:rtl]' : ''}`}>
        {image ? (
          <MediaImage
            src={image}
            label={label}
            className={`min-h-[220px] sm:min-h-[280px] ${reverse ? 'lg:[direction:ltr]' : ''}`}
            overlay="none"
          />
        ) : (
          <div
            className={`flex min-h-[200px] items-end bg-gradient-to-br from-brand to-brand-700 p-[32px] lg:min-h-[260px] ${reverse ? 'lg:[direction:ltr]' : ''}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background">{label}</p>
          </div>
        )}
        <div className={`flex flex-col justify-center p-[28px] sm:p-[36px] ${reverse ? 'lg:[direction:ltr]' : ''}`}>
          <p className="section-label lg:hidden">{label}</p>
          <h3 className="mt-[8px] text-lg font-semibold text-ink-900 sm:mt-0 sm:text-xl">{title}</h3>
          <p className="mt-[12px] text-sm leading-relaxed text-ink-600 sm:text-base">{body}</p>
          {cta ? (
            <Link
              to={cta.to}
              className="mt-[20px] inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </article>
    </SectionReveal>
  )
}
