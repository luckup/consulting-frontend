import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { LOCALE_FLAGS, LOCALE_HTML_LANG, LOCALE_LABELS, LOCALES, type Locale } from '@/i18n/types'
import { useI18n } from '@/i18n/useI18n'
import { clsx } from 'clsx'

type Props = {
  className?: string
  overHero?: boolean
}

export function LanguageSwitcher({ className, overHero = false }: Props) {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function choose(next: Locale) {
    setLocale(next)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={clsx('relative inline-flex', className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={t('common.language')}
        onClick={() => setOpen((value) => !value)}
        className={clsx(
          'inline-flex cursor-pointer items-center gap-[6px] rounded-[4px] border px-[8px] py-[4px] text-xs font-semibold transition sm:text-sm',
          overHero
            ? 'border-[white]/25 bg-transparent text-[white] hover:border-[white]/40 hover:bg-[white]/10'
            : 'border-ink-700/25 bg-transparent text-ink-600 hover:border-brand hover:text-brand',
        )}
      >
        <span className="text-base leading-none" aria-hidden>
          {LOCALE_FLAGS[locale]}
        </span>
        <span lang={LOCALE_HTML_LANG[locale]}>{LOCALE_LABELS[locale]}</span>
        <ChevronDown
          className={clsx('h-3.5 w-3.5 shrink-0 opacity-70 transition', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={t('common.language')}
          className="absolute right-0 top-full z-50 mt-[4px] min-w-[168px] overflow-hidden rounded-[4px] border border-ink-900/10 bg-paper-50 py-[4px] shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
        >
          {LOCALES.map((code) => {
            const selected = code === locale
            return (
              <li key={code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  lang={LOCALE_HTML_LANG[code]}
                  onClick={() => choose(code)}
                  className={clsx(
                    'flex w-full items-center gap-[8px] px-[12px] py-[8px] text-left text-xs font-semibold transition sm:text-sm',
                    selected
                      ? 'bg-paper-100 text-brand'
                      : 'text-ink-700 hover:bg-paper-100 hover:text-brand',
                  )}
                >
                  <span className="text-base leading-none" aria-hidden>
                    {LOCALE_FLAGS[code]}
                  </span>
                  <span>{LOCALE_LABELS[code]}</span>
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
