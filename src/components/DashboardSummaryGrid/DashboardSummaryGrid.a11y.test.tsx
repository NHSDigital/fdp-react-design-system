import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { DashboardSummaryGrid } from './DashboardSummaryGrid';

describe('DashboardSummaryGrid (a11y)', () => {
  // Cast as const to satisfy fixed-length tuple typing
  const cardsTuple = [
    { title: 'Patients', value: '1,247' },
    { title: 'Appointments', value: '89' },
    { title: 'Prescriptions', value: '342' },
    { title: 'Staff on duty', value: '156' },
  ] as const;
  const cards: [any, any, any, any] = [...cardsTuple];

  it('no axe violations (4 summary cards)', async () => {
  const { container } = render(<DashboardSummaryGrid cards={cards} />);
    await expectAccessible(container);
  });
});
