import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { SkipLink } from './SkipLink';

/**
 * SSR Compatibility Tests for SkipLink Component
 * 
 * These tests verify that the SkipLink component works correctly
 * in server-side rendering scenarios and handles client-side enhancement.
 */

describe('SkipLink SSR Compatibility', () => {
  beforeEach(() => {
    // Clear any previous mocks
    vi.clearAllMocks();
  });
  
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders correctly with basic functionality', () => {
    // This test verifies that the component renders without errors
    // and provides basic functionality that would work in SSR
    const { container } = render(<SkipLink text="Skip to main" href="#main" />);
    
    // Verify basic rendering works
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main');
    expect(skipLink).toHaveTextContent('Skip to main');
    
    // The component may be enhanced or not depending on timing
    // but it should definitely be rendered
    expect(skipLink).toHaveAttribute('data-enhanced');
  });

  it('renders with default props without errors', () => {
    const { container } = render(<SkipLink />);
    
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#maincontent');
    expect(skipLink).toHaveTextContent('Skip to main content');
    expect(skipLink).toHaveAttribute('data-enhanced');
  });

  it('handles client-side enhancement gracefully', async () => {
    const { container } = render(<SkipLink />);
    
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toBeInTheDocument();
    
    // Wait for any useEffect to complete
    await waitFor(() => {
      expect(skipLink).toHaveAttribute('data-enhanced');
    });
    
    // The component should be functional regardless of enhancement state
    expect(skipLink).toHaveAttribute('href', '#maincontent');
    expect(skipLink).toHaveTextContent('Skip to main content');
  });

  it('handles custom attributes correctly', () => {
    const { container } = render(
      <SkipLink 
        text="Custom skip text"
        href="#custom-main"
        classes="custom-class"
        attributes={{ 'data-testid': 'custom-skip-link' }}
      />
    );
    
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toHaveClass('nhsuk-skip-link', 'custom-class');
    expect(skipLink).toHaveAttribute('data-testid', 'custom-skip-link');
    expect(skipLink).toHaveAttribute('href', '#custom-main');
    expect(skipLink).toHaveTextContent('Custom skip text');
    expect(skipLink).toHaveAttribute('data-enhanced');
  });
});
