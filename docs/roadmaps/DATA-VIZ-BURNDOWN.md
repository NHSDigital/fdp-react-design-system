# Data Visualisation v2 Burndown & Risk Register (Aug 30 2025)

Companion to:

- [DATA-VIZ-ROADMAP](./DATA-VIZ-ROADMAP.md) (capability & adoption view)
- [DATA-VIZ-COLOURS](./DATA-VIZ-COLOURS.md) (palette, patterns & token guidance)

This document gives a delivery-oriented snapshot (burndown, sprint slicing, risks) for the Analyst-grade Data Viz v2 workstream.

## 1. Scope Baseline (v2 Core)

Goal: Reach a "usable analyst kit" enabling KPI tiles, exception surfacing, filterable multi-series charts, export of data & images, and groundwork for geography.

Core Epics (indicative sizing):

1. ChartNoScript fallback (SSR and a11y) – 5 (Done)
2. MetricCard (base and variants) – 5+5
3. **SPC Charts (Statistical Process Control)** – **8+5 (Done)**
4. **Enhanced Data Grid Navigation** – **5+3 (Done)**
5. DataVizFilterBar (scaffold and interactions) – 3+5
6. ExportMenu (contract and CSV and PNG) – 3+5
7. Severity / exception visual mapping guidance – 2
8. Freshness badge (KPI) – 2
9. Map wrapper (MVP) – 8
10. Choropleth helpers (quantisation and auto legend) – 5
11. Legend grouping & search – 5
12. Series metadata interface (for grouping) – 2
13. Layer abstraction (points and polygons) – 8
14. Performance sampling / down-sampling helper – 5
15. Accessibility extensions (CVD pattern mapping, announcements debounce) – 5
16. Export enhancements (SVG) – 3
17. Tooltip aggregated summary – 3
18. Exception states (SPC overlays integration pre-IPR) – 5 (Superseded by Epic 3)
19. Advanced legend ordering API – 3
20. Pattern auto-substitution (low contrast) – 3
21. Internationalisation context (date/number/time unify) – 5
22. Dark mode token prototype – 5

Assumed point scale: S=2, M=5, L=8. Total ≈ 121 points.

## 2. Burndown Snapshot

Done (≈63 points / ~52%):

- **SPC Charts Complete (13 points)**: Full SPCChart component with XmR/T/G chart types, rule detection engine, improvement direction support, healthcare examples, 25+ tests
- **Enhanced Data Grid Navigation (8 points)**: NavigationSplitView keyboard navigation, AriaTabsDataGrid actions area, responsive placement, tablet breakpoint fixes
- Palettes (categorical, region, severity, org-level) and stroke & semantic alias tokens
- Legend refactor (unified palettes and pattern overlays)
- Pattern system (18+) with a11y tests
- Stacking and 100% normalisation utilities & percent mode stories
- Tooltip resilience (mixed x domains) and percent formatting
- Axis/bar layout improvements (gapRatio, minBarWidth, overflow handling)
- Core tests (palettes, patterns, stacking integrity, bar invariants)
- Chart↔Table accessibility pattern (ChartWithTableTabs)
- ChartNoScript fallback and ChartEnhancer helper

Recent refinements (no additional story points allocated – folded into SPC epic scope):

- SPC embedded icon refactor (variation and conditional assurance) moved outside SVG for layout stability
- Assurance uncertainty behaviour (icon suppressed when target lies within process band) – regression test added/fixed
- Gradient sequence washes (improvement / concern / common) with singleton absorption and A–B–A neutralisation
- Trend orientation heuristic for suppressed favourable single points
- Timeframe auto‑narration in live region (days/weeks/months inference)
- Enriched SPCTooltipOverlay groundwork for aggregated summaries

These enhancements improve interpretability & accessibility without expanding original point estimates.

Groundwork (≈4 points counted partial):

- Severity/org-level tokens integrated
- SlotMatrix scaffold (related to scheduling visualisation, not core charts)

Remaining core (to analyst kit pre-map): ≈42 points

Extended (map, choropleth, advanced legend, perf extras): ≈24 points

## 3. Work Item Classification

Done:

- **SPC Charts**: Full implementation with rule detection, chart types, healthcare examples, comprehensive testing
- **Enhanced Navigation**: Complete keyboard navigation for data grids and split views
- Colour & token system, patterns, legend unification, stacking, tooltips, axis/layout, tests, chart↔table pattern

Next (Immediate Build Enablers):

1. ~~ChartNoScript wrapper~~ (Done)
2. ~~SPC Charts~~ (Done)
3. ~~Enhanced Data Grid Navigation~~ (Done)
4. MetricCard (base and delta/status variant)
5. DataVizFilterBar skeleton
6. ExportMenu API contract (types only)
7. Exception severity mapping doc
8. KPI FreshnessBadge component

Backlog (Post-enablers):

- Map wrapper and controls; Choropleth helpers; Export implementations; Legend grouping/search; Performance sampling; Accessibility guidance extension; Layer abstraction

Deferred / Nice-to-have:

- Live streaming incremental redraw
- Animation patterns (enter/update/exit) behind prefers-reduced-motion
- ~~Advanced statistical overlays (SPC, regression bands)~~ **Completed in core SPC implementation**

## 4. Six-Week Delivery Slice (Starting 1 Sep 2025)

