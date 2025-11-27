import { describe, it } from 'vitest';
import React from 'react';
import { DoDontList } from './DoDontList';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('DoDontList (hydration)', () => {
  it('hydrates without markup mismatch', () => {
    const ui = <DoDontList title="Do" type="tick" items={[{ item: 'wash your hands regularly' }]} />;
    hydrateWithoutMismatch({ ssr: ui, client: ui });
  });
});
