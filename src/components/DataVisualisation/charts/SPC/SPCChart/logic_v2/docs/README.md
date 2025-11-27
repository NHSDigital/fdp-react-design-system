# logic_v2 usage guide

This module provides a small, self-contained SPC engine aligned to SQL v2.6a semantics (XmR focus, with T/G support). It’s strongly typed with enums and returns a row-by-row result for convenient testing, while mirroring SQL’s last-point judgement.

## Quick start

- Entry point: `buildSpcV26a({ chartType, metricImprovement, data, settings })`
- Import from: `src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2`

### Inputs

- `chartType`: `ChartType.XmR | ChartType.T | ChartType.G`
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
  - `excludeMovingRangeOutliers` (default false): single-pass MR outlier exclusion; when enabled, both MR̄ and the centre-line mean are recomputed from the outlier-excluded set (SQL `MeanWithoutOutliers`)
  - `twoSigmaIncludeAboveThree` (preset: true): include >3σ points toward the two‑of‑three ≥2σ rule (same side)
  - `trendAcrossPartitions` (preset: true): evaluate monotonic trend windows across partition boundaries
  - `chartLevelEligibility` (preset: true): once the chart meets `minimumPoints` overall (excluding ghosts/nulls), compute limits for all rows in each partition and evaluate rules retroactively (SQL behaviour)
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

## Settings and presets

- Parity helper: `withParityV26(baseOverrides?)`
  - Produces SQL v2.6a-aligned settings for XmR, including:
    - `minimumPoints: 13`, `shiftPoints: 6`, `trendPoints: 6`
    - `twoSigmaIncludeAboveThree: true`
    - `trendAcrossPartitions: true`
    - `chartLevelEligibility: true`
    - `excludeMovingRangeOutliers: false` (toggle per-chart as needed)
  - Usage:

```ts
import { withParityV26, buildSpcV26a, ChartType, ImprovementDirection } from './logic_v2';

const settings = withParityV26({ /* optional overrides */ });

const { rows } = buildSpcV26a({
  chartType: ChartType.XmR,
  metricImprovement: ImprovementDirection.Up,
  data,
  settings,
});
```

- Non-parity mode: supply explicit settings (for example to use prospective per-point eligibility):

```ts
const settings = { minimumPoints: 12, chartLevelEligibility: false };
```

### Hierarchical settings and normaliser

Besides the flat v2.6a settings, you can pass a semantic hierarchical shape that groups related options. The engine accepts either and normalises internally. You can also import `normaliseSpcSettingsV2` to pre-normalise on the client.

Example (hierarchical input):

```ts
import { buildSpcV26a, ChartType, ImprovementDirection, normaliseSpcSettingsV2 } from './logic_v2';

const hierarchical = {
  thresholds: { minimumPoints: 13, shiftPoints: 6, trendPoints: 6 },
  eligibility: { chartLevel: true },
  parity: { trendAcrossPartitions: true, twoSigmaIncludeAboveThree: true, enableFourOfFiveRule: false },
  conflict: { strategy: 'SqlPrimeThenRule' },
  trend: { segmentation: { mode: 'AutoWhenConflict' } },
} as const;

// Optional: pre-normalise to flat settings
const settings = normaliseSpcSettingsV2(hierarchical);

const { rows } = buildSpcV26a({
  chartType: ChartType.XmR,
  metricImprovement: ImprovementDirection.Up,
  data,
  settings,
});
```

Types:

- Flat: `SpcSettingsV26a`
- Hierarchical: `SpcSettingsHierarchical`
- Union accepted by build args: `SpcSettingsInput`

### Direction-aware conflict preset

When a trend crosses the mean, some datasets prefer an improvement override (immediately prefer improvement when both sides have candidates), while others align better with explicit trend segmentation. To encode the right choice automatically per metric direction, use the helper:

```ts
import { withConflictPresetAutoV26, ImprovementDirection } from './logic_v2';

// High is good → prefer improvement override, segmentation disabled by engine gating
const highIsGood = withConflictPresetAutoV26(ImprovementDirection.Up);

// Low is good → enable segmentation with CrossingAfterUnfavourable in AutoWhenConflict mode
const lowIsGood = withConflictPresetAutoV26(ImprovementDirection.Down);
```

Gating precedence: if you explicitly set `preferImprovementWhenConflict: true`, the engine disables favourable trend segmentation (any `trendSegmentationMode/strategy` is ignored). This is by design to avoid creating opposite‑side candidates when using an improvement‑first conflict rule.

