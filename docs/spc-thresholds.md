# SPC Minimum Points Thresholds

Status: Current behaviour (Phase 4); engine-enforced and UI-aligned

## Summary

SPC charts require a minimum number of non-ghost data points to calculate stable centre and control limits. This is controlled by `settings.minimumPoints` (default 13).

When the non-ghost point count is below the threshold:

- `mean`, `upperProcessLimit`, and `lowerProcessLimit` are `null` for all rows.
- `variationIcon` is `"suppressed"` for all rows (no judgement). This replaces legacy expectations that allowed `none`/`neither`.
- The embedded summary icon is hidden in the UI to avoid implying stability before limits exist.

Once the threshold is met (≥ `minimumPoints`), limits are calculated and variation icons reflect detected special-cause signals according to precedence and polarity.

## Configuration

```ts
buildSpc({
  chartType: ChartType.XmR,
  metricImprovement: ImprovementDirection.Up,
  data,
  settings: {
    minimumPoints: 13, // default
  }
});
```

Related options:

- `minimumPointsPartition` (default 8): per-partition minimum when recalculations partition the series.
- `minimumPointsWarning`: emit a global warning when the overall series is under `minimumPoints`.

## Testing

Unit tests codify this behaviour:

- `spc.threshold.client.test.ts` asserts that with 12 points, limits are null and `variationIcon === "suppressed"`.
- With 13 points, tests assert limits exist and at least some rows have non-null UCL/LCL.

## Migration notes

- Prefer `"suppressed"` as the canonical state name in code and tests. `"none"` is a deprecated alias during the migration window.
- If downstream consumers relied on `"neither"` below the threshold, update expectations to `"suppressed"`.
