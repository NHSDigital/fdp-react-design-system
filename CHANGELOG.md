# Changelog

All notable changes to this project will be documented in this file.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/) and versions adhere to semantic versioning once a stable 1.0.0 is reached. Pre‑1.0 minor structural changes may be released as patch bumps while APIs settle.

## Unreleased

### Added (Unreleased)

- Shared story utilities module `src/components/DataVisualisation/stories/utils/deterministic.ts` providing date helpers, linear series generator, seeded PRNG.

### Changed (Unreleased)

- Storybook data visualisation stories (Line, FilterableLine, Area, Bar, SPC) now use fully deterministic synthetic datasets (removed all Math.random/Date.now) for stable visual regression and reproducible docs.
- Header SCSS refactor: eliminated Sass mixed-decls deprecation warnings by reordering declarations and splitting `header-link-style` into base + state mixins.

_No unreleased changes yet._

## 0.0.34-alpha.4 - 2025-09-06

### Added

- Multi‑render architecture documentation (`docs/guides/multi-render-architecture.md`) describing React + Nunjucks + static HTML parity model
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

Current schema + macro + parity test coverage:

- Covered: Button, Tag, Label, Hint, Heading, ErrorMessage, Input, Textarea, Select, Radios, CharacterCount, Checkboxes, Fieldset, ErrorSummary, DateInput, Panel, InsetText, Details
- Next (Batch 1 target): (completed)
- Upcoming (subsequent batches): Pagination, Breadcrumb, BackLink, ActionLink, SummaryList, TaskList, Tabs, WarningCallout, CareCard, Card, Panel (if not already), Hero, List, DoDontList
- Deferred / Likely React-only initially: DataVisualisation (charts), SortableDataTable, ResponsiveDataGrid, SlotMatrix, GanttChart, ProductRoadmap, DashboardSummaryGrid, NavigationSplitView

This list will migrate to a dedicated parity tracking doc once Batch 1 is implemented (planned: `docs/guides/macro-parity-tracking.md`).

---

Previous changes prior to introducing this changelog are not retrospectively documented here.
