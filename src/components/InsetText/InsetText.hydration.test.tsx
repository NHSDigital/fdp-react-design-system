import { describe, it, expect } from 'vitest';
import { InsetText } from './InsetText';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

// Hydration tests

describe('InsetText (hydration)', () => {
  it('hydrates simple text variant', () => {
    const jsx = <InsetText text="Hydrate me" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('.nhsuk-inset-text')?.textContent).toBe('Hydrate me');
    }});
  });

  it('hydrates HTML variant', () => {
    const jsx = <InsetText html="<p>Hydrate <strong>HTML</strong></p>" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('strong')?.textContent).toBe('HTML');
    }});
  });
});
