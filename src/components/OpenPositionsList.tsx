import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { contactPathForPosition, openPositions } from '@/lib/careersData'

export function OpenPositionsList() {
  return (
    <div className="grid gap-[20px] md:grid-cols-2">
      {openPositions.map((position) => (
        <article key={position.id} className="home-card-soft flex h-full flex-col p-[24px] sm:p-[28px]">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{position.engagement}</p>
          <h3 className="mt-[12px] text-lg font-semibold leading-snug text-ink-900">{position.title}</h3>
          <p className="mt-[8px] text-sm font-medium text-ink-700">{position.tagline}</p>
          <p className="mt-[12px] flex-1 text-sm leading-relaxed text-ink-600">{position.description}</p>
          <ul className="mt-[16px] space-y-[8px]">
            {position.highlights.map((item) => (
              <li key={item} className="flex gap-[8px] text-sm text-ink-700">
                <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-[16px] flex items-center gap-[6px] text-xs text-ink-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Remote-first · Global collaboration
          </p>
          <Link
            to={contactPathForPosition(position)}
            className="btn btn-primary mt-[20px] w-full justify-center sm:w-auto"
          >
            Apply for this role
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      ))}
    </div>
  )
}
