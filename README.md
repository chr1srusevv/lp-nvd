# Zenstox — NVIDIA +35% landing (light redesign, es-419)

Static HTML/CSS/JS, no build. Run locally: `python -m http.server 5178` in this folder → http://localhost:5178 (branch `zenstox`; the old BrainTrade dark site is on `main`)

## Colour roles (so the page isn't all green)
| Role | Token | Used for |
|---|---|---|
| Ink | `--ink #121614` | headlines, structure, dark tape band |
| Orange | `--orange #F2611D` | every CTA, nothing else |
| NVIDIA lime | `--nv #76B900` | market data only: 35% bar, chart spike, highlighter, tape ▲ |
| Zenstox green | `--zx #00B410` | brand only: logo, trust ticks, focus ring, toggle, live dots |
| Stone | `--stone #F2F0EC` | section backgrounds, matches the photo backdrops |

Font: Poppins (Zenstox brand), loaded from Google Fonts.

## Copy source
Figma file `uY11ouz1uSs99sUWCRXM26`, frame "Desktop 1921" (node 2009:2), English, translated to es-419. Only the text was taken, not the design. Footer legal was NOT taken from there (it still says BrainTrade); the Zenstox disclaimer below is used instead.

## Hero background
- The art is no longer one background image. Cut-outs with soft transparent edges come from `assets/img/raw/hero-jacket-gpus.webp`. The hero background is the flat tone `#F0ECE8` (`--hero-tone`).
  - `hero-jacket.webp` is positioned in the container (`.hero__jacket`, height up to 780px, `left: 58.5%`), so it always sits between the text and the form. Tablet uses a smaller jacket.
  - `hero-gpu-a/b.webp` sit to the right of the form and only show at ≥ 1600px, where that space is empty.
  - `hero-jacket-m.webp` is used on mobile, between the text and the form.
- The 35% is a dark "ticker plate" (ink, tilted −2.5°) with bright NVIDIA-lime gradient digits.
- To swap the art: export new cut-outs with transparent edges and keep `--hero-tone` equal to the photo backdrop.

## Photos (`assets/img/`)
Generated set, high-key studio shots on a warm off-white backdrop, one lime accent each. `raw/` keeps the full-res originals.
- `b1-report-dark`, `b2-lens-dark`, `b3-shield-dark`, `b4-bubbles-dark`: benefit cards (4:3), black leather + silver stitching + one lime accent, to match the hero jacket. The earlier white-porcelain versions are kept in `raw/*-white.webp`.
- `instructor`: 1:1 session photo (4:5)
- `candles`: final CTA panel (left side left empty for text)

## To check before launch
- **Legal**: the footer disclaimer is adapted from zenstox.com (VIE FINANCE SEY LTD, FSA SD123) and translated. Needs legal sign-off.
- The story chart is an **illustrative** SVG (no labels, text is 1:1 with Figma), not real price data.
- All visible copy is 1:1 with the Figma copy (translated). The only exception is the footer legal (see above). "+US$950 billion" is written "+US$950 mil M" in the stat so it fits.
- Form is visual only: wire up action, validation, full country list and success state.
- Logo is the zenstox.com PNG recoloured for light backgrounds. Swap in the official SVG if available.
