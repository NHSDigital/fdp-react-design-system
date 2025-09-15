# SPC Engine v2.6a — Overview

This module provides a self-contained TypeScript implementation of the SPC engine aligned to the NHS SQL v2.6a algorithm. It focuses on XmR parity and mirrors the SQL steps and naming as closely as practical, while remaining idiomatic TypeScript and modular.

## Design goals

- Strong typing with enums for directions, icons, rules, and sides
- SQL-faithful naming (e.g. PrimeDirection, MetricConflictRule) to ease cross-referencing
- Clear separation of concerns: limits, detection, conflict ranking/pruning, assurance, engine orchestration
- Deterministic, testable behaviour against the canonical grouped dataset

## High-level flow

1. Normalise settings (defaults taken from SQL guidance) and canonicalise input rows
2. Partition rows by baseline flags
3. Compute XmR limits per partition (global minimum points gating)
4. Two-pass rule detection within each partition
5. Form Improvement and Concern candidates aligned with MetricImprovement
6. Apply SQL-style directional pruning using PrimeDirection and MetricConflictRule
7. Derive variation icon per row (dataset parity checks the last non-ghost point)
8. Optionally compute Assurance icon for XmR (target vs limits)

## Notes

- Two-of-three 2σ excludes any point beyond 3σ from counting
- Trend uses strict monotonicity and is evaluated within a partition (unlike SQL’s cross-partition trend)
- Neither-high/low semantics are supported in this module and tested (see changelog for the version that introduced them)
- Zero-width limits: if the moving‑range mean MR̄ is 0 within a partition (flat values), limits collapse to the centre line (UCL = LCL = mean) and σ bands collapse accordingly. Assurance treats equality to limits deterministically. See Storybook “Zero‑width limits” vignette.
