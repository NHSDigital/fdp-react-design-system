import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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

describe('DashboardSummaryGrid (client)', () => {
  it('renders variants', () => {
  render(<DashboardSummaryGrid cards={cards} />);
    expect(screen.getByText('New Admissions').closest('.nhs-fdp-summary-card')?.className).toContain('success');
  });
  it('adds custom class', () => {
  render(<DashboardSummaryGrid cards={cards} className="extra" data-testid="grid" />);
    expect(screen.getByTestId('grid').className).toContain('extra');
  });
});
