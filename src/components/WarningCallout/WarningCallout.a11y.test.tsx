import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { WarningCallout } from './WarningCallout';
import { expectAccessible } from '../../test-utils/accessibility';

describe('WarningCallout (a11y)', () => {
  it('no axe violations (basic)', async () => {
    const { container } = render(<WarningCallout heading="Important" text="Something critical." />);
    await expectAccessible(container);
  });

  it('no axe violations (with children)', async () => {
    const { container } = render(
      <WarningCallout heading="Credentials">
        <p>Never share passwords.</p>
      </WarningCallout>
    );
    await expectAccessible(container);
  });
});
