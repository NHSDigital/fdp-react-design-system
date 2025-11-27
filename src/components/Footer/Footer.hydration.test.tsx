import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

// Hydration: ensure typical variants hydrate cleanly

describe('Footer (hydration)', () => {
  it('hydrates default footer', () => {
    const jsx = <Footer />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('footer')).toBeTruthy();
    }});
  });

  it('hydrates with multi-column layout', () => {
    const jsx = <Footer links={[{ URL: '/a', label: 'A' }]} linksColumn2={[{ URL: '/b', label: 'B' }]} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      const lists = c.querySelectorAll('ul');
      expect(lists.length).toBeGreaterThan(1);
    }});
  });
});
