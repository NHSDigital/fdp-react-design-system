# Changelog

All notable changes to this project will be documented in this file.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/) and versions adhere to semantic versioning once a stable 1.0.0 is reached. Pre‑1.0 minor structural changes may be released as patch bumps while APIs settle.

## Unreleased

### Added

- Multi‑render architecture documentation (`docs/guides/multi-render-architecture.md`) describing React + Nunjucks + static HTML parity model
- Behaviour layer documentation (`docs/guides/behaviours.md`) including init / teardown APIs & custom events
- Schema‑generated Nunjucks macros for CharacterCount & Checkboxes
- Macro parity tests for CharacterCount and Checkboxes ensuring deterministic HTML output across renderers
- Shared conditional reveal utility (`src/behaviours/conditionalRevealUtil.ts`) powering Radios & Checkboxes
- Teardown functions for all behaviours (`detachButtons`, `detachRadios`, `detachRanges`, `detachCharacterCounts`, `detachCheckboxes`) and global `teardownAll`
- Backward compatibility exports: `HeaderStatic` and `HeaderSSR` now alias the unified `Header` / `HeaderServer` implementations to ease migration
- Provenance / transparency layer for SPC charts: per-row `ruleTags` vs `heuristicTags` with taxonomy classification (orthodox / interpretive / aggressive)
- `strictShewhartMode` settings flag (see Changed: now default true) allowing explicit opt-in to interpretive SPC heuristics when false

### Changed

- Refactored Radios & Checkboxes behaviours to leverage shared conditional reveal utility
- Updated `vitest` config to include `tests/macroParity` globs for macro parity test discovery
- Escaping strategy for Checkboxes conditional content aligned with React SSR (escaped entities for raw string props)
- SPC: `strictShewhartMode` now defaults to `true` enforcing orthodox Shewhart interpretation (only classical special cause rules active by default; interpretive heuristics require explicit `strictShewhartMode: false`)
- SPC: Variation icon suppression (isolated favourable single 3σ point) now only active when `strictShewhartMode: false` (previous tests adjusted accordingly)
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
