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

### Changed

- Refactored Radios & Checkboxes behaviours to leverage shared conditional reveal utility
- Updated `vitest` config to include `tests/macroParity` globs for macro parity test discovery
- Escaping strategy for Checkboxes conditional content aligned with React SSR (escaped entities for raw string props)

### Fixed

- Parity failure for Checkboxes conditional content by applying consistent escaping

### Internal / Tooling

- Extended macro generator to include Checkboxes & CharacterCount (schema driven)
- Added global window exposure of detach functions (`__nhsDetach*`) and `__nhsTeardownAllBehaviours`

### Deprecated

- `HeaderStatic` and `HeaderSSR` names are deprecated; use `Header` (client/PE) and `HeaderServer` (SSR helper) directly. Aliases will be removed in a future breaking release after 1.0.

### Parity Coverage (Tracking)

Current schema + macro + parity test coverage:

- Covered: Button, Tag, Label, Hint, Heading, ErrorMessage, Input, Textarea, Select, Radios, CharacterCount, Checkboxes, Fieldset, ErrorSummary, DateInput, Panel, InsetText, Details
- Next (Batch 1 target): (completed)
- Upcoming (subsequent batches): Pagination, Breadcrumb, BackLink, ActionLink, SummaryList, TaskList, Tabs, WarningCallout, CareCard, Card, Panel (if not already), Hero, List, DoDontList
- Deferred / Likely React-only initially: DataVisualisation (charts), SortableDataTable, ResponsiveDataGrid, SlotMatrix, GanttChart, ProductRoadmap, DashboardSummaryGrid, NavigationSplitView

This list will migrate to a dedicated parity tracking doc once Batch 1 is implemented (planned: `docs/guides/macro-parity-tracking.md`).

---

Previous changes prior to introducing this changelog are not retrospectively documented here.
