import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { InsetText } from './InsetText';
import { expectAccessible } from '../../test-utils/accessibility';

describe('InsetText (a11y)', () => {
  it('no axe violations (text)', async () => {
    const { container } = render(<InsetText text="Helpful guidance." />);
    await expectAccessible(container);
  });

  it('no axe violations (children)', async () => {
    const { container } = render(<InsetText><p>Child paragraph</p></InsetText>);
    await expectAccessible(container);
  });
});
