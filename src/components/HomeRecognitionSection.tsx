import { recognitions } from '@/lib/homeContent'

export function HomeRecognitionSection() {
  return (
    <section className="border-b border-ink-900/10 bg-paper-100">
      <div className="container-pad py-[48px] sm:py-[56px]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
          Recognized for disciplined delivery
        </p>
        <div className="mt-[28px] flex gap-[16px] overflow-x-auto pb-[8px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {recognitions.map((label) => (
            <div
              key={label}
              className="flex min-w-[260px] shrink-0 items-center rounded-[4px] border border-ink-900/10 bg-paper-50 px-[24px] py-[20px] shadow-sm sm:min-w-[300px]"
            >
              <span className="mr-[12px] flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">
                MS
              </span>
              <p className="text-sm font-medium leading-snug text-ink-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
