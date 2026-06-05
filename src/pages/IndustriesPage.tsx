import { Link } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent } from '@/i18n/localized/data'
import { getIndustries } from '@/i18n/localized/industries'
import { getIndustriesNav } from '@/i18n/localized/pageNav'
import { industryPath } from '@/lib/industriesData'
import { siteFeatures } from '@/lib/siteFeatures'
import { siteImages } from '@/lib/siteImages'

export function IndustriesPage() {
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'industriesList')
  const industries = getIndustries(locale)

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/services' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/contact' }}
      heroImage={siteImages.hero.industries}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getIndustriesNav(locale)}
    >
      <div className="space-y-[48px]">
        <ContentBlock label={page.blocks.overview.label} title={page.blocks.overview.title}>
          {page.blocks.overview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ContentBlock>

        <div className="grid gap-[24px] sm:grid-cols-2">
          {industries.map((sector) => (
            <Link
              key={sector.id}
              to={industryPath(sector.id)}
              className="card group overflow-hidden transition hover:border-brand/30 hover:shadow-card"
            >
              <MediaImage
                src={sector.pageImage}
                alt=""
                className="aspect-[16/9] w-full object-cover transition group-hover:scale-[1.02]"
              />
              <div className="p-[24px]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{sector.label}</p>
                <h3 className="mt-[8px] text-lg font-semibold text-ink-900 group-hover:text-brand">{sector.title}</h3>
                <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{sector.body}</p>
                <span className="mt-[16px] inline-flex text-sm font-semibold text-brand group-hover:text-brand-600">
                  {page.explorePrefix.replace('{label}', sector.label)}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <ContentBlock label={page.blocks.crossIndustry.label} title={page.blocks.crossIndustry.title}>
          <p>
            {page.blocks.crossIndustry.bodyPrefix}
            {siteFeatures.clientVoices ? (
              <>
                {' '}
                <Link to="/clients" className="font-semibold text-brand hover:text-brand-600">
                  {page.blocks.crossIndustry.clientVoicesLink}
                </Link>{' '}
                {page.blocks.crossIndustry.or}{' '}
              </>
            ) : (
              ' '
            )}
            <Link to="/services" className="font-semibold text-brand hover:text-brand-600">
              {page.blocks.crossIndustry.servicesLink}
            </Link>
            .
          </p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}
