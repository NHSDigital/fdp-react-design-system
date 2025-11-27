# Data Visualisation Architecture

This document outlines the evolving architecture for the FDP Data Visualisation (DV) subsystem. The goal is a **composable, accessible, themable** charting layer built from small React primitives rather than monolithic black‑box chart components.

---

## 1. Layered Model

| Layer | Responsibility | Key Artifacts |
|-------|----------------|---------------|
| Tokens & Theme | Colour palettes (categorical, region, extended variants), spacing, typography, stroke contrast, dark/high‑contrast variants | `packages/nhs-fdp/tokens/*`, colour service (`colors.ts`) |
| Data & Scales | Series registry, scale creation (time, linear, band, log), inversion helpers | `scales.ts`, future `DataContext` / `ScaleContext` |
| Layout & Dimensions | Responsive sizing, margins, coordinate translation | `ChartRoot`, `ChartSurface`, `useDimensions` |
| Cartesian Primitives | Axes, grid lines, zero lines, clipping | `<Axis>`, `<GridLines>`, `<ZeroLine>`, `<ClipPath>` |
| Series Renderers | Visual encodings (line, bar, area, scatter, band/interval) | `<LineSeries>`, `<BarSeries>`, `<AreaSeries>` etc. |
| Interaction State | Legend visibility, tooltip focus datum, keyboard nav index, brush/zoom regions | `VisibilityContext`, `TooltipContext`, `FocusNavContext`, `BrushContext` |
| Overlays & UI | Legend, tooltip portal, crosshair, highlight marker | `<Legend>`, `<Tooltip>`, `<Crosshair>` |
| Accessibility | Live announcements, aria summaries, keyboard traversal, offscreen tables | `<LiveAnnouncer>`, `<AriaSummary>` |
| Services & Utils | Colours, formatters, transforms, data reduction | `colors.ts`, `formatters.ts`, `transforms.ts` |
| Composites | Opinionated presets for quick use | `<LineChart>`, `<FilterableLineChart>`, future `<BarChart>` |

---
## 2. Current State Snapshot

- Implemented: colour/token service (categorical optimisation, extended palette, region & stroke tokens), `Legend` (interactive and announcements), early `LineChart`, `FilterableLineChart` composite, colour stability (`assignSeriesColors`).

- Pending extraction: Axes & grid out of `LineChart`; dimensions provider; visibility context baked into composites; tooltip and crosshair; additional series types.

---
## 3. Core Contexts (Planned)

```tsx
<DataVizProvider theme="light">
  <ChartRoot height={240} data={series}>  // dimensions and series registry
    <ScaleProvider x={{ type:'time' }} y={{ type:'linear' }}>
      <VisibilityProvider>
        <TooltipProvider>
          <FocusNavProvider>
            <ChartSurface>
              <GridLines orientation="y" />
              <Axis kind="y" />
              <Axis kind="x" />
              {series.map(s => <LineSeries key={s.id} {...s} />)}
              <Crosshair />
              <Tooltip />
            </ChartSurface>
            <Legend />
            <AriaSummary />
          </FocusNavProvider>
        </TooltipProvider>
      </VisibilityProvider>
    </ScaleProvider>
  </ChartRoot>
</DataVizProvider>
```
Contexts remain optional—components can fall back to direct props for advanced custom compositions.

---
## 4. Series Contract

Each renderer consumes a uniform `SeriesSpec`:

```ts
interface SeriesSpec {
  id: string;
  label?: string;
  data: Array<Record<string, unknown>>; // minimally { x, y } for Cartesian
  accessors?: { x?: (d)=>any; y?: (d)=>number }; // defaults provided
  color?: string; // explicit override
  palette?: 'categorical' | 'region';
}
```

Renderer responsibilities:

- Generate path / glyphs (memo on (dataRef, scale ranges, accessor identity)).
- Register interactive points (for keyboard and tooltip).
- Honour visibility context (short‑circuit render when hidden).

---
## 5. Colour & Stroke Resolution

- Centralised in `colors.ts` (already implemented):
  - Raw vs optimized categorical strategy.
  - Extended palette (> base length) via lightness deltas.
  - Region mapping with normalisation and warning on missing tokens.
  - Stroke tokens for contrast outlines (with a white‑on‑white override prop in `Legend`).
  - Future: dark / high‑contrast variants → either token alias sets or theme suffix (e.g. `color.data-viz-dark.categorical.1`).

