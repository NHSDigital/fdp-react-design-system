import { render, screen } from '@testing-library/react';
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
    
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Health A-Z' })).toHaveAttribute('href', '/conditions');
    expect(screen.getByRole('link', { name: 'Mental health' })).toHaveAttribute('href', '/mental-health');
  });

  it('renders back link for mobile', () => {
    render(<Breadcrumb items={defaultItems} />);
    
    const backLinks = screen.getAllByRole('link', { name: /Mental health/ });
    expect(backLinks).toHaveLength(2); // One in breadcrumb list, one in back link
    
    // Check the back link has the visually hidden text
    expect(screen.getByText('Back to')).toBeInTheDocument();
    expect(screen.getByText('Back to')).toHaveClass('nhsuk-u-visually-hidden');
  });

  it('renders with custom label text', () => {
    render(<Breadcrumb labelText="Custom Navigation" />);
    
    expect(screen.getByLabelText('Custom Navigation')).toBeInTheDocument();
  });

  it('renders with direct href and text', () => {
    render(<Breadcrumb href="/direct-link" text="Direct Page" />);
    
    expect(screen.getByRole('link', { name: 'Direct Page' })).toHaveAttribute('href', '/direct-link');
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
    
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Valid Link' })).toBeInTheDocument();
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
    
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('data-test', 'home-link');
  });
});
