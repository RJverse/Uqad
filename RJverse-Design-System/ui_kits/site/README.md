# RJverse · Site UI kit

A clickable recreation of the RJverse consultant website — bilingual (EN / AR with auto RTL flip).

## What's here

| Component | What it does |
|---|---|
| `SiteHeader.jsx` | Sticky top nav with logo, links, EN/AR language toggle, primary CTA. Becomes blurred-white on scroll. |
| `Hero.jsx` | Asymmetric two-column hero — headline + CTAs + trust stats on the left, mini Power BI dashboard mock on the right. Two offset blue radial-blur blobs in the background. |
| `Services.jsx` | Three feature cards — Dashboards, Automation, Workshops. Lucide icon chips, RJ Blue heading per card. |
| `Workshops.jsx` | Three upcoming-workshop rows with date / seat-count progress bar / register button. Click-thru: registering swaps the button to a success state. |
| `About.jsx` | Portrait placeholder (RJ initials in a circle on a Sky Blue frame) + bio + credential checklist. Floating badge in RJ Blue with glow. |
| `Contact.jsx` | Dark-section contact form with bilingual labels, segmented "what's the ask?" chip selector, and a sent-state confirmation. Includes `<Footer>` for the dark page footer. |
| `Icon.jsx` | Lucide-style stroke icons used throughout the kit, all rendered in `currentColor`. |

All components live under `window.*` after their script loads so other files can reference them.

## Run it

Open `index.html`. The toggle in the top-right switches EN ↔ AR; the whole page mirrors, the type stack swaps (Inter → Cairo, IBM Plex Sans → Changa), and copy translates.

## What's intentionally simple

- No real router — the nav scrolls to in-page anchors.
- No real form submission — clicking _Send_ flips a local state.
- No real workshop data — three hard-coded items.
- The portrait is a placeholder until photography is provided.
- The dashboard mock is decorative (one static bar chart + two KPIs) — it sells the _idea_ of "Power BI by RJ", not a live integration.

## Notes for the next iteration

- WhatsApp deeplink (`https://wa.me/...`) should be wired to the floating FAB once RJ confirms the number.
- The Workshops list should pull from a real CMS / Airtable / Notion eventually.
- Add a `/work` page with case studies (currently absent — no source material yet).
