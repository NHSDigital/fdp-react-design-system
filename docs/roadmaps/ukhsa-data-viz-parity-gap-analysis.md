# UKHSA Data Visualisation Parity – Gap Analysis

Date: 2025-08-27  
Owner: Design System Team

Compared codebases:

* NHS FDP Design System (`src/components/DataVisualisation/*` and related tables / grids)
* UKHSA Dashboard Frontend (`src/app/components/ui/ukhsa/*` – map, metrics & filter UI)

## 1. Executive Summary

Our design system provides a rich generic charting & data-table accessibility layer (charts, palettes, scales, legend patterns, Gantt, sortable data grid).  
UKHSA’s frontend provides a mature interactive map and domain‑specific controls, key/legend, filters, and metric discovery patterns but lacks reusable generic chart primitives and colour scale utilities.  

**We need (to reach UKHSA feature coverage):** Map wrapper and controls, map legend/key, severity colour tokens, chart filter bar, metric card variant, choropleth helpers, noscript fallback helper.  
**UKHSA could adopt (to leverage our strengths):** Accessible chart+table tabs, perceptual colour scales, categorical/region palettes, data grid and multi-sort, Gantt, sequential/diverging scales.

## 2. Inventories

### 2.1 Our Data Visualisation Assets

Core & Stories:

* LineChart / CompositionalLineChart / FilterableLineChart / BarChart / Area (via primitives)
* ChartWithTableTabs (chart ↔ data table accessibility pattern)
* Legends: `Legend`, `RegionLegend`
* Palettes & Colour Utilities: categorical (raw/optimized), extended palette, sequential & diverging scales, region and stroke tokens
* Series utilities: colour assignment, lightness variants, cache invalidation
* Tables: SortableDataTable, ResponsiveDataGrid, multi-sort / tab integration
* GanttChart (timeline/task visualization)
* Tests: palette correctness, sequential/diverging interpolation, legend interactivity, token resolution

### 2.2 UKHSA Relevant Data / Viz Components

* Map (Leaflet) with: ZoomControl, AttributionControl, FullscreenControl, KeyControl (severity legend), MapLegendControl, HealthAlertControl, CoverControl, Logo layer
* Severity Key (Green/Yellow/Amber/Red) with translation support
* Metrics discovery & summary: MetricsCard, MetricsSummary, MetricsSearch, Metrics filters (FilterBanner, FilterDropdowns, StaticFilter, SelectedFilters, TimePeriodDropdown, VaccinationDropdown)
* Structural / auxiliary: PhaseBanner, GlobalBanner, CookieBanner (contextual, not chart-specific)
* Accessibility fallback: ChartNoScript (noscript download link pattern)

No generic reusable chart primitives or colour scale utilities identified in the UKHSA code scan (no LineChart / BarChart abstractions, no palette or scale tooling, no integrated chart↔table component).

## 3. Capability Mapping

| Capability | Our DS | UKHSA | Status |
|------------|--------|-------|--------|
| Generic charts (line/bar/filtered) | Yes | No | We surpass |
| Chart and data table tabs (a11y) | Yes | No | UKHSA gap |
| Palettes (categorical and extended) | Yes | Hardcoded severity | UKHSA gap |
| Sequential / diverging scales | Yes | No | UKHSA gap |
| Legend (generic and region) | Yes | Map key only | Both can unify |
| Gantt / timeline | Yes | No | UKHSA gap |
| Sortable multi-tab data grid | Yes | Not generic | UKHSA gap |
| Map wrapper and pluggable controls | No | Yes (mature) | Our gap |
| Map legend/key toggle | No | Yes | Our gap |
| Map severity colour domain | No tokens | Yes (implicit) | Our gap |
| Chart filter suite (time/metric) | Basic (external) | Yes (multiple) | Our gap |
| Metric summary / card pattern | Generic SummaryCard only | Yes (MetricsCard/Summary) | Our gap |
| Noscript fallback helper | Not dedicated | Yes | Our gap |
| Internationalisation inside viz UI | Consumer-managed | Integrated with t() | Neutral |

## 4. Gaps for Us to Add

### 4.1 Map Visualisation Package

**Deliverables:** `<Map>` wrapper (SSR-safe), control slot system, tokens for control spacing, Leaflet integration guard, accessible labelling (aria-label / role=region).  
**Controls:** Zoom, Attribution, Fullscreen, Legend / Key, Health Alert (example), custom overlay slot.  
**Value:** Enables consistent map theming and re-use across products.

### 4.2 Map Legend / Key Component

**Requirements:**

* Accept items: id, label, colour (token or hex), optional pattern, interactive toggling
* Keyboard toggling (Enter/Space), aria-pressed / aria-checked semantics
* Collapsible (like UKHSA KeyControl) with reduced-motion friendly animation

### 4.3 Health Alert / Severity Tokens

Add semantic tokens: `color.data-viz.alert.low|moderate|high|critical` and accessible contrast guidelines.  
Support mapping (Green/Yellow/Amber/Red) to brand-consistent palette with WCAG AA text contrast.

### 4.4 Noscript Chart Fallback (`ChartNoScript`)

