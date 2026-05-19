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

The browser tab icon is `public/favicon.png` (company logo). It is updated when you run `npm run cdn:prepare`.

## Project layout

```
src/
  components/   UI sections, layout, shared components
  pages/        Route pages
  lib/          Data, CDN helpers, siteImages
  layouts/      MainLayout, nav, footer
```
