// NHSE "Making Data Count" SPC Charts – TypeScript port of SQL v2.6
// Supports XmR, T, and G charts with special-cause rules and variation/assurance icons.

/**
 * Chart type meanings (high‑level):
 *  XmR (Individuals & Moving Range):
 *    - Use for a continuous measurement per period (e.g. % compliance, rate, time, count when roughly normal).
 *    - Centre line = mean of individual values; sigma estimated from average moving range (MRbar).
 *    - Control limits = mean ± 2.66 * MRbar (3σ); 1σ/2σ bands are proportional fractions (1/3, 2/3 of 2.66).
 *
 *  T chart (Time‑between events):
 *    - Use when data are elapsed time between rare events (positive, skewed).
 *    - Applies power transform y = t^0.2777 to stabilise variance; runs an XmR on y; then back‑transforms limits.
 *    - Lower limit suppressed if back‑transform would fall ≤ 0 (time cannot be negative).
 *
 *  G chart (Count between events):
 *    - Use when data record the number of opportunities/units between rare events (geometric behaviour).
 *    - No moving range; limits derived directly from geometric distribution quantiles around the mean count.
 *    - Provides probability‑based 1σ/2σ/3σ style bands using inverse CDF (no MR / d2 constants involved).
 */
export type ChartType = "XmR" | "T" | "G";
// Core enums (replacing prior string union types) to share with icon layer.
export enum ImprovementDirection {
  Up = "Up",
  Down = "Down",
  Neither = "Neither",
}
export enum VariationIcon {
  Improvement = "improvement",
  Concern = "concern",
  Neither = "neither",
  None = "none", // used where previously null (ghost/missing or suppressed)
}
export enum AssuranceIcon {
  Pass = "pass",
  Fail = "fail",
  None = "none",
}

export interface SpcInputRow {
  x: string | number | Date; // period label or date
  value?: number | null;     // numeric value (null/undefined treated as missing)
  ghost?: boolean;           // if true, do not include in calc (still output)
  baseline?: boolean;        // if true, start a new partition from this row
  target?: number;           // optional target value (for assurance icon)
}

export interface SpcSettings {
  excludeMovingRangeOutliers?: boolean;   // default: false
  specialCauseShiftPoints?: number;       // default: 6
  specialCauseTrendPoints?: number;       // default: 6
  /** Enable the four-of-five beyond 1σ rule (not in headline public four rules). Default: false */
  enableFourOfFiveRule?: boolean;         // default: false
  /** Suppress isolated favourable single 3σ point without corroboration. Default: true */
  suppressIsolatedFavourablePoint?: boolean; // default: true
  minimumPoints?: number;                 // default: 13
  minimumPointsWarning?: boolean;         // default: false
  minimumPointsPartition?: number;        // default: 12
  maximumPointsPartition?: number | null; // default: null
  maximumPoints?: number | null;          // default: null
  pointConflictWarning?: boolean;         // default: false
  variationIconConflictWarning?: boolean; // default: true
  nullValueWarning?: boolean;             // warn for null data (XmR, G)
  targetSuppressedWarning?: boolean;      // warn when targets ignored for T/G
  ghostOnRareEventWarning?: boolean;      // warn when ghost rows appear on T/G
  partitionSizeWarnings?: boolean;        // warn when partition has too few points
  baselineSpecialCauseWarning?: boolean;  // warn if baseline row shows special cause
  maximumPointsWarnings?: boolean;        // warn when max points caps applied
  /** Capability mode: classify assurance by full process band vs target. Default: true */
  assuranceCapabilityMode?: boolean;      // default: true
}

export interface BuildSpcArgs {
  chartType: ChartType;
  metricImprovement: ImprovementDirection;
  data: SpcInputRow[];
  settings?: SpcSettings;
}

export interface SpcRow {
  rowId: number;
  x: string | number | Date;
  value: number | null;
  ghost: boolean;
  partitionId: number;
  pointRank: number;
  mean: number | null;
  mr: number | null;
  mrMean: number | null;
  mrUcl: number | null;
  upperProcessLimit: number | null;
  lowerProcessLimit: number | null;
  upperTwoSigma: number | null;
  upperOneSigma: number | null;
  lowerOneSigma: number | null;
  lowerTwoSigma: number | null;
  specialCauseSinglePointAbove: boolean;
  specialCauseSinglePointBelow: boolean;
  specialCauseTwoOfThreeAbove: boolean;
  specialCauseTwoOfThreeBelow: boolean;
  specialCauseFourOfFiveAbove: boolean;
  specialCauseFourOfFiveBelow: boolean;
  specialCauseShiftHigh: boolean;
  specialCauseShiftLow: boolean;
  specialCauseTrendIncreasing: boolean;
  specialCauseTrendDecreasing: boolean;
  variationIcon: VariationIcon; // never null; use VariationIcon.None when suppressed
  assuranceIcon: AssuranceIcon; // 'none' when no target / not assessed
  // Parity/helper columns
  upperBaseline: number | null;
  lowerBaseline: number | null;
  movingRangeHighPointValue: number | null;
  ghostValue: number | null;
  ghostFlag: boolean;
  specialCauseImprovementValue: number | null;
  specialCauseConcernValue: number | null;
  specialCauseNeitherValue: number | null;
}

