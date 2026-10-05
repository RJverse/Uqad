# RJverse Design System

> 🌌 **Digital solutions, crafted for your own universe.**
> حلول رقمية، لعالمك الخاص.

RJverse is the personal brand of **RJ**, a Saudi consultant focused on **digitalization** (Power BI, Power Automate, RPA, dashboards) and **personal development**. Audience is bilingual (Arabic-first, English-secondary) across MENA — split between **ambitious individuals upskilling** and **forward-thinking companies** implementing digital solutions or upskilling teams.

This folder is the canonical visual + content system for everything that ships under the RJverse name: marketing site, course/academy pages, LinkedIn posts, slide decks, workshop materials, and dashboards.

---

## Sources

The brand was provided as a single brief document. There is no codebase or Figma yet — the system below is **derived from the brief** plus typical patterns for a consultant/educator personal brand.

- `uploads/RJverse.docx` — brand core document (mission, audience, value prop, personality, vision, color palette, type scale, logo). Bilingual EN/AR.
- `assets/image1.png` / `assets/image2.png` — original embedded brand assets from the brief (logo and color palette swatch).

> ⚠️ **Caveat:** If you have a website / Figma / deck template, drop them in `uploads/` and ping me — UI kits and slides should be re-derived from real source, not invented.

---

## File index

| File / Folder | What it is |
|---|---|
| `README.md` | this file — orientation + content + visual rules |
| `SKILL.md` | Agent Skills front-matter so this folder works as a Claude Code skill |
| `colors_and_type.css` | CSS custom properties for the full color + type system |
| `fonts/` | webfont references (Google Fonts) — see below |
| `assets/` | logo (full, mark, wordmark), color palette swatch, original brief assets |
| `preview/` | small HTML cards used to populate the Design System tab |
| `ui_kits/site/` | RJverse marketing/consultant website kit — JSX components + `index.html` |
| `slides/` | (omitted — no slide template was provided) |

---

## Content fundamentals

**Voice = Approachable Expert.** RJ knows the technical stuff cold (Power BI, automation, RPA) but refuses to hide behind jargon. Every line should feel like a knowledgeable friend explaining something at a coffee table — never a corporate brochure.

### Four personality pillars (from the brief)
1. **Approachable Expert** — deep technical chops, plain language.
2. **Local × Global** — Saudi-rooted, globally inspired.
3. **Creative Pragmatist** — solves the problem, doesn't over-engineer.
4. **Passionate Educator** — teaching others is the mission, not a side effect.

### Bilingual: Arabic-first

The brand is genuinely bilingual. Arabic copy uses **Saudi spoken dialect** (Khaleeji), not formal MSA — words like _"يبغى"_, _"مو"_, _"ليش"_, _"عشان"_ are the native register. English copy is American-conversational and direct.

- **Arabic →** dialect, warm, colloquial. _"نتكلم بلغة الناس، مو بلغة التقنية المعقدة."_
- **English →** plain, declarative, second-person. _"RJverse simplifies the complex."_ / _"You don't need a PhD to use them."_

Never auto-translate one into the other. Each language has its own voice. Set `dir="rtl"` for Arabic blocks — the type system swaps font stacks automatically.

### Tone rules
- **Casing:** Sentence case for body and most headings. Brand name is always **`RJverse`** — capital R, capital J, lowercase verse, no space, no period. The brandmark (RJ) is always uppercase.
- **Person:** First-person plural ("we/نحن") for the brand voice. Direct second-person ("you/أنت") when addressing the reader. Avoid third-person corporate-speak.
- **Jargon:** Tool names are fine and on-brand (`Power BI`, `Power Automate`, `RPA`, `dashboards`). Buzzwords are not (`synergy`, `disruptive`, `solutions partner`).
- **Punctuation:** Em-dashes for asides — like this. No exclamation marks unless genuinely celebratory. No marketing ellipses (`...`).
- **Numbers:** Spell out one through nine in prose; use digits for everything else and always in stats / data callouts.

### Emoji usage

