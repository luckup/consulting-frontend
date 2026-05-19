export function PageLoader() {
  return (
    <div
      className="container-pad flex min-h-[40vh] items-center justify-center py-[80px]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="h-[32px] w-[32px] animate-spin rounded-full border-2 border-ink-900/15 border-t-brand" />
    </div>
  )
}
