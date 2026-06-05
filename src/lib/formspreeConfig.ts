/** Public Formspree form id (safe in client bundle). Override with VITE_FORMSPREE_FORM_ID. */
export const DEFAULT_FORMSPREE_FORM_ID = 'xlgkdqbp'

export function getFormspreeFormId(): string {
  return import.meta.env.VITE_FORMSPREE_FORM_ID?.trim() || DEFAULT_FORMSPREE_FORM_ID
}
