import { describe, it } from 'vitest';
import { Expander } from '../Expander';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('Expander (hydration)', () => {
  it('hydrates closed state without mismatch', () => {
    hydrateWithoutMismatch({
      ssr: <Expander summaryText="Summary" text="Content" />,
      client: <Expander summaryText="Summary" text="Content" />,
    });
  });

  it('hydrates open state without mismatch', () => {
    hydrateWithoutMismatch({
      ssr: <Expander summaryText="Summary" text="Content" open />,
      client: <Expander summaryText="Summary" text="Content" open />,
    });
  });
});
