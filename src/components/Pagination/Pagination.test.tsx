import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('renders with both previous and next links', () => {
    render(
      <Pagination 
        previousUrl="/page-1" 
        previousPage="Page 1 of 3" 
        nextUrl="/page-3" 
        nextPage="Page 3 of 3" 
      />
    );
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('Pagination')).toBeInTheDocument();
    
    const prevLink = screen.getByRole('link', { name: /Previous.*Page 1 of 3/ });
    expect(prevLink).toHaveAttribute('href', '/page-1');
    
    const nextLink = screen.getByRole('link', { name: /Next.*Page 3 of 3/ });
    expect(nextLink).toHaveAttribute('href', '/page-3');
  });

  it('renders only previous link when next is not provided', () => {
    render(
      <Pagination 
        previousUrl="/page-1" 
        previousPage="Introduction" 
      />
    );
    
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
  });

  it('renders only next link when previous is not provided', () => {
    render(
      <Pagination 
        nextUrl="/page-3" 
        nextPage="Conclusion" 
      />
    );
    
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Conclusion')).toBeInTheDocument();
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
  });

  it('renders no links when neither previous nor next are provided', () => {
    render(<Pagination />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
  });

  it('does not render links when URL is provided but page text is missing', () => {
    render(
      <Pagination 
        previousUrl="/page-1" 
        nextUrl="/page-3" 
      />
    );
    
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
  });

  it('does not render links when page text is provided but URL is missing', () => {
    render(
      <Pagination 
        previousPage="Page 1" 
        nextPage="Page 3" 
      />
    );
    
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
  });

  it('applies custom CSS classes', () => {
    const { container } = render(
      <Pagination 
        classes="custom-pagination"
        previousUrl="/prev" 
        previousPage="Previous page" 
      />
    );
    
    expect(container.querySelector('.nhsuk-pagination')).toHaveClass('custom-pagination');
  });

  it('passes through additional attributes', () => {
    render(
      <Pagination 
        attributes={{ 'data-testid': 'custom-pagination' }}
        previousUrl="/prev" 
        previousPage="Previous page" 
      />
    );
    
    expect(screen.getByTestId('custom-pagination')).toBeInTheDocument();
  });

  it('includes visually hidden colons for screen readers', () => {
    render(
      <Pagination 
        previousUrl="/page-1" 
        previousPage="Page 1" 
        nextUrl="/page-3" 
        nextPage="Page 3" 
      />
    );
    
    const hiddenColons = screen.getAllByText(':');
    expect(hiddenColons).toHaveLength(2);
    hiddenColons.forEach(colon => {
      expect(colon).toHaveClass('nhsuk-u-visually-hidden');
    });
  });

  it('includes appropriate ARIA attributes on icons', () => {
    const { container } = render(
      <Pagination 
        previousUrl="/page-1" 
        previousPage="Page 1" 
        nextUrl="/page-3" 
        nextPage="Page 3" 
      />
    );
    
    const icons = container.querySelectorAll('svg');
    icons.forEach(icon => {
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
