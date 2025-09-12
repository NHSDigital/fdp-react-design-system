import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { SPCVariationIcon } from './SPCIcon';
import { Direction } from './SPCConstants';
import { VariationIcon, ImprovementDirection } from '../SPCChart/logic/spcConstants';

// Utility to extract letters H/L from rendered SVG
function extractLetters(container: HTMLElement) {
  const texts = Array.from(container.querySelectorAll('text')).map(t => t.textContent || '');
  return texts.join('');
}

type Expectation = {
  icon: VariationIcon;
  improvement: ImprovementDirection;
  expectedPolarityMode: '' | 'H' | 'L';
  expectedDirectionMode: '' | 'H' | 'L';
};

const improving: Expectation[] = [
  { icon: VariationIcon.Improvement, improvement: ImprovementDirection.Up, expectedPolarityMode: 'H', expectedDirectionMode: 'H' },
  { icon: VariationIcon.Improvement, improvement: ImprovementDirection.Down, expectedPolarityMode: 'L', expectedDirectionMode: 'L' },
  { icon: VariationIcon.Improvement, improvement: ImprovementDirection.Neither, expectedPolarityMode: '', expectedDirectionMode: 'H' },
];

const deteriorating: Expectation[] = [
  { icon: VariationIcon.Concern, improvement: ImprovementDirection.Up, expectedPolarityMode: 'H', expectedDirectionMode: 'L' },
  { icon: VariationIcon.Concern, improvement: ImprovementDirection.Down, expectedPolarityMode: 'L', expectedDirectionMode: 'H' },
  { icon: VariationIcon.Concern, improvement: ImprovementDirection.Neither, expectedPolarityMode: '', expectedDirectionMode: 'L' },
];

const neutralIcons = [VariationIcon.Neither] as const;

const variants: Array<'classic' | 'triangle' | 'triangleWithRun'> = ['classic', 'triangle', 'triangleWithRun'];

describe('SPCVariationIcon permutations', () => {
  afterEach(() => cleanup());

  variants.forEach(variant => {
    describe(`${variant} variant`, () => {
      [...improving, ...deteriorating].forEach(exp => {
        it(`${exp.icon} / ${exp.improvement} polarity-mode`, () => {
          const { container } = render(
            <SPCVariationIcon
      data={{ variationIcon: exp.icon, improvementDirection: exp.improvement }}
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

        it(`${exp.icon} / ${exp.improvement} direction-mode`, () => {
          const { container } = render(
            <SPCVariationIcon
      data={{ variationIcon: exp.icon, improvementDirection: exp.improvement }}
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

  neutralIcons.forEach(() => {
    (['higher', 'lower'] as const).forEach(dirKey => {
      const trend = dirKey === 'higher' ? Direction.Higher : Direction.Lower;
      it(`neutral (${dirKey}) has no letter (polarity mode)`, () => {
            const { container } = render(
              <SPCVariationIcon
        data={{ variationIcon: VariationIcon.Neither, trend }}
                variant={variant}
                runLength={variant === 'triangleWithRun' ? 2 : undefined}
              />
            );
            const letters = extractLetters(container);
            expect(letters).not.toMatch(/[HL]/);
          });
      it(`neutral (${dirKey}) has no letter (direction mode)`, () => {
            const { container } = render(
              <SPCVariationIcon
        data={{ variationIcon: VariationIcon.Neither, trend }}
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
          <SPCVariationIcon
    data={{ variationIcon: VariationIcon.Improvement, improvementDirection: ImprovementDirection.Neither }}
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
