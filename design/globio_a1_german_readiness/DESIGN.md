---
name: Globio A1 German Readiness
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3d4a3d'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6d7b6c'
  outline-variant: '#bccbb9'
  surface-tint: '#006e2f'
  primary: '#006e2f'
  on-primary: '#ffffff'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#4ae176'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fec700'
  on-secondary-container: '#6e5400'
  tertiary: '#006591'
  on-tertiary: '#ffffff'
  tertiary-container: '#36b6fb'
  on-tertiary-container: '#004564'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#ffdf92'
  secondary-fixed-dim: '#f4bf00'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#594400'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
This design system defines an encouraging, anxiety-reducing assessment environment tailored for Indian working professionals preparing for the Goethe-Zertifikat A1 / telc Deutsch A1 exams. Taking an international language certification while balancing a career creates performance stress; the visual identity counters this with a game-like, approachable, and momentum-building aesthetic modeled on gamified micro-learning platforms.

The style blends modern playful minimalism with tactile micro-interactions:
- **Tone:** Optimistic, empathetic, structured, and validating. It eliminates bureaucratic academic intimidation in favor of bite-sized mastery.
- **Physicality:** "Squishy" tactile feedback, chunky 3D-depth button bases, pill badges, and layered floating cards that feel satisfying and responsive to touch.
- **Atmosphere:** Clean slate and warm cream backdrops with high-saturation victory tokens (emerald progress indicators, sunny streak badges, and coral corrective cues).
- **Bilingual Focus:** English prompts and systemic meta-information remain crisp, calm, and readable, while German vocabulary, prompt stems, and grammar targets are framed as distinct focal elements with dedicated card highlights.

## Colors
The color system emphasizes high-clarity motivation and positive reinforcement:
- **Primary (`#22C55E` - Active Emerald / Lime):** Used for forward momentum, primary calls to action, successful answers, completion meters, and positive readiness scores. Deep emerald (`#15803D`) serves as the dimensional bottom edge/border for primary buttons.
- **Secondary (`#FFC800` - Sunny Amber):** Encodes streaks, readiness milestone trophies, celebratory stars, and attention anchors. Grounded by an amber bottom-shade (`#D97706`).
- **Tertiary (`#0EA5E9` - Sky Blue):** Directs the user’s cognitive focus toward comprehension, audio listening clips, grammar hints, and German case markers. Bottom-shade edge uses `#0284C7`.
- **Alert / Correction (`#F43F5E` - Playful Coral):** Replaces harsh red. Used for missed items and gentle diagnostic feedback, supported by deep rose (`#BE123C`) under-borders.
- **Surfaces & Backgrounds:** The base canvas runs on `#F8FAFC` (Cool Tinted Cream) with interactive elements nested on `#FFFFFF`. Sub-question grouping cards and inactive states use `#F1F5F9`.
- **Text & Hierarchy:** Body and instructions use `#334155` (Slate Gray) for fatigue-free extended reading, with `#1E293B` (Deep Charcoal) reserved for primary questions and headings. Muted descriptors and sub-options use `#64748B`.

## Typography
Plus Jakarta Sans is utilized across all levels to balance geometric friendliness with optimal legibility. Its wide apertures, clean terminals, and rounded curves make German compound nouns (e.g., *Flughafen*, *Wohnungsanzeige*) approachable and decipherable on compact mobile viewports.

- **Weight Strategy:** Headlines lean on ExtraBold (`800`) and Bold (`700`) to evoke a punchy, confident, Duolingo-style editorial rhythm. Body copy relies on Medium (`500`) rather than Regular (`400`) to retain structural presence against high-saturation background accents.
- **Language Distinction:** Exam stimulus content in German is rendered with `headline-sm` or `body-lg` at `700` weight, highlighted inside dedicated tint-backed spans or quote containers to differentiate from English navigation prompts and instructions.

## Layout & Spacing
The layout utilizes a mobile-first fluid container approach, locked to a centered max-width of `480px` on desktop and tablet screens to replicate an agile, thumb-driven mobile application experience.

- **Vertical Cadence:** A strict 4px/8px modular scale dictates vertical margins. Assessment prompts are pinned to the top half of the screen, while interaction targets (options, speech toggles, submit keys) occupy the prime thumb zone in the bottom 40%.
- **Safe Padding:** Mobile viewports apply `margin-mobile` (16px) left and right, ensuring cards and touch targets do not crowd the bezel. Desktop containers center within a generous neutral backdrop.
- **Breakpoints:**
  - **Mobile (< 640px):** 1-column fluid stacking, bottom sticky action trays with zero layout shift.
  - **Tablet / Desktop (≥ 640px):** Max container width capped at `480px` or a 2-column layout (Left: Question Prompt & Audio Stimulus; Right: Selection options & feedback) with 24px gutters.

