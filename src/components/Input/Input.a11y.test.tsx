import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { Input } from './Input';

// Basic a11y coverage for Input including text and range variants

describe('Input (a11y)', () => {
  it('no axe violations (text)', async () => {
    const { container } = render(<Input id="name" name="name" placeholder="Your name" />);
    await expectAccessible(container);
  });

  it('no axe violations (text with error)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="email">Email</label>
        <Input id="email" name="email" hasError aria-describedby="email-error" />
        <span id="email-error">Enter a valid email</span>
      </div>
    );
    await expectAccessible(container);
  });

  it('no axe violations (range slider with labels)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="score">Score</label>
        <Input id="score" name="score" type="range" min="0" max="10" defaultValue="5" showValueLabels showCurrentValue valueLabels={{ current: 'Score:' }} />
      </div>
    );
    await expectAccessible(container);
  });
});