**Yes — selectively.** The brief itself uses emoji as **section anchors**: 🌌 brand identity, 🔧 mission, 🎯 audience, 💎 value, 🧠 personality, 🏁 vision, 🏷️ tagline, 🎨 design. They function more like icons than emotional reactions. Use the same vocabulary:

| Emoji | Meaning in RJverse |
|---|---|
| 🌌 | the universe / the brand itself |
| 🔧 | mission, tooling, how-it-works |
| 🎯 | audience, focus, targets |
| 💎 | value, what makes us different |
| 🧠 | personality, learning, ideas |
| 🏁 | vision, long-term goals |
| 🏷️ | tagline, naming, labels |
| 🎨 | design, color, styling |
| 📊 | data, dashboards, BI |
| ⚡ | automation, speed, RPA |

Use **one emoji per section** as a leading anchor — never sprinkled inside sentences, never in CTAs or buttons, never two in a row.

### Sample copy (do / don't)

| ✅ On brand | ❌ Off brand |
|---|---|
| "Stop fighting Excel. Start owning your data." | "Leverage cutting-edge BI solutions to drive enterprise outcomes." |
| "Dashboards that make decisions, not noise." | "Best-in-class analytics platform 🚀🚀🚀" |
| _"حلول رقمية، لعالمك الخاص."_ | _"حلولٌ تقنيّةٌ متكاملةٌ لمؤسستكم الموقّرة."_ |
| "Built in Riyadh. Useful everywhere." | "Globally recognized industry leader." |

### Hashtag style
Always camel-cased, in `--rj-blue-500`, no spaces. Examples: `#RJverse` `#PowerBI` `#PowerAutomate` `#حلول_رقمية` `#تطوير_ذاتي`. Used in social posts and as visual accents in layouts, not as in-body links.

---

## Visual foundations

### Color

The palette is **monochromatic blue, light by default.** Backgrounds float between three near-whites (`Soft Cloud #F4FAFF`, `Light Mist Blue #F0F4FF`, `Modern Gray #F8F8F8`). One single hue — RJ Blue `#5465FF` — does all the heavy lifting for CTAs, headings, and brand moments. Dark mode lives in **`Midnight Navy #0B1C3D`** — used for footers, hero sections, and contrast moments.

**Distribution (60/30/10):**
- **60% — Soft Cloud / Light Mist / Modern Gray** — page surface, sections.
- **30% — Sky Blue `#9BB1FF`** — cards, containers, secondary surfaces, dashboard panels.
- **10% — RJ Blue `#5465FF`** — CTAs, headings, logo, hashtags, links, key moments.

Indigo Tint `#788BFF` is the **accent support** between the two — used for icons, hover states, chart highlights, captions.

**Imagery vibe:** when photography is used, it should feel **bright, slightly cool, with airy whites** — never warm/sepia, never high-contrast moody. Think Saudi tech-conference photography: clean, well-lit, blue-tinted whites. Grain and heavy filters are off-brand.

### Typography

- **Display + Headings (EN):** `Inter` — extrabold/bold for brand and H1/H2, in RJ Blue.
- **Subheadings (EN):** `Poppins` Semi-Bold, in Ink.
- **Body (EN):** `IBM Plex Sans` Regular for paragraphs, Light for captions.
- **Display + Headings (AR):** `Cairo` — same role as Inter on the Arabic side.
- **Subheadings (AR):** `Tajawal` Semi-Bold.
- **Body (AR):** `Changa` Regular / Light.

The **headline color rule** is the brand's defining type signature: H1 and H2 are set in **RJ Blue, not black**. Body copy is `#1A1A1A` (a rich dark gray, intentionally not pure black — softer on screen).

> ⚠️ **Font status:** **Inter, IBM Plex Sans, Cairo, and Changa** are self-hosted via `fonts/*.ttf` (variable). **Poppins and Tajawal** are still loaded from Google Fonts CDN — drop licensed `.ttf`s in `fonts/` if you want full self-hosting.

