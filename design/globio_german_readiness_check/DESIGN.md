---
name: Globio German Readiness Check
colors:
  surface: '#faf9ff'
  surface-dim: '#d5d9ea'
  surface-bright: '#faf9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edfe'
  surface-container-high: '#e4e8f8'
  surface-container-highest: '#dee2f3'
  on-surface: '#161b27'
  on-surface-variant: '#464555'
  inverse-surface: '#2b303d'
  inverse-on-surface: '#edf0ff'
  outline: '#767587'
  outline-variant: '#c6c4d8'
  surface-tint: '#4547e2'
  primary: '#1e15c3'
  on-primary: '#ffffff'
  primary-container: '#3b3bd9'
  on-primary-container: '#c5c5ff'
  inverse-primary: '#c0c1ff'
  secondary: '#006e2d'
  on-secondary: '#ffffff'
  secondary-container: '#7cf994'
  on-secondary-container: '#007230'
  tertiary: '#2624b0'
  on-tertiary: '#ffffff'
  tertiary-container: '#4042c8'
  on-tertiary-container: '#c5c5ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#06006c'
  on-primary-fixed-variant: '#2a27cb'
  secondary-fixed: '#7ffc97'
  secondary-fixed-dim: '#62df7d'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#06006c'
  on-tertiary-fixed-variant: '#3030b9'
  background: '#faf9ff'
  on-background: '#161b27'
  surface-variant: '#dee2f3'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '800'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.625rem
    fontWeight: '700'
    lineHeight: 2.125rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: 1.875rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: 0em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 2rem
  margin: 1.5rem
  margin-desktop: 3rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

The design system establishes a focused, hyper-minimalist diagnostic experience tailored for German language learners evaluating their CEFR readiness (A1–C2). The emotional core is calm certainty: eliminating cognitive noise, performance anxiety, and non-essential ornamentation in favor of absolute clarity and functional precision.

### Aesthetic Principles
- **One Focus Per Screen:** Every viewport communicates exactly one decision, question, or diagnostic result. Zero peripheral cards, banners, or gamified mascots.
- **Architectural Minimalism:** Layouts leverage vast, deliberate negative space. White space is treated as an active structural element rather than empty canvas.
- **Micro-Delight via Restraint:** Tactile, generous rounded geometry combined with deep indigo focal points directs interaction naturally without sensory overload.

## Colors

The palette is restrained, purposeful, and calibrated for long periods of focus during linguistic evaluation.

### Palette Architecture
- **Canvas Base (`#FFFFFF`):** Pure white background establishing pristine airiness.
- **Panel / Surface (`#F3F4FC`):** A soft, calming lavender tint used exclusively for interactive answer tiles, question framing panels, and subtle container regions.
- **Primary Interactive (`#3B3BD9`):** High-energy indigo-blue dedicated to key actions, selected states, and navigational momentum. Hover and active states transition smoothly to `#2F2FB8`.
- **Success / Diagnostic Goal (`#16A34A`):** Vivid emerald green strictly reserved for verified competencies, passing thresholds, and final success confirmation actions.
- **Typography Primary (`#1E232F`):** Deep slate grey providing contrast and readability without the harshness of pure black.
- **Typography Secondary (`#64748B`):** Neutral slate for explanatory instructions, meta-tags, and secondary CEFR indicators.
- **Structural Lines (`#E5E7EB`):** Hairline borders used sparingly to define structural limits without adding visual weight.
- **Warning / Error Tint:** `#FEF2F2` background accompanied by `#DC2626` text and outline for edge alerts and remediation guidance.

## Typography

The design system implements **Plus Jakarta Sans** uniformly across headlines, body copy, and UI controls. Its open apertures, geometric precision, and balanced proportions ensure legibility for extended German compound words and diacritics (ä, ö, ü, ß).

### Hierarchy Implementation
- **Display & Headline Levels:** Reserved for immediate level diagnostics, diagnostic scores, and primary question prompts. Tracking is tightened to maintain visual cohesion at large scales.
- **Body Levels:** Rendered with relaxed line-heights (1.6–1.75) to support effortless reading comprehension under timed conditions.
- **Label Levels:** Applied to status badges, CEFR level tags, action triggers, and progress metrics with slight positive tracking for crisp optical definition.

