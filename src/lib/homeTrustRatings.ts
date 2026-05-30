export type TrustReviewRating = {
  id: string
  platform: string
  rating: number
  subtitle?: string
  href?: string
}

export const trustRatings: readonly TrustReviewRating[] = [
  {
    id: 'clutch',
    platform: 'Clutch',
    rating: 4.0,
    subtitle: 'B2B reviews',
    href: 'https://clutch.co',
  },
] as const

/** @deprecated Use trustRatings */
export const heroTrustRatings = trustRatings
export type HeroTrustRating = TrustReviewRating
