Below is a focused gap analysis and an action roadmap to evolve SPCChart (and the wider data‑viz layer) toward a world‑leading, clinically robust health indicators platform.

## 1. Parity gaps vs SQL v2.6 (from the shown TypeScript port)

Current spc.ts still has placeholder ellipses {…} in critical sections:

- Partition logic: Splitting rows, carrying partition IDs, recomputing means & MR per partition.
- Moving range computation & optional outlier exclusion (MR UCL 3.267 * MRbar).
- XmR limit derivation actually not wired to output rows (only helper functions defined).
- T chart: Transform / back‑transform path exists, but not integrated into per-row loop.
- G chart: Probability limits helper present; not yet applied to rows.
- Special cause rule evaluations (all eight+) absent in code body (shift, trend, 2 of 3, 4 of 5, single 3σ, high MR, etc.).
- Assurance (pass/fail) logic not implemented (target vs capability bands, suppression cases).
- Suppression rule: “isolated favourable single 3σ point” – not applied.
- Warning generation blocks placeholders (minimum points, targets suppressed, nulls, ghosts on T/G, baseline special cause).
- Variation icon resolution (Improvement / Concern / Neither / None) not applied.
- Ghost handling (excluded from calc but emitted) incomplete.
- Baseline recalculation segments (re-centering and re-limiting) missing.
- Point rank & derived helper columns (mr, mrMean, mrUcl, upper/lower sigma bands) not populated.

## 2. Statistical / methodological enhancements (beyond parity)

### High impact

Robust center option: allow median-based “trial” phase when < recommended points, auto-promote to mean after threshold.
Adaptive shift/trend rule lengths configurable per measure volatility.
Optional Western Electric vs NHS MDfC (Making Data Count) rule sets toggle.
Partition auto-suggestion (detect sustained mean shift & propose a baseline marker).
Capability indices (Cp, Cpk analogues) for metrics with defined spec ranges (especially physiological indicators).
Distribution-aware safeguards:
Apply log or Box-Cox suggestion for heavily skewed positive metrics (before forcing T chart).
Flag overdispersion in counts (suggest C/U chart vs XmR).
Add P, U, C charts (proportions, rates, counts per unit) for infection rates, compliance %, incident counts.
Bayesian smoothing option (hierarchical shrinkage) for low-volume segments (reduce volatility misclassification).
Data quality scoring (missingness, ghost density, irregular intervals) surfaced as warnings & meta layer.

### Moderate

Empirical sigma recalibration after outlier removal (iterative until stable or max iterations).
Option to freeze limits after an “establishment” phase (lock historic baseline).
Weighted limits when unequal subgroup sizes (future multi-value subgroups).
Moving window re-baselining (rolling stability detection).
Advanced (strategic):

Signal probability scoring (posterior probability improvement vs concern).
Causal annotation hooks (interventions) integrated into narration & risk of false attribution highlight.
Multi-series SPC comparison (benchmark peer organisations) with controlled false discovery rate.

## 3. Visual encoding & UI improvements

Distinguish baseline segments with subtle dashed mean & small “Baseline starts” tag.
Per-signal glyph layer (already basic) upgraded: different shapes for rule types (shift, trend, 2-of-3).
Optional “trial limits” styling (faded) until min points threshold reached.
Capability band shading (target inside/outside process) for assurance clarity.
Intervention annotation primitive (vertical marker + label + optional confidence shading).
Small-multiples layout primitive for dashboards (consistent scales + synchronized cursors).

## 4. Accessibility & narrative

Structured ARIA summary segments: Data quality, last signal, stability status, capability vs target.
Add plain-language explanation for each detected special cause (mapped once, referenced per point).
Keyboard jump between “signals only”.
“Explain this chart” export: a machine-readable JSON summary + natural language paragraph.
Color vision safe palette toggle (already started); extend to patterns for grey fill removal when printing B/W.

## 5. Architecture & performance

