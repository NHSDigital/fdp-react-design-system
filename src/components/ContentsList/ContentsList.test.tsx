import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContentsList } from './ContentsList';
import { ContentsListItem } from './ContentsList.types';

describe('ContentsList', () => {
  const defaultItems: ContentsListItem[] = [
    { text: 'Introduction', href: '#introduction' },
    { text: 'Symptoms', href: '#symptoms' },
    { text: 'Treatment', href: '#treatment', current: true },
    { text: 'Prevention', href: '#prevention' },
  ];

  it('renders with default props', () => {
    render(<ContentsList items={defaultItems} />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('Pages in this guide')).toBeInTheDocument();
    expect(screen.getByText('Contents')).toBeInTheDocument();
  });

  it('renders all items correctly', () => {
    render(<ContentsList items={defaultItems} />);
    
    expect(screen.getByRole('link', { name: 'Introduction' })).toHaveAttribute('href', '#introduction');
    expect(screen.getByRole('link', { name: 'Symptoms' })).toHaveAttribute('href', '#symptoms');
    expect(screen.getByRole('link', { name: 'Prevention' })).toHaveAttribute('href', '#prevention');
  });

  it('marks current item with aria-current', () => {
    render(<ContentsList items={defaultItems} />);
    
    const currentItem = screen.getByText('Treatment').closest('li');
    expect(currentItem).toHaveAttribute('aria-current', 'page');
    expect(currentItem).toContainElement(screen.getByText('Treatment'));
    
    // Current item should not be a link
    expect(screen.queryByRole('link', { name: 'Treatment' })).not.toBeInTheDocument();
  });

  it('applies current styling to current item', () => {
    render(<ContentsList items={defaultItems} />);
    
    const currentSpan = screen.getByText('Treatment');
    expect(currentSpan).toHaveClass('nhsuk-contents-list__current');
  });

  it('renders with custom aria label', () => {
    render(<ContentsList items={defaultItems} ariaLabel="Section navigation" />);
    
    expect(screen.getByLabelText('Section navigation')).toBeInTheDocument();
  });

  it('applies custom CSS classes', () => {
    const { container } = render(
      <ContentsList items={defaultItems} classes="custom-contents-list" />
    );
    
    expect(container.querySelector('.nhsuk-contents-list')).toHaveClass('custom-contents-list');
  });

  it('passes through additional attributes', () => {
    render(
      <ContentsList 
        items={defaultItems} 
        attributes={{ 'data-testid': 'custom-contents' }}
      />
    );
    
    expect(screen.getByTestId('custom-contents')).toBeInTheDocument();
  });

  it('handles empty items array', () => {
    render(<ContentsList items={[]} />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Contents')).toBeInTheDocument();
    // Should render empty list
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.children).toHaveLength(0);
  });

  it('handles items without href (renders as current)', () => {
    const itemsWithoutHref: ContentsListItem[] = [
      { text: 'Introduction', href: '#introduction' },
      { text: 'Current Section', current: true },
    ];
    
    render(<ContentsList items={itemsWithoutHref} />);
    
    expect(screen.getByRole('link', { name: 'Introduction' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Current Section' })).not.toBeInTheDocument();
    expect(screen.getByText('Current Section')).toHaveClass('nhsuk-contents-list__current');
  });

  it('passes item attributes to list items', () => {
    const itemsWithAttributes: ContentsListItem[] = [
      { 
        text: 'Introduction', 
        href: '#introduction', 
        attributes: { 'data-tracking': 'intro-link' } 
      },
      { 
        text: 'Current', 
        current: true, 
        attributes: { 'data-current': 'true' } 
      },
    ];
    
    render(<ContentsList items={itemsWithAttributes} />);
    
    expect(screen.getByRole('link', { name: 'Introduction' })).toHaveAttribute('data-tracking', 'intro-link');
    
    const currentItem = screen.getByText('Current').closest('li');
    expect(currentItem).toHaveAttribute('data-current', 'true');
  });

  it('renders visually hidden heading for accessibility', () => {
    render(<ContentsList items={defaultItems} />);
    
    const heading = screen.getByText('Contents');
    expect(heading).toHaveClass('nhsuk-u-visually-hidden');
    expect(heading.tagName).toBe('H2');
  });

  it('uses ordered list for semantic structure', () => {
    render(<ContentsList items={defaultItems} />);
    
    const list = screen.getByRole('list');
    expect(list.tagName).toBe('OL');
    expect(list).toHaveClass('nhsuk-contents-list__list');
  });
});
