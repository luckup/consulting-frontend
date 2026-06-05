import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { ScheduleConsultationButton } from '@/components/NavMenuLink'
import { RevealItem } from '@/components/SectionReveal'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useI18n } from '@/i18n/useI18n'
import { getHomeFaqItems } from '@/i18n/localized/data'
import { getMessages } from '@/i18n/translate'
import { EASE_OUT, faqItemReveal, faqPanelTransition } from '@/lib/motionPresets'

const FAQ_VIEWPORT = { once: true, amount: 0.2, margin: '0px 0px -8% 0px' } as const

export function HomeFaqSection() {
  const { locale, t } = useI18n()
  const homeFaqItems = getHomeFaqItems(locale)
  const faqHeader = getMessages(locale).homeSections.faq
  const [openId, setOpenId] = useState<string | null>(homeFaqItems[0]?.id ?? null)
  const reduced = usePrefersReducedMotion()

  return (
    <AnimatedHomeSection id="faq" className="scroll-mt-[100px]">
      <RevealItem>
        <HomeSectionHeader
          label={faqHeader.label}
          title={faqHeader.title}
          description={faqHeader.description}
          action={{ to: '/contact', label: faqHeader.action }}
        />
      </RevealItem>

      <div className="home-card-soft mx-auto mt-[32px] max-w-3xl divide-y divide-ink-900/10 overflow-hidden">
        {homeFaqItems.map((item, index) => {
          const open = openId === item.id

          if (reduced) {
            return (
              <div key={item.id} className="bg-paper-50">
                <button
                  type="button"
                  id={`faq-${item.id}`}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${item.id}`}
                  className="flex w-full items-center justify-between gap-[16px] px-[20px] py-[18px] text-left sm:px-[24px] sm:py-[20px]"
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span className="text-base font-semibold text-ink-900">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                {open ? (
                  <div id={`faq-panel-${item.id}`} role="region" aria-labelledby={`faq-${item.id}`}>
                    <p className="border-t border-ink-900/10 px-[20px] pb-[20px] pt-[12px] text-sm leading-relaxed text-ink-600 sm:px-[24px] sm:pb-[24px]">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            )
          }

          return (
            <motion.div
              key={item.id}
              className="bg-paper-50"
              initial="hidden"
              whileInView="visible"
              viewport={FAQ_VIEWPORT}
              variants={faqItemReveal}
              transition={{ delay: index * 0.05, duration: 0.38, ease: EASE_OUT }}
            >
              <button
                type="button"
                id={`faq-${item.id}`}
                aria-expanded={open}
                aria-controls={`faq-panel-${item.id}`}
                className="flex w-full items-center justify-between gap-[16px] px-[20px] py-[18px] text-left transition-colors duration-200 hover:bg-paper-100/80 sm:px-[24px] sm:py-[20px]"
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span className="text-base font-semibold text-ink-900">{item.question}</span>
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.32, ease: EASE_OUT }}
                  className="shrink-0 text-brand"
                  aria-hidden
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={faqPanelTransition}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: -6 }}
                      animate={{ y: 0 }}
                      exit={{ y: -4 }}
                      transition={{ duration: 0.28, ease: EASE_OUT }}
                      className="border-t border-ink-900/10 px-[20px] pb-[20px] pt-[12px] text-sm leading-relaxed text-ink-600 sm:px-[24px] sm:pb-[24px]"
                    >
                      {item.answer}
                    </motion.p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      <RevealItem>
        <div className="mx-auto mt-[32px] flex max-w-3xl flex-col items-center gap-[12px] sm:flex-row sm:justify-center">
          <ScheduleConsultationButton variant="primary" showIcon />
          <Link to="/services" className="btn btn-secondary px-[24px] py-[12px]">
            {t('ui.viewConsultingServices')}
          </Link>
        </div>
      </RevealItem>
    </AnimatedHomeSection>
  )
}
