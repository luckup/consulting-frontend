import { lazy, Suspense, type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { PageLoader } from '@/components/PageLoader'
import { HomePage } from '@/pages/HomePage'

const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const EngineersPage = lazy(() => import('@/pages/EngineersPage').then((m) => ({ default: m.EngineersPage })))
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })))
const StackPage = lazy(() => import('@/pages/StackPage').then((m) => ({ default: m.StackPage })))
const NewsPage = lazy(() => import('@/pages/NewsPage').then((m) => ({ default: m.NewsPage })))
const NewsArticlePage = lazy(() => import('@/pages/NewsArticlePage').then((m) => ({ default: m.NewsArticlePage })))
const TeamPage = lazy(() => import('@/pages/TeamPage').then((m) => ({ default: m.TeamPage })))
const ClientsPage = lazy(() => import('@/pages/ClientsPage').then((m) => ({ default: m.ClientsPage })))
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage })))
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage').then((m) => ({ default: m.IndustriesPage })))
const IndustryDetailPage = lazy(() =>
  import('@/pages/IndustryDetailPage').then((m) => ({ default: m.IndustryDetailPage })),
)

function LazyPage({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <LazyPage>
              <AboutPage />
            </LazyPage>
          }
        />
        <Route
          path="/clients"
          element={
            <LazyPage>
              <ClientsPage />
            </LazyPage>
          }
        />
        <Route
          path="/services"
          element={
            <LazyPage>
              <ServicesPage />
            </LazyPage>
          }
        />
        <Route
          path="/industries"
          element={
            <LazyPage>
              <IndustriesPage />
            </LazyPage>
          }
        />
        <Route
          path="/industries/:slug"
          element={
            <LazyPage>
              <IndustryDetailPage />
            </LazyPage>
          }
        />
        <Route
          path="/engineers"
          element={
            <LazyPage>
              <EngineersPage />
            </LazyPage>
          }
        />
        <Route
          path="/team"
          element={
            <LazyPage>
              <TeamPage />
            </LazyPage>
          }
        />
        <Route
          path="/news"
          element={
            <LazyPage>
              <NewsPage />
            </LazyPage>
          }
        />
        <Route
          path="/news/:slug"
          element={
            <LazyPage>
              <NewsArticlePage />
            </LazyPage>
          }
        />
        <Route
          path="/privacy"
          element={
            <LazyPage>
              <PrivacyPage />
            </LazyPage>
          }
        />
        <Route
          path="/stack"
          element={
            <LazyPage>
              <StackPage />
            </LazyPage>
          }
        />
        <Route
          path="/contact"
          element={
            <LazyPage>
              <ContactPage />
            </LazyPage>
          }
        />
      </Route>
    </Routes>
  )
}
