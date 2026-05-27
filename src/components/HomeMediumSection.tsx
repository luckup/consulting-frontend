import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { externalLinkProps } from '@/lib/navLinks'
import { MOONSOFTS_MEDIUM_PROFILE, mediumPosts } from '@/lib/mediumPosts'

export function HomeMediumSection() {
  return (
    <AnimatedHomeSection id="medium" className="scroll-mt-[100px]">
      <RevealItem>
        <HomeSectionHeader
          label="Writing"
          title="Long-form insights on Medium"
          description="Strategy, MVPs, remote culture, and the roadmap for a trust-first software consulting company — published on MoonSofts at Medium."
          trailing={
            <a
              href={MOONSOFTS_MEDIUM_PROFILE}
              {...externalLinkProps}
              className="inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
            >
              Open Medium profile
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[20px] sm:grid-cols-2 xl:grid-cols-3">
        {mediumPosts.map((post) => (
          <RevealStaggerItem key={post.url}>
            <a
              href={post.url}
              {...externalLinkProps}
              className="home-card group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-paper-100">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-[22px] sm:p-[24px]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">Medium</p>
                <p className="mt-[6px] text-xs text-ink-500">{post.date}</p>
                <h3 className="mt-[12px] text-base font-semibold leading-snug text-ink-900 group-hover:text-brand sm:text-lg">
                  {post.title}
                </h3>
                <p className="mt-[10px] flex-1 text-sm leading-relaxed text-ink-600 line-clamp-4">{post.summary}</p>
                <span className="mt-[18px] inline-flex items-center gap-[8px] text-sm font-semibold text-brand">
                  Read on Medium
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-[4px]" />
                </span>
              </div>
            </a>
          </RevealStaggerItem>
        ))}
      </RevealStagger>
    </AnimatedHomeSection>
  )
}
