import { useI18n } from '@/i18n/useI18n'

export function useContactRoleLabel() {
  const { t } = useI18n()
  return (role: string, fallback: string) => {
    const key = `roles.${role}`
    const translated = t(key)
    return translated === key ? fallback : translated
  }
}
