import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Header } from './Header';

describe('Header (hydration)', () => {
  it('hydrates header with navigation + search + account', () => {
    const jsx = (
      <Header
        service={{ text: 'NHS App', href: '/app' }}
        navigation={{ items: [ { text: 'Home', href: '/' } ] }}
        search={{ action: '/search', placeholder: 'Search' }}
        account={{ ariaLabel: 'User account', items: [ { text: 'Profile', href: '/profile' } ] }}
      />
    );
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
});
