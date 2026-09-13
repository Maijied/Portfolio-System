# Media drop-in

One folder per project, named after the project slug. The filenames are already
wired up in `content/projects/*.ts`, so dropping a file at the path listed there
is the only step needed — no code change.

Until a file exists, the site renders a labelled placeholder at the correct
aspect ratio and prints the expected path inside it, so you can read the required
filename straight off the page.

## Expected files

| Project              | Folder                       | Files                                                    |
| -------------------- | ---------------------------- | -------------------------------------------------------- |
| Liminal Mass         | `liminal-mass/`              | `01.jpg` – `04.jpg`, `concept-01.jpg`, `process-01.jpg`, `process-02.jpg` |
| Fold Studies         | `fold-studies/`              | `01.jpg` – `03.jpg`, `process-01.jpg`                    |
| Soft Architectures   | `soft-architectures/`        | `01.jpg` – `03.jpg`, `geometry-01.jpg`                   |
| Render / Refuse      | `render-refuse/`             | `01.jpg`, `02.jpg`, `process-01.jpg`                     |
| The Frozen Liquidity | `frozen-liquidity/`          | `01.jpg` (concept render)                                |

## Preparation

- Export at roughly 2400px on the long edge. The site is a static export with
  image optimisation disabled, so the file you drop in is the file the browser
  downloads.
- Keep the aspect ratio matching the `aspect` value in the project file, or update
  that value. It reserves layout space and drives the placeholder box.
- JPEG at quality 80 – 85 for photographic work, WebP if you prefer; update the
  extension in the project file to match.
- The PDF pipeline uses these same files, so anything below about 1600px on the
  long edge will look soft in print.
