import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Account } from './Account';

describe('Account (hydration)', () => {
  it('hydrates basic account nav', () => {
    const jsx = <Account items={[{ text: 'Profile', href: '/p' }]} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
});
