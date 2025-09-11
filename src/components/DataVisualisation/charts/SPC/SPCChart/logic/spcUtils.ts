// Extracted pure calculation helpers from spc.ts for direct unit testing.
// These contain no React / DOM dependencies and are deterministic given inputs.

// Basic numeric helpers
export const isNumber = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
export const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
export const mean = (arr: number[]): number => (arr.length ? sum(arr) / arr.length : NaN);

// XmR limit helpers ---------------------------------------------------------
export function movingRanges(values: (number | null)[], ghosts: boolean[]): (number | null)[] {
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

export function mrMeanWithOptionalExclusion(
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

export function xmrLimits(
  centerMean: number,
  mrMeanVal: number
): {
  upperProcessLimit: number | null;
  lowerProcessLimit: number | null;
  upperTwoSigma: number | null;
  lowerTwoSigma: number | null;
  upperOneSigma: number | null;
  lowerOneSigma: number | null;
} {
  if (!isNumber(centerMean) || !isNumber(mrMeanVal))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null,
    };
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

// Rare event chart helpers --------------------------------------------------
const T_ALPHA = 0.2777;
const T_INV_ALPHA = 3.6;
export const toTTransformed = (t: number | null): number | null => (isNumber(t) && t >= 0 ? Math.pow(t, T_ALPHA) : null);
export const fromTTransformed = (y: number | null): number | null => (isNumber(y) && y >= 0 ? Math.pow(y, T_INV_ALPHA) : null);

// Geometric inverse CDF utilities for G chart probability limits
export function geomInvCdfReal(q: number, p: number): number {
  if (!(q > 0 && q < 1) || !(p > 0 && p < 1)) return NaN;
  return Math.log(1 - q) / Math.log(1 - p);
}

const SIGMA_PROBS = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 0.001349898, high: 0.998650102 },
};

export function gChartProbabilityLimits(gMean: number): {
  cl: number | null;
  lcl: number | null;
  ucl: number | null;
  oneLow: number | null;
  oneHigh: number | null;
  twoLow: number | null;
  twoHigh: number | null;
} {
  if (!isNumber(gMean) || gMean < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null,
    };
  const p = 1 / (gMean + 1);
  const qToGbetween = (q: number) => geomInvCdfReal(q, p) - 1;
  const cl = qToGbetween(0.5);
  const lcl = Math.max(0, qToGbetween(SIGMA_PROBS.three.low));
  const ucl = qToGbetween(SIGMA_PROBS.three.high);
  const oneL = Math.max(0, qToGbetween(SIGMA_PROBS.one.low));
  const oneH = qToGbetween(SIGMA_PROBS.one.high);
  const twoL = Math.max(0, qToGbetween(SIGMA_PROBS.two.low));
  const twoH = qToGbetween(SIGMA_PROBS.two.high);
  return { cl, lcl, ucl, oneLow: oneL, oneHigh: oneH, twoLow: twoL, twoHigh: twoH };
}

export function tChartLimits(
  tValues: (number | null)[],
  ghosts: boolean[],
  excludeOutliers: boolean
): {
  center: number | null;
  upperProcessLimit: number | null;
  lowerProcessLimit: number | null;
  upperTwoSigma: number | null;
  lowerTwoSigma: number | null;
  upperOneSigma: number | null;
  lowerOneSigma: number | null;
  mr: (number | null)[];
  mrMean: number | null;
  mrUcl: number | null;
} {
  const y = tValues.map((v) => (isNumber(v) ? toTTransformed(v)! : null));
  const mrY = movingRanges(y, ghosts);
  const { mrMean: mrMeanY_raw } = mrMeanWithOptionalExclusion(mrY, !!excludeOutliers);
  const yNonGhost = y.filter((v, i) => !ghosts[i] && isNumber(v)) as number[];
  const yBar = yNonGhost.length ? mean(yNonGhost) : NaN;
  if (!isNumber(yBar) || !isNumber(mrMeanY_raw)) {
    return {
      center: null,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null,
      mr: mrY,
      mrMean: null,
      mrUcl: null,
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
  const lpl = LL_y <= 0 ? null : fromTTransformed(LL_y);
  const oneH = fromTTransformed(U1_y);
  const oneL = L1_y <= 0 ? null : fromTTransformed(L1_y);
  const twoH = fromTTransformed(U2_y);
  const twoL = L2_y <= 0 ? null : fromTTransformed(L2_y);
  return {
    center: center ?? null,
    upperProcessLimit: upl ?? null,
    lowerProcessLimit: lpl ?? null,
    upperTwoSigma: twoH ?? null,
    lowerTwoSigma: twoL ?? null,
    upperOneSigma: oneH ?? null,
    lowerOneSigma: oneL ?? null,
    mr: mrY,
    mrMean: mrMeanY_raw,
    mrUcl: isNumber(mrMeanY_raw) ? 3.267 * mrMeanY_raw : null,
  };
}
