# Visual categories (engine-level post-processor)

This helper computes UI-agnostic, per-point visual categories from `SpcRowV2[]`, encapsulating the same pre-process logic that `SPCChart` applies for colouring and “neutral special-cause” behaviour.

It does not change the engine’s `variationIcon` semantics. Instead, it’s a pure post-processor you can use in tests or UI layers to achieve consistent, deterministic colouring for edge cases like Special-cause conflicts and neutral metrics.

## API

- `computeSpcVisualCategories(rows, options): SpcVisualCategory[]`
- `SpcVisualCategory` enum: `Common | Improvement | Concern | NoJudgement`
- Options:
  - `metricImprovement: ImprovementDirection` — how to interpret favourable direction
  - `trendVisualMode?: 'Ungated' | 'Gated'` — default `Ungated`
  - `enableNeutralNoJudgement?: boolean` — default `true`

## Rules (concise)

- Conflict tie-break: if both upward and downward rule flags exist on a point (e.g., trend crossing the mean), prefer `Improvement`.
- Honour engine `variationIcon` first for orthodox Improvement/Concern:
  - `ImprovementHigh | ImprovementLow` → `Improvement`
  - `ConcernHigh | ConcernLow` → `Concern`
- Neutral/Neither with special-cause flags present:
  - Ungated: colour directionally by `metricImprovement` when only one side’s rules fire
  - Gated (or `metricImprovement = Neither`): return `NoJudgement` when enabled (else `Common`)
- Ghost/null values: treated as `Common`.

## Usage

```ts
import { buildSpcV26a, ImprovementDirection } from "../logic_v2";
import { computeSpcVisualCategories } from "../logic_v2/postprocess/visualCategories";

const { rows } = buildSpcV26a({
  chartType: /* ChartType.XmR */, 
  metricImprovement: ImprovementDirection.Up,
  data,
  settings: /* withParityV26(...) or explicit */
});

const categories = computeSpcVisualCategories(rows, {
  metricImprovement: ImprovementDirection.Up,
  trendVisualMode: "Ungated", // or "Gated"
  enableNeutralNoJudgement: true,
});
```

## Notes

- This helper mirrors the `SPCChart` pre-process branch that resolves neutral special-cause points and conflict short-circuits, so tests and non-UI consumers can remain consistent without duplicating logic.
- For Neither metrics, Ungated mode provides directional colours for single-sided signals, while Gated mode with `enableNeutralNoJudgement` highlights those points as `NoJudgement`.
- The engine’s pruning and precedence remain unchanged. This helper only derives a display category from already-computed row flags and `variationIcon`.
