import { describe, it } from 'vitest';
import React from 'react';
import { ErrorSummary } from './ErrorSummary';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('ErrorSummary (hydration)', () => {
  it('hydrates without mismatch', () => {
    const ui = <ErrorSummary errorList={[{ text: 'Enter your name', href: '#name' }]} />;
    hydrateWithoutMismatch({ ssr: ui, client: ui });
  });
});
