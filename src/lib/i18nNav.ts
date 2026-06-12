import { contactInfo } from '@/lib/contactInfo'
import { filterNavLinks } from '@/lib/siteFeatures'
import type { AppNavLink } from '@/lib/navLinks'

type NavItem = { label: string; to: string; children: AppNavLink[] }

export function buildPrimaryNav(t: (key: string) => string): NavItem[] {
  return [
    {
      label: t('nav.industries'),
      to: '/industries',
      children: [
        { to: '/industries/ecommerce', label: t('nav.ecommerce') },
        { to: '/industries/logistics', label: t('nav.logistics') },
        { to: '/industries/healthcare', label: t('nav.healthcare') },
        { to: '/industries/construction', label: t('nav.construction') },
        { to: '/industries/financial', label: t('nav.financial') },
        { to: '/industries/manufacturing', label: t('nav.manufacturing') },
        { to: '/industries/education', label: t('nav.education') },
        { to: '/industries/agriculture', label: t('nav.agriculture') },
        { to: '/industries/restaurant', label: t('nav.restaurant') },
      ],
    },
    {
      label: t('nav.services'),
      to: '/services',
      children: [
        { to: '/services', label: t('nav.consultingServices') },
        { to: contactInfo.calendlyUrl, label: t('common.scheduleConsultation'), external: true },
        { to: '/stack', label: t('nav.technologyPlatform') },
        { to: '/privacy', label: t('nav.legalPrivacy') },
      ],
    },
    {
      label: t('nav.portfolio'),
      to: '/portfolio',
      children: [
        { to: '/portfolio', label: t('nav.portfolioOverview') },
        { to: '/portfolio#selected-work', label: t('nav.selectedWork') },
        { to: '/portfolio#start-project', label: t('nav.startProject') },
      ],
    },
    {
      label: t('nav.insights'),
      to: '/news',
      children: [
        { to: '/news', label: t('nav.newsInsights') },
        { to: '/clients', label: t('nav.clientVoices') },
      ],
    },
    {
      label: t('nav.company'),
      to: '/about',
      children: [
        { to: '/about', label: t('nav.ourStory') },
        { to: '/team', label: t('nav.leadership') },
        { to: '/engineers', label: t('nav.careers') },
        { to: '/privacy', label: t('nav.legalPrivacy') },
      ],
    },
  ].map((item) => ({
    ...item,
    children: filterNavLinks(item.children),
  }))
}

export function buildFooterColumns(t: (key: string) => string) {
  return [
    {
      title: t('nav.industries'),
      links: filterNavLinks([
        { to: '/industries/ecommerce', label: t('nav.ecommerce') },
        { to: '/industries/logistics', label: t('nav.logistics') },
        { to: '/industries/healthcare', label: t('nav.healthcare') },
        { to: '/industries/construction', label: t('nav.construction') },
        { to: '/industries/financial', label: t('nav.financial') },
        { to: '/industries/manufacturing', label: t('nav.manufacturing') },
        { to: '/industries/education', label: t('nav.education') },
        { to: '/industries/agriculture', label: t('nav.agriculture') },
        { to: '/industries/restaurant', label: t('nav.restaurant') },
      ]),
    },
    {
      title: t('nav.services'),
      links: filterNavLinks([
        { to: '/services', label: t('nav.consultingServices') },
        { to: contactInfo.calendlyUrl, label: t('common.scheduleConsultation'), external: true },
        { to: '/stack', label: t('nav.technologyPlatform') },
        { to: '/privacy', label: t('footer.infoSecurity') },
      ]),
    },
    {
      title: t('nav.portfolio'),
      links: filterNavLinks([
        { to: '/portfolio', label: t('nav.portfolioOverview') },
        { to: '/portfolio#selected-work', label: t('nav.selectedWork') },
        { to: '/portfolio#start-project', label: t('nav.startProject') },
      ]),
    },
    {
      title: t('nav.insights'),
      links: filterNavLinks([
        { to: '/news/free-football-websites-world-cup-2026', label: t('footer.freeWorldCup') },
        { to: '/news', label: t('nav.newsInsights') },
        { to: '/clients', label: t('nav.clientVoices') },
      ]),
    },
    {
      title: t('nav.company'),
      links: filterNavLinks([
        { to: '/about', label: t('nav.ourStory') },
        { to: '/team', label: t('nav.leadership') },
        { to: '/engineers', label: t('nav.careers') },
        { to: '/contact', label: t('footer.contact') },
      ]),
    },
  ]
}

export function buildUtilityLinks(t: (key: string) => string) {
  return [
    { label: t('utility.atAGlance'), to: '/about' },
    { label: t('utility.latestNews'), to: '/news' },
    { label: t('utility.hiring'), to: '/engineers' },
    { label: t('common.scheduleConsultation'), to: contactInfo.calendlyUrl, external: true as const },
    { label: t('common.contactUs'), to: '/contact' },
  ]
}
