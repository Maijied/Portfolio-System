/**
 * Shared Playwright PDF header/footer templates.
 * Node scripts cannot resolve @/ path aliases — keep this file import-free.
 */

/** Matches print.css label styling and PrintHeader component. */
export const pdfChromeFont =
  "var(--font-body-loaded, 'Inter'), -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export const pdfChromeMute = '#8a8580';
export const pdfChromeLine = '#cfc9c2';

export function escapePdfHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildRunningHeaderTemplate(left: string, right: string): string {
  return `<div style="width:100%;box-sizing:border-box;font-size:6.5pt;letter-spacing:0.08em;text-transform:uppercase;color:${pdfChromeMute};border-bottom:1px solid ${pdfChromeLine};padding:0 18mm 2.5mm;font-family:${pdfChromeFont};"><table style="width:100%;border-collapse:collapse;"><tr><td style="text-align:left;white-space:nowrap;padding:0;">${left}</td><td style="text-align:right;white-space:nowrap;padding:0;">${right}</td></tr></table></div>`;
}

export function buildRunningFooterTemplate(
  left: string,
  center: string,
  right: string,
): string {
  return `<div style="width:100%;box-sizing:border-box;font-size:8pt;color:${pdfChromeMute};border-top:1px solid ${pdfChromeLine};padding:2mm 18mm 0;font-family:${pdfChromeFont};"><table style="width:100%;border-collapse:collapse;"><tr><td style="text-align:left;white-space:nowrap;padding:0;">${left}</td><td style="text-align:center;white-space:nowrap;padding:0 4mm;">${center}</td><td style="text-align:right;white-space:nowrap;padding:0;">${right}</td></tr></table></div>`;
}
