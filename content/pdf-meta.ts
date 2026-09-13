/**
 * Footer metadata for Playwright PDF templates.
 * Node scripts cannot resolve @/ path aliases, so this file has no imports.
 * Keep in sync with content/cv.ts and content/proposal.ts.
 */
export const proposalPdfFooter = {
  artistName: 'Borshon Mondol',
  proposalTitle: 'The Weave of Memory and the Inner Cage',
  studentId: 'B210108011',
} as const;

export const cvPdfFooter = {
  artistName: 'Borshon Mondol',
  title: 'Curriculum Vitae',
  email: 'borshonm563@gmail.com',
} as const;
