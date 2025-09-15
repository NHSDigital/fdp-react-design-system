# Changelog

All notable changes to this project will be documented in this file.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/) and versions adhere to semantic versioning once a stable 1.0.0 is reached. Pre‑1.0 minor structural changes may be released as patch bumps while APIs settle.

## Unreleased

### Added (Unreleased – Data Visualisation / SPC)

- Hook: `useSpc` now powers an engine‑first flow for `SPCSpark` and `SPCMetricCard`, exposing centre line, control limits, inner sigma bands, and per‑point signals (SSR‑safe). Optional `useSqlCompatEngine` flag enables parity with the SPC SQL compatibility wrapper.
- `SPCMetricCard`: accepts `useSqlCompatEngine` (default: true) and threads it to `useSpc`; gradient/accent colour now derived from the latest point’s SPC classification (polarity‑aware) with a clear No‑Judgement override.
- Storybook: Added an SPC “Base vs SQL compatibility (experimental)” comparison showcasing `SPCMetricCard` in both modes alongside `SPCChart`.

- SPC v2 documentation and demos
  - Storybook vignette for zero-width limits: Demonstrates partitions where MR̄ = 0 leading to collapsed limits (UCL = LCL = mean) and a companion table of computed limits
  - Centralised, dataset-wide SPC report: parity test iterates all grouped metrics and prints a per-metric summary to the console for manual inspection (kept under tests)
  - Assurance edge-case tests: Added explicit tests for target exactly on a process limit and for zero-width bands across Up/Down/Neither metrics
  - T&G parity vignettes: Added `Data Visualisation/SPC/v2/T&G Parity Vignettes` story illustrating T back‑transform LCL≤0 suppression and G quantile limits using preprocess adapters (engine remains XmR‑focused)

- SPC v2 parity mode (logic_v2)
  - PARITY_V26 preset and `withParityV26(...)` helper to enable SQL v2.6a-aligned behaviour (XmR focus).
  - Parity tests added: cross-partition trend, two-of-three including >3σ option, assurance suppression/on-limit pass/fail, and per-partition eligibility.
  - New metrics-oriented Vitest config and npm script to print full-suite metrics (summary and text coverage).
  - Storybook v2 parity toggles in SPC v2 stories (grouped dataset, healthcare, SPCMetricCard integration).
  - Docs updated: parity plan and burndown reflect current status and next steps.
  - Chart-level eligibility (SQL-style) implemented in parity mode: once `minimumPoints` is met chart-wide, limits are available for all rows in each partition and rules apply retroactively to early windows.
  - Storybook tables updated with an “Eligible” column in both Grouped dataset and Healthcare v2 stories to make eligibility explicit.
  - Parity tightening completed: per-row start-of-partition eligibility semantics locked; added symmetric two‑of‑three include‑>3σ tests (same-side, partition-bounded). Burndown updated to mark M4 complete.
  - Added SQL numeric fixture and parity test for MR outlier exclusion (locks mean and limits when exclusion is enabled); burndown M5 updated.
  - Centralised Storybook datasets for SPC v2 stories: grouped JSON and healthcare datasets now live under `logic_v2/storybook/data/`.
  - Healthcare (v2) story now includes a computed expected‑colour table derived from the engine’s `VariationIcon` for side‑by‑side inspection.
  - Docs: Clarified eligibility gating semantics at partition starts — limits are now gated per row using pointRank >= minimumPoints (first N-1 rows in a partition emit null limits; limits appear from the Nth row).

### Changed (Unreleased – Data Visualisation / SPC)

- `SPCSpark`: Colouring semantics aligned with `SPCChart`.
  - Improvement → NHS blue; Concern → NHS orange; Neutral special‑cause only → purple; Common‑cause → grey
  - Series‑level “No judgement” no longer recolours improvement/concern points to purple; purple is strictly per‑point when neutral special‑cause is present
  - Added inner sigma bands; applied XmR fallback when band data are absent
  - Fixed window indexing with a global index base to ensure correct band/limit alignment
