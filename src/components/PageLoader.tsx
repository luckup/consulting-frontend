export function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading page">
      <div className="page-loader-hero page-loader-shimmer" aria-hidden />
      <div className="container-pad py-[56px] sm:py-[72px]">
        <div className="max-w-3xl space-y-[16px]">
          <div className="page-loader-line page-loader-shimmer h-[12px] w-[120px] rounded-[4px]" aria-hidden />
          <div className="page-loader-line page-loader-shimmer h-[32px] w-[85%] max-w-[520px] rounded-[4px] sm:h-[40px]" aria-hidden />
          <div className="page-loader-line page-loader-shimmer h-[16px] w-[70%] max-w-[420px] rounded-[4px]" aria-hidden />
          <div className="page-loader-line page-loader-shimmer mt-[8px] h-[44px] w-[160px] rounded-[4px]" aria-hidden />
        </div>
        <div className="mt-[48px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="page-loader-card page-loader-shimmer rounded-[4px]"
              style={{ animationDelay: `${i * 120}ms` }}
              aria-hidden
            />
          ))}
        </div>
      </div>
      <span className="sr-only">Loading page…</span>
    </div>
  )
}
