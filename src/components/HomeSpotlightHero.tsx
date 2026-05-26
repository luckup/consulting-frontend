import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { spotlightSlides } from '@/lib/homeContent'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function HomeSpotlightHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [introPlayed, setIntroPlayed] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const slide = spotlightSlides[active]

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + spotlightSlides.length) % spotlightSlides.length)
  }, [])

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % spotlightSlides.length)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || introPlayed) return
    const timer = window.setTimeout(() => setIntroPlayed(true), 1300)
    return () => window.clearTimeout(timer)
  }, [introPlayed, prefersReducedMotion])

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

  return (
    <section
      className="relative w-full overflow-hidden border-b border-transparent"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false)
      }}
    >
      <div className="relative h-[100vh] min-h-[100vh] w-full">
        {spotlightSlides.map((s, index) => {
          const isActive = index === active
          return (
            <img
              key={isActive ? `${s.id}-active` : s.id}
              src={s.image}
              alt=""
              className={clsx(
                'absolute inset-0 h-full w-full object-cover object-center',
                isActive ? 'z-[1]' : 'z-0',
                prefersReducedMotion
                  ? isActive
                    ? 'opacity-100'
                    : 'opacity-0'
                  : isActive
                    ? clsx('hero-slide-visible', !introPlayed && 'hero-slide-intro')
                    : 'hero-slide-hidden',
              )}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          )
        })}

        <div className="pointer-events-none absolute inset-0 z-[2] bg-black/20" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-paper-50/80 via-paper-50/50 to-paper-50/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-paper-50/65 via-transparent to-paper-50/20"
          aria-hidden
        />

        <div className="container-pad relative z-10 flex h-full w-full flex-col justify-end pb-[40px] pt-[32px] sm:pb-[56px] sm:pt-[48px] lg:pb-[72px]">
          <div
            key={slide.id}
            className={clsx('max-w-3xl', !prefersReducedMotion && 'hero-copy-reveal')}
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moon-sky">{slide.eyebrow}</p>
            <h1 className="mt-[16px] text-3xl font-bold leading-[1.12] tracking-tight text-[white] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {slide.title}
            </h1>
            <p className="mt-[20px] max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">{slide.description}</p>
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
          </div>

          <div className="mt-[40px] flex items-center gap-[8px]" role="tablist" aria-label="Slide navigation">
            {spotlightSlides.map((s, index) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                onClick={() => setActive(index)}
                className={clsx(
                  'h-[8px] rounded-full transition-all duration-300',
                  index === active ? 'w-[32px] bg-brand' : 'w-[8px] bg-[white]/40 hover:bg-[white]/70',
                )}
                aria-label={`Go to slide ${index + 1}: ${s.title}`}
                aria-selected={index === active}
                aria-current={index === active ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