export interface SpcWarning {
  code: string;          // short stable identifier
  message: string;       // human-readable text
  severity?: 'info' | 'warning' | 'error';
  category?: 'config' | 'data' | 'limits' | 'special_cause' | 'baseline' | 'logic' | 'target' | 'ghost' | 'partition';
  context?: Record<string, unknown>; // optional structured data (counts, ids, etc.)
}
export interface SpcResult { rows: SpcRow[]; warnings: SpcWarning[]; }

// ------------------------- Utility functions -------------------------

const isNumber = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
const mean = (arr: number[]): number => (arr.length ? sum(arr) / arr.length : NaN);

type CanonicalRow = {
  rowId: number;
  x: string | number | Date;
  value: number | null;
  ghost: boolean;
  baseline: boolean;
  target: number | null;
};

/** Split into partitions based on row.baseline === true (inclusive of flag row). */
function partitionRows(data: CanonicalRow[]): CanonicalRow[][] {
  const partitions: CanonicalRow[][] = [];
  let current: CanonicalRow[] = [];
  for (const row of data) {
    if (row.baseline && current.length) {
      partitions.push(current);
      current = [];
    }
    current.push(row);
  }
  if (current.length) partitions.push(current);
  return partitions;
}

/** Compute moving range array relative to previous NON-GHOST, within a partition */
function movingRanges(values: (number | null)[], ghosts: boolean[]): (number | null)[] {
  const mr: (number | null)[] = new Array(values.length).fill(null);
  let prevIdx: number | null = null;
  for (let i = 0; i < values.length; i++) {
    const vi = values[i];
    if (!ghosts[i] && isNumber(vi)) {
      if (prevIdx !== null) {
        const pv = values[prevIdx];
        mr[i] = isNumber(pv) ? Math.abs(vi - pv) : null;
      }
      prevIdx = i;
    }
  }
  return mr;
}

/** Iterative single-pass outlier exclusion for MR using UCL = 3.267 * MRbar (1 iteration) */
function mrMeanWithOptionalExclusion(
  mr: (number | null)[],
  excludeOutliers: boolean
): { mrMean: number; mrUcl: number } {
  const pool = mr.filter((v): v is number => isNumber(v));
  if (!pool.length) return { mrMean: NaN, mrUcl: NaN };
  let mrMeanVal = mean(pool);
  let mrUclVal = 3.267 * mrMeanVal;
  if (excludeOutliers) {
    const trimmed = pool.filter((v) => v <= mrUclVal);
    if (trimmed.length && trimmed.length !== pool.length) {
      mrMeanVal = mean(trimmed);
      mrUclVal = 3.267 * mrMeanVal;
    }
  }
  return { mrMean: mrMeanVal, mrUcl: mrUclVal };
}

/** Build sigma/limit lines given mean and MRbar for XmR */
function xmrLimits(centerMean: number, mrMeanVal: number): {
  upperProcessLimit: number | null; lowerProcessLimit: number | null;
  upperTwoSigma: number | null; lowerTwoSigma: number | null;
  upperOneSigma: number | null; lowerOneSigma: number | null;
} {
  if (!isNumber(centerMean) || !isNumber(mrMeanVal)) return {
    upperProcessLimit: null, lowerProcessLimit: null,
    upperTwoSigma: null, lowerTwoSigma: null,
    upperOneSigma: null, lowerOneSigma: null,
  };
  // XmR constants (derived from d2 for n=2). 3-sigma: 2.66*MRbar; 2-sigma: (2/3)*2.66; 1-sigma: (1/3)*2.66
  const k3 = 2.66;
  const k2 = (2 / 3) * k3;
  const k1 = (1 / 3) * k3;
  return {
    upperProcessLimit: centerMean + k3 * mrMeanVal,
    lowerProcessLimit: centerMean - k3 * mrMeanVal,
    upperTwoSigma: centerMean + k2 * mrMeanVal,
    lowerTwoSigma: centerMean - k2 * mrMeanVal,
    upperOneSigma: centerMean + k1 * mrMeanVal,
    lowerOneSigma: centerMean - k1 * mrMeanVal,
  };
}

