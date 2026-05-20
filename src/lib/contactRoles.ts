import { openPositionRoleLabels } from '@/lib/careersData'

export const contactRoles = [
  'sales-engineer',
  'co-founder-founding-engineer',
  'business-representative',
  'founding-full-stack-engineer',
  'delivery-program-manager',
  'solutions-consultant',
  'us-engineer',
  'global-engineer',
  'client',
  'other',
] as const

export type ContactRole = (typeof contactRoles)[number]

const roleSet = new Set<string>(contactRoles)

export function isContactRole(value: string): value is ContactRole {
  return roleSet.has(value)
}

export const contactRoleLabels: Record<ContactRole, string> = {
  ...openPositionRoleLabels,
  'us-engineer': 'U.S.-based engineer (general)',
  'global-engineer': 'Engineer outside the U.S. (general)',
  client: 'Hiring manager / client',
  other: 'Other',
}

export const openPositionContactRoles: ContactRole[] = [
  'co-founder-founding-engineer',
  'sales-engineer',
  'business-representative',
  'founding-full-stack-engineer',
  'delivery-program-manager',
  'solutions-consultant',
]
