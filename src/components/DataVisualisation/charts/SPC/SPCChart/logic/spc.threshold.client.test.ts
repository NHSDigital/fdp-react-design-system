import { describe, it, expect } from 'vitest';
import spcModule, { ImprovementDirection } from './spc';

describe('SPC XmR threshold behaviour', () => {
  it('suppresses limits and icons when <=12 non-ghost points', () => {
    const data = Array.from({length:12}, (_,i)=>({ x:i+1, value: 10 + (i%2) }));
    const { rows } = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data });
    rows.forEach(r => {
      expect(r.mean).toBeNull();
      expect(r.upperProcessLimit).toBeNull();
      expect(r.lowerProcessLimit).toBeNull();
      expect(r.variationIcon === 'none' || r.variationIcon === 'neither').toBe(true);
    });
  });
  it('shows limits and icons when >=13 non-ghost points', () => {
    const data = Array.from({length:13}, (_,i)=>({ x:i+1, value: 10 + (i%3) }));
    const { rows } = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data });
    expect(rows.every(r => r.mean !== null)).toBe(true);
    expect(rows.some(r => r.upperProcessLimit !== null)).toBe(true);
  });
});
