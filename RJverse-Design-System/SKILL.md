---
name: rjverse-design
description: Use this skill to generate well-branded interfaces and assets for RJverse — a bilingual (Arabic/English) Saudi consultancy brand focused on digitalization (Power BI, Power Automate, RPA) and personal development. Use for production code, throwaway prototypes, marketing pages, slide decks, LinkedIn posts, dashboards, and workshop material.
user-invocable: true
---

# RJverse Design Skill

Read the `README.md` file in this skill folder first — it covers the full brand voice, content rules, color + type system, visual foundations, iconography, and a list of open questions. Then explore the other files:

- `colors_and_type.css` — drop-in CSS with the full token system (colors, type, spacing, shadows, radii, motion).
- `assets/` — brand logo (full, mark, wordmark) and color palette swatch.
- `preview/` — example cards showing tokens in use.
- `ui_kits/site/` — JSX components and a running `index.html` mock of the RJverse consultant website.

## Defaults

- Light theme by default (`--rj-soft-cloud` page, `--rj-blue-500` headings + CTAs).
- Bilingual EN/AR — Arabic is the **primary** voice; English is secondary. Set `dir="rtl"` on Arabic blocks; the type stack swaps automatically.
- Voice = **Approachable Expert** — plain language, never jargon, Saudi-dialect Arabic, conversational English.
- Iconography = **Lucide** (CDN), 1.75px stroke, `currentColor`.
- Emojis only as **section anchors** (🌌 🔧 🎯 💎 🧠 🏁 🏷️ 📊 ⚡), never inline in UI.

## When invoked

If the user asks for visual artifacts (slides, mocks, throwaway prototypes, social posts, dashboards), **copy assets out** of this folder and build static HTML files. If they're working on production code, copy assets in and use `colors_and_type.css` as the foundation.

If the user invokes this skill with no clear ask, greet them in RJverse voice and ask what they want to build — a workshop landing page? A dashboard? A LinkedIn carousel? A consulting proposal? Then ask 3–4 sharp questions (audience, language EN/AR/both, length, must-include sections) before building. Output HTML artifacts or production code depending on the need.

> _Digital solutions, crafted for your own universe._