## Layout & Spacing

The layout philosophy centers on a mobile-first portrait container with an enforced single-column flow. 

### Rhythm & Constraints
- **Viewport Bounds:** On desktop and tablet viewports, the primary interaction viewport is anchored within a centered maximum width constraint of `480px` to maintain optimal scanning ergonomics and preserve the mobile-first focus.
- **Section Margins:** Mobile viewports enforce a horizontal boundary of `1.5rem` (`margin`), scaling to `3rem` on desktop screens.
- **Vertical Airflow:** Form controls, answer choices, and prompts are separated by `space-md` (`1.25rem`) and `space-lg` (`2rem`) to prevent accidental taps and visual crowding.
- **Sticky Ergonomics:** Progress indicators sit unobtrusively at the top edge, while primary progression CTAs are fixed or pinned to the bottom thumb zone with dedicated vertical padding.

## Elevation & Depth

The design system avoids heavy drop shadows and realistic drop skeuomorphism. Depth is achieved via tonal contrast and fine structural lines:

- **Flat Tonal Grounding:** Depth relies primarily on the contrast between the pure white `#FFFFFF` ground and the `#F3F4FC` lavender surface containers.
- **Subtle Surface Definition:** Interactive cards and floating panels use an ultra-crisp hairline border (`1px solid #E5E7EB`) rather than dark drop shadows.
- **Focus & Selection Lift:** Selected choices or active focus states do not cast heavy ambient shadows; they transition into a solid `2px` ring or fill using `#3B3BD9` or `#16A34A`, providing instantaneous feedback through color rather than physical elevation.

## Shapes

The interface embraces generous, organic curves that feel approachable and human:

- **Buttons & Primary CTAs:** Fully rounded pill-shapes (`rounded-full` or `rounded-xl`) soften the test-taking environment, making interactions inviting.
- **Cards & Answer Containers:** Styled with a prominent `rounded-2xl` to `rounded-3xl` radius (`1.25rem` to `1.75rem`).
- **Pills & Badges:** Micro-labels indicating CEFR tiers (e.g., B2, C1) utilize complete circular pill curves (`9999px`) to stand distinct from structural rectangular boundaries.

## Components

### Action Buttons
- **Primary Action:** Solid `#3B3BD9` fill with `#FFFFFF` text, bold weight (`label-lg`), pill-shaped geometry (`rounded-full`), padded generously at `1.25rem` vertical and `2rem` horizontal. On hover/active, transitions to `#2F2FB8`.
- **Result & Completion Action:** Solid `#16A34A` fill with `#FFFFFF` text for the definitive "Exam Ready" validation screen.
- **Ghost / Neutral Action:** No fill, `#1E232F` text, interactive underline or low-opacity lavender state on press for "Skip question" or "Review later".

### Option Selection Tiles (Diagnostic Cards)
- Constructed with `#F3F4FC` lavender background, minimum height of `64px`, and `rounded-2xl` contouring.
- **Default State:** Borderless or subtle `1px solid transparent`, `#1E232F` typography.
- **Selected State:** Border `2px solid #3B3BD9`, subtle interior tint shift, with an indigo check indicator.
- Single layout idea per container; no multi-column micro-grids within an answer card.

### Progress & Status Indicators
- Ultra-thin linear progress bar (height: `4px`) running horizontally at the top boundary. Track is light lavender, fill is `#3B3BD9`.
- **CEFR Level Indicator:** Clean, compact pill badge with lavender background (`#F3F4FC`), slate text (`#1E232F`), and uppercase tracking.

### Form Inputs & Text Fields
- Large-format text entry containers featuring `#F3F4FC` fill, `rounded-2xl` edges, and `1.25rem` internal padding.
- Focused state transforms with an active `#3B3BD9` hairline border and zero distracting halo rings.

### Feedback Banners
- **Warning / Review Notice:** Minimal `#FEF2F2` pill card, `#DC2626` headline text, no icons or illustrative decorations—clarity achieved through color and concise language alone.