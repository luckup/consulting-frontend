import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import {
  AboutPage,
  ClientsPage,
  ContactPage,
  EngineersPage,
  IndustriesPage,
  IndustryDetailPage,
  NewsArticlePage,
  NewsPage,
  PrivacyPage,
  ServicesPage,
  StackPage,
  TeamPage,
} from '@/lib/routes'
import { HomePage } from '@/pages/HomePage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        <Route path="/engineers" element={<EngineersPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsArticlePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/stack" element={<StackPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
