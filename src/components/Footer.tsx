import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Facebook, Github, Instagram, Linkedin, MapPin, Phone } from 'lucide-react'
import { useMemo } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { siteImages } from '@/lib/siteImages'
import { routePrefetchHandlers } from '@/lib/routePrefetch'

import { FooterLink } from '@/components/FooterLink'
import { ScheduleConsultationButton } from '@/components/NavMenuLink'
import { contactInfo } from '@/lib/contactInfo'
import { buildFooterColumns } from '@/lib/i18nNav'

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zm3.38 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
    </svg>
  )
}

const socialLinks: { label: string; href: string; icon: LucideIcon | typeof MediumIcon }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/moonsofts-net', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/MoonSofts-Net', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/moonsofts_net/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/moonsofts/', icon: Facebook },
  { label: 'Medium', href: 'https://moonsofts.medium.com/', icon: MediumIcon },
]

export function Footer() {
  const { t } = useI18n()
  const columns = useMemo(() => buildFooterColumns(t), [t])

  return (
    <footer className="border-t border-ink-900/10 bg-paper-50">
      <div className="container-pad grid gap-[32px] py-[48px] sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-[12px]">
            <img
              src={siteImages.brand.logo}
              alt={t('common.brand')}
              className="h-[48px] w-auto max-w-[160px] shrink-0 bg-transparent object-contain brightness-0 invert drop-shadow-[0_1px_2px_rgba(12,28,34,0.5)]"
            />
            <span className="text-xl font-semibold tracking-tight text-ink-900">{t('common.brand')}</span>
          </Link>
          <p className="mt-[16px] max-w-xs text-sm leading-relaxed text-ink-600">{t('footer.tagline')}</p>
          <ul className="mt-[16px] flex flex-col gap-[10px] text-sm text-ink-600">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-medium text-brand transition hover:text-brand-600"
              >
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-start gap-[8px] transition hover:text-brand"
              >
                <Phone className="mt-[2px] h-4 w-4 shrink-0 text-brand" aria-hidden />
                <span>{contactInfo.phoneDisplay}</span>
              </a>
            </li>
            <li className="inline-flex items-start gap-[8px]">
              <MapPin className="mt-[2px] h-4 w-4 shrink-0 text-brand" aria-hidden />
              <address className="not-italic leading-relaxed">
                {contactInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          </ul>
          <ScheduleConsultationButton className="mt-[20px] w-full sm:w-auto" variant="primary" showIcon />
          <p className="mt-[20px] text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{t('common.followUs')}</p>
          <div className="mt-[12px] flex flex-wrap items-center gap-[12px]">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex p-1 text-ink-700 transition hover:text-brand"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{col.title}</p>
            <ul className="mt-[16px] flex flex-col gap-[10px]">
              {col.links.map((link) => (
                <li key={link.to + link.label}>
                  <FooterLink link={link} className="text-sm text-ink-600 transition hover:text-brand" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-900/10">
        <div className="container-pad flex flex-col items-center justify-between gap-[12px] py-[20px] text-xs text-ink-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t('common.brand')}. {t('common.copyright')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[16px]">
            <Link to="/privacy" {...routePrefetchHandlers('/privacy')} className="transition hover:text-brand">
              {t('common.termsOfUse')}
            </Link>
            <Link to="/privacy" {...routePrefetchHandlers('/privacy')} className="transition hover:text-brand">
              {t('common.privacyData')}
            </Link>
            <a href="#top" className="transition hover:text-brand">
              {t('common.backToTop')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
