import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { CareCard } from './CareCard';

describe('CareCard (hydration)', () => {
  it('hydrates non-urgent', () => {
    const jsx = <CareCard type="non-urgent" heading="H" description="D" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
  it('hydrates urgent', () => {
    const ssr = <CareCard type="urgent" heading="U" />;
    const client = <CareCard type="urgent" heading="U" />;
    hydrateWithoutMismatch({ ssr, client });
  });
});
