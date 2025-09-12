import { describe, it, expect } from 'vitest';
import { SpcRawRuleTag, RAW_TAG_TO_RULE_ID, RULE_RANK_BY_ID, SpcRuleId } from './spcConstants';

describe('SpcRawRuleTag mapping', () => {
  it('maps side-specific tags to canonical rule ids', () => {
    expect(RAW_TAG_TO_RULE_ID[SpcRawRuleTag.SinglePointAbove]).toBe(SpcRuleId.SinglePoint);
    expect(RAW_TAG_TO_RULE_ID[SpcRawRuleTag.TwoOfThreeBelow]).toBe(SpcRuleId.TwoSigma);
  });
  it('omits non-ranked ancillary tags', () => {
    expect(RAW_TAG_TO_RULE_ID[SpcRawRuleTag.FourOfFiveAbove]).toBeUndefined();
    expect(RAW_TAG_TO_RULE_ID[SpcRawRuleTag.FifteenInnerThird]).toBeUndefined();
  });
  it('provides rank values for core rule ids', () => {
    expect(RULE_RANK_BY_ID[SpcRuleId.SinglePoint]).toBe(1);
    expect(RULE_RANK_BY_ID[SpcRuleId.Trend]).toBe(4);
  });
});