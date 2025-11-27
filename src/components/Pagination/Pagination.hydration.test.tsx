import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Pagination } from './Pagination';

describe('Pagination (hydration)', () => {
  it('hydrates with both links without mismatch', () => {
    const jsx = <Pagination previousUrl="/p1" previousPage="Page 1" nextUrl="/p3" nextPage="Page 3" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      const links = Array.from(c.querySelectorAll('a')).map(a => a.getAttribute('href'));
      expect(links).toContain('/p1');
      expect(links).toContain('/p3');
    }});
  });
});
