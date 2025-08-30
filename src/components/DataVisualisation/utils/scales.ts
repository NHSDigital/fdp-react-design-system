import { scaleLinear, scaleTime } from 'd3-scale';
import { extent } from 'd3-array';
import { line as d3Line, curveMonotoneX } from 'd3-shape';

export function createXTimeScale<T>(data: T[], accessor: (d: T) => Date, range: [number, number]) {
  const domain = extent(data, accessor) as [Date, Date];
  return scaleTime().domain(domain).range(range);
}

export function createYLinearScale<T>(data: T[], accessor: (d: T) => number, range: [number, number]) {
  const [min, max] = extent(data, accessor) as [number, number];
  // We want a small visual gap below the lowest plotted value when the series is strictly positive,
  // instead of always anchoring at zero (which can waste vertical space if min is far from 0) or
  // sitting the lowest point flush on the axis. If the minimum value is 0 or negative we keep the
  // natural lower bound (no enforced gap) because the user explicitly allows that case.
  const hasData = Number.isFinite(min) && Number.isFinite(max);
  if (!hasData) {
    return scaleLinear().domain([0, 0]).range(range); // empty / invalid fallback
  }
  let lower: number;
  if (min <= 0) {
    // Keep original behaviour for datasets that include zero or negative values.
    lower = Math.min(0, min);
  } else {
    const span = max - min;
    // Padding is 5% of span, with a fallback to 10% of min when span is tiny / zero.
    const pad = (span > 0 ? span : min) * 0.1;
    lower = Math.max(0, min - pad);
    // Guard against floating precision causing lower == min.
    if (lower === min) lower = Math.max(0, min * 0.9);
  }
  const upper = max ?? 0;
  return scaleLinear()
    .domain([lower, upper])
    .nice()
    .range(range);
}

export function createLinePath<T>(
  data: T[],
  x: (d: T) => number,
  y: (d: T) => number,
  options?: { smooth?: boolean }
) {
  const lineGen = d3Line<T>()
    .x(x)
    .y(y);
  if (options?.smooth !== false) {
    lineGen.curve(curveMonotoneX);
  }
  return lineGen(data) ?? '';
}
