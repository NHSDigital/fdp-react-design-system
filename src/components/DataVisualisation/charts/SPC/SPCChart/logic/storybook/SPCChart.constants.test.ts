import { describe, expect, it } from 'vitest';
import SpcGradientCategory from './SPCChart.constants';

// Tiny sanity test to lock enum values used in CSS/data-attributes

describe('SpcGradientCategory', () => {
  it('has stable string values', () => {
    expect(String(SpcGradientCategory.Concern)).toBe('concern');
    expect(String(SpcGradientCategory.Improvement)).toBe('improvement');
    expect(String(SpcGradientCategory.NoJudgement)).toBe('noJudgement');
    expect(String(SpcGradientCategory.Common)).toBe('common');
  });
});