Separate pure calculation module (no React) with full unit tests; React layer only maps outputs.
Immutable calculation result cache keyed by JSON signature of inputs (data + settings) for reuse across views.
Typed discriminated unions for chart type outputs (XmR vs T vs G vs P etc.).
Plug-in rule registry (array of rule evaluators returning signal objects).
Streaming / incremental update path (append point without recomputing entire history—maintain rolling aggregates).
Tree‑shakeable sub-package: @…/spc-core (logic) vs @…/spc-react.

## 6. Testing & validation

Add:

Golden parity tests: ingest canonical SQL v2.6 sample datasets; assert identical flags/limits within tolerance.
Fuzz tests (random series under controlled seeds) verifying invariants (e.g., no limits when insufficient points).
Regression snapshots for complex partition sequences.
Performance benchmark (N=5k points incremental update < X ms).
Accessibility snapshot tests (axe) per story variant.

## 7. Additional primitives & helpers roadmap

Core primitives:

LimitBands component (renders mean + sigma zones from provided spec).
SignalMarkers component (icons / tooltips for rule triggers).
BaselineSegmenter (visual separators + labels).
CapabilityBadge (pass/fail ring summarizing target relationship).
AnnotationLayer (events/interventions, shading windows).
DataQualityBanner (surfaced warnings). Utilities:
suggestChartType(dataProfile) – inspects distribution & recommends chart.
summarizeSpc(result) – returns narrative tokens.
detectShiftCandidates(data, minLength) – propose baseline breakpoints.
simulateIntervention(result, newTarget) – hypothetical capability preview.

## 8. Implementation phases (illustrative 90‑day plan)

### Phase 1 (Weeks 1‑3)

Complete parity implementation (all rules, warnings, limits, partitions).
Golden dataset tests vs SQL outputs.
Refactor pure logic module + unit test coverage ≥90% critical paths. Phase 2 (Weeks 4‑6):
Add P/U/C chart types; chart type auto-suggestion helper.
Baseline & signal annotation UI components.
Accessible narration upgrade & data quality warnings surface. Phase 3 (Weeks 7‑9):
Capability indices & lock/freeze limit mode.
Advanced color/texture accessibility options.
Performance optimizations + incremental update API. Phase 4 (Weeks 10‑12):
Bayesian / robust options (opt‑in).
Intervention annotation + narrative integration.
Documentation deep dive: methodology pages & clinical interpretation guide.

## 9. Risk & quality safeguards

Statistical drift risk: lock baseline after acceptance; mark recalculation events.
False positive inflation: central rule registry can implement FDR control for bulk monitoring dashboards.
Governance: version tag logic engine output with engineVersion; store in result for reproducibility.
Auditing: provide reproducibility hash (inputs + settings + version) to embed in exported dashboards.

## 10. Quick win recommendations to start immediately

Finish core rule + partition implementation (replace placeholders).
Add comprehensive parity tests using a fixture replicating SQL expected outputs.
Extract buildSpc into its own package with strict, immutable result object.
Introduce ruleEvaluators[] pattern for extensibility.
Emit structured warnings & meta (counts, first/last special cause index).
Enhance Storybook docs: “How SPC works” panel with interactive toggle of rules.

## 11. Data model refinements

Add to SpcRow:

specialCauseCodes: string[] (direct rule IDs)
favourability: 'favourable' | 'unfavourable' | 'neutral'
isBaselineStart: boolean
capability: 'capable' | 'incapable' | 'unknown'
limitState: 'trial' | 'established'

## 12. Documentation & education

Embed abridged “Understanding Variation” excerpts (permission permitting) into methodology docs.
Glossary component (sigma, partition, capability).
Decision tree: selecting chart type.
FAQ: “Why did my limits change?”, “When to add a baseline?”
Concise priority summary:

Close SQL parity gaps (rules, limits, warnings).
Add auto-suggest & additional SPC chart families (P/U/C).
Build extensible rule + annotation architecture.
Elevate accessibility & narrative clarity.
Harden with parity tests, benchmarks, and governance metadata.
Layer advanced statistical options (robust/Bayesian) after core stability.
Let me know if you’d like me to start by filling the parity gaps (I can draft the completed buildSpc implementation next), or generate the golden test harness first.
