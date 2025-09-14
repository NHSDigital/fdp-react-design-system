import { describe, it, expect } from 'vitest';
import { detectRunRuleEvents } from './runRules';

describe('detectRunRuleEvents', () => {
  it('flags a shift after 6 consecutive points on one side of the median', () => {
    // Construct values with six consecutive points ABOVE the median without equals
    // For 12 points: median is average of 6th and 7th -> (6 + 20) / 2 = 13, so last 6 are > median
    const vals = [1, 2, 3, 4, 5, 6, 20, 21, 22, 23, 24, 25]; // median = 13
    const events = detectRunRuleEvents(vals, { shiftLen: 6 });
    expect(events.some(e => e.type === 'shift')).toBe(true);
  });

  it('flags a strictly increasing trend of length 6', () => {
    const vals = [1, 2, 3, 4, 5, 6];
    const events = detectRunRuleEvents(vals, { trendLen: 6 });
    expect(events.some(e => e.type === 'trendUp')).toBe(true);
  });
});
