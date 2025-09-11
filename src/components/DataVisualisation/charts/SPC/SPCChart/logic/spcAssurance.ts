// Assurance icon helper – returns a raw string to avoid enum imports and circular deps
// Contract:
// - Inputs: metricImprovement, capabilityMode, row value/limits, target
// - Output: 'pass' | 'fail' | 'none' matching existing semantics in spc.ts

export type ImprovementDir = 'Up' | 'Down' | 'Neither';

export type AssuranceResult = 'pass' | 'fail' | 'none';

export function computeAssuranceIconRaw(args: {
  metricImprovement: ImprovementDir;
  capabilityMode: boolean | undefined;
  value: number | null;
  mean: number | null;
  upperProcessLimit: number | null;
  lowerProcessLimit: number | null;
  target: number | null;
}): AssuranceResult {
  const {
    metricImprovement,
    capabilityMode,
    value,
    mean,
    upperProcessLimit,
    lowerProcessLimit,
    target,
  } = args;

  const isNumber = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v as number);

  if (!isNumber(value) || mean === null || !isNumber(target)) return 'none';

  if (capabilityMode && isNumber(upperProcessLimit) && isNumber(lowerProcessLimit)) {
    if (metricImprovement === 'Up') {
      if (isNumber(lowerProcessLimit) && lowerProcessLimit > target) return 'pass';
      if (isNumber(upperProcessLimit) && upperProcessLimit < target) return 'fail';
      return 'none';
    }
    if (metricImprovement === 'Down') {
      if (isNumber(upperProcessLimit) && upperProcessLimit < target) return 'pass';
      if (isNumber(lowerProcessLimit) && lowerProcessLimit > target) return 'fail';
      return 'none';
    }
    return 'none';
  }

  // Fallback: single-point vs target
  if (metricImprovement === 'Down') return value <= target ? 'pass' : 'fail';
  if (metricImprovement === 'Up') return value >= target ? 'pass' : 'fail';
  return 'none';
}

export default { computeAssuranceIconRaw };
