import { describe, it, expect } from 'vitest';
import { pickOrgLevelColor, pickOrgLevelStroke, ORG_LEVEL_IDS, assignSeriesColors } from './colors';

describe('org-level data viz colours', () => {
  it('resolves all defined org-level colours', () => {
    ORG_LEVEL_IDS.forEach((id, idx) => {
      const c = pickOrgLevelColor(id, idx);
      expect(c).toMatch(/^#/); // simple hex sanity
    });
  });
  it('falls back deterministically when unknown id provided', () => {
    const unknown = pickOrgLevelColor('unknown-scope', 2);
    expect(unknown).toMatch(/^#/);
  });
  it('resolves strokes for each org-level id', () => {
    ORG_LEVEL_IDS.forEach((id, idx) => {
      const s = pickOrgLevelStroke(id, idx);
      expect(s).toMatch(/^#/);
    });
  });
  it('assignSeriesColors supports palette="org-level"', () => {
    const series = ORG_LEVEL_IDS.map(id => ({ id }));
    const coloured = assignSeriesColors(series, { palette: 'org-level' });
  coloured.forEach(s => expect((s as any).color).toBeTruthy());
  });
});
