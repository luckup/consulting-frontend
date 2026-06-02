/**
 * Each image file is imported exactly once. Multiple UI slots may share the same import
 * when we have a single photo — never duplicate files under different paths/names.
 */
import logo from '@/assets/brand/moonsofts-logo.png'

import homeSection0 from '@/assets/pages/home/moonsofts-section0.png'
import homeSpotlight01 from '@/assets/pages/home/moonsofts-section1.png'
import homeSpotlight02 from '@/assets/pages/home/moonsofts-section2.png'
import homeSpotlight03 from '@/assets/pages/home/moonsofts-section3.png'
import homeWorldCup2026 from '@/assets/pages/home/moonsofts-world-cup-2026.png'
import homeCareersBackground from '@/assets/pages/home/moonsofts-background.png'
import homeCertificate01 from '@/assets/pages/home/certificates/moonsofts-1.png'
import homeCertificate02 from '@/assets/pages/home/certificates/moonsofts-2.png'
import homeCertificate03 from '@/assets/pages/home/certificates/moonsofts-3.png'
import homeCertificate05 from '@/assets/pages/home/certificates/moonsofts-5.png'
import homeCertificate06 from '@/assets/pages/home/certificates/moonsofts-6.png'
import heroHomeBanner from '@/assets/pages/home/moonsofts-section1.png'
import heroAbout from '@/assets/heroes/moonsofts-about.png'
import heroStack from '@/assets/heroes/moonsofts-stack.png'
import heroCareers from '@/assets/heroes/moonsofts-careers.png'
import heroContact from '@/assets/heroes/moonsofts-contact.png'
import heroPrivacy from '@/assets/heroes/moonsofts-privacy.png'
import heroTeam from '@/assets/heroes/moonsofts-team.png'

import aboutHistory from '@/assets/pages/about/moonsofts-history.png'
import aboutCommitments from '@/assets/pages/about/moonsofts-commitments.png'
import aboutCommitmentsFeature from '@/assets/pages/about/moonsofts-commitments-split.png'

import stackProductEngineering from '@/assets/pages/stack/moonsofts-product_engineering.png'
import stackPlatformCloud from '@/assets/pages/stack/moonsofts-platform_and_cloud.png'
import stackDataAi from '@/assets/pages/stack/moonsofts-data_and_ai.png'
import teamBanner from '@/assets/pages/team/moonsofts-banner.png'
import teamThomasJennings from '@/assets/pages/team/moonsofts-Thomas Jennings.png'
import teamWalter from '@/assets/pages/team/moonsofts-Walter Picher.png'
import teamReza from '@/assets/pages/team/moonsofts-Reza Nozari.png'
import teamAdryan from '@/assets/pages/team/moonsofts-Adryan Andrade Daniel.png'

import serviceRemoteTeams from '@/assets/home/services/moonsofts-remote-teams.png'
import serviceCloudInfrastructure from '@/assets/home/services/moonsofts-cloud-infrastructure.png'
import serviceEcommerce from '@/assets/home/services/moonsofts-ecommerce.png'
import serviceEcommerceUpper from '@/assets/home/services/moonsofts-e-commerce-upper.png'
import serviceLogistics from '@/assets/home/services/moonsofts-logistics.png'
import serviceLogisticsUpper from '@/assets/home/services/moonsofts-logistics-upper.png'
import serviceFintech from '@/assets/home/services/moonsofts-fintech.png'
import serviceFintechUpper from '@/assets/home/services/moonsofts-fintech-upper.png'
import serviceHealthcare from '@/assets/home/services/moonsofts-healthcare.png'
import serviceHealthcareUpper from '@/assets/home/services/moonsofts-healthcar-upper.png'
import serviceConstruction from '@/assets/home/services/moonsofts-construction.png'
import serviceConstructionUpper from '@/assets/home/services/moonsofts-construction-upper.png'
import serviceManufacturing from '@/assets/home/services/moonsofts-manufacturing.png'
import serviceManufacturingUpper from '@/assets/home/services/moonsofts-manufacturing-upper.png'
import serviceEducation from '@/assets/home/services/moonsofts-education.png'
import serviceEducationUpper from '@/assets/home/services/moonsofts-education-upper.png'
import serviceAgriculture from '@/assets/home/services/moonsofts-agriculture.png'
import serviceAgricultureUpper from '@/assets/home/services/moonsofts-agriculture-upper.png'
import serviceRestaurantIndustry from '@/assets/home/services/moonsofts-restuarant.png'
import serviceRestaurantIndustryUpper from '@/assets/home/services/moonsofts-restuarant-upper.png'
import serviceFullstack from '@/assets/home/services/moonsofts-fullstack.png'

