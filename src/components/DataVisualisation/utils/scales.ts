import { scaleLinear, scaleTime } from 'd3-scale';
import { extent } from 'd3-array';
import { line as d3Line, curveMonotoneX } from 'd3-shape';

export function createXTimeScale<T>(data: T[], accessor: (d: T) => Date, range: [number, number]) {
  const domain = extent(data, accessor) as [Date, Date];
  return scaleTime().domain(domain).range(range);
}

export function createYLinearScale<T>(data: T[], accessor: (d: T) => number, range: [number, number]) {
  const [min, max] = extent(data, accessor) as [number, number];
  return scaleLinear()
    .domain([Math.min(0, min ?? 0), max ?? 0])
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
