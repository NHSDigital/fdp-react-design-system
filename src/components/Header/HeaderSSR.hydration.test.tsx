import { describe, it, expect } from 'vitest';
import { HeaderSSR } from './HeaderSSR';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('HeaderSSR Hydration', () => {
  it('hydrates SSR markup without mismatch errors', () => {
    const props = {
      service: { text: 'NHS App', href: '/app' },
      navigation: { items: [{ text: 'Home', href: '/' }] },
      search: { action: '/search', placeholder: 'Search' }
    };
    hydrateWithoutMismatch({
      ssr: <HeaderSSR {...props} />,
      client: <HeaderSSR {...props} />,
      assert: (c) => {
        const header = c.querySelector('header[role="banner"]');
        expect(header).toBeTruthy();
      }
    });
  });
});
