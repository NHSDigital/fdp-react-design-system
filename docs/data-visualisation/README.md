# Data Visualisation Overview

High-level guidance, architecture, and conventions for data visualisation components in the Design System.

## Goals

1. Consistent visual language (tokens, typography, spacing)
2. Accessibility-first (keyboard, screen reader, colour contrast)
3. Composability (low-level primitives and ergonomic chart wrappers)
4. Predictable scaling & layout (deterministic axes, margins, responsive behaviour)
5. Progressive enhancement (core information available without interaction; richer context via tooltips / legends / focus states)
6. Extensibility (easy to introduce new series / chart types without rewriting core infrastructure)

## Layered Architecture

| Layer | Purpose | Examples |
|-------|---------|----------|
| Context Foundations | Provide shared measurement and scaling and state | `ChartRoot`, `ScaleContext` |
| Data / Visibility State | Track series presence & hidden state | `VisibilityContext` |
| Interaction State | Pointer focus, keyboard navigation, nearest-point logic | `TooltipContext` |
| Primitives | Low-level render units | `Axis`, `GridLines`, `LineSeriesPrimitive`, `Legend`, `TooltipOverlay` |
| Composition | Assemble primitives declaratively | (Custom composition stories) |
| High-level Charts | Opinionated convenience wrappers | `LineChart` |

## Core Contexts

### ChartRoot

Calculates and exposes chart dimensions, inner plot area, margins, and a coordination surface for layered elements (e.g. overlay layers).

### ScaleContext

Provides `xScale`, `yScale`, tick calculation, and scale-driven formatting utilities. Supports overrides (explicit tick values, formatting functions) while guarding against label collisions.

### VisibilityContext

Maintains a set of hidden series IDs; primitives & legends subscribe to reflect toggled states. Behaviour configurable via `visibilityMode` (see Visibility & Domain Behaviour).

### TooltipContext

Central state for the currently "focused" datum (via pointer hover, keyboard nav, or programmatic focus). Supplies navigation helpers:

- `focusNextPoint` / `focusPrevPoint`
- `focusNextSeries` / `focusPrevSeries`
- `focusNearest(xPx, yPx)` for pointer-based snapping

## Components & Primitives

| Category | Component | Notes |
|----------|-----------|-------|
| High-level | `LineChart` | Aggregates axes, grid, series, legend, tooltip overlay; exposes convenience props (e.g. tick alignment) |
| Primitive | `LineSeriesPrimitive` | Renders path and focusable points; registers with tooltip & visibility contexts |
| Primitive | `Axis` | Supports collision strategies (wrap, rotate, truncate), explicit tick values, formatting hooks |
| Primitive | `GridLines` | Visual reference lines (tied to scale ticks) |
| Interaction | `Legend` | Toggles visibility (auto-wires to `VisibilityContext`) |
| Interaction | `TooltipOverlay` | Renders focused datum indicator / label (a11y enhancements in progress) |
| Infrastructure | `PointerEventsLayer` (story usage) | Captures pointer events over full plot area; delegates to `focusNearest` |

## X‑Axis Tick Alignment Modes

Three modes influence tick -> point relationship (precedence highest first):

1. Explicit `xTickValues`
2. Data-aligned `alignXTicksToData`
3. Automatic "nice" ticks (default)

See detailed guide: [LineChart X‑Axis Tick Alignment](./x-axis-ticks.md)

## Interactivity & Keyboard Model

Opt-in keyboard controls (`keyboardNav` prop on `LineChart`, or custom handlers using `TooltipContext`):

- Arrow Left / Right: Previous / next point in the current series.
- Arrow Up / Down: Previous / next series (retains index, clamps if shorter). Hidden series are skipped.
- Home: Jump to first point in the current series (or first visible series if none focused yet).
- End: Jump to last point in the current series (or first visible series if none focused yet).
- Escape: (Future) Clear focused point.

To enable built-in navigation, pass `keyboardNav`. This renders a focusable wrapper with an `onKeyDown` handler. If you need custom semantics, omit the prop and implement your own `onKeyDown` using the context methods.

Optional wrap-around behaviour (disabled by default) can be enabled via `wrapAroundNav` on `LineChart` (or `wrapAround` prop on `TooltipProvider`). When enabled, attempting to move past the first/last point or series wraps to the opposite end within that navigation axis.

Pointer movement snaps to the nearest point (Euclidean distance) within a pixel threshold (default 40px) ensuring predictable tooltip activation without requiring pixel-perfect aiming.

## Accessibility Principles

| Aspect | Current | Planned Enhancements |
|--------|---------|----------------------|
| Focus Indicators | Visible highlight circle and tooltip overlay | High-contrast outline & motion reduction variant |
| Screen Reader Output | (WIP) Basic aria-label on points | Live region announcements on focus and summary description |
| Colour Contrast | Palette derived from tokens with contrast validation | Automated audit in CI |
| Keyboard Navigation | Horizontal and vertical movement across points/series | Home/End, Page Up/Down semantics; skip hidden series |
| Hidden Series | Removed from DOM | Optional faded style with aria-hidden |

