import { enUi } from '@/i18n/messages/content/enUi'
import { enSidebar } from '@/i18n/messages/content/enSidebar'
import { enHomeSections } from '@/i18n/messages/content/enHomeSections'
import { enHomeFaq } from '@/i18n/messages/content/enHomeFaq'
import { enIndustries } from '@/i18n/messages/content/enIndustries'
import { enNewsHeadlines, enNewsArticles } from '@/i18n/messages/content/enNews'
import { enPages } from '@/i18n/messages/content/enPages'

export const enContent = {
  ui: enUi,
  sidebar: enSidebar,
  homeSections: enHomeSections,
  faq: enHomeFaq,
  industries: enIndustries,
  newsHeadlines: enNewsHeadlines,
  newsArticles: enNewsArticles,
  pages: enPages,
} as const
