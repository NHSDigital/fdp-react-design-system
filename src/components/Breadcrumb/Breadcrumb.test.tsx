import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbItem } from './Breadcrumb.types';

describe('Breadcrumb', () => {
  const defaultItems: BreadcrumbItem[] = [
    { text: 'Home', href: '/' },
    { text: 'Health A-Z', href: '/conditions' },
    { text: 'Mental health', href: '/mental-health' },
  ];

  it('renders with default props', () => {
    render(<Breadcrumb />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument();
  });

  it('renders breadcrumb items correctly', () => {
    render(<Breadcrumb items={defaultItems} />);
    
    // Use more specific selectors for breadcrumb links
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
    expect(homeLink).toHaveClass('nhsuk-breadcrumb__link');
    
    const healthLink = screen.getByText('Health A-Z').closest('a');
    expect(healthLink).toHaveAttribute('href', '/conditions');
    
    const mentalHealthLink = screen.getAllByText('Mental health')[0].closest('a');
    expect(mentalHealthLink).toHaveAttribute('href', '/mental-health');
  });

  it('renders back link for mobile', () => {
    render(<Breadcrumb items={defaultItems} />);
    
    // Count all Mental health links (one in breadcrumb list, one in back link)
    const mentalHealthLinks = screen.getAllByText('Mental health');
    expect(mentalHealthLinks).toHaveLength(2);
    
    // Check the back link has the visually hidden text
    const backLink = screen.getByText(/Back to/).closest('a');
    expect(backLink).toHaveClass('nhsuk-breadcrumb__backlink');
    expect(screen.getByText('Back to')).toBeInTheDocument();
  });

  it('renders with custom label text', () => {
    render(<Breadcrumb labelText="Custom Navigation" />);
    
    expect(screen.getByLabelText('Custom Navigation')).toBeInTheDocument();
  });

  it('renders with direct href and text', () => {
    render(<Breadcrumb href="/direct-link" text="Direct Page" />);
    
    const directLink = screen.getByText('Direct Page').closest('a');
    expect(directLink).toHaveAttribute('href', '/direct-link');
  });

  it('applies reverse modifier class', () => {
    const { container } = render(<Breadcrumb reverse />);
    
    expect(container.querySelector('.nhsuk-breadcrumb')).toHaveClass('nhsuk-breadcrumb--reverse');
  });

  it('applies custom CSS classes', () => {
    const { container } = render(<Breadcrumb classes="custom-breadcrumb" />);
    
    expect(container.querySelector('.nhsuk-breadcrumb')).toHaveClass('custom-breadcrumb');
  });

  it('passes through additional attributes', () => {
    render(<Breadcrumb attributes={{ 'data-testid': 'custom-breadcrumb' }} />);
    
    expect(screen.getByTestId('custom-breadcrumb')).toBeInTheDocument();
  });

  it('handles items without href (filters them out)', () => {
    const itemsWithoutHref: BreadcrumbItem[] = [
      { text: 'Home', href: '/' },
      { text: 'No Link' }, // No href
      { text: 'Valid Link', href: '/valid' },
    ];
    
    render(<Breadcrumb items={itemsWithoutHref} />);
    
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toBeInTheDocument();
    const validLink = screen.getAllByText('Valid Link')[0].closest('a');
    expect(validLink).toBeInTheDocument();
    expect(screen.queryByText('No Link')).not.toBeInTheDocument();
  });

  it('handles empty items array', () => {
    render(<Breadcrumb items={[]} />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    // Should not render back link if no items
    expect(screen.queryByText('Back to')).not.toBeInTheDocument();
  });

  it('passes item attributes to links', () => {
    const itemsWithAttributes: BreadcrumbItem[] = [
      { text: 'Home', href: '/', attributes: { 'data-test': 'home-link' } },
    ];
    
    render(<Breadcrumb items={itemsWithAttributes} />);
    
    const homeLink = screen.getAllByText('Home')[0].closest('a');
    expect(homeLink).toHaveAttribute('data-test', 'home-link');
  });
});
