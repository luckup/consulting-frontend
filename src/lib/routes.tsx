import { lazyPage } from '@/lib/lazyPage'

export const AboutPage = lazyPage(() => import('@/pages/AboutPage'), 'AboutPage')
export const ContactPage = lazyPage(() => import('@/pages/ContactPage'), 'ContactPage')
export const EngineersPage = lazyPage(() => import('@/pages/EngineersPage'), 'EngineersPage')
export const PrivacyPage = lazyPage(() => import('@/pages/PrivacyPage'), 'PrivacyPage')
export const StackPage = lazyPage(() => import('@/pages/StackPage'), 'StackPage')
export const NewsPage = lazyPage(() => import('@/pages/NewsPage'), 'NewsPage')
export const NewsArticlePage = lazyPage(() => import('@/pages/NewsArticlePage'), 'NewsArticlePage')
export const TeamPage = lazyPage(() => import('@/pages/TeamPage'), 'TeamPage')
export const ClientsPage = lazyPage(() => import('@/pages/ClientsPage'), 'ClientsPage')
export const ServicesPage = lazyPage(() => import('@/pages/ServicesPage'), 'ServicesPage')
export const IndustriesPage = lazyPage(() => import('@/pages/IndustriesPage'), 'IndustriesPage')
export const IndustryDetailPage = lazyPage(() => import('@/pages/IndustryDetailPage'), 'IndustryDetailPage')
