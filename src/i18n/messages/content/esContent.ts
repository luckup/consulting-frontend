import { esUi } from '@/i18n/messages/content/esUi'
import { esSidebar } from '@/i18n/messages/content/esSidebar'
import { esHomeSections } from '@/i18n/messages/content/esHomeSections'
import { esHomeFaq } from '@/i18n/messages/content/esHomeFaq'
import { esIndustries } from '@/i18n/messages/content/esIndustries'
import { esNewsHeadlines, esNewsArticles } from '@/i18n/messages/content/esNews'
import { esPages } from '@/i18n/messages/content/esPages'

export const esContent = {
  ui: esUi,
  sidebar: esSidebar,
  homeSections: esHomeSections,
  faq: esHomeFaq,
  industries: esIndustries,
  newsHeadlines: esNewsHeadlines,
  newsArticles: esNewsArticles,
  pages: esPages,
} as const
