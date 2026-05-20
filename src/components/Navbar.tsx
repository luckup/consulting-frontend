import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import { siteImages } from '@/lib/siteImages'
import { TopUtilityBar } from '@/components/TopUtilityBar'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import { routePrefetchHandlers } from '@/lib/routePrefetch'

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
      { to: '/industries/manufacturing', label: 'Manufacturing' },
      { to: '/industries/education', label: 'Education' },
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
  const scrolled = useScrollThreshold()
  const overHero = !scrolled && !open

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

  const navSolid = scrolled || open

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        navSolid
          ? 'border-b border-ink-900/10 bg-paper-50 shadow-[0_4px_24px_rgba(42,42,42,0.06)]'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <TopUtilityBar overHero={overHero && !open} />
      <div
        className={clsx(
          'transition-colors duration-300',
          navSolid ? 'border-b border-ink-900/10 bg-paper-50' : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="container-pad flex items-center justify-between gap-[16px] py-[14px]">
          <Link to="/" className="flex shrink-0 items-center gap-[12px]" onClick={closeMenu}>
            <img
              src={siteImages.brand.logo}
              alt=""
              className={clsx(
                'h-[48px] w-auto max-w-[200px] bg-transparent object-contain transition sm:h-[56px]',
                overHero && !open ? 'brightness-0 invert' : '',
              )}
            />
            <span
              className={clsx(
                'hidden text-lg font-semibold tracking-tight lg:inline',
                overHero && !open ? 'text-[white]' : 'text-ink-900',
              )}
            >
              MoonSofts
            </span>
          </Link>

          <nav className="hidden items-center gap-[2px] xl:flex" aria-label="Primary">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.to}
                  {...routePrefetchHandlers(item.to)}
                  className={({ isActive }) =>
                    clsx(
                      'inline-flex items-center gap-[4px] rounded-[4px] px-[12px] py-[8px] text-sm font-medium transition',
                      overHero && !open
                        ? isActive
                          ? 'bg-[white]/20 text-[white]'
                          : 'text-[white]/90 hover:bg-[white]/15 hover:text-[white]'
                        : isActive
                          ? 'bg-brand-light text-brand'
                          : 'text-ink-700 hover:bg-paper-100 hover:text-brand',
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
                      {...routePrefetchHandlers(child.to)}
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
              {...routePrefetchHandlers('/contact')}
              className={clsx(
                'btn ml-[12px]',
                overHero && !open
                  ? 'border border-[white] bg-[white] text-brand hover:bg-[white]/90'
                  : 'btn-primary',
              )}
            >
              Contact us
            </NavLink>
          </nav>

          <button
            type="button"
            className={clsx(
              'inline-flex rounded-[4px] border p-[8px] transition xl:hidden',
              overHero && !open
                ? 'border-[white]/40 bg-[white]/10 text-[white] hover:border-[white] hover:bg-[white]/20'
                : 'border-ink-900/15 bg-paper-50 text-ink-800 hover:border-brand hover:text-brand',
            )}
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
          className="max-h-[min(70vh,520px)] overflow-y-auto border-t border-ink-900/10 bg-paper-50 px-[16px] py-[16px] xl:hidden"
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-[4px]" aria-label="Mobile primary">
            <Link
              to="/"
              className="rounded-[4px] px-[12px] py-[8px] text-sm font-medium text-ink-700 hover:bg-paper-100 hover:text-brand"
              onClick={closeMenu}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-[4px] px-[12px] py-[8px] text-left text-sm font-medium text-ink-700 hover:bg-paper-100"
                  aria-expanded={expanded === item.label}
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className={clsx('h-4 w-4 transition', expanded === item.label && 'rotate-180')} />
                </button>
                {expanded === item.label ? (
                  <div className="mb-[8px] ml-[12px] flex flex-col gap-[4px] border-l border-ink-900/10 pl-[12px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.to + child.label}
                        to={child.to}
                        {...routePrefetchHandlers(child.to)}
                        className="py-[6px] text-sm text-ink-600 hover:text-brand"
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
              {...routePrefetchHandlers('/contact')}
              className="btn btn-primary mt-[8px] justify-center"
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
