type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  const alignClass = align === 'left' ? 'mx-0 max-w-3xl text-left' : 'mx-auto max-w-3xl text-center'

  return (
    <div className={alignClass}>
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-[12px] text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-[16px] text-base text-ink-600 sm:text-lg">{description}</p> : null}
    </div>
  )
}
