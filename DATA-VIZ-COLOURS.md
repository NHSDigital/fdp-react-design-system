# Data Visualisation Colour Tokens

This document captures the rationale and mapping for introducing a 12‑colour categorical palette (plus optional neutral) into the design token system.

## Source Palette (Authoritative List)

```text
#005EB8  NHS Blue
#41B6E6  NHS Light Blue (new)
#4C6272  NHS Grey 1 (existing neutral – optional for comparison)
#FFB81C  NHS Warm Yellow
#AE2573  NHS Pink
#00A499  NHS Aqua Green
#E317AA  NHS Bright Pink (new)
#007F3B  NHS Green
#9A6324  NHS Brown (new)
#78BE20  NHS Light Green (new)
#ED4F00  NHS Tangerine (new)
#880FB8  NHS Light Purple (new)
```text

## Existing vs New Classification

| Hex | Status | Existing Token (if any) | Notes |
|-----|--------|-------------------------|-------|
| #005EB8 | Existing | `color.primary.blue` | Brand core / links |
| #41B6E6 | New | – | Introduces lighter blue for visual distinction |
| #4C6272 | Existing | `color.grey.1` | Neutral; not always ideal as categorical series colour |
| #FFB81C | Existing | `color.secondary.warm-yellow` | Chosen instead of focus yellow (#ffeb3b) |
| #AE2573 | Existing | `color.secondary.pink` | Base pink |
| #00A499 | Existing | `color.secondary.aqua-green` | Cool accent |
| #E317AA | New | – | Bright pink (more vivid) |
| #007F3B | Existing | `color.primary.green` | Also semantic primary/success |
| #9A6324 | New | – | Brown – warm neutral extension |
| #78BE20 | New | – | Light green – increases green family range |
| #ED4F00 | New | – | Tangerine – deeper orange than existing `orange` (#ed8b00) |
| #880FB8 | New | – | Mid/light purple distinct from dark purple (#330072) |

### Optimised Ordering
For chart series we expose an optimised ordering that maximises perceptual distance (CIE Lab ΔE76 farthest‑point sampling) for early indices so the first few series are as distinct as possible. The raw token order is preserved; optimisation is applied at runtime in the colour utility.

Opt-out: call `setCategoricalColorStrategy('raw')` (from `utils/colors.ts`) before rendering charts to revert to the original ordering.

### Extended (>12) Series
If more than 12 series are requested the system now generates lightness variants (±12, then ±24 L*) of the base/optimised palette, appended in waves. This extends available distinct colours while maintaining approximate perceptual spacing. You can retrieve this full sequence via `getExtendedCategoricalPalette()`.
## Design & Accessibility Considerations


## Token Structure Added

Created `packages/nhs-fdp/tokens/data-viz.json` with:

```text
color.data-viz.categorical.1  → {color.primary.blue}
color.data-viz.categorical.2  → #41B6E6
color.data-viz.categorical.3  → {color.secondary.aqua-green}
color.data-viz.categorical.4  → #78BE20
color.data-viz.categorical.5  → {color.primary.green}
color.data-viz.categorical.6  → {color.secondary.warm-yellow}
color.data-viz.categorical.7  → #ED4F00
color.data-viz.categorical.8  → {color.secondary.pink}
color.data-viz.categorical.9  → #E317AA
color.data-viz.categorical.10 → #880FB8
color.data-viz.categorical.11 → {color.primary.purple}
color.data-viz.categorical.12 → #9A6324
color.data-viz.neutral.comparison → {color.grey.1}
```

## Next Potential Enhancements

1. Semantic aliases: `semantic.data-viz.series.[n]` referencing the categorical set for ergonomic consumption.
2. Derived tokens for outlines / contrast (e.g. auto contrast text / stroke variants).
3. Monochrome & diverging palettes (e.g. sequential scales for heatmaps) built off these anchors.
4. Documentation snippet / Storybook showcase demonstrating usage and accessibility guidance.
5. Optional dark theme adjustments (lightness shifts) if/when dark mode introduced.

## Implementation Notes

- New file does not automatically enter existing Style Dictionary builds yet: update any config `source` arrays that should expose these tokens (e.g. add `data-viz.json` alongside `colors.json`).
- Prefer referencing existing base tokens (`{color.primary.blue}`) to avoid duplication and simplify future hue changes.
- Keep neutral comparison separate so product teams make an explicit choice to include a neutral series.

## Decision Log

- Chosen ordering rotates between cool and warm hues to maximise adjacent distinctness.
- Included both dark and lighter purple for broader categorical capacity; dark purple placed near end to avoid adjacency with blue.

Additional base tokens added:

- `color.secondary.cyan` (#00A9CE) – retained for potential future data-viz use (no longer mapped to London).
- `color.secondary.region-yellow` (#FAE100) – region-specific yellow kept distinct from focus & warm yellows.

## Region Colours & Contrast Guidance

Region-specific tokens (added in `data-viz.json`):

```text
color.data-viz.region.north-east      → {color.primary.blue}
color.data-viz.region.north-west      → #41B6E6
color.data-viz.region.east-of-england → {color.primary.purple}
color.data-viz.region.midlands        → {color.secondary.pink}
color.data-viz.region.london          → #78BE21
color.data-viz.region.south-west      → #FAE100
color.data-viz.region.south-east      → #ed8b00
```

Semantic aliases (in `semantic-data-viz.json`): `semantic.data-viz.region.*` and `semantic.data-viz.series.*` for ergonomic consumption.

Contrast / legibility recommendations:

- Use a consistent border stroke (e.g. `color.grey.1` or a darker shade of the fill) around adjacent warm hues (South West #FAE100 vs South East #ed8b00) to preserve separation.
- Light Green (#78BE21) and Aqua/Green hues should not be immediately adjacent without a subtle outline if small shapes risk blending.
- Yellow (#FAE100) needs a dark label colour (e.g. `{semantic.color.text.primary}`) and may require an outline for small map areas to meet contrast guidelines.
- Provide non-colour encodings (patterns / tooltips / ARIA descriptions) for users with colour vision deficiencies; avoid relying solely on the two blues or yellow/orange distinction.
- Keep region palette stable; changes affect recognisability in longitudinal map comparisons.

*Maintainer: Add release note once integrated into build outputs.*
