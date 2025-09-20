import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { buildEmbeddedIcon } from './embeddedIcon';
import type { EngineRowUI } from '../SPCChart.types';
import { ImprovementDirection, VariationIcon, AssuranceIcon } from '../types';
import { SpcEmbeddedIconVariant } from '../SPCChart.constants';

function rows(len: number, opts?: Partial<EngineRowUI>): EngineRowUI[] {
  const base: EngineRowUI = {
    data: { value: 1, ghost: false },
    partition: { id: 0 },
    limits: {
      mean: 1,
      ucl: 2,
      lcl: 0,
      oneSigma: { upper: 1.33, lower: 0.66 },
      twoSigma: { upper: 1.66, lower: 0.33 },
    },
    rules: {
      singlePoint: { up: false, down: false },
      twoOfThree: { up: false, down: false },
      fourOfFive: { up: false, down: false },
      shift: { up: false, down: false },
      trend: { up: false, down: false },
    },
    classification: {
      variation: VariationIcon.Neither,
      neutralSpecialCauseValue: null,
      assurance: undefined,
    },
    target: null,
  };
  return Array.from({ length: len }, () => ({ ...base, ...(opts || {}) }));
}

describe('buildEmbeddedIcon (client)', () => {
  it('renders embedded icon container when eligible', () => {
    const r = rows(20);
    const node = buildEmbeddedIcon({
      show: true,
      rowsForUi: r,
      minPoints: 13,
      metricImprovement: ImprovementDirection.Neither,
      variant: SpcEmbeddedIconVariant.Triangle,
      runLength: 13,
    });
    render(<div data-testid="root">{node}</div>);
    const icon = screen.getByTestId('root').querySelector('.fdp-spc-chart__embedded-icon');
    expect(icon).toBeTruthy();
  });

  it('includes assurance block with data-assurance attribute', () => {
    const r = rows(20);
    r[r.length - 1].classification.assurance = AssuranceIcon.Fail;
    const node = buildEmbeddedIcon({
      show: true,
      rowsForUi: r,
      minPoints: 13,
      metricImprovement: ImprovementDirection.Neither,
      variant: SpcEmbeddedIconVariant.Triangle,
      runLength: 13,
    });
    render(<div data-testid="root">{node}</div>);
    const el = screen.getByTestId('root').querySelector('.fdp-spc-chart__embedded-assurance-icon');
    expect(el).toBeTruthy();
    expect(el?.getAttribute('data-assurance')).toBe(String(AssuranceIcon.Fail));
  });

  it('sets data-trend to "higher" for neutral special cause up-side only', () => {
    const r = rows(20);
    const last = r[r.length - 1];
    last.classification.variation = VariationIcon.Neither;
    last.classification.neutralSpecialCauseValue = 1;
    last.rules.singlePoint.up = true;
    const node = buildEmbeddedIcon({
      show: true,
      rowsForUi: r,
      minPoints: 13,
      metricImprovement: ImprovementDirection.Up,
      variant: SpcEmbeddedIconVariant.TriangleWithRun,
      runLength: 15,
    });
    render(<div data-testid="root">{node}</div>);
    const el = screen.getByTestId('root').querySelector('.fdp-spc-chart__embedded-icon');
    expect(el?.getAttribute('data-trend')).toBe('higher');
  });

  it('returns null when below min points', () => {
    const r = rows(10);
    const node = buildEmbeddedIcon({
      show: true,
      rowsForUi: r,
      minPoints: 13,
      metricImprovement: ImprovementDirection.Neither,
      variant: SpcEmbeddedIconVariant.Triangle,
      runLength: 13,
    });
    render(<div data-testid="root">{node}</div>);
    const icon = screen.getByTestId('root').querySelector('.fdp-spc-chart__embedded-icon');
    expect(icon).toBeFalsy();
  });
});
