import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Import React globally for JSX in tests
import React from 'react';

// Make React available globally for tests that don't import it explicitly
(globalThis as any).React = React;

// Import fonts to ensure they're available during testing
import './styles/fonts.css';

// Ensure jest-dom matchers are available
import { expect, vi } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Enhanced DOM environment setup for CI/CD environments
// This addresses issues where jsdom may not be fully initialized
if (typeof global !== 'undefined') {
  // Ensure window and document are available
  if (typeof window === 'undefined') {
    // This should not happen with jsdom, but provides a fallback
    console.warn('Warning: window not available in test environment');
  }
  
  if (typeof document === 'undefined') {
    // This should not happen with jsdom, but provides a fallback
    console.warn('Warning: document not available in test environment');
  }

  // Ensure document is available globally for @testing-library/react
  // This fixes "document is not defined" errors in React 19 with @testing-library/react
  if (typeof globalThis !== 'undefined' && typeof document !== 'undefined') {
    globalThis.document = document;
    globalThis.window = window;
  }
}

// Fix React 19 compatibility issue with concurrent features
// React 19 tries to access window.event in resolveUpdatePriority but it's undefined in test environment
if (typeof window !== 'undefined') {
  // Set up a minimal event object to prevent "Cannot read properties of undefined (reading 'event')" error
  Object.defineProperty(window, 'event', {
    get() {
      return null; // Return null instead of undefined to prevent the error
    },
    configurable: true,
  });
}

// Mock document.fonts API for testing
if (typeof document !== 'undefined') {
  Object.defineProperty(document, 'fonts', {
    value: {
      load: vi.fn().mockResolvedValue([]),
      check: vi.fn().mockReturnValue(false), // Initially fonts are not loaded
      ready: Promise.resolve(new Set()),
    },
    writable: true,
  });

  // Mock window.getComputedStyle to better handle font fallbacks in tests
  const originalGetComputedStyle = window.getComputedStyle;
  window.getComputedStyle = function(element: Element, pseudoElement?: string | null) {
    const style = originalGetComputedStyle(element, pseudoElement);
    
    // Create a proxy to better handle font-family fallbacks
    return new Proxy(style, {
      get(target: CSSStyleDeclaration, property: string | symbol) {
        if (property === 'fontFamily') {
          const fontFamily = target.fontFamily;
          // If no inline style is set, check if Frutiger should be applied
          if (!fontFamily || fontFamily === '' || fontFamily === 'Times' || fontFamily === 'serif') {
            // Check if element has our font stack applied via inline styles
            const htmlElement = element as HTMLElement;
            if (htmlElement.style && htmlElement.style.fontFamily) {
              return htmlElement.style.fontFamily;
            }
            // In test environment, fall back to system default
            return 'arial, sans-serif';
          }
          return fontFamily;
        }
        return (target as any)[property];
      }
    });
  };
}
