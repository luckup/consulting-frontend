import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { heroContentReveal, heroItemReveal } from '@/lib/motionPresets'

type Crumb = { label: string; to?: string }

type Props = {
  section: string
  title: string
  description?: string
  breadcrumbs?: Crumb[]
  cta: { label: string; to: string }
  backgroundImage?: string
}

const HERO_HEIGHT = 'h-[75vh] min-h-[75vh]'

export function PageHero({ section, title, description, breadcrumbs, cta, backgroundImage }: Props) {
  const hasImage = Boolean(backgroundImage)
  const reduced = usePrefersReducedMotion()

  return (
    <section
      className={clsx(
        'relative overflow-hidden border-b border-ink-900/10',
        HERO_HEIGHT,
        hasImage ? 'bg-ink-900' : 'bg-gradient-to-br from-brand-light via-paper-50 to-paper-100 text-ink-900',
      )}
    >
      {hasImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-scrim-page-tint absolute inset-0" aria-hidden />
          <div className="hero-scrim-page absolute inset-0" aria-hidden />
          <div className="hero-scrim-page-bottom absolute inset-0" aria-hidden />
        </>
      ) : null}

      <motion.div
        className="container-pad relative z-10 flex h-full flex-col justify-end pb-[28px] pt-[24px] sm:pb-[32px] sm:pt-[28px]"
        initial={reduced ? false : 'hidden'}
        animate={reduced ? undefined : 'visible'}
        variants={reduced ? undefined : heroContentReveal}
      >
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <motion.nav
            variants={reduced ? undefined : heroItemReveal}
            aria-label="Breadcrumb"
            className={clsx(
              'mb-[16px] flex shrink-0 flex-wrap items-center gap-[6px] text-xs',
              hasImage ? 'text-ink-200' : 'text-ink-500',
            )}
          >
            <ol className="flex flex-wrap items-center gap-[6px]">
              <li className="inline-flex items-center gap-[6px]">
                <Link to="/" className={hasImage ? 'hover:text-[white]' : 'hover:text-brand'}>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1
                return (
                  <li key={crumb.label} className="inline-flex items-center gap-[6px]">
                    <ChevronRight className="h-3 w-3 opacity-50" aria-hidden />
                    {crumb.to && !isLast ? (
                      <Link to={crumb.to} className={hasImage ? 'hover:text-[white]' : 'hover:text-brand'}>
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className={hasImage ? 'text-ink-100' : 'text-ink-700'}
                        aria-current={isLast ? 'page' : undefined}
                      >
                        {crumb.label}
                      </span>
                    )}
                  </li>
                )
              })}
            </ol>
          </motion.nav>
        ) : null}

        <motion.div className="max-w-4xl" variants={reduced ? undefined : heroItemReveal}>
          <p className={hasImage ? 'section-label-light' : 'section-label'}>{section}</p>
          <h1
            className={clsx(
              'mt-[10px] text-2xl font-bold leading-tight tracking-tight sm:mt-[12px] sm:text-3xl lg:text-4xl',
              hasImage ? 'text-[white]' : 'text-ink-900',
            )}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={clsx(
                'mt-[12px] max-w-2xl text-sm leading-relaxed sm:mt-[16px] sm:text-base lg:text-lg',
                hasImage ? 'text-ink-100' : 'text-ink-600',
              )}
            >
              {description}
            </p>
          ) : null}
          <Link
            to={cta.to}
            className={clsx('btn btn-primary mt-[20px] inline-flex w-fit sm:mt-[24px]', hasImage && 'shadow-soft')}
          >
            {cta.label}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
