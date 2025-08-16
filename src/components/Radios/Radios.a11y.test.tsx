import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Radios } from './Radios';
import { expectAccessible } from '../../test-utils/accessibility';

// Initial accessibility smoke test for Radios component

describe('Radios (a11y)', () => {
  it('has no basic axe violations (default)', async () => {
    const { container } = render(<Radios name="contact" options={[{ value: 'email', text: 'Email' }, { value: 'phone', text: 'Phone' }]} />);
    await expectAccessible(container);
    expect(container.querySelectorAll('input[type="radio"]').length).toBe(2);
  });

  it('has no axe violations with conditional reveal', async () => {
    const { container } = render(<Radios name="c2" options={[{ value: 'a', text: 'A', conditional: 'Shown A' }, { value: 'b', text: 'B' }]} />);
    await expectAccessible(container);
  });
});
