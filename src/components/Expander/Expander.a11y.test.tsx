import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Expander } from './Expander';
import { expectAccessible } from '../../test-utils/accessibility';

describe('Expander (a11y)', () => {
  it('no axe violations (closed)', async () => {
    const { container } = render(<Expander summaryText="More details" text="Hidden details" />);
    await expectAccessible(container);
  });

  it('no axe violations (open)', async () => {
    const { container } = render(<Expander summaryText="More details" open>Visible details</Expander>);
    await expectAccessible(container);
  });
});
