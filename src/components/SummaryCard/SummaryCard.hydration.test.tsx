import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { SummaryCard } from './SummaryCard';

describe('SummaryCard (hydration)', () => {
  it('hydrates static content', () => {
    const jsx = <SummaryCard title="Total" value="42" subtitle="Last 30 days" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('.nhs-fdp-summary-card__title')?.textContent).toContain('Total');
    }});
  });
});
