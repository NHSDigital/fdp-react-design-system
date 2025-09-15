import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SPCChart, ImprovementDirection, type SPCDatum } from '../../SPCChart';

function makeAroundTarget(len=24): { data: SPCDatum[]; targets: number[] } {
  // Deterministic small oscillation around 40 to ensure band straddles target
  const data: SPCDatum[] = [];
  const targets: number[] = [];
  for (let i=0;i<len;i++) {
    const y = 40 + Math.sin(i/3) * 1.8 + (i % 6 === 0 ? 0.2 : 0); // no randomness
    data.push({ x: i+1, y });
    targets.push(40);
  }
  return { data, targets };
}

describe('SPCChart assurance uncertain (embedded assurance placeholder)', () => {
  it('renders assurance placeholder when process band overlaps target (uncertain)', () => {
    const { data, targets } = makeAroundTarget();
    const { container } = render(<SPCChart data={data} targets={targets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon />);
    const assurance = container.querySelector('.fdp-spc-chart__embedded-assurance-icon');
    expect(assurance).not.toBeNull();
    expect(assurance!.getAttribute('data-assurance')).toBe('none');
  });
});
