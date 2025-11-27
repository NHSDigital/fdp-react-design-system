import { describe, it } from 'vitest';
import React from 'react';
import { Heading } from './Heading';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('Heading (hydration)', () => {
  it('hydrates without mismatch', () => {
    const ui = <Heading size="l" text="Hydrate" />;
    hydrateWithoutMismatch({ ssr: ui, client: ui });
  });
});
