# Data Visualisation Gradient Tokens

Introduces gradient wash tokens for Metric Cards (and future data‐viz surfaces) to convey subtle categorical context without overpowering primary content.

## Rationale

Metric cards previously used hard‑coded linear gradients (light tinted colour → white). Converting these to design tokens provides:

- Consistency: Single source of truth; future palette adjustments propagate automatically.
- Theming readiness: Enables potential dark / high‑contrast adaptations via alternate token sets.
- Ergonomics: Cleaner component styles (`var(--gradient-metric-card-* )`);
- Documentation: Clear mapping between variant intent and visual treatment.

## Token File

`packages/nhs-fdp/tokens/gradients.json`:

```text
gradient.metric-card.primary   → linear-gradient(135deg, rgba(0,94,184,0.05), #ffffff)
gradient.metric-card.secondary → linear-gradient(135deg, rgba(136,15,184,0.06), #ffffff)
gradient.metric-card.accent    → linear-gradient(135deg, rgba(255,184,28,0.10), #ffffff)
gradient.metric-card.success   → linear-gradient(135deg, rgba(0,164,153,0.10), #ffffff)
gradient.metric-card.warning   → linear-gradient(135deg, rgba(237,79,0,0.10), #ffffff)
gradient.metric-card.error     → linear-gradient(135deg, rgba(213,40,27,0.10), #ffffff)
```

## Build Integration

- Added `$type: "gradient"` tokens; Style Dictionary already passes them through (no custom transform required) because values are plain strings.
- Updated `config/config.json` to emit dedicated artefacts:
  - SCSS: `dist/scss/_gradients.scss`
  - JS:   `dist/js/gradients.{js,json}`
  - CSS custom properties appear automatically in `dist/css/tokens.css` as `--gradient-metric-card-*`.

## Consumption

### SCSS

```scss
@use 'packages/nhs-fdp/dist/scss/_gradients';

.card--primary { background: var(--gradient-metric-card-primary); }
```
Values are also available as Sass variables: `$nhs-fdp-gradient-metric-card-primary` etc.

### React / JS

```ts
import { GradientMetricCardPrimary } from '.../dist/js/gradients.js';

const style = { background: GradientMetricCardPrimary };
```

### CSS (Design System Components)

MetricCard variants now reference only the CSS variable (fallbacks removed):

```css
background: var(--gradient-metric-card-success);
```

## Design Guidelines

Use gradient washes to:

- Provide gentle variant differentiation (status / category) without competing with numeric emphasis.
- Improve perceived depth subtly compared to flat tints.

Avoid gradient washes when:

- High contrast backgrounds are required for WCAG AA text over coloured surfaces.
- Printing contexts (gradients may band); provide a print styles override to flatten to a solid tint if needed.

## Accessibility

The gradients are intentionally low‑alpha at the starting colour stop (~5–10%) fading to white to avoid contrast issues. Text always sits on white or near‑white final stop ensuring consistent readability. Verify with future dark theme: may require reversing direction or adjusting alpha to maintain contrast.

## Future Extensions

1. Semantic aliases (`semantic.surface.card.[variant].wash`) if usage expands beyond MetricCard.
2. Dark mode variants (e.g. hue shift + transparent overlay on dark base).
3. Animated state overlays (pulse / shimmer) leveraging same gradient directions for loading states.
4. Generator utility for programmatic light‐tint gradient creation based on any brand colour.

## Changelog

- Added `gradients.json` token source.
- Updated build config to emit gradient token artefacts.
- Removed hardcoded fallback gradients from `MetricCard.scss`.
- Added this documentation file.

Maintainer: Add release notes referencing new gradient token availability.
