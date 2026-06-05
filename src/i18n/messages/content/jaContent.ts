import { jaUi } from '@/i18n/messages/content/jaUi'
import { jaSidebar } from '@/i18n/messages/content/jaSidebar'
import { jaHomeSections } from '@/i18n/messages/content/jaHomeSections'
import { jaHomeFaq } from '@/i18n/messages/content/jaHomeFaq'
import { jaIndustries } from '@/i18n/messages/content/jaIndustries'
import { jaNewsHeadlines, jaNewsArticles } from '@/i18n/messages/content/jaNews'
import { jaPages } from '@/i18n/messages/content/jaPages'

export const jaContent = {
  ui: jaUi,
  sidebar: jaSidebar,
  homeSections: jaHomeSections,
  faq: jaHomeFaq,
  industries: jaIndustries,
  newsHeadlines: jaNewsHeadlines,
  newsArticles: jaNewsArticles,
  pages: jaPages,
} as const
