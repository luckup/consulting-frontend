import { Linkedin, Mail } from 'lucide-react'
import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { teamNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

type Member = {
  name: string
  role: string
  bio: string
  focus: string[]
  photo: string
  email: string
  linkedin?: string
}

const leadership: Member[] = [
  {
    name: 'Walter Picher',
    role: 'Chief Executive Officer',
    bio: 'Walter founded MoonSofts in May 2025 with a mission to support global customers through accountable software consulting. He sets company vision, client partnerships, and the delivery standards that define how we engage worldwide.',
    focus: ['Company vision', 'Global partnerships', 'Client trust'],
    photo: siteImages.team.walter,
    email: 'walter@moonsofts.net',
  },
  {
    name: 'Reza Nozari',
    role: 'Chief Technology Officer',
    bio: 'Reza leads MoonSofts technology strategy—architecture, cloud, AI-enabled engineering, and the platforms that keep distributed squads aligned. He ensures every program ships with senior technical judgment and production-grade discipline.',
    focus: ['Architecture', 'Cloud & AI', 'Engineering excellence'],
    photo: siteImages.team.reza,
    email: 'reza@moonsofts.net',
    linkedin: 'https://www.linkedin.com/in/mrnozari/',
  },
  {
    name: 'Adryan Andrade Daniel',
    role: 'Co-founder & Founding Engineer',
    bio: 'Adryan built the engineering foundation of MoonSofts from day one—delivery rituals, codebase standards, and the hands-on craft that clients experience on every engagement. He remains close to the work: code, reviews, and mentoring squads.',
    focus: ['Platform engineering', 'Delivery craft', 'Squad mentorship'],
    photo: siteImages.team.adryan,
    email: 'adryan@moonsofts.net',
    linkedin: 'https://www.linkedin.com/in/adryan-daniel-0b11461aa',
  },
]

function TeamGrid({ members }: { members: Member[] }) {
  return (
    <div className="grid gap-[24px] md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <article key={member.name} className="card flex flex-col overflow-hidden">
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
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[4px] border border-ink-900/10 p-[8px] text-ink-500 transition hover:border-brand hover:text-brand"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : null}
              <a
                href={`mailto:${member.email}`}
                className="rounded-[4px] border border-ink-900/10 p-[8px] text-ink-500 transition hover:border-brand hover:text-brand"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export function TeamPage() {
  return (
    <PageShell
      section="Who we are"
      title="Our leadership team"
      description="The founders and executives guiding MoonSofts—committed to global delivery, technical excellence, and partnerships clients can trust."
      breadcrumbs={[{ label: 'Who we are', to: '/about' }, { label: 'Leadership team' }]}
      heroCta={{ label: 'Join our team', to: '/engineers' }}
      heroImage={siteImages.hero.team}
      sidebarTitle="In this section"
      sidebarItems={teamNav}
    >
      <div className="space-y-[48px]">
        <MediaImage src={siteImages.team.banner} className="h-[280px] rounded-[4px]" overlay="subtle" />

        <ContentBlock label="Leadership" title="Founders and executives building MoonSofts">
          <p>
            A small, senior leadership team owns strategy, technology, and engineering craft—keeping every client program
            accountable from discovery through production.
          </p>
        </ContentBlock>

        <TeamGrid members={leadership} />
      </div>
    </PageShell>
  )
}
