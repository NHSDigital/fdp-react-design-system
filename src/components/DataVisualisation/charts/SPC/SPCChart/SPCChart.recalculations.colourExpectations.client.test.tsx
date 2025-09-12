import { render } from '@testing-library/react';
import { SPCChart } from './SPCChart';
import { resolvedSpcTestCases, SPC_POINT_COLOURS, mapDirection } from './test-data/spcTestCases';

// Reuse class→colour mapping from existing tests (duplicated locally to keep test independence/light coupling)
const CLASS_TO_HEX: Record<string,string> = {
  'fdp-spc__point--sc-improvement': SPC_POINT_COLOURS.improvement,
  'fdp-spc__point--sc-concern': SPC_POINT_COLOURS.concern,
};
const DEFAULT_COMMON = SPC_POINT_COLOURS.common;

// NOTE: The test case catalogue currently contains two entries with the title "Recalculations". Because the
// reducer building the lookup uses the title as the key, the later definition overwrites the former meaning only
// one variant is actually testable by title lookup. This test therefore only validates the surviving variant plus
// distinct baseline polarity variants. Consider renaming the variants to unique titles (e.g. "Recalculations (rules on)"
// and "Recalculations (rules off)") if simultaneous validation of both expected colour sequences is required.

const TARGET_TITLES = [
  'Recalculations / Baselines',
  'Baselines (original)'
];

describe('SPCChart colour expectations – recalculations & baselines', () => {
  it.each(TARGET_TITLES)('%s matches expectedPointColours', (title) => {
    const tc = resolvedSpcTestCases.find(t => t.title === title);
    expect(tc).toBeTruthy();
    if(!tc) return; // type guard
    expect(tc.expectedPointColours).toBeTruthy();
    // Scenario-specific settings (Option C comparative emulation)
    // All heuristics removed – no comparative or retroactive settings applied
    const settings = {};
    const { container } = render(
      <SPCChart 
        data={tc.values.map((y,i)=>({ x: new Date(2023,0,i+1), y }))}
        metricImprovement={mapDirection(tc.direction)}
        enableRules
        showPoints
        settings={settings}
      />
    );
    const circles = Array.from(container.querySelectorAll('circle.fdp-spc__point'));
    const actual = circles.map(c => {
      const cls = Array.from(c.classList);
      const mapped = cls.find(k => CLASS_TO_HEX[k]);
      return mapped ? CLASS_TO_HEX[mapped] : DEFAULT_COMMON;
    });
    const expected = tc.expectedPointColours!;
    // Diagnostic: log full sequences to aid reconciliation of expected vs actual
    // (Non-intrusive; acceptable for development. Remove or gate with env flag if noise becomes excessive.)
    // Only emit when first element mismatches OR lengths differ to keep logs lean.
    if (process.env.SPC_DEBUG) {
      if (actual.length !== expected.length || actual[0] !== expected[0]) {
        console.info('RECALC_FULL_COMPARISON', { title, expected, actual });
      }
      if (actual.length !== expected.length) {
        console.warn('RECALC_COLOUR_LENGTH_MISMATCH', { title, expectedLength: expected.length, actualLength: actual.length, expected, actual });
      }
    }
    for (let i=0; i<Math.min(actual.length, expected.length); i++) {
      if (process.env.SPC_DEBUG && actual[i] !== expected[i]) {
        console.error('RECALC_COLOUR_MISMATCH', { title, index: i, expected: expected[i], actual: actual[i] });
      }
      expect(actual[i]).toBe(expected[i]);
    }
    expect(actual.length).toBe(expected.length);
  });
});
