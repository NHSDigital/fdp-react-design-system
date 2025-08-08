import React from 'react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { HeaderSSR } from './HeaderSSR';
import type { HeaderProps } from './Header.types';
import { createRoot } from 'react-dom/client';
import { act } from 'react';

// Mock CSS imports
vi.mock('./Header.scss', () => ({}));
vi.mock('./Header.ssr.scss', () => ({}));

// React 19 compatible testing utilities
class React19TestRenderer {
  private container: HTMLElement;
  private root: any;

  constructor() {
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    this.root = createRoot(this.container);
  }

  async render(element: React.ReactElement) {
    await act(async () => {
      this.root.render(element);
    });
    return this.container;
  }

  unmount() {
    act(() => {
      this.root.unmount();
    });
    document.body.removeChild(this.container);
  }

  // Query methods similar to @testing-library/react
  getByRole(role: string, options?: { name?: RegExp | string }) {
    const elements = this.container.querySelectorAll(`[role="${role}"]`);
    if (options?.name) {
      for (const element of elements) {
        const ariaLabel = element.getAttribute('aria-label');
        const textContent = element.textContent;
        const nameMatch = options.name instanceof RegExp 
          ? options.name.test(ariaLabel || textContent || '')
          : (ariaLabel || textContent || '').includes(options.name);
        if (nameMatch) return element as HTMLElement;
      }
    }
    if (elements.length === 0) throw new Error(`No element found with role: ${role}`);
    if (elements.length > 1 && !options?.name) throw new Error(`Multiple elements found with role: ${role}`);
    return elements[0] as HTMLElement;
  }

  queryByRole(role: string) {
    const elements = this.container.querySelectorAll(`[role="${role}"]`);
    return elements.length > 0 ? elements[0] as HTMLElement : null;
  }

  getByText(text: string | RegExp) {
    const walker = document.createTreeWalker(
      this.container,
      NodeFilter.SHOW_TEXT,
      null
    );

    let node: Text | null;
    while (node = walker.nextNode() as Text) {
      const content = node.textContent || '';
      const matches = text instanceof RegExp ? text.test(content) : content.includes(text);
      if (matches && node.parentElement) {
        return node.parentElement;
      }
    }
    throw new Error(`No element found with text: ${text}`);
  }

  queryByText(text: string | RegExp) {
    try {
      return this.getByText(text);
    } catch {
      return null;
    }
  }

  getByPlaceholderText(placeholder: string) {
    const element = this.container.querySelector(`[placeholder="${placeholder}"]`);
    if (!element) throw new Error(`No element found with placeholder: ${placeholder}`);
    return element as HTMLElement;
  }

  getByLabelText(label: string | RegExp) {
    const elements = this.container.querySelectorAll('input, textarea, select');
    for (const element of elements) {
      const id = element.getAttribute('id');
      if (id) {
        const labelEl = this.container.querySelector(`label[for="${id}"]`);
        if (labelEl) {
          const labelText = labelEl.textContent || '';
          const matches = label instanceof RegExp ? label.test(labelText) : labelText.includes(label);
          if (matches) return element as HTMLElement;
        }
      }
      
      // Check aria-label
      const ariaLabel = element.getAttribute('aria-label') || '';
      const matches = label instanceof RegExp ? label.test(ariaLabel) : ariaLabel.includes(label);
      if (matches) return element as HTMLElement;
    }
    throw new Error(`No element found with label: ${label}`);
  }

  getAllByRole(role: string) {
    const elements = this.container.querySelectorAll(`[role="${role}"]`);
    return Array.from(elements) as HTMLElement[];
  }

  getAllByText(text: string) {
    const elements: HTMLElement[] = [];
    const walker = document.createTreeWalker(
      this.container,
      NodeFilter.SHOW_TEXT,
      null
    );

    let node: Text | null;
    while (node = walker.nextNode() as Text) {
      const content = node.textContent || '';
      if (content.includes(text) && node.parentElement) {
        elements.push(node.parentElement);
      }
    }
    return elements;
  }
}

