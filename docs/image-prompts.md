# Image prompts (GPT image) — BrainTrade NVIDIA +35% landing

Shared rules for EVERY image: no text, no numbers, no letters, no logos (no NVIDIA logo), no people/hands/faces, no watermark, no UI with readable content.
Palette: near-black green `#050a04` background, vivid GPU-style green (clean, slightly cool, NOT yellowish) light `#45cd2b` / `#6ee04f`. **No orange, red, yellow or blue** — orange is reserved for the CTA buttons so they pop.
Style: premium editorial fintech key art (think Bloomberg / FT / Apple keynote), photoreal 3D render, restrained and elegant. NOT neon sci-fi: no holograms, HUD, circuits, robots, brains, matrix code, lens-flare spam.

Save finals into `assets/img/` with the exact file names below (JPG or WebP, quality ~80, aim < 300 KB each).

---

## 1. `hero-bg.jpg` — HERO (most important)

**Size:** generate **1536 × 1024** (3:2). If the tool allows 16:10, use **2560 × 1600** (best). The site shows it at 1280 × 800, centered, cover-cropped (≈3% cut from top and bottom), so keep key content away from the top/bottom 4%.

**Layout reference:** `docs/hero-zones-guide.png` (same 1536 × 1024). Optional: upload it with the prompt and say "use this only as an invisible layout guide, do NOT draw the boxes or labels".

**Prompt:**

> Ultra-wide cinematic key visual for a premium financial education website, dark olive-black background (#050a04), photorealistic 3D render, shallow depth of field, soft volumetric light, restrained and elegant. Subject: the dramatic one-day spike of a stock chart, rendered as glossy translucent lime-green glass candlesticks floating in a dark space.
>
> STRICT COMPOSITION (frame 3:2, positions as % of width/height):
> 1) LEFT HALF, x 0–51%: almost empty. Pure near-black with only a very soft deep-green haze and faint grain. At most a few tiny, very dim candlesticks along the very bottom edge (below 85% height). Nothing bright, no detail, so white text can sit on top and stay readable.
> 2) VERTICAL GAP, x 51–63.5%, full height — the HERO ELEMENT: ONE tall, slender, glowing lime-green glass candlestick (#6ee04f) with a thin wick, rising from about 88% height up to about 22% height, centered at x≈57%. Glossy surface, bright inner glow, soft bloom, a faint light beam rising above it, subtle reflections on a dark reflective floor. To its left, a few much smaller, dim, dark-green candles at low height (the previous days, drifting slightly downward), so it reads as a sudden one-day jump. A few tiny floating light particles around it.
> 3) RIGHT SIDE, x 63.5–100%: a UI card will cover the central part (x 63.5–96%, y 17–83%), so keep this area LOW CONTRAST and soft: a continuation of the move — a cluster of translucent lime-green glass candles at a HIGHER level (the new plateau), thin ascending glowing trend line, a few volume bars, two or three floating translucent glass panels with abstract chart strokes (no text). Let some of these elements PEEK OUT above and below the card area (top-right corner y < 17% and bottom-right corner y > 83%) and slightly past the right edge, blurred with depth of field.
> 4) Edges: gentle vignette, all four edges fade to near-black (#050a04) so the image blends into the page.
>
> Mood: confident, calm, professional, a major market move — not hype. Color: only deep black-olive-green and vivid GPU-style green (clean, slightly cool, NOT yellowish) glow. No text, no numbers, no letters, no logos, no people, no watermark. No orange, red, yellow or blue.

**If the first result is too busy:** add "reduce detail by 40%, lower contrast everywhere except the central candle".
**Quick check:** put your finished image over `docs/hero-zones-guide.png` — the left box must stay dark, the central candle must sit inside the green box.

### Optional: `hero-bg-mobile.jpg` (portrait 1024 × 1536)
> Same style and palette. Portrait frame. TOP 60%: calm dark green haze, almost empty (text sits here). BOTTOM 40%: the single tall glowing lime-green glass candlestick at x≈70%, rising to ~45% height, with a few small dim candles to its left and a soft plateau of translucent glass candles to its right; vignette to near-black at all edges; no text/logos/people.

---

## 2. Benefit card images (4 files) — **1200 × 900** each (4:3)
Same set, same lighting, so they read as one family. One centered object, lots of dark empty space around it, soft lime glow from below, subtle reflective dark floor.

- `benefit-1.jpg` — *Ler um balanço:* a stack of thin translucent glass sheets (like financial statements) with glowing lime line-art columns and bars on them, no readable text.
- `benefit-2.jpg` — *Por que um preço se move:* a row of dim glass candlesticks with one tall bright candle, and a clear glass magnifying lens in front focusing the bright candle.
- `benefit-3.jpg` — *Risco antes de tudo:* a floating glass shield beside a thin horizontal glowing line (a stop level) crossing a small descending-then-flat set of candles.
- `benefit-4.jpg` — *Seu ritmo, com instrutor:* two floating glass speech bubbles linked by a glowing lime line, plus a small calendar-like grid of dots; calm, human, no faces.

## 3. `about.jpg` — **1024 × 1536** (portrait), About panel
> A single glowing lime-green line winding upward through a dark gridded space, like a personal path, passing through a few small glowing nodes, glass candles faintly in the background; elegant, minimal, lots of dark space, soft depth of field, left edge fades to near-black. No people, no text.

## 4. `cta-bg.jpg` — **1536 × 1024**, final CTA panel (shown as a wide band ≈ 2.2:1, so keep the important parts in the middle 45% of the height)
> Wide dark scene: along the bottom, a skyline of ascending translucent lime-green glass candlesticks growing from left to right, ending in one tall glowing candle at the far right; dark empty space above and in the centre for a headline; soft green light bloom behind; vignette to near-black. No text, no logos, no people.
