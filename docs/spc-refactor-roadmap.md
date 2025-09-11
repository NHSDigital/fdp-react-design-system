# SPC Engine Refactor & Harmonisation Plan

Status: Engine Phases 1–3 complete; UI U1 & U2 complete (2025-09-11)
Owner: Data Visualisation / SPC Maintainers
Scope: `spc.ts` core engine, SPCChart UI overlays/inspector, settings migration, docs.

## Executive summary — current state (2025‑09‑11)

### Delivered

- Engine semantics: Side‑gated trend contribution is always‑on in the engine; precedence uses DirectionalFirst; iteration delegates to the canonical partition iterator.
- Settings: Consolidated `SpcSettingsV2` with a single normaliser accepting legacy + V2 and pruning undefineds; legacy aliases still honoured with one‑time deprecation warnings.
- Helpers: Extracted `computeAssuranceIconRaw` and `computeBaselineSuggestionsRaw`; baseline suggestion edge cases fixed (rising edge + index alignment).
- UI U1/U2: Trend overlays (start, first favourable cross, bridge) and a Signals Inspector panel; when the inspector is active, hover tooltips are suppressed; tag styles aligned by globalising SPC tag CSS.
- Thresholds & canonical state: Minimum-points semantics tightened; when non‑ghost points are below the threshold, limits are null and the engine emits `variationIcon: 'suppressed'`. "Suppressed" is now the canonical no‑judgement state; legacy `None` is a deprecated alias. Alias handling is centralised at icon/descriptors and the chart boundary.
- Descriptors: `spcDescriptors.ts` provides stable rule glossary, labels, and color tokens; aligned with enums/settings.
- Docs & codemod: Migration guide for settings V2, roadmap updates, and a codemod with CLI help; CHANGELOG linked.
- Validation: Typecheck/lint/build/SSR/components all green.

### Notes

- Trend visual gating is a UI‑only toggle via a `TrendVisualMode` enum (defaults Ungated); engine classification is unchanged and always side‑gated.
- Governance preset added to Storybook for common configuration.

## Recommended next steps

### Quality & safety

- Keep `npm run analyze:ssr` in your local pre‑release checklist to guard SSR regressions.

### Developer experience

- Add a short example snippet in the SPC docs showing how to wire `TrendVisualMode` and U1 overlays together (Ungated vs Gated visuals side‑by‑side).
- Expose a light `onSignalFocus` callback from the Signals Inspector for analytics/a11y hooks (non‑breaking prop).

### Cleanup staging (major release)

- Plan Phase 4 to remove deprecated settings and legacy aliases once downstreams are migrated using the provided codemod.
- Remove deprecated `VariationIcon.None` from the public API ("Suppressed" is already canonical); ship codemod guidance.

### Future UX (optional U3)

- Guided “Explain this chart” mode (start → cross → classification) with color‑blind‑friendly encodings; keep as UI‑only.

## 1. Objectives

- Unify directional / precedence logic across orthodox engine & SQL compatibility wrapper.
- Standardise naming (rule flags, pruning metadata, settings) for clarity & future extensibility.
- Provide backward-compatible transition path (non-breaking minors → eventual major cleanup).
- Improve testability (single golden summary + explicit parity checks).

## 2. Current State (Snapshot)

DONE:

- `getDirectionalSignalSummary(row)` helper exists in core and returns ranked rule context (Up/Down).
- Up/Down naming already the canonical pattern for rule flags.
- Utility extraction (`spcUtils.ts`) complete.

PARTIAL:

- Remaining Phase 1 cleanup: optional alias getters (defer) & documentation polish.
	- Alias getter scaffolding for future renamed pruning fields added (non-enumerable) – complete.

NOT DONE (Phase 2 / 3 Targets):

- Facade builder (`buildSpcWith`) (future)

## 3. Phased Migration Strategy

### Phase 1 (Low risk – additive)

1. Move `PrimeDirection` enum into `spc.ts` (export). Update imports in `spcSqlCompat.ts`.
2. Introduce `RULE_PRECEDENCE: SpcRuleId[]` (ordered list) → derive `RULE_RANK_BY_ID` programmatically.
3. Add `RULE_LABEL: Record<SpcRuleId,string>` & (optional) category metadata placeholder.
4. Refactor SQL wrapper pruning to consume `getDirectionalSignalSummary` (remove duplicated rank logic).
5. Introduce result discriminator (non-breaking): add `pruningMode?: 'sql' | 'conflict' | 'none'` & `primeDirection?` / `primeRuleId?` / `primeRank?` when pruning applied.
6. JSDoc @deprecated annotations on settings earmarked for rename (no runtime change):
   - `trendSideGatingEnabled` → `trendFavourableSideOnly`
   - `emergingDirectionGrace` → `emergingGraceEnabled`
   - `collapseClusterRules` → `collapseWeakerClusterRules`
