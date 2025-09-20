import { ChartType, ImprovementDirection, SpcInputRowV2 } from "../types";

export type AutoRecalcArgsV2 = {
  metricImprovement: ImprovementDirection;
  chartType: ChartType;
  shiftLength?: number; // default 6 (inherits shiftPoints in settings typically)
  deltaSigma?: number; // default 0.5
  minGap?: number; // optional points since last baseline
  /**
   * Optional maximum number of synthetic baselines to insert when using the multi variant.
   * Defaults to 1 for backward compatibility (same as single-insert behaviour).
   */
  maxInsertions?: number;
};

/**
 * Compute the 0-based index in the original rows where a synthetic baseline should be inserted
 * based on a sustained favourable shift. XmR only; returns null for other chart types or when
 * insufficient evidence. Ghost and non-numeric values are ignored for windowing and MR.
 */
export function findAutoRecalcBaselineIndexV2(
  rows: ReadonlyArray<SpcInputRowV2>,
  args: AutoRecalcArgsV2
): number | null {
  if (!rows?.length) return null;
  if (args.chartType !== ChartType.XmR) return null;

  const shiftN = Math.max(2, Math.floor(args.shiftLength ?? 6));
  // Build numeric, non-ghost projection with original indices
  const numeric: { idx: number; value: number }[] = [];
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    const v = (r as any).value as number | null | undefined;
    if (r?.ghost) continue;
    if (typeof v === "number" && Number.isFinite(v)) numeric.push({ idx: i, value: v });
  }
  if (numeric.length < shiftN * 2) return null;

  // Sigma proxy from MRbar: MRbar * (2.66/3)
  let mrSum = 0;
  let mrCount = 0;
  for (let i = 1; i < numeric.length; i++) {
    mrSum += Math.abs(numeric[i].value - numeric[i - 1].value);
    mrCount++;
  }
  if (mrCount === 0) return null;
  const mrBar = mrSum / mrCount;
  const sigmaProxy = mrBar * (2.66 / 3);
  if (!Number.isFinite(sigmaProxy) || sigmaProxy <= 0) return null;

  const deltaThreshold = Math.max(0, args.deltaSigma ?? 0.5);
  const favourUp = args.metricImprovement === ImprovementDirection.Up;
  const favourDown = args.metricImprovement === ImprovementDirection.Down;
  const lastBaselineIdx = (() => {
    for (let i = rows.length - 1; i >= 0; i--) if (rows[i]?.baseline) return i;
    return -1;
  })();

  function windowMean(fromIncl: number, toExcl: number): number {
    let s = 0;
    let c = 0;
    for (let i = fromIncl; i < toExcl; i++) {
      s += numeric[i].value;
      c++;
    }
    return c ? s / c : NaN;
  }

  for (let start = shiftN; start <= numeric.length - shiftN; start++) {
    const preMean = windowMean(start - shiftN, start);
    const postMean = windowMean(start, start + shiftN);
    if (!Number.isFinite(preMean) || !Number.isFinite(postMean)) continue;
    const delta = postMean - preMean;
    const deltaSigma = delta / sigmaProxy;

    // Decide favourability
    let favourable = false;
    let directionUp = false; // which side the post window sits relative to preMean
    if (favourUp) {
      favourable = deltaSigma >= deltaThreshold;
      directionUp = true;
    } else if (favourDown) {
      favourable = -deltaSigma >= deltaThreshold;
      directionUp = false;
    } else {
      // Neither: use absolute change and pick the sign from delta
      favourable = Math.abs(deltaSigma) >= deltaThreshold;
      directionUp = delta > 0;
    }
    if (!favourable) continue;

    // Directional gate: all post values strictly on the selected side of preMean
    const onSide = (v: number) => (directionUp ? v > preMean : v < preMean);
    let ok = true;
    for (let j = start; j < start + shiftN; j++) {
      if (!onSide(numeric[j].value)) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    // Enforce gap since previous baseline if requested
    const candidateIdx = numeric[start].idx;
    if (args.minGap && lastBaselineIdx >= 0) {
      const pointsSince = candidateIdx - lastBaselineIdx;
      if (pointsSince < args.minGap) continue;
    }

    return candidateIdx;
  }

  return null;
}

/**
 * Returns a shallow-copied rows array with baseline=true at the computed index (if any).
 */
export function autoInsertBaselinesV2(
  rows: ReadonlyArray<SpcInputRowV2>,
  args: AutoRecalcArgsV2
): SpcInputRowV2[] {
  const idx = findAutoRecalcBaselineIndexV2(rows, args);
  if (idx == null) return rows.slice();
  return rows.map((r, i) => (i === idx ? { ...r, baseline: true } : r));
}

/**
 * Iteratively inserts up to `maxInsertions` synthetic baselines where sustained favourable
 * shifts are detected. Ensures progress by enforcing a minimum gap of at least 1 from the
 * most recent baseline between iterations (even if the caller doesn't specify minGap),
 * preventing repeated selection of the same index.
 */
export function autoInsertBaselinesMultiV2(
  rows: ReadonlyArray<SpcInputRowV2>,
  args: AutoRecalcArgsV2
): SpcInputRowV2[] {
  const max = Math.max(1, Math.floor(args.maxInsertions ?? 1));
  if (max <= 1) return autoInsertBaselinesV2(rows, args);

  let out = rows.slice();
  let inserted = 0;
  // Always enforce at least 1 point since the last baseline to avoid re-picking the same index
  const baseMinGap = Math.max(1, args.minGap ?? 0);

  while (inserted < max) {
    const idx = findAutoRecalcBaselineIndexV2(out, { ...args, minGap: baseMinGap });
    if (idx == null) break;
    if (out[idx]?.baseline) {
      // Already a baseline at this index; to ensure we make progress, increase minGap and retry once
      // (defensive, typically baseMinGap>=1 plus lastBaselineIdx logic avoids reselecting the same index)
      const nextIdx = findAutoRecalcBaselineIndexV2(out, { ...args, minGap: baseMinGap + 1 });
      if (nextIdx == null || nextIdx === idx) break;
      out = out.map((r, i) => (i === nextIdx ? { ...r, baseline: true } : r));
      inserted++;
      continue;
    }
    out = out.map((r, i) => (i === idx ? { ...r, baseline: true } : r));
    inserted++;
  }

  return out;
}
