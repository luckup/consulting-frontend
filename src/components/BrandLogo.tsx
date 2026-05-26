import { BrandIcon } from '@/components/BrandIcon'

type Props = {
  name: string
  slug: string
  size?: 'sm' | 'md'
}

export function BrandLogo({ name, slug, size = 'md' }: Props) {
  const height = size === 'sm' ? 'h-[22px]' : 'h-[28px]'

  return (
    <div
      className="group flex h-[72px] items-center justify-center px-[20px] transition-[transform,opacity] duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px]"
      title={name}
    >
      <BrandIcon
        name={name}
        slug={slug}
        className={`${height} w-auto max-w-full object-contain opacity-[0.78] brightness-0 invert transition-[opacity,filter] duration-[380ms] group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0`}
      />
    </div>
  )
}