- `useSpc`: Polarity‑aware mapping for directional signals prevents inversion on lower‑is‑better metrics (fixes Bed Occupancy spark colour inversion vs `SPCChart`). When `useSqlCompatEngine` is true, point signals derive from post‑pruning `variationIcon` to match wrapper parity.

- XmR zero‑width limits behaviour
  - When the moving‑range mean MR̄ evaluates to 0 within a partition (flat values), the engine now emits zero‑width limits rather than nulls: `UCL = LCL = mean`, and the ±1σ/±2σ bands collapse to the mean as well. This clarifies visuals and enables deterministic assurance classification in flat phases.

- SPC v2 parity alignment (logic_v2)
  - Trend across partitions now supported under the parity preset while retaining per-partition limits.
  - Two-of-three ≥2σ semantics configurable to include >3σ points (preset: enabled) and require same-side third qualifying point.
  - Assurance parity: suppressed on T/G; XmR deterministic pass/fail when target equals a process limit.
  - Eligibility gating: per-partition limits remain, but in parity mode a chart-level threshold enables retroactive rule evaluation for early points once the series qualifies.

### Fixed (Unreleased – Data Visualisation / SPC)

- `SPCSpark`: No‑Judgement parity corrected so that purple adorns only true neutral special‑cause points; removed series‑level over‑marking. Also tightened the fallback 3σ heuristic only when explicit signals are absent.
- `SPCMetricCard`: Gradient state now mirrors the latest point’s SPC classification reliably; reuses last real data row and applies NJ override deterministically.

- XmR math and assurance edge cases
  - xmrLimits: Return zero‑width limits when MR̄ = 0 (previously could surface as nulls in flat partitions after a baseline)
  - Assurance: Equality to a process limit is treated deterministically as pass/fail (depending on metric direction); parity tests added, including for collapsed (zero‑width) bands

### Added (Data Visualisation – Sep 2025)

- RunChart component (thin wrapper over Line) with:
  - Median baseline (single/partitioned), optional provisional run‑rules hints (trend/shift), smoothing and stroke width props
  - NHS data‑viz colour enum (default NHS Blue) and gradient wash under the line (`gradientFills`)
  - Standalone ScaleContext fallback for MDX/isolated usage
  - Stories: basic, hints, and Playground (controls for colour, smoothing, stroke width, median, run rules hints, gradientFills)
  - Docs: RunChart docs page; SPC docs updated with “Run chart → Shewhart chart transition” example
- LineChart: added matching gradient wash (`gradientFills`) using the series stroke colour; unique gradient ids per instance

### Changed (Data Visualisation – Sep 2025)

- GridLines: fixed folder typo `GridlLines` → `GridLines` and updated imports/exports

### Added (Unreleased – SSR-first hardening)

- Hook: `useIsomorphicLayoutEffect` that uses `useLayoutEffect` in the browser and falls back to `useEffect` during SSR to avoid React warnings. See docs: `docs/guides/ssr-and-hydration.mdx`.
- Docs: New "Isomorphic layout effects" section in SSR guide with rationale, usage, and guard patterns.

### Changed (Unreleased – SSR-first hardening)

- ProductRoadmap: Switched drilldown animation effect to `useIsomorphicLayoutEffect` and added a `document` guard; preserves behaviour while keeping SSR/test output clean.
- FontDebugger: Moved all DOM access behind guarded `useEffect` and render from state only, eliminating direct `document` usage during render.
- SSR exports: Promoted several additional pure components to `src/components/ssr.ts` (Details, InsetText, Panel, Breadcrumb, List, Footer, WarningCallout, Grid/Container/Row/Column/WidthContainer, ContentsList, DoDontList, Images, Pagination, SummaryList, SummaryCard, Tables sub-components, SpacingUtilities, Hero, Card, CareCard). Intentionally excluded interactive/input components and any that use hooks in render.

### Added (Unreleased – SPC Engine Refactor Phase 2)

