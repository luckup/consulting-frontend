import { BrandLogo } from '@/components/BrandLogo'
import { RevealItem, RevealStagger, RevealStaggerItem, SectionReveal } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent } from '@/i18n/localized/data'
import { workflowTools } from '@/lib/stackCatalog'

export function ToolsWeUseSection() {
  const { locale } = useI18n()
  const copy = getPageContent(locale, 'toolsWeUse')

  return (
    <SectionReveal
      as="section"
      id="tools"
      accent
      stagger
      innerClassName="grid gap-[32px] lg:grid-cols-[minmax(200px,260px),1fr] lg:gap-[48px] lg:items-start"
      className="scroll-mt-[120px] border-t border-ink-900/10 pt-[48px]"
    >
      <RevealItem>
        <div>
          <p className="section-label">{copy.label}</p>
          <h2 className="mt-[8px] text-xl font-semibold leading-snug text-ink-900 sm:text-2xl">{copy.title}</h2>
          <p className="mt-[12px] text-sm leading-relaxed text-ink-600 sm:text-base">{copy.description}</p>
        </div>
      </RevealItem>

      <RevealStagger className="grid grid-cols-2 gap-[16px] sm:grid-cols-3 lg:grid-cols-4">
        {workflowTools.map((tool) => (
          <RevealStaggerItem key={tool.slug}>
            <BrandLogo name={tool.name} slug={tool.slug} />
          </RevealStaggerItem>
        ))}
      </RevealStagger>
    </SectionReveal>
  )
}
