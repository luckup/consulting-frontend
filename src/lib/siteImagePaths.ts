import { moonsoftsImageKey } from '@/lib/cdn'

/**
 * CDN object keys — logical paths under `src/assets/`.
 * Filenames are prefixed with `moonsofts-` on upload (see scripts/cdn-asset-manifest.json).
 */
function cdnKey(relativePath: string): string {
  return moonsoftsImageKey(relativePath)
}

export const siteImagePaths = {
  brand: {
    logo: cdnKey('brand/moonsofts-logo.png'),
  },
  heroes: {
    about: cdnKey('heroes/moonsofts-about.png'),
    stack: cdnKey('heroes/moonsofts-stack.png'),
    careers: cdnKey('heroes/moonsofts-careers.png'),
    contact: cdnKey('heroes/moonsofts-contact.png'),
    privacy: cdnKey('heroes/moonsofts-privacy.png'),
    team: cdnKey('heroes/moonsofts-team.png'),
  },
  pages: {
    home: {
      section0: cdnKey('pages/home/moonsofts-section0.png'),
      section1: cdnKey('pages/home/moonsofts-section1.png'),
      section2: cdnKey('pages/home/moonsofts-section2.png'),
      section3: cdnKey('pages/home/moonsofts-section3.png'),
      worldCup2026: cdnKey('pages/home/moonsofts-world-cup-2026.png'),
    },
    about: {
      history: cdnKey('pages/about/moonsofts-history.png'),
      commitments: cdnKey('pages/about/moonsofts-commitments.png'),
      commitmentsSplit: cdnKey('pages/about/moonsofts-commitments-split.png'),
    },
    stack: {
      productEngineering: cdnKey('pages/stack/moonsofts-product_engineering.png'),
      platformCloud: cdnKey('pages/stack/moonsofts-platform_and_cloud.png'),
      dataAi: cdnKey('pages/stack/moonsofts-data_and_ai.png'),
    },
    team: {
      banner: cdnKey('pages/team/moonsofts-banner.png'),
      thomasJennings: cdnKey('pages/team/moonsofts-thomas-jennings.png'),
      walter: cdnKey('pages/team/moonsofts-walter-picher.png'),
      reza: cdnKey('pages/team/moonsofts-reza-nozari.png'),
      adryan: cdnKey('pages/team/moonsofts-adryan-andrade-daniel.png'),
    },
  },
  homeServices: {
    remoteTeams: cdnKey('home/services/moonsofts-remote-teams.png'),
    cloudInfrastructure: cdnKey('home/services/moonsofts-cloud-infrastructure.png'),
    ecommerce: cdnKey('home/services/moonsofts-ecommerce.png'),
    ecommerceUpper: cdnKey('home/services/moonsofts-e-commerce-upper.png'),
    logistics: cdnKey('home/services/moonsofts-logistics.png'),
    logisticsUpper: cdnKey('home/services/moonsofts-logistics-upper.png'),
    fintech: cdnKey('home/services/moonsofts-fintech.png'),
    fintechUpper: cdnKey('home/services/moonsofts-fintech-upper.png'),
    healthcare: cdnKey('home/services/moonsofts-healthcare.png'),
    healthcareUpper: cdnKey('home/services/moonsofts-healthcar-upper.png'),
    construction: cdnKey('home/services/moonsofts-construction.png'),
    constructionUpper: cdnKey('home/services/moonsofts-construction-upper.png'),
    manufacturing: cdnKey('home/services/moonsofts-manufacturing.png'),
    manufacturingUpper: cdnKey('home/services/moonsofts-manufacturing-upper.png'),
    education: cdnKey('home/services/moonsofts-education.png'),
    educationUpper: cdnKey('home/services/moonsofts-education-upper.png'),
    fullstack: cdnKey('home/services/moonsofts-fullstack.png'),
  },
  news: {
    launch: cdnKey('news/moonsofts-launch.png'),
    worldCup2026: cdnKey('news/moonsofts-world-cup-2026.png'),
    ceoVision: cdnKey('news/moonsofts-ceo-vision.png'),
    aiDevelopment: cdnKey('news/moonsofts-ai-development.png'),
    industrySolutions: cdnKey('news/moonsofts-industry-solutions.png'),
    reliablePartner: cdnKey('news/moonsofts-reliable-partner.png'),
  },
} as const