- RULE_METADATA registry consolidating rule id, rank and human label (single source of truth for precedence metadata).
- normaliseSpcSettings helper accepting legacy and V2 setting names; exported from SPC barrel.
- Canonical V2 setting names introduced: `emergingGraceEnabled`, `trendFavourableSideOnly`, `collapseWeakerClusterRules` (legacy names still accepted; see Deprecated).
- Non-enumerable alias getters `improvementValueBeforePruning` / `concernValueBeforePruning` (backed by legacy `originalSpecialCause*` fields) for forward-compatible rename.

### Deprecated (Unreleased – SPC Engine Refactor Phase 2)

- `emergingDirectionGrace` (use `emergingGraceEnabled`).
- `trendSideGatingEnabled` (use `trendFavourableSideOnly`).
- `collapseClusterRules` (use `collapseWeakerClusterRules`).
- `RULE_LABEL` mapping (use `RULE_METADATA[id].label` or iterate `RULES_IN_RANK_ORDER`). Will be removed in a future major after migration.

### Removed (Unreleased – SPC Engine Refactor Phase 2)

- `VariationIconString` enum (redundant; use `VariationIcon`).

### Changed (Unreleased – Parity)

- SPC: Parity alignment – orthodox directional classification now treats a side-gated favourable trend (trend flag present but current point still on adverse side of mean due to side gating) as a low-rank favourable presence during precedence resolution. Mirrors SQL wrapper early directional framing and removes prior mixedShiftTrend parity divergence (rows 5–6), without altering final run rule backfill semantics.
- SPC: Unconditional side-qualified trend gating – trend sequences (increasing / decreasing) now only contribute to Improvement / Concern variation icon resolution when the CURRENT POINT of evaluation lies on the corresponding favourable side of the mean. Previously an in‑progress increasing trend that had not yet crossed the mean could still elevate a below‑mean point to an early Improvement (and analogously for decreasing trend / Concern). This semantic tightening removes premature positive or negative signalling and aligns with Making Data Count interpretability guidance (a favourable trend is only clinically meaningful once performance has actually moved into the favourable half of the distribution).

- SPC: Minimum points threshold semantics tightened when non‑ghost points are fewer than `minimumPoints` (default 13), limits are null and the engine emits `variationIcon: 'suppressed'` for all rows. The UI hides the embedded summary icon in this state. The legacy alias `'none'` is still accepted temporarily but `'suppressed'` is canonical in code and tests. See `docs/spc-thresholds.md`.

#### Rationale (Trend Side Qualification)

Historically the engine:

1. Detected a qualifying N‑point run (trend) irrespective of mean side per point.
2. Backfilled the trend flags across those N points (as of earlier Phase 1 change).
3. Counted those trend flags toward the highSignals / lowSignals sets even for points still on the adverse side of the mean.

This caused PREMATURE variation icons (e.g. Improvement while still below mean for a Higher‑is‑Better metric) in several golden fixture rows (notably XmR & T chart examples) and real datasets (e.g. ED 4h Compliance) where stakeholders reported misleading early optimism.

The revised logic introduces explicit "qualified" trend signals:

- trendUpQualified: trendUp AND point value > mean
- trendDownQualified: trendDown AND point value < mean

Only these qualified signals are now eligible for inclusion in directional signal sets used for `variationIcon` precedence. Unqualified (opposite‑side) points still retain their `specialCauseTrendUp/Down` flags (provenance intact) but do not influence classification until the run is manifest on the favourable side.

#### Behavioural Impact

- Some rows that previously showed `variationIcon = concern` or `improvement` during an across‑mean transition will now show `neither` until the first favourable-side point in the run.
- No change to the detection or backfilling of trend flags themselves – only their participation in precedence ranking is side‑qualified.
- Shift, single‑point, and (where enabled) two‑of‑three / four‑of‑five rules are unaffected.

#### Snapshot / Fixture Impact

- Golden SPC snapshot test currently shows updated `variationIcon` values (previous fixture expected early Concern/Improvement). Regenerate the golden fixture once you accept this semantic correction.

