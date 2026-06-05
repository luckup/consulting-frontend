import { getMessages } from '@/i18n/translate'
import { siteImages } from '@/lib/siteImages'
import type { Locale } from '@/i18n/types'

const spotlightRoutes = [
  '/news/free-football-websites-world-cup-2026',
  '/services',
  '/stack',
  '/contact',
] as const

const spotlightIds = ['world-cup-2026', 'delivery', 'ai', 'clients'] as const

const spotlightImages = [
  siteImages.home.section0,
  siteImages.home.spotlight[0],
  siteImages.home.spotlight[1],
  siteImages.home.spotlight[2],
] as const

export function getSpotlightSlides(locale: Locale) {
  const slides = getMessages(locale).home.spotlight
  return slides.map((slide, index) => ({
    id: spotlightIds[index],
    eyebrow: slide.eyebrow,
    title: slide.title,
    description: slide.description,
    cta: { label: slide.cta, to: spotlightRoutes[index] },
    image: spotlightImages[index],
    imageAlt: slide.imageAlt,
  }))
}
