import { describe, it } from 'vitest';
import React from 'react';
import { Hint } from './Hint';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('Hint (hydration)', () => {
  it('hydrates without mismatch', () => {
    const ui = <Hint id="hydr">Hydration hint</Hint>;
    hydrateWithoutMismatch({ ssr: ui, client: ui });
  });
});
