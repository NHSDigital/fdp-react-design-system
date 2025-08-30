import { BarSeries } from '../series/BarSeriesPrimitive';

export interface ComputeBarWidthOptions {
  parseX: (d: any) => Date;
  /** Explicit per-bar width (px). Falls back to 20 */
  barWidth?: number;
  /** Gap between bars within a group */
  groupGap?: number;
  /** Total groups occupancy factor (groupWidth = step * widthFactor) */
  widthFactor?: number;
  /** Minimum inner plotting width (excluding margins) */
  minInnerWidth?: number;
  /** Minimum visual bar width before we trigger horizontal expansion (auto scroll). Default 8. */
  minBarWidth?: number;
  /** Left/right margins for total width calculation */
  marginLeft?: number;
  marginRight?: number;
  /** Series count displayed at each x (for grouped mode). For stacked we pass 1. */
  seriesCount?: number;
}

/**
 * Derive an inner width so that continuous (time) bars achieve the desired per-bar width
 * without compression. Uses median time step to infer center-to-center spacing.
 */
export function computeContinuousBarChartTotalWidth(
  series: BarSeries[],
  opts: ComputeBarWidthOptions
): number {
  const {
    parseX,
    barWidth = 20,
    groupGap = 4,
    widthFactor = 0.8,
    minInnerWidth = 600,
  minBarWidth = 8,
    marginLeft = 56,
    marginRight = 16,
    seriesCount = 1
  } = opts;
  // Collect all x values
  const xs: number[] = [];
  series.forEach(s => s.data.forEach(d => { xs.push(parseX(d).getTime()); }));
  if (!xs.length) return marginLeft + marginRight + minInnerWidth;
  xs.sort((a,b)=>a-b);
  const unique = xs.filter((v,i,a)=> i===0 || v!==a[i-1]);
  if (unique.length === 1) {
    const groupWidthSingle = barWidth * seriesCount + groupGap * (seriesCount - 1);
    const inner = Math.max(minInnerWidth, groupWidthSingle * 2);
    return inner + marginLeft + marginRight;
  }
  const diffs: number[] = [];
  for (let i=1;i<unique.length;i++) diffs.push(unique[i]-unique[i-1]);
  diffs.sort((a,b)=>a-b);
  const medianDiff = diffs[Math.floor(diffs.length/2)] || diffs[0];
  const spanMs = unique[unique.length-1] - unique[0];
  // Desired group width (sum of constituent bars + gaps)
  const groupWidth = barWidth * seriesCount + groupGap * (seriesCount - 1);
  // Step (center-to-center) target so group occupies widthFactor of step
  const targetStepPx = groupWidth / Math.max(0.05, Math.min(1, widthFactor));
  // Solve innerWidth so that (medianDiff / spanMs) * innerWidth = targetStepPx
  let innerWidth = Math.max(minInnerWidth, Math.ceil(targetStepPx * spanMs / medianDiff));
  // If resulting per-bar width would fall below minBarWidth given the computed innerWidth, upscale proportionally.
  // Effective step from innerWidth: (medianDiff / spanMs) * innerWidth; group occupies widthFactor of that.
  const computedStep = (medianDiff / spanMs) * innerWidth;
  const computedGroupWidth = computedStep * widthFactor; // equals groupWidth originally desired
  const computedBarWidth = (computedGroupWidth - groupGap * (seriesCount - 1)) / seriesCount;
  if (computedBarWidth < minBarWidth) {
    const scaleFactor = minBarWidth / Math.max(1, computedBarWidth);
    innerWidth = Math.ceil(innerWidth * scaleFactor);
  }
  // Add half group width padding either side
  const paddedInner = innerWidth + groupWidth;
  return paddedInner + marginLeft + marginRight;
}
