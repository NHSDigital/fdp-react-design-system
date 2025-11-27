import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Radios } from './Radios';

describe('Radios (hydration)', () => {
  it('hydrates basic radios', () => {
    const jsx = <Radios name="h" options={[{ value: 'x', text: 'X' }, { value: 'y', text: 'Y' }]} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });

  it('hydrates with conditional content', () => {
    const jsx = <Radios name="h2" options={[{ value: 'a', text: 'A', conditional: 'Cond A' }, { value: 'b', text: 'B' }]} value="a" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
});
