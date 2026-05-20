export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
  industry: string
}

export const clientStats = [
  { value: '40+', label: 'Enterprise & growth-stage programs delivered' },
  { value: '12', label: 'Countries with active engineering collaboration' },
  { value: '94%', label: 'Clients who renew or expand engagements' },
  { value: '4.8/5', label: 'Average delivery satisfaction score' },
] as const

export const trustedIndustries = [
  'E-commerce & retail',
  'Logistics & supply chain',
  'Financial services',
  'Healthcare operations',
  'Construction & infrastructure',
  'Manufacturing & industrial',
  'Education & learning',
] as const

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'MoonSofts did not just staff engineers—they installed a delivery rhythm our product org could trust. Releases became predictable, and executive stakeholders finally had visibility they could act on.',
    name: 'Sarah Chen',
    role: 'VP of Product',
    company: 'Northline Commerce',
    industry: 'E-commerce',
  },
  {
    id: 't2',
    quote:
      'We needed a partner who understood compliance as a design constraint, not a checklist. MoonSofts integrated with our security team from week one and shipped without slowing the roadmap.',
    name: 'Marcus Okonkwo',
    role: 'Chief Technology Officer',
    company: 'Helix Health Systems',
    industry: 'Healthcare',
  },
  {
    id: 't3',
    quote:
      'Their logistics platform work connected warehouse, carrier, and customer-facing systems that had been siloed for years. The team communicated clearly across time zones—rare in our experience.',
    name: 'Elena Vasquez',
    role: 'Director of Operations',
    company: 'Meridian Freight',
    industry: 'Logistics',
  },
  {
    id: 't4',
    quote:
      'MoonSofts helped us modernize a legacy stack while keeping revenue-critical flows online. They were honest about trade-offs, disciplined about scope, and exceptional under pressure.',
    name: 'James Whitfield',
    role: 'Head of Engineering',
    company: 'Aperture Growth',
    industry: 'Marketing technology',
  },
  {
    id: 't5',
    quote:
      'From discovery through handoff, the engagement felt like an extension of our team—not a black box. Documentation, access hygiene, and code quality matched our internal bar.',
    name: 'Priya Nair',
    role: 'Chief People Officer',
    company: 'Workstream HR',
    industry: 'Human resources',
  },
  {
    id: 't6',
    quote:
      'We evaluated several consultancies. MoonSofts won on signal: crisp proposals, senior engineers in the room, and a platform mindset that reduced coordination overhead from day one.',
    name: 'David Park',
    role: 'Managing Director',
    company: 'Summit Capital Partners',
    industry: 'Financial services',
  },
  {
    id: 't7',
    quote:
      'MoonSofts connected our field teams, subcontractors, and finance office on one platform we could actually run jobs with. Change orders, daily logs, and cost visibility finally lived in the same place.',
    name: 'Rachel Morrison',
    role: 'VP of Technology',
    company: 'Ironwood Builders Group',
    industry: 'Construction',
  },
]

export function getTestimonialById(id: string) {
  return testimonials.find((item) => item.id === id)
}

export const industryTestimonialIds: Record<string, string> = {
  ecommerce: 't1',
  logistics: 't3',
  financial: 't6',
  healthcare: 't2',
  construction: 't7',
  manufacturing: 't4',
  education: 't5',
}

export function getTestimonialForIndustry(industryId: string) {
  const testimonialId = industryTestimonialIds[industryId]
  if (!testimonialId) return undefined
  return getTestimonialById(testimonialId)
}

export const outcomeHighlights = [
  {
    title: 'Faster time-to-market',
    body: 'Average 35% reduction in release cycle length after MoonSofts delivery rituals and CI/CD hardening.',
  },
  {
    title: 'Lower delivery risk',
    body: 'Structured access control, audit trails, and escalation paths on every program—built for regulated environments.',
  },
  {
    title: 'Scalable teams',
    body: 'Squads that grow with your roadmap without sacrificing craft, conduct, or architectural coherence.',
  },
]
