import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { ContentsList } from './ContentsList';

describe('ContentsList (a11y)', () => {
  const items = [
    { text: 'Introduction', href: '#intro' },
    { text: 'Getting started', href: '#start', current: true },
    { text: 'Next steps', href: '#next' }
  ];

  it('no axe violations (basic with current item)', async () => {
    const { container } = render(<ContentsList items={items} />);
    await expectAccessible(container);
  });
});
