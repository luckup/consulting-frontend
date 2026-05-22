import { CONTACT_INBOX } from '@/lib/contactEmail'

export const CONTACT_PHONE = '+16175198885'
export const CONTACT_PHONE_DISPLAY = '+1 (617) 519-8885'
export const CONTACT_ADDRESS = '2709 17th Ave S, Minneapolis, MN, US'
export const CONTACT_ADDRESS_LINES = ['2709 17th Ave S', 'Minneapolis, MN, US'] as const

/** 30-minute consulting intro — opens in a new tab (Calendly). */
export const CONSULTING_CALENDLY_URL = 'https://calendly.com/yuji-moonsofts/30min'
export const CONSULTING_CALENDLY_LABEL = 'Schedule a consultation'

export const contactInfo = {
  email: CONTACT_INBOX,
  phone: CONTACT_PHONE,
  phoneDisplay: CONTACT_PHONE_DISPLAY,
  address: CONTACT_ADDRESS,
  addressLines: CONTACT_ADDRESS_LINES,
  calendlyUrl: CONSULTING_CALENDLY_URL,
  calendlyLabel: CONSULTING_CALENDLY_LABEL,
} as const
