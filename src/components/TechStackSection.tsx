import { BrandIcon } from '@/components/BrandIcon'
import { RevealItem, RevealStagger, RevealStaggerItem, SectionReveal } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent, getStackCatalog } from '@/i18n/localized/data'
import { techStackGroups } from '@/lib/stackCatalog'

const groupKeys = [
  'product-web',
  'backend-apis',
  'data-persistence',
  'cloud-devops',
  'ai-engineering',
  'data-engineering',
] as const

export function TechStackSection() {
  const { locale } = useI18n()
  const copy = getPageContent(locale, 'techStack')
  const catalog = getStackCatalog(locale)

  return (
    <SectionReveal
      as="section"
      id="stack"
      accent
      stagger
      className="scroll-mt-[120px] border-b border-ink-900/10 pb-[40px]"
    >
      <RevealItem>
        <p className="section-label">{copy.label}</p>
        <h2 className="mt-[8px] text-xl font-semibold leading-snug text-ink-900 sm:text-2xl">{copy.title}</h2>
        <p className="mt-[12px] max-w-2xl text-sm leading-relaxed text-ink-600 sm:text-base">{copy.description}</p>
      </RevealItem>

      <RevealStagger className="mt-[24px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
        {techStackGroups.map((group, index) => {
          const key = groupKeys[index]
          const localized = key ? catalog.techStackGroups[key as keyof typeof catalog.techStackGroups] : undefined
          return (
            <RevealStaggerItem key={group.title}>
              <div className="card h-full p-[24px]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
                  {localized?.title ?? group.title}
                </h3>
                <ul className="mt-[16px] flex flex-col gap-[10px]">
                  {group.items.map((item) => (
                    <li key={item.slug} className="flex items-center gap-[12px]">
                      <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center">
                        <BrandIcon
                          name={item.name}
                          slug={item.slug}
                          className="h-[22px] w-[22px] object-contain brightness-0 invert opacity-[0.85]"
                        />
                      </span>
                      <span className="text-sm font-medium text-ink-800">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealStaggerItem>
          )
        })}
      </RevealStagger>
    </SectionReveal>
  )
}
