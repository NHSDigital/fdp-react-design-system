import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SPCChart, ImprovementDirection, type SPCDatum } from '../../SPCChart';

const makeFew = (n = 8): SPCDatum[] => {
  const start = Date.now() - (n - 1) * 86400000;
  return Array.from({ length: n }, (_, i) => ({ x: new Date(start + i * 86400000), y: 50 + Math.sin(i) }));
};

describe('SPCChart embedded icon suppression when too few points', () => {
  it('suppresses embedded icon for Up/Down/Neither when below minimumPoints', () => {
    const data = makeFew();
    const { container, rerender } = render(<SPCChart data={data} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon />);
    expect(container.querySelector('.fdp-spc-chart__embedded-icon')).toBeNull();
    rerender(<SPCChart data={data} metricImprovement={ImprovementDirection.Down} showEmbeddedIcon />);
    expect(container.querySelector('.fdp-spc-chart__embedded-icon')).toBeNull();
    rerender(<SPCChart data={data} metricImprovement={ImprovementDirection.Neither} showEmbeddedIcon />);
    expect(container.querySelector('.fdp-spc-chart__embedded-icon')).toBeNull();
  });

  it('shows embedded icon once minimumPoints threshold reached', () => {
    const data = makeFew(14); // >=13
    const { container } = render(<SPCChart data={data} metricImprovement={ImprovementDirection.Neither} showEmbeddedIcon />);
    expect(container.querySelector('.fdp-spc-chart__embedded-icon')).not.toBeNull();
  });
});
