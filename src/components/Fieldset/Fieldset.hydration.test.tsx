import { describe, it } from 'vitest';
import React from 'react';
import { Fieldset } from './Fieldset';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('Fieldset (hydration)', () => {
  it('hydrates without mismatch', () => {
    const ui = <Fieldset legend={{ text: 'Hydration legend' }}><div>Content</div></Fieldset>;
    hydrateWithoutMismatch({ ssr: ui, client: ui });
  });
});
