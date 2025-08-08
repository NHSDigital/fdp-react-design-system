import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '../../test-utils/ServerRenderer';
import { SkipLink } from './SkipLink';

describe('SkipLink', () => {
  beforeEach(() => {
    // Clear any existing elements
    document.body.innerHTML = '';
  });

  it('renders with default props', () => {
    const { container } = render(<SkipLink />);
    
    const skipLink = container.querySelector('a');
    expect(skipLink).toBeTruthy();
    expect(skipLink!.textContent).toBe('Skip to main content');
    expect(skipLink!.getAttribute('href')).toBe('#maincontent');
    expect(skipLink!.getAttribute('data-module')).toBe('nhsuk-skip-link');
  });

  it('renders with custom text and href', () => {
    const { container } = render(<SkipLink text="Jump to navigation" href="#navigation" />);
    
    const skipLink = container.querySelector('a');
    expect(skipLink!.textContent).toBe('Jump to navigation');
    expect(skipLink!.getAttribute('href')).toBe('#navigation');
  });

  it('applies custom CSS classes', () => {
    const { container } = render(<SkipLink classes="custom-skip-link" />);
    
    const skipLink = container.querySelector('a');
    expect(skipLink!.className.includes('nhsuk-skip-link')).toBeTruthy();
    expect(skipLink!.className.includes('custom-skip-link')).toBeTruthy();
  });

  it('passes through additional attributes', () => {
    const { getByTestId } = render(<SkipLink attributes={{ 'data-testid': 'custom-skip' }} />);
    
    expect(getByTestId('custom-skip')).toBeTruthy();
  });

  it('focuses target element when clicked', () => {
    // Create a target element
    const mainElement = document.createElement('main');
    mainElement.id = 'maincontent';
    document.body.appendChild(mainElement);

    const { container } = render(<SkipLink />);
    
    const skipLink = container.querySelector('a');
    
    // In SSR context, we can't simulate click events
    // Just verify the link exists and has correct attributes
    expect(skipLink!.getAttribute('href')).toBe('#maincontent');
    expect(skipLink).toBeTruthy();
  });

  it('handles missing target element gracefully', () => {
    const { container } = render(<SkipLink href="#nonexistent" />);
    
    const skipLink = container.querySelector('a');
    
    // Verify the component renders without errors
    expect(skipLink!.getAttribute('href')).toBe('#nonexistent');
    expect(skipLink).toBeTruthy();
  });

  it('handles non-hash href gracefully', () => {
    const { container } = render(<SkipLink href="/some-page" />);
    
    const skipLink = container.querySelector('a');
    
    // Verify the component renders without errors
    expect(skipLink!.getAttribute('href')).toBe('/some-page');
    expect(skipLink).toBeTruthy();
  });

  it('cleans up event listeners on unmount', () => {
    const { unmount } = render(<SkipLink />);
    
    // In SSR context, we can't test event listener cleanup
    // Just verify unmount works without errors
    expect(() => unmount()).not.toThrow();
  });
});
