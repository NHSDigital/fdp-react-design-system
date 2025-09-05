import { describe, it, expect } from 'vitest';
import React from 'react';
// Adjusted relative path (one level too shallow previously) to locate shared test SSR renderer
import { renderSSR } from '../../../../../test-utils/renderSSR';
import { SPCChart } from './SPCChart';
import { ImprovementDirection, VariationIcon as EngineVariationIcon } from './logic/spc';
import { SPCVariationIcon } from '../SPCIcons/SPCIcon';
import { Direction } from '../SPCIcons/SPCConstants';

type SPCDatum = { x: Date | string | number; y: number };

const makeBase = (len = 18, base = 50): SPCDatum[] => {
  const start = Date.now() - (len - 1) * 24 * 3600 * 1000;
  return Array.from({ length: len }, (_, i) => ({ x: new Date(start + i * 24 * 3600 * 1000), y: base + Math.round(Math.sin(i / 3) * 2) }));
};

describe('SPC embedded icon rendering (deterministic unit)', () => {
  it('renders Improvement (H) with blue colour', () => {
    const { container } = renderSSR(
      <div>
  <SPCVariationIcon data={{ variationIcon: EngineVariationIcon.Improvement, trend: Direction.Higher }} size={80} letterMode="direction" />
      </div>
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    const ring = svg!.querySelector('circle[stroke]:not([stroke="none"])');
    expect(ring).toBeTruthy();
    expect(ring!.getAttribute('stroke')).toBe('#00B0F0');
    expect(svg!.textContent).toContain('H');
  });

  it('renders Concern (L) with orange colour', () => {
    const { container } = renderSSR(
      <div>
  <SPCVariationIcon data={{ variationIcon: EngineVariationIcon.Concern, trend: Direction.Lower }} size={80} letterMode="direction" />
      </div>
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    const ring = svg!.querySelector('circle[stroke]:not([stroke="none"])');
    expect(ring).toBeTruthy();
    expect(ring!.getAttribute('stroke')).toBe('#E46C0A');
    expect(svg!.textContent).toContain('L');
  });

  it('renders No-judgement (purple) when signals conflict', () => {
    const { container } = renderSSR(
      <div>
        <SPCVariationIcon data={{ variationIcon: EngineVariationIcon.None, trend: Direction.Lower }} size={80} />
      </div>
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    const path = svg!.querySelector('path[fill]');
    expect(path).toBeTruthy();
    expect(path!.getAttribute('fill')).toBe('#490092');
    const txt = svg!.textContent || '';
    expect(txt).not.toContain('H');
    expect(txt).not.toContain('L');
  });

  it('renders Common cause (grey) with no letter', () => {
    const { container } = renderSSR(
      <div>
        <SPCVariationIcon data={{ variationIcon: EngineVariationIcon.Neither, trend: Direction.Higher }} size={80} />
      </div>
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    const ring = svg!.querySelector('circle[stroke]:not([stroke="none"])');
    expect(ring).toBeTruthy();
    expect(ring!.getAttribute('stroke')).toBe('#A6A6A6');
    const txt = svg!.textContent || '';
    expect(txt).not.toContain('H');
    expect(txt).not.toContain('L');
  });
});
