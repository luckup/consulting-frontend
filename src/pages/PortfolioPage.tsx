import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { PortfolioProjectModal } from '@/components/PortfolioProjectModal'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent, getPortfolioProjects, type LocalizedPortfolioProject } from '@/i18n/localized/data'
import { getPortfolioNav } from '@/i18n/localized/pageNav'
import { siteImages } from '@/lib/siteImages'

export function PortfolioPage() {
  useHashSectionScroll()
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'portfolio')
  const projects = getPortfolioProjects(locale)
  const blocks = page.blocks
  const [selectedProject, setSelectedProject] = useState<LocalizedPortfolioProject | null>(null)

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/services' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/contact' }}
      heroImage={siteImages.hero.services}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getPortfolioNav(locale)}
    >
      <div className="space-y-[48px]">
        <ContentBlock label={blocks.overview.label} title={blocks.overview.title}>
          {blocks.overview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ContentBlock>

        <ContentBlock id="selected-work" label={blocks.selectedWork.label} title={blocks.selectedWork.title}>
          <p>{blocks.selectedWork.intro}</p>
          <div className="mt-[32px] grid gap-[24px] sm:grid-cols-2">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className="card group overflow-hidden text-left transition hover:border-brand/30 hover:shadow-card"
                onClick={() => setSelectedProject(project)}
                aria-label={`${t('ui.viewProjectDetails')}: ${project.title}`}
              >
                <MediaImage
                  src={project.image}
                  alt=""
                  className="aspect-[16/9] w-full object-cover transition group-hover:scale-[1.02]"
                />
                <div className="p-[24px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{project.category}</p>
                  <h3 className="mt-[8px] text-lg font-semibold text-ink-900">{project.title}</h3>
                  <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{project.body}</p>
                  <ul className="mt-[16px] flex flex-wrap gap-[8px]" aria-hidden>
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-[4px] border border-ink-900/10 bg-paper-50 px-[10px] py-[5px] text-xs font-medium text-ink-700"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>
          <PortfolioProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </ContentBlock>

        <ContentBlock id="start-project" label={blocks.cta.label} title={blocks.cta.title}>
          <p>{blocks.cta.body}</p>
          <div className="mt-[24px] flex flex-wrap gap-[12px]">
            <Link to="/contact" className="btn btn-primary">
              {blocks.cta.primaryButton}
            </Link>
            <Link to="/services" className="btn btn-secondary">
              {blocks.cta.secondaryButton}
            </Link>
          </div>
        </ContentBlock>
      </div>
    </PageShell>
  )
}
