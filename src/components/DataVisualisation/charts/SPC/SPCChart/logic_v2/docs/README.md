# logic_v2 usage guide

This module provides a small, self-contained SPC engine aligned to SQL v2.6a semantics (XmR focus). It’s strongly typed with enums and returns a row-by-row result for convenient testing, while mirroring SQL’s last-point judgement.

## Quick start

- Entry point: `buildSpcV26a({ chartType, metricImprovement, data, settings })`
- Import from: `src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2`

### Inputs

- `chartType`: `ChartType.XmR` (v2.6a focus; T/G can be added later)
- `metricImprovement`: `ImprovementDirection.Up | Down | Neither`
- `data`: Array of `{ x, value?, ghost?, baseline?, target? }`
  - `value`: number or null (nulls and ghosts are excluded from MR/link calculations)
  - `ghost`: true to exclude a point from calculations
  - `baseline`: splits the series into partitions; limits are computed per partition
  - `target`: optional; currently used by assurance helper only
- `settings` (optional):
  - `minimumPoints` (default 13): global gating for emitting control lines
  - `shiftPoints` (default 6): points needed for a shift
  - `trendPoints` (default 6): points needed for a trend
  - `excludeMovingRangeOutliers` (default false): single-pass MR outlier exclusion
  - `metricConflictRule` (default `Improvement`): when prime direction is Same

### Output

- `{ rows: SpcRowV2[] }` where each row includes:
  - control lines: `mean`, `upperProcessLimit`, `lowerProcessLimit`, and 1σ/2σ bands
  - rule flags: `singlePointUp/Down`, `twoSigmaUp/Down`, `shiftUp/Down`, `trendUp/Down`
  - candidates: `specialCauseImprovementValue`, `specialCauseConcernValue` (post-pruning for Up/Down metrics)
  - `variationIcon`: summarised icon. For `Neither` metrics, this is side-specific: `NeitherHigh` or `NeitherLow` when rules exist on one side, otherwise `CommonCause`.

## Example

```ts
import { buildSpcV26a, ChartType, ImprovementDirection } from './logic_v2';

const data = [1,2,3,4,5,6,10,11,12].map((v, i) => ({ x: String(i+1), value: v }));
const res = buildSpcV26a({
  chartType: ChartType.XmR,
  metricImprovement: ImprovementDirection.Neither,
  data,
  settings: { minimumPoints: 9 }
});
const last = res.rows.filter(r => !r.ghost && r.value !== null).pop();
console.log(last?.variationIcon); // => NeitherHigh (rules on the high side)
```

## Notes

- SQL parity: rule ranking and pruning are mirrored; for Up/Down metrics we prune per SQL’s prime direction and conflict rule.
- Neither semantics: SQL denotes a neutral judgement; here we surface side-specific neutral icons (`NeitherHigh`/`NeitherLow`).
- Limits gating: control lines and bands are only emitted when the series meets `minimumPoints` for non-ghosted values.
- Zero-width limits: When MR̄ = 0 within a partition (flat values), the engine emits zero‑width limits (UCL = LCL = mean) and collapses ±1σ/±2σ bands to the mean. See the Storybook vignette “Zero‑width limits” under Data Visualisation/SPC/v2.
- Future: T/G chart paths can be added; tests are structured to allow incremental growth.

## Tests

- Run only logic_v2 tests:

```sh
npm run test:spc-v2
```

- Includes utilities, conflict pruning, Neither-side semantics, and grouped dataset parity checks.

## Storybook playgrounds

- Data Visualisation/SPC/v2/Test dataset (JSON): Compute with logic_v2 and compare against expected colours with swatches
- Data Visualisation/SPC/v2/Healthcare (v2 engine): Synthetic healthcare datasets rendered via SPCChart using logic_v2
- Data Visualisation/SPC/v2/SPC MetricCard (v2 engine): SPCMetricCard wired to v2 with status mapped from VariationIcon
