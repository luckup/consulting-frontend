import { cdnUrl } from '@/lib/cdn'

const industryPhotos = {
  ecommerce: {
    hero: cdnUrl('home/services/moonsofts-e-commerce-upper.png'),
    page: cdnUrl('home/services/moonsofts-ecommerce.png'),
  },
  logistics: {
    hero: cdnUrl('home/services/moonsofts-logistics-upper.png'),
    page: cdnUrl('home/services/moonsofts-logistics.png'),
  },
  financial: {
    hero: cdnUrl('home/services/moonsofts-fintech-upper.png'),
    page: cdnUrl('home/services/moonsofts-fintech.png'),
  },
  healthcare: {
    hero: cdnUrl('home/services/moonsofts-healthcar-upper.png'),
    page: cdnUrl('home/services/moonsofts-healthcare.png'),
  },
  construction: {
    hero: cdnUrl('home/services/moonsofts-construction-upper.png'),
    page: cdnUrl('home/services/moonsofts-construction.png'),
  },
  manufacturing: {
    hero: cdnUrl('home/services/moonsofts-manufacturing-upper.png'),
    page: cdnUrl('home/services/moonsofts-manufacturing.png'),
  },
  education: {
    hero: cdnUrl('home/services/moonsofts-education-upper.png'),
    page: cdnUrl('home/services/moonsofts-education.png'),
  },
  agriculture: {
    hero: cdnUrl('home/services/moonsofts-agriculture-upper.png'),
    page: cdnUrl('home/services/moonsofts-agriculture.png'),
  },
  restaurant: {
    hero: cdnUrl('home/services/moonsofts-restaurant-upper.png'),
    page: cdnUrl('home/services/moonsofts-restaurant.png'),
  },
} as const

