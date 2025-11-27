import { describe, it, expect } from 'vitest';
import { Label } from './Label';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('Label (hydration)', () => {
  it('hydrates without mismatch for page heading variant', () => {
    const jsx = <Label htmlFor="x" isPageHeading size="m">Hydrate</Label>;
    hydrateWithoutMismatch({
      ssr: jsx,
      client: jsx,
      assert: (container) => {
        expect(container.querySelector('h1')).toBeTruthy();
      },
    });
  });
});
