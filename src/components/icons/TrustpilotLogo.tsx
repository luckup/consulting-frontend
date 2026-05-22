import trustpilotLogoDark from '@/assets/brand/trustpilot-logo-dark.svg'
import trustpilotLogoLight from '@/assets/brand/trustpilot-logo-light.svg'

type Props = {
  className?: string
  variant?: 'light' | 'dark'
}

/** Trustpilot logo */
export function TrustpilotLogo({ className, variant = 'dark' }: Props) {
  const src = variant === 'light' ? trustpilotLogoLight : trustpilotLogoDark

  return (
    <img
      src={src}
      alt="Trustpilot"
      width={188}
      height={56}
      className={className}
      decoding="async"
    />
  )
}
