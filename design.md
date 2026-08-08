# Design - Lesiba Lucky Manala Portfolio

This is the shared design system for the portfolio home page and work page. It keeps the interface clear, technical, and blue-and-white, with the projects carrying the proof.

## Genre

Modern-minimal engineering portfolio.

## Macrostructure family

- Home: Signal Desk - an offset introduction followed by capability groups and a direct contact rail.
- Work: Case Ledger - a project index with alternating evidence panels and the What / How / Result reading order.

## Theme

- `--color-paper`: `oklch(98% 0.012 245)`
- `--color-paper-2`: `oklch(94% 0.025 245)`
- `--color-ink`: `oklch(23% 0.055 252)`
- `--color-ink-2`: `oklch(38% 0.07 252)`
- `--color-rule`: `oklch(84% 0.045 245)`
- `--color-accent`: `oklch(56% 0.19 255)`
- `--color-focus`: `oklch(43% 0.18 255)`

## Typography

- Display: Geist Sans, weight 600, roman.
- Body: Geist Sans, weight 400.
- Mono: Geist Mono, weight 500 for labels and technical metadata.
- Display tracking: tight, with readable body measure.

## Spacing

4-point named scale, defined in `tokens.css`. Layout code uses semantic spacing tokens.

## Motion

- Easings: `--ease-out`, `--ease-in`, and `--ease-in-out`.
- Reveal pattern: no scripted reveal; hover uses small colour or one-pixel spatial shifts.
- Reduced-motion fallback: transitions collapse to an opacity-only instant state.

## Microinteractions stance

Quiet and useful: visible focus rings, single-property hover changes, no celebratory toasts, and touch-safe controls.

## CTA voice

- Primary CTA: blue filled pill with a short action label.
- Secondary CTA: navy text link with a rule and arrow.

## What pages must share

- The LM wordmark, Geist typography, pale blue paper, navy ink, and single blue accent.
- The same navigation and CTA voice.
- Monospace labels for technical context and metadata.

## Exports

`tokens.css` is the canonical token export for this project.
