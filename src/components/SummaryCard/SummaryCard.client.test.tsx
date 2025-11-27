import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SummaryCard } from './SummaryCard';

describe('SummaryCard (client)', () => {
  it('applies variant classes', () => {
    render(<SummaryCard title="A" value="1" variant="success" data-testid="c" />);
    expect(screen.getByTestId('c')).toHaveClass('nhs-fdp-summary-card--success');
  });

  it('renders as link when href provided', () => {
    render(<SummaryCard title="X" value="2" href="/x" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/x');
    expect(link).toHaveClass('nhs-fdp-summary-card--clickable');
  });

  it('passes through aria-label', () => {
    render(<SummaryCard title="T" value="3" ariaLabel="Metric" />);
    expect(screen.getByLabelText('Metric')).toBeInTheDocument();
  });
});
