import { useI18n } from '@/i18n/useI18n'

export function SkipToContent() {
  const { t } = useI18n()
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-[16px] focus:top-[16px] focus:z-[100] focus:rounded-[4px] focus:bg-brand focus:px-[16px] focus:py-[10px] focus:text-sm focus:font-semibold focus:text-ink-900"
    >
      {t('common.skipToContent')}
    </a>
  )
}