#### Settings & Deprecation Notes

- The legacy options `trendSideGatingEnabled` and the canonical v2 rename `trendFavourableSideOnly` are now effectively NO‑OP toggles (behaviour is always favourable-side qualified). They remain accepted for backward compatibility during Phase 2 but will be removed after consolidation (target: next minor after stabilising downstream consumers). A deprecation warning may be introduced in a later pre‑1.0 release.

#### Migration Guidance

1. Update any analytical documentation or user training materials that described early Improvement/Concern appearing before a mean crossing – that no longer occurs.
2. If UI tests or dashboards asserted specific early variation icons, adjust expectations to `neither` for those transitional points.
3. Remove any conditional logic that attempted to emulate side gating via settings flags – it is now implicit.
4. Regenerate golden fixtures (e.g. `test-data/golden-all.json`) once verified; commit alongside this CHANGELOG entry.
5. Plan removal of `trendSideGatingEnabled` / `trendFavourableSideOnly` from configuration objects (they will be ignored already).

### In Progress – SPC Refactor Phase 1

- Core: Moved `PrimeDirection` enum into `spc.ts` (shared by SQL wrapper & future pruning metadata).
- Core: Added `RULE_PRECEDENCE` ordered array and derived `RULE_RANK_BY_ID` (removes manual rank duplication) plus `RULE_LABEL` mapping.
- SQL Wrapper: Refactored pruning to consume `getDirectionalSignalSummary` (removed bespoke side ranking logic) reducing divergence risk.
- Tests: Strengthened directional alias parity test with real invariants (no dual-side same-rule flags) and directional summary rank consistency checks.
- Tests: Added golden snapshot `spc-directional-summary.snapshot.test.ts` to lock directional rule ordering & variation icon interplay.
- Docs: Roadmap updated to mark completed Phase 1 tasks.


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

- SPC engine: (See detailed note in Changed) Corrected early Improvement/Concern classification by enforcing unconditional favourable-side qualification for trend signal contribution.
- SPC engine: Two-of-three (2σ) rule now excludes points beyond 3σ from contributing to the 2-of-3 count, aligning with Making Data Count guidance (3σ points remain single-point only).
- Settings normaliser: Prunes `undefined` values when flattening V2 → legacy so engine defaults aren’t accidentally overridden (restores expected warnings/assurance behaviours). Added migration doc: `docs/migration/spc-settings-v2-migration.md`.
  - Codemod available to assist settings rename: `npm run spc:codemod:scan` (dry-run) and `npm run spc:codemod:apply` (safe dot-access edits only). See the migration doc for scope and limitations.


### Added (Unreleased – Components & Docs)

- Shared story utilities module `src/components/DataVisualisation/stories/utils/deterministic.ts` providing date helpers, linear series generator, seeded PRNG.
- SPCChart: Minimal Signals Inspector panel (UI-only) that mirrors keyboard focus and lists point value, variation, assurance, and triggered rules with short narration. Opt-in via `showSignalsInspector` prop; SSR-safe.
- Storybook: New control for `showSignalsInspector` on SPC stories and a combined "Inspector with Trend Overlays" story demonstrating inspector alongside trend start/cross/bridge overlays.
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

### Breaking (Unreleased – SPC V2 Cutover)

- Engine enums/constants are no longer re-exported from `spc.ts`. Import from `spcConstants` instead (e.g., `ChartType`, `ImprovementDirection`, `VariationIcon`, `PrimeDirection`, `SpcRuleId`, `SpcRawRuleTag`, `RULE_METADATA`, etc.).
- `VariationIcon.None` removed; use `VariationIcon.Suppressed` for neutral/no-judgement.
- Directional flags should use the `*Up`/`*Down` aliases instead of legacy Above/Below/High/Low names.
- UI enums (`SpcGradientCategory`, `SpcEmbeddedIconVariant`) are defined in `SPCChart.constants.ts` and re-exported via the SPC barrel.

See migration guide: `docs/migration/spc-v2-cutover.md`.

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
