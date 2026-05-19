import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { TestimonialCard } from '@/components/TestimonialCard'
import { clientStats, testimonials } from '@/lib/clientsData'

const featured = testimonials.slice(0, 3)

export function HomeClientVoicesSection() {
  return (
    <section id="client-voices" className="border-t border-ink-900/10 bg-paper-100">
      <div className="container-pad section-spacing">
        <div className="flex flex-wrap items-end justify-between gap-[16px]">
          <div className="max-w-2xl">
            <p className="section-label">Customer testimonials</p>
            <h2 className="mt-[8px] text-2xl font-semibold text-ink-900 sm:text-3xl">
              Hear what our customers say
            </h2>
            <p className="mt-[12px] text-base leading-relaxed text-ink-600">
              Leaders across commerce, logistics, healthcare, and growth technology partner with MoonSofts for accountable
              engineering and software that ships with discipline.
            </p>
          </div>
          <Link
            to="/clients"
            className="inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
          >
            Read all client stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-[32px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {clientStats.map((stat) => (
            <div key={stat.label} className="card-soft p-[20px] text-center sm:text-left">
              <p className="text-2xl font-semibold text-brand sm:text-3xl">{stat.value}</p>
              <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-[32px] grid gap-[24px] md:grid-cols-3">
          {featured.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
