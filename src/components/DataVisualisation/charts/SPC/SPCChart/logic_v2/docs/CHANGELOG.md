# Changelog — SPC Engine v2.6a (logic_v2)

All notable changes to this module will be documented here.

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