// Count how many of the provided values are strictly above (> ref) or strictly below (< ref)
function countAbove(values: (number | null)[], ref: number): number {
  return values.reduce((c: number, v) => c + (isNumber(v) && v > ref ? 1 : 0), 0);
}
function countBelow(values: (number | null)[], ref: number): number {
  return values.reduce((c: number, v) => c + (isNumber(v) && v < ref ? 1 : 0), 0);
}

/** True if last n non-ghost values form a strict monotonic trend */
function isTrend(seq: (number | null)[], n: number, direction: "up" | "down"): boolean {
  const vals = seq.filter((v): v is number => isNumber(v));
  if (vals.length < n) return false;
  const tail = vals.slice(-n);
  for (let i = 1; i < tail.length; i++) {
    if (direction === "up" && !(tail[i] > tail[i - 1])) return false;
    if (direction === "down" && !(tail[i] < tail[i - 1])) return false;
  }
  return true;
}

/** True if last n non-ghost values are all strictly on one side of ref (mean) */
function isRunOnOneSide(seq: (number | null)[], n: number, ref: number, side: "high" | "low"): boolean {
  const vals = seq.filter((v): v is number => isNumber(v));
  if (vals.length < n) return false;
  const tail = vals.slice(-n);
  if (side === "high") return tail.every((v) => v > ref);
  if (side === "low") return tail.every((v) => v < ref);
  return false;
}

// ------------------------- Rare event chart helpers (T & G) -------------------------
// T chart (time-between events): y = t^0.2777; XmR on y; back-transform t = y^3.6; no LCL if lower transform ≤ 0.
const T_ALPHA = 0.2777;
const T_INV_ALPHA = 3.6;
const toTTransformed = (t: number | null): number | null => (isNumber(t) && t >= 0 ? Math.pow(t, T_ALPHA) : null);
const fromTTransformed = (y: number | null): number | null => (isNumber(y) && y >= 0 ? Math.pow(y, T_INV_ALPHA) : null);

// Normal CDF quantile probabilities for 1σ, 2σ, 3σ used by probability-based G chart limits
const SIGMA_PROBS = {
  one:   { low: 0.1586552539, high: 0.8413447461 },
  two:   { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 0.0013498980, high: 0.9986501020 },
};

// Inverse CDF for geometric ("number until first success") as a real value (no ceiling)
function geomInvCdfReal(q: number, p: number): number {
  if (!(q > 0 && q < 1) || !(p > 0 && p < 1)) return NaN;
  return Math.log(1 - q) / Math.log(1 - p);
}

// Probability-based control lines for a G chart given mean g ("number between")
function gChartProbabilityLimits(gMean: number): {
  cl: number | null; lcl: number | null; ucl: number | null;
  oneLow: number | null; oneHigh: number | null; twoLow: number | null; twoHigh: number | null;
} {
  if (!isNumber(gMean) || gMean < 0) return {
    cl: null, lcl: null, ucl: null,
    oneLow: null, oneHigh: null, twoLow: null, twoHigh: null,
  };
  const p = 1 / (gMean + 1); // from E[G_between] = (1-p)/p
  const qToGbetween = (q: number) => geomInvCdfReal(q, p) - 1; // convert from "until" to "between"

  const cl   = qToGbetween(0.5);
  const lcl  = Math.max(0, qToGbetween(SIGMA_PROBS.three.low));
  const ucl  = qToGbetween(SIGMA_PROBS.three.high);
  const oneL = Math.max(0, qToGbetween(SIGMA_PROBS.one.low));
  const oneH = qToGbetween(SIGMA_PROBS.one.high);
  const twoL = Math.max(0, qToGbetween(SIGMA_PROBS.two.low));
  const twoH = qToGbetween(SIGMA_PROBS.two.high);

  return { cl, lcl, ucl, oneLow: oneL, oneHigh: oneH, twoLow: twoL, twoHigh: twoH };
}

