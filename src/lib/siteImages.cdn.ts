import { cdnUrl } from '@/lib/cdn'

const industryPhotos = {
  ecommerce: {
    hero: cdnUrl('home/services/e-commerce-upper.png'),
    page: cdnUrl('home/services/ecommerce.png'),
  },
  logistics: {
    hero: cdnUrl('home/services/logistics-upper.png'),
    page: cdnUrl('home/services/logistics.png'),
  },
  financial: {
    hero: cdnUrl('home/services/fintech-upper.png'),
    page: cdnUrl('home/services/fintech.png'),
  },
  healthcare: {
    hero: cdnUrl('home/services/healthcar-upper.png'),
    page: cdnUrl('home/services/healthcare.png'),
  },
  construction: {
    hero: cdnUrl('home/services/construction-upper.png'),
    page: cdnUrl('home/services/construction.png'),
  },
  manufacturing: {
    hero: cdnUrl('home/services/manufacturing-upper.png'),
    page: cdnUrl('home/services/manufacturing.png'),
  },
  education: {
    hero: cdnUrl('home/services/education-upper.png'),
    page: cdnUrl('home/services/education.png'),
  },
  agriculture: {
    hero: cdnUrl('home/services/agriculture-upper.png'),
    page: cdnUrl('home/services/agriculture.png'),
  },
  restaurant: {
    hero: cdnUrl('home/services/restaurant-upper.png'),
    page: cdnUrl('home/services/restaurant.png'),
  },
} as const

export const siteImages = {
  brand: { logo: cdnUrl('brand/logo.png') },
  hero: {
    home: cdnUrl('pages/home/section1.png'),
    homeBanner: cdnUrl('pages/home/section1.png'),
    default: cdnUrl('pages/about/history.png'),
    about: cdnUrl('heroes/about.png'),
    stack: cdnUrl('heroes/stack.png'),
    careers: cdnUrl('heroes/careers.png'),
    contact: cdnUrl('heroes/contact.png'),
    privacy: cdnUrl('heroes/privacy.png'),
    news: cdnUrl('pages/about/commitments-split.png'),
    team: cdnUrl('heroes/team.png'),
    clients: cdnUrl('home/services/fintech.png'),
    services: cdnUrl('heroes/stack.png'),
    industries: cdnUrl('home/services/logistics-upper.png'),
  },
  industries: industryPhotos,
  home: {
    spotlight: [
      cdnUrl('pages/home/section1.png'),
      cdnUrl('pages/home/section2.png'),
      cdnUrl('pages/home/section3.png'),
    ] as const,
    whoWeAre: cdnUrl('home/services/remote-teams.png'),
    whatWeDo: cdnUrl('home/services/fullstack.png'),
    businesses: cdnUrl('home/services/cloud-infrastructure.png'),
    ecommerce: cdnUrl('home/services/ecommerce.png'),
    logistics: cdnUrl('home/services/logistics.png'),
    fintech: cdnUrl('home/services/fintech.png'),
    healthcare: cdnUrl('home/services/healthcare.png'),
    construction: cdnUrl('home/services/construction.png'),
    manufacturing: cdnUrl('home/services/manufacturing.png'),
    education: cdnUrl('home/services/education.png'),
    agriculture: cdnUrl('home/services/agriculture.png'),
    restaurant: cdnUrl('home/services/restaurant.png'),
    careersBackground: cdnUrl('pages/home/background.png'),
    certificates: [
      cdnUrl('pages/home/certificates/1.png'),
      cdnUrl('pages/home/certificates/2.png'),
      cdnUrl('pages/home/certificates/3.png'),
      cdnUrl('pages/home/certificates/5.png'),
      cdnUrl('pages/home/certificates/6.png'),
    ] as const,
  },
  cta: {
    careers: cdnUrl('heroes/careers.png'),
    platform: cdnUrl('home/services/cloud-infrastructure.png'),
  },
  news: {
    launch: cdnUrl('news/launch.png'),
    ceoVision: cdnUrl('news/ceo-vision.png'),
    aiDevelopment: cdnUrl('news/ai-development.png'),
    industrySolutions: cdnUrl('news/industry-solutions.png'),
    reliablePartner: cdnUrl('news/reliable-partner.png'),
  },
  split: {
    aboutCommitments: cdnUrl('pages/about/commitments-split.png'),
    stackPlatform: cdnUrl('heroes/stack.png'),
    careersStudents: cdnUrl('pages/about/commitments.png'),
  },
  about: {
    history: cdnUrl('pages/about/history.png'),
  },
  contact: {
    global: cdnUrl('pages/about/history.png'),
  },
  stack: {
    product: cdnUrl('pages/stack/product_engineering.png'),
    cloud: cdnUrl('pages/stack/platform_and_cloud.png'),
    data: cdnUrl('pages/stack/data_and_ai.png'),
  },
  team: {
    banner: cdnUrl('pages/team/banner.png'),
    thomasJennings: cdnUrl('pages/team/thomas-jennings.png'),
    walter: cdnUrl('pages/team/walter-picher.png'),
    reza: cdnUrl('pages/team/reza-nozari.png'),
    adryan: cdnUrl('pages/team/adryan-andrade-daniel.png'),
  },
  services: {
    websiteOfferings: {
      'personal-portfolio': cdnUrl('pages/services/personal-portfolio.png'),
      'business-landing': cdnUrl('pages/services/business-landing.png'),
      'company-website': cdnUrl('pages/services/company-website.png'),
      ecommerce: cdnUrl('pages/services/ecommerce.png'),
      booking: cdnUrl('pages/services/booking.png'),
      saas: cdnUrl('pages/services/saas.png'),
      'real-estate': cdnUrl('pages/services/real-estate.png'),
      restaurant: cdnUrl('pages/services/restaurant.png'),
      agency: cdnUrl('pages/services/agency.png'),
      mvp: cdnUrl('pages/services/mvp.png'),
      blog: cdnUrl('pages/services/blog.png'),
      community: cdnUrl('pages/services/community.png'),
    },
  },
} as const
