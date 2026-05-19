import { Outlet } from 'react-router-dom'
import { DocumentTitle } from '@/components/DocumentTitle'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ScrollToTop } from '@/components/ScrollToTop'
import { SkipToContent } from '@/components/SkipToContent'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'

export function MainLayout() {
  useHashSectionScroll()

  return (
    <div id="top" className="relative flex min-h-screen flex-col bg-paper-50">
      <SkipToContent />
      <DocumentTitle />
      <ScrollToTop />
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
