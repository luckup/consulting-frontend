import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { homeIndustries } from '@/lib/homeContent'

export function HomeIndustriesSection() {
  return (
    <AnimatedHomeSection id="industries" className="scroll-mt-[100px]">
      <RevealItem>
        <HomeSectionHeader
          label="Industries"
          title="Where we deliver software consulting"
          description="Sector depth across commerce, logistics, healthcare, construction, manufacturing, education, and financial services."
          action={{ to: '/industries', label: 'View all industries' }}
        />
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {homeIndustries.map((item) => (
            <RevealStaggerItem key={item.label}>
              <Link to={item.to} className="home-card group overflow-hidden">
                <div className="relative h-[180px] overflow-hidden bg-paper-100">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-[20px]">
                  <p className="text-base font-semibold text-ink-900">{item.label}</p>
                  <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{item.body}</p>
                  <span className="mt-[16px] inline-flex items-center gap-[6px] text-xs font-semibold text-brand">
                    Explore
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </RevealStaggerItem>
          ))}
      </RevealStagger>
    </AnimatedHomeSection>
  )
}