### Spacing & layout
- **Scale:** 4px base. Tokens `--space-1` (4px) through `--space-24` (96px) in `colors_and_type.css`.
- **Section rhythm:** 96px vertical between major sections on desktop, 64px on tablet, 48px on mobile.
- **Max content width:** 1200px with 24–32px gutter.
- **Cards:** lots of breathing room — 24–32px internal padding minimum.
- **Density:** lean toward **generous whitespace**. The brief's whole pitch is clarity over noise; layouts must feel calm.

### Corners & shapes
- **Radius:** `12px` is the default (`--radius-md`); `18px` for cards (`--radius-lg`); `24px+` for hero containers; pill (`999px`) for tags, badges, primary buttons. Sharp corners (`0px`) are off-brand except for full-bleed images.
- **Shape motif:** the logo's X-mark is built from **overlapping curved blades** with translucency. That motif — _layered, semi-transparent blue shapes_ — can show up subtly in hero backgrounds (large blurred blue blobs at ~40% opacity).

### Cards
A standard RJverse card is:
- `background: #FFFFFF` (or `--rj-light-mist` for nested)
- `border-radius: 18px`
- `box-shadow: var(--shadow-md)` — soft navy shadow, never gray
- `border: 1px solid var(--border-1)` — optional, helps on Soft Cloud
- internal padding 24–32px

No left-border-accent cards. No double borders. No glassmorphism.

### Shadows
All shadows tint **toward midnight navy** (`rgba(11, 28, 61, …)`), never neutral gray — they sit naturally on cool backgrounds. Five steps: `xs`, `sm`, `md`, `lg`, `glow`. The **glow** variant (`rgba(84,101,255,0.45)`) is reserved for primary CTAs and the hero — it's a brand moment, not a default.

### Backgrounds
- **Default:** flat `--rj-soft-cloud`. Most pages live here.
- **Section break:** flat `--rj-light-mist`. No gradients between sections — just a color swap.
- **Hero / accent section:** large soft blue blob (radial gradient from `--rj-sky-blue` at 40% opacity, fading to transparent) positioned off-center. **One blob max per view.**
- **Dark sections (footer, testimonial banner):** flat `--rj-midnight` with `--rj-sky-blue` headings.
- **Repeating patterns / textures / grain:** **not used.** Surfaces are clean.

### Borders
- Default `1px solid var(--border-1)` (`#E4EAF7`) — barely visible.
- Stronger `var(--border-2)` for input focus rings (combined with a 3px `rgba(84,101,255,0.15)` outer halo).
- On dark, `border-on-dark: rgba(244,250,255,0.14)`.

### Hover states
**Opacity-based, never color-shift on text.** Default link hover = `opacity: 0.7` + 3px-offset underline. Primary button hover = darken to `--rj-blue-600` plus 1px lift (`translateY(-1px)`) and shadow upgrade to `--shadow-glow`. Cards hover = shadow upgrade `sm → md` and 2px lift. No hue shifts, no gradient inversions.

### Press / active states
1–2px **shrink** (`translateY(0)` from hover-lift, plus `scale(0.985)` for buttons). Color stays the same as hover. Duration `120ms` ease-out.

### Focus states
Always visible. `outline: 2px solid var(--rj-blue-500); outline-offset: 2px;` — never `outline: none`. Inputs get a 3px halo `box-shadow: 0 0 0 3px rgba(84,101,255,0.18)`.

### Transparency & blur
**Used sparingly.** The only "official" transparency moment is the **logo blade overlap** (~50–70% alpha) and the **hero blob** (~40% alpha). Backdrop blur is **off** by default — RJverse is flat, not frosted. Modals use a solid `rgba(11,28,61,0.55)` scrim, no blur.

### Animation
- **Defaults:** 200ms `cubic-bezier(.2,.7,.2,1)` for most things. Slow = 360ms for hero entries. Fast = 120ms for press states.
- **Allowed:** opacity fades, small translates (`4–8px`), gentle scales (`0.98–1`). Page-in entries stagger 60ms.
- **Spring** variant exists (`var(--ease-spring)`) for occasional playful moments — toggle switches, badges popping in.
- **Off-limits:** bouncing CTAs, parallax, scroll-jacking, marquee tickers, looping background motion. Motion should always have a reason.

