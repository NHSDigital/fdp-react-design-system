import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination (client)', () => {
  it('shows both links when both sets of props present', () => {
    render(<Pagination previousUrl="/a" previousPage="Prev" nextUrl="/b" nextPage="Next" />);
    expect(screen.getByRole('link', { name: /Prev/ })).toHaveAttribute('href', '/a');
    expect(screen.getByRole('link', { name: /Next/ })).toHaveAttribute('href', '/b');
  });

  it('omits links if missing page text', () => {
    render(<Pagination previousUrl="/a" nextUrl="/b" />);
    expect(screen.queryByText('Previous')).toBeNull();
    expect(screen.queryByText('Next')).toBeNull();
  });

  it('applies custom classes & extra attributes', () => {
    const { container } = render(<Pagination classes="extra" previousUrl="/a" previousPage="Prev" attributes={{ 'data-testid': 'pg' }} />);
    const nav = screen.getByTestId('pg');
    expect(nav).toHaveClass('extra');
    expect(container.querySelectorAll('svg').length).toBeGreaterThan(0);
  });
});
