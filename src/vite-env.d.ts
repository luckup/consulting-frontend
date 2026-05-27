/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_CDN_BASE_URL?: string
  /** Public site origin, no trailing slash (canonical, Open Graph, JSON-LD). Example: https://moonsofts.com */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
