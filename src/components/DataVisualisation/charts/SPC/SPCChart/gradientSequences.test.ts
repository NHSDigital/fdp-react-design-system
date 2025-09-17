import { describe, it, expect } from 'vitest';
import SpcGradientCategory from './SPCChart.constants';
import { computeGradientSequences } from './gradientSequences';

describe('computeGradientSequences', () => {
  it('groups contiguous categories into sequences', () => {
    const cats = [
      SpcGradientCategory.Common,
      SpcGradientCategory.Common,
      SpcGradientCategory.Improvement,
      SpcGradientCategory.Improvement,
      SpcGradientCategory.Common,
      SpcGradientCategory.Concern,
      SpcGradientCategory.Concern,
    ];
    const seq = computeGradientSequences(cats, false);
    expect(seq).toEqual([
      { start: 0, end: 1, category: SpcGradientCategory.Common },
      { start: 2, end: 3, category: SpcGradientCategory.Improvement },
      { start: 4, end: 4, category: SpcGradientCategory.Common },
      { start: 5, end: 6, category: SpcGradientCategory.Concern },
    ]);
  });

  it('absorbs singletons when absorbSingles=true', () => {
    // Single common at index 2 should be absorbed between Improvement runs (merged into a single Improvement or left as common wedge depending on implementation)
    const cats = [
      SpcGradientCategory.Improvement,
      SpcGradientCategory.Improvement,
      SpcGradientCategory.Common,
      SpcGradientCategory.Improvement,
      SpcGradientCategory.Improvement,
    ];
    const seq = computeGradientSequences(cats, true);
    // We expect a single improvement run from 0..4 (common singleton absorbed), and no explicit common area.
    expect(seq).toEqual([
      { start: 0, end: 4, category: SpcGradientCategory.Improvement },
    ]);
  });
});
