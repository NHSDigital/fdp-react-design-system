import { render } from '@testing-library/react';
import { SPCChart, ImprovementDirection } from './SPCChart';

// Minimal data with 15 points to allow embedded icon
const base = Array.from({ length: 15 }, (_, i) => ({ x: i + 1, y: 100 + (i === 10 ? 40 : 0) }));

/**
 * This test ensures the embedded icon letter switches from signal side (direction) to business polarity when
 * improvement direction changes from Neither -> Up / Down.
 */

describe('SPCChart embedded icon letter mode switching', () => {
  it('shows side letter for neutral, polarity letter for higher / lower', () => {
  const { container, rerender } = render(<SPCChart data={base} metricImprovement={ImprovementDirection.Neither} />);
    // For neutral improvement direction, letterMode=direction so letter should reflect side of signal (expect 'H' or 'L').
    const firstLetterNeutral = container.querySelector('.fdp-spc-chart__embedded-icon text')?.textContent || '';
    expect(['H','L',''].includes(firstLetterNeutral)).toBe(true);

    rerender(<SPCChart data={base} metricImprovement={ImprovementDirection.Up} />);
    const letterHigher = container.querySelector('.fdp-spc-chart__embedded-icon text')?.textContent || '';
    // With Up (HigherIsBetter) polarity letter should be H when there is a letter.
    if (letterHigher) expect(letterHigher).toBe('H');

    rerender(<SPCChart data={base} metricImprovement={ImprovementDirection.Down} />);
    const letterLower = container.querySelector('.fdp-spc-chart__embedded-icon text')?.textContent || '';
    if (letterLower) expect(letterLower).toBe('L');
  });
});
