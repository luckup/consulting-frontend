import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { DocumentTitle } from '@/components/DocumentTitle'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { PageLoader } from '@/components/PageLoader'
import { PageTransition } from '@/components/PageTransition'
import { ScrollToTop } from '@/components/ScrollToTop'
import { SmoothScroll } from '@/components/SmoothScroll'
import { SkipToContent } from '@/components/SkipToContent'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { prefetchCommonRoutes } from '@/lib/routePrefetch'

export function MainLayout() {
  useHashSectionScroll()

  useEffect(() => {
    prefetchCommonRoutes()
  }, [])

  return (
    <div id="top" className="relative flex min-h-screen flex-col bg-paper-50">
      <SkipToContent />
      <DocumentTitle />
      <SmoothScroll />
      <ScrollToTop />
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Suspense fallback={<PageLoader />}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
