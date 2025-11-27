import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Images } from './Images';

describe('Images (hydration)', () => {
  it('hydrates basic image without mismatch', () => {
    const jsx = <Images src="h.jpg" alt="Hydrate" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('img')?.getAttribute('src')).toBe('h.jpg');
    }});
  });
});
