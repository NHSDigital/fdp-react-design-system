import { describe, it, expect } from 'vitest';
// @ts-ignore
import logic from './data-viz-logic.json';
import { getWizard, getNode, evaluateSingleChoice, evaluateYesNo } from './wizardEngine';

describe('wizardEngine', () => {
  const wiz = getWizard(logic as any, 'nhs_v1');

  it('loads wizard and root node', () => {
    expect(wiz.title).toBeDefined();
    expect(typeof wiz.root).toBe('string');
    const root = getNode(wiz, wiz.root);
    // Accept both legacy 'single_choice' and new unified 'choice' node types
    expect(['single_choice', 'choice']).toContain((root as any).type);
    expect(((root as any).choices || []).length).toBeGreaterThan(0);
  });

  it('single_choice evaluation returns next id or recommend', () => {
    const root = getNode(wiz, wiz.root) as any;
    const first = root.choices[0];
    const res = evaluateSingleChoice(root, first.label);
    expect(res.nextId || (res.recommend && res.recommend.length)).toBeTruthy();
  });

  it('yes_no evaluation returns recommend or next', () => {
    const trendQ1 = getNode(wiz, 'trend_q1') as any;
    expect(trendQ1.type).toBe('yes_no');
    const yesRes = evaluateYesNo(trendQ1, 'yes');
    expect(yesRes.recommend).toContain('fan_chart');
    const noRes = evaluateYesNo(trendQ1, 'no');
    expect(noRes.nextId).toBe('trend_q2');
  });
});
