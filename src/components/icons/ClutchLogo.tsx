import clutchLogoDark from '@/assets/brand/clutch-logo-dark.svg'
import clutchLogoLight from '@/assets/brand/clutch-logo-light.svg'

type Props = {
  className?: string
  variant?: 'light' | 'dark'
}

/** Official Clutch.co logo */
export function ClutchLogo({ className, variant = 'dark' }: Props) {
  const src = variant === 'light' ? clutchLogoLight : clutchLogoDark

  return (
    <img
      src={src}
      alt="Clutch"
      width={188}
      height={56}
      className={className}
      decoding="async"
    />
  )
}
