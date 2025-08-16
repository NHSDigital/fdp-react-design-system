import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Tag } from './Tag';

describe('Tag (hydration)', () => {
  it('hydrates basic tag', () => {
    const jsx = <Tag text="Hydrate" color="blue" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });

  it('hydrates closable tag', () => {
    const jsx = <Tag text="Closable" closable />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
});
