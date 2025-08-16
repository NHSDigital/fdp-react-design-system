import { describe, it, expect } from 'vitest';
import { Input } from './Input';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

// Hydration test: ensure SSR + hydrate does not mismatch for both text and range variants
describe('Input (hydration)', () => {
  it('hydrates text input without mismatch', () => {
    const jsx = <Input id="h1" name="h1" placeholder="Hydrate" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('input[type="text"]')).toBeTruthy();
    }});
  });

  it('hydrates range variant with labels without mismatch', () => {
    const jsx = <Input id="hr" name="hr" type="range" min="0" max="10" defaultValue="5" showValueLabels valueLabels={{ min: 'Low', max: 'High' }} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('input[type="range"]')).toBeTruthy();
      expect(c.textContent).toContain('Low');
      expect(c.textContent).toContain('High');
    }});
  });
});
