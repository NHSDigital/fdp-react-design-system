import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SPCVariationIcon } from './SPCIcon';
import { LetterMode, SpcEmbeddedIconVariant, SpcLetterGlyph } from '../SPCChart/SPCChart.constants';
import { Direction } from './SPCConstants';
import { VariationIcon } from '../SPCChart/types';
import { ImprovementDirection } from '../engine';

describe('SPCVariationIcon', () => {
  const base = {
    variationIcon: VariationIcon.Improvement,
    trend: Direction.Higher,
    improvementDirection: ImprovementDirection.Up,
  } as const;

  it('renders classic variant with accessible label', () => {
  render(<SPCVariationIcon data={base as any} ariaLabel="Improving" variant={SpcEmbeddedIconVariant.Classic} />);
  const svg = screen.getByRole('img', { name: /Improving/i });
  expect(svg).not.toBeNull();
    expect(svg.querySelectorAll('circle').length).toBeGreaterThan(0);
  });

  it('renders triangle variant', () => {
  render(<SPCVariationIcon data={base as any} ariaLabel="Improving" variant={SpcEmbeddedIconVariant.Triangle} />);
  const svg = screen.getByRole('img', { name: /Improving/i });
  expect(svg).not.toBeNull();
    // ring + interior + maybe others
    expect(svg.querySelectorAll('circle').length).toBeGreaterThan(0);
    expect(svg.innerHTML).toMatch(/polygon/);
  });

  it('renders triangleWithRun variant including run points when runLength provided', () => {
  render(<SPCVariationIcon data={base as any} ariaLabel="Improving" variant={SpcEmbeddedIconVariant.TriangleWithRun} runLength={3} />);
  const svg = screen.getByRole('img', { name: /Improving/i });
  expect(svg).not.toBeNull();
    // run circles (5 potential, some filled)
    const circles = svg.querySelectorAll('circle');
    expect(circles.length).toBeGreaterThan(2); // outer + inner + run points
  });

  it('infers direction from improvementDirection when trend omitted (improving + Down -> L)', () => {
    const payload = { variationIcon: VariationIcon.Improvement, improvementDirection: ImprovementDirection.Down } as const;
  render(<SPCVariationIcon data={payload as any} ariaLabel="Improving" />);
    const text = screen.getByText('L');
    expect(text).not.toBeNull();
  });

  it('letterMode=polarity uses polarity not direction', () => {
    // Deteriorating with improvementDirection Up => inferred direction Lower (so direction letter would be L)
    // polarity derived from improvementDirection Up -> expect H when letterMode=polarity
    const derivePayload = { variationIcon: VariationIcon.Concern, improvementDirection: ImprovementDirection.Up } as const;
  render(<SPCVariationIcon data={derivePayload as any} ariaLabel="Det" letterMode={LetterMode.Polarity} />);
    const text = screen.getByText('H');
    expect(text).not.toBeNull();
  });

  it('letterOverride takes precedence', () => {
    const derivePayload = { variationIcon: VariationIcon.Improvement, improvementDirection: ImprovementDirection.Down } as const; // would normally show L (direction Lower)
  render(<SPCVariationIcon data={derivePayload as any} ariaLabel="Imp" letterOverride={SpcLetterGlyph.H} />);
    const text = screen.getByText('H');
    expect(text).not.toBeNull();
  });

  it('default polarity mapping: deteriorating + HigherIsBetter yields H (polarity-based)', () => {
    const payload = { variationIcon: VariationIcon.Concern, improvementDirection: ImprovementDirection.Up } as const;
  render(<SPCVariationIcon data={payload as any} ariaLabel="Det" />);
    const text = screen.getByText('H');
    expect(text).not.toBeNull();
  });
});
