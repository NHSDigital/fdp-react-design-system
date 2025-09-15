import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { buildSpcV26a } from '../engine';
import { withParityV26 } from '../presets';
import { ChartType, ImprovementDirection } from '../types';

function parseCsv(text: string) {
  const lines = text.trim().split(/\r?\n/);
  const header = lines[0].split(',');
  const rows = lines.slice(1).map(line => line.split(','));
  // Columns: vals,mean,mR,mR mean,sigma,UPL,LPL,,wheeler est,UPL,LPL
  const vals = rows.map(r => Number(r[0]));
  const mean = Number(rows[0][1]);
  const mrMean = Number(rows[0][3]);
  const sigma = Number(rows[0][4]);
  const wheelerUpl = Number(rows[0][header.length - 2]);
  const wheelerLpl = Number(rows[0][header.length - 1]);
  return { vals, mean, mrMean, sigma, wheelerUpl, wheelerLpl };
}

function movingRanges(values: number[]): number[] {
  const mr: number[] = [];
  for (let i = 1; i < values.length; i++) mr.push(Math.abs(values[i] - values[i - 1]));
  return mr;
}

function mean(values: number[]): number {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

describe('logic_v2: CSV parity (Wheeler 2.66×MR̄ limits)', () => {
  it('matches Wheeler UPL/LPL and mean from the provided CSV', () => {
  const csvPath = path.resolve(process.cwd(), 'src/components/DataVisualisation/charts/SPC/SPCChart/test-data/Data - For testing.csv');
  const csv = fs.readFileSync(csvPath, 'utf-8');
    const { vals, mean: expectedMean, mrMean: expectedMrMean, sigma: expectedSigma, wheelerUpl, wheelerLpl } = parseCsv(csv);

    // Sanity check raw MR computations against CSV
    const mr = movingRanges(vals);
    const mrMeanComputed = mean(mr);
    expect(Math.abs(mrMeanComputed - expectedMrMean)).toBeLessThan(1e-9);
    // Sigma via 3/d2 equivalence noted in docs
    const sigmaComputed = mrMeanComputed / 1.128;
    expect(Math.abs(sigmaComputed - expectedSigma)).toBeLessThan(1e-9);

    // Build with v2.6a parity and check limits align to Wheeler estimates (2.66 * MRbar)
    const settings = withParityV26({ minimumPoints: 13 });
    const data = vals.map((v, i) => ({ x: i + 1, value: v, ghost: false, baseline: false, target: null }));
    const rows = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data, settings }).rows;
    const last = rows.filter(r => !r.ghost).at(-1)!;

    // Mean
    expect(last.mean).not.toBeNull();
  expect(Math.abs((last.mean as number) - expectedMean)).toBeLessThan(1e-8);

    // Limits
    expect(last.upperProcessLimit).not.toBeNull();
    expect(last.lowerProcessLimit).not.toBeNull();

    const tol = 3e-6; // tight tolerance at micro scale to allow floating differences
    expect(Math.abs((last.upperProcessLimit as number) - wheelerUpl)).toBeLessThan(tol);
    expect(Math.abs((last.lowerProcessLimit as number) - wheelerLpl)).toBeLessThan(tol);
  });
});
