import { describe, it, expect } from 'vitest';
import { buildSpc, ImprovementDirection, VariationIcon } from './logic/spc';

// Construct a "progressive decline" that includes minor upticks so formal monotonic trend rule may delay firing
// while a shift-high (points above mean) rule triggers early, reproducing orange concern colouring.
function makeProgressiveDeclineWithNoise() {
  // Values start well above eventual mean (~ will settle mid-way) and generally drift downward
  // with small noise that breaks strict monotonic decrease.
  const values = [
    11.2, 11.1, 11.05, 11.15, // slight uptick breaks monotonic early
    11.0, 10.92, 10.88, 10.90, // another tiny uptick
    10.75, 10.70, 10.62, 10.60,
    10.55, 10.50, 10.48, 10.45,
  ];
  return values.map((v, i) => ({ x: i + 1, value: v }));
}

describe('SPC precedence diagnostics (decline inside high-side shift)', () => {
  it('logs rows where downward movement still classified as concern', () => {
    const data = makeProgressiveDeclineWithNoise();
    const result = buildSpc({
      chartType: 'XmR',
      metricImprovement: ImprovementDirection.Down,
      data,
      settings: { minimumPoints: 13, specialCauseShiftPoints: 6, specialCauseTrendPoints: 6 },
    });

    // Compute simple moving slope (last 3 points) to approximate local downward trend without strict monotonic rule.
    const localSlope = (idx: number) => {
      if (idx < 2) return 0;
      const window = result.rows.slice(idx - 2, idx + 1).map(r => r.value!).filter(v => v != null);
      if (window.length < 3) return 0;
      return window[2] - window[0]; // negative => downward overall
    };

    const diagnostics = result.rows.map((r, i) => ({
      i: i + 1,
      v: r.value,
      mean: r.mean,
      aboveMean: r.mean != null && r.value != null ? r.value > r.mean : null,
      shiftHigh: r.specialCauseShiftHigh,
      trendDecreasing: r.specialCauseTrendDecreasing,
      twoOfThreeAbove: r.specialCauseTwoOfThreeAbove,
      variation: r.variationIcon,
      localSlope: localSlope(i),
    }));

  // Intentionally log diagnostics for development insight; retain console usage (eslint rule disabled project-wide for tests if needed)
  console.table(diagnostics);

    // Find at least one row where:
    // - shiftHigh fired (high-side run)
    // - trendDecreasing NOT fired
    // - localSlope negative (downward movement contextually favourable)
    // - variation classified as Concern (orange)
    const conflicting = diagnostics.filter(d => d.shiftHigh && !d.trendDecreasing && d.localSlope < 0 && d.variation === VariationIcon.Concern);
    expect(conflicting.length).toBeGreaterThan(0); // Document current behaviour (potential refinement target)
  });
});
