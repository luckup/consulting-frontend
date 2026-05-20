type RouteMeta = {
  title: string
  description: string
}

const defaults: RouteMeta = {
  title: 'MoonSofts',
  description:
    'MoonSofts — software consulting for AI, cloud, and accountable engineering for global product teams.',
}

const exact: Record<string, RouteMeta> = {
  '/': {
    title: 'MoonSofts | Software consulting & engineering',
    description:
      'AI-assisted delivery, cloud-native architecture, and accountable engineering squads for enterprises worldwide.',
  },
  '/about': {
    title: 'About MoonSofts',
    description: 'Our story, values, commitments, and history as a global software consulting partner.',
  },
  '/services': {
    title: 'Services | MoonSofts',
    description: 'Consulting, engagement models, and delivery practices for modern product organizations.',
  },
  '/industries': {
    title: 'Industries | MoonSofts',
    description: 'Sector-specific software practices for e-commerce, healthcare, manufacturing, education, logistics, and more.',
  },
  '/clients': {
    title: 'Client voices | MoonSofts',
    description: 'Testimonials, trust metrics, and outcomes from MoonSofts delivery programs.',
  },
  '/stack': {
    title: 'Technology & platform | MoonSofts',
    description: 'Delivery platform, technology stack, and tools for distributed engineering teams.',
  },
  '/news': {
    title: 'Newsroom | MoonSofts',
    description: 'Company updates and industry insights on AI, cloud, and engineering delivery.',
  },
  '/team': {
    title: 'Leadership team | MoonSofts',
    description: 'Meet the MoonSofts leadership team.',
  },
  '/engineers': {
    title: 'Careers | MoonSofts',
    description: 'Join MoonSofts — engineering careers for students, graduates, and experienced builders.',
  },
  '/contact': {
    title: 'Contact | MoonSofts',
    description: 'Get in touch with MoonSofts for partnerships, careers, or client engagements.',
  },
  '/privacy': {
    title: 'Legal & privacy | MoonSofts',
    description: 'Privacy, security, and terms for MoonSofts digital properties.',
  },
}

export function getRouteMeta(pathname: string): RouteMeta {
  if (exact[pathname]) return exact[pathname]

  if (pathname.startsWith('/news/') && pathname !== '/news') {
    return {
      title: 'Article | MoonSofts News',
      description: defaults.description,
    }
  }

  if (pathname.startsWith('/industries/')) {
    return {
      title: 'Industry | MoonSofts',
      description: 'Industry-specific software consulting and delivery from MoonSofts.',
    }
  }

  return defaults
}
