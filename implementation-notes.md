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

### Blind-spot pass findings that change the build
- **/privacy page added to sitemap** (PDPA: dual-language BM+EN privacy notice required once we
  collect leads via forms/WhatsApp CTAs).
- **Artwork images blocked on artist image licenses** — no artwork photo goes live until the
  artist has signed a marketing-image license. Placeholder treatment until then.
- **SSM registration number** must appear in the site footer once registered — footer template
  reads it from facts data (renders nothing while null).
- Competitive scan validated: per-artwork WhatsApp CTA, wall-preview service, and trade page are
  all unclaimed in the Klang Valley market. Price *bands* recommended (0/8 competitors show prices).

### Persona-panel findings (2026-07-07) — build requirements regardless of direction
- Direction D "Warm Editorial" (C structure × B warmth) recommended and added to shootout; owner decides.
- "Dark luxury" was ChatGPT's invention, not the owner's brief ("minimalist luxury" was his words).
- Hard requirements from panel: price bands on artwork cards; "Free · no obligation · 48h" beside
  every Wall Preview CTA; "For Designers" in top nav; artist name + exhibition CV on homepage;
  top strip "Open today · Free entry · First floor"; collection launches only with photographed works.

## 2026-07-07 — D-prototype build (10 pages)
- Built pages: / /collection /artists /artists/[slug] /preview /designers /about
  /how-buying-works /privacy. Data-driven from src/data/{facts,artworks,artists}.json.
- DEVIATION from plan: plain JSON data modules instead of Astro content collections —
  simpler, typed enough at this scale, zero API risk. Revisit if catalog grows past ~50 works.
- Fonts: system stacks (Iowan Old Style/Palatino serif; Avenir/system sans) — no webfont,
  Android falls back to Georgia. Revisit at launch if brand needs exact faces.
- facts.launch=false → every page carries noindex; flip to true only when launch gates pass:
  (1) ≥1 real artwork photo, (2) WhatsApp number confirmed, (3) hours confirmed,
  (4) artist image licenses signed.
- Placeholder tiles use real stock-table dimensions & price bands (rows 2,4,5,6,8,9,13);
  titles kept "Untitled" — NO invented titles/artists. Ethereal Form is the only named work.
- Wall Preview premium tiers show "Ask us" — no prices exist in KB; owner to set.
- Designer commissions: qualitative only ("ask us for current terms") — no % exists in KB.
- Privacy notice: EN + BM drafted, marked as draft pending owner/lawyer review.
- Analytics: enable Cloudflare Web Analytics via dashboard toggle (Pages project → Metrics) —
  no code change needed.
- Verified: build clean; 0 fake-artwork names, 0 private strings in dist; noindex on 10/10
  pages; JSON-LD ArtGallery present; all routes 200 on preview server.
