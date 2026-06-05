import { getMessages } from '@/i18n/translate'
import type { Locale } from '@/i18n/types'
import { newsArticles as baseArticles } from '@/lib/newsData'
import { newsPath } from '@/lib/newsPath'
import { siteImages } from '@/lib/siteImages'

const headlineImages: Record<string, string> = {
  'free-football-websites-world-cup-2026': siteImages.news.worldCup2026,
  'global-launch-ai-cloud': siteImages.news.launch,
  'ai-powered-development': siteImages.news.aiDevelopment,
  'industry-specific-solutions': siteImages.news.industrySolutions,
}

export function getNewsHeadlines(locale: Locale) {
  const { newsHeadlines } = getMessages(locale)
  return newsHeadlines.map((item) => ({
    ...item,
    to: newsPath(item.id),
    image: headlineImages[item.id] ?? siteImages.news.launch,
  }))
}

export function getNewsArticles(locale: Locale) {
  const { newsArticles: text } = getMessages(locale)
  return baseArticles.map((base) => {
    const copy = text[base.id as keyof typeof text]
    if (!copy || typeof copy !== 'object' || !('title' in copy)) {
      return base
    }
    const t = copy as {
      date: string
      category: string
      title: string
      excerpt: string
      sections: readonly { heading?: string; paragraphs: readonly string[] }[]
    }
    return {
      ...base,
      date: t.date,
      category: t.category,
      title: t.title,
      excerpt: t.excerpt,
      sections: t.sections.map((s) => ({
        heading: s.heading,
        paragraphs: [...s.paragraphs],
      })),
    }
  })
}

export function getNewsArticleById(locale: Locale, id: string) {
  return getNewsArticles(locale).find((a) => a.id === id)
}

export function firstSentences(text: string, count = 2) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text]
  return sentences.slice(0, count).join(' ').trim()
}
