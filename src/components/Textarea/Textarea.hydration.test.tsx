import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Textarea } from './Textarea';

describe('Textarea (hydration)', () => {
  it('hydrates without mismatch', () => {
    const jsx = <Textarea id="h" name="h" defaultValue="Hello" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      const el = c.querySelector('textarea') as HTMLTextAreaElement | null;
      expect(el?.value).toBe('Hello');
    }});
  });
});
