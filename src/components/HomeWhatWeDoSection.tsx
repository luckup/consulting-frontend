import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { RevealItem } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getMessages } from '@/i18n/translate'

export function HomeWhatWeDoSection() {
  const { locale } = useI18n()
  const copy = getMessages(locale).homeSections.whatWeDo

  return (
    <AnimatedHomeSection id="what-we-do" className="scroll-mt-[100px]">
      <div className="grid gap-[40px] lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-[64px]">
        <RevealItem>
          <HomeSectionHeader label={copy.label} title={copy.title} />
        </RevealItem>
        <RevealItem>
          <div>
            <p className="text-base leading-relaxed text-ink-600 sm:text-lg">{copy.body}</p>
            <Link to="/services" className="link-text mt-[24px]">
              {copy.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealItem>
      </div>
    </AnimatedHomeSection>
  )
}
