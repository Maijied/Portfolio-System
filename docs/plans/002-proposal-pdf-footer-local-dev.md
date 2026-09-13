# Plan 002 — Proposal PDF Footer and Local Preview

Status: in progress (September 2026)

## Problem

The proposal PDF footer was an in-flow HTML element at the document end. It appeared only on the last page, orphaned awkwardly, and the email string could break mid-word in Chromium print.

## Goals

- Student ID `B210108011` at the bottom of **every** proposal page (not email)
- Professional running footer via Playwright `footerTemplate`
- Localhost preview workflow (`npm run local`) that kills stale servers
- Scope: proposal PDF only

## Implementation

1. Add `studentId` to `Artist` type and `content/cv.ts`
2. Remove in-flow `PrintFooter` from `app/print/proposal/page.tsx`
3. Proposal-only Playwright footer in `scripts/build-pdfs.ts`
4. Increase `.sheet--flow` bottom padding in `app/print/print.css`
5. Add `scripts/start-local.ts` and `npm run local`

## Verification

- Every proposal page shows `ID: B210108011` in footer
- Pages 4–5: no duplicate table headers, no gray gaps, no mid-page footer fragment
- CV and portfolio PDFs unchanged

## Local links

| What | URL |
|------|-----|
| Website | http://localhost:3000 |
| Proposal print route | http://localhost:3000/print/proposal/ |
| CV print route | http://localhost:3000/print/cv/ |