import newsLaunch from '@/assets/news/moonsofts-Launches as a Global Software Consulting.png'
import newsCeoVision from '@/assets/news/moonsofts-CEO Vision Speech.png'
import newsAiDevelopment from '@/assets/news/moonsofts-AI-Powered Software Development.png'
import newsIndustrySolutions from '@/assets/news/moonsofts-Building Industry-Specific Solutions.png'
import newsReliablePartner from '@/assets/news/moonsofts-Why Global Businesses Need.png'
import newsWorldCup2026 from '@/assets/news/moonsofts-World Cup 2026.png'

import servicePersonalPortfolio from '@/assets/pages/services/moonsofts-Personal portfolio website.png'
import serviceBusinessLanding from '@/assets/pages/services/moonsofts-Business landing page.png'
import serviceCompanyWebsite from '@/assets/pages/services/moonsofts-Company website.png'
import serviceEcommerceWebsite from '@/assets/pages/services/moonsofts-E-commerce website.png'
import serviceBookingWebsite from '@/assets/pages/services/moonsofts-Booking  appointment website.png'
import serviceSaasWebsite from '@/assets/pages/services/moonsofts-SaaS website.png'
import serviceRealEstateWebsite from '@/assets/pages/services/moonsofts-Real estate website.png'
import serviceRestaurantWebsite from '@/assets/pages/services/moonsofts-Restaurant  café website.png'
import serviceAgencyWebsite from '@/assets/pages/services/moonsofts-Agency website.png'
import serviceMvpWebApp from '@/assets/pages/services/moonsofts-MVP web app.png'
import serviceBlogWebsite from '@/assets/pages/services/moonsofts-Blog  content website.png'
import serviceCommunityWebsite from '@/assets/pages/services/moonsofts-Community  membership website.png'

const websiteOfferingImages = {
  'personal-portfolio': servicePersonalPortfolio,
  'business-landing': serviceBusinessLanding,
  'company-website': serviceCompanyWebsite,
  ecommerce: serviceEcommerceWebsite,
  booking: serviceBookingWebsite,
  saas: serviceSaasWebsite,
  'real-estate': serviceRealEstateWebsite,
  restaurant: serviceRestaurantWebsite,
  agency: serviceAgencyWebsite,
  mvp: serviceMvpWebApp,
  blog: serviceBlogWebsite,
  community: serviceCommunityWebsite,
} as const

const industryPhotos = {
  ecommerce: { hero: serviceEcommerceUpper, page: serviceEcommerce },
  logistics: { hero: serviceLogisticsUpper, page: serviceLogistics },
  financial: { hero: serviceFintechUpper, page: serviceFintech },
  healthcare: { hero: serviceHealthcareUpper, page: serviceHealthcare },
  construction: { hero: serviceConstructionUpper, page: serviceConstruction },
  manufacturing: { hero: serviceManufacturingUpper, page: serviceManufacturing },
  education: { hero: serviceEducationUpper, page: serviceEducation },
  agriculture: { hero: serviceAgricultureUpper, page: serviceAgriculture },
  restaurant: { hero: serviceRestaurantIndustryUpper, page: serviceRestaurantIndustry },
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
    section0: homeSection0,
    section1: homeSpotlight01,
    worldCup2026: homeWorldCup2026,
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
    agriculture: serviceAgriculture,
    restaurant: serviceRestaurantIndustry,
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
  worldCup: {
    section0: homeSection0,
    section1: homeSpotlight01,
    section2: homeSpotlight02,
    section3: homeSpotlight03,
    highlightsCustomer: homeWorldCup2026,
  },
  news: {
    launch: newsLaunch,
    worldCup2026: newsWorldCup2026,
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
    thomasJennings: teamThomasJennings,
    walter: teamWalter,
    reza: teamReza,
    adryan: teamAdryan,
  },
  services: {
    websiteOfferings: websiteOfferingImages,
  },
} as const