export const siteImages = {
  brand: {
    logo: cdnUrl('brand/moonsofts-logo.png'),
    yujiLogo: cdnUrl('brand/yuji-logo.jpg'),
  },
  hero: {
    home: cdnUrl('pages/home/moonsofts-section1.png'),
    homeBanner: cdnUrl('pages/home/moonsofts-section1.png'),
    default: cdnUrl('pages/about/moonsofts-history.png'),
    about: cdnUrl('heroes/moonsofts-about.png'),
    stack: cdnUrl('heroes/moonsofts-stack.png'),
    careers: cdnUrl('heroes/moonsofts-careers.png'),
    contact: cdnUrl('heroes/moonsofts-contact.png'),
    privacy: cdnUrl('heroes/moonsofts-privacy.png'),
    news: cdnUrl('pages/about/moonsofts-commitments-split.png'),
    team: cdnUrl('heroes/moonsofts-team.png'),
    clients: cdnUrl('home/services/moonsofts-fintech.png'),
    services: cdnUrl('heroes/moonsofts-stack.png'),
    industries: cdnUrl('home/services/moonsofts-logistics-upper.png'),
  },
  industries: industryPhotos,
  home: {
    section0: cdnUrl('pages/home/moonsofts-section0.png'),
    section1: cdnUrl('pages/home/moonsofts-section1.png'),
    worldCup2026: cdnUrl('pages/home/moonsofts-world-cup-2026.png'),
    spotlight: [
      cdnUrl('pages/home/moonsofts-section1.png'),
      cdnUrl('pages/home/moonsofts-section2.png'),
      cdnUrl('pages/home/moonsofts-section3.png'),
    ] as const,
    whoWeAre: cdnUrl('home/services/moonsofts-remote-teams.png'),
    whatWeDo: cdnUrl('home/services/moonsofts-fullstack.png'),
    businesses: cdnUrl('home/services/moonsofts-cloud-infrastructure.png'),
    ecommerce: cdnUrl('home/services/moonsofts-ecommerce.png'),
    logistics: cdnUrl('home/services/moonsofts-logistics.png'),
    fintech: cdnUrl('home/services/moonsofts-fintech.png'),
    healthcare: cdnUrl('home/services/moonsofts-healthcare.png'),
    construction: cdnUrl('home/services/moonsofts-construction.png'),
    manufacturing: cdnUrl('home/services/moonsofts-manufacturing.png'),
    education: cdnUrl('home/services/moonsofts-education.png'),
    agriculture: cdnUrl('home/services/moonsofts-agriculture.png'),
    restaurant: cdnUrl('home/services/moonsofts-restaurant.png'),
    careersBackground: cdnUrl('pages/home/moonsofts-background.png'),
    certificates: [
      cdnUrl('pages/home/certificates/moonsofts-1.png'),
      cdnUrl('pages/home/certificates/moonsofts-2.png'),
      cdnUrl('pages/home/certificates/moonsofts-3.png'),
      cdnUrl('pages/home/certificates/moonsofts-5.png'),
      cdnUrl('pages/home/certificates/moonsofts-6.png'),
    ] as const,
  },
  cta: {
    careers: cdnUrl('heroes/moonsofts-careers.png'),
    platform: cdnUrl('home/services/moonsofts-cloud-infrastructure.png'),
  },
  worldCup: {
    section0: cdnUrl('pages/home/moonsofts-section0.png'),
    section1: cdnUrl('pages/home/moonsofts-section1.png'),
    section2: cdnUrl('pages/home/moonsofts-section2.png'),
    section3: cdnUrl('pages/home/moonsofts-section3.png'),
    highlightsCustomer: cdnUrl('pages/home/moonsofts-world-cup-2026.png'),
  },
  news: {
    launch: cdnUrl('news/moonsofts-launch.png'),
    worldCup2026: cdnUrl('news/moonsofts-world-cup-2026.png'),
    ceoVision: cdnUrl('news/moonsofts-ceo-vision.png'),
    aiDevelopment: cdnUrl('news/moonsofts-ai-development.png'),
    industrySolutions: cdnUrl('news/moonsofts-industry-solutions.png'),
    reliablePartner: cdnUrl('news/moonsofts-reliable-partner.png'),
  },
  split: {
    aboutCommitments: cdnUrl('pages/about/moonsofts-commitments-split.png'),
    stackPlatform: cdnUrl('heroes/moonsofts-stack.png'),
    careersStudents: cdnUrl('pages/about/moonsofts-commitments.png'),
  },
  about: {
    history: cdnUrl('pages/about/moonsofts-history.png'),
  },
  contact: {
    global: cdnUrl('pages/about/moonsofts-history.png'),
  },
  stack: {
    product: cdnUrl('pages/stack/moonsofts-product_engineering.png'),
    cloud: cdnUrl('pages/stack/moonsofts-platform_and_cloud.png'),
    data: cdnUrl('pages/stack/moonsofts-data_and_ai.png'),
  },
  team: {
    banner: cdnUrl('pages/team/moonsofts-banner.png'),
    thomasJennings: cdnUrl('pages/team/moonsofts-thomas-jennings.png'),
    walter: cdnUrl('pages/team/moonsofts-walter-picher.png'),
    reza: cdnUrl('pages/team/moonsofts-reza-nozari.png'),
    adryan: cdnUrl('pages/team/moonsofts-adryan-andrade-daniel.png'),
  },
  portfolio: {
    sycu: {
      home: cdnUrl('pages/portfolio/sycu/moonsofts-sycu-home.jpg'),
      strategy: cdnUrl('pages/portfolio/sycu/moonsofts-sycu-strategy.jpg'),
      marketplace: cdnUrl('pages/portfolio/sycu/moonsofts-sycu-marketplace.jpg'),
      videos: cdnUrl('pages/portfolio/sycu/moonsofts-sycu-videos.jpg'),
    },
    thesnuslife: {
      home: cdnUrl('pages/portfolio/thesnuslife/0.jpg'),
      catalog: cdnUrl('pages/portfolio/thesnuslife/1.jpg'),
      product: cdnUrl('pages/portfolio/thesnuslife/2.jpg'),
    },
    gvrapp: {
      home: cdnUrl('pages/portfolio/gvrapp/0.jpg'),
      campaigns: cdnUrl('pages/portfolio/gvrapp/1.jpg'),
      caseStudy: cdnUrl('pages/portfolio/gvrapp/2.jpg'),
    },
    azeltd: {
      home: cdnUrl('pages/portfolio/azeltd/0.jpg'),
      solutions: cdnUrl('pages/portfolio/azeltd/1.jpg'),
      projects: cdnUrl('pages/portfolio/azeltd/2.jpg'),
    },
  },
  services: {
    websiteOfferings: {
      'personal-portfolio': cdnUrl('pages/services/moonsofts-personal-portfolio.png'),
      'business-landing': cdnUrl('pages/services/moonsofts-business-landing.png'),
      'company-website': cdnUrl('pages/services/moonsofts-company-website.png'),
      ecommerce: cdnUrl('pages/services/moonsofts-ecommerce.png'),
      booking: cdnUrl('pages/services/moonsofts-booking.png'),
      saas: cdnUrl('pages/services/moonsofts-saas.png'),
      'real-estate': cdnUrl('pages/services/moonsofts-real-estate.png'),
      restaurant: cdnUrl('pages/services/moonsofts-restaurant.png'),
      agency: cdnUrl('pages/services/moonsofts-agency.png'),
      mvp: cdnUrl('pages/services/moonsofts-mvp.png'),
      blog: cdnUrl('pages/services/moonsofts-blog.png'),
      community: cdnUrl('pages/services/moonsofts-community.png'),
    },
  },
} as const
