# Typography Migration Checklist

Use this quick checklist when moving components to the new tokens and brand-aware font variables.

- Replace fixed sizes (px/rem) with clamp tokens
  - `$nhs-fdp-font-size-clamp-{small|body|lead|display|hero}`
- Use unitless line-height tokens
  - `$nhs-fdp-font-line-height-unitless-{small|body|lead|display|hero}`
- Standardise letter-spacing
  - `$nhs-fdp-font-letter-spacing-{tight|normal|wide|caps}`
- Remove hardcoded font-family stacks
  - Use `var(--nhs-font-family-base)` (or component mapping) for UI text
  - Use monospace/number tokens where applicable (code, data tables)
- Verify brand scope behaviour
  - Wrap a preview with `[data-brand="fdp"]` or `BrandThemeProvider` and ensure typography updates
- Accessibility & performance
  - Confirm `font-display: swap` in `@font-face` and preload `.woff2` if core to UX
- Tests & docs
  - Update snapshots if visual diffs are expected
  - Add usage notes to component docs where fonts or sizes changed

Optional guardrail (CI): add a check to fail on new hardcoded `font-family` stacks outside permitted files.
