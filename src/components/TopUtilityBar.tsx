import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { useI18n } from '@/i18n/useI18n'
import { buildUtilityLinks } from '@/lib/i18nNav'
import { externalLinkProps } from '@/lib/navLinks'
import { routePrefetchHandlers } from '@/lib/routePrefetch'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

type Props = {
  overHero?: boolean
}

export function TopUtilityBar({ overHero = false }: Props) {
  const { t } = useI18n()
  const links = buildUtilityLinks(t)

  return (
    <div
      className={clsx(
        'border-b transition-colors duration-300',
        overHero ? 'border-transparent bg-transparent' : 'border-ink-900/10 bg-paper-50',
      )}
    >
      <div className="container-pad flex flex-wrap items-center justify-end gap-[8px] py-[8px] sm:gap-[20px]">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.to}
              href={link.to}
              {...externalLinkProps}
              className={clsx(
                'text-xs font-semibold transition sm:text-sm',
                overHero ? 'text-[white]/85 hover:text-[white]' : 'text-ink-600 hover:text-brand',
              )}
            >
              {link.label}
            </a>
          ) : (
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
          ),
        )}
        <LanguageSwitcher overHero={overHero} className="ml-[4px]" />
      </div>
    </div>
  )
}
