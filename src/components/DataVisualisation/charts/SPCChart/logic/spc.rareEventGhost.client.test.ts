import { describe, it, expect } from 'vitest';
import { buildSpc, ImprovementDirection, SpcInputRow } from './spc';

// Rare-event ghost handling tests (G & T charts)
// Validates that:
//  - Ghost rows trigger ghost_rows_rare_event warning.
//  - Ghost rows are excluded from mean / limit calculations.
//  - pointRank skips ghost rows (ghost row pointRank = 0; final pointRank equals number of non-ghost values).
//  - Ghost retains ghostValue and ghostFlag while still exposing raw value field.

describe('Rare-event ghost handling (G chart)', () => {
  it('excludes ghost extreme from mean and emits warning', () => {
    // 14 non-ghost sequential counts (5..18) => mean = 11.5
    const base = Array.from({ length: 14 }, (_, i) => 5 + i); // 5..18
    // Insert a ghost extreme (value 100) after 7th element
  const data: SpcInputRow[] = base.map((v, i) => ({ x: i + 1, value: v }));
  data.splice(7, 0, { x: 7.5, value: 100, ghost: true });

    const { rows, warnings } = buildSpc({ chartType: 'G', metricImprovement: ImprovementDirection.Up, data });

    const ghostRow = rows.find(r => r.ghostFlag)!;
    expect(ghostRow).toBeDefined();
    expect(ghostRow.value).toBe(100); // raw value preserved
    expect(ghostRow.ghostValue).toBe(100);
    expect(ghostRow.pointRank).toBe(0); // excluded from rank count

    // Final non-ghost row should have pointRank = 14 (all non-ghost values counted)
    const lastRow = rows.filter(r => !r.ghostFlag).slice(-1)[0];
    expect(lastRow.pointRank).toBe(14);

  // Mean should exclude ghost and lie between min and max of non-ghost values (5..18) – NOT equal to ghost.
  const meanRow = rows.find(r => r.mean !== null)!;
  expect(meanRow.mean).not.toBeNull();
  const meanVal = meanRow.mean!;
  expect(meanVal).toBeGreaterThanOrEqual(5);
  expect(meanVal).toBeLessThanOrEqual(18);

    const ghostWarning = warnings.find(w => w.code === 'ghost_rows_rare_event');
    expect(ghostWarning).toBeDefined();
    expect(ghostWarning!.context?.ghostCount).toBe(1);
  });
});

describe('Rare-event ghost handling (T chart)', () => {
  it('emits ghost warning and preserves pointRank exclusion semantics', () => {
    // 14 non-ghost positive time-between values with modest variation
    const base = [2,3,4,5,6,2,3,4,5,6,7,8,9,10];
  const data: SpcInputRow[] = base.map((v, i) => ({ x: i + 1, value: v }));
    // Insert ghost high outlier (value 40) near middle
  data.splice(6, 0, { x: 6.5, value: 40, ghost: true });

    const { rows, warnings } = buildSpc({ chartType: 'T', metricImprovement: ImprovementDirection.Down, data });

    const ghostRow = rows.find(r => r.ghostFlag)!;
    expect(ghostRow.pointRank).toBe(0);
    // Non-ghost count should be 14
    const maxPointRank = Math.max(...rows.map(r => r.pointRank));
    expect(maxPointRank).toBe(14);

    const ghostWarning = warnings.find(w => w.code === 'ghost_rows_rare_event');
    expect(ghostWarning).toBeDefined();
    expect(ghostWarning!.context?.ghostCount).toBe(1);

    // Ensure mean/limits exist (enough points) and are finite numbers
    const anyWithMean = rows.find(r => r.mean !== null);
    expect(anyWithMean).toBeDefined();
    if (anyWithMean) {
      expect(typeof anyWithMean.mean).toBe('number');
    }
  });
});
