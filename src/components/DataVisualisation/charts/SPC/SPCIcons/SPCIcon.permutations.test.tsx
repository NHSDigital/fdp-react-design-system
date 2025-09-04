import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SpcVariationIcon } from './SPCIcon';
import { VariationJudgement, MetricPolarity, Direction } from './SPCConstants';

// Utility to extract letters H/L from rendered SVG
function extractLetters(container: HTMLElement) {
  const texts = Array.from(container.querySelectorAll('text')).map(t => t.textContent || '');
  return texts.join('');
}

type Expectation = {
  judgement: VariationJudgement;
  polarity: MetricPolarity;
  expectedPolarityMode: '' | 'H' | 'L';
  expectedDirectionMode: '' | 'H' | 'L';
};

const improving: Expectation[] = [
  { judgement: VariationJudgement.Improving, polarity: MetricPolarity.HigherIsBetter, expectedPolarityMode: 'H', expectedDirectionMode: 'H' },
  { judgement: VariationJudgement.Improving, polarity: MetricPolarity.LowerIsBetter, expectedPolarityMode: 'L', expectedDirectionMode: 'L' },
  { judgement: VariationJudgement.Improving, polarity: MetricPolarity.ContextDependent, expectedPolarityMode: '', expectedDirectionMode: 'H' },
];

const deteriorating: Expectation[] = [
  { judgement: VariationJudgement.Deteriorating, polarity: MetricPolarity.HigherIsBetter, expectedPolarityMode: 'H', expectedDirectionMode: 'L' },
  { judgement: VariationJudgement.Deteriorating, polarity: MetricPolarity.LowerIsBetter, expectedPolarityMode: 'L', expectedDirectionMode: 'H' },
  { judgement: VariationJudgement.Deteriorating, polarity: MetricPolarity.ContextDependent, expectedPolarityMode: '', expectedDirectionMode: 'L' },
];

const neutralJudgements = [VariationJudgement.No_Judgement, VariationJudgement.None] as const;

const variants: Array<'classic' | 'triangle' | 'triangleWithRun'> = ['classic', 'triangle', 'triangleWithRun'];

describe('SpcVariationIcon permutations', () => {
  afterEach(() => cleanup());

  variants.forEach(variant => {
    describe(`${variant} variant`, () => {
      [...improving, ...deteriorating].forEach(exp => {
        it(`${exp.judgement} / ${exp.polarity} polarity-mode`, () => {
          const { container } = render(
            <SpcVariationIcon
              data={{ judgement: exp.judgement, polarity: exp.polarity }}
              variant={variant}
              runLength={variant === 'triangleWithRun' ? 3 : undefined}
            />
          );
          const letters = extractLetters(container);
          if (exp.expectedPolarityMode) {
            expect(letters).toContain(exp.expectedPolarityMode);
          } else {
            expect(letters).not.toMatch(/[HL]/);
          }
        });

        it(`${exp.judgement} / ${exp.polarity} direction-mode`, () => {
          const { container } = render(
            <SpcVariationIcon
              data={{ judgement: exp.judgement, polarity: exp.polarity }}
              variant={variant}
              letterMode="direction"
              runLength={variant === 'triangleWithRun' ? 3 : undefined}
            />
          );
          const letters = extractLetters(container);
          if (exp.expectedDirectionMode) {
            expect(letters).toContain(exp.expectedDirectionMode);
          } else {
            expect(letters).not.toMatch(/[HL]/);
          }
        });
      });

      neutralJudgements.forEach(j => {
        (['higher', 'lower'] as const).forEach(dirKey => {
          const trend = dirKey === 'higher' ? Direction.Higher : Direction.Lower;
          it(`${j} (${dirKey}) has no letter (polarity mode)`, () => {
            const { container } = render(
              <SpcVariationIcon
                data={{ judgement: j, polarity: MetricPolarity.HigherIsBetter, trend }}
                variant={variant}
                runLength={variant === 'triangleWithRun' ? 2 : undefined}
              />
            );
            const letters = extractLetters(container);
            expect(letters).not.toMatch(/[HL]/);
          });
          it(`${j} (${dirKey}) has no letter (direction mode)`, () => {
            const { container } = render(
              <SpcVariationIcon
                data={{ judgement: j, polarity: MetricPolarity.LowerIsBetter, trend }}
                variant={variant}
                letterMode="direction"
                runLength={variant === 'triangleWithRun' ? 2 : undefined}
              />
            );
            const letters = extractLetters(container);
            expect(letters).not.toMatch(/[HL]/);
          });
        });
      });

      it('letterOverride forces value even when polarity would suppress', () => {
        const { container } = render(
          <SpcVariationIcon
            data={{ judgement: VariationJudgement.Improving, polarity: MetricPolarity.ContextDependent }}
            variant={variant}
            letterOverride="H"
            runLength={variant === 'triangleWithRun' ? 3 : undefined}
          />
        );
        const letters = extractLetters(container);
        expect(letters).toContain('H');
      });
    });
  });
});