## Eligibility semantics

- Chart-level eligibility (parity mode): once the series has ≥ `minimumPoints` non‑ghosted, valued points overall, control limits are available for all rows in each partition and rules apply retroactively to early windows. This mirrors SQL and explains why early points may be coloured after the chart qualifies.
- Per-point eligibility (non‑parity): control lines start at the first eligible row per partition (earlier rows have null limits and no rules).

## Notes

- SQL parity: rule ranking and pruning are mirrored; for Up/Down metrics we prune per SQL’s prime direction and conflict rule.
- Neither semantics: SQL denotes a neutral judgement; here we surface side-specific neutral icons (`NeitherHigh`/`NeitherLow`).
- Limits gating: in parity mode, control lines are available chart‑wide once global `minimumPoints` is met (retroactive); otherwise they start from the first eligible row per partition.
- Zero-width limits: When MR̄ = 0 within a partition (flat values), the engine emits zero‑width limits (UCL = LCL = mean) and collapses ±1σ/±2σ bands to the mean. See the Storybook vignette “Zero‑width limits” under Data Visualisation/SPC/v2.
- T chart: Positive values are transformed y = t^0.2777, XmR limits are computed in y-space, then control lines are back‑transformed. Lower bands are suppressed when the back‑transformed value would be ≤ 0 (per SQL guidance). MR columns are null.
- G chart: Control bands are derived from geometric‑distribution quantiles (0‑based support). Bands are non‑negative by construction; MR columns are null.
- Assurance: Suppressed for T/G; on XmR, equality to a process limit yields a deterministic pass/fail.

## Tests

- Run only logic_v2 tests:

```sh
npm run test:spc-v2
```

- Includes utilities, conflict pruning, Neither-side semantics, and grouped dataset parity checks.

## Visual categories helper

For display-level categorisation that mirrors the chart’s pre-process colouring (including neutral special-cause and conflict tie-break behaviour), use the post-processor:

- `computeSpcVisualCategories(rows, { metricImprovement, trendVisualMode?: 'Ungated'|'Gated', enableNeutralNoJudgement?: true })`
- See: `docs/visual-categories.md`

## Trend segmentation helper

When a backfilled trend run crosses the mean, you may wish to split and classify the run into mean-side segments and then apply a hierarchy for highlight. Use:

- `computeTrendSegments(rows)` → returns contiguous trend runs, each split into Above/Below mean segments with min/max and max |value-mean| metadata
- `chooseSegmentsForHighlight(runs, { metricImprovement, strategy: TrendSegmentationStrategy })` → returns the segment(s) to emphasise per strategy, e.g.:

- `TrendSegmentationStrategy.FavourableSide`
- `TrendSegmentationStrategy.CrossingAfterFavourable` (default)
- `TrendSegmentationStrategy.ExtremeFavourable`
- `TrendSegmentationStrategy.FirstFavourable`
- `TrendSegmentationStrategy.LongestFavourable`
- `TrendSegmentationStrategy.LastFavourable`

See tests: `tests/spc_v2/trendSegments.helper.test.ts`.

Further reading: see `docs/trend-segmentation.mdx` for a full background, strategy guide (including Unfavourable variants), and engine integration details.

### Conflict preferences and dominance (advanced)

- `preferTrendWhenConflict?: boolean` — softly prefer the side carrying a trend when both sides have candidates and only one side is a trend.
- `trendDominatesHighlightedWindow?: boolean` — inside highlighted trend segments, clear opposite‑side non‑trend flags (single‑point, two‑sigma, shift). This makes the highlighted trend segment dominate classification within that window.

Tests and guides:

- Alignment: `tests/spc_v2/specialCauseConflict.lowIsGoodAlignment.test.ts`
- Strategy sweeps (report‑only): logic_v2 and central test suites contain sweep tests to explore matches for “High is good”.

## Storybook playgrounds

- Data Visualisation/SPC/v2/Test dataset (JSON): Compute with logic_v2 and compare against expected colours with swatches
- Data Visualisation/SPC/v2/Healthcare (v2 engine): Synthetic healthcare datasets rendered via SPCChart using logic_v2
- Data Visualisation/SPC/v2/SPC MetricCard (v2 engine): SPCMetricCard wired to v2 with status mapped from VariationIcon
  - Both v2 playgrounds include an “Eligible” column to make eligibility explicit when parity mode is on.
