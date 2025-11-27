export type RunRuleEvent = { type: 'shift' | 'trendUp' | 'trendDown'; index: number };

/**
 * Very small, provisional run-chart rule hints.
 * - shift: N consecutive points on the same side of the overall median (default N=6)
 * - trendUp / trendDown: N strictly increasing / decreasing consecutive points (default N=6)
 * Returns the index of the last point in each detected window to place a marker near the event.
 */
export function detectRunRuleEvents(values: number[], opts?: { shiftLen?: number; trendLen?: number }): RunRuleEvent[] {
  const shiftLen = opts?.shiftLen ?? 6;
  const trendLen = opts?.trendLen ?? 6;
  const result: RunRuleEvent[] = [];
  if (!values || values.length === 0) return result;
  const med = median(values);
  // Shift detection
  let side: -1 | 0 | 1 = 0;
  let run = 0;
  for (let i = 0; i < values.length; i++) {
    const s = values[i] > med ? 1 : values[i] < med ? -1 : 0;
    if (s === 0) { run = 0; side = 0; continue; }
    if (side !== 0 && s === side) {
      run++;
    } else {
      side = s;
      run = 1;
    }
    if (run >= shiftLen) {
      result.push({ type: 'shift', index: i });
    }
  }
  // Trend detection (strictly monotonic)
  let inc = 0, dec = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i] > values[i-1]) { inc++; dec = 0; } 
    else if (values[i] < values[i-1]) { dec++; inc = 0; } 
    else { inc = 0; dec = 0; }
    if (inc >= trendLen - 1) result.push({ type: 'trendUp', index: i });
    if (dec >= trendLen - 1) result.push({ type: 'trendDown', index: i });
  }
  return result;
}

function median(values: number[]): number {
  const v = values.slice().filter(n => Number.isFinite(n)).sort((a,b)=>a-b);
  if (!v.length) return NaN;
  const mid = Math.floor(v.length/2);
  return v.length % 2 ? v[mid] : (v[mid-1] + v[mid]) / 2;
}
