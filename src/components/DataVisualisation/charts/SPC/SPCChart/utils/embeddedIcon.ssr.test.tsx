import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
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
  return Array.from({ length: len }, (_, i) => ({ ...base, ...(opts || {}) }));
}

describe('buildEmbeddedIcon', () => {
  it('returns null when show=false', () => {
    const out = buildEmbeddedIcon({ show: false, rowsForUi: rows(20), minPoints: 13, metricImprovement: ImprovementDirection.Neither, variant: SpcEmbeddedIconVariant.Triangle, runLength: 13 });
    expect(out).toBeNull();
  });

  it('gates on minimum non-ghost count', () => {
    const r = rows(10); // below 13
    const out = buildEmbeddedIcon({ show: true, rowsForUi: r, minPoints: 13, metricImprovement: ImprovementDirection.Neither, variant: SpcEmbeddedIconVariant.Triangle, runLength: 13 });
    expect(out).toBeNull();
  });

  it('renders with neutral/common-cause when no coloured variation', () => {
    const r = rows(20);
    // last row neutral/common-cause
    r[r.length - 1].classification.variation = VariationIcon.Neither;
    const node = buildEmbeddedIcon({ show: true, rowsForUi: r, minPoints: 13, metricImprovement: ImprovementDirection.Neither, variant: SpcEmbeddedIconVariant.Triangle, runLength: 13 });
    const html = renderToString(<>{node}</>);
    expect(html).toContain('fdp-spc-chart__embedded-icon');
  });

  it('sets direction when neutral special-cause up-side only', () => {
    const r = rows(20);
    const last = r[r.length - 1];
    last.classification.variation = VariationIcon.Neither;
    last.classification.neutralSpecialCauseValue = 1;
    last.rules.singlePoint.up = true;
    const node = buildEmbeddedIcon({ show: true, rowsForUi: r, minPoints: 13, metricImprovement: ImprovementDirection.Up, variant: SpcEmbeddedIconVariant.TriangleWithRun, runLength: 15 });
    const html = renderToString(<>{node}</>);
    expect(html).toContain('fdp-spc-chart__embedded-icon');
  });

  it('includes assurance icon block regardless of pass/fail', () => {
    const r = rows(20);
    const last = r[r.length - 1];
    last.classification.assurance = AssuranceIcon.Pass;
    const node = buildEmbeddedIcon({ show: true, rowsForUi: r, minPoints: 13, metricImprovement: ImprovementDirection.Neither, variant: SpcEmbeddedIconVariant.Triangle, runLength: 13 });
    const html = renderToString(<>{node}</>);
    expect(html).toContain('fdp-spc-chart__embedded-assurance-icon');
  });
});
