import { CheckCircle2 } from 'lucide-react'
import { ContentBlock } from '@/components/ContentBlock'
import { SectionReveal } from '@/components/SectionReveal'
import { PageShell } from '@/components/PageShell'
import { SplitFeature } from '@/components/SplitFeature'
import { OpenPositionsList } from '@/components/OpenPositionsList'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent } from '@/i18n/localized/data'
import { getCareersNav } from '@/i18n/localized/pageNav'
import { siteImages } from '@/lib/siteImages'

export function EngineersPage() {
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'engineers')
  const blocks = page.blocks

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/engineers' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/engineers#openings' }}
      heroImage={siteImages.hero.careers}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getCareersNav(locale)}
    >
      <div className="space-y-[48px]">
        <ContentBlock label={blocks.joinUs.label} title={blocks.joinUs.title}>
          <p>{blocks.joinUs.body}</p>
        </ContentBlock>

        <div className="grid gap-[24px] lg:grid-cols-2">
          <SectionReveal as="section" accent className="card border-l-4 border-l-brand p-[28px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{blocks.usAudience.eyebrow}</p>
            <h2 className="mt-[12px] text-xl font-semibold text-ink-900">{blocks.usAudience.title}</h2>
            <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{blocks.usAudience.body}</p>
            <ul className="mt-[20px] space-y-[10px]">
              {blocks.usAudience.points.map((item) => (
                <li key={item} className="flex gap-[10px] text-sm text-ink-700">
                  <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal as="section" accent className="card border-l-4 border-l-moon-sky p-[28px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{blocks.globalAudience.eyebrow}</p>
            <h2 className="mt-[12px] text-xl font-semibold text-ink-900">{blocks.globalAudience.title}</h2>
            <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{blocks.globalAudience.body}</p>
            <ul className="mt-[20px] space-y-[10px]">
              {blocks.globalAudience.points.map((item) => (
                <li key={item} className="flex gap-[10px] text-sm text-ink-700">
                  <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-moon-sky" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>

        <ContentBlock
          id="openings"
          label={blocks.openings.label}
          title={blocks.openings.title}
          cta={{ label: blocks.openings.cta, to: '/contact#contact-form' }}
        >
          <p>{blocks.openings.body}</p>
          <div className="mt-[32px]">
            <OpenPositionsList />
          </div>
        </ContentBlock>

        <SplitFeature
          label={blocks.studentsSplit.label}
          title={blocks.studentsSplit.title}
          body={blocks.studentsSplit.body}
          cta={{ label: blocks.studentsSplit.cta, to: '/contact' }}
          image={siteImages.split.careersStudents}
          reverse
        />

        <ContentBlock id="students" label={blocks.students.label} title={blocks.students.title}>
          <p>{blocks.students.body}</p>
        </ContentBlock>

        <ContentBlock
          id="earn-learn"
          label={blocks.earnLearn.label}
          title={blocks.earnLearn.title}
          variant="highlight"
          cta={{ label: blocks.earnLearn.cta, to: '/contact' }}
        >
          <p>{blocks.earnLearn.body}</p>
        </ContentBlock>

        <p className="text-center text-xs text-ink-500">{page.disclaimer}</p>
      </div>
    </PageShell>
  )
}
