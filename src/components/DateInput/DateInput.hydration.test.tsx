import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { DateInput } from './DateInput';

describe('DateInput (hydration)', () => {
  it('hydrates base inputs', () => {
    const jsx = <DateInput id="d7" values={{ day: '15', month: '08', year: '2025' }} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
});
