# Plan 001 — Initial Portfolio Build (archived)

Status: completed (September 2026)

## Goal

Build a static-export portfolio for **Borshon Mondol** (BFA 3D Art & Design, Jagannath University) with an editorial website, CV PDF, project proposal PDF, and portfolio PDF scaffold.

## Stack

- Next.js 15 App Router, TypeScript, Tailwind v4
- Framer Motion, Lenis, Three.js (hero only)
- Playwright PDF generation from `/print/*` routes
- `output: 'export'` for static hosting

## Architecture

### Content split

| File | Purpose |
|------|---------|
| `content/artist.ts` | Website placeholder content |
| `content/cv.ts` | Real CV data for print/PDF |
| `content/proposal.ts` | Real proposal — *The Frozen Liquidity* |
| `content/projects/index.ts` | Website placeholder projects |
| `content/projects/frozen-liquidity.ts` | Real degree project (CV only) |
| `lib/content.ts` | `getArtist()` / `getProjects()` for site; `getCvArtist()` / `getCvProjects()` for print |

### Site routes

- `/`, `/work`, `/work/[slug]`, `/about`, `/cv`, `/contact`

### Print routes

- `/print/cv/`, `/print/proposal/`, `/print/portfolio/`

### PDF pipeline

```bash
npm run build      # → out/
npm run pdfs       # → public/documents/*.pdf
npm run build:all  # both
```

## Design

Monochrome editorial aesthetic — Bodoni display + Inter body, broken grid, restrained 3D hero, scroll reveals, page transitions.

## Deliverables completed

- Full site scaffold with placeholder website content
- Real CV and proposal content in print routes
- `scripts/build-pdfs.ts` Playwright pipeline
- `docs/roadmap.md` for future CMS migration

## Known follow-ups (superseded by Plan 002)

- Proposal PDF header/footer pagination issues on pages 4–5
- Replace website placeholders with real artist content
- Portfolio PDF with real case studies
