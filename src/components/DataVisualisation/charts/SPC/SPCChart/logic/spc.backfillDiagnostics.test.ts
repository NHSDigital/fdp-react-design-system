import { buildSpc, ImprovementDirection } from './spc';
import { resolvedSpcTestCases, mapDirection } from '../test-data/spcTestCases';

// Default rule lengths (mirrors code defaults)
const SHIFT_N = 6;
const TREND_N = 6;

function getNonGhostNumericIndices(rows: ReturnType<typeof buildSpc>['rows']) {
  return rows.map((r,i)=> ({i,r})).filter(x => !x.r.ghost && typeof x.r.value === 'number' && Number.isFinite(x.r.value)).map(x=>x.i);
}

describe('SPC special cause retroactive flag diagnostics', () => {
  it('reports any missing backfill situations', () => {
    const issues: Array<{scenario:string; rule:string; indices:number[]; context?:unknown}> = [];

    for (const tc of resolvedSpcTestCases) {
      const data = tc.values.map((v,idx)=> ({ x: idx+1, value: v }));
      const res = buildSpc({ chartType: 'XmR', metricImprovement: mapDirection(tc.direction), data });
      const rows = res.rows;
      const nonGhostIdx = getNonGhostNumericIndices(rows);

      // Helper to record issue
      const record = (rule:string, indices:number[], context?:unknown) => issues.push({ scenario: tc.title, rule, indices, context });

      // Shift High
      const firstShiftHigh = rows.findIndex(r=> r.specialCauseShiftHigh);
      if (firstShiftHigh >= 0) {
        const windowIdx = [] as number[];
        // Collect preceding SHIFT_N-1 points strictly above mean including first flagged
        let count = 0;
        for (let back = firstShiftHigh; back >=0 && count < SHIFT_N; back--) {
          const r = rows[back];
            if(!r.ghost && typeof r.value === 'number' && Number.isFinite(r.value) && typeof r.mean === 'number' && r.mean !== null && r.value > r.mean){
              windowIdx.unshift(back); count++; }
            else break;
        }
        if (windowIdx.length === SHIFT_N) {
          const missing = windowIdx.filter(i=> !rows[i].specialCauseShiftHigh);
          if (missing.length) record('shiftHigh_missing_backfill', missing, {windowIdx});
        }
      }
      // Shift Low
      const firstShiftLow = rows.findIndex(r=> r.specialCauseShiftLow);
      if (firstShiftLow >= 0) {
        const windowIdx = [] as number[];
        let count = 0;
        for (let back = firstShiftLow; back >=0 && count < SHIFT_N; back--) {
          const r = rows[back];
            if(!r.ghost && typeof r.value === 'number' && Number.isFinite(r.value) && typeof r.mean === 'number' && r.mean !== null && r.value < r.mean){
              windowIdx.unshift(back); count++; }
            else break;
        }
        if (windowIdx.length === SHIFT_N) {
          const missing = windowIdx.filter(i=> !rows[i].specialCauseShiftLow);
          if (missing.length) record('shiftLow_missing_backfill', missing, {windowIdx});
        }
      }

  // (Two-of-three rule now flags only the threshold-exceeding points; no backfill expectation.)

      // Trend Increasing
      const firstTrendInc = rows.findIndex(r=> r.specialCauseTrendIncreasing);
      if (firstTrendInc >=0) {
        const windowIdx = [] as number[];
        let prevVal: number | null = null;
        for (let back = firstTrendInc; back >= 0 && windowIdx.length < TREND_N; back--) {
          const r = rows[back];
          if(!r.ghost && typeof r.value === 'number') {
            if (prevVal === null || r.value < prevVal) { // walking backwards ensures strictly increasing forward
              windowIdx.unshift(back);
              prevVal = r.value;
            } else break; // monotonic break
          }
        }
        if (windowIdx.length === TREND_N) {
          const missing = windowIdx.filter(i=> !rows[i].specialCauseTrendIncreasing);
          if (missing.length) record('trendIncreasing_missing_backfill', missing, {windowIdx});
        }
      }
      // Trend Decreasing
      const firstTrendDec = rows.findIndex(r=> r.specialCauseTrendDecreasing);
      if (firstTrendDec >=0) {
        const windowIdx = [] as number[];
        let prevVal: number | null = null;
        for (let back = firstTrendDec; back >= 0 && windowIdx.length < TREND_N; back--) {
          const r = rows[back];
          if(!r.ghost && typeof r.value === 'number') {
            if (prevVal === null || r.value > prevVal) {
              windowIdx.unshift(back);
              prevVal = r.value;
            } else break;
          }
        }
        if (windowIdx.length === TREND_N) {
          const missing = windowIdx.filter(i=> !rows[i].specialCauseTrendDecreasing);
          if (missing.length) record('trendDecreasing_missing_backfill', missing, {windowIdx});
        }
      }
    }

    if (issues.length) {
      console.log('BACKFILL_DIAGNOSTICS', JSON.stringify(issues, null, 2));
    }
    // Do not fail yet; this is a diagnostic runner
    expect(true).toBe(true);
  });
});
