# Changelog — SPC Engine v2.6a (logic_v2)

All notable changes to this module will be documented here.

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
