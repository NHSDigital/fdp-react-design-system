import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Details } from './Details';
import { expectAccessible } from '../../test-utils/accessibility';

describe('Details (a11y)', () => {
  it('no axe violations (closed)', async () => {
    const { container } = render(<Details summaryText="More info" text="Hidden content" />);
    await expectAccessible(container);
  });

  it('no axe violations (open)', async () => {
    const { container } = render(<Details summaryText="More info" open>Visible content</Details>);
    await expectAccessible(container);
  });
});
