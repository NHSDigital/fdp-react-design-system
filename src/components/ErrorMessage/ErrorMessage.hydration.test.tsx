import { describe, it } from 'vitest';
import React from 'react';
import { ErrorMessage } from './ErrorMessage';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('ErrorMessage (hydration)', () => {
  it('hydrates without mismatch', () => {
    const ui = <ErrorMessage id="hydr">Hydration check</ErrorMessage>;
    hydrateWithoutMismatch({ ssr: ui, client: ui });
  });
});
