import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { BackLink } from './BackLink';

describe('BackLink (hydration)', () => {
  it('hydrates anchor', () => {
    hydrateWithoutMismatch({ ssr: <BackLink href="/p" />, client: <BackLink href="/p" /> });
  });
});
