import { vi } from 'vitest';

// Enhanced SSR test environment setup
// This file provides additional setup specifically for SSR compatibility tests

// Ensure JSDOM is properly configured for SSR scenarios
if (typeof window !== 'undefined') {
  // Mock additional window APIs that might be missing in CI
  if (!window.MutationObserver) {
    window.MutationObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      disconnect: vi.fn(),
      takeRecords: vi.fn().mockReturnValue([]),
    }));
  }

  if (!window.ResizeObserver) {
    window.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  }

  if (!window.IntersectionObserver) {
    window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  }

  // Ensure setTimeout and other timing functions are available
  if (!window.setTimeout) {
    window.setTimeout = global.setTimeout || vi.fn();
  }
  
  if (!window.clearTimeout) {
    window.clearTimeout = global.clearTimeout || vi.fn();
  }
}

// Mock document APIs that might not be available in all CI environments
if (typeof document !== 'undefined') {
  // Ensure all DOM methods are available
  if (!document.querySelector) {
    document.querySelector = vi.fn().mockReturnValue(null);
  }
  
  if (!document.querySelectorAll) {
    document.querySelectorAll = vi.fn().mockReturnValue([]);
  }
  
  if (!document.addEventListener) {
    document.addEventListener = vi.fn();
  }
  
  if (!document.removeEventListener) {
    document.removeEventListener = vi.fn();
  }
  
  if (!document.createElement) {
    document.createElement = vi.fn().mockReturnValue({
      setAttribute: vi.fn(),
      getAttribute: vi.fn(),
      hasAttribute: vi.fn().mockReturnValue(false),
      removeAttribute: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      focus: vi.fn(),
      classList: {
        add: vi.fn(),
        remove: vi.fn(),
        contains: vi.fn().mockReturnValue(false),
      },
    });
  }
}

// Global error handler for uncaught SSR-related errors
const originalError = console.error;
console.error = (...args: any[]) => {
  // Filter out known SSR-related warnings that don't affect functionality
  const message = args[0];
  if (
    typeof message === 'string' && 
    (message.includes('document is not defined') ||
     message.includes('window is not defined') ||
     message.includes('navigator is not defined'))
  ) {
    return; // Suppress these specific SSR warnings in tests
  }
  originalError.apply(console, args);
};

// Mock fetch for any HTTP requests in SSR tests
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  status: 200,
  json: () => Promise.resolve({}),
  text: () => Promise.resolve(''),
});

export {};
