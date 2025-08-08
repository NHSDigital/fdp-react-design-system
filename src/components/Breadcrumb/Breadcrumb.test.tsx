import { render } from '../../test-utils/ServerRenderer';
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
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb />);
    
    expect(getByRole('navigation')).toBeTruthy();
    expect(getByLabelText('Breadcrumb')).toBeTruthy();
  });

  it('renders breadcrumb items correctly', () => {
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb items={defaultItems} />);
    
    // Use more specific selectors for breadcrumb links
    const homeLink = getByText('Home').closest('a');
    expect(homeLink?.getAttribute('href')).toEqual('/');
    expect(homeLink?.className?.includes('nhsuk-breadcrumb__link')).toBeTruthy();
    
    const healthLink = getByText('Health A-Z').closest('a');
    expect(healthLink?.getAttribute('href')).toEqual('/conditions');
    
    const mentalHealthLink = getAllByText('Mental health')[0].closest('a');
    expect(mentalHealthLink?.getAttribute('href')).toEqual('/mental-health');
  });

  it('renders back link for mobile', () => {
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb items={defaultItems} />);
    
    // Count all Mental health links (one in breadcrumb list, one in back link)
    const mentalHealthLinks = getAllByText('Mental health');
    expect(mentalHealthLinks).toHaveLength(2);
    
    // Check the back link has the visually hidden text
    const backLink = getByText('Back to').closest('a');
    expect(backLink?.className?.includes('nhsuk-breadcrumb__backlink')).toBeTruthy();
    expect(getByText('Back to')).toBeTruthy();
  });

  it('renders with custom label text', () => {
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb labelText="Custom Navigation" />);
    
    expect(getByLabelText('Custom Navigation')).toBeTruthy();
  });

  it('renders with direct href and text', () => {
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb href="/direct-link" text="Direct Page" />);
    
    // Should find both the breadcrumb link and the mobile back link
    const directLinks = getAllByText('Direct Page');
    expect(directLinks).toHaveLength(2);
    
    // Check the breadcrumb link specifically
    const breadcrumbLink = directLinks.find(link => 
      link.closest('a')?.classList.contains('nhsuk-breadcrumb__link')
    );
    expect(breadcrumbLink).toBeDefined();
    expect(breadcrumbLink!.closest('a')?.getAttribute('href')).toEqual('/direct-link');
  });

  it('applies reverse modifier class', () => {
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb reverse />);
    
    expect(container.querySelector('.nhsuk-breadcrumb')?.className?.includes('nhsuk-breadcrumb--reverse')).toBeTruthy();
  });

  it('applies custom CSS classes', () => {
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb classes="custom-breadcrumb" />);
    
    expect(container.querySelector('.nhsuk-breadcrumb')?.className?.includes('custom-breadcrumb')).toBeTruthy();
  });

  it('passes through additional attributes', () => {
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb attributes={{ 'data-testid': 'custom-breadcrumb' }} />);
    
    expect(getByTestId('custom-breadcrumb')).toBeTruthy();
  });

  it('handles items without href (filters them out)', () => {
    const itemsWithoutHref: BreadcrumbItem[] = [
      { text: 'Home', href: '/' },
      { text: 'No Link' }, // No href
      { text: 'Valid Link', href: '/valid' },
    ];
    
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb items={itemsWithoutHref} />);
    
    const homeLink = getByText('Home').closest('a');
    expect(homeLink).toBeTruthy();
    const validLink = getAllByText('Valid Link')[0].closest('a');
    expect(validLink).toBeTruthy();
    expect(queryByText('No Link')).not.toBeTruthy();
  });

  it('handles empty items array', () => {
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb items={[]} />);
    
    expect(getByRole('navigation')).toBeTruthy();
    // Should not render back link if no items
    expect(queryByText('Back to')).not.toBeTruthy();
  });

  it('passes item attributes to links', () => {
    const itemsWithAttributes: BreadcrumbItem[] = [
      { text: 'Home', href: '/', attributes: { 'data-test': 'home-link' } },
    ];
    
    const { getByRole, getByText, getAllByText, getByLabelText, queryByText, getByTestId, container } = render(<Breadcrumb items={itemsWithAttributes} />);
    
    const homeLink = getAllByText('Home')[0].closest('a');
    expect(homeLink?.getAttribute('data-test')).toEqual('home-link');
  });
});
