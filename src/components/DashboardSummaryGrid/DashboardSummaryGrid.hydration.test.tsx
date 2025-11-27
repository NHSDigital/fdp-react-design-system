import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { DashboardSummaryGrid } from './DashboardSummaryGrid';

const cards: [
  { title: string; value: string; },
  { title: string; value: string; variant: 'success'; },
  { title: string; value: string; variant: 'warning'; },
  { title: string; value: string; variant: 'error'; },
] = [
  { title: 'Total Patients', value: '1,234' },
  { title: 'New Admissions', value: '56', variant: 'success' },
  { title: 'Pending Tests', value: '23', variant: 'warning' },
  { title: 'Critical Cases', value: '3', variant: 'error' },
];

describe('DashboardSummaryGrid (hydration)', () => {
  it('hydrates without mismatches', () => {
    const ssr = <DashboardSummaryGrid cards={cards} />;
    hydrateWithoutMismatch({ ssr, client: ssr });
  });
});
