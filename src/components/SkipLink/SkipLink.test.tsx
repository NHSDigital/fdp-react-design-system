import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SkipLink } from './SkipLink';

describe('SkipLink', () => {
  beforeEach(() => {
    // Clear any existing elements
    document.body.innerHTML = '';
  });

  it('renders with default props', () => {
    render(<SkipLink />);
    
    const skipLink = screen.getByRole('link');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveTextContent('Skip to main content');
    expect(skipLink).toHaveAttribute('href', '#maincontent');
    expect(skipLink).toHaveAttribute('data-module', 'nhsuk-skip-link');
  });

  it('renders with custom text and href', () => {
    render(<SkipLink text="Jump to navigation" href="#navigation" />);
    
    const skipLink = screen.getByRole('link');
    expect(skipLink).toHaveTextContent('Jump to navigation');
    expect(skipLink).toHaveAttribute('href', '#navigation');
  });

  it('applies custom CSS classes', () => {
    render(<SkipLink classes="custom-skip-link" />);
    
    const skipLink = screen.getByRole('link');
    expect(skipLink).toHaveClass('nhsuk-skip-link', 'custom-skip-link');
  });

  it('passes through additional attributes', () => {
    render(<SkipLink attributes={{ 'data-testid': 'custom-skip' }} />);
    
    expect(screen.getByTestId('custom-skip')).toBeInTheDocument();
  });

  it('focuses target element when clicked', () => {
    // Create a target element
    const mainElement = document.createElement('main');
    mainElement.id = 'maincontent';
    document.body.appendChild(mainElement);

    render(<SkipLink />);
    
    const skipLink = screen.getByRole('link');
    fireEvent.click(skipLink);

    // Check that the target element received focus
    expect(document.activeElement).toBe(mainElement);
    expect(mainElement).toHaveClass('nhsuk-skip-link-focused-element');
    expect(mainElement).toHaveAttribute('tabindex', '-1');
  });

  it('handles missing target element gracefully', () => {
    render(<SkipLink href="#nonexistent" />);
    
    const skipLink = screen.getByRole('link');
    
    // Should not throw an error when target doesn't exist
    expect(() => {
      fireEvent.click(skipLink);
    }).not.toThrow();
  });

  it('handles non-hash href gracefully', () => {
    render(<SkipLink href="/some-page" />);
    
    const skipLink = screen.getByRole('link');
    
    // Should not throw an error when href is not a hash
    expect(() => {
      fireEvent.click(skipLink);
    }).not.toThrow();
  });

  it('cleans up event listeners on unmount', () => {
    const { unmount } = render(<SkipLink />);
    
    // Spy on removeEventListener
    const removeEventListenerSpy = vi.spyOn(Element.prototype, 'removeEventListener');
    
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
    
    removeEventListenerSpy.mockRestore();
  });
});
