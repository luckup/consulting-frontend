import { siteImages } from '@/lib/siteImages'
import { newsPath } from '@/lib/newsPath'

export type HomeNewsHeadline = {
  id: string
  date: string
  category: string
  title: string
  preview: string
  to: string
  image: string
}

/** Lightweight homepage strip data — avoids importing full article bodies on the home route. */
export const latestHeadlines: HomeNewsHeadline[] = [
  {
    id: 'free-football-websites-world-cup-2026',
    date: '30 May 2026',
    category: 'Special initiative',
    title: 'Free Website for Football Players | 2026 World Cup Highlights & Fan Communities',
    preview:
      'Free website for football players and 2026 World Cup fan communities—publish highlights, match updates, and your story online with MoonSofts.',
    to: newsPath('free-football-websites-world-cup-2026'),
    image: siteImages.news.worldCup2026,
  },
  {
    id: 'global-launch-ai-cloud',
    date: '15 May 2026',
    category: 'Company news',
    title: 'MoonSofts Launches as a Global Software Consulting Partner for AI, Cloud, and Scalable Engineering',
    preview:
      'MoonSofts enters the market as a full-spectrum consulting partner—uniting AI-assisted delivery, cloud-native architecture, and accountable engineering squads for enterprises that need to ship faster without sacrificing control.',
    to: newsPath('global-launch-ai-cloud'),
    image: siteImages.news.launch,
  },
  {
    id: 'ai-powered-development',
    date: '28 Apr 2026',
    category: 'Industry insights',
    title: "AI-Powered Software Development: MoonSofts' Approach to Smarter Business Solutions",
    preview:
      'MoonSofts applies AI where it accelerates quality and clarity—requirements synthesis, test generation, observability, and migration analysis—while keeping humans accountable for architecture, security, and client outcomes.',
    to: newsPath('ai-powered-development'),
    image: siteImages.news.aiDevelopment,
  },
  {
    id: 'industry-specific-solutions',
    date: '10 Apr 2026',
    category: 'Industry insights',
    title: 'Building Industry-Specific Solutions for E-Commerce, Healthcare, Fintech, and Logistics',
    preview:
      'Generic platforms fail when they ignore sector reality. MoonSofts industry practices pair domain context with reusable engineering accelerators—so clients get software that fits how they actually operate.',
    to: newsPath('industry-specific-solutions'),
    image: siteImages.news.industrySolutions,
  },
]
