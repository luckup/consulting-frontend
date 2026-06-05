import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { SplitFeature } from '@/components/SplitFeature'
import { TechStackSection } from '@/components/TechStackSection'
import { ToolsWeUseSection } from '@/components/ToolsWeUseSection'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent } from '@/i18n/localized/data'
import { getStackNav } from '@/i18n/localized/pageNav'
import { siteImages } from '@/lib/siteImages'

const businessImages = {
  'product-engineering': siteImages.stack.product,
  'platform-cloud': siteImages.stack.cloud,
  'data-ai': siteImages.stack.data,
} as const

export function StackPage() {
  useHashSectionScroll()
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'stack')
  const blocks = page.blocks

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/stack' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/stack#platform' }}
      heroImage={siteImages.hero.stack}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getStackNav(locale)}
    >
      <div className="space-y-[48px]">
        <SplitFeature
          label={page.splitFeature.label}
          title={page.splitFeature.title}
          body={page.splitFeature.body}
          cta={{ label: page.splitFeature.cta, to: '/stack#platform' }}
          image={siteImages.split.stackPlatform}
        />

        <ContentBlock
          id="platform"
          label={blocks.platform.label}
          title={blocks.platform.title}
          variant="highlight"
          cta={{ label: blocks.platform.cta, to: '/contact' }}
        >
          <p>{blocks.platform.body}</p>
        </ContentBlock>

        <TechStackSection />

        <ToolsWeUseSection />

        <ContentBlock
          id="businesses"
          label={blocks.businesses.label}
          title={blocks.businesses.title}
          cta={{ label: blocks.businesses.cta, to: '/news' }}
        >
          <p>{blocks.businesses.intro}</p>
          <div className="mt-[20px] grid gap-[16px] sm:grid-cols-3">
            {Object.entries(blocks.businesses.lines).map(([id, line]) => (
              <div key={id} className="card-soft overflow-hidden">
                <MediaImage
                  src={businessImages[id as keyof typeof businessImages]}
                  className="h-[180px]"
                  overlay="subtle"
                />
                <div className="p-[20px]">
                  <h4 className="font-semibold text-ink-900">{line.title}</h4>
                  <p className="mt-[8px] text-sm text-ink-600">{line.body}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>
      </div>
    </PageShell>
  )
}
