import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { ContentsList } from './ContentsList';

describe('ContentsList (hydration)', () => {
  it('hydrates items with current', () => {
    const jsx = <ContentsList items={[{ text: 'One', href: '#1' }, { text: 'Two', current: true }]} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
});
