import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { DashboardSummaryGrid } from './DashboardSummaryGrid';

const cards = [
  { title: 'Total Patients', value: '1,234' },
  { title: 'New Admissions', value: '56', variant: 'success' },
  { title: 'Pending Tests', value: '23', variant: 'warning' },
  { title: 'Critical Cases', value: '3', variant: 'error' },
] as const;

describe('DashboardSummaryGrid (SSR)', () => {
  it('renders 4 cards', () => {
    const { getByText } = renderSSR(<DashboardSummaryGrid cards={[...cards]} />);
    expect(getByText('Total Patients')).toBeTruthy();
    expect(getByText('Critical Cases')).toBeTruthy();
  });
  it('applies base class and custom class', () => {
    const { container } = renderSSR(<DashboardSummaryGrid cards={[...cards]} className="extra" />);
    const root = container.querySelector('.nhs-fdp-dashboard-summary-grid');
    expect(root?.className).toContain('extra');
  });
});
