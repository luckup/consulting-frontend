import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent } from '@/i18n/localized/data'
import { getWhoWeAreNav } from '@/i18n/localized/pageNav'
import { siteImages } from '@/lib/siteImages'

export function AboutPage() {
  useHashSectionScroll()
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'about')
  const blocks = page.blocks

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/about' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/contact' }}
      heroImage={siteImages.hero.about}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getWhoWeAreNav(locale)}
    >
      <div className="space-y-[48px]">
        <ContentBlock id="about-us" label={blocks.aboutUs.label} title={blocks.aboutUs.title}>
          {blocks.aboutUs.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {index === 1 ? (
                (() => {
                  const emphasis = blocks.aboutUs.signalEmphasis
                  const parts = paragraph.split(emphasis)
                  if (parts.length !== 2) return paragraph
                  return (
                    <>
                      {parts[0]}
                      <strong className="text-ink-900">{emphasis}</strong>
                      {parts[1]}
                    </>
                  )
                })()
              ) : (
                paragraph
              )}
            </p>
          ))}
        </ContentBlock>

        <ContentBlock id="values" label={blocks.values.label} title={blocks.values.title}>
          <p className="text-base font-medium text-ink-800">{blocks.values.credo}</p>
          <div className="grid gap-[16px] sm:grid-cols-2">
            {Object.values(blocks.values.credoValues).map((item) => (
              <div key={item.title} className="card-soft p-[24px]">
                <h3 className="text-sm font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock
          id="commitments"
          label={blocks.commitments.label}
          title={blocks.commitments.title}
          variant="highlight"
        >
          <MediaImage
            src={siteImages.split.aboutCommitments}
            className="mb-[8px] h-[200px] w-full rounded-[4px] sm:h-[240px]"
            overlay="subtle"
          />
          <p>{blocks.commitments.intro}</p>
          <ul className="list-disc space-y-[10px] pl-[20px]">
            {blocks.commitments.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentBlock>

        <ContentBlock id="history" label={blocks.history.label} title={blocks.history.title}>
          <MediaImage src={siteImages.about.history} className="mb-[8px] h-[240px] rounded-[4px]" overlay="subtle" />
          <p>{blocks.history.intro}</p>
          <div className="mt-[24px] grid gap-[16px] border-l-2 border-brand/30 pl-[20px]">
            {Object.values(blocks.history.milestones).map((item) => (
              <div key={item.year}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{item.year}</p>
                <p className="mt-[6px] text-sm leading-relaxed text-ink-600 sm:text-base">{item.detail}</p>
              </div>
            ))}
          </div>
          <p>{blocks.history.closing}</p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}
