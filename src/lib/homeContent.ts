import { siteImages } from '@/lib/siteImages'

export const spotlightSlides = [
  {
    id: 'delivery',
    eyebrow: 'Software consulting',
    title: 'Powering the last mile of product delivery',
    description:
      'Industry-specific engineering and platforms that turn strategy into shipped software—with security, accountability, and measurable outcomes.',
    cta: { label: 'Explore our services', to: '/services' },
    image: siteImages.home.spotlight[0],
  },
  {
    id: 'ai',
    eyebrow: 'Engineering & AI',
    title: 'Full-stack systems built for production scale',
    description:
      'From discovery through operate—copilots, APIs, cloud, and data platforms engineered with governance and observability from day one.',
    cta: { label: 'View our technology', to: '/stack' },
    image: siteImages.home.spotlight[1],
  },
  {
    id: 'clients',
    eyebrow: 'Client voices',
    title: 'Trusted by leaders who measure delivery in outcomes',
    description:
      'Enterprise and growth-stage teams partner with MoonSofts for accountable squads—not ad-hoc capacity.',
    cta: { label: 'Start a conversation', to: '/contact' },
    image: siteImages.home.spotlight[2],
  },
] as const

export const homeServices = [
  {
    title: 'Consulting & discovery',
    body: 'Architecture assessments, roadmap alignment, and engagement models mapped to business outcomes.',
    to: '/services#engage',
  },
  {
    title: 'Dedicated delivery squads',
    body: 'Cross-functional teams embedded in your rituals with accountable leads and client-ready reporting.',
    to: '/services#models',
  },
  {
    title: 'Full-stack & AI engineering',
    body: 'Production web apps, APIs, and intelligent workflows with governance and observability built in.',
    to: '/stack#stack',
  },
  {
    title: 'Cloud & data platforms',
    body: 'Infrastructure, CI/CD, and data engineering on AWS, Azure, and GCP—aligned to compliance needs.',
    to: '/stack#tools',
  },
  {
    title: 'Platform & integration',
    body: 'APIs, pipelines, and third-party systems engineered for reliability and long-term maintainability.',
    to: '/services#delivery',
  },
  {
    title: 'Information security',
    body: 'Least-privilege access, audit trails, and counsel-aware delivery for sensitive programs.',
    to: '/privacy',
  },
] as const

export const homeIndustries = [
  { label: 'E-commerce', body: 'Digital commerce & retail platforms at scale.', to: '/industries/ecommerce', image: siteImages.home.ecommerce },
  { label: 'Logistics', body: 'Supply chain, warehouse, and fulfillment software.', to: '/industries/logistics', image: siteImages.home.logistics },
  { label: 'Healthcare', body: 'Secure clinical and operational systems.', to: '/industries/healthcare', image: siteImages.home.healthcare },
  { label: 'Construction', body: 'Field operations and project controls.', to: '/industries/construction', image: siteImages.home.construction },
  { label: 'Financial services', body: 'Regulated, audit-ready delivery.', to: '/industries/financial', image: siteImages.home.fintech },
  {
    label: 'Manufacturing',
    body: 'Shop-floor, quality, and production systems.',
    to: '/industries/manufacturing',
    image: siteImages.home.manufacturing,
  },
  {
    label: 'Education',
    body: 'Learning platforms and campus operations.',
    to: '/industries/education',
    image: siteImages.home.education,
  },
] as const

export const recognitions = [
  'Enterprise delivery partner for global product teams',
  'Security-first engineering across 12+ countries',
  '94% client renewal and expansion rate',
  'Integrated delivery platform for distributed squads',
  'Full-stack & cloud certified engineering bench',
  'Industry programs across commerce, logistics & healthcare',
] as const

export { latestHeadlines } from '@/lib/homeNewsHeadlines'

export const studioFeatures = [
  'Senior architects & industry leads in every engagement',
  'Security, access control, and auditability by default',
  'Accelerators for cloud, data, and integration patterns',
  'Continuous delivery with transparent client reporting',
  'Global squads with U.S.-side accountability',
  'Design-thinking discovery before build commitments',
] as const
