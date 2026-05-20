import { lazy, type ComponentType } from 'react'

export function lazyPage<T extends Record<string, ComponentType<unknown>>>(
  factory: () => Promise<T>,
  exportName: keyof T,
) {
  return lazy(() => factory().then((module) => ({ default: module[exportName] as ComponentType<unknown> })))
}