## Elevation & Depth
Depth in this design system avoids blurry photorealistic drop-shadows. Instead, it relies on a **3D extruded baseline** approach paired with crisp boundary lines:

- **Tactile Base Layers:** Interactive components (buttons, answer cards) feature a 2px to 4px solid inset-offset or bottom border simulating physical keys. When pressed, the element translates down by 2px to 3px, collapsing the base and signaling completion.
- **Card Depth:** Content containers utilize 2px solid perimeter strokes in `#E2E8F0` layered over a flat, tinted offset shadow (`0 4px 0 0 #E2E8F0`), creating a grounded sticker-like quality.
- **Modal Sheets & Overlays:** Bottom sheets for question explanations slide upward with an ambient soft boundary (`0 -8px 24px rgba(30, 41, 59, 0.08)`) combined with a solid 2px outline to maintain the clean cartoon-editorial feel.

## Shapes
Roundedness level `3` (Pill & Super-Rounded) governs all geometry, eliminating harsh corners to reduce test anxiety and invite touch interaction:
- **Buttons and Chips:** Fully pill-shaped (`9999px` border radius) for primary CTAs, module filters, and answer selection pills.
- **Containers and Prompt Cards:** Uniform `1.5rem` (`24px`) radii on standard cards, with small supplementary inputs using `1rem` (`16px`).
- **Progress Bars:** Pill track containers (`9999px`) containing an inner fluid pill with dynamic spring width adjustments.

## Components

### 1. Chunky Action Buttons (Primary, Secondary, Tertiary)
- **Structure:** Height of 52px (mobile thumb-friendly), full-width or inline pill shape.
- **Primary CTA:** Background `#22C55E`, border-bottom `4px solid #15803D`, text `#FFFFFF` with `label-lg` bold typography.
- **Hover/Active State:** Hover brightens fill by 5%. Active (`:active`) state reduces `border-bottom-width` to `0px` and adds `transform: translateY(4px)`, giving an authentic Duolingo click feel.
- **Secondary / Actionless:** Slate borders (`#E2E8F0`), bottom border `4px solid #CBD5E1`, background `#FFFFFF`, text `#334155`.

### 2. Multi-Choice Selection Cards
- **Structure:** Min-height 60px, rounded to 16px (`rounded-lg`), 2px solid border (`#E2E8F0`) with a `3px` solid bottom shadow (`#E2E8F0`).
- **Resting:** Background `#FFFFFF`, text `#1E293B`, aligned left with an optional numeric/alphabet pill tag (A, B, C) on the left.
- **Selected:** Border `#0EA5E9`, bottom border `#0284C7`, background `#F0F9FF`, text `#0369A1`.
- **Evaluated Correct:** Border `#22C55E`, bottom border `#15803D`, background `#F0FDF4`.
- **Evaluated Incorrect:** Border `#F43F5E`, bottom border `#BE123C`, background `#FFF1F2`.

### 3. Pill Badges & Chips
- **Structure:** Height 28px–32px, full pill curve (`9999px`), horizontal padding `space-md`.
- **Variants:**
  - *Streak / Score:* Amber tint `#FEF3C7`, text `#B45309`, paired with a sunny spark/flame icon.
  - *CEFR Level Tag:* Sky tint `#E0F2FE`, text `#0369A1`, showing "Goethe A1 Ziel".
  - *Exam Section:* Slate tint `#F1F5F9`, text `#475569`, designating *Hören*, *Lesen*, *Schreiben*, or *Sprechen*.

### 4. Progress Indicators
- **Track:** 16px thick, background `#E2E8F0`, pill rounded.
- **Fill:** Primary emerald `#22C55E` with an inner white highlight cap (2px soft sheen across the upper horizontal edge) to create a glossy 3D bar effect. Smooth cubic-bezier transition upon progress advances.

### 5. Input Fields (Cloze / Fill-in-the-Blank)
- **Structure:** 48px height, rounded 12px or full pill, 2px solid `#CBD5E1`.
- **Focus:** 2px solid `#0EA5E9` with zero blurred glow, accompanied by a subtle `#E0F2FE` solid outer halo (2px).
- **German Special Characters Bar:** A persistent horizontal micro-keyboard row above inputs containing pill-buttons for `ä`, `ö`, `ü`, and `ß` for Indian keyboards lacking Umlaut keys.

### 6. Audio Player Card (A1 Hören Section)
- **Structure:** Rounded 20px card with a soft sky-blue wash (`#F0F9FF`), 2px border `#BAE6FD`.
- **Controls:** Oversized 48px circular play/pause button (`#0EA5E9` with `#0284C7` 3D base), paired with an animated tactile sound wave bar and play-count pill ("1 von 2 Mal abgespielt").