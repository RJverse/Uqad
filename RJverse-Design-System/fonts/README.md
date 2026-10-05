# Fonts

Self-hosted variable brand fonts (loaded via `@font-face` in `colors_and_type.css`):

**Latin / English**
- `Inter-VariableFont_opsz_wght.ttf` + Italic — display + H1/H2 (brand color)
- `IBMPlexSans-VariableFont_wdth_wght.ttf` + Italic — body + captions

**Arabic**
- `Cairo-VariableFont_slnt_wght.ttf` — display + headings (matches Inter's role)
- `Changa-VariableFont_wght.ttf` — body + captions

**Still loaded from Google Fonts CDN (no self-hosted file yet):**
- Poppins — H3/H4 subheadings
- Tajawal — Arabic subheadings

If you have licensed `.ttf` files for Poppins / Tajawal, drop them in this folder and add matching `@font-face` blocks at the top of `colors_and_type.css`.
