# Changelog

All notable changes to this project will be documented in this file.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/) and versions adhere to semantic versioning once a stable 1.0.0 is reached. Pre‑1.0 minor structural changes may be released as patch bumps while APIs settle.

## Unreleased

### Added (Unreleased – Directional Flags & Engine)

- Directional alias special-cause flags (`specialCause<Rule>Up` / `specialCause<Rule>Down`) for single point, two-of-three, four-of-five, shift and trend rules. These mirror the legacy Above/Below/High/Low/Increasing/Decreasing booleans.

### Deprecated (Unreleased – Directional Flags)

- BREAKING: Removed legacy directional special-cause fields (`specialCauseSinglePointAbove/Below`, `specialCauseTwoOfThreeAbove/Below`, `specialCauseFourOfFiveAbove/Below`, `specialCauseShiftHigh/Low`, `specialCauseTrendIncreasing/Decreasing`). Use the unified `*Up` / `*Down` flags instead (e.g. `specialCauseSinglePointUp`).

### Migration Guide (Directional Flags)

| Legacy | New Alias | Notes |
|--------|-----------|-------|
| specialCauseSinglePointAbove | specialCauseSinglePointUp | identical boolean meaning |
| specialCauseSinglePointBelow | specialCauseSinglePointDown | |
| specialCauseTwoOfThreeAbove | specialCauseTwoOfThreeUp | |
| specialCauseTwoOfThreeBelow | specialCauseTwoOfThreeDown | |
| specialCauseFourOfFiveAbove | specialCauseFourOfFiveUp | only set when four-of-five rule enabled |
| specialCauseFourOfFiveBelow | specialCauseFourOfFiveDown | |
| specialCauseShiftHigh | specialCauseShiftUp | |
| specialCauseShiftLow | specialCauseShiftDown | |
| specialCauseTrendIncreasing | specialCauseTrendUp | |
| specialCauseTrendDecreasing | specialCauseTrendDown | |

All existing consumers continue to work. Prefer the alias names for new code and when writing generic directional logic (e.g., building summaries or applying deterministic precedence rules). The helper `getDirectionalSignalSummary(row)` returns canonical directional lists and maximum ranked rule per side.

#### Backfill Semantics (Shift & Trend)

As part of the directional flag consolidation the SPC engine now BACKFILLS the `shift` and `trend` special‑cause flags across the entire qualifying run (all N points) instead of marking only the terminal (N-th) point where the rule first becomes knowable. This brings parity with typical run‑length visual explanations and simplifies downstream logic (any point flagged `specialCauseShiftUp/Down` or `specialCauseTrendUp/Down` is unambiguously part of the run). If your code previously relied on the terminal point being the only flagged point, update it to either:

1. Derive the terminal point via the last consecutively flagged index in the run, or
2. Treat the earliest flagged index in that contiguous block as the start of the run.

The golden SPC fixture (`test-data/golden-all.json`) and related snapshot tests were regenerated to encode this new canonical behaviour.


### Fixed (Unreleased)

- SPC engine: Corrected early Improvement classification where an increasing trend spanning the mean would mark points still on the adverse side as Improvement. Trend signals now only contribute to Improvement/Concern when the current point lies on the favourable side of the mean (prevents premature positive signalling in datasets like ED 4h Compliance).
- SPC engine: Two-of-three (2σ) rule now excludes points beyond 3σ from contributing to the 2-of-3 count, aligning with Making Data Count guidance (3σ points remain single-point only).


### Added (Unreleased – Components & Docs)