---
## 6. Accessibility Strategy

| Feature | Mechanism |
|---------|-----------|
| Legend toggling | `aria-pressed` and live region announcement |
| Keyboard navigation of points | Focus cycle (arrow keys) via `FocusNavContext` |
| Tooltip narration | Live region diff (planned) |
| Data table alternative | Hidden `<AriaSummary>` summarising series & latest values |
| High contrast strokes | Stroke tokens and conditional override |
| Screen reader axis context | Offscreen description elements referenced by `aria-describedby` |

---
## 7. Interaction Model

- Single pointer listener in `ChartSurface` dispatches pointer coords → nearest datum resolver (spatial index planned if large datasets) → updates Tooltip & Focus contexts.
- Legend toggling mutates a visibility set; series components subscribe & short‑circuit.
- Brush (future): captures drag rectangle, updates scale domains (pan/zoom) via a reducer.

---
## 8. Incremental Refactor Roadmap
 
| Step | Goal | Deliverable |
|------|------|-------------|
| 1 | Dimension abstraction | `ChartRoot` and migrate `useChartDimensions` logic |
| 2 | Scale isolation | `ScaleContext` and adopt in `LineChart` |
| 3 | Axis extraction | `<Axis>` & `<GridLines>` replacing inline SVG code |
| 4 | Series modularity | `<LineSeries>` used by rewritten composite |
| 5 | Visibility context | `Legend` auto-wires when `items` omitted |
| 6 | Tooltip layer | `TooltipContext`, nearest point resolver, base tooltip |
| 7 | Keyboard enhancements | Centralised focus nav context consumed by points |
| 8 | Additional series | Bar / Area / Scatter leveraging same contexts |
| 9 | Accessibility table | `<AriaSummary>` auto generated |
| 10 | Dark/HC themes | Theme context and palette switching |

Each step preserves public API of existing composites wherever feasible.

---
## 9. Testing Strategy
 
- Unit: colour utilities, scale factory, region normalization, visibility reducer.
- Component: axis snapshot, legend ↔ visibility, tooltip appearance, keyboard traversal.
- Accessibility: axe integration against composites & interactive states.
- Visual Regression: baseline stories for primitives and composites (hidden states, region palette, dense series).

---
## 10. Performance Considerations
 
| Concern | Mitigation |
|---------|-----------|
| Large series (thousands of points) | Path generation memo and optional data thinning (Douglas–Peucker / moving average); potential canvas layer swap |
| Tooltip nearest search | Index points by x (binary search) then local linear scan; spatial kd-tree if scatter |
| Re-render churn | Context value segmentation (visibility separate from tooltip, etc.) |
| Theming | Token resolution cached; palette arrays precomputed |

---
## 11. Extension Points
- Custom formatter registry (register id → fn, consumed by Axis/Tooltip).
- Custom series renderer (implement `SeriesRenderer` interface & mount inside `ChartSurface`).
- Plugin hook system (lifecycle: onPointerMove, onSeriesRegister).

---
## 12. Usage Modes
1. **Quick**: `<FilterableLineChart series={...} />`
2. **Semi‑custom**: Compose `<ChartRoot><LineSeries/><Axis/></ChartRoot>`.
3. **Advanced**: Supply your own series and overlays, optional custom contexts.

---
## 13. Open Questions
- Do we need stacked / grouped bar logic early, or defer until after tooltip system? 
- Should extended palette variants be user-toggleable vs automatic beyond 12? 
- How to expose scale inversion safely for external brush plugins?

---
## 14. Glossary
- **Series**: Homogeneous set of datapoints sharing an id & styling.
- **Datum**: Single (x,y[,meta]) object.
- **Visibility Set**: Set of series ids currently hidden.
- **Renderer**: Component responsible for turning a SeriesSpec into SVG (or canvas) elements.

---
## 15. Summary
This architecture shifts us from a one-off chart implementation to a **framework of interoperable primitives**. It balances developer ergonomics (quick presets) with depth (fine-grained composition) while embedding accessibility and theming from the ground up.

> Next actionable step: implement `ChartRoot` and `ScaleContext` and retrofit `LineChart` internally without breaking its public API.
