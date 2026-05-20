import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { routePrefetchHandlers } from '@/lib/routePrefetch'

const links = [
  { label: 'Moonsofts at a glance', to: '/about' },
  { label: 'Latest news', to: '/news' },
  { label: "We're hiring", to: '/engineers' },
  { label: 'Contact us', to: '/contact' },
]

type Props = {
  overHero?: boolean
}

export function TopUtilityBar({ overHero = false }: Props) {
  return (
    <div
      className={clsx(
        'border-b transition-colors duration-300',
        overHero ? 'border-transparent bg-transparent' : 'border-ink-900/10 bg-paper-50',
      )}
    >
      <div className="container-pad flex flex-wrap items-center justify-end gap-[8px] py-[8px] sm:gap-[20px]">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            {...routePrefetchHandlers(link.to)}
            className={clsx(
              'text-xs font-semibold transition sm:text-sm',
              overHero ? 'text-[white]/85 hover:text-[white]' : 'text-ink-600 hover:text-brand',
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
