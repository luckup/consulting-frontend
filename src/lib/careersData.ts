export type OpenPositionRole =
  | 'sales-engineer'
  | 'co-founder-founding-engineer'
  | 'business-representative'
  | 'founding-full-stack-engineer'
  | 'delivery-program-manager'
  | 'solutions-consultant'

export type OpenPosition = {
  id: string
  title: string
  tagline: string
  engagement: string
  description: string
  highlights: readonly string[]
  role: OpenPositionRole
}

export const openPositions: readonly OpenPosition[] = [
  {
    id: 'co-founder-founding-engineer',
    title: 'Co-founder & founding engineer',
    tagline: 'Help build MoonSofts from the ground up—product, delivery, and client outcomes.',
    engagement: 'Founding team · Remote-friendly · Equity-eligible',
    description:
      'We are looking for a technical co-builder who wants ownership beyond a title: shaping how we deliver, what we ship internally, and how senior squads show up for clients. You will write production code, mentor others, and influence company direction.',
    highlights: [
      'Hands-on architecture and full-stack delivery on client and platform work',
      'Partnership on hiring, rituals, and the delivery operating system',
      'Direct access to founders and early clients—no layers of middle management',
    ],
    role: 'co-founder-founding-engineer',
  },
  {
    id: 'sales-engineer',
    title: 'Sales engineer',
    tagline: 'Translate complex delivery into trust—demos, discovery, and technical win stories.',
    engagement: 'Full-time or contract · Remote · Commission + base (role-dependent)',
    description:
      'You sit between prospects and our delivery bench: leading technical discovery, scoping conversations, and proof points that show MoonSofts is an accountable partner—not a body shop.',
    highlights: [
      'Run discovery workshops and map prospect pain to engagement models',
      'Partner with founders on proposals, SOWs, and security/compliance narratives',
      'Comfortable presenting to engineering leaders and executive sponsors',
    ],
    role: 'sales-engineer',
  },
  {
    id: 'business-representative',
    title: 'Business representative',
    tagline: 'Open doors, nurture relationships, and grow the partner pipeline.',
    engagement: 'Full-time or contract · Remote · Performance-based comp available',
    description:
      'You represent MoonSofts in the market: outbound and inbound conversations, conference follow-ups, referral networks, and keeping our pipeline honest. Ideal if you enjoy connecting people and closing the loop with crisp communication.',
    highlights: [
      'Identify and qualify consulting opportunities across target industries',
      'Coordinate intros with technical leads—no solo “sell and disappear” handoffs',
      'Maintain CRM hygiene and feedback loops so delivery hears market signals',
    ],
    role: 'business-representative',
  },
  {
    id: 'founding-full-stack-engineer',
    title: 'Founding full-stack engineer',
    tagline: 'Ship production software on client programs with senior autonomy.',
    engagement: 'Full-time · Remote · Senior IC',
    description:
      'Join as an early engineer on client squads and internal accelerators. You should be comfortable across modern web stacks, APIs, cloud primitives, and the habits of accountable delivery—reviews, documentation, and clear client communication.',
    highlights: [
      'End-to-end feature ownership on MERN and cloud-native programs',
      'Pair with architects on integration, security, and observability standards',
      'Mentor junior talent when programs include earn-and-learn contributors',
    ],
    role: 'founding-full-stack-engineer',
  },
  {
    id: 'delivery-program-manager',
    title: 'Delivery & program manager',
    tagline: 'Keep distributed squads aligned, visible, and predictable for clients.',
    engagement: 'Full-time or contract · Remote',
    description:
      'You make delivery legible: ceremonies, RAID logs, executive-ready status, and escalation paths that respect both client calendars and engineer sustainability.',
    highlights: [
      'Run sprint rituals across U.S. and global time zones without theater',
      'Translate technical progress into stakeholder language executives trust',
      'Partner with engineering leads on scope, risk, and release readiness',
    ],
    role: 'delivery-program-manager',
  },
  {
    id: 'solutions-consultant',
    title: 'Solutions consultant',
    tagline: 'Pre-engagement assessments, roadmaps, and architecture advisory.',
    engagement: 'Contract or part-time · Remote',
    description:
      'Short, high-impact engagements: discovery, architecture options, and delivery recommendations before a full squad lands. Great fit for senior practitioners who consult part-time while building with us.',
    highlights: [
      'Lead workshops and produce actionable assessment artifacts',
      'Align recommendations to compliance, integration, and team realities',
      'Optional path into longer-running squad leadership',
    ],
    role: 'solutions-consultant',
  },
] as const

export const openPositionRoleLabels: Record<OpenPositionRole, string> = {
  'sales-engineer': 'Sales engineer',
  'co-founder-founding-engineer': 'Co-founder & founding engineer',
  'business-representative': 'Business representative',
  'founding-full-stack-engineer': 'Founding full-stack engineer',
  'delivery-program-manager': 'Delivery & program manager',
  'solutions-consultant': 'Solutions consultant',
}

export function getOpenPosition(id: string) {
  return openPositions.find((p) => p.id === id)
}

export function contactPathForPosition(position: OpenPosition) {
  return `/contact?role=${position.role}&position=${position.id}#contact-form`
}
