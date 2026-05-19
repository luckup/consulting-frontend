import type { ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { handleSectionNavClick } from '@/lib/scrollToSection'
import { PageHero } from '@/components/PageHero'
import { SidebarNav } from '@/components/SidebarNav'
import type { NavItem } from '@/lib/pageNav'

type Crumb = { label: string; to?: string }

type Props = {
  section: string
  title: string
  description?: string
  breadcrumbs?: Crumb[]
  heroCta: { label: string; to: string }
  heroImage?: string
  sidebarTitle: string
  sidebarItems: NavItem[]
  children: ReactNode
}

export function PageShell({
  section,
  title,
  description,
  breadcrumbs,
  heroCta,
  heroImage,
  sidebarTitle,
  sidebarItems,
  children,
}: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <PageHero
        section={section}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        cta={heroCta}
        backgroundImage={heroImage}
      />

      <div className="border-b border-ink-900/10 bg-paper-50">
        <div className="container-pad section-spacing">
          <div className="mb-[32px] flex gap-[8px] overflow-x-auto pb-[8px] lg:hidden">
            {sidebarItems.map((item) => (
              <Link
                key={item.to + item.label}
                to={item.to}
                onClick={(e) => handleSectionNavClick(e, item.to, location, navigate)}
                className="shrink-0 rounded-[4px] border border-ink-900/10 bg-paper-50 px-[14px] py-[8px] text-sm font-medium text-ink-700 shadow-soft transition hover:border-brand hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-[40px] lg:grid-cols-[240px,minmax(0,1fr)] lg:gap-[64px]">
            <div className="hidden lg:block">
              <SidebarNav title={sidebarTitle} items={sidebarItems} />
            </div>
            <div className="min-w-0 max-w-3xl lg:max-w-none">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
