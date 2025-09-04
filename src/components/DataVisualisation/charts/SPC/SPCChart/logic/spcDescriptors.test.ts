import { describe, it, expect } from 'vitest';
import { VariationIcon, AssuranceIcon, SpcRow } from './spc';
import { extractRuleIds, variationLabel, assuranceLabel, zoneLabel, ruleGlossary } from './spcDescriptors';

// Minimal helper to fabricate a SpcRow with flags
const baseRow = (): SpcRow => ({
  rowId: 1, x: new Date(), value: 10, ghost: false, partitionId: 1, pointRank: 1,
  mean: 10, mr: null, mrMean: null, mrUcl: null,
  upperProcessLimit: 20, lowerProcessLimit: 0,
  upperTwoSigma: 18, upperOneSigma: 16, lowerOneSigma: 4, lowerTwoSigma: 2,
  specialCauseSinglePointAbove: false, specialCauseSinglePointBelow: false,
  specialCauseTwoOfThreeAbove: false, specialCauseTwoOfThreeBelow: false,
  specialCauseFourOfFiveAbove: false, specialCauseFourOfFiveBelow: false,
  specialCauseShiftHigh: false, specialCauseShiftLow: false,
  specialCauseTrendIncreasing: false, specialCauseTrendDecreasing: false,
  variationIcon: VariationIcon.Neither, assuranceIcon: AssuranceIcon.None,
  upperBaseline: null, lowerBaseline: null, movingRangeHighPointValue: null,
  ghostValue: null, ghostFlag: false,
  specialCauseImprovementValue: null, specialCauseConcernValue: null, specialCauseNeitherValue: null,
});

describe('spcDescriptors', () => {
  it('extractRuleIds returns empty array when no flags', () => {
    expect(extractRuleIds(baseRow())).toEqual([]);
  });
  it('extractRuleIds returns rule ids for set flags', () => {
    const r = baseRow();
    r.specialCauseSinglePointAbove = true;
    r.specialCauseTrendDecreasing = true;
    expect(extractRuleIds(r)).toEqual(['singlePointAbove','trendDecreasing']);
    // Ensure glossary entries exist
    expect(ruleGlossary.singlePointAbove.tooltip).toBeTruthy();
  });
  it('variationLabel maps icons correctly', () => {
    expect(variationLabel(VariationIcon.Improvement)).toContain('Improvement');
    expect(variationLabel(VariationIcon.Concern)).toContain('Concern');
    expect(variationLabel(VariationIcon.Neither)).toContain('Common');
    expect(variationLabel(VariationIcon.None)).toBeNull();
  });
  it('assuranceLabel maps pass/fail', () => {
    expect(assuranceLabel(AssuranceIcon.Pass)).toBe('Target met');
    expect(assuranceLabel(AssuranceIcon.Fail)).toBe('Target not met');
    expect(assuranceLabel(AssuranceIcon.None)).toBeNull();
  });
  it('zoneLabel classifies based on z-score', () => {
    // mean 10, sigma 2
    expect(zoneLabel(10, 2, 10)).toBe('Within 1σ'); // z=0
  expect(zoneLabel(10, 2, 11.5)).toBe('Within 1σ'); // z=0.75 still within 1σ
    expect(zoneLabel(10, 2, 12.2)).toBe('Between 1–2σ'); // z=1.1
    expect(zoneLabel(10, 2, 14.2)).toBe('Between 2–3σ'); // z=2.1
    expect(zoneLabel(10, 2, 17)).toBe('Beyond 3σ'); // z=3.5
  });
});
