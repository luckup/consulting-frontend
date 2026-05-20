/**
 * Each image file is imported exactly once. Multiple UI slots may share the same import
 * when we have a single photo — never duplicate files under different paths/names.
 */
import logo from '@/assets/brand/logo.png'

import homeSpotlight01 from '@/assets/pages/home/section1.png'
import homeSpotlight02 from '@/assets/pages/home/section2.png'
import homeSpotlight03 from '@/assets/pages/home/section3.png'
import homeCareersBackground from '@/assets/pages/home/background.png'
import homeCertificate01 from '@/assets/pages/home/certificates/1.png'
import homeCertificate02 from '@/assets/pages/home/certificates/2.png'
import homeCertificate03 from '@/assets/pages/home/certificates/3.png'
import homeCertificate05 from '@/assets/pages/home/certificates/5.png'
import homeCertificate06 from '@/assets/pages/home/certificates/6.png'
import heroHomeBanner from '@/assets/pages/home/section1.png'
import heroAbout from '@/assets/heroes/about.png'
import heroStack from '@/assets/heroes/stack.png'
import heroCareers from '@/assets/heroes/careers.png'
import heroContact from '@/assets/heroes/contact.png'
import heroPrivacy from '@/assets/heroes/privacy.png'
import heroTeam from '@/assets/heroes/team.png'

import aboutHistory from '@/assets/pages/about/history.png'
import aboutCommitments from '@/assets/pages/about/commitments.png'
import aboutCommitmentsFeature from '@/assets/pages/about/commitments-split.png'

import stackProductEngineering from '@/assets/pages/stack/product_engineering.png'
import stackPlatformCloud from '@/assets/pages/stack/platform_and_cloud.png'
import stackDataAi from '@/assets/pages/stack/data_and_ai.png'
import teamBanner from '@/assets/pages/team/banner.png'
import teamWalter from '@/assets/pages/team/Walter Picher.png'
import teamReza from '@/assets/pages/team/Reza Nozari.png'
import teamAdryan from '@/assets/pages/team/Adryan Andrade Daniel.png'

import serviceRemoteTeams from '@/assets/home/services/remote-teams.png'
import serviceCloudInfrastructure from '@/assets/home/services/cloud-infrastructure.png'
import serviceEcommerce from '@/assets/home/services/ecommerce.png'
import serviceEcommerceUpper from '@/assets/home/services/e-commerce-upper.png'
import serviceLogistics from '@/assets/home/services/logistics.png'
import serviceLogisticsUpper from '@/assets/home/services/logistics-upper.png'
import serviceFintech from '@/assets/home/services/fintech.png'
import serviceFintechUpper from '@/assets/home/services/fintech-upper.png'
import serviceHealthcare from '@/assets/home/services/healthcare.png'
import serviceHealthcareUpper from '@/assets/home/services/healthcar-upper.png'
import serviceConstruction from '@/assets/home/services/construction.png'
import serviceConstructionUpper from '@/assets/home/services/construction-upper.png'
import serviceManufacturing from '@/assets/home/services/manufacturing.png'
import serviceManufacturingUpper from '@/assets/home/services/manufacturing-upper.png'
import serviceEducation from '@/assets/home/services/education.png'
import serviceEducationUpper from '@/assets/home/services/education-upper.png'
import serviceFullstack from '@/assets/home/services/fullstack.png'

import newsLaunch from '@/assets/news/Launches as a Global Software Consulting.png'
import newsCeoVision from '@/assets/news/CEO Vision Speech.png'
import newsAiDevelopment from '@/assets/news/AI-Powered Software Development.png'
import newsIndustrySolutions from '@/assets/news/Building Industry-Specific Solutions.png'
import newsReliablePartner from '@/assets/news/Why Global Businesses Need.png'

const industryPhotos = {
  ecommerce: { hero: serviceEcommerceUpper, page: serviceEcommerce },
  logistics: { hero: serviceLogisticsUpper, page: serviceLogistics },
  financial: { hero: serviceFintechUpper, page: serviceFintech },
  healthcare: { hero: serviceHealthcareUpper, page: serviceHealthcare },
  construction: { hero: serviceConstructionUpper, page: serviceConstruction },
  manufacturing: { hero: serviceManufacturingUpper, page: serviceManufacturing },
  education: { hero: serviceEducationUpper, page: serviceEducation },
} as const

export const siteImages = {
  brand: { logo },
  hero: {
    home: homeSpotlight01,
    homeBanner: heroHomeBanner,
    default: aboutHistory,
    about: heroAbout,
    stack: heroStack,
    careers: heroCareers,
    contact: heroContact,
    privacy: heroPrivacy,
    news: aboutCommitmentsFeature,
    team: heroTeam,
    clients: serviceFintech,
    services: heroStack,
    industries: serviceLogisticsUpper,
  },
  industries: industryPhotos,
  home: {
    spotlight: [homeSpotlight01, homeSpotlight02, homeSpotlight03] as const,
    whoWeAre: serviceRemoteTeams,
    whatWeDo: serviceFullstack,
    businesses: serviceCloudInfrastructure,
    ecommerce: serviceEcommerce,
    logistics: serviceLogistics,
    fintech: serviceFintech,
    healthcare: serviceHealthcare,
    construction: serviceConstruction,
    manufacturing: serviceManufacturing,
    education: serviceEducation,
    careersBackground: homeCareersBackground,
    certificates: [
      homeCertificate01,
      homeCertificate02,
      homeCertificate03,
      homeCertificate05,
      homeCertificate06,
    ] as const,
  },
  cta: {
    careers: heroCareers,
    platform: serviceCloudInfrastructure,
  },
  news: {
    launch: newsLaunch,
    ceoVision: newsCeoVision,
    aiDevelopment: newsAiDevelopment,
    industrySolutions: newsIndustrySolutions,
    reliablePartner: newsReliablePartner,
  },
  split: {
    aboutCommitments: aboutCommitmentsFeature,
    stackPlatform: serviceCloudInfrastructure,
    careersStudents: aboutCommitments,
  },
  about: {
    history: aboutHistory,
  },
  contact: {
    global: aboutHistory,
  },
  stack: {
    product: stackProductEngineering,
    cloud: stackPlatformCloud,
    data: stackDataAi,
  },
  team: {
    banner: teamBanner,
    walter: teamWalter,
    reza: teamReza,
    adryan: teamAdryan,
  },
} as const
