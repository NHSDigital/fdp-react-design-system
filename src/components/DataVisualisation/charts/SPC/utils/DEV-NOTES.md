# SPC Utils: DRY helpers and conventions

This folder centralises small utilities to reduce duplication across SPC components, hooks, stories, and tests.

What’s here:

- `constants.ts`
  - `DEFAULT_MIN_POINTS` – UI‑layer default minimum eligible points (13). Prefer this constant instead of hard‑coding `13` in chart adapters or helpers. The engine maintains its own internal defaults.

- `transform.ts`
  - `toV2Settings(effEngineSettings, rows, visualsEngineSettings)` – Resolves `minimumPoints` with the default, switches on `chartLevelEligibility` when enough numeric points exist, and passes through selected flags. Use this inside adapters before calling the v2 engine.
  - `toV2Enums(chartType, metricImprovement)` – Maps UI enums to v2 enums.
  - `visualsToPointSignals(visuals)` – Maps `SpcVisualCategory[]` to a fallback `pointSignals` array for sparks (only when not passing `visualCategories`).
  - `visualsToNeutralFlags(visuals)` – Boolean flags for per‑point No‑Judgement markers. Typically not needed when `visualCategories` is provided.

Guidance:

- Prefer a single engine compute per series (row) via `computeSpcPrecomputed` and pass:
  - `SPCChart precomputed={{ rows, visuals }}`
  - `SPCSpark visualCategories={visuals}` (+ optional baselines)
- When writing adapters within `SPCChart`, use `toV2Enums` and `toV2Settings` to avoid repeating enum/eligibility logic.
- Keep type shapes consistent:
  - Public chart series: `SPCDatum[]` (`{ x, y }`)
  - Engine rows in helpers: normalise to `{ x, value }` internally (see `computeSpcPrecomputed`).

This keeps chart and spark in strict visual parity and reduces maintenance drift.
