# Data Visualisation Roadmap & UKHSA Alignment

This document tracks the current status of data visualisation capabilities in the Design System and the remaining work to reach fuller alignment with UKHSA dashboard needs.

## Delivered (to date)

Foundational components & infra:

- Core primitives: `ChartContainer`, `LineChart`, `ChartWithTableTabs` (accessible chart ↔ data table toggle with CSV export)
- Hooks: `useChartDimensions`, `useFocusNav` (now partially superseded by tooltip keyboard nav)

**NEW: Statistical Process Control (SPC) Charts:**

- **Full SPCChart component** with XmR (Individuals/Moving Range), T (Time between events), and G (Count between events) chart types
- **Rule detection engine**: Implements 4 core NHS/IHI rules (single point, shift, trend, two-of-three) plus optional fourth-of-five rule
- **Improvement direction support**: UP/DOWN/NEUTRAL semantic classification for special cause styling (concern vs improvement)
- **Visual elements**: Control limits (UCL/LCL), centre line, sigma zones, special cause markers, variation/assurance icons
- **Advanced features**: Baseline segmentation for re-phasing, target lines (USL/LSL/TARGET), ghost periods for provisional data
- **Accessibility**: Live region narration with context metadata, proper ARIA roles, keyboard navigation
- **Healthcare integration**: Pre-built stories for mortality rates, readmissions, A&E wait times, infection rates
- **Testing coverage**: 25+ unit tests covering dataset variations, rule detection, edge cases, SSR compatibility

**Enhanced Data Grid Components:**

- **NavigationSplitView keyboard navigation**: Complete pane-level navigation with Enter/Escape container model, NHS-consistent focus rings
- **AriaTabsDataGrid actions area**: Responsive placement (inline when space allows, above otherwise) with keyboard navigation integration
- **ResponsiveDataGrid actions forwarding**: Seamless integration of gridActions props through component hierarchy
- **Tablet breakpoint fixes**: Robust focus management across all device breakpoints with proper DOM structure

Colour & palette system:

- 12 categorical series tokens (raw + optimised order strategies)
- Region colour tokens (stable geographic mapping) + neutral comparison token
- Severity palette tokens (low / moderate / high / critical) + semantic aliases
- Organisational level palette tokens (trust / ambulance / icb / region) + semantic aliases
- Stroke (contrast outline) tokens for categorical, region, severity & org‑level palettes
- Semantic alias tokens (series, region, severity, org‑level + stroke groups)
- Extended palette for >12 series (lightness variant rounds) & optimisation tests (ΔE adjacency threshold)
- Sequential & diverging colour scale utilities (factory functions) + palette & token documentation stories
- Token layering refactor (core / calculated / enhanced / data‑viz) eliminating 200+ collisions + automated collision guard script

Interaction & accessibility:

- Tooltip (pointer + keyboard focus) with live region announcements & keyboard navigation (Arrow/Home/End/Escape, optional wrap)
- Legend (static + interactive) with series toggling (remove vs fade modes) & visibility-driven domain recompute
- Visibility modes: `remove` (default) vs `fade` + optional recompute of y-domain on visible series
- Uniform keyboard focus management across series points via Tooltip context
- Live region announcements for focused data points
- Pattern utility & gallery (18 hatch / dot / structural patterns) with dual colour+pattern legend support
- Legend pattern overlay (retains aria-pressed semantics) + a11y & snapshot tests
- ChartNoScript SSR fallback (table + noscript) with hydration hide rule
- ChartEnhancer helper (auto applies .fdp-chart--enhanced, optional delay for demos)

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

- Storybook reorganisation: `Data Visualisation/LineChart`, `BarChart`, `AreaChart`, `SPC`, `Utilities/*`
- **SPC documentation suite**: Comprehensive MDX docs, healthcare examples, dataset variations, embedded icon demos
- **Enhanced Storybook navigation**: Improved story organization with SPC chart examples for clinical scenarios
- Palette, legend, region colour token tables, grouped/simple bars, compositional primitives
- Pattern gallery & Colour+Pattern dual-encoding legend story
- Expanded DATA-VIZ-COLOURS guidance (severity, org-level, strokes, patterns & accessibility principles)

Testing & quality:

- **SPC chart test coverage**: 25+ tests covering rule detection algorithms, chart type variations, accessibility features
- **Component keyboard navigation**: Comprehensive testing for NavigationSplitView pane transitions and focus management
- **SSR compatibility**: SPC charts fully compatible with server-side rendering and hydration
- Token integrity & palette optimisation tests
- Component smoke tests (existing)
- Pattern overlay unit & inline snapshot regression tests
- Collision detection script integrated prepublish

