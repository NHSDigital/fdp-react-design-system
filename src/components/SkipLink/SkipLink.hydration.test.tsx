import React from 'react';
import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { SkipLink } from './SkipLink';

describe('SkipLink (hydration)', () => {
  it('hydrates default link without mismatch', () => {
    hydrateWithoutMismatch({
      ssr: <SkipLink />,
      client: <SkipLink />,
    });
  });
  it('hydrates custom props', () => {
    hydrateWithoutMismatch({
      ssr: <SkipLink text="Jump" href="#nav" />,
      client: <SkipLink text="Jump" href="#nav" />,
    });
  });
});
