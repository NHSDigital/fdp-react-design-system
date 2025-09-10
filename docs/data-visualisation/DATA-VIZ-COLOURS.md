# Data Visualisation Colour Tokens

This document captures the rationale and mapping for introducing a 12‑colour categorical palette (plus optional neutral) into the design token system.

## Source Palette (Authoritative List)

```tsx
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
```

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

## Severity Palette (Alert Levels)

Introduced tokens:

```text
color.data-viz.severity.low       → {color.primary.green}
color.data-viz.severity.moderate  → {color.secondary.warm-yellow}
color.data-viz.severity.high      → {color.primary.red} (restored mapping)
color.data-viz.severity.critical  → {color.secondary.pink}
```

Usage:

- Intended for status / alert overlays in charts (e.g. threshold bands) and legends.
- Retrieve via utilities: `getSeverityColor(id)` / `pickSeverityColor(id, idx)`.
- Strokes: `color.data-viz.stroke.severity.*` provide contrast outlines (auto‑derived or explicit) consumed by `pickSeverityStroke`.

Accessibility:

- Provide text / icon redundancy (shape or icon for critical vs high) – do not rely solely on hue difference between red and pink when small.
- Use `critical` sparingly; reserve for life‑/safety‑critical thresholds.

## Organisational Level Palette

Introduced tokens:

```text
color.data-viz.org-level.trust     → {color.primary.blue}
color.data-viz.org-level.ambulance → #41B6E6
color.data-viz.org-level.icb       → {color.primary.green}
color.data-viz.org-level.region    → {color.secondary.warm-yellow}
```

Utilities: `getOrgLevelColor(id)` / `pickOrgLevelColor(id, idx)` plus matching stroke functions.

Design rationale:

- Keeps mapping intuitive (trust/blue, ambulance/light blue, system/ICB green for capability, region yellow as meta scope).
- Limited, memorisable set; avoids overlapping with severity red/pink to reduce ambiguity when both dimensions appear.

## Stroke (Outline) Strategy

Stroke tokens added under `color.data-viz.stroke.*` for: categorical, region, severity, org-level.

Approach:

1. For categorical fills we derive contrasting strokes by lightening/darkening base hues (± fixed L* deltas) ensuring adequate edge contrast on light backgrounds.
2. Region strokes were recalculated to avoid binary white/black: each chosen by analysing relative luminance of fill and selecting lighten vs darken path.
3. Org-level currently uses a simple high‑contrast white stroke; revisit if dark theme / varied backgrounds added.

Guidelines:

- Always apply stroke for small area fills (map regions < 24px equivalent width) to preserve separation.
- Omit stroke for large, contiguous categorical areas where visual noise outweighs benefit.

## Semantic Token Layering Cleanup

We now split semantic colour sources into three logical layers to remove 200+ duplicate collisions in Style Dictionary builds:

1. `semantic-core.json` – canonical base tokens (`semantic.intent`, most `semantic.context`, `semantic.surface`).
2. `semantic-calculated.json` – only derived state variants (`semantic.intent-hover|active|light`) plus additive form background states (error/success).
3. `semantic-enhanced.json` – relationship/compositional tokens (`semantic.relationship.*`).

Result: collisions reduced to zero (previously 209) improving build signal. If adding new tokens choose the appropriate file; avoid re‑declaring existing paths.

## Utilities & Caching

Key exported helpers (in `src/components/DataVisualisation/utils/colors.ts`):

| Function | Purpose |
|----------|---------|
| `assignSeriesColors(series, { palette })` | Bulk assigns colours from categorical/region/severity/org-level sets. |
| `setCategoricalColorStrategy('optimized'\|'raw')` | Switches between perceptually optimised and raw token order. |
| `getExtendedCategoricalPalette()` | Returns base palette plus generated light/dark variants. |
| `invalidateColorCaches({ regions, categorical, strokes })` | Clears internal caches (use during Storybook HMR after editing token JSON). |
| `createSequentialColorScale(config)` | Generates continuous sequential scale (Lab interpolation). |
| `createDivergingColorScale(config)` | Diverging scale with neutral midpoint. |

## Future Considerations

- Add automated CI rule failing build if collisions > 0.
- Provide `semantic.data-viz.series.[n]` aliases once palette stabilises to decouple series assignment from token path changes.
- Investigate dynamic stroke colour selection for dark mode readiness.

## Non-Colour Encodings (Patterns)

To support users with colour vision deficiencies (CVD) and to add an additional channel for highlighting critical distinctions, a lightweight SVG pattern utility is provided (`utils/patterns.ts`). Patterns are exported as tiny (6–8px) tiling SVGs and can be consumed either as:

- `background-image: url(data:image/svg+xml;...)` (recommended for legend swatches / static keys)
- Inline `<pattern>` definitions referenced via `url(#id)` (for complex SVG charts)

### Available Pattern Kinds

`diagonal`, `diagonal-dense`, `rev-diagonal`, `rev-diagonal-dense`, `horizontal`, `horizontal-dense`, `vertical`, `vertical-dense`, `cross`, `cross-dense`, `grid`, `grid-dense`, `dot`, `dot-dense`, `checker`, `zigzag`, `weave`, `ring`.

These were selected to balance: recognisability at small size (≥10px), minimal visual vibration, and distinct structural archetypes (orientation, topology, filled vs stroke motifs).

### Recommended Pairings

| Scenario | Guidance |
|----------|----------|
| >8 categorical series | Add patterns only to the later series where colour distance narrows. |
| Critical vs baseline band | Apply a dense hatch (e.g. `diagonal-dense`) to the critical band; retain flat colour for baseline. |
| Severity overlay and region fills | Keep region purely colour; apply pattern to severity mask to avoid cognitive overload. |
| Printing (B/W) | Enable patterns for all non-neutral series to preserve distinction when hues collapse to similar greys. |

### Accessibility Principles

1. Do not rely on pattern alone: always retain colour (dual encoding) unless producing a strictly monochrome export.
2. Avoid combining high-frequency patterns (e.g. `cross-dense`) adjacent to fine gridlines – risk of moiré / visual fatigue.
3. Keep stroke outlines when patterned areas are small (<24px) to maintain crisp boundaries.
4. Use at most one dense pattern in a single small multiple; prefer sparse variants for secondary distinctions.
5. Provide textual / ARIA descriptors explaining pattern meaning (legend already exposes labels; future work may add `description`).

### Implementation Snippet

```tsx
import { generatePattern, patternDataUrl } from '../utils/patterns';

const pat = generatePattern('diagonal-dense');
const style = { backgroundColor: '#005EB8', backgroundImage: `url(${patternDataUrl(pat)})` };
```

### When Not To Use Patterns

- Highly interactive, animated charts (patterns can create flicker during transitions).
- Heatmaps / dense matrices where colour lightness already encodes magnitude – prefer a secondary encodings (icons, contours) instead.
- Tiny legend swatches <12px: patterns become noisy and reduce legibility.

### Future Enhancements (Patterns)

- Automated contrast check between pattern stroke colour and fill to adjust stroke dynamically.
- Export pattern tokens / semantic aliases (e.g. `semantic.data-viz.pattern.alert`) if convergence emerges across products.
- Dark mode adaptation (invert or lighten pattern stroke for dark surfaces).

