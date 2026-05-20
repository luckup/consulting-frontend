/**
 * CDN object keys — mirror folders under `src/assets/` (without the `assets/` prefix).
 * Upload each local file to: `{VITE_CDN_BASE_URL}/{key}`
 */
export const siteImagePaths = {
  brand: {
    logo: 'brand/logo.png',
  },
  heroes: {
    about: 'heroes/about.png',
    stack: 'heroes/stack.png',
    careers: 'heroes/careers.png',
    contact: 'heroes/contact.png',
    privacy: 'heroes/privacy.png',
    team: 'heroes/team.png',
  },
  pages: {
    home: {
      section1: 'pages/home/section1.png',
      section2: 'pages/home/section2.png',
      section3: 'pages/home/section3.png',
    },
    about: {
      history: 'pages/about/history.png',
      commitments: 'pages/about/commitments.png',
      commitmentsSplit: 'pages/about/commitments-split.png',
    },
    stack: {
      productEngineering: 'pages/stack/product_engineering.png',
      platformCloud: 'pages/stack/platform_and_cloud.png',
      dataAi: 'pages/stack/data_and_ai.png',
    },
    team: {
      banner: 'pages/team/banner.png',
      walter: 'pages/team/Walter Picher.png',
      reza: 'pages/team/Reza Nozari.png',
      adryan: 'pages/team/Adryan Andrade Daniel.png',
    },
  },
  homeServices: {
    remoteTeams: 'home/services/remote-teams.png',
    cloudInfrastructure: 'home/services/cloud-infrastructure.png',
    ecommerce: 'home/services/ecommerce.png',
    ecommerceUpper: 'home/services/e-commerce-upper.png',
    logistics: 'home/services/logistics.png',
    logisticsUpper: 'home/services/logistics-upper.png',
    fintech: 'home/services/fintech.png',
    fintechUpper: 'home/services/fintech-upper.png',
    healthcare: 'home/services/healthcare.png',
    healthcareUpper: 'home/services/healthcar-upper.png',
    construction: 'home/services/construction.png',
    constructionUpper: 'home/services/construction-upper.png',
    manufacturing: 'home/services/manufacturing.png',
    manufacturingUpper: 'home/services/manufacturing-upper.png',
    education: 'home/services/education.png',
    educationUpper: 'home/services/education-upper.png',
    fullstack: 'home/services/fullstack.png',
  },
  news: {
    launch: 'news/Launches as a Global Software Consulting.png',
    ceoVision: 'news/CEO Vision Speech.png',
    aiDevelopment: 'news/AI-Powered Software Development.png',
    industrySolutions: 'news/Building Industry-Specific Solutions.png',
    reliablePartner: 'news/Why Global Businesses Need.png',
  },
} as const
