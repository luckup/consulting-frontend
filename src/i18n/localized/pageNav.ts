import { getMessages } from '@/i18n/translate'
import type { Locale } from '@/i18n/types'

type SidebarKey = keyof typeof import('@/i18n/messages/content/enSidebar').enSidebar
type SidebarSection = Exclude<SidebarKey, 'labels'>

export type NavItem = { label: string; to: string; external?: boolean }

function buildNavItems(
  locale: Locale,
  section: SidebarSection,
): NavItem[] {
  const { sidebar } = getMessages(locale)
  const items = sidebar[section] as readonly { key: string; to: string; external?: boolean }[]
  return items.map((item) => ({
    label: sidebar.labels[item.key as keyof typeof sidebar.labels],
    to: item.to,
    ...(item.external ? { external: true } : {}),
  }))
}

export function getWhoWeAreNav(locale: Locale) {
  return buildNavItems(locale, 'whoWeAre')
}

export function getClientsNav(locale: Locale) {
  return buildNavItems(locale, 'clients')
}

export function getServicesNav(locale: Locale) {
  return buildNavItems(locale, 'services')
}

export function getIndustriesNav(locale: Locale) {
  return buildNavItems(locale, 'industries')
}

export function getStackNav(locale: Locale) {
  return buildNavItems(locale, 'stack')
}

export function getCareersNav(locale: Locale) {
  return buildNavItems(locale, 'careers')
}

export function getTeamNav(locale: Locale) {
  return buildNavItems(locale, 'team')
}

export function getLegalNav(locale: Locale) {
  return buildNavItems(locale, 'legal')
}

export function getNewsNav(locale: Locale) {
  return buildNavItems(locale, 'news')
}

export function getContactNav(locale: Locale) {
  return buildNavItems(locale, 'contact')
}
