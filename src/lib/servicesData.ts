export const engagementModels = [
  {
    title: 'Discovery & architecture',
    body: 'Workshops, technical assessments, and roadmap alignment—so investment maps to measurable business outcomes before build begins.',
  },
  {
    title: 'Dedicated delivery squads',
    body: 'Cross-functional teams embedded in your rituals with accountable leads, sprint cadence, and client-ready reporting.',
  },
  {
    title: 'Platform & integration',
    body: 'APIs, data pipelines, and third-party integrations engineered for reliability, observability, and long-term maintainability.',
  },
  {
    title: 'Advisory & scale-up',
    body: 'Staff augmentation with MoonSofts standards—security, documentation, and handoffs that survive team changes.',
  },
] as const

/** Append to every imagePrompt — bright, light, advanced professional look. */
export const WEBSITE_IMAGE_STYLE_SUFFIX =
  'bright high-key natural lighting, airy light-toned modern space, white and soft neutral palette, advanced professional premium corporate photography, clean sophisticated atmosphere, laptop or phone screen showing light-mode website UI with white background and subtle cyan #00DFFF accent buttons, photorealistic DSLR editorial stock photo, no dark moody shadows no illustration no 3D render no abstract shapes, 16:9'

export type WebsiteOffering = {
  id: string
  title: string
  audience: string
  body: string
  highlights: readonly string[]
  /** For designers / AI image generation — see docs/service-image-prompts.md */
  imagePrompt: string
}

