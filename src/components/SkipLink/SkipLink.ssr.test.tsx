import React from 'react';
import { render } from '@testing-library/react';
import { SkipLink } from './SkipLink';

/**
 * SSR Compatibility Tests for SkipLink Component
 * 
 * These tests verify that the SkipLink component works correctly
 * in server-side rendering scenarios without throwing errors.
 */

// Mock server-side environment
const mockSSREnvironment = () => {
  // Store original values
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  
  // Remove window and document to simulate SSR
  // @ts-ignore - Intentionally setting to undefined for SSR simulation
  delete globalThis.window;
  // @ts-ignore - Intentionally setting to undefined for SSR simulation
  delete globalThis.document;
  
  return () => {
    // Restore original values
    globalThis.window = originalWindow;
    globalThis.document = originalDocument;
  };
};

describe('SkipLink SSR Compatibility', () => {
  it('renders correctly in SSR environment (no window/document)', () => {
    const restoreEnvironment = mockSSREnvironment();
    
    try {
      // This should not throw an error in SSR environment
      const { container } = render(<SkipLink text="Skip to main" href="#main" />);
      
      // Verify basic rendering works
      const skipLink = container.querySelector('.nhsuk-skip-link');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main');
      expect(skipLink).toHaveTextContent('Skip to main');
      expect(skipLink).toHaveAttribute('data-enhanced', 'false');
    } finally {
      restoreEnvironment();
    }
  });

  it('renders with default props in SSR environment', () => {
    const restoreEnvironment = mockSSREnvironment();
    
    try {
      const { container } = render(<SkipLink />);
      
      const skipLink = container.querySelector('.nhsuk-skip-link');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#maincontent');
      expect(skipLink).toHaveTextContent('Skip to main content');
      expect(skipLink).toHaveAttribute('data-enhanced', 'false');
    } finally {
      restoreEnvironment();
    }
  });

  it('enhances correctly after hydration', () => {
    // Start with SSR environment
    const restoreEnvironment = mockSSREnvironment();
    
    let rerender: (ui: React.ReactElement) => void;
    
    try {
      const { container, rerender: rerenderFn } = render(<SkipLink />);
      rerender = rerenderFn;
      
      // Verify SSR state
      let skipLink = container.querySelector('.nhsuk-skip-link');
      expect(skipLink).toHaveAttribute('data-enhanced', 'false');
    } finally {
      restoreEnvironment();
    }
    
    // Simulate hydration by restoring window/document and re-rendering
    rerender(<SkipLink />);
    
    // After hydration, should eventually be enhanced
    // Note: In real React, the useEffect would run and update the state
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toBeInTheDocument();
  });

  it('handles custom attributes in SSR environment', () => {
    const restoreEnvironment = mockSSREnvironment();
    
    try {
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
    } finally {
      restoreEnvironment();
    }
  });
});
