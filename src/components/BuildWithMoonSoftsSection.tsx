import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function BuildWithMoonSoftsSection() {
  return (
    <section className="bg-brand-700">
      <div className="container-pad py-[56px] sm:py-[72px] lg:py-[80px]">
        <div className="flex flex-col gap-[32px] lg:flex-row lg:items-center lg:gap-[48px] xl:gap-[64px]">
          <h2 className="shrink-0 text-3xl font-bold leading-tight text-[white] sm:text-4xl lg:min-w-[220px] lg:text-[2.75rem]">
            Build with
            <br />
            MoonSofts
          </h2>

          <div className="min-w-0 flex-1 space-y-[24px] border-t border-moon-sky/35 pt-[32px] text-base leading-[1.75] text-[white]/95 sm:text-lg lg:border-l lg:border-t-0 lg:border-moon-sky/35 lg:pl-[48px] lg:pt-0">
            <p>
              We&apos;re a software development team—but we&apos;re not just any software development team. We strive
              to build products that people trust and enjoy using. Our clients have ambitious ideas that can transform
              commerce, logistics, and other industries, and we apply our engineering talent to turn those visions into
              reality.
            </p>
            <p>
              Yes, we deliver award-worthy platforms and integrations. But we also partner with real teams who want to
              solve real problems—the kind the world faces every day—with thoughtful, reliable technology.
            </p>
            <div className="flex flex-wrap items-center gap-[24px] pt-[8px]">
              <Link
                to="/about"
                className="inline-flex items-center gap-[8px] text-sm font-semibold text-moon-sky transition-colors duration-300 hover:text-[white]"
              >
                About MoonSofts
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-[8px] text-sm font-semibold text-moon-sky transition-colors duration-300 hover:text-[white]"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
