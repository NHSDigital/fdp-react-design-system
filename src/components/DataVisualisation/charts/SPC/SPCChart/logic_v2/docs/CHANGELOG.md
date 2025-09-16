# Changelog — SPC Engine v2.6a (logic_v2)

All notable changes to this module will be documented here.

## 0.5.1 — Direction-aware conflict preset and gating docs (2025‑09‑16)

- Preset: Added `withConflictPresetAutoV26(direction, overrides?)` to choose the right conflict behaviour automatically per metric direction:
  - Up (High is good): prefer improvement on conflict (segmentation disabled by engine gating).
  - Down (Low is good): enable favourable trend segmentation in `AutoWhenConflict` with `CrossingAfterUnfavourable`.
- Gating clarification: Documented that when `preferImprovementWhenConflict` is true, favourable trend segmentation is disabled regardless of explicit `trendSegmentationMode/strategy`.
- Storybook: Grouped dataset v2 story now includes an “Auto conflict preset” toggle and an explanatory note about manual overrides being ignored while Auto is on.
- Tooltip: SPC tooltip overlay now displays the hovered data point index for diagnostics.
- Docs: Updated `docs/trend-segmentation.mdx` and `docs/README.md` with gating and preset examples.

## 0.5.0 — Trend segmentation strategies and conflict controls (2025‑09‑16)

- Trend segmentation: Added Unfavourable strategy variants alongside Favourable ones and integrated segmentation into the engine with directional masking.
- Conflict bias: Introduced `preferTrendWhenConflict` (opt‑in) to bias pruning toward the side that carries the trend flag when both sides have candidates and only one side is a trend.
- Dominance (opt‑in): Added `trendDominatesHighlightedWindow` to clear opposite‑side non‑trend rules (single‑point, two‑sigma, shift) inside highlighted trend segments, allowing stronger alignment with visually trend‑led datasets.
- Defaults: Engine default `trendSegmentationStrategy` set to `CrossingAfterUnfavourable`.
- Tests:
  - New alignment test for “Special cause conflict — Low is good” using CrossingAfterUnfavourable: `tests/spc_v2/specialCauseConflict.lowIsGoodAlignment.test.ts`.
  - Strategy sweep tests (report‑only) exploring configurations for “High is good”, including toggles for `preferTrendWhenConflict` and `trendDominatesHighlightedWindow`.
  - Unfavourable segmentation engine test verifies below‑mean segment retention and pre‑crossing trend flag clearing.
- Docs: Expanded `docs/trend-segmentation.mdx` with strategy catalog (both sides), conflict levers, default notes, status of dataset alignment, and links to tests.

## 0.4.0 — Zero‑width limits, assurance, datasets (2025‑09‑15)

- XmR zero‑width limits: When MR̄ = 0 within a partition (flat values), emit zero‑width control limits (UCL = LCL = mean) and collapse ±1σ/±2σ bands to the mean. Improves visual clarity and deterministic assurance behaviour.
- Assurance parity: Equality to a process limit is treated deterministically (pass/fail depending on direction). Added explicit tests including the collapsed band case.
- Parity semantics: Trend across partitions implemented under the parity preset; two‑of‑three ≥2σ configurable to include >3σ points on the same side (enabled by preset).
- Storybook: Added a “Zero‑width limits” vignette demonstrating collapsed limits after a baseline, with a computed limits table.
- Datasets: Centralised grouped and healthcare datasets for reuse across Storybook and tests; added a computed expected‑colour table in the healthcare story.

## 0.1.0 — Initial scaffold

- Create logic_v2 module with strongly-typed enums and modular files
- Implement XmR limits, two-pass rule detection (single >3σ, two-of-three 2σ same side excluding >3σ, shift, trend)
- Implement SQL-style conflict ranking and pruning (PrimeDirection, MetricConflictRule)
- Provide Assurance icon helper for XmR
- Add unit tests for utils and conflict; dataset parity test for last-point Variation icon
- Docs: Overview and this changelog

## 0.2.0 — Neither-high/low support

- Extend VariationIcon to include NeitherHigh and NeitherLow
- Implement Neither semantics for MetricImprovement = Neither
- Add tests covering Neither-high/low behaviour

## 0.3.0 — Developer ergonomics

- Add npm script `test:spc-v2` to run only the new module tests
- Heavily comment code with UK English explanations for functions, variables, and algorithmic intent
