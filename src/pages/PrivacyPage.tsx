import { ContentBlock } from '@/components/ContentBlock'
import { PageShell } from '@/components/PageShell'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent } from '@/i18n/localized/data'
import { getLegalNav } from '@/i18n/localized/pageNav'
import { siteImages } from '@/lib/siteImages'

export function PrivacyPage() {
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'privacy')
  const blocks = page.blocks

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/privacy' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/contact' }}
      heroImage={siteImages.hero.privacy}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getLegalNav(locale)}
    >
      <div className="space-y-[40px]">
        <ContentBlock label={blocks.overview.label} title={blocks.overview.title}>
          <p>{blocks.overview.body}</p>
        </ContentBlock>

        <ContentBlock label={blocks.minimization.label} title={blocks.minimization.title}>
          <p>{blocks.minimization.body}</p>
        </ContentBlock>

        <ContentBlock label={blocks.access.label} title={blocks.access.title}>
          <p>{blocks.access.body}</p>
        </ContentBlock>

        <ContentBlock label={blocks.communications.label} title={blocks.communications.title}>
          <p>{blocks.communications.body}</p>
        </ContentBlock>

        <ContentBlock label={blocks.ai.label} title={blocks.ai.title} variant="highlight">
          <p>{blocks.ai.body}</p>
        </ContentBlock>

        <ContentBlock id="terms" label={blocks.terms.label} title={blocks.terms.title}>
          <p>{blocks.terms.body}</p>
        </ContentBlock>

        <ContentBlock
          id="help"
          label={blocks.help.label}
          title={blocks.help.title}
          cta={{ label: blocks.help.cta, to: '/contact' }}
        >
          <p>{blocks.help.body}</p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}
