import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { portfolioImagePlaceholder } from '@/lib/portfolioImages'

type Props = {
  src: string
  alt?: string
  label?: string
  className?: string
  imageClassName?: string
  overlay?: 'subtle' | 'none'
  /** Use when the asset has transparency (e.g. PNG); avoids the default paper fill behind the image. */
  transparentBg?: boolean
  /** Below-the-fold images should lazy-load; heroes use priority. */
  priority?: boolean
}

export function MediaImage({
  src,
  alt = '',
  label,
  className,
  imageClassName,
  overlay = 'subtle',
  transparentBg = false,
  priority = false,
}: Props) {
  const [resolvedSrc, setResolvedSrc] = useState(src)

  useEffect(() => {
    setResolvedSrc(src)
  }, [src])

  return (
    <div
      className={clsx(
        'relative overflow-hidden',
        transparentBg ? 'bg-transparent' : 'bg-paper-100',
        className,
      )}
    >
      <img
        src={resolvedSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => {
          if (resolvedSrc !== portfolioImagePlaceholder) {
            setResolvedSrc(portfolioImagePlaceholder)
          }
        }}
        className={clsx(
          'h-full w-full',
          transparentBg ? 'object-contain' : 'object-cover photo-bright',
          imageClassName,
        )}
      />
      {overlay === 'subtle' ? (
        <div className="absolute inset-0 bg-gradient-to-t from-paper-50/20 via-transparent to-paper-50/10" aria-hidden />
      ) : null}
      {label ? (
        <p className="absolute bottom-[16px] left-[16px] z-10 rounded-[4px] bg-paper-50/95 px-[12px] py-[6px] text-xs font-semibold uppercase tracking-[0.16em] text-brand shadow-sm">
          {label}
        </p>
      ) : null}
    </div>
  )
}