7. Add adapter layer (temporary getters) if any legacy field names are reintroduced (§7).
8. Expand parity script: assert (not just log) equality of directional classification under both modes where expected.
9. Add golden snapshot test exercising `getDirectionalSignalSummary` across crafted scenarios.

### Phase 2 (Consolidation – Current Progress)

Completed:

1. Pre-pruning canonical alias fields (`improvementValueBeforePruning`, `concernValueBeforePruning`) exposed via getters (non-enumerable) backed by legacy originals.
2. normaliseSpcSettings added – accepts legacy and V2 names (emergingGraceEnabled, trendFavourableSideOnly, collapseWeakerClusterRules) and backfills legacy for compatibility.
3. RULE_METADATA registry delivered (id, rank, label). Tests enforce consistency with RULE_PRECEDENCE.
4. CHANGELOG entries + deprecation console warnings (one-time) for legacy settings.
5. RULE_METADATA enriched with category & participatesInRanking; directional summary rank resolution now metadata-driven.
6. UI/docs now expected to consume `RULE_METADATA` / `RULES_IN_RANK_ORDER`; `RULE_LABEL` retained only as deprecated backward-compatible mapping.
7. Alias contract tests broadened: non-enumerability & conflict mode parity validated.


Pending in Phase 2:

1. (None)

### Phase 3 (Structural Settings Evolution – Delivered)

1. Add additive grouped settings shape (delivered):

```ts
export interface SpcSettingsV2 {
rules?: {
		shiftPoints?: number;
		trendPoints?: number;
		enableFourOfFive?: boolean;
	enableFifteenInnerThird?: boolean;
	};
precedence?: {
		strategy?: PrecedenceStrategy;
		emergingGraceEnabled?: boolean;
		transitionBufferPoints?: number;
	collapseWeakerClusterRules?: boolean;
	};
	trend?: { favourableSideOnly?: boolean };
	autoRecalc?: { enabled?: boolean; shiftLength?: number; deltaSigma?: number };
warnings?: {
	/* mirror existing booleans */
};
}
```


1. Provide normaliser `normaliseSettings(input: SpcSettings | SpcSettingsV2): InternalSettings`. ✅ Delivered as `normaliseSpcSettings` with undefined-prune and nested mirrors (`rules`, `grace`).
2. Update internal engine to read only normalised shape. ✅ Engine reads grouped mirrors for emerging grace and cluster collapse.

### Phase 4 (Major Version – Breaking Cleanup)

1. Remove deprecated field names & settings booleans.
2. Remove the legacy `VariationIcon.None` alias from types/API ("Suppressed" already canonical). Provide codemod guidance and migration notes.
3. Optionally introduce compact `ruleFlags` structure or bitset (only if profiling shows benefit).
4. Publish migration guide + glossary MDX.

## 4. Naming Changes (Planned)

| Current                              | Future                        | Type       | Notes                             |
| ------------------------------------ | ----------------------------- | ---------- | --------------------------------- |
| trendSideGatingEnabled               | trendFavourableSideOnly       | setting    | Phase 1 deprecate, Phase 4 remove |
| emergingDirectionGrace               | emergingGraceEnabled          | setting    | Same schedule                     |
| collapseClusterRules                 | collapseWeakerClusterRules    | setting    | Same schedule                     |
| VariationIcon.None                   | VariationIcon.Suppressed      | enum value | Breaking (Phase 4)                |
| originalSpecialCauseImprovementValue | improvementValueBeforePruning | row field  | Add alias Phase 2                 |
| originalSpecialCauseConcernValue     | concernValueBeforePruning     | row field  | Add alias Phase 2                 |

## 5. Backward Compatibility Strategy

- Phases 1–3 strictly additive; old fields remain writable/readable.
- Deprecations marked with JSDoc + CHANGELOG entries.
- Provide codemod script (Phase 3) for renames (regex-based for settings & enum value mapping).

## 6. Testing Roadmap