Performance groundwork:

- Efficient domain computation & median step inference in bar width logic (preparation for large series guidance)

NOTE: Earlier "Newly Added" subsection folded into this consolidated Delivered list for clarity.

## In Progress / Upcoming

| Theme | Next Steps | Status / Notes |
|-------|------------|----------------|
| **SPC Charts** | **Enhanced rule configuration & custom thresholds** | **In Progress – Core engine complete, advanced settings exposed** |
| **SPC Charts** | **Multi-phase baseline analysis & automatic change detection** | **Planned – Foundation laid with baseline segmentation** |
| **Navigation** | **Cross-component keyboard navigation patterns** | **Complete – NavigationSplitView and AriaTabsDataGrid enhanced** |
| **Data Grids** | **Advanced filtering and search capabilities** | **Planned – Actions area foundation ready** |
| Interaction | Enhanced tooltip layouts (aggregated summaries, positioning refinements) | Planned – base tooltip delivered |
| Interaction | Legend announcement enhancements (custom SR phrasing) | Planned – basic live updates present |
| Chart Types | Stacked Area / Stacked Bar | Not started – requires stacking util (baseline offsets) |
| Chart Types | Scatter & Point density guidance | Not started |
| Accessibility | Aggregated / debounced announcements | Partial – point-level done; summary & debounce pending |
| Accessibility | Pattern + colour dual encoding rollout guidance | Partial – utility & docs shipped; need adoption guidance & CVD pairing matrix |
| Accessibility | Focus order & ARIA roles audit | **Enhanced – SPC charts fully accessible, data grids keyboard-navigable** |
| Internationalisation | Global number/date formatting context + table locale alignment | Partial – per-chart formatters exist |
| Performance | Large series sampling / down-sampling helper + docs | Not started |
| Export | PNG/SVG export utility | Not started |
| Visual Regression | Chromatic story expansion (area, bar width edge cases, visibility modes) | Partial – base set added |
| Theming | Dark mode token themes + adaptive stroke logic | Not started |
| Mapping | Choropleth (region scale legend + geo integration) | Not started |
| Layout | Stacked & overlapping area transition smoothing | Not started |
| Documentation | High-contrast & pattern usage deep dive (CVD scenarios, do/don't) | Planned |
| QA | Additional unit tests for bar width & smoothing toggles | Planned |
| Patterns | Deterministic pattern ids + optional semantic pattern tokens | Planned |
| Governance | Versioned changelog entries for data-viz primitives | Planned |

## Phased Migration Plan (UKHSA Dashboard)

1. **Adopt LineChart + ChartContainer for existing time‑series** (replace bespoke implementations) using optimised palette (default)
2. **Introduce SPC charts for process monitoring** – Deploy SPCChart for mortality rates, A&E wait times, infection surveillance with rule detection
3. **Enable Legend + tooltip & CSV download** for transparency and enhanced keyboard navigation
4. **Integrate enhanced data grids** – Use NavigationSplitView with keyboard navigation for dashboard drill-down scenarios
5. Add additional chart types (Bar / Area) and unify legend & interaction patterns
6. Implement high‑contrast mode & pattern fills; integrate analytics events (interaction telemetry)
7. Add image export + performance sampling guidance + full i18n wrappers
8. Introduce Choropleth / map visualisations and dark mode theme support

## Risks / Considerations

- Extended palette variants rely only on lightness shifts (ΔL ±12 / ±24); may need chroma adjustments if background themes change
- Stroke contrast assumes light background; dark theme will revisit token selection
- Tooltip & legend toggling required before broad production rollout (currently interpretability relies on external labelling)

## Quick Win Backlog (updated)

1. **SPC chart baseline analysis automation** – Detect significant changes and suggest phase boundaries
2. **Enhanced data grid filtering** – Build on NavigationSplitView keyboard navigation with search/filter capabilities  
3. Export (PNG/SVG) utility
4. Stacked area & bar (shared stacking util)
5. Aggregated tooltip summary + debounce
6. Performance sampling / down-sampling helper + doc
7. Choropleth baseline (TopoJSON ingestion + region colouring + legend)
8. Dark mode token prototype (minimal inversion, stroke adaptation)
9. Deterministic pattern id generation & semantic pattern tokens (optional)
10. High-contrast override mode (force stroke + pattern strategy)
11. Advanced legend: grouping, search/filter, ordering API
12. Internationalisation context (locale cascades to axis + tooltip + table)

---
Last updated: 2025-08-30