- Shared story utilities module `src/components/DataVisualisation/stories/utils/deterministic.ts` providing date helpers, linear series generator, seeded PRNG.
- Table: Declarative columns and data API (auto-generates head and rows when explicit `head`/`rows` omitted).
- Table: `visuallyHiddenCaption` prop to retain semantic caption for assistive tech while hiding visually.
- Table: New sub-component `Table.Cell` supporting `rowHeader` plus code / html / node content (joins existing `Caption`, `BodyRow`, `HeaderCell`).
- Table: Focused test coverage for columns+data generation & visually hidden caption rendering.
- Table: `TableColumn.rowHeader` flag allows per-column row header generation (no need for global `firstCellIsHeader`).
- SPCChart: Added `source` prop rendering citation below chart (outside SVG) to prevent overlaps with axes.
- SPCChart: `alwaysShowZeroY` prop to force y-axis lower bound to include zero (useful for percentage / rate charts where anchoring at 0 improves interpretability).
- SPCChart: `alwaysShowHundredY` prop to force y-axis upper bound to include 100 (for percentage charts that should always show full 0–100% context).
- SPCChart: `percentScale` convenience prop (enforces 0–100 domain, supersedes `alwaysShowZeroY`/`alwaysShowHundredY`).
- SPC engine: Optional `conflictPrecedenceMode` setting with value `sql_ranking_v2_6a` added (experimental). Currently inert for orthodox Shewhart rule geometry (no single row can simultaneously satisfy high- and low-side rule predicates), but reserved for forward compatibility / parity with historical SQL outputs that performed post-hoc directional pruning. Metadata fields (`conflictPrimeDirection`, `conflictResolvedByRuleId`, `conflictResolvedRank`, `originalSpecialCauseImprovementValue`, `originalSpecialCauseConcernValue`) will remain undefined until a future mixed-side conflict scenario or extended rule set makes them relevant.
- SPC: Experimental SQL compatibility wrapper (`buildSpcSqlCompat`) providing post-hoc per-side rule ranking (single=1, two-sigma=2, shift=3, trend=4), PrimeDirection derivation, and directional pruning metadata (`primeDirection`, `primeRank`, `primeRuleId`, `sqlOriginalImprovementValue`, `sqlOriginalConcernValue`, `sqlPruned`).
- SPC: Storybook comparison story `SQL Compatibility / Base vs SQL compatibility (experimental)` and docs page `spc-sql-compatibility.mdx` detailing behaviour, usage and limitations.

### Changed (Unreleased)

- Storybook data visualisation stories (Line, FilterableLine, Area, Bar, SPC) now use fully deterministic synthetic datasets (removed all Math.random/Date.now) for stable visual regression and reproducible docs.
- SPCChart: Mean (centre) line and UCL/LCL control limits retain discrete horizontal segments; added subtle curved join paths only where recalculations change the level, improving visual continuity without misrepresenting flat spans (no semantic/ARIA change).
- Header SCSS refactor: eliminated Sass mixed-decls deprecation warnings by reordering declarations and splitting `header-link-style` into base and state mixins.
- Embedded SPC summary variation icon now shows business polarity letter (H/L = higher-/lower-is-better) instead of side-of-signal when `metricImprovement` is Higher or Lower; retains side-of-signal lettering only for neutral metrics.
- Table: Story and MDX docs consolidated & updated to document new columns API and sub-components.
- SPC engine: Shift & Trend rule flags now backfill across the entire qualifying run (rather than only the terminal point). Downstream logic expecting terminal-only flags should adjust (see Migration Guide). Golden SPC snapshot fixture updated accordingly.

### Deprecated (Unreleased – Components & Docs)

- SPCVariationIcon legacy payload shapes `{ state, ... }`, `{ judgement, polarity, trend? }`, and parsimonious union variants are deprecated. Use engine-aligned payload `{ variationIcon, improvementDirection, specialCauseNeutral?, trend? }`. A one-time runtime `console.warn` is emitted when deprecated shapes are detected. Removal planned after stabilising engine-aligned API (target: post 0.0.35 minor).
- Table: Legacy aliases `Table.Row` and `Table.TH` deprecated in favour of `Table.BodyRow` and `Table.HeaderCell` (runtime dev warnings emitted).

_No other unreleased changes yet._

## 0.0.34-alpha.4 - 2025-09-06

### Added

- Multi‑render architecture documentation (`docs/guides/multi-render-architecture.md`) describing React and Nunjucks and static HTML parity model
- Behaviour layer documentation (`docs/guides/behaviours.md`) including init / teardown APIs & custom events
- Schema‑generated Nunjucks macros for CharacterCount & Checkboxes
- Macro parity tests for CharacterCount and Checkboxes ensuring deterministic HTML output across renderers
- Shared conditional reveal utility (`src/behaviours/conditionalRevealUtil.ts`) powering Radios & Checkboxes
- Teardown functions for all behaviours (`detachButtons`, `detachRadios`, `detachRanges`, `detachCharacterCounts`, `detachCheckboxes`) and global `teardownAll`
- Backward compatibility exports: `HeaderStatic` and `HeaderSSR` now alias the unified `Header` / `HeaderServer` implementations to ease migration
- (Superseded – see Removed) Initial provenance / transparency layer for SPC charts: per-row `ruleTags` vs `heuristicTags` taxonomy (orthodox / interpretive / aggressive). Simplified later in cycle; only internal `ruleTags` retained.
- (Superseded – see Removed) `strictShewhartMode` settings flag (orthodox default) added earlier this cycle; now fully removed.

### Changed

