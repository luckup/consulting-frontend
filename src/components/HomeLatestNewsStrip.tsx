import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { latestHeadlines } from '@/lib/homeNewsHeadlines'

const featured = latestHeadlines[0]
const more = latestHeadlines.slice(1)

export function HomeLatestNewsStrip() {
  return (
    <section id="insights" className="scroll-mt-[100px] border-b border-ink-900/10 bg-paper-50">
      <div className="container-pad section-spacing">
        <div className="flex flex-wrap items-end justify-between gap-[16px]">
          <div className="max-w-2xl">
            <p className="section-label">Insights</p>
            <h2 className="mt-[12px] text-2xl font-semibold text-ink-900 sm:text-3xl">
              News, thought leadership &amp; client stories
            </h2>
            <p className="mt-[12px] text-base leading-relaxed text-ink-600">
              Updates from MoonSofts on delivery, technology, and the industries we serve.
            </p>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
          >
            Visit newsroom
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-[40px] grid gap-[24px] lg:grid-cols-[1.2fr_1fr]">
          <Link to={featured.to} className="card group grid overflow-hidden lg:grid-cols-2">
            <div className="relative min-h-[220px] overflow-hidden bg-paper-100 lg:min-h-full">
              <img
                src={featured.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center p-[28px] sm:p-[32px]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{featured.category}</p>
              <p className="mt-[8px] text-xs text-ink-500">{featured.date}</p>
              <h3 className="mt-[16px] text-xl font-semibold leading-snug text-ink-900 group-hover:text-brand sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-[12px] line-clamp-3 text-sm leading-relaxed text-ink-600">{featured.preview}</p>
              <span className="mt-[20px] inline-flex items-center gap-[8px] text-sm font-semibold text-brand">
                Read more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-[4px]" />
              </span>
            </div>
          </Link>

          <div className="flex flex-col gap-[16px]">
            {more.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className="card-soft group flex gap-[16px] bg-paper-50 p-[16px] transition hover:border-brand/30 sm:p-[20px]"
              >
                <div className="relative h-[88px] w-[120px] shrink-0 overflow-hidden rounded-[4px] bg-paper-100 sm:h-[96px] sm:w-[140px]">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand">{item.category}</p>
                  <p className="mt-[4px] text-xs text-ink-500">{item.date}</p>
                  <h3 className="mt-[8px] line-clamp-2 text-sm font-semibold leading-snug text-ink-900 group-hover:text-brand">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
