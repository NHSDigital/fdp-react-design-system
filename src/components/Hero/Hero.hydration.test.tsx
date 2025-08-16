import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Hero } from './Hero';

describe('Hero (hydration)', () => {
  it('hydrates heading + text variant without mismatch', () => {
    const jsx = <Hero heading="Hydrate" text="Example" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('h1')?.textContent).toContain('Hydrate');
    }});
  });
});
