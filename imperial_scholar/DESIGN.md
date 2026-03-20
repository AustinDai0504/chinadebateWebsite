# Design System Document: Official Elegance & Intellectual Authority

## 1. Overview & Creative North Star: "The Modern Scholarch"
The North Star for this design system is **"The Modern Scholarch."** We are not building a generic political portal; we are crafting a digital environment that commands the room with the quiet confidence of an elite debating chamber. 

The aesthetic marries the bold, structural power of traditional Chinese institutional design with the refined, airy sophistication of high-end editorial layouts. We break the "template" look by utilizing **intentional asymmetry**—large, high-contrast serif typography paired with expansive whitespace—and **tonal depth**, where sections are defined by shifting planes of color rather than rigid lines. This system should feel "officially elegant": authoritative, yet breathing with modern intellectual energy.

---

## 2. Colors: Dignity and Depth
Our palette is rooted in a triad of "China Red," "Gilded Gold," and "Imperial Stone."

### Core Palette (Material Design Tokens)
- **Primary (`#910022`):** The heart of the system. Use for critical branding and high-intent actions.
- **Primary Container (`#be002f`):** The vibrant "China Red." Reserved for Hero highlights and signature UI moments.
- **Secondary (`#735c00`):** An oxidized gold. Used for sophisticated accents and scholarly metadata.
- **Secondary Container (`#fed65b`):** A bright gold highlight for high-priority Call-to-Actions (CTAs).
- **Surface & Background (`#fcf9f8`):** An off-white, warm "Fine Paper" tone that prevents the digital fatigue of pure hex white.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be created through background color shifts. Use `surface-container-low` for a background and `surface-container-lowest` for a nested card to create a natural edge.

### Glass & Gradient Signature
To move beyond "flat" design, apply a **Subtle Scholar’s Gradient** to primary buttons and hero sections, transitioning from `primary` to `primary_container`. For floating navigation or overlays, utilize **Glassmorphism**:
- **Backdrop Blur:** 12px - 20px
- **Fill:** `surface` at 80% opacity
- **Effect:** This allows the deep reds and photography to "bleed" through the UI, creating an integrated, premium feel.

---

## 3. Typography: The Editorial Voice
We utilize a dual-font strategy to balance modern readability with classical scholarship.

### Typography Scale
- **Display (Newsreader - Serif):** Large, authoritative, and expressive. Use `display-lg` (3.5rem) for hero headlines to evoke a sense of history and permanence.
- **Headline (Newsreader - Serif):** Used for section titles. The serif weight provides the "Scholarly" accent required for a debate organization.
- **Title & Body (Inter - Sans-Serif):** Chosen for its neutrality and high legibility. `title-lg` (1.375rem) provides clear hierarchy for sub-headers.
- **Label (Public Sans - Sans-Serif):** Used for metadata and small UI elements. The increased letter-spacing in `label-sm` (0.6875rem) mimics the look of official stamped documents.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, depth is not a shadow; it is a **layer of paper.**

### The Layering Principle
Hierarchy is achieved by "stacking" surface tiers. 
- **Base Level:** `surface` (#fcf9f8)
- **Section Level:** `surface-container-low` (#f6f3f2)
- **Interactive Card Level:** `surface-container-lowest` (#ffffff)
This creates a "soft lift" that feels organic and high-end.

### Ambient Shadows
When an element must float (e.g., a modal or a primary CTA), use **Ambient Shadows**:
- **Blur:** 32px to 64px
- **Opacity:** 4% - 6%
- **Tint:** Use a shadow color derived from `on-surface` (#1c1b1b) rather than pure black to keep the lighting natural.

### The "Ghost Border" Fallback
If a container requires a border for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components: Structural Integrity

### Buttons
- **Primary:** `primary` background with `on-primary` text. Apply the `md` (0.375rem) roundedness. Add a subtle top-down gradient for a "pressed" tactile feel.
- **Secondary (The Gold Standard):** `secondary_container` (Gold) with `on-secondary_container` text. Reserved for the most important conversion point on a page.
- **Tertiary:** No background. Text color `primary`. Use for low-emphasis actions.

### Cards & Lists
- **Rule:** Forbid the use of divider lines.
- **Execution:** Separate list items using the `3` (1rem) spacing scale. Use `surface-container-high` as a subtle hover state background for list items. 
- **Roundedness:** All cards must use `xl` (0.75rem) for a modern, approachable feel that softens the "official" tone.

### Input Fields
- **Style:** Underline-only or subtle "Ghost Border."
- **Focus State:** Transition the underline to `primary` (#910022) with a 2px weight. Helper text should use `label-md` in `on-surface-variant`.

### Signature Component: The "Debate Pulses"
- **Function:** A custom component for showing live arguments.
- **Visual:** A `surface-container-highest` card with a `secondary` (Gold) left-accent bar (4px width). This provides "Official" visual weight without cluttering the screen.

---

## 6. Do's and Don'ts

### Do:
- **Use Large Margins:** Utilize the `20` (7rem) and `24` (8.5rem) spacing tokens for page gutters. Space is luxury.
- **Overlap Elements:** Let a serif `display-md` headline slightly overlap a high-quality photo container to break the grid and create an editorial feel.
- **Tone-on-Tone:** Use `primary_fixed_dim` text on a `primary_container` background for sophisticated, low-contrast internal labels.

### Don't:
- **Don't use pure black:** Use `on-surface` (#1c1b1b) for text to maintain a high-end, charcoal-ink look.
- **Don't use 1px dividers:** If you feel the need for a line, use whitespace or a color shift instead.
- **Don't clutter with icons:** Use icons sparingly. When used, they should be "Light" or "Thin" weight to match the refined typography.
- **Don't use aggressive rounding:** Avoid `full` (pill) shapes for anything other than small tags/chips. Stick to `md` and `xl` for structural elements.