// Compute T chart limits on the original t-scale using XmR on transformed y = t^alpha
function tChartLimits(
  tValues: (number | null)[],
  ghosts: boolean[],
  excludeOutliers: boolean
): {
  center: number | null;
  upperProcessLimit: number | null; lowerProcessLimit: number | null;
  upperTwoSigma: number | null; lowerTwoSigma: number | null;
  upperOneSigma: number | null; lowerOneSigma: number | null;
  mr: (number | null)[]; mrMean: number | null; mrUcl: number | null;
} {
  const y = tValues.map((v) => (isNumber(v) ? toTTransformed(v)! : null));
  const mrY = movingRanges(y, ghosts);
  const { mrMean: mrMeanY_raw /*, mrUcl: _mrUclY_raw*/ } = mrMeanWithOptionalExclusion(mrY, !!excludeOutliers);
  const yNonGhost = y.filter((v, i) => !ghosts[i] && isNumber(v)) as number[];
  const yBar = yNonGhost.length ? mean(yNonGhost) : NaN;

  if (!isNumber(yBar) || !isNumber(mrMeanY_raw)) {
    return {
      center: null,
      upperProcessLimit: null, lowerProcessLimit: null,
      upperTwoSigma: null, lowerTwoSigma: null,
      upperOneSigma: null, lowerOneSigma: null,
      mr: mrY, mrMean: null, mrUcl: null,
    };
  }
  const k3 = 2.66, k2 = (2 / 3) * k3, k1 = (1 / 3) * k3;
  const UL_y = yBar + k3 * mrMeanY_raw;
  const LL_y = yBar - k3 * mrMeanY_raw;
  const U2_y = yBar + k2 * mrMeanY_raw;
  const L2_y = yBar - k2 * mrMeanY_raw;
  const U1_y = yBar + k1 * mrMeanY_raw;
  const L1_y = yBar - k1 * mrMeanY_raw;

  const center = fromTTransformed(yBar);
  const upl = fromTTransformed(UL_y);
  const lpl = (LL_y <= 0 ? null : fromTTransformed(LL_y)); // no LCL if LL<0

  const oneH = fromTTransformed(U1_y);
  const oneL = (L1_y <= 0 ? null : fromTTransformed(L1_y));
  const twoH = fromTTransformed(U2_y);
  const twoL = (L2_y <= 0 ? null : fromTTransformed(L2_y));

  return {
    center: center ?? null,
    upperProcessLimit: upl ?? null, lowerProcessLimit: lpl ?? null,
    upperTwoSigma: twoH ?? null, lowerTwoSigma: twoL ?? null,
    upperOneSigma: oneH ?? null, lowerOneSigma: oneL ?? null,
    mr: mrY, mrMean: mrMeanY_raw, mrUcl: isNumber(mrMeanY_raw) ? 3.267 * mrMeanY_raw : null,
  };
}

// ------------------------- Core builder -------------------------