### Fixed elements
- Sticky header on the site (translucent white at scroll, solid Soft Cloud at top).
- Floating "WhatsApp / contact" pill at bottom-right on consultant site (RJ Blue, glow shadow).
- No floating chat widgets covering the bottom-left.

### Layout rules
- **12-column grid** desktop, 4-column mobile, 24px gutters.
- **Asymmetric hero**: text 7-col left, visual blob 5-col right (or full-bleed centered with a single 60ch text column).
- **RTL mirror:** every layout must work flipped — never bake icon positions or shadows into a single direction.

---

## Iconography

See **`ICONOGRAPHY`** section below — short version: **Lucide** is the chosen icon library (CDN-linked), 1.75px stroke, in `currentColor` so they pick up Indigo Tint / RJ Blue naturally. The brand's **own X-mark from the logo** is the only proprietary icon — used as a section divider / bullet in some layouts.

### ICONOGRAPHY (full)

**System:** [Lucide](https://lucide.dev) — chosen because it's free, clean, has a 1.75px stroke that pairs well with Inter / Cairo, and includes excellent coverage for the brand's domain (📊 charts, ⚡ automation, 🎓 learning, 💼 business). Loaded from CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`.

**Style rules:**
- **Stroke-only**, never filled. 1.75px stroke (Lucide default).
- **Color:** `currentColor` everywhere — set color on the parent. Default = `--rj-indigo-tint` (`#788BFF`); accented = `--rj-blue-500`; on-dark = `--rj-sky-blue`.
- **Sizes:** `16` (inline), `20` (button), `24` (default in cards), `32` (feature), `48`+ (hero illustrations).
- **Container:** when an icon sits in a "feature card", wrap it in a `40×40` or `56×56` rounded-square chip — `background: var(--rj-blue-50)`, `border-radius: 12px`, icon centered in `--rj-blue-500`.

**SVGs:** the logo itself is provided as **PNG only** (`assets/logo.png`, `assets/logo-mark.png`, `assets/logo-wordmark.png`). When a higher-fidelity SVG version is available, drop it in `assets/` and update references.

**Emoji as icons:** **only at section anchors in long-form content** (per the emoji table above), never inline in UI chrome. UI elements always use Lucide.

**Unicode characters:** `→` and `←` for inline directional cues (e.g. "Learn more →") are fine and on-brand. `•` is the default list bullet color `--rj-indigo-tint`. Avoid decorative unicode (✦, ★, ♥, etc.).

---

## How to use this system

1. Link `colors_and_type.css` at the top of every page.
2. Use semantic class hooks: `.rj-brand`, `.rj-h1`, `.rj-body`, `.rj-caption`, `.rj-eyebrow`.
3. Use CSS variables for everything else: `var(--rj-blue-500)`, `var(--space-6)`, `var(--shadow-md)`, etc.
4. Set `dir="rtl"` and `lang="ar"` on Arabic blocks — type stacks swap automatically.
5. For interactive UI, copy components out of `ui_kits/site/`.

---

## Open questions for RJ

These are the gaps I'd love your input on:

1. **Self-hosted Poppins / Tajawal?** I'm self-hosting Inter, IBM Plex Sans, Cairo, and Changa — but Poppins and Tajawal still load from Google Fonts. Got licensed files?
2. **Logo SVG?** Only PNG was provided. SVG would let the mark scale crisply at every size and recolor for dark backgrounds.
3. **Photography library?** Are there portrait/event shots of you (workshops, speaking) we should standardize on for the consultant site?
4. **Actual website / Figma?** If there's an existing site or design file, I should mirror that exactly instead of inferring.
5. **Sub-brands?** Will the academy be `RJverse Academy`? `RJverse Learn`? It affects naming/logo lockups.

---

> _"نتكلم بلغة الناس، مو بلغة التقنية المعقدة."_
> We speak the language of the people, not the language of complicated tech.
