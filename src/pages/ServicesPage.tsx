import { Link } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { PageShell } from '@/components/PageShell'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { useI18n } from '@/i18n/useI18n'
import { getDeliveryPhases, getEngagementModels, getPageContent } from '@/i18n/localized/data'
import { getServicesNav } from '@/i18n/localized/pageNav'
import { siteFeatures } from '@/lib/siteFeatures'
import { ScheduleConsultationButton } from '@/components/NavMenuLink'
import { ServiceWebsiteOfferings } from '@/components/ServiceWebsiteOfferings'
import { contactInfo } from '@/lib/contactInfo'
import { siteImages } from '@/lib/siteImages'

export function ServicesPage() {
  useHashSectionScroll()
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'services')
  const blocks = page.blocks
  const engagementModels = getEngagementModels(locale)
  const deliveryPhases = getDeliveryPhases(locale)

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/services' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/contact' }}
      heroImage={siteImages.hero.services}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getServicesNav(locale)}
    >
      <div className="space-y-[48px]">
        <ContentBlock id="engage" label={blocks.engage.label} title={blocks.engage.title}>
          {blocks.engage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="mt-[24px] flex flex-wrap items-center gap-[12px]">
            <ScheduleConsultationButton variant="primary" showIcon />
            <p className="text-sm text-ink-600">
              {blocks.engage.calendlyPrefix}{' '}
              <a
                href={contactInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-600"
              >
                {blocks.engage.calendlyLink}
              </a>
              {blocks.engage.calendlySuffix}
            </p>
          </div>
        </ContentBlock>

        <ContentBlock
          id="websites"
          label={blocks.websites.label}
          title={blocks.websites.title}
          cta={{ label: blocks.websites.cta, to: '/contact#contact-form' }}
          reveal={false}
        >
          <p>{blocks.websites.body}</p>
          <div className="mt-[32px]">
            <ServiceWebsiteOfferings />
          </div>
        </ContentBlock>

        <ContentBlock id="models" label={blocks.models.label} title={blocks.models.title}>
          <div className="grid gap-[24px] sm:grid-cols-2">
            {engagementModels.map((model) => (
              <div key={model.title} className="card p-[28px]">
                <h3 className="text-lg font-semibold text-ink-900">{model.title}</h3>
                <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{model.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-[24px] text-sm text-ink-600">
            {blocks.models.stackLinkPrefix}{' '}
            <Link to="/stack" className="font-semibold text-brand hover:text-brand-600">
              {blocks.models.stackLink}
            </Link>
          </p>
        </ContentBlock>

        <ContentBlock id="delivery" label={blocks.delivery.label} title={blocks.delivery.title}>
          <p className="mb-[28px]">{blocks.delivery.intro}</p>
          <ol className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
            {deliveryPhases.map((step) => (
              <li key={step.phase} className="card-soft p-[24px]">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  {t('ui.phase')} {step.phase}
                </span>
                <h3 className="mt-[8px] text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{step.detail}</p>
              </li>
            ))}
          </ol>
        </ContentBlock>

        <ContentBlock id="why-moonsofts" label={blocks.whyMoonsofts.label} title={blocks.whyMoonsofts.title}>
          <ul className="space-y-[12px] text-ink-700">
            {blocks.whyMoonsofts.bullets.map((item) => (
              <li key={item} className="flex gap-[12px]">
                <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          {siteFeatures.clientVoices ? (
            <p className="mt-[24px]">
              <Link to="/clients" className="font-semibold text-brand hover:text-brand-600">
                {blocks.whyMoonsofts.clientVoicesLink}
              </Link>
            </p>
          ) : null}
        </ContentBlock>
      </div>
    </PageShell>
  )
}