export function buildSpc(args: BuildSpcArgs): SpcResult {
  const {
    chartType,
    metricImprovement,
    data,
    settings: userSettings = {},
  } = args;

  const settings = {
    excludeMovingRangeOutliers: false,
    specialCauseShiftPoints: 6,
    specialCauseTrendPoints: 6,
    enableFourOfFiveRule: false,
    suppressIsolatedFavourablePoint: true,
    minimumPoints: 13,
    minimumPointsWarning: false,
    minimumPointsPartition: 12,
    maximumPointsPartition: null,
    maximumPoints: null,
    pointConflictWarning: false,
    variationIconConflictWarning: true,
	nullValueWarning: true,
	targetSuppressedWarning: true,
	ghostOnRareEventWarning: true,
	partitionSizeWarnings: true,
	baselineSpecialCauseWarning: true,
	maximumPointsWarnings: true,
    assuranceCapabilityMode: true,
    ...userSettings,
  } as Required<SpcSettings>;

  if (!Array.isArray(data)) throw new Error("data must be an array of rows");
  const canonical: CanonicalRow[] = data.map((d, i) => ({
    rowId: i + 1,
    x: d.x,
    value: isNumber(d.value) ? d.value : null,
    ghost: !!d.ghost,
    baseline: !!d.baseline,
    target: isNumber(d.target) ? d.target : null,
  }));

  const partitions = partitionRows(canonical);
  const output: SpcRow[] = [];
  const warnings: SpcWarning[] = [];

  // Global counts for minimum point checks
  const nonGhostGlobalCount = canonical.filter((r) => !r.ghost && isNumber(r.value)).length;
  const globalEnough = nonGhostGlobalCount >= (settings.minimumPoints ?? 13);

  // Iterate partitions
  let partitionId = 0;
  const partitionNonGhostCounts: Record<number, number> = {};
  for (const part of partitions) {
    partitionId++;

    const values = part.map((r) => r.value);
    const ghosts = part.map((r) => r.ghost);

    let mr: (number | null)[] = new Array(values.length).fill(null);
    let centerLine: number = NaN;
    let mrMean: number = NaN;
    let mrUcl: number = NaN;
    let lim: {
      upperProcessLimit: number | null; lowerProcessLimit: number | null;
      upperTwoSigma: number | null; lowerTwoSigma: number | null;
      upperOneSigma: number | null; lowerOneSigma: number | null;
    } = {
      upperProcessLimit: null, lowerProcessLimit: null,
      upperTwoSigma: null, lowerTwoSigma: null,
      upperOneSigma: null, lowerOneSigma: null,
    };

    if (chartType === "XmR") {
      mr = movingRanges(values, ghosts);
      const nonGhostVals = values.filter((v, i) => !ghosts[i] && isNumber(v)) as number[];
      centerLine = nonGhostVals.length ? mean(nonGhostVals) : NaN;
      const tmp = mrMeanWithOptionalExclusion(mr, !!settings.excludeMovingRangeOutliers);
      mrMean = tmp.mrMean; mrUcl = tmp.mrUcl;
      lim = xmrLimits(centerLine, mrMean);
    } else if (chartType === "T") {
      const tlim = tChartLimits(values, ghosts, !!settings.excludeMovingRangeOutliers);
      mr = tlim.mr; mrMean = tlim.mrMean ?? NaN; mrUcl = tlim.mrUcl ?? NaN; centerLine = tlim.center ?? NaN;
      lim = {
        upperProcessLimit: tlim.upperProcessLimit,
        lowerProcessLimit: tlim.lowerProcessLimit,
        upperTwoSigma: tlim.upperTwoSigma,
        lowerTwoSigma: tlim.lowerTwoSigma,
        upperOneSigma: tlim.upperOneSigma,
        lowerOneSigma: tlim.lowerOneSigma,
      };
    } else if (chartType === "G") {
      const nonGhostVals = values.filter((v, i) => !ghosts[i] && isNumber(v)) as number[];
      const gMean = nonGhostVals.length ? mean(nonGhostVals) : NaN;
      const g = gChartProbabilityLimits(gMean);
      centerLine = g.cl ?? NaN;
      lim = {
        upperProcessLimit: g.ucl,
        lowerProcessLimit: g.lcl,
        upperTwoSigma: g.twoHigh,
        lowerTwoSigma: g.twoLow,
        upperOneSigma: g.oneHigh,
        lowerOneSigma: g.oneLow,
      };
      // No MR concept on probability-based G
      mr = new Array(values.length).fill(null); mrMean = NaN; mrUcl = NaN;
    } else {
  warnings.push({ code: 'unknown_chart_type', category: 'config', severity: 'error', message: `Unknown ChartType '${chartType}' – supported: XmR, T, G.`, context: { chartType } });
    }

    const withLines: SpcRow[] = part.map((r, i) => {
      const pointRank = !r.ghost && isNumber(r.value)
        ? (values.slice(0, i + 1).filter((v, j) => !ghosts[j] && isNumber(v)).length)
        : 0;

      const limitsAllowed = globalEnough; // suppress until global minimum reached
      const limits = limitsAllowed ? lim : {
        upperProcessLimit: null, lowerProcessLimit: null,
        upperTwoSigma: null, lowerTwoSigma: null,
        upperOneSigma: null, lowerOneSigma: null,
      };

      const row: SpcRow = {
        rowId: r.rowId,
        x: r.x,
        value: isNumber(r.value) ? r.value : null,
        ghost: r.ghost,
        partitionId,
        pointRank,
        mean: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        mr: isNumber(mr[i]) ? mr[i] : null,
        mrMean: limitsAllowed && isNumber(mrMean) ? mrMean : null,
        mrUcl: limitsAllowed && isNumber(mrUcl) ? mrUcl : null,
        upperProcessLimit: isNumber(limits.upperProcessLimit) ? limits.upperProcessLimit : null,
        lowerProcessLimit: isNumber(limits.lowerProcessLimit) ? limits.lowerProcessLimit : null,
        upperTwoSigma: isNumber(limits.upperTwoSigma) ? limits.upperTwoSigma : null,
        lowerTwoSigma: isNumber(limits.lowerTwoSigma) ? limits.lowerTwoSigma : null,
        upperOneSigma: isNumber(limits.upperOneSigma) ? limits.upperOneSigma : null,
        lowerOneSigma: isNumber(limits.lowerOneSigma) ? limits.lowerOneSigma : null,
        specialCauseSinglePointAbove: false,
        specialCauseSinglePointBelow: false,
        specialCauseTwoOfThreeAbove: false,
        specialCauseTwoOfThreeBelow: false,
        specialCauseFourOfFiveAbove: false,
        specialCauseFourOfFiveBelow: false,
        specialCauseShiftHigh: false,
        specialCauseShiftLow: false,
        specialCauseTrendIncreasing: false,
        specialCauseTrendDecreasing: false,
  variationIcon: VariationIcon.None,
  assuranceIcon: AssuranceIcon.None,
        upperBaseline: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        lowerBaseline: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        movingRangeHighPointValue: limitsAllowed && isNumber(mrUcl) ? mrUcl : null,
        ghostValue: r.ghost && isNumber(r.value) ? r.value : null,
        ghostFlag: !!r.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
      };
      return row;
    });

  partitionNonGhostCounts[partitionId] = withLines.filter(r => !r.ghost && isNumber(r.value)).length;

    // Special cause detection (within partition)
    const shiftN = settings.specialCauseShiftPoints ?? 6;
    const trendN = settings.specialCauseTrendPoints ?? 6;

    const runningNonGhostValues: (number | null)[] = [];
    for (let i = 0; i < withLines.length; i++) {
      const row = withLines[i];
      const v = row.value;
      if (!row.ghost && isNumber(v)) runningNonGhostValues.push(v);

      const hasLimits = isNumber(row.mean) && isNumber(row.upperProcessLimit) && isNumber(row.lowerProcessLimit);
      if (!hasLimits || row.ghost || !isNumber(v)) {
        output.push(row);
        continue;
      }

      // Single point beyond 3-sigma
      row.specialCauseSinglePointAbove = isNumber(row.upperProcessLimit) ? v > row.upperProcessLimit : false;
      row.specialCauseSinglePointBelow = isNumber(row.lowerProcessLimit) ? v < row.lowerProcessLimit : false;

      // Helpers enforcing side-of-mean consistency
      const allAboveMean = (vals: number[], meanVal: number) => vals.every(val => val > meanVal);
      const allBelowMean = (vals: number[], meanVal: number) => vals.every(val => val < meanVal);

      // Two of three beyond 2-sigma AND all three on same side of mean
      const last3 = (runningNonGhostValues as number[]).slice(-3);
      if (last3.length === 3 && isNumber(row.mean)) {
        const u2 = row.upperTwoSigma ?? Infinity;
        const l2 = row.lowerTwoSigma ?? -Infinity;
        const highCount = countAbove(last3, u2);
        const lowCount = countBelow(last3, l2);
        if (highCount >= 2 && allAboveMean(last3, row.mean)) {
          row.specialCauseTwoOfThreeAbove = true;
        }
        if (lowCount >= 2 && allBelowMean(last3, row.mean)) {
          row.specialCauseTwoOfThreeBelow = true;
        }
      }

      // Four of five beyond 1-sigma (same side) – optional, require all five on same side of mean
      if (settings.enableFourOfFiveRule && isNumber(row.mean)) {
        const last5 = (runningNonGhostValues as number[]).slice(-5);
        if (last5.length === 5) {
          const u1 = row.upperOneSigma ?? Infinity;
          const l1 = row.lowerOneSigma ?? -Infinity;
          const highCount = countAbove(last5, u1);
          const lowCount = countBelow(last5, l1);
          if (highCount >= 4 && allAboveMean(last5, row.mean)) {
            row.specialCauseFourOfFiveAbove = true;
          }
          if (lowCount >= 4 && allBelowMean(last5, row.mean)) {
            row.specialCauseFourOfFiveBelow = true;
          }
        }
      }

      // Shift (run) of N on one side of mean
      if (isNumber(row.mean)) {
        row.specialCauseShiftHigh = isRunOnOneSide(runningNonGhostValues, shiftN, row.mean, "high");
        row.specialCauseShiftLow = isRunOnOneSide(runningNonGhostValues, shiftN, row.mean, "low");
      }

      // Trend of N strictly increasing/decreasing
      row.specialCauseTrendIncreasing = isTrend(runningNonGhostValues, trendN, "up");
      row.specialCauseTrendDecreasing = isTrend(runningNonGhostValues, trendN, "down");

      output.push(row);
    }

    // (Optional) enforce maximumPointsPartition by nulling limits after cap
    if (settings.maximumPointsPartition && Number.isFinite(settings.maximumPointsPartition)) {
      const cap = settings.maximumPointsPartition as number;
      let seen = 0;
      for (const row of output.filter((r) => r.partitionId === partitionId)) {
        if (!row.ghost && isNumber(row.value)) seen++;
        if (seen > cap) {
          row.mean = row.upperProcessLimit = row.lowerProcessLimit = null;
          row.upperTwoSigma = row.lowerTwoSigma = row.upperOneSigma = row.lowerOneSigma = null;
        }
      }
    }
  }

  // Variation icon per row based on improvement direction
  for (const row of output) {
    if (row.ghost || !isNumber(row.value) || row.mean === null) {
      row.variationIcon = VariationIcon.None; continue;
    }
  const anyHigh = row.specialCauseSinglePointAbove || row.specialCauseTwoOfThreeAbove || (settings.enableFourOfFiveRule && row.specialCauseFourOfFiveAbove) || row.specialCauseShiftHigh || row.specialCauseTrendIncreasing;
  const anyLow  = row.specialCauseSinglePointBelow || row.specialCauseTwoOfThreeBelow || (settings.enableFourOfFiveRule && row.specialCauseFourOfFiveBelow) || row.specialCauseShiftLow || row.specialCauseTrendDecreasing;

    if (metricImprovement === ImprovementDirection.Up) {
      row.variationIcon = anyHigh ? VariationIcon.Improvement : anyLow ? VariationIcon.Concern : VariationIcon.Neither;
    } else if (metricImprovement === ImprovementDirection.Down) {
      row.variationIcon = anyLow ? VariationIcon.Improvement : anyHigh ? VariationIcon.Concern : VariationIcon.Neither;
    } else {
      row.variationIcon = VariationIcon.Neither; // neutral metric; treat any signal as neutral icon
    }

    // Suppress isolated favourable single 3σ point if enabled
    if (settings.suppressIsolatedFavourablePoint && row.variationIcon === VariationIcon.Improvement) {
      const favourableSingleHigh = metricImprovement === ImprovementDirection.Up && row.specialCauseSinglePointAbove;
      const favourableSingleLow  = metricImprovement === ImprovementDirection.Down && row.specialCauseSinglePointBelow;
      const corroborating = (
        (metricImprovement === ImprovementDirection.Up && (row.specialCauseTwoOfThreeAbove || (settings.enableFourOfFiveRule && row.specialCauseFourOfFiveAbove) || row.specialCauseShiftHigh || row.specialCauseTrendIncreasing)) ||
        (metricImprovement === ImprovementDirection.Down && (row.specialCauseTwoOfThreeBelow || (settings.enableFourOfFiveRule && row.specialCauseFourOfFiveBelow) || row.specialCauseShiftLow || row.specialCauseTrendDecreasing))
      );
      if ((favourableSingleHigh || favourableSingleLow) && !corroborating) {
  // Suppressed favourable single 3σ point -> show 'no judgement' (purple) icon
  row.variationIcon = VariationIcon.None;
        row.specialCauseImprovementValue = null;
      }
    }

    const anySignal = anyHigh || anyLow;
  row.specialCauseImprovementValue = anySignal && row.variationIcon === VariationIcon.Improvement ? row.value : null;
  row.specialCauseConcernValue     = anySignal && row.variationIcon === VariationIcon.Concern     ? row.value : null;
  row.specialCauseNeitherValue     = anySignal && row.variationIcon === VariationIcon.Neither      ? row.value : null;

    // Assurance icon – capability mode (limits vs target) or fallback single-point
    if (isNumber(row.value) && row.mean !== null) {
      row.assuranceIcon = AssuranceIcon.None;
      const inputRow = canonical[row.rowId - 1];
      if (isNumber(inputRow.target)) {
        const t = inputRow.target;
        if (settings.assuranceCapabilityMode && isNumber(row.upperProcessLimit) && isNumber(row.lowerProcessLimit)) {
          if (metricImprovement === ImprovementDirection.Up) {
            if (row.lowerProcessLimit !== null && row.lowerProcessLimit > t) row.assuranceIcon = AssuranceIcon.Pass; // whole band above
            else if (row.upperProcessLimit !== null && row.upperProcessLimit < t) row.assuranceIcon = AssuranceIcon.Fail; // whole band below
            else row.assuranceIcon = AssuranceIcon.None; // overlaps -> uncertain
          } else if (metricImprovement === ImprovementDirection.Down) {
            if (row.upperProcessLimit !== null && row.upperProcessLimit < t) row.assuranceIcon = AssuranceIcon.Pass; // whole band below (good)
            else if (row.lowerProcessLimit !== null && row.lowerProcessLimit > t) row.assuranceIcon = AssuranceIcon.Fail; // whole band above (bad)
            else row.assuranceIcon = AssuranceIcon.None;
          } else {
            row.assuranceIcon = AssuranceIcon.None;
          }
        } else {
          if (metricImprovement === ImprovementDirection.Down) row.assuranceIcon = row.value <= t ? AssuranceIcon.Pass : AssuranceIcon.Fail;
          else if (metricImprovement === ImprovementDirection.Up) row.assuranceIcon = row.value >= t ? AssuranceIcon.Pass : AssuranceIcon.Fail;
          else row.assuranceIcon = AssuranceIcon.None;
        }
      }
    }
  }

  // Step 5-like warnings
  if ((settings.minimumPointsWarning ?? false) && !globalEnough) {
    const available = canonical.filter((r) => !r.ghost && isNumber(r.value)).length;
    warnings.push({
      code: 'insufficient_points_global',
      category: 'data',
      severity: 'warning',
      message: `Only ${available} non-ghost points available; minimum required is ${settings.minimumPoints}. Limits and icons suppressed.`,
      context: { available, minimumRequired: settings.minimumPoints }
    });
  }

  if (settings.variationIconConflictWarning) {
    for (const row of output) {
  if (row.variationIcon === VariationIcon.Improvement) {
        const highAndLow =
          (row.specialCauseSinglePointAbove || row.specialCauseTwoOfThreeAbove || (settings.enableFourOfFiveRule && row.specialCauseFourOfFiveAbove) || row.specialCauseShiftHigh || row.specialCauseTrendIncreasing) &&
          (row.specialCauseSinglePointBelow || row.specialCauseTwoOfThreeBelow || (settings.enableFourOfFiveRule && row.specialCauseFourOfFiveBelow) || row.specialCauseShiftLow || row.specialCauseTrendDecreasing);
  if (highAndLow) warnings.push({ code: 'variation_conflict_row', category: 'logic', severity: 'warning', message: `Row ${row.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`, context: { rowId: row.rowId } });
      }
    }
  }

  // Optional global cap on number of non-ghost points considered
  if (settings.maximumPoints && Number.isFinite(settings.maximumPoints)) {
    const cap = settings.maximumPoints as number;
    let seen = 0;
    for (const row of output) {
      if (!row.ghost && isNumber(row.value)) seen++;
      if (seen > cap) {
        row.mean = row.upperProcessLimit = row.lowerProcessLimit = null;
        row.upperTwoSigma = row.lowerTwoSigma = row.upperOneSigma = row.lowerOneSigma = null;
      }
    }
  }

  // Extended warning suite
  if (settings.nullValueWarning && (chartType === "XmR" || chartType === "G")) {
    const nullCount = canonical.filter(r => !r.ghost && (r.value === null || r.value === undefined || !isNumber(r.value))).length;
  if (nullCount) warnings.push({ code: 'null_values_excluded', category: 'data', severity: 'info', message: `${nullCount} null/missing value(s) excluded from calculations.`, context: { nullCount } });
  }
  if (settings.targetSuppressedWarning && (chartType === "T" || chartType === "G")) {
    const hasTarget = canonical.some(r => isNumber(r.target));
  if (hasTarget) warnings.push({ code: 'target_ignored_rare_event', category: 'target', severity: 'info', message: `Targets provided are ignored for ${chartType} charts in this port.`, context: { chartType } });
  }
  if (settings.ghostOnRareEventWarning && (chartType === "T" || chartType === "G")) {
    const ghostCount = canonical.filter(r => r.ghost).length;
  if (ghostCount) warnings.push({ code: 'ghost_rows_rare_event', category: 'ghost', severity: 'info', message: `${ghostCount} ghost row(s) supplied for rare-event chart (${chartType}); verify intent.`, context: { chartType, ghostCount } });
  }
  if (settings.partitionSizeWarnings) {
    Object.entries(partitionNonGhostCounts).forEach(([pid, count]) => {
  if (count < settings.minimumPointsPartition) warnings.push({ code: 'insufficient_points_partition', category: 'partition', severity: 'warning', message: `Partition ${pid} has only ${count} non-ghost point(s); below recommended ${settings.minimumPointsPartition}.`, context: { partitionId: Number(pid), count, minimum: settings.minimumPointsPartition } });
    });
  }
  if (settings.baselineSpecialCauseWarning) {
    const issueRows: number[] = [];
    output.forEach(r => {
      const input = canonical[r.rowId - 1];
      if (input.baseline) {
        const anySignal = r.specialCauseSinglePointAbove || r.specialCauseSinglePointBelow || r.specialCauseTwoOfThreeAbove || r.specialCauseTwoOfThreeBelow || r.specialCauseFourOfFiveAbove || r.specialCauseFourOfFiveBelow || r.specialCauseShiftHigh || r.specialCauseShiftLow || r.specialCauseTrendIncreasing || r.specialCauseTrendDecreasing;
        if (anySignal) issueRows.push(r.rowId);
      }
    });
  if (issueRows.length) warnings.push({ code: 'baseline_with_special_cause', category: 'baseline', severity: 'warning', message: `Baseline set with special-cause present at row(s): ${issueRows.join(', ')}.`, context: { rows: issueRows } });
  }
  if (settings.maximumPointsWarnings) {
  if (settings.maximumPointsPartition && Number.isFinite(settings.maximumPointsPartition)) warnings.push({ code: 'partition_cap_applied', category: 'limits', severity: 'info', message: `Limits suppressed after ${settings.maximumPointsPartition} non-ghost points per partition.`, context: { cap: settings.maximumPointsPartition } });
  if (settings.maximumPoints && Number.isFinite(settings.maximumPoints)) warnings.push({ code: 'global_cap_applied', category: 'limits', severity: 'info', message: `Limits suppressed after global cap of ${settings.maximumPoints} non-ghost points.`, context: { cap: settings.maximumPoints } });
  }

  return { rows: output, warnings };
}

export default { buildSpc };