/** Deep-merge locale catalogs; overlay wins. Arrays and primitives replace entirely. */
export function deepMerge<T>(base: T, overlay: T): T {
  if (overlay === null || overlay === undefined) return base
  if (Array.isArray(base) || Array.isArray(overlay)) return overlay
  if (typeof base !== 'object' || typeof overlay !== 'object') return overlay

  const result = { ...(base as Record<string, unknown>) }
  for (const key of Object.keys(overlay as Record<string, unknown>)) {
    const b = (base as Record<string, unknown>)[key]
    const o = (overlay as Record<string, unknown>)[key]
    if (o === undefined) continue
    result[key] = deepMerge(b, o)
  }
  return result as T
}
