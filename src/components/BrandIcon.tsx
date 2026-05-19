import { useState } from 'react'
import { brandIconUrl, brandSlugFallback } from '@/lib/stackCatalog'

type Props = {
  name: string
  slug: string
  className?: string
}

export function BrandIcon({ name, slug, className }: Props) {
  const [src, setSrc] = useState(() => brandIconUrl(slug))
  const [usedFallback, setUsedFallback] = useState(false)

  const handleError = () => {
    if (usedFallback) return
    const fallbackSlug = brandSlugFallback[slug]
    if (fallbackSlug) {
      setUsedFallback(true)
      setSrc(brandIconUrl(fallbackSlug))
    }
  }

  return <img src={src} alt={name} loading="lazy" onError={handleError} className={className} />
}
