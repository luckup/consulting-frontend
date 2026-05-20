export type NavItem = { label: string; to: string }

export const whoWeAreNav: NavItem[] = [
  { label: 'About us', to: '/about#about-us' },
  { label: 'Our credo & values', to: '/about#values' },
  { label: 'Our commitments', to: '/about#commitments' },
  { label: 'Our history', to: '/about#history' },
]

export const clientsNav: NavItem[] = [
  { label: 'Client testimonials', to: '/clients#testimonials' },
  { label: 'Trust metrics', to: '/clients#metrics' },
  { label: 'Outcomes', to: '/clients#outcomes' },
  { label: 'Industries served', to: '/clients#industries-served' },
]

export const servicesNav: NavItem[] = [
  { label: 'How we engage', to: '/services#engage' },
  { label: 'Engagement types', to: '/services#models' },
  { label: 'Delivery model', to: '/services#delivery' },
  { label: 'Why MoonSofts', to: '/services#why-moonsofts' },
]

export const industriesNav: NavItem[] = [
  { label: 'Overview', to: '/industries' },
  { label: 'E-commerce', to: '/industries/ecommerce' },
  { label: 'Logistics', to: '/industries/logistics' },
  { label: 'Financial services', to: '/industries/financial' },
  { label: 'Healthcare', to: '/industries/healthcare' },
  { label: 'Construction', to: '/industries/construction' },
  { label: 'Manufacturing', to: '/industries/manufacturing' },
  { label: 'Education', to: '/industries/education' },
]

export const stackNav: NavItem[] = [
  { label: 'Delivery platform', to: '/stack#platform' },
  { label: 'Technology stack', to: '/stack#stack' },
  { label: 'Tools we use', to: '/stack#tools' },
  { label: 'Our businesses', to: '/stack#businesses' },
]

export const careersNav: NavItem[] = [
  { label: 'Join us', to: '/engineers' },
  { label: 'Students & graduates', to: '/engineers#students' },
  { label: 'Earn & learn', to: '/engineers#earn-learn' },
  { label: 'Current openings', to: '/engineers#openings' },
]

export const teamNav: NavItem[] = [
  { label: 'Leadership team', to: '/team' },
]

export const legalNav: NavItem[] = [
  { label: 'Privacy & security', to: '/privacy' },
  { label: 'Terms of use', to: '/privacy#terms' },
  { label: 'Privacy help center', to: '/privacy#help' },
]

export const newsNav: NavItem[] = [
  { label: 'All news', to: '/news' },
  { label: 'Company news', to: '/news?filter=company' },
  { label: 'Industry insights', to: '/news?filter=insights' },
]

export const contactNav: NavItem[] = [
  { label: 'Contact us', to: '/contact' },
  { label: 'Careers', to: '/engineers' },
  { label: 'Press & media', to: '/contact#press' },
]
