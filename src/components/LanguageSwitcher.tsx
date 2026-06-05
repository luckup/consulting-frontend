import { LOCALE_HTML_LANG, LOCALE_LABELS, LOCALES } from '@/i18n/types'
import { useI18n } from '@/i18n/useI18n'
import { clsx } from 'clsx'

type Props = {
  className?: string
  overHero?: boolean
}

export function LanguageSwitcher({ className, overHero = false }: Props) {
  const { locale, setLocale, t } = useI18n()

  return (
    <label className={clsx('inline-flex items-center gap-[6px]', className)}>
      <span className="sr-only">{t('common.language')}</span>
      <select
        value={locale}
        onChange={(event) => {
          const next = event.target.value
          if (next === 'en' || next === 'zh' || next === 'es' || next === 'pt' || next === 'ja') {
            setLocale(next)
          }
        }}
        className={clsx(
          'cursor-pointer rounded-[4px] border px-[8px] py-[4px] text-xs font-semibold transition sm:text-sm',
          overHero
            ? 'border-[white]/25 bg-[white]/10 text-[white] hover:bg-[white]/20'
            : 'border-ink-900/15 bg-paper-50 text-ink-700 hover:border-brand hover:text-brand',
        )}
        aria-label={t('common.language')}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code} lang={LOCALE_HTML_LANG[code]}>
            {LOCALE_LABELS[code]}
          </option>
        ))}
      </select>
    </label>
  )
}
