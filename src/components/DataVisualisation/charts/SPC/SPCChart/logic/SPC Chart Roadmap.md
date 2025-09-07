# SPCChart Roadmap (Updated)

Updated snapshot (already implemented: rules engine, warnings framework, baseline suggestion & auto‑recalculation, configurable shift/trend thresholds, diagnostics panel UI, Storybook rich tables, assurance capability mode).

---

## 1. Current status (Implemented)

Already delivered in codebase:

* Core SPC engine for XmR + rare‑event T / G types (limits, centre line, sigma estimation).
* Special cause rules: single 3σ point, shift, trend, two‑of‑three (optional four‑of‑five via settings).
* Configurable rule thresholds: `specialCauseShiftPoints`, `specialCauseTrendPoints`, four‑of‑five toggle.
* Auto recalculation & baseline suggestion heuristics (`autoRecalculateAfterShift`, `baselineSuggest*`).
* Assurance / capability evaluation (band‑based pass/fail vs target).
* Structured warnings system (severities, categories, codes) + filtering & diagnostics panel.
* Variation / assurance icon surfacing (text glyph layer) & improvement vs concern highlighting.
* Ghost, baseline and target handling with related warnings.
* Table‑driven Storybook docs & enriched prop/settings reference.
* Accessibility: live region announcements for warning panel changes & keyboard focus narration.

## 2. Remaining parity & near‑term functional gaps

These close the last pieces of foundational robustness and user clarity:

| Area | Gap | Priority |
| ---- | ---- | -------- |
| Moving Range panel | Visual mR panel for XmR not rendered (logic internal only) | High |
| Icon set | Replace placeholder text icons with semantic SVG + legend | High |
| Enhanced warning a11y | Plain‑language per‑warning narration summaries | Medium |
| Trial limits styling | Distinct visual for provisional limits before stability threshold | Medium |
| Baseline visual affordance | Segment boundary styling + inline “Baseline start” label | Medium |
| Code export / reproducibility | Embed engine version + hash in result for audit | Medium |
| Performance benchmarks | Automated timing for large N & incremental append path | Medium |
| Fuzz / golden datasets | Canonical dataset parity + randomised invariant tests | High |
| Run→SPC auto promotion | Automatic narration & state change once stability threshold reached | Medium |
| Educational narrative API | `summarizeSpc(result)` helper producing structured explanation tokens | Medium |
| Trial limit warnings | Dedicated Stability warning category when interpreting < threshold points | Medium |

## 3. Short‑term (0–30 days) plan

1. mR panel rendering (dual panel layout, shared x scale, responsive collapse on small width).
2. Golden parity & fuzz test harness (establish baseline statistical invariants).
3. SVG icon component set + legend (variation + assurance states, rule glyph differentiation groundwork).
4. Baseline segment visual styling + accessible labels.
5. Trial vs established limits style + `limitState` flag in output rows.

## 4. Mid‑term (31–90 days)

| Theme | Items |
| ----- | ----- |
| Additional chart families | P, U, C charts (proportion, rate per unit, count per unit) + auto suggestion helper |
| Narrative & accessibility | Structured ARIA summary, per‑signal explanation strings, keyboard jump between signals |
| Performance & architecture | Cache (input signature → result), streaming append API, extract pure `@spc-core` package |
| Visual primitives | LimitBands, SignalMarkers, BaselineSegmenter, DataQualityBanner |
| Data quality & scoring | Aggregate quality score (missingness, ghost density, undersized partitions) surfaced in result |
| Educational assist | Auto run→SPC promotion, trial→established limit narration, capability explanation helper |

## 5. Longer‑term / advanced

* Capability indices (Cp/Cpk analogue) & capability band shading.
* Bayesian / robust options (median trial centre, shrinkage for low‑volume series).
* Distribution advisory helpers (log/Box‑Cox hint, over‑dispersion flags with chart type suggestion).
* Intervention / annotation layer + narrative integration and simulated outcome preview.
* Multi‑series benchmarking & false discovery rate control across dashboards.
* Signal probability scoring (posterior improvement vs concern) layer.

## 6. Data model refinements (proposed extensions)

Add to `SpcRow` output (some partially present):

* `specialCauseCodes: string[]` (if multiple simultaneous triggers).
* `favourability: 'favourable' | 'unfavourable' | 'neutral'`.
* `isBaselineStart: boolean`.
* `capability: 'capable' | 'incapable' | 'uncertain'`.
* `limitState: 'trial' | 'established'`.
* `engineVersion: string` & `signature: string` (hash of inputs/settings) at result root.

## 7. Testing & quality strategy

| Layer | Tests |
| ----- | ----- |
| Deterministic parity | Golden fixture datasets (XmR, T, G, edge cases) expecting signals & limits within tolerance |
| Invariants / fuzz | Random sequences: ensure no limits before min points; no negative LCL for count charts; stability invariants |
| Performance | Time incremental append for N=1k, 5k; report p95 ms budget |
| Accessibility | Axe snapshot for key Storybook stories + narration assertions |
| Visual regression | Storybook image diffs (limits, icons, baseline transitions) |

## 8. Quick wins (next commits)

1. Implement `limitState` derivation & styling hook.
2. Add engine version + signature hash emission.
3. Introduce golden dataset fixture folder + initial parity spec.
4. Replace text icons with temporary SVG placeholders + legend scaffold.
5. Basic BaselineSegmenter visual using existing SCSS tokens.
6. Run→SPC promotion logic (threshold detection + narration placeholder).
7. Stability warning when interpreting < 20 points (new category or subcode).

## 9. Risk & safeguards

* Over‑sensitivity: keep default NHS MDfC rule lengths; isolate advanced toggles under settings.
* Drift after auto recalculation: mark synthetic baseline insertions in output & docs.
* Regression risk: require golden parity test green before publishing releases.
* Governance: embed reproducibility hash for exported analytic outputs.

## 10. Summary priority stack

High: mR panel, golden tests & fuzz harness, SVG icons/legend, baseline styling, limit state flag.

Medium: performance cache + streaming append, narrative summary block, additional chart families.

Later: Bayesian / robust modes, benchmarking dashboards, probability scoring.

---

This roadmap is intentionally living; update after each milestone (or release tag) by moving completed bullets into the status section and refining next 30‑day scope.
