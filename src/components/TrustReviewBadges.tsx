import type { ComponentType } from 'react'
import { clsx } from 'clsx'
import { Star } from 'lucide-react'
import { ClutchLogo } from '@/components/icons/ClutchLogo'
import { TrustpilotLogo } from '@/components/icons/TrustpilotLogo'
import { trustRatings } from '@/lib/homeTrustRatings'

type Props = {
  className?: string
}

const platformLogos = {
  clutch: ClutchLogo,
  trustpilot: TrustpilotLogo,
} as const

const accentStyles = {
  clutch: 'from-[#FF3D2E]/12 via-transparent to-transparent',
  trustpilot: 'from-[#00B67A]/12 via-transparent to-transparent',
} as const

function StarRating({ value }: { value: number }) {
  const full = Math.floor(value)
  const partial = value - full

  return (
    <div className="flex items-center gap-[3px]" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < full) {
          return <Star key={i} className="h-[15px] w-[15px] fill-[#FFB800] text-[#FFB800]" strokeWidth={0} />
        }
        if (i === full && partial > 0) {
          return (
            <span key={i} className="relative h-[15px] w-[15px]">
              <Star className="absolute inset-0 h-[15px] w-[15px] text-ink-900/15" strokeWidth={1.5} />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${partial * 100}%` }}>
                <Star className="h-[15px] w-[15px] fill-[#FFB800] text-[#FFB800]" strokeWidth={0} />
              </span>
            </span>
          )
        }
        return <Star key={i} className="h-[15px] w-[15px] text-ink-900/15" strokeWidth={1.5} />
      })}
    </div>
  )
}

function TrustBadgeCard({
  item,
  Logo,
}: {
  item: (typeof trustRatings)[number]
  Logo: ComponentType<{ className?: string; variant?: 'light' | 'dark' }>
}) {
  const accent = accentStyles[item.id as keyof typeof accentStyles]
  const content = (
    <>
      <div
        className={clsx('pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100', accent)}
        aria-hidden
      />

      <div className="relative flex items-center gap-[16px] sm:gap-[20px]">
        <div className="flex w-[140px] shrink-0 flex-col items-start justify-center gap-[10px] sm:w-[168px]">
          <Logo
            variant="dark"
            className="h-[48px] w-full max-w-[168px] object-left object-contain sm:h-[56px] sm:max-w-[188px]"
          />
          {item.subtitle ? (
            <span
              className={clsx(
                'rounded-[4px] border px-[8px] py-[4px] text-[9px] font-semibold uppercase tracking-[0.12em]',
                item.id === 'clutch'
                  ? 'border-[#FF3D2E]/25 bg-[#FF3D2E]/10 text-[#FF3D2E]'
                  : 'border-[#00B67A]/25 bg-[#00B67A]/10 text-[#00B67A]',
              )}
            >
              {item.subtitle}
            </span>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center border-l border-ink-900/10 pl-[16px] sm:pl-[20px]">
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-500">Rating</p>
          <div className="mt-[8px] flex items-end justify-between gap-[12px]">
            <div className="flex items-baseline gap-[8px]">
              <p className="text-[32px] font-bold leading-none tabular-nums tracking-tight text-ink-900 sm:text-[36px]">
                {item.rating.toFixed(1)}
              </p>
              <p className="pb-[4px] text-xs font-medium text-ink-500">/ 5</p>
            </div>
            <div className="flex flex-col items-end gap-[6px]">
              <StarRating value={item.rating} />
              <p className="text-[10px] font-medium text-ink-500">Verified reviews</p>
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only">
        {item.platform} rating {item.rating.toFixed(1)} out of 5
        {item.subtitle ? `, ${item.subtitle}` : ''}
      </p>
    </>
  )

  const cardClass =
    'group relative min-w-[300px] flex-1 overflow-hidden rounded-[6px] border border-ink-900/10 bg-paper-50 p-[20px] shadow-[0_8px_28px_rgba(12,28,34,0.08)] transition duration-300 hover:border-brand/25 hover:shadow-[0_12px_36px_rgba(12,28,34,0.12)] sm:min-w-[340px] sm:p-[24px]'

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
        role="listitem"
      >
        {content}
      </a>
    )
  }

  return (
    <div className={cardClass} role="listitem">
      {content}
    </div>
  )
}

export function TrustReviewBadges({ className }: Props) {
  return (
    <div
      className={clsx('flex flex-col gap-[16px] sm:flex-row sm:gap-[20px]', className)}
      role="list"
      aria-label="Third-party ratings"
    >
      {trustRatings.map((item) => {
        const Logo = platformLogos[item.id as keyof typeof platformLogos]
        return <TrustBadgeCard key={item.id} item={item} Logo={Logo} />
      })}
    </div>
  )
}
