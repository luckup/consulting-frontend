import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'
import { siteImages } from '@/lib/siteImages'

const CONTACT_EMAIL = 'yuji@moonsofts.net'

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zm3.38 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
    </svg>
  )
}

const socialLinks: { label: string; href: string; icon: LucideIcon | typeof MediumIcon }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/evofuse', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/MoonSofts-Net', icon: Github },
  { label: 'Medium', href: 'https://moonsofts.medium.com/', icon: MediumIcon },
]

const columns = [
  {
    title: 'Industries',
    links: [
      { to: '/industries/ecommerce', label: 'E-commerce' },
      { to: '/industries/logistics', label: 'Logistics' },
      { to: '/industries/healthcare', label: 'Healthcare' },
      { to: '/industries/construction', label: 'Construction' },
      { to: '/industries/financial', label: 'Financial services' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Consulting services' },
      { to: '/stack', label: 'Technology & platform' },
      { to: '/privacy', label: 'Information security' },
    ],
  },
  {
    title: 'Insights',
    links: [
      { to: '/news', label: 'News & insights' },
      { to: '/clients', label: 'Client voices' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'Our story' },
      { to: '/team', label: 'Leadership' },
      { to: '/engineers', label: 'Careers' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-brand-700 text-[white]/90">
      <div className="container-pad grid gap-[32px] py-[48px] sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-[12px]">
            <img
              src={siteImages.brand.logo}
              alt=""
              className="h-[48px] w-auto max-w-[160px] shrink-0 bg-transparent object-contain brightness-0 invert"
            />
            <span className="text-xl font-semibold tracking-tight text-[white]">oonsofts</span>
          </Link>
          <p className="mt-[16px] max-w-xs text-sm leading-relaxed text-[white]/75">
            Software consulting and delivery for enterprises that measure success in shipped outcomes—not slide decks.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-[12px] inline-block text-sm font-medium text-[white]/90 transition hover:text-[white]"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-[20px] text-xs font-semibold uppercase tracking-[0.14em] text-[white]/55">Follow us</p>
          <div className="mt-[12px] flex flex-wrap items-center gap-[12px]">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border border-[white]/25 text-[white]/90 transition hover:border-[white] hover:bg-[white]/15 hover:text-[white]"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[white]/55">{col.title}</p>
            <ul className="mt-[16px] flex flex-col gap-[10px]">
              {col.links.map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className="text-sm text-[white]/80 hover:text-[white]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[white]/20">
        <div className="container-pad flex flex-col items-center justify-between gap-[12px] py-[20px] text-xs text-[white]/55 sm:flex-row">
          <p>© {new Date().getFullYear()} oonsofts. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-[16px]">
            <Link to="/privacy" className="hover:text-[white]">
              Terms of Use
            </Link>
            <Link to="/privacy" className="hover:text-[white]">
              Privacy &amp; Data Protection
            </Link>
            <a href="#top" className="hover:text-[white]">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
