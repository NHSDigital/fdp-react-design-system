import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Select } from './Select';

describe('Select (hydration)', () => {
  it('hydrates basic options variant', () => {
    const jsx = <Select id="h" name="h" options={[{ value: '', text: 'Choose' }, { value: 'a', text: 'A' }]} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });

  it('hydrates children option pattern', () => {
    const jsx = <Select id="h2" name="h2"><Select.Option value="x">X</Select.Option></Select>;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
});