Guidance: Always accompany a chart with a textual summary (key trend / anomaly) for users who cannot or do not consume visual detail.

## Performance Considerations

- O(N * S) point registration where N = points per series, S = series count (acceptable for typical dashboard scales < ~10k total points). Future optimisation: spatial index (Kd-tree) for nearest lookup.
- Tick collision resolution avoids layout thrash by precomputing candidate labels before commit.
- Avoid rendering thousands of focusable point nodes; a density threshold may pivot to canvas or clustered points in future roadmap.

## Extensibility Guidelines

1. Introduce new series primitives (e.g. `BarSeriesPrimitive`) by:
   - Registering their data with `TooltipContext` (if focusable).
   - Respecting `VisibilityContext` hidden IDs.
   - Using shared scale context for coordinates.
2. Use composition first: build custom chart variants in stories via primitives before codifying a new high-level component.
3. Prop Naming: prefer `xTickValues`, `yDomain`, `series`, `alignXTicksToData` style — explicit & domain-oriented.
4. Keep visual-only elements (e.g. backgrounds) out of accessibility tree (`aria-hidden="true"`).

## Visibility & Domain Behaviour

`LineChart` props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visibilityMode` | `'remove' \| 'fade'` | `remove` | Hidden series are either removed entirely or rendered faded (opacity 0.25, aria-hidden, points unfocusable). |
| `recomputeYDomainOnHidden` | `boolean` | `false` | Recomputes y-scale using only currently visible series values. |

Faded mode preserves trend context while removing interactive / accessibility surface.

## Roadmap (Indicative)

- [ ] Accessible live region for aggregated multi-series tooltip content
- [ ] Heuristic tick alignment auto mode (switch to data-aligned below threshold)
- [ ] Bar / Area / Scatter primitives
- [ ] Canvas or hybrid renderer for large datasets
- [x] Theming hooks for data viz colour scales beyond current palette (diverging/sequential)
- [ ] Improved responsive label strategies (multi-line wrapping heuristics, ellipsis tooltips)

## Quick Example

```tsx
<LineChart
  series={series}
  yLabel="Value"
  alignXTicksToData
  // or xTickValues={[...explicitDates]}
/> 
```

## Related Docs

- [X‑Axis Tick Alignment](./x-axis-ticks.md)
- (Coming soon) Accessibility implementation notes
- Colour scale guidelines (sequential & diverging) below

## Colour Scales: Sequential & Diverging

In addition to the categorical and region palettes, utilities are now provided for continuous (metric) encodings:

### Sequential

Use when values progress monotonically (e.g. rate, count, single‑direction magnitude). Create a scale:

```ts
import { createSequentialColorScale } from '../../components/DataVisualisation/utils/colors';

const scale = createSequentialColorScale({
  domain: [minValue, maxValue],
  // Optional custom anchor colours (light -> dark). If omitted a lightness ramp is generated from NHS blue.
  colors: ['#e5f1fa', '#005eb8']
});

const fill = scale(value); // returns hex
```

Guidance:
1. Provide 2–5 anchor colours to emphasise critical thresholds or perceptually uniform transitions.
2. Ensure sufficient contrast for overlays (consider adding outline on very light swatches).
3. Avoid using more than one sequential palette in the same small visual unless clearly separated.

### Diverging

Use when values deviate around a meaningful midpoint (e.g. zero, average, target). Create a scale:

```ts
import { createDivergingColorScale } from '../../components/DataVisualisation/utils/colors';

const scale = createDivergingColorScale({
  domain: [-maxMagnitude, 0, maxMagnitude],
  colors: ['#d5281b', '#f2f2f2', '#007f3b'] // negative, neutral, positive
});

const fill = scale(delta);
```

If colours are omitted, a ramp is auto‑generated between NHS red → neutral → green. Provide explicit anchors where colour meaning is semantic (e.g. deficit vs surplus).

### Common Options

Both factories clamp by default – values outside the domain map to the nearest end colour. Disable clamping via `clamp: false` if you want extrapolation behaviour (not usually recommended for legend alignment).

### Accessibility

1. Don’t rely on colour hue alone for thresholds – pair with labels, markers, or patterned overlays for critical boundaries.
2. For diverging scales choose a sufficiently light neutral to keep both sides distinguishable for users with colour vision deficiencies.
3. Test palettes in simulated protanopia/deuteranopia; avoid red/green pairs with similar lightness – consider adding a secondary encoding (shape, underline) when unavoidable.

### Future Enhancements

- Tokenisation of commonly used sequential ramps (e.g. `color.data-viz.sequential.blue.*`).
- Perceptual uniformity audit (ΔE between equal domain steps) & optional logarithmic mapping helper.
- Discrete stepped scale generator for choropleth legends.


---
Feedback or proposals: open a discussion or issue with the label `data-viz`.
