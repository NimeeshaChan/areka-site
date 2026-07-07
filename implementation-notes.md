# Implementation Notes — areka-site

Running log of deviations from plan, discovered edge cases, and mid-build decisions.
(Plan reference: private planning docs live outside this repo.)

## 2026-07-07

- Scaffolded Astro 7 (minimal template) + Tailwind 4 (vite plugin). Node >= 22.12 required.
- Content firewall added to `.gitignore`: no PDFs/DOCX/KB folders can ever be committed here.
- Site is inquiry-based by design decision — no e-commerce checkout; all CTAs route to WhatsApp.
- Contact number, opening hours, established year are PENDING owner confirmation — rendered
  from `src/data/facts.json` with explicit placeholder values until confirmed.
- Design direction pending owner review of 3 prototype directions (dark luxury / warm gallery /
  minimal editorial).