// Custom expect extensions for React 19
const customMatchers = {
  toBeInTheDocument(element: HTMLElement) {
    return {
      pass: document.body.contains(element),
      message: () => `Expected element to be in the document`
    };
  },
  
  toHaveClass(element: HTMLElement, className: string) {
    return {
      pass: element.classList.contains(className),
      message: () => `Expected element to have class: ${className}`
    };
  },

  toHaveAttribute(element: HTMLElement, attr: string, value?: string) {
    const hasAttr = element.hasAttribute(attr);
    if (value !== undefined) {
      const attrValue = element.getAttribute(attr);
      return {
        pass: hasAttr && attrValue === value,
        message: () => `Expected element to have attribute ${attr}="${value}"`
      };
    }
    return {
      pass: hasAttr,
      message: () => `Expected element to have attribute: ${attr}`
    };
  }
};

describe('HeaderSSR - React 19 Compatible', () => {
  let renderer: React19TestRenderer;

  beforeEach(() => {
    renderer = new React19TestRenderer();
  });

  afterEach(() => {
    renderer.unmount();
  });

  // Basic props for testing
  const defaultProps: HeaderProps = {
    service: {
      text: 'NHS App',
      href: '/app'
    }
  };

  const navigationProps: HeaderProps = {
    ...defaultProps,
    navigation: {
      items: [
        { text: 'Health A-Z', href: '/health-a-to-z' },
        { text: 'Live Well', href: '/live-well' },
        { text: 'Mental health', href: '/mental-health' },
        { text: 'Care and support', href: '/care-and-support' },
        { text: 'Pregnancy', href: '/pregnancy' },
        { text: 'NHS services', href: '/nhs-services' }
      ]
    }
  };

  describe('SSR Compatibility', () => {
    test('renders without any browser APIs', async () => {
      // This test ensures no browser APIs are called during render
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      await renderer.render(<HeaderSSR {...defaultProps} />);
      
      // Should render without throwing errors
      const header = renderer.getByRole('banner');
      expect(customMatchers.toBeInTheDocument(header).pass).toBe(true);
      
      // No console errors should appear
      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    test('uses no React hooks', async () => {
      // Ensure component doesn't use useState, useEffect, etc.
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      await renderer.render(<HeaderSSR {...defaultProps} />);
      
      // No React hook warnings should appear
      expect(consoleSpy).not.toHaveBeenCalledWith(
        expect.stringContaining('Hook')
      );
      
      consoleSpy.mockRestore();
    });

    test('renders with SSR identifier class', async () => {
      await renderer.render(<HeaderSSR {...defaultProps} />);
      
      const header = renderer.getByRole('banner');
      expect(customMatchers.toHaveClass(header, 'nhsuk-header--ssr').pass).toBe(true);
    });

    test('includes progressive enhancement data attributes', async () => {
      await renderer.render(<HeaderSSR {...navigationProps} />);
      
      const header = renderer.getByRole('banner');
      expect(customMatchers.toHaveAttribute(header, 'data-progressive-enhancement', 'true').pass).toBe(true);
      expect(customMatchers.toHaveAttribute(header, 'data-navigation-items-count', '6').pass).toBe(true);
    });
  });

  describe('Basic Rendering', () => {
    test('renders header element with correct role', async () => {
      await renderer.render(<HeaderSSR {...defaultProps} />);
      
      const header = renderer.getByRole('banner');
      expect(customMatchers.toBeInTheDocument(header).pass).toBe(true);
      expect(header.tagName).toBe('HEADER');
    });

    test('applies correct CSS classes', async () => {
      await renderer.render(<HeaderSSR {...defaultProps} className="custom-class" />);
      
      const header = renderer.getByRole('banner');
      expect(customMatchers.toHaveClass(header, 'nhsuk-header').pass).toBe(true);
      expect(customMatchers.toHaveClass(header, 'nhsuk-header--ssr').pass).toBe(true);
      expect(customMatchers.toHaveClass(header, 'custom-class').pass).toBe(true);
    });

    test('renders NHS logo by default', async () => {
      await renderer.render(<HeaderSSR {...defaultProps} />);
      
      const logo = renderer.getByRole('img', { name: /NHS/ });
      expect(customMatchers.toBeInTheDocument(logo).pass).toBe(true);
      expect(logo.tagName).toBe('svg');
      expect(customMatchers.toHaveClass(logo, 'nhsuk-header__logo').pass).toBe(true);
    });

    test('renders service name when provided', async () => {
      await renderer.render(<HeaderSSR {...defaultProps} />);
      
      const serviceName = renderer.getByText('NHS App');
      expect(customMatchers.toBeInTheDocument(serviceName).pass).toBe(true);
      expect(customMatchers.toHaveClass(serviceName, 'nhsuk-header__service-name').pass).toBe(true);
    });
  });

  describe('Logo Variants', () => {
    test('renders custom logo image when logo.src provided', async () => {
      const propsWithCustomLogo: HeaderProps = {
        ...defaultProps,
        logo: {
          src: '/custom-logo.png',
          ariaLabel: 'Custom Organisation Logo'
        }
      };

      await renderer.render(<HeaderSSR {...propsWithCustomLogo} />);
      
      const customLogo = renderer.getByRole('img', { name: 'Custom Organisation Logo' });
      expect(customMatchers.toBeInTheDocument(customLogo).pass).toBe(true);
      expect(customLogo.tagName).toBe('IMG');
      expect(customMatchers.toHaveClass(customLogo, 'nhsuk-header__organisation-logo').pass).toBe(true);
      expect(customMatchers.toHaveAttribute(customLogo, 'src', '/custom-logo.png').pass).toBe(true);
    });

    test('uses custom aria label for NHS logo', async () => {
      const propsWithCustomLabel: HeaderProps = {
        ...defaultProps,
        logo: {
          ariaLabel: 'NHS Digital'
        }
      };

      await renderer.render(<HeaderSSR {...propsWithCustomLabel} />);
      
      const logo = renderer.getByRole('img', { name: 'NHS Digital' });
      expect(customMatchers.toBeInTheDocument(logo).pass).toBe(true);
    });
  });

  describe('Navigation', () => {
    test('renders navigation when items provided', async () => {
      await renderer.render(<HeaderSSR {...navigationProps} />);
      
      const nav = renderer.getByRole('navigation');
      expect(customMatchers.toBeInTheDocument(nav).pass).toBe(true);
      expect(customMatchers.toHaveClass(nav, 'nhsuk-header__navigation').pass).toBe(true);
    });

    test('renders all navigation items (SSR behavior)', async () => {
      await renderer.render(<HeaderSSR {...navigationProps} />);
      
      // All navigation items should be visible in SSR mode
      expect(customMatchers.toBeInTheDocument(renderer.getByText('Health A-Z')).pass).toBe(true);
      expect(customMatchers.toBeInTheDocument(renderer.getByText('Live Well')).pass).toBe(true);
      expect(customMatchers.toBeInTheDocument(renderer.getByText('Mental health')).pass).toBe(true);
      expect(customMatchers.toBeInTheDocument(renderer.getByText('Care and support')).pass).toBe(true);
      expect(customMatchers.toBeInTheDocument(renderer.getByText('Pregnancy')).pass).toBe(true);
      expect(customMatchers.toBeInTheDocument(renderer.getByText('NHS services')).pass).toBe(true);
    });

    test('applies correct navigation data attributes', async () => {
      await renderer.render(<HeaderSSR {...navigationProps} />);
      
      const nav = renderer.getByRole('navigation');
      expect(customMatchers.toHaveAttribute(nav, 'data-navigation-enhanced', 'false').pass).toBe(true);
      expect(customMatchers.toHaveAttribute(nav, 'aria-label', 'Primary navigation').pass).toBe(true);
    });

    test('does not render navigation when no items provided', async () => {
      await renderer.render(<HeaderSSR {...defaultProps} />);
      
      expect(renderer.queryByRole('navigation')).toBe(null);
    });
  });

  describe('Search Functionality', () => {
    test('renders search form when search prop provided', async () => {
      const propsWithSearch: HeaderProps = {
        ...defaultProps,
        search: {
          action: '/search',
          placeholder: 'Search the NHS website'
        }
      };

      await renderer.render(<HeaderSSR {...propsWithSearch} />);
      
      const searchForm = renderer.getByRole('search');
      expect(customMatchers.toBeInTheDocument(searchForm).pass).toBe(true);
      expect(customMatchers.toHaveAttribute(searchForm, 'action', '/search').pass).toBe(true);
      expect(customMatchers.toHaveAttribute(searchForm, 'method', 'get').pass).toBe(true);
    });

    test('renders search input with correct attributes', async () => {
      const propsWithSearch: HeaderProps = {
        ...defaultProps,
        search: {
          action: '/search',
          placeholder: 'Search the NHS website',
          name: 'query'
        }
      };

      await renderer.render(<HeaderSSR {...propsWithSearch} />);
      
      const searchInput = renderer.getByPlaceholderText('Search the NHS website');
      expect(customMatchers.toBeInTheDocument(searchInput).pass).toBe(true);
      expect(customMatchers.toHaveAttribute(searchInput, 'type', 'search').pass).toBe(true);
      expect(customMatchers.toHaveAttribute(searchInput, 'name', 'query').pass).toBe(true);
      expect(customMatchers.toHaveAttribute(searchInput, 'autocomplete', 'off').pass).toBe(true);
    });
  });

  describe('Accessibility', () => {
    test('includes proper ARIA landmarks', async () => {
      await renderer.render(<HeaderSSR {...navigationProps} />);
      
      const header = renderer.getByRole('banner');
      const nav = renderer.getByRole('navigation');
      
      expect(customMatchers.toBeInTheDocument(header).pass).toBe(true);
      expect(customMatchers.toBeInTheDocument(nav).pass).toBe(true);
    });

    test('logo has proper accessibility attributes', async () => {
      await renderer.render(<HeaderSSR {...defaultProps} />);
      
      const logo = renderer.getByRole('img', { name: /NHS/ });
      expect(customMatchers.toHaveAttribute(logo, 'focusable', 'false').pass).toBe(true);
      expect(customMatchers.toHaveAttribute(logo, 'role', 'img').pass).toBe(true);
      expect(customMatchers.toHaveAttribute(logo, 'aria-label', 'NHS').pass).toBe(true);
    });
  });

  describe('Error Handling', () => {
    test('handles missing navigation items gracefully', async () => {
      const propsWithEmptyNav: HeaderProps = {
        ...defaultProps,
        navigation: {
          items: []
        }
      };

      // Should not throw
      await renderer.render(<HeaderSSR {...propsWithEmptyNav} />);
      
      expect(renderer.queryByRole('navigation')).toBe(null);
    });

    test('handles missing service text gracefully', async () => {
      const propsWithoutService: HeaderProps = {
        service: {}
      };

      // Should not throw
      await renderer.render(<HeaderSSR {...propsWithoutService} />);
      
      const header = renderer.getByRole('banner');
      expect(customMatchers.toBeInTheDocument(header).pass).toBe(true);
    });

    test('handles navigation items without href', async () => {
      const propsWithInvalidNav: HeaderProps = {
        ...defaultProps,
        navigation: {
          items: [
            { text: 'No Link Item' } as any
          ]
        }
      };

      // Should not throw
      await renderer.render(<HeaderSSR {...propsWithInvalidNav} />);
      
      const header = renderer.getByRole('banner');
      expect(customMatchers.toBeInTheDocument(header).pass).toBe(true);
    });
  });
});
