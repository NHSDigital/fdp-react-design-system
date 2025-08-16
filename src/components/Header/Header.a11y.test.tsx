import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { Header } from './Header';

describe('Header (a11y)', () => {
  it('no axe violations (service only)', async () => {
    const { container } = render(<Header service={{ text: 'NHS App', href: '/app' }} />);
    await expectAccessible(container);
  });

  it('no axe violations (with navigation + search + account)', async () => {
    const { container } = render(
      <Header
        service={{ text: 'NHS App', href: '/app' }}
        navigation={{ items: [ { text: 'Home', href: '/' }, { text: 'About', href: '/about' } ] }}
        search={{ action: '/search' }}
        account={{ ariaLabel: 'User account', items: [ { text: 'Profile', href: '/profile' } ] }}
      />
    );
    await expectAccessible(container);
  });
});
