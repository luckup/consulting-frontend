import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { spotlightSlides } from '@/lib/homeContent'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const EASE = [0.22, 1, 0.36, 1] as const

const imageVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.04 },
}

const textVariants = {
  enter: { opacity: 0, y: 28 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

export function HomeSpotlightHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const reducedMotion = useReducedMotion() ?? prefersReducedMotion
  const slide = spotlightSlides[active]

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + spotlightSlides.length) % spotlightSlides.length)
  }, [])

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % spotlightSlides.length)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || paused) return
    const timer = window.setInterval(goNext, 7000)
    return () => window.clearInterval(timer)
  }, [goNext, paused, prefersReducedMotion])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev])

  const imageDuration = reducedMotion ? 0.2 : 1.15
  const textDuration = reducedMotion ? 0.15 : 0.55

  return (
    <section
      className="relative w-full overflow-hidden border-b border-ink-900/10"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false)
      }}
    >
      <div className="relative h-[min(85vh,720px)] min-h-[420px] w-full sm:min-h-[480px] lg:min-h-[560px]">
        <div className="absolute inset-0 overflow-hidden bg-ink-900">
          <AnimatePresence initial={!reducedMotion} mode="sync">
            <motion.img
              key={slide.id}
              src={slide.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              variants={reducedMotion ? undefined : imageVariants}
              initial={reducedMotion ? { opacity: 1 } : 'enter'}
              animate={reducedMotion ? { opacity: 1 } : 'center'}
              exit={reducedMotion ? { opacity: 0 } : 'exit'}
              transition={{ duration: imageDuration, ease: EASE }}
              fetchPriority="high"
              decoding="async"
            />
          </AnimatePresence>
        </div>

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/75 via-ink-900/45 to-ink-900/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-ink-900/15"
          aria-hidden
        />

        <div className="container-pad relative z-10 flex h-full w-full flex-col justify-end pb-[40px] pt-[32px] sm:pb-[56px] sm:pt-[48px] lg:pb-[72px]">
          <div className="max-w-3xl overflow-hidden" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" initial={!reducedMotion}>
              <motion.div
                key={slide.id}
                variants={reducedMotion ? undefined : textVariants}
                initial={reducedMotion ? false : 'enter'}
                animate={reducedMotion ? undefined : 'center'}
                exit={reducedMotion ? undefined : 'exit'}
                transition={{ duration: textDuration, ease: EASE }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moon-sky">{slide.eyebrow}</p>
                <h1 className="mt-[16px] text-3xl font-bold leading-[1.12] tracking-tight text-[white] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                  {slide.title}
                </h1>
                <p className="mt-[20px] max-w-2xl text-base leading-relaxed text-ink-100 sm:text-lg">
                  {slide.description}
                </p>
                <div className="mt-[32px] flex flex-wrap items-center gap-[12px]">
                  <Link
                    to={slide.cta.to}
                    className="inline-flex items-center justify-center rounded-[4px] bg-brand px-[28px] py-[14px] text-sm font-semibold text-[white] transition hover:bg-brand-600 sm:text-base"
                  >
                    {slide.cta.label}
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-ghost-light px-[28px] py-[14px] sm:text-base"
                  >
                    Contact us
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-[40px] flex items-center gap-[16px]">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border border-[white]/30 bg-[white]/10 text-[white] backdrop-blur-sm transition hover:border-brand hover:bg-brand/30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-[8px]" role="tablist" aria-label="Slide navigation">
              {spotlightSlides.map((s, index) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  onClick={() => setActive(index)}
                  className={clsx(
                    'h-[8px] rounded-full transition-all duration-500',
                    index === active ? 'w-[32px] bg-brand' : 'w-[8px] bg-[white]/40 hover:bg-[white]/70',
                  )}
                  aria-label={`Go to slide ${index + 1}: ${s.title}`}
                  aria-selected={index === active}
                  aria-current={index === active ? 'true' : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border border-[white]/30 bg-[white]/10 text-[white] backdrop-blur-sm transition hover:border-brand hover:bg-brand/30"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