| Area                   | Test Type                               | Phase |
| ---------------------- | --------------------------------------- | ----- |
| Directional summary    | Golden snapshot (JSON)                  | 1     |
| SQL vs orthodox parity | Assertion parity script (exit non-zero) | 1     |
| Alias getters          | Contract tests (old === new)            | 2     |
| Settings normaliser    | Table-driven tests                      | 3     |
| Facade buildSpcWith    | Integration tests                       | 3     |
| Migration removal      | Failing tests removed / updated         | 4     |

## 7. Legacy Alias Pattern

For each deprecated property `fooOld` replaced by `fooNew`:

```ts
Object.defineProperty(row, 'fooOld', {
	get() {
	return row.fooNew;
	},
	enumerable: false,
});
```

(Non-enumerable to discourage new usage while remaining accessible.)

## 8. Risk & Mitigation

| Risk                                | Impact                   | Mitigation                                                |
| ----------------------------------- | ------------------------ | --------------------------------------------------------- |
| Silent behavioural drift in ranking | Incorrect classification | Golden snapshot + RULE_PRECEDENCE centralisation          |
| Consumer breakage from early rename | Runtime errors           | Phase gating; aliases until major                         |
| Test fragility with parity changes  | Noise                    | Snapshot versioning & explicit diff output                |
| Over-refactor before stabilising    | Delay                    | Keep phases small; release after each Phase 1/2 milestone |

## 9. Acceptance Criteria (Phase 1)

- PrimeDirection exported from core; sql wrapper updated. ✅
- RULE_PRECEDENCE + derived RULE_RANK_BY_ID in place; tests green. ✅
- SQL wrapper uses getDirectionalSignalSummary (no duplicate ranking code). ✅
- Golden snapshot committed. ✅ (`spc-directional-summary.snapshot.test.ts`)
- pruningMode & prime\* metadata fields emitted when applicable. ✅ (SQL wrapper + orthodox conflict path set `pruningMode`)
- Deprecation annotations added (no runtime rename yet). ✅ (`trendSideGatingEnabled`, `emergingDirectionGrace`, `collapseClusterRules`)
- Parity script exits non-zero on mismatch. ✅ (`npm run spc:parity`)
- Eliminated prior mixedShiftTrend early divergence (orthodox vs SQL) via suppressed favourable trend parity adjustment; added regression test (`spc.parity.suppressedTrend.client.test.ts`). ✅

## 10. Implementation Order (Phase 1 Detailed)

1. Add RULE_PRECEDENCE & RULE_LABEL (trivial). ✅
2. Move PrimeDirection; adjust imports; run typecheck. ✅
3. Refactor SQL wrapper to call shared helper; remove old calc. ✅
4. Add golden snapshot test. ✅
5. Inject pruning metadata into orthodox conflict path & SQL wrapper. ✅
6. Add pruningMode, primeDirection, primeRuleId, primeRank to affected rows. ✅
7. Add deprecation JSDoc on settings slated for rename. ✅
8. Extend parity script with assertions; add npm script (e.g. `spc:parity`). ✅
9. Update docs (this file) + CHANGELOG entry (Unreleased section). ✅

## 11. Tooling Enhancements (Optional Early)

- Add `scripts/generate-spc-golden.ts` to refresh snapshot.
- Add `npm run spc:parity` & include in CI matrix.

## 12. Out of Scope (for now)

- Performance micro-optimisations (bitset) unless profiler indicates need.
- UI layer re-architecture beyond the additive overlays and panels listed in §13.

---

Questions / approvals: open a PR referencing this document and tick Phase 1 acceptance criteria before merging.

## 13. UI & UX Roadmap (SPCChart)

Goal: Help users reason about side‑gated trends without reintroducing classification toggles by adding clear, accessible visual affordances and audit trails.

Principles

- Classification remains unchanged (side‑gated by default).
- Insights are computed post‑engine from existing `engine.rows` and rule tags.
- All additions are UI‑only and backwards‑compatible (additive props).

### Phase U1 (Overlays & tooltip copy)

- Deliver

- Compute trend insights (memoised in SPCChart):
	- `detectedAt` (first index when monotonic run reaches N)
	- `direction` ('up'|'down')
	- `firstFavourableCrossAt` (first index on favourable side of mean within same run, or null)
	- `persistedAcrossMean` (boolean)
- New props (UI only): `showTrendStartMarkers?` (default false), `showFirstFavourableCrossMarkers?` (default true), `showTrendBridgeOverlay?` (default true)
- Render markers (hollow for start, solid for cross) and optional dashed bridge with hover label.
- Tooltip: when purple, show “Emerging trend detected (not yet on favourable side)” + run direction/length and cross status.
- Stories and docs linking to `spc-trend-gating.mdx`.

