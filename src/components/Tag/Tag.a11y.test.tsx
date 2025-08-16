import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { Tag } from './Tag';

describe('Tag (a11y)', () => {
  it('no axe violations basic', async () => {
    const { container } = render(<Tag text="Active" colour="green" />);
    await expectAccessible(container);
  });

  it('no axe violations closable', async () => {
    const { container } = render(<Tag text="Dismiss" onClose={() => {}} />);
    await expectAccessible(container);
  });
});
