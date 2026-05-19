import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import type { NavItem } from '@/lib/pageNav'
import { handleSectionNavClick, isSectionNavActive } from '@/lib/scrollToSection'

type Props = {
  title: string
  items: NavItem[]
}

export function SidebarNav({ title, items }: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <aside className="lg:sticky lg:top-[100px] lg:self-start">
      <div className="card-static p-[20px]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">{title}</p>
        <ul className="mt-[12px] flex flex-col">
          {items.map((item) => {
            const active = isSectionNavActive(item.to, location)
            return (
              <li key={item.to + item.label}>
                <NavLink
                  to={item.to}
                  onClick={(e) => handleSectionNavClick(e, item.to, location, navigate)}
                  className={clsx(
                    'block rounded-[4px] px-[12px] py-[10px] text-sm transition',
                    active
                      ? 'bg-brand-light font-semibold text-brand'
                      : 'text-ink-600 hover:bg-paper-100 hover:text-ink-900',
                  )}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
