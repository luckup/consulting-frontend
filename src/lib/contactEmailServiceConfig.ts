/** MoonSofts transactional email API (client-side; token is scoped to contact sends). */
export const EMAIL_SERVICE_URL =
  import.meta.env.VITE_EMAIL_SERVICE_URL?.trim() ||
  'https://email-service-hazel-three.vercel.app/api/send/moonsofts-prod'

export const EMAIL_SERVICE_TOKEN =
  import.meta.env.VITE_EMAIL_SERVICE_TOKEN?.trim() || 'moonsofts-prod'

export const EMAIL_FROM = 'yuji@moonsofts.net'
