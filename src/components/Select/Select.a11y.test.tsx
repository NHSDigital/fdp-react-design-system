import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { Select } from './Select';

describe('Select (a11y)', () => {
  it('no axe violations (basic)', async () => {
  const { container } = render(<Select id="country" name="country" ariaLabel="Select country" options={[{ value: 'uk', text: 'United Kingdom' }, { value: 'ie', text: 'Ireland' }]} />);
    await expectAccessible(container);
    screen.getByRole('combobox');
  });

  it('no axe violations (with required + defaultValue)', async () => {
  const { container } = render(<Select id="mode" name="mode" ariaLabel="Select mode" options={[{ value: 'a', text: 'A' }]} required defaultValue="a" />);
    await expectAccessible(container);
  });
});
