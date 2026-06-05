import { Link, Navigate, useParams } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { TestimonialRow } from '@/components/TestimonialRow'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent, getTestimonialForIndustry } from '@/i18n/localized/data'
import { getIndustries, getIndustryBySlug } from '@/i18n/localized/industries'
import { getIndustriesNav } from '@/i18n/localized/pageNav'
import { industryPath } from '@/lib/industriesData'
import { siteFeatures } from '@/lib/siteFeatures'

export function IndustryDetailPage() {
  const { locale, t } = useI18n()
  const { slug } = useParams<{ slug: string }>()
  const page = getPageContent(locale, 'industryDetail')
  const sector = getIndustryBySlug(locale, slug)
  const industries = getIndustries(locale)

  if (!sector) {
    return <Navigate to="/industries" replace />
  }

  const testimonial = getTestimonialForIndustry(locale, sector.id)
  const index = industries.findIndex((item) => item.id === sector.id)
  const prev = index > 0 ? industries[index - 1] : null
  const next = index < industries.length - 1 ? industries[index + 1] : null
  const blocks = page.blocks

  return (
    <PageShell
      section={page.section}
      title={sector.title}
      description={sector.body}
      breadcrumbs={[
        { label: page.breadcrumbs[0].label, to: '/services' },
        { label: page.breadcrumbs[1].label, to: '/industries' },
        { label: sector.label },
      ]}
      heroCta={{ label: sector.cta.label, to: sector.cta.to }}
      heroImage={sector.heroImage}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getIndustriesNav(locale)}
    >
      <div className="space-y-[48px]">
        <ContentBlock label={sector.label} title={sector.title}>
          <div className="grid gap-[32px] lg:grid-cols-2 lg:items-start">
            <div>
              <p>{sector.body}</p>
              <p className="mt-[16px] text-sm leading-relaxed text-ink-600">
                {page.domainContext.replace('{label}', sector.label.toLowerCase())}
              </p>
              <Link to={sector.cta.to} className="btn btn-primary mt-[24px] inline-flex">
                {sector.cta.label}
              </Link>
            </div>
            <MediaImage src={sector.pageImage} alt="" className="aspect-[16/10] w-full rounded-[4px] object-cover" />
          </div>
        </ContentBlock>

        <ContentBlock label={blocks.customerSupport.label} title={blocks.customerSupport.title}>
          <p>{sector.support.intro}</p>
          <p className="mt-[16px]">{sector.support.detail}</p>
          <p className="mt-[16px] text-sm text-ink-600">{blocks.customerSupport.engagementIncludes}</p>
          <h3 className="mt-[28px] text-base font-semibold text-ink-900">{blocks.customerSupport.expectationsTitle}</h3>
          <ul className="mt-[16px] grid gap-[12px]">
            {sector.support.services.map((item) => (
              <li
                key={item}
                className="flex gap-[12px] rounded-[4px] border border-ink-900/10 bg-paper-50 px-[16px] py-[14px] text-sm text-ink-700"
              >
                <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-[24px] text-sm text-ink-600">
            {blocks.customerSupport.readyPrefix}{' '}
            <Link to="/contact" className="font-semibold text-brand hover:text-brand-600">
              {blocks.customerSupport.contactConsultants}
            </Link>{' '}
            or review{' '}
            <Link to="/services" className="font-semibold text-brand hover:text-brand-600">
              {blocks.customerSupport.howWeEngage}
            </Link>
            .
          </p>
        </ContentBlock>

        <ContentBlock label={blocks.capabilities.label} title={blocks.capabilities.title}>
          <ul className="grid gap-[12px] sm:grid-cols-2">
            {sector.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-[12px] rounded-[4px] border border-ink-900/10 bg-paper-50 px-[16px] py-[14px] text-sm text-ink-700"
              >
                <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </ContentBlock>

        {siteFeatures.clientVoices && testimonial ? (
          <ContentBlock label={blocks.clientVoice.label} title={blocks.clientVoice.title}>
            <p className="mb-[24px] text-sm text-ink-600">
              {blocks.clientVoice.intro.replace('{label}', sector.label.toLowerCase())}{' '}
              <Link to="/clients" className="font-semibold text-brand hover:text-brand-600">
                {blocks.clientVoice.clientStoriesLink}
              </Link>
              .
            </p>
            <TestimonialRow item={testimonial} />
          </ContentBlock>
        ) : null}

        <ContentBlock label={blocks.engagement.label} title={blocks.engagement.title}>
          <p>{blocks.engagement.body}</p>
          <p className="mt-[16px]">
            {blocks.engagement.explorePrefix}{' '}
            <Link to="/services" className="font-semibold text-brand hover:text-brand-600">
              {blocks.engagement.consultingServices}
            </Link>
            {siteFeatures.clientVoices ? (
              <>
                , read more{' '}
                <Link to="/clients" className="font-semibold text-brand hover:text-brand-600">
                  {blocks.engagement.clientOutcomes}
                </Link>
              </>
            ) : null}
            , or{' '}
            <Link to={sector.cta.to} className="font-semibold text-brand hover:text-brand-600">
              {blocks.engagement.startConversation}
            </Link>{' '}
            {blocks.engagement.closing.replace('{label}', sector.label.toLowerCase())}
          </p>
        </ContentBlock>

        <nav
          className="flex flex-col gap-[16px] border-t border-ink-900/10 pt-[32px] sm:flex-row sm:items-center sm:justify-between"
          aria-label={page.nav.ariaLabel}
        >
          {prev ? (
            <Link to={industryPath(prev.id)} className="text-sm font-semibold text-brand hover:text-brand-600">
              ← {prev.label}
            </Link>
          ) : (
            <span />
          )}
          <Link to="/industries" className="text-sm font-medium text-ink-600 hover:text-ink-900">
            {page.nav.allIndustries}
          </Link>
          {next ? (
            <Link
              to={industryPath(next.id)}
              className="text-sm font-semibold text-brand hover:text-brand-600 sm:text-right"
            >
              {next.label} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </PageShell>
  )
}
