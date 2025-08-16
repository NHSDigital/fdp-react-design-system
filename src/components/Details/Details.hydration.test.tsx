import React from 'react';
import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Details } from './Details';

describe('Details (hydration)', () => {
  it('hydrates static closed details without mismatch', () => {
    hydrateWithoutMismatch({
      ssr: <Details summaryText="Summary" text="Content" />,
      client: <Details summaryText="Summary" text="Content" />,
      assert: (c) => expect(c.querySelector('details')).toBeTruthy(),
    });
  });
  it('hydrates open details', () => {
    hydrateWithoutMismatch({
      ssr: <Details summaryText="Summary" text="Content" open />,
      client: <Details summaryText="Summary" text="Content" open />,
      assert: (c) => expect(c.querySelector('details')?.hasAttribute('open')).toBe(true),
    });
  });
});
