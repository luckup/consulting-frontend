import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { clsx } from 'clsx'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import type { LocalizedPortfolioProject } from '@/i18n/localized/data'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { portfolioImagePlaceholder } from '@/lib/portfolioImages'

type Props = {
  project: LocalizedPortfolioProject | null
  onClose: () => void
}

export function PortfolioProjectModal({ project, onClose }: Props) {
  const { t } = useI18n()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [activeImage, setActiveImage] = useState(0)
  const open = project !== null
  const images = project?.images ?? []

  useEffect(() => {
    if (project) setActiveImage(0)
  }, [project])

  const goPrev = useCallback(() => {
    if (!images.length) return
    setActiveImage((index) => (index - 1 + images.length) % images.length)
  }, [images.length])

  const goNext = useCallback(() => {
    if (!images.length) return
    setActiveImage((index) => (index + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev, open])

  return (
    <Dialog open={open} onClose={onClose} className="relative z-[80]">
      <div className="fixed inset-0 bg-ink-900/55 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto" data-lenis-prevent>
        <div className="flex min-h-full items-end justify-center p-[16px] sm:items-center sm:p-[24px]">
          <DialogPanel className="card-static relative flex w-full max-w-[960px] flex-col overflow-hidden bg-paper-50 shadow-card">
            {project ? (
              <>
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-[16px] top-[16px] z-[2] inline-flex rounded-[4px] border border-ink-900/10 bg-paper-50/95 p-[8px] text-ink-700 transition hover:border-brand/30 hover:text-brand"
                  aria-label={t('ui.closeProjectDetails')}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>

                <div
                  className="relative aspect-[16/9] w-full overflow-hidden bg-paper-100"
                  aria-roledescription="carousel"
                  aria-label={t('ui.projectImageCarousel')}
                >
                  {images.map((src, index) => {
                    const isActive = index === activeImage
                    return (
                      <img
                        key={`${project.id}-${index}`}
                        src={src}
                        alt={isActive ? `${project.title} — ${index + 1}` : ''}
                        aria-hidden={!isActive}
                        onError={(event) => {
                          const img = event.currentTarget
                          if (img.src !== portfolioImagePlaceholder) {
                            img.src = portfolioImagePlaceholder
                          }
                        }}
                        className={clsx(
                          'absolute inset-0 h-full w-full object-cover photo-bright',
                          prefersReducedMotion
                            ? isActive
                              ? 'opacity-100'
                              : 'opacity-0'
                            : clsx(
                                'transition-opacity duration-300',
                                isActive ? 'opacity-100' : 'opacity-0',
                              ),
                        )}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    )
                  })}

                  {images.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-[12px] top-1/2 z-[1] inline-flex -translate-y-1/2 rounded-[4px] border border-ink-900/10 bg-paper-50/95 p-[8px] text-ink-700 transition hover:border-brand/30 hover:text-brand"
                        aria-label={t('ui.previousImage')}
                      >
                        <ChevronLeft className="h-5 w-5" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-[12px] top-1/2 z-[1] inline-flex -translate-y-1/2 rounded-[4px] border border-ink-900/10 bg-paper-50/95 p-[8px] text-ink-700 transition hover:border-brand/30 hover:text-brand"
                        aria-label={t('ui.nextImage')}
                      >
                        <ChevronRight className="h-5 w-5" aria-hidden />
                      </button>

                      <div
                        className="absolute bottom-[16px] left-1/2 z-[1] flex -translate-x-1/2 items-center gap-[8px]"
                        role="tablist"
                        aria-label={t('ui.slideNavigation')}
                      >
                        {images.map((_, index) => (
                          <button
                            key={`${project.id}-dot-${index}`}
                            type="button"
                            role="tab"
                            onClick={() => setActiveImage(index)}
                            className={clsx(
                              'h-[8px] rounded-full transition-all duration-300',
                              index === activeImage ? 'w-[28px] bg-brand' : 'w-[8px] bg-paper-50/70 hover:bg-paper-50',
                            )}
                            aria-label={`${t('ui.goToSlide')} ${index + 1}`}
                            aria-selected={index === activeImage}
                          />
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="max-h-[min(52vh,560px)] overflow-y-auto p-[24px] sm:p-[32px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{project.category}</p>
                  <DialogTitle className="mt-[8px] pr-[40px] text-2xl font-semibold tracking-tight text-ink-900">
                    {project.title}
                  </DialogTitle>

                  <p className="mt-[16px] text-sm leading-relaxed text-ink-600 sm:text-base">{project.description}</p>

                  <div className="mt-[28px] grid gap-[28px] sm:grid-cols-2">
                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">
                        {t('ui.projectScope')}
                      </h3>
                      <ul className="mt-[12px] space-y-[10px]">
                        {project.scope.map((item) => (
                          <li key={item} className="flex gap-[10px] text-sm leading-relaxed text-ink-600">
                            <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">
                        {t('ui.techStack')}
                      </h3>
                      <ul className="mt-[12px] flex flex-wrap gap-[8px]">
                        {project.techStack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-[4px] border border-brand/15 bg-brand/[0.06] px-[12px] py-[6px] text-xs font-medium text-brand sm:text-sm"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      <h3 className="mt-[24px] text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">
                        {t('ui.projectHighlights')}
                      </h3>
                      <ul className="mt-[12px] flex flex-wrap gap-[8px]">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-[4px] border border-ink-900/10 bg-paper-50 px-[10px] py-[5px] text-xs font-medium text-ink-700"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </>
            ) : null}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
