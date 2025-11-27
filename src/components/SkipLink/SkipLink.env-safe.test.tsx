import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { SkipLink } from './SkipLink';
import { initAll, teardownAll } from '../../behaviours';

/**
 * Environment-Safe SSR Compatibility Tests for SkipLink Component
 * 
 * This test suite provides multiple fallback strategies for testing
 * SSR compatibility across different CI/CD environments.
 */

// Detect if we're in a proper testing environment
const isTestEnvironmentReady = () => {
  try {
    return typeof window !== 'undefined' && 
           typeof document !== 'undefined' && 
           document.querySelector !== undefined;
  } catch {
    return false;
  }
};

// Enhanced environment setup with fallbacks
const ensureTestEnvironment = () => {
  if (!isTestEnvironmentReady()) {
    // Create minimal DOM environment for CI
    try {
      const { JSDOM } = require('jsdom');
      const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
        url: 'http://localhost:3000',
        pretendToBeVisual: true,
        resources: 'usable',
      });
      
      global.window = dom.window as any;
      global.document = dom.window.document;
      global.navigator = dom.window.navigator;
    } catch (error) {
      // If JSDOM isn't available, create mocks
      global.window = {
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        setTimeout: vi.fn((fn) => setTimeout(fn, 0)),
        clearTimeout: vi.fn(),
      } as any;
      
      global.document = {
        querySelector: vi.fn().mockReturnValue({
          getAttribute: vi.fn(),
          setAttribute: vi.fn(),
          hasAttribute: vi.fn().mockReturnValue(false),
          removeAttribute: vi.fn(),
          focus: vi.fn(),
          classList: {
            add: vi.fn(),
            remove: vi.fn(),
          },
        }),
        querySelectorAll: vi.fn().mockReturnValue([]),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      } as any;
    }
  }
};

describe('SkipLink Environment-Safe SSR Compatibility', () => {
  beforeEach(() => {
    ensureTestEnvironment();
    vi.clearAllMocks();
  });
  
  afterEach(() => {
    try { teardownAll(document); } catch {}
    vi.restoreAllMocks();
  });

  it('renders without errors in any environment', () => {
    const { container } = render(<SkipLink text="Skip to main" href="#main" />);
    
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main');
    expect(skipLink).toHaveTextContent('Skip to main');
  });

  it('handles missing DOM APIs gracefully', () => {
    // Temporarily remove DOM APIs to simulate SSR environment
    const originalQuerySelector = document.querySelector;
    const originalQuerySelectorAll = document.querySelectorAll;
    
    // Mock missing APIs
    delete (document as any).querySelector;
    delete (document as any).querySelectorAll;
    
    // Component should still render without errors
    expect(() => {
      render(<SkipLink />);
    }).not.toThrow();
    
    // Restore APIs
    document.querySelector = originalQuerySelector;
    document.querySelectorAll = originalQuerySelectorAll;
  });

  it('works with default props in any environment', () => {
    const { container } = render(<SkipLink />);
    
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#maincontent');
    expect(skipLink).toHaveTextContent('Skip to main content');
  });

  it('handles client-side enhancement safely (via behaviours)', async () => {
    const { container } = render(<SkipLink />);
    // Init behaviours on the rendered scope so the link is enhanced
    try { initAll(container); } catch {}
    
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toBeInTheDocument();
    
    // Wait for behaviours to mark as enhanced
    await waitFor(() => {
      expect(skipLink).toHaveAttribute('data-enhanced');
    }, { timeout: 1000 });
  });

  it('supports custom attributes in any environment', () => {
    const customProps = {
      text: "Custom skip text",
      href: "#custom-main",
      classes: "custom-class",
      attributes: { 'data-testid': 'custom-skip-link' }
    };
    
    const { container } = render(<SkipLink {...customProps} />);
    
    const skipLink = container.querySelector('.nhsuk-skip-link');
    expect(skipLink).toHaveClass('nhsuk-skip-link', 'custom-class');
    expect(skipLink).toHaveAttribute('data-testid', 'custom-skip-link');
    expect(skipLink).toHaveAttribute('href', '#custom-main');
    expect(skipLink).toHaveTextContent('Custom skip text');
  });

  // Conditional test that only runs if full DOM is available
  if (isTestEnvironmentReady()) {
  it('provides enhanced functionality when DOM is available (via behaviours)', async () => {
      // Mock target element for skip link
      const targetElement = document.createElement('main');
      targetElement.id = 'maincontent';
      document.body.appendChild(targetElement);
      
  const { container } = render(<SkipLink />);
  try { initAll(container); } catch {}
      const skipLink = container.querySelector('.nhsuk-skip-link') as HTMLAnchorElement;
      
      // Simulate click
      skipLink.click();
      
      // Verify enhancement worked
      await waitFor(() => {
        expect(targetElement.getAttribute('tabindex')).toBe('-1');
      });
      
      // Cleanup
      document.body.removeChild(targetElement);
    });
  } else {
    it.skip('enhanced functionality test skipped - DOM not fully available', () => {
      // This test is skipped in environments where DOM is not fully available
    });
  }
});
