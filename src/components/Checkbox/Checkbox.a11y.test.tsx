import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { Checkbox } from './Checkbox';

// Basic a11y coverage for standalone Checkbox

describe('Checkbox (a11y)', () => {
  it('no axe violations (basic)', async () => {
    const { container } = render(<Checkbox id="agree" name="agree" value="yes">I agree</Checkbox>);
    await expectAccessible(container);
  });

  it('no axe violations (checked + disabled)', async () => {
    const { container } = render(<Checkbox id="agree-disabled" name="agree-disabled" value="yes" defaultChecked disabled>I agree</Checkbox>);
    await expectAccessible(container);
  });
});
