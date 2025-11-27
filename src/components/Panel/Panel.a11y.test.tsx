import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Panel } from './Panel';
import { expectAccessible } from '../../test-utils/accessibility';

describe('Panel (a11y)', () => {
  it('no axe violations (heading + body)', async () => {
    const { container } = render(<Panel headingText="Summary" bodyText="Panel content" />);
    await expectAccessible(container);
  });

  it('no axe violations (custom children)', async () => {
    const { container } = render(
      <Panel headingText="Custom">
        <p><strong>Custom</strong> child content</p>
      </Panel>
    );
    await expectAccessible(container);
  });
});
