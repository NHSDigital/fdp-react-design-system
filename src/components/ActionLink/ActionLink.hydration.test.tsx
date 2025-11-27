import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { ActionLink } from './ActionLink';

describe('ActionLink (hydration)', () => {
  it('hydrates basic link', () => {
    const jsx = <ActionLink text="Go" href="/go" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
});
