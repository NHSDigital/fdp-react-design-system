# Data Visualisation Roadmap & UKHSA Alignment

This document tracks the current status of data visualisation capabilities in the Design System and the remaining work to reach fuller alignment with UKHSA dashboard needs.

## Delivered (to date)

Foundational components & infra:

- Core primitives: `ChartContainer`, `LineChart`, `ChartWithTableTabs` (accessible chart ↔ data table toggle with CSV export)
- Hooks: `useChartDimensions`, `useFocusNav` (now partially superseded by tooltip keyboard nav)

Colour & palette system:

- 12 categorical series tokens (raw + optimised order strategies)
- Region colour tokens (stable geographic mapping) + neutral comparison token
- Stroke (contrast outline) tokens for categorical & region palettes
- Semantic alias tokens (series & regions)
- Extended palette for >12 series (lightness variant rounds) & optimisation tests (ΔE adjacency threshold)
- Sequential & diverging colour scale utilities (factory functions) + palette & token documentation stories

Interaction & accessibility:

- Tooltip (pointer + keyboard focus) with live region announcements & keyboard navigation (Arrow/Home/End/Escape, optional wrap)
- Legend (static + interactive) with series toggling (remove vs fade modes) & visibility-driven domain recompute
- Visibility modes: `remove` (default) vs `fade` + optional recompute of y-domain on visible series
- Uniform keyboard focus management across series points via Tooltip context
- Live region announcements for focused data points

Chart types & primitives:

- Line series (points optional, focusable)
- Bar series primitive (time and categorical band scales) with:
  - Adaptive & explicit width control
  - Uniform grouped width algorithm (median step + proportional gaps)
  - Non-overlap clamping
  - Category colour mode (single-series categorical)
- Area series primitive (with optional line overlay) + smoothing toggle

Customisation:

- Smoothing toggle (`smooth`) & stroke width (`strokeWidth`) on `LineSeriesPrimitive` and exposed via `LineChart`
- Smoothing toggle on `AreaSeriesPrimitive`
- Date & value formatter props on `LineChart` + automatic axis date formatting heuristic

Documentation & stories:

- Storybook reorganisation: `Data Visualisation/LineChart`, `BarChart`, `AreaChart`, `Utilities/*`
- Palette, legend, region colour token tables, grouped/simple bars, compositional primitives

Testing & quality:

- Token integrity & palette optimisation tests
- Component smoke tests (existing)

Performance groundwork:

- Efficient domain computation & median step inference in bar width logic (preparation for large series guidance)

NOTE: Earlier "Newly Added" subsection folded into this consolidated Delivered list for clarity.

## In Progress / Upcoming

| Theme | Next Steps | Status / Notes |
|-------|------------|----------------|
| Interaction | Enhanced tooltip layouts (aggregated summaries, positioning refinements) | Planned – base tooltip delivered |
| Interaction | Legend announcement enhancements (custom SR phrasing) | Planned – basic live updates present |
| Chart Types | Stacked Area / Stacked Bar | Not started – requires stacking util (baseline offsets) |
| Chart Types | Scatter & Point density guidance | Not started |
| Accessibility | Aggregated / debounced announcements | Partial – point-level done; summary & debounce pending |
| Accessibility | High-contrast / pattern fills | Not started – token + pattern strategy needed |
| Accessibility | Focus order & ARIA roles audit | Planned – initial roles present |
| Internationalisation | Global number/date formatting context + table locale alignment | Partial – per-chart formatters exist |
| Performance | Large series sampling / down-sampling helper + docs | Not started |
| Export | PNG/SVG export utility | Not started |
| Visual Regression | Chromatic story expansion (area, bar width edge cases, visibility modes) | Partial – base set added |
| Theming | Dark mode token themes + adaptive stroke logic | Not started |
| Mapping | Choropleth (region scale legend + geo integration) | Not started |
| Layout | Stacked & overlapping area transition smoothing | Not started |
| Documentation | High-contrast & accessibility usage guide | Not started |
| QA | Additional unit tests for bar width & smoothing toggles | Planned |

## Phased Migration Plan (UKHSA Dashboard)

1. Adopt LineChart + ChartContainer for existing time‑series (replace bespoke implementations) using optimised palette (default)
2. Introduce Legend + tooltip & enable CSV download for transparency
3. Add additional chart types (Bar / Area) and unify legend & interaction patterns
4. Implement high‑contrast mode & pattern fills; integrate analytics events (interaction telemetry)
5. Add image export + performance sampling guidance + full i18n wrappers
6. Introduce Choropleth / map visualisations and dark mode theme support

## Risks / Considerations

- Extended palette variants rely only on lightness shifts (ΔL ±12 / ±24); may need chroma adjustments if background themes change
- Stroke contrast assumes light background; dark theme will revisit token selection
- Tooltip & legend toggling required before broad production rollout (currently interpretability relies on external labelling)

## Quick Win Backlog (updated)

1. High-contrast pattern option flag
2. Export (PNG/SVG) utility
3. Performance sampling helper / guidance doc
4. Aggregated tooltip summary + debounce
5. Stacked area & bar (shared stacking util)
6. Dark mode token prototype (minimal inversion)

---
Last updated: 2025-08-20
