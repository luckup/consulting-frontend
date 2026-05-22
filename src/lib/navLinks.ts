export type AppNavLink = {
  label: string
  to: string
  external?: boolean
}

export function isExternalNavLink(link: AppNavLink) {
  return link.external === true || link.to.startsWith('http://') || link.to.startsWith('https://')
}

export const externalLinkProps = {
  target: '_blank' as const,
  rel: 'noopener noreferrer' as const,
}
