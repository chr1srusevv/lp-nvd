# BrainTrade — NVIDIA landing page · Developer handoff

Plain HTML + CSS + a small `script.js` (no libraries, no build step). Open `index.html` directly or serve the folder with any static server.

## Design
Figma file: page "LP Final - 1920 / 1199 / 375" (3 frames + DEV SPEC with tokens, assets and numbered animation markers) and page "Copy changes (for approval)". Rendered previews are in `design/` (desktop-1920.png, tablet-1199.png, mobile-375.png). Frames/images in Figma have PNG @1x/@2x export settings; logo exports as SVG.

## Files
| File | What |
|---|---|
| `index.html` | Portuguese (pt-BR) — default |
| `es.html` | Spanish (LATAM, es-419) — translation only, same markup/CSS/JS |
| `en.html` | English — translation only |
| `style.css` | All styling. Tokens are CSS variables in `:root`. |
| `script.js` | Light motion only (progressive enhancement), ~110 lines |
| `assets/logo.svg` | Logo (recoloured for dark background) |
| `assets/img/*` | `hero-bg.jpg`, `gpu-card.webp`, `instructor.webp`, `nvda-move.png` |
| `assets/fonts/*.woff2` | Self-hosted fonts (see below) |

All three pages have `hreflang` links. A language switcher is NOT designed — add one if needed.

## Breakpoints (designed at 1920 / 1199 / 375)
- **≥ 1280px** desktop. Content max-width 1280, side padding 55px. Wider screens just centre the content and extend the hero art.
- **1024–1279px** "tablet/laptop" — same layout, flexible columns (`@media (min-width:1024px) and (max-width:1279px)`).
- **< 1024px** stacked mobile layout (designed at 375). 20px side padding.

## Design tokens (`:root` in style.css)
| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#050A04` | page background |
| `--bg-surface` | `#0A1108` | alternating section background |
| `--bg-card` / `--bg-card-raised` | `#101B0D` / `#172612` | cards |
| `--border-subtle` / `--border-strong` | `#1F3319` / `#33552A` | lines |
| `--green-500` | `#45CD2B` | main green |
| `--green-400` / `--green-300` | `#6EE04F` / `#B0F59A` | accents, gradient top |
| `--green-700` / `--green-900` | `#237A16` / `#0F3009` | dim fills |
| `--text-primary/secondary/muted` | `#EEFBEA` / `#B0C5A8` / `#76906F` | text |
| `--orange-500` | `#FF7532` | **buttons + logo only** |

Fonts: **Sora 800** headline (`--font-h1`, 3 lines only) · **Space Grotesk** other headings (`--font-display`) · **Urbanist** body (`--font-body`). Alternatives for the headline are already included: set `--font-h1` to `"Plus Jakarta Sans"` or `"Manrope"`.

## Images (what to export / replace)
| File | Size | Notes |
|---|---|---|
| `hero-bg.jpg` | 1536×1024 | hero art. Shifted 140px left on desktop; mobile shows it as a darkened background (700px tall). |
| `gpu-card.webp` | 1003×1002, transparent | breaks out of the box in Benefits |
| `instructor.webp` | 784×1100, transparent | About section, bottom-aligned |
| `nvda-move.png` | 492×623 | real chart screenshot. **Replace with a ≥1000px export for retina.** |
| `logo.svg` | 180×37 | |

## Form (visual only — needs wiring)
`<form id="lead-form" action="#" method="post">`: name, email, country select (only "US +1" now), phone, consent switch (checkbox), submit. No validation, no error/success states designed yet. All CTA buttons are `href="#lead-form"`.

## Animations (all CSS unless stated; JS only adds classes/variables)
`<html class="js">` is set by an inline snippet in `<head>` **only if** `prefers-reduced-motion` is not "reduce" and `IntersectionObserver` exists. Without it everything is visible and static.

| # | Element | Trigger | Effect | Timing | Where |
|---|---|---|---|---|---|
| 1 | Headline lines (`.h1__pre`, `.h1__small`) | page load | fade + rise 18px | 0.6s, delay 0.05s / 0.45s, ease-out | CSS `h1-rise` |
| 2 | Big "35%" (`.h1__num`) | page load | pop-in (scale .9→1, blur 14→0, rise 26px) + **count 0→35** | pop 0.75s; count 1.8s, delay 0.2s | CSS `h1-pop`, `h1-count` (`@property --n`, counter in `::before`) |
| 3 | "35%" glow | after load, loop | drop-shadow pulse 12px→46px | 2.8s alternate, starts at 2s | CSS `h1-glow` |
| 4 | Lead, ticks, form | scroll into view (hero is visible on load) | fade + rise 22px | 0.7s; delays 650 / 780(+90 each) / 450 ms | `script.js` → `.reveal.is-in` |
| 5 | Hero background art | pointer move (desktop mouse only) | moves up to 14px/8px opposite to cursor | 0.5s ease-out | JS sets `--px/--py` |
| 6 | Section headings, timeline items, benefit cards, steps, about blocks, CTA panel, footer | scroll into view (15% visible) | fade + rise 22px, stagger 100–160ms | 0.7s / 0.8s | JS `.reveal` + `--d` delay |
| 7 | Chart screenshot | scroll into view | wipes in bottom→top (clip-path) | 1.5s, delay 0.35s | CSS `.terminal.is-in` |
| 8 | Stat numbers "~50%", "US$950 bi+" | scroll into view | count up from 0 | 1.3s, ease-out cubic | JS `countUp()` |
| 9 | Steps line (1→2→3) | scroll into view | line draws left→right (top→bottom on mobile) | 1.2s, delay 0.3s | CSS `.steps__list.is-in::before` |
| 10 | Step 3 badge | always (loop) | glow pulse | 2.8s | CSS `goal-pulse` |
| 11 | GPU card (Benefits) | scroll | drifts vertically up to ±26px | continuous, rAF-throttled | JS sets `--gy` |
| 12 | Orange submit buttons (hero form, final CTA) | always (loop) | light sheen sweeps across | 5.5s loop, starts at 2.5s | CSS `btn-sheen` |
| 13 | All buttons | hover | lift 1px + brighter; focus ring | 0.15s | CSS |
| 14 | Benefit cards | hover | border turns green, lift 2px | 0.2s | CSS |
| 15 | Sticky CTA (mobile only) | form scrolls out of view | slides up from bottom; hides again when form visible | 0.35s | JS IntersectionObserver on `#lead-form` + CSS |

Reduced motion: all of 1–12 are disabled/static; sticky CTA still works.

## Notes / things to check
- Numbers in the copy are final per the client (35% in hero/CTA, 31,5% in the story section).
- `@property` counter (#2) works in Chromium/Safari 16.4+/Firefox 128+; older browsers just show a static "35%".
- `instructor.webp` etc. are transparent WebP (supported everywhere current). Provide PNG fallback only if very old browsers matter.
- Tracking/analytics, cookie banner, real form endpoint, country list, validation and success state are not included.
- Footer legal text is long on purpose; do not shorten without legal.
