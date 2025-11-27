import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { Button } from './Button';

// Basic a11y coverage for Button variants & disabled state

describe('Button (a11y)', () => {
  it('no axe violations (primary default)', async () => {
    const { container } = render(<Button>Submit</Button>);
    await expectAccessible(container);
  });

  it('no axe violations (secondary disabled)', async () => {
    const { container } = render(<Button variant="secondary" disabled>Disabled</Button>);
    await expectAccessible(container);
  });

  it('no axe violations (as link)', async () => {
    const { container } = render(<Button href="/example">Go</Button>);
    await expectAccessible(container);
  });
});
