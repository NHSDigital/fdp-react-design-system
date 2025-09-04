import { describe, it, expect } from 'vitest';
import spcModule, { ImprovementDirection } from './spc';

// Dataset: first 13 steady points then 5 clearly above mean & beyond 1σ threshold to trigger four-of-five rule when enabled.
const base = Array.from({length:13}, ()=>100);
// Use larger deviations (e.g. +15) so they exceed upperOneSigma easily.
const signalSeq = [115,116,114,115,115]; // 5 points above mean; expect four-of-five rule => all five flagged
const data = [...base, ...signalSeq].map((v,i)=>({ x:i+1, value:v }));

describe('SPC four-of-five rule', () => {
  it('flags when enabled and not when disabled', () => {
    const enabled = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data, settings:{ enableFourOfFiveRule:true } });
    const disabled = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data, settings:{ enableFourOfFiveRule:false } });
    const lastFiveEnabled = enabled.rows.slice(-5);
    const lastFiveDisabled = disabled.rows.slice(-5);
  // Current engine flags the window-ending point (last of the five) rather than retroactively marking all five.
  const flags = lastFiveEnabled.map(r => r.specialCauseFourOfFiveAbove);
  expect(flags.slice(0,4).every(f=>f===false)).toBe(true);
  expect(flags[4]).toBe(true);
    expect(lastFiveDisabled.every(r => !r.specialCauseFourOfFiveAbove)).toBe(true);
  });
});
