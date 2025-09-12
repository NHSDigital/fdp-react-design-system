import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Grid, Column } from './Grid';
import { GridWidth } from './Grid.types';

describe('Grid (hydration)', () => {
  it('hydrates without mismatch', () => {
  const jsx = <Grid><Column width={GridWidth.OneHalf}><div>Hydrate</div></Column><Column width={GridWidth.OneHalf}><div>Me</div></Column></Grid>;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
  const columns = c.querySelectorAll('.nhsuk-grid-column-one-half');
      expect(columns.length).toBe(2);
    }});
  });
});
