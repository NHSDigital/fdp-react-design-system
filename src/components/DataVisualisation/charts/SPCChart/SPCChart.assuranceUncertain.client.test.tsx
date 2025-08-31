import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SPCChart, ImprovementDirection, type SPCDatum } from './SPCChart';

function makeAroundTarget(len=18): { data: SPCDatum[]; targets: number[] } {
  const data: SPCDatum[] = [];
  const targets: number[] = [];
  for (let i=0;i<len;i++) {
    const y = 40 + Math.sin(i/2)*2 + (Math.random()-0.5)*1.5; // ~40 +/- small
    data.push({ x: i+1, y });
    targets.push(40); // target at mean so band overlaps -> uncertain (assurance None)
  }
  return { data, targets };
}

describe('SPCChart assurance uncertain (no embedded assurance icon)', () => {
  it('does not render assurance icon when process band overlaps target', () => {
    const { data, targets } = makeAroundTarget();
    const { container } = render(<SPCChart data={data} targets={targets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon />);
    const assurance = container.querySelector('.fdp-spc-chart__embedded-assurance-icon');
    expect(assurance).toBeNull();
  });
});