### Sprint 1 (Weeks 1–2) ✅ COMPLETED AHEAD OF SCHEDULE

- ~~ChartNoScript (feat and SSR/hydration tests)~~ – 5 ✅
- ~~SPC Charts (full implementation)~~ – 13 ✅  
- ~~Enhanced Data Grid Navigation~~ – 8 ✅
- ~~Package publication & documentation updates~~ – 2 ✅
(Target 17 → Delivered 28)

### Sprint 2 (Weeks 3–4) – **REVISED SCHEDULE (Plan A)**

- MetricCard base and delta variant (+ stories) – 5
- DataVizFilterBar skeleton (layout, slot props) – 3  
- Severity token mapping doc and legend story updates – 2
- FreshnessBadge (relative time util) – 2
- SPC chart baseline analysis automation – 3
(Target 15)

### Sprint 2 (Weeks 3–4) – **Stretch (Plan B if capacity)**

- ExportMenu contract (types and placeholder) – 3
- MetricCard KPI/status variants (trend sparkline placeholder) – 5
- FilterBar interactive state handling (org/period) and keyboard tests – 5
- Legend grouping design spike – 1
- Map wrapper spike (SSR boundary and projection decision) – 3
(Target 17 / Cumulative 34 new → ~69% core)

### Sprint 3 (Weeks 5–6)

- Map wrapper MVP (static geo layer and basic controls) – 8
- Choropleth scale and auto legend – 5
- Legend grouping and search implementation – 5
- ExportMenu basic CSV and PNG (client approach) – 5
(Target 23)

## 5. Critical Path

ChartNoScript → MetricCard → FilterBar → Export contract → Map wrapper → Choropleth → Legend grouping → Export implementations → Performance & a11y enhancements.

## 6. Dependencies & Decisions Needed

| Decision | Needed By | Options | Recommendation |
|----------|-----------|---------|----------------|
| Geo data format | End Sprint 2 | GeoJSON vs TopoJSON | TopoJSON (smaller, pre-simplify) with build-time convert fallback |
| Map projection | Sprint 2 | Albers UK, Mercator | Use Albers UK (distortion balanced for UK regions) |
| Export strategy | Sprint 2 | Client canvas, SVG serialization, server render | Phase 1: CSV and client canvas PNG; Phase 2: SVG; Defer server |
| Legend grouping metadata shape | Sprint 1 | Flat array vs hierarchical tree | Flat array and optional group key & order index |
| KPI trending sparkline source | Sprint 2 | Inline mini-chart vs pre-computed spark values | Pre-compute small array (last 8 periods) |

## 7. Risk Register

| # | Risk | Impact | Likelihood | Mitigation | Owner (TBD) | Trigger |
|---|------|--------|------------|------------|-------------|---------|
| 1 | Geo SSR mismatch | High | Medium | Conditional client enhancement; precompute bbox |  | Hydration warnings |
| 2 | Export complexity delays | High | Medium | Stage CSV→PNG→SVG; abstraction layer early |  | Slipping past Sprint 3 |
| 3 | FilterBar scope creep | Medium | High | Minimal contract and facet slot extension |  | PRs adding bespoke logic |
| 4 | Legend overcrowding (>12) | Medium | Medium | Threshold triggers grouping and search; virtualization |  | Story with 15 series |
| 5 | Large stack perf issues | Medium | Medium | Baseline metrics and design down-sampler API |  | CPU >100ms render traces |
| 6 | CVD colour ambiguity | Low | Medium | Pattern auto-subst matrix; doc decision tree |  | A11y review flags contrast |
| 7 | KPI volatile updates | Medium | Medium | Diff and debounce and reduced-motion guard |  | Rapid refresh telemetry |

## 8. Immediate (Next 2 Weeks) Action List

1. Implement ChartNoScript and SSR/hydration tests
2. Build MetricCard (value, label, delta, status, optional trendData prop)
3. Scaffold DataVizFilterBar (structural only) and story
4. Write severity mapping guidance & update legend stories
5. Implement FreshnessBadge (relative time util; story with manual now override)
6. Define `SeriesMeta` interface (id, label, group?, order?, severity?)

## 9. Definition of Done (Augmented for New Components)

- Stories: base, loading, empty/error, a11y (prefers-reduced-motion if any animation)
- Tests: SSR and hydration and keyboard and roles/labels
- Tokens: colours/spacing/elevation only via design tokens (no raw hex except temp prototypes)
- Types: strict & discriminated where variants diverge
- Accessibility: visible focus states, ARIA labels, announced deltas
- Performance: renders under 16ms for medium dataset (baseline recorded) where feasible
- Documentation: prop table and usage guidance and a11y considerations and performance notes

## 10. Estimation Mapping (Appendix)

- Small (2): Docs-only, token mapping, simple wrapper
- Medium (5): New component (base) or logic enhancement with tests
- Large (8): Complex component with SSR and interaction and perf considerations (Map, Layer abstraction)

## 11. Links & Cross References

- Roadmap alignment: see Section "In Progress / Upcoming" in [DATA-VIZ-ROADMAP](./DATA-VIZ-ROADMAP.md)
- Token & pattern details: [DATA-VIZ-COLOURS](./DATA-VIZ-COLOURS.md)

---
Last updated: 2025-09-01 (post SPC icon & sequence wash enhancements)
