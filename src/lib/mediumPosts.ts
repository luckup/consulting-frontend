/**
 * Curated MoonSofts Medium posts (synced from moonsofts.medium.com RSS).
 * Update when you publish new stories — titles, dates, and images should match Medium.
 */
export type MediumPost = {
  title: string
  url: string
  /** Short display date */
  date: string
  summary: string
  /** Hero image from Medium CDN */
  image: string
}

export const mediumPosts: MediumPost[] = [
  {
    title:
      'MoonSofts vs. Traditional Software Consulting Companies: Why Our Vision Starts With Trust, Not Transactions',
    url: 'https://moonsofts.medium.com/moonsofts-vs-fe3c0dd6821b',
    date: 'May 26, 2026',
    summary:
      'Why MoonSofts leads with trust before transactions — and how we help founders with strong ideas take the first technical step.',
    image: 'https://cdn-images-1.medium.com/max/1024/1*ZkVxzkTJO_E5wWQLPIbFbw.png',
  },
  {
    title: 'Building MVPs for Free: How MoonSofts Is Helping First Customers Turn Ideas Into Real Software Products',
    url: 'https://moonsofts.medium.com/building-mvps-for-free-how-moonsofts-is-helping-first-customers-turn-ideas-into-real-software-7f8ba4912fab',
    date: 'May 25, 2026',
    summary:
      'Our early-stage focus: selected first customers, MVPs and websites that prove quality, and partnerships built on delivery — not hype.',
    image: 'https://cdn-images-1.medium.com/max/1024/1*1D8XcIGXr3iN_D-ezA69hQ.png',
  },
  {
    title: 'MoonSofts Roadmap: Building Trust First, Then Growing Into a Global Software Consulting Company',
    url: 'https://moonsofts.medium.com/moonsofts-roadmap-building-trust-first-then-growing-into-a-global-software-consulting-company-8faeceb115b2',
    date: 'May 21, 2026',
    summary:
      'Phase-by-phase plan: prove value with early builds, grow the brand, convert trust into long-term client programs, then scale industries and products.',
    image: 'https://cdn-images-1.medium.com/max/1024/1*5wlxmbXUeX8LdDC3FITe5A.png',
  },
  {
    title: 'MoonSofts: Building Software Without Borders Through Collaboration, Learning, and Remote-First Culture',
    url: 'https://moonsofts.medium.com/moonsofts-building-software-without-borders-through-collaboration-learning-and-remote-first-3ef44f025cc5',
    date: 'May 20, 2026',
    summary:
      'How we work as a remote-first software consulting company — collaboration, continuous learning, and global delivery with clear ownership.',
    image: 'https://cdn-images-1.medium.com/max/1024/1*iETlrKGUgR0yBTFP8LKxOw.png',
  },
  {
    title: 'The Beginning of Moonsofts: Building Intelligent Software Solutions for the Next Generation of Businesses',
    url: 'https://moonsofts.medium.com/the-beginning-of-moonsofts-building-intelligent-software-solutions-for-the-next-generation-of-3d997e4ae96f',
    date: 'May 19, 2026',
    summary:
      'Founding story: AI, cloud, and modern engineering for startups and enterprises — and why software is now the core of business growth.',
    image: 'https://cdn-images-1.medium.com/max/1024/1*ZO17mldA2FseRSI4_btXIQ.png',
  },
]

export const MOONSOFTS_MEDIUM_PROFILE = 'https://moonsofts.medium.com/'