export const websiteOfferings: readonly WebsiteOffering[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal portfolio website',
    audience: 'Developers, designers, consultants, freelancers, creators',
    body: 'Builds your personal brand with skills, projects, testimonials, and clear ways to get in touch.',
    highlights: ['Project galleries and case studies', 'About, resume, and contact in one place'],
    imagePrompt:
      'Photorealistic photograph of a freelance designer at a bright white minimalist desk reviewing a personal portfolio website on a MacBook, large windows with soft daylight, light wood and green plant accents, shallow depth of field, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'business-landing',
    title: 'Business landing page',
    audience: 'Startups, agencies, SaaS products, local businesses',
    body: 'A simple, fast, conversion-focused site that explains your offer and captures leads—still a core growth tool for new ventures.',
    highlights: ['Single-page story with strong hero and CTA', 'Forms, analytics, and A/B-ready structure'],
    imagePrompt:
      'Photorealistic photo of a startup founder in a bright modern coworking space with white walls and glass windows, pointing at a laptop showing a clean business landing page, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'company-website',
    title: 'Company website',
    audience: 'Startups, software agencies, small businesses',
    body: 'Presents your services, team, case studies, contact form, and the credibility prospects expect before they book a call.',
    highlights: ['Multi-page corporate structure', 'Team, services, and proof of work'],
    imagePrompt:
      'Photorealistic photograph of a professional team in a bright glass conference room with white walls, large monitor showing a polished company website with team and services sections, business casual attire, confident friendly expressions, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce website',
    audience: 'Online stores, product brands, fashion, beauty, digital products',
    body: 'Online shopping keeps growing—product brands need a storefront that sells, manages catalog, and scales with demand.',
    highlights: ['Catalog, cart, checkout, and order flows', 'Promotions, SEO, and mobile shopping'],
    imagePrompt:
      'Photorealistic photo of a woman in a sunlit bright living room with white sofa shopping on phone, screen shows a clean light e-commerce fashion product page, soft daylight through sheer curtains, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'booking',
    title: 'Booking / appointment website',
    audience: 'Clinics, salons, coaches, consultants, restaurants, trainers',
    body: 'Lets customers book services directly—fewer back-and-forth messages and more filled calendars.',
    highlights: ['Service menu and availability', 'Online booking and confirmation emails'],
    imagePrompt:
      'Photorealistic photograph of a bright upscale salon reception with white interior, customer at marble desk holding tablet with appointment booking website and calendar, clean mirrors and soft daylight, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'saas',
    title: 'SaaS website',
    audience: 'Software startups, AI tools, subscription products',
    body: 'Explains product value, pricing, features, and integrations—and drives signups or demo requests.',
    highlights: ['Pricing tiers and feature comparison', 'Integrations, docs links, and trial signup'],
    imagePrompt:
      'Photorealistic photo of software professionals in a bright open-plan tech office with white desks and floor-to-ceiling windows, monitor showing a modern SaaS marketing website with pricing section, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'real-estate',
    title: 'Real estate website',
    audience: 'Agents, property startups, rental businesses',
    body: 'Shows listings, property details, maps, inquiry forms, and lead capture for buyers and renters.',
    highlights: ['Searchable listings with photos and filters', 'Agent contact and property inquiry forms'],
    imagePrompt:
      'Photorealistic photograph of a professional real estate agent in a crisp light blazer standing before a modern white suburban home on a sunny day, tablet showing bright property listing photos, clear blue sky, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'restaurant',
    title: 'Restaurant / café website',
    audience: 'Restaurants, coffee shops, food delivery brands',
    body: 'Menu, location, reservations, online ordering, and visibility for local search and maps.',
    highlights: ['Digital menu and hours', 'Reservations, ordering links, and location map'],
    imagePrompt:
      'Photorealistic photo of an elegant bright café interior with white tables, fresh plated brunch and coffee, owner showing phone with a light-themed restaurant menu website, soft natural window light, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'agency',
    title: 'Agency website',
    audience: 'Marketing, software, design, AI, consulting agencies',
    body: 'Highlights services, portfolio, reviews, your process, and lead generation for new client work.',
    highlights: ['Portfolio and client logos', 'Process, packages, and contact paths'],
    imagePrompt:
      'Photorealistic photograph of a creative director at a bright white agency studio desk with dual monitors showing a refined agency portfolio website, minimal tidy workspace, large windows and soft daylight, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'mvp',
    title: 'MVP web app',
    audience: 'Startups testing an idea',
    body: 'A lean product to validate your business idea before investing in a full platform build.',
    highlights: ['Core user flows only—ship in weeks', 'Ready to iterate from real user feedback'],
    imagePrompt:
      'Photorealistic photo of an entrepreneur in a bright white home office using laptop with a clean MVP web app dashboard on screen, neat whiteboard with notes, sunlit minimal apartment workspace, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'blog',
    title: 'Blog / content website',
    audience: 'Coaches, creators, niche experts, media startups',
    body: 'Supports SEO, authority building, and long-term organic traffic around your expertise.',
    highlights: ['Article templates and categories', 'Newsletter signup and content discovery'],
    imagePrompt:
      'Photorealistic photograph of a professional coach writing on laptop in a bright airy home office with white walls and light oak shelves, screen shows a clean blog article layout, morning sunlight, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
  {
    id: 'community',
    title: 'Community / membership website',
    audience: 'Creators, coaches, education startups',
    body: 'Paid communities, courses, exclusive content, and member dashboards behind secure access.',
    highlights: ['Members-only content and tiers', 'Courses, forums, or events as you need'],
    imagePrompt:
      'Photorealistic photo of a course creator at a bright white content studio desk with soft professional lighting, laptop showing a light-mode membership community website, clean microphone and notebook, ' +
      WEBSITE_IMAGE_STYLE_SUFFIX,
  },
] as const

export const deliveryPhases = [
  { phase: '01', title: 'Align', detail: 'Scope, stakeholders, success metrics, and communication rhythms defined upfront.' },
  { phase: '02', title: 'Design', detail: 'Architecture, security constraints, and delivery plan agreed with your technical leadership.' },
  { phase: '03', title: 'Build', detail: 'Iterative delivery with demos, quality gates, and transparent progress reporting.' },
  { phase: '04', title: 'Operate', detail: 'Handoff, runbooks, monitoring, and optional ongoing support for production systems.' },
] as const
