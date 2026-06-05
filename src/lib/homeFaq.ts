export type HomeFaqItem = {
  id: string
  question: string
  answer: string
}

export const homeFaqItems: readonly HomeFaqItem[] = [
  {
    id: 'free-football-world-cup-2026',
    question: 'Do you offer a free website for football players and football stars ahead of the 2026 World Cup?',
    answer:
      'Yes. MoonSofts is running a limited free website program for selected football players, football stars, creators, clubs, and fan communities preparing for the 2026 World Cup. Each custom site can showcase highlight reels, match clips, photo galleries, and community news—with basic SEO so fans find your highlights online. Read the announcement in our newsroom or contact us to apply.',
  },
  {
    id: 'what-is-moonsofts',
    question: 'What does MoonSofts do?',
    answer:
      'MoonSofts is a software consulting and delivery partner. We help organizations with discovery, architecture, dedicated engineering squads, cloud and platform work, and customer-facing websites—from landing pages and e-commerce to SaaS and membership platforms.',
  },
  {
    id: 'who-we-work-with',
    question: 'Who do you typically work with?',
    answer:
      'We partner with startups, growth-stage companies, and enterprises that need predictable delivery and senior judgment—not ad-hoc staffing. Our industry experience spans commerce, logistics, healthcare, financial services, construction, manufacturing, and education.',
  },
  {
    id: 'engagement-models',
    question: 'How do engagements usually start?',
    answer:
      'Most programs begin with alignment on goals, scope, and success metrics, followed by architecture or discovery when needed. We then move into iterative build with transparent reporting, or embed a squad into your existing rituals.',
  },
  {
    id: 'website-services',
    question: 'Do you build websites as well as enterprise software?',
    answer:
      'Yes. We deliver portfolio sites, company and landing pages, e-commerce stores, booking sites, SaaS marketing sites, and more. See our Consulting services page for the full list of website solutions we offer.',
  },
  {
    id: 'timeline',
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope. A focused landing page or marketing site may ship in a few weeks; larger platforms and multi-squad programs run over quarters. We provide honest estimates during discovery and adjust with clear communication if priorities change.',
  },
  {
    id: 'remote-delivery',
    question: 'Can you work with distributed teams across time zones?',
    answer:
      'Yes. We operate remote-first with U.S.-side accountability, structured ceremonies, and documentation so stakeholders always know what shipped, what is at risk, and what decisions are needed.',
  },
  {
    id: 'security',
    question: 'How do you handle security and compliance?',
    answer:
      'Security is built in from the first sprint: least-privilege access, audit trails, and counsel-aware practices where programs require it. We align with your technical and legal stakeholders before expanding scope.',
  },
  {
    id: 'get-started',
    question: 'How can I get started?',
    answer:
      'Book a 30-minute consultation to discuss your goals, or send a message through our contact form. We will recommend an engagement model and next steps based on your timeline and constraints.',
  },
] as const
