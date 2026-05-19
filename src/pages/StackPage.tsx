import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { SplitFeature } from '@/components/SplitFeature'
import { TechStackSection } from '@/components/TechStackSection'
import { ToolsWeUseSection } from '@/components/ToolsWeUseSection'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { stackNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

export function StackPage() {
  useHashSectionScroll()

  return (
    <PageShell
      section="What we do"
      title="Software solutions that put productivity at the center of delivery"
      description="We are a leading developer and provider of software solutions for product teams, platforms, and data-intensive systems."
      breadcrumbs={[{ label: 'What we do', to: '/stack' }, { label: 'Technology' }]}
      heroCta={{ label: 'See what we build', to: '/stack#platform' }}
      heroImage={siteImages.hero.stack}
      sidebarTitle="In this section"
      sidebarItems={stackNav}
    >
      <div className="space-y-[48px]">
        <SplitFeature
          label="What we do"
          title="Deeply integrated delivery for modern product teams"
          body="From web experiences and APIs to cloud foundations and AI-assisted workflows—we build systems that stay reliable under real-world load."
          cta={{ label: 'Explore the platform', to: '/stack#platform' }}
          image={siteImages.split.stackPlatform}
        />

        <ContentBlock
          id="platform"
          label="MoonSofts platform"
          title="Productivity at the center of global engineering"
          variant="highlight"
          cta={{ label: 'Talk to us about adoption', to: '/contact' }}
        >
          <p>
            Our delivery platform unifies rituals, access control, documentation, and client-ready handoffs—so distributed
            teams operate with enterprise discipline without enterprise bureaucracy.
          </p>
        </ContentBlock>

        <TechStackSection />

        <ToolsWeUseSection />

        <ContentBlock
          id="businesses"
          label="Our businesses"
          title="Combining engineering expertise and intelligent software"
          cta={{ label: "Learn how we're growing", to: '/news' }}
        >
          <p>
            MoonSofts combines product engineering, platform operations, and data practice into one coherent offering—so
            clients engage a single partner from MVP through scale.
          </p>
          <div className="mt-[20px] grid gap-[16px] sm:grid-cols-3">
            {[
              { title: 'Product engineering', body: 'Web apps, platforms, internal tools.', image: siteImages.stack.product },
              { title: 'Platform & cloud', body: 'CI/CD, IaC, observability, secure deployments.', image: siteImages.stack.cloud },
              { title: 'Data & AI', body: 'Pipelines, warehouses, RAG, and guardrails.', image: siteImages.stack.data },
            ].map((b) => (
              <div key={b.title} className="card-soft overflow-hidden">
                <MediaImage src={b.image} className="h-[180px]" overlay="subtle" />
                <div className="p-[20px]">
                  <h4 className="font-semibold text-ink-900">{b.title}</h4>
                  <p className="mt-[8px] text-sm text-ink-600">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>
      </div>
    </PageShell>
  )
}
