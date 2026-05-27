# MoonSofts — Frontend

Marketing site for MoonSofts. React 18, TypeScript, Vite, Tailwind CSS.

Site images are served from **Vercel Blob** (not committed to Git).

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run dev` runs a soft sync first so `public/brand/logo.png` exists for the tab favicon when possible (local `src/assets/brand/logo.png` or `VITE_CDN_BASE_URL` in `.env`). If that step warns and skips, add assets or CDN URL, or run `npm run cdn:prepare`.

## Environment

| File | Purpose |
|------|---------|
| `.env` | Local dev |
| `.env.production` | Production build (not committed) |
| `.env.local` | Secrets, e.g. `BLOB_READ_WRITE_TOKEN` (not committed) |

Required for builds:

```env
VITE_CDN_BASE_URL=https://kmbR6bCYbcA9kB47.public.blob.vercel-storage.com
```

Copy from `.env.example` or `.env.production.example` if needed.

## SEO

- **Route titles & descriptions** live in `src/lib/routeMeta.ts` (`resolvePageSeo`). They are applied on every navigation via `DocumentTitle` (meta description, Open Graph, Twitter cards, `link rel="canonical"`, `hreflang`, and JSON-LD for Organization / WebSite / WebPage, plus `NewsArticle` on news posts).
- **No `meta name="keywords"`**: search engines ignore it; important phrases belong in visible headings and body copy. `DocumentTitle` strips any legacy keywords tag on route change.
- **Breadcrumbs in structured data**: inner routes append a `BreadcrumbList` graph (see `src/lib/seoBreadcrumbs.ts`) alongside the main JSON-LD block.
- **NewsArticle dates**: when a news item has a parseable display date, `datePublished` / `dateModified` are emitted for richer article snippets (`src/lib/newsDate.ts`).
- Set **`VITE_SITE_URL`** (no trailing slash) in `.env.production` so canonicals and structured data use your public domain instead of only the runtime origin.
- **`public/robots.txt`** and **`public/sitemap.xml`** use `https://moonsofts.com` as the default host; update both if your live domain differs (or automate sitemap generation later).

## Images (CDN)

High-resolution PNGs live on [Vercel Blob](https://vercel.com/docs/vercel-blob/public-storage). Paths are defined in `src/lib/siteImages.cdn.ts`.

**First-time upload**

1. Put originals under `src/assets/` (see `scripts/cdn-asset-manifest.json`).
2. `npm run cdn:prepare` → creates `cdn-upload/`.
3. Add `BLOB_READ_WRITE_TOKEN` to `.env.local` (from Vercel → Storage → Blob store).
4. `npm run vercel:blob:upload`
5. Confirm a URL works, e.g.  
   `https://kmbR6bCYbcA9kB47.public.blob.vercel-storage.com/brand/logo.png`

**Re-upload after changing images:** repeat steps 2–4.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build (requires `VITE_CDN_BASE_URL`) |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run cdn:prepare` | Build `cdn-upload/` from `src/assets/` |
| `npm run cdn:manifest` | List CDN paths and URLs |
| `npm run vercel:blob:upload` | Upload `cdn-upload/` to Vercel Blob |

## Deploy (Vercel)

1. Set project **Root Directory** to `frontend`.
2. Add env var: `VITE_CDN_BASE_URL` = your Blob public base URL (same as above).
3. Build command: `npm run build`  
   Output: `dist`

## Git

`src/assets/**/*.png` and `cdn-upload/` are gitignored so pushes stay small. Only application code is in the repo.

The browser tab icon is `public/favicon.svg`: it loads **`public/brand/logo.png`** (your `logo.png`) and applies an SVG filter so it renders **white** on a dark tile. Run `npm run cdn:prepare` when `src/assets/brand/logo.png` exists so that file is copied into `public/brand/logo.png` for local/preview. Optional `public/favicon.png` remains a legacy PNG fallback in `index.html`.

## Project layout

```
src/
  components/   UI sections, layout, shared components
  pages/        Route pages
  lib/          Data, CDN helpers, siteImages
  layouts/      MainLayout, nav, footer
```