- Acceptance

- Markers render only when a trend exists; no crashes with small/ghosted series.
- Tooltip gating rationale appears for neutral trend cases.
- Storybook includes overlay toggles; basic visual regression/snapshot tests in place.

### Phase U2 (Signals inspector + interventions)

Deliver

- `showSignalsInspector?` prop: panel/popover listing detected signals (trend/shift/2‑of‑3) with `detectedAt`, `firstFavourableCrossAt`, `persistedAcrossMean`, and rule tags via `extractRuleIds`/`ruleGlossary`.
- `interventions?: Array<{ x: Date|string|number; label?: string }>`: x‑axis markers; proximity hint when an intervention lies between detection and cross.
- `onSignalFocus?` callback for analytics/a11y.

Acceptance

- Inspector updates with viewport/data changes; keyboard navigation between markers; accessible labels for interventions.

### Phase U3 (Explain mode & polish)

Deliver

- Guided “Explain this chart” mode stepping through trend start → cross → classification change.
- Color‑blind supportive encodings (shape/pattern) on markers; global Storybook controls for neutral styling demo.

Acceptance

- Explain mode is screen‑reader friendly; stable screenshot tests.

Tech notes

- No engine changes required; compute insights from `engine.rows`, `mean`, and `metricImprovement`.
- Memoise insights by `rows` identity; keep props additive with safe defaults.

## 14. Recent Deliverables (2025-09-11)

### Engine & Semantics

- Side‑gated classification enforced always‑on in engine; trend detection remains symmetric and exposed via rule tags.
- Settings normaliser in place; legacy flags deprecated with one‑time console warnings.

### UI & Docs

- Visual trend gating toggle added: `trendVisualMode` as enum `TrendVisualMode` with default `Ungated` (visual‑only; classification unchanged).
- Storybook: control for visual mode; new governance preset `GovernanceAssurancePreset` (Gated visuals + embedded assurance icons).
- Docs: Trend Gating Rationale MDX updated with pros/cons, rationale, stacked comparison (`TrendGatingEmbeddedComparison`) with shared direction and live caption, ED4h dual‑mode example, and quick‑start note referencing the governance preset.

### Validation

- Build parity PASS; SSR tests PASS; smoke tests PASS; full component test suite PASS (known non‑blocking notes unchanged).

### Adoption hygiene

- ED4h embedded story updated to render Ungated and Gated variants stacked using the enum.

Result: Phase 2 consolidation complete; moving to Phase 3 settings evolution and UI U1 overlays.

## 15. Next Steps (Actionable)

### Engine & Settings (Phase 3)

- Implement grouped settings shape `SpcSettingsV2` and `normaliseSettings(input): InternalSettings`.
- Ensure public exports and docs reflect V2 names (trend.favourableSideOnly, precedence.emergingGraceEnabled, precedence.collapseWeakerClusterRules).
- Prepare migration notes and codemod draft for eventual Phase 4 removal of deprecated fields.

### UI U1 – Overlays & Tooltip (short cycle)

- Compute memoised trend insights in SPCChart: `detectedAt`, `direction`, `firstFavourableCrossAt`, `persistedAcrossMean`.
- Add additive props: `showTrendStartMarkers`, `showFirstFavourableCrossMarkers` (default true), `showTrendBridgeOverlay` (default true).
- Tooltip copy: neutral purple states explain “emerging trend detected, not yet on favourable side” with run direction/length + cross status.
- Stories: controls for overlay toggles; minimal structural/screenshot tests.

### UI U2 – Signals Inspector & Interventions

- Add `showSignalsInspector?` panel listing detected signals with timings; keyboard navigation and accessible labelling.
- Add `interventions?` markers and proximity hints between detection and favourable cross.

### UI U3 – Explain Mode

- Guided explain steps (start → cross → classification); add colour‑blind supportive encodings for markers.

### Docs & Examples

- Add a short linkable callout near the top of the Trend Gating Rationale pointing to the governance preset (done) and overlays once delivered.
- Expand examples with one additional dataset verifying ungated visuals vs gated (prevent regressions).

### Testing & CI

- Add a small snapshot/structure test for `GovernanceAssurancePreset` and for the comparison component’s caption.
- Include `npm run spc:parity` in CI; keep SSR tests and component suite in the matrix.

### Release & Communication

- Update CHANGELOG (Unreleased → Released) to record Phase 2 completion and enum introduction.
- Brief migration note: prefer `TrendVisualMode` enum; default visuals Ungated; engine classification unchanged.
