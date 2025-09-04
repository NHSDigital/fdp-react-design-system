import { describe, it, expect } from 'vitest';
import spcModule, { ImprovementDirection, VariationIcon } from './spc';
import fs from 'node:fs';
import path from 'node:path';

// Golden dataset derived from "Data - For testing.csv" located in test-data folder.
// CSV columns: vals, mean, mR, mR mean, sigma, UPL, LPL, , wheeler est, UPL, LPL
// Two UPL/LPL sets exist: (1) mean ± 3*sigma (Wheeler) and (2) mean ± 2.66 * MRbar (engine formula).
// The engine (xmrLimits) uses mean ± 2.66 * MRbar, so we compare to the second pair.

function loadCsv(): number[] {
  const csvPath = path.resolve(__dirname, '../test-data/Data - For testing.csv');
  const raw = fs.readFileSync(csvPath, 'utf8').trim();
  const lines = raw.split(/\r?\n/); // first line header
  return lines.slice(1).map(line => {
    const parts = line.split(',');
    // first column = vals
    return Number(parts[0]);
  });
}

describe('SPC XmR golden dataset parity', () => {
  it('matches expected mean, MR-bar and limits and flags special-cause points', () => {
    const values = loadCsv();
    expect(values.length).toBeGreaterThanOrEqual(24); // defensive

    const data = values.map((v, i) => ({ x: i + 1, value: v }));
    const { rows, warnings } = spcModule.buildSpc({
      chartType: 'XmR',
      metricImprovement: ImprovementDirection.Up, // arbitrary for this dataset
      data,
      settings: { enableFourOfFiveRule: true } // exercise extra rule (should not trigger here)
    });

    // Ensure limits present on all rows (enough points > minimumPoints (13))
    expect(rows.every(r => r.mean !== null)).toBe(true);

    // Expected reference values derived from source CSV (second UPL/LPL pair)
    const expectedMean = 48.29166667;
    const expectedMrMean = 4.869565217; // MR mean from CSV
    const expectedUcl = 61.24471014; // mean + 2.66 * MRbar (second UPL)
    const expectedLcl = 35.33862319; // mean - 2.66 * MRbar (second LPL)
    const tol = 1e-6;

    // Pick a representative row (last) – all rows share same limits in XmR baseline phase
    const last = rows[rows.length - 1];
    expect(last.mean).toBeDefined();
    expect(Math.abs((last.mean ?? 0) - expectedMean)).toBeLessThan(tol);
    expect(Math.abs(((last.mrMean ?? 0) - expectedMrMean))).toBeLessThan(tol);
    expect(last.upperProcessLimit).not.toBeNull();
    expect(last.lowerProcessLimit).not.toBeNull();
    expect(Math.abs(((last.upperProcessLimit ?? 0) - expectedUcl))).toBeLessThan(tol);
    expect(Math.abs(((last.lowerProcessLimit ?? 0) - expectedLcl))).toBeLessThan(tol);

    // Special cause: final declining tail drops below lower limit for rows with values < LCL.
    const belowLimitRows = rows.filter(r => r.value !== null && r.lowerProcessLimit !== null && (r.value as number) < (r.lowerProcessLimit as number));
    const belowIds = belowLimitRows.map(r => r.rowId);
    // In dataset: values 35,30,25 are below LCL
    expect(belowIds).toEqual([22, 23, 24]);
    belowLimitRows.forEach(r => expect(r.specialCauseSinglePointBelow).toBe(true));

    // Trend: Expect decreasing trend flagged on last two rows (once >= 6 strictly decreasing points collected)
    const trendDecreasingIds = rows.filter(r => r.specialCauseTrendDecreasing).map(r => r.rowId);
    expect(trendDecreasingIds).toContain(23);
    expect(trendDecreasingIds).toContain(24);

    // Variation icons: For ImprovementDirection.Up, below-limit special cause rows -> Concern
  const concernIds = rows.filter(r => r.variationIcon === VariationIcon.Concern).map(r => r.rowId);
    expect(concernIds).toEqual(expect.arrayContaining([22, 23, 24]));

    // Sanity: no error warnings emitted
    const errorWarnings = warnings.filter(w => w.severity === 'error');
    expect(errorWarnings.length).toBe(0);
  });
});
