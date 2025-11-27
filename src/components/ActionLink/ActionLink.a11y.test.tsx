import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { ActionLink } from './ActionLink';

// Basic a11y coverage for ActionLink including new-window variant

describe('ActionLink (a11y)', () => {
  it('no axe violations (basic)', async () => {
    const { container } = render(<ActionLink text="Do something" href="/do" />);
    await expectAccessible(container);
  });

  it('no axe violations (opens in new window)', async () => {
    const { container } = render(<ActionLink text="External" href="https://example.com" openInNewWindow />);
    await expectAccessible(container);
  });
});
