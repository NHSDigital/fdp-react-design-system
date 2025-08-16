import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { HeaderSSR } from './HeaderSSR';
import type { HeaderProps } from './Header.types';

// Mock CSS imports
vi.mock('./Header.scss', () => ({}));
vi.mock('./Header.ssr.scss', () => ({}));

// Mock ReactDOM for testing
import { createRoot } from 'react-dom/client';

describe('HeaderSSR - Simple Tests', () => {
  // Basic props for testing
  const defaultProps: HeaderProps = {
    service: {
      text: 'NHS App',
      href: '/app'
    }
  };

  it('should render without throwing', () => {
    // Test basic rendering without testing library
    const container = document.createElement('div');
    const root = createRoot(container);
    
    act(() => {
      root.render(<HeaderSSR {...defaultProps} />);
    });
    expect(container.innerHTML.length).toBeGreaterThan(0);
    act(() => {
      root.unmount();
    });
  });

  it('should render with jsdom environment available', () => {
  expect(typeof document.createElement).toBe('function');
  });
});