Component that renders a hidden anchor / fallback text in `<noscript>` block referencing downloadable CSV or static image / table anchor.

### 4.5 DataVizFilterBar

Composable filter shell (slotting select/multi-select/date/period) and change callback; integrate with our chart stories to standardize usage.

### 4.6 MetricCard Variant

Extend existing `SummaryCard` or create `MetricCard` with:

* Title (linkable)
* Primary value / optional secondary delta / trend indicator
* Metadata rows (topic, category, API name) leveraging `SummaryList` subcomponents
* Loading & skeleton states

### 4.7 Choropleth / Layer Helpers

Optional advanced phase: unify numeric domain → sequential/diverging scale, auto legend generation, quantization (n buckets) or continuous ramp with tick labels.

### 4.8 Map Layer Abstraction

Interface: `{ type: 'choropleth' | 'points'; data; getValue(feature): number; scale: ColorScaleConfig; onClick? }` powering automatic styling & legend sync.

## 5. Where UKHSA Can Adopt Ours

| Asset | Benefit |
|-------|---------|
| ChartWithTableTabs | Immediate accessible pairing of visual and tabular data (WCAG compliance) |
| assignSeriesColors and palettes | Consistent, distinct colour assignment scaling beyond 12 categories |
| Sequential/diverging scales | Perceptually uniform map or chart ramps |
| SortableDataTable / ResponsiveDataGrid | Rich sorting & responsive behaviour without bespoke code |
| GanttChart | Timeline view for operational / capacity data |
| Legend and RegionLegend | Uniform handling of categories vs. regions (aligns with map legend styling) |

## 6. Implementation Sequencing (Our Side)

| Phase | Items | Rationale | Effort |
|-------|-------|-----------|--------|
| 1 | ChartNoScript, DataVizLegend refactor (generic), Severity tokens | Fast parity enablers | S |
| 2 | Map wrapper and Key and core controls | Core missing capability | M |
| 3 | DataVizFilterBar, MetricCard | Enhances dashboard integration | M |
| 4 | Choropleth helper and Layer abstraction | Advanced power features | M-L |

## 7. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Leaflet lock-in | Abstract minimal map API & keep layer logic framework-agnostic |
| Colour contrast for severity | Define tokens via contrast tests, document usage thresholds |
| Scope creep in filter bar | Start with pure composition (children prop) before advanced state mgmt |
| Performance (large geojson) | Support `simplify` / optional worker offload later; start with baseline |

## 8. Proposed Shared Interfaces

### Legend Items

```ts
interface LegendItem {
  id: string;
  label: string;
  color: string;      // token or hex
  pattern?: string;   // optional hatch fill identifier
  interactive?: boolean;
  disabled?: boolean;
  valueDomain?: [number, number]; // for quantitative sub-ranges
}
```

### Map Layer (draft)

```ts
interface MapLayerBase { id: string; title?: string; visible?: boolean; }
interface ChoroplethLayer extends MapLayerBase {
  type: 'choropleth';
  geojson: any; // GeoJSON FeatureCollection
  getValue: (feature: any) => number;
  scale: ColorScaleConfig;  // reuse existing createColorScale types
  buckets?: number;          // optional quantization
}
interface PointLayer extends MapLayerBase {
  type: 'points';
  data: Array<any>;
  getLat: (d: any) => number;
  getLng: (d: any) => number;
  getValue?: (d: any) => number;
  color?: string | ((d: any) => string);
}
type MapLayer = ChoroplethLayer | PointLayer;
```

## 9. Definition of Done (Per New Component)

1. Component folder with `.tsx`, `.types.ts`, `.scss`, stories, tests (client and SSR if relevant).  
2. A11y review (keyboard, roles, aria relationships).  
3. Tokens defined & built (if new colours).  
4. Added to public exports & documented in Storybook.  
5. Documentation cross-link (parity table updated).  
6. Visual regression screenshot (future) for key states.

## 10. Tracking Checklist

| Item | Status | Notes |
|------|--------|-------|
| DataVizLegend (generic) | TODO | Refactor existing Legend |
| Severity tokens | TODO | Green/Yellow/Amber/Red semantic mapping |
| ChartNoScript | TODO | Simple wrapper component |
| Map wrapper | TODO | SSR guard and control slots |
| Map Key / Legend control | TODO | Collapsible and keyboard toggling |
| Core map controls (zoom/attrib/fullscreen) | TODO | Compose wrappers over Leaflet APIs |
| DataVizFilterBar | TODO | Composition shell |
| MetricCard | TODO | Extend SummaryCard pattern |
| Choropleth helper | TODO | Build on sequential scales |
| Map layer abstraction | TODO | unify config |

## 11. Next Actions

1. Approve scope & sequencing (Phases 1–4).  
2. Implement Phase 1 PR (Legend refactor and tokens and ChartNoScript).  
3. Begin Map wrapper spike (confirm Leaflet SSR strategy).  
4. Draft filter bar & metric card design tokens.  
5. Document adoption guide for UKHSA (mapping existing map key to LegendItem model).  

---
_Update this document as each TODO reaches Done to maintain a clear parity roadmap._
