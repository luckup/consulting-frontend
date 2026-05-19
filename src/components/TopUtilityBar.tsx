import { Link } from 'react-router-dom'

const links = [
  { label: 'Moonsofts at a glance', to: '/about' },
  { label: 'Latest news', to: '/news' },
  { label: "We're hiring", to: '/engineers' },
  { label: 'Contact us', to: '/contact' },
]

export function TopUtilityBar() {
  return (
    <div className="border-b border-ink-900/10 bg-paper-50">
      <div className="container-pad flex flex-wrap items-center justify-end gap-[8px] py-[8px] sm:gap-[20px]">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-xs font-medium text-ink-600 transition hover:text-brand sm:text-sm"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
