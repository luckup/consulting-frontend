import { Linkedin, Mail } from 'lucide-react'
import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { useI18n } from '@/i18n/useI18n'
import { getPageContent } from '@/i18n/localized/data'
import { getTeamNav } from '@/i18n/localized/pageNav'
import { siteImages } from '@/lib/siteImages'

const memberMeta = {
  walter: { photo: siteImages.team.walter, email: 'walter@moonsofts.net' },
  reza: { photo: siteImages.team.reza, email: 'reza@moonsofts.net', linkedin: 'https://www.linkedin.com/in/mrnozari/' },
  adryan: {
    photo: siteImages.team.adryan,
    email: 'adryan@moonsofts.net',
    linkedin: 'https://www.linkedin.com/in/adryan-daniel-0b11461aa',
  },
} as const

export function TeamPage() {
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'team')
  const members = Object.entries(page.members).map(([id, member]) => ({
    id,
    ...member,
    ...memberMeta[id as keyof typeof memberMeta],
  }))

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/about' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/engineers' }}
      heroImage={siteImages.hero.team}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getTeamNav(locale)}
    >
      <div className="space-y-[48px]">
        <MediaImage src={siteImages.team.banner} className="h-[280px] rounded-[4px]" overlay="subtle" />

        <ContentBlock label={page.blocks.leadership.label} title={page.blocks.leadership.title}>
          <p>{page.blocks.leadership.body}</p>
        </ContentBlock>

        <div className="grid gap-[24px] md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article key={member.id} className="card flex flex-col overflow-hidden">
              <MediaImage
                src={member.photo}
                alt={member.name}
                className="h-[280px]"
                imageClassName="object-top"
                overlay="subtle"
              />
              <div className="flex flex-1 flex-col p-[24px]">
                <h3 className="text-lg font-semibold text-ink-900">{member.name}</h3>
                <p className="text-sm text-brand">{member.role}</p>
                <p className="mt-[12px] flex-1 text-sm leading-relaxed text-ink-600">{member.bio}</p>
                <ul className="mt-[12px] flex flex-wrap gap-[8px]">
                  {member.focus.map((tag) => (
                    <li key={tag} className="rounded-[4px] border border-ink-900/10 px-[10px] py-[4px] text-xs text-ink-600">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-[16px] flex flex-wrap items-center gap-[8px]">
                  {'linkedin' in member && member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[4px] border border-ink-900/10 p-[8px] text-ink-500 transition hover:border-brand hover:text-brand"
                      aria-label={member.linkedinAria}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  ) : null}
                  <a
                    href={`mailto:${member.email}`}
                    className="rounded-[4px] border border-ink-900/10 p-[8px] text-ink-500 transition hover:border-brand hover:text-brand"
                    aria-label={member.emailAria}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
