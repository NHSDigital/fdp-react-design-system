import { describe, it, expect } from 'vitest';
import { setCategoricalColorStrategy, getOptimizedCategoricalPalette, getRawCategoricalPalette, pickSeriesColor, getExtendedCategoricalPalette } from './utils/colors';

// Strategy toggle + extended palette behaviour

describe('Categorical palette strategy toggle', () => {
  it('raw strategy differs from optimized ordering', () => {
    const raw = getRawCategoricalPalette();
    const opt = getOptimizedCategoricalPalette();
    // Should be same multiset
    expect([...raw].sort()).toEqual([...opt].sort());
    // But ordering should differ (at least one index mismatch)
    const mismatches = raw.filter((c,i)=> c !== opt[i]).length;
    expect(mismatches).toBeGreaterThan(0);
  });

  it('setCategoricalColorStrategy("raw") exposes raw ordering for first N picks', () => {
    setCategoricalColorStrategy('raw');
    const raw = getRawCategoricalPalette();
    const picked = raw.map((_,i)=> pickSeriesColor(i));
    expect(picked.slice(0, raw.length)).toEqual(raw);
  });

  it('extended palette adds lightness variants beyond base length', () => {
    setCategoricalColorStrategy('optimized');
    const base = getOptimizedCategoricalPalette();
    const extended = getExtendedCategoricalPalette();
    expect(extended.length).toBeGreaterThan(base.length);
    // First segment equals base
    expect(extended.slice(0, base.length)).toEqual(base);
  });
});
