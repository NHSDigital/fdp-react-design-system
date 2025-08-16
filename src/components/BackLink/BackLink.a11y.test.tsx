import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BackLink } from './BackLink';
import { expectAccessible } from '../../test-utils/accessibility';

describe('BackLink (a11y)', () => {
  it('no axe violations (anchor variant)', async () => {
    const { container } = render(<BackLink href="#prev" text="Back" />);
    await expectAccessible(container);
  });

  it('no axe violations (button variant)', async () => {
    const { container } = render(<BackLink element="button" onClick={() => {}} text="Go back" />);
    await expectAccessible(container);
  });
});
