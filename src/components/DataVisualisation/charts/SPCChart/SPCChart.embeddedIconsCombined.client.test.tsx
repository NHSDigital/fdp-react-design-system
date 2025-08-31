import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SPCChart, ImprovementDirection, type SPCDatum } from './SPCChart';

// Build dataset >= minimum points with stable high values to force Pass (band above target)
function makePassData(): { data: SPCDatum[]; targets: number[] } {
  const len = 16;
  const data: SPCDatum[] = [];
  const targets: number[] = [];
  for (let i = 0; i < len; i++) {
    const y = 100 + Math.sin(i / 2) * 2; // around 100
    data.push({ x: i + 1, y });
    targets.push(80); // target well below process
  }
  return { data, targets };
}

describe('SPCChart embedded variation + assurance icons', () => {
  it('renders both variation and assurance (pass) icons when assurance criteria met', () => {
    const { data, targets } = makePassData();
    const { container } = render(<SPCChart data={data} targets={targets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon />);
    const wrapper = container.querySelector('.fdp-spc-chart__top-row');
    expect(wrapper).toBeTruthy();
    const variation = wrapper!.querySelector('.fdp-spc-chart__embedded-icon');
    const assurance = wrapper!.querySelector('.fdp-spc-chart__embedded-assurance-icon[data-assurance="pass"]');
    expect(variation).toBeTruthy();
    expect(assurance).toBeTruthy();
  });

  it('omits assurance icon when no targets provided', () => {
    const { data } = makePassData();
    const { container } = render(<SPCChart data={data} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon />);
    const assurance = container.querySelector('.fdp-spc-chart__embedded-assurance-icon');
    expect(assurance).toBeNull();
  });
});
