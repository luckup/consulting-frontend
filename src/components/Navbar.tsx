import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import { siteImages } from '@/lib/siteImages'
import { TopUtilityBar } from '@/components/TopUtilityBar'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

const navItems = [
  {
    label: 'Industries',
    to: '/industries',
    children: [
      { to: '/industries/ecommerce', label: 'E-commerce' },
      { to: '/industries/logistics', label: 'Logistics' },
      { to: '/industries/healthcare', label: 'Healthcare' },
      { to: '/industries/construction', label: 'Construction' },
      { to: '/industries/financial', label: 'Financial services' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { to: '/services', label: 'Consulting services' },
      { to: '/stack', label: 'Technology & platform' },
      { to: '/privacy', label: 'Legal & privacy' },
    ],
  },
  {
    label: 'Insights',
    to: '/news',
    children: [
      { to: '/news', label: 'News & insights' },
      { to: '/clients', label: 'Client voices' },
    ],
  },
  {
    label: 'Company',
    to: '/about',
    children: [
      { to: '/about', label: 'Our story' },
      { to: '/team', label: 'Leadership team' },
      { to: '/engineers', label: 'Careers' },
      { to: '/privacy', label: 'Legal & privacy' },
    ],
  },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const menuId = useId()
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  function closeMenu() {
    setOpen(false)
    setExpanded(null)
  }

  return (
    <header className="sticky top-0 z-50 shadow-[0_4px_24px_rgba(255,85,0,0.18)]">
      <TopUtilityBar />
      <div className="border-b border-brand-600/40 bg-brand">
        <div className="container-pad flex items-center justify-between gap-[16px] py-[14px]">
          <Link to="/" className="flex shrink-0 items-center gap-[12px]" onClick={closeMenu}>
            <img
              src={siteImages.brand.logo}
              alt=""
              className="h-[48px] w-auto max-w-[200px] bg-transparent object-contain brightness-0 invert sm:h-[56px]"
            />
            <span className="hidden text-lg font-semibold tracking-tight text-[white] lg:inline">MoonSofts</span>
          </Link>

          <nav className="hidden items-center gap-[2px] xl:flex" aria-label="Primary">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'inline-flex items-center gap-[4px] rounded-[4px] px-[12px] py-[8px] text-sm font-medium transition',
                      isActive
                        ? 'bg-[white]/20 text-[white]'
                        : 'text-[white]/90 hover:bg-[white]/15 hover:text-[white]',
                    )
                  }
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
                </NavLink>
                <div className="nav-dropdown" role="menu">
                  {item.children.map((child) => (
                    <Link
                      key={child.to + child.label}
                      to={child.to}
                      role="menuitem"
                      className="block px-[16px] py-[9px] text-sm text-ink-700 transition hover:bg-brand-light hover:text-brand-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <NavLink
              to="/contact"
              className="btn ml-[12px] border border-[white] bg-[white] px-[22px] py-[10px] text-brand hover:bg-[white]/90"
            >
              Contact us
            </NavLink>
          </nav>

          <button
            type="button"
            className="inline-flex rounded-[4px] border border-[white]/40 bg-[white]/10 p-[8px] text-[white] transition hover:border-[white] hover:bg-[white]/20 xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-brand-600/40 bg-brand px-[16px] py-[16px] xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-[4px]" aria-label="Mobile primary">
            <Link
              to="/"
              className="rounded-[4px] px-[12px] py-[8px] text-sm font-medium text-[white]/90 hover:bg-[white]/15"
              onClick={closeMenu}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-[4px] px-[12px] py-[8px] text-left text-sm font-medium text-[white]/90 hover:bg-[white]/15"
                  aria-expanded={expanded === item.label}
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className={clsx('h-4 w-4 transition', expanded === item.label && 'rotate-180')} />
                </button>
                {expanded === item.label ? (
                  <div className="mb-[8px] ml-[12px] flex flex-col gap-[4px] border-l border-[white]/25 pl-[12px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.to + child.label}
                        to={child.to}
                        className="py-[6px] text-sm text-[white]/80 hover:text-[white]"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              to="/contact"
              className="btn mt-[8px] justify-center border border-[white] bg-[white] text-brand hover:bg-[white]/90"
              onClick={closeMenu}
            >
              Contact us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