- Refactored Radios & Checkboxes behaviours to leverage shared conditional reveal utility
- Updated `vitest` config to include `tests/macroParity` globs for macro parity test discovery
- Escaping strategy for Checkboxes conditional content aligned with React SSR (escaped entities for raw string props)
- (Superseded – see Removed) Interim defaulting of `strictShewhartMode` to `true` occurred earlier; the flag has since been eliminated.
- SPC: Engine now permanently enforces orthodox Shewhart rules (shift, trend, two-of-three 2σ, optional four-of-five 1σ, single 3σ) with no interpretive heuristic toggles.
- SPC: Rare-event T chart golden test now tolerates optional `variation_conflict_row` warning code emitted under stricter conflict diagnostics

### Fixed

- Parity failure for Checkboxes conditional content by applying consistent escaping
- SPC tests updated to align with new strict default (suppression & variation icon matrix expectations)

### Internal / Tooling

- Extended macro generator to include Checkboxes & CharacterCount (schema driven)
- Added global window exposure of detach functions (`__nhsDetach*`) and `__nhsTeardownAllBehaviours`
- Removed statistically weak / visually forcing SPC comparative tail heuristics from codebase & provenance registry
- Updated SPC provenance generation to drop deprecated tail heuristic tags: `comparative_force_tail_favourable`, dynamic `comparative_invert_tail_concern_N`
- Cleaned SPC test fixtures & stories to eliminate references to removed settings (`comparativeEmulationForceTailFavourable`, `comparativeEmulationInvertTailConcernPoints`)

### Removed

- SPC: Removed comparative baseline emulation heuristics (`comparativeBaselineEmulation` and all `comparativeEmulation*` flags) and associated provenance tags (`comparative_*`).
- SPC: Removed all remaining interpretive/aggressive heuristics (retroactiveOppositeShiftNeutralisation, emergingDirectionGrace precedence path, suppression of isolated favourable single 3σ). Provenance heuristic registry now empty; engine operates purely on orthodox Shewhart rules.
- SPC: Removed `strictShewhartMode` settings flag (orthodox behaviour is now unconditional) and all `heuristicTags` infrastructure.
- SPC: Removed provenance badge section from SPC tooltip (was duplicative of variation classification). Downstream consumers should drop any reliance on tooltip provenance markup.
- SPC: Removed public surfacing of heuristic provenance metadata; internal `ruleTags` kept only for diagnostics/tests (not part of supported public API surface).

### Breaking (SPC)

- Configuration objects must no longer include `strictShewhartMode`; passing it has no effect and should be deleted.
- Any code expecting `heuristicTags` on SPC row data or provenance badges in the tooltip must be updated. Use the existing variation classification (`variation` field) and rule-based flags (`shiftHigh`, `trendInc`, etc.) instead.
- If consumers displayed provenance badge UI downstream, remove that UI (no replacement planned) to avoid misleading duplication.

### Migration Notes (SPC)

1. Delete `strictShewhartMode` from all SPC settings (no replacement needed).
2. Remove any references to `heuristicTags`; they are no longer generated.
3. For tooltip customisations relying on provenance badges, rely on `variation` plus specific rule booleans to explain classification.
4. Update snapshots/expectations asserting provenance badge container presence.
5. Re-test SPC charts focusing on variation classifications; behaviour should remain statistically orthodox and unchanged from prior strict mode.

These breaking removals harden the SPC engine to statistically orthodox Shewhart rules only.

### Deprecated

- `HeaderStatic` and `HeaderSSR` names are deprecated; use `Header` (client/PE) and `HeaderServer` (SSR helper) directly. Aliases will be removed in a future breaking release after 1.0.
- (SPC) The removed tail comparative heuristics are not deprecated but fully removed; any prior configuration keys are now no-ops if still present in downstream code.

### Parity Coverage (Tracking)

Current schema and macro and parity test coverage:

- Covered: Button, Tag, Label, Hint, Heading, ErrorMessage, Input, Textarea, Select, Radios, CharacterCount, Checkboxes, Fieldset, ErrorSummary, DateInput, Panel, InsetText, Details
- Next (Batch 1 target): (completed)
- Upcoming (subsequent batches): Pagination, Breadcrumb, BackLink, ActionLink, SummaryList, TaskList, Tabs, WarningCallout, CareCard, Card, Panel (if not already), Hero, List, DoDontList
- Deferred / Likely React-only initially: DataVisualisation (charts), SortableDataTable, ResponsiveDataGrid, SlotMatrix, GanttChart, ProductRoadmap, DashboardSummaryGrid, NavigationSplitView

This list will migrate to a dedicated parity tracking doc once Batch 1 is implemented (planned: `docs/guides/macro-parity-tracking.md`).

---

Previous changes prior to introducing this changelog are not retrospectively documented here.
