import { RULE_PRECEDENCE, RULE_LABEL, RULE_METADATA, RULES_IN_RANK_ORDER, SpcRuleCategory, SpcRuleId } from './spc';

describe('RULE_METADATA registry', () => {
  test('has entries for all precedence rules with consistent rank, label, category, participatesInRanking', () => {
    RULES_IN_RANK_ORDER.forEach((meta, index) => {
      expect(meta.rank).toBe(index + 1);
      expect(meta.id).toBe(RULE_PRECEDENCE[index]);
      expect(meta.label).toBe(RULE_LABEL[meta.id]); // backward compat mapping
      expect(Object.values(SpcRuleCategory)).toContain(meta.category);
      expect(meta.participatesInRanking).toBe(true);
    });
  });

  test('no extraneous rule metadata entries present', () => {
    const metaKeys = Object.keys(RULE_METADATA) as SpcRuleId[];
    expect(metaKeys.sort()).toEqual([...RULE_PRECEDENCE].sort());
  });
});
