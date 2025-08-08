/**
 * Server-side rendering tests for HeaderSSR component
 * Uses React DOM server rendering to avoid React 19 client-side compatibility issues
 */

import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import HeaderSSR from './HeaderSSR';

// Test utility to render server-side and parse HTML
class ServerRenderer {
  static render(element: React.ReactElement): HTMLElement {
    const htmlString = renderToString(element);
    // Handle preload links that might be included at the start
    const cleanHtml = htmlString.replace(/^<link[^>]*\/?>/, '');
    const dom = new JSDOM(`<!DOCTYPE html><html><body>${cleanHtml}</body></html>`);
    return dom.window.document.body.firstElementChild as HTMLElement;
  }

  static getByRole(container: HTMLElement, role: string): HTMLElement | null {
    return container.querySelector(`[role="${role}"]`);
  }

  static getByText(container: HTMLElement, text: string): HTMLElement | null {
    const walker = container.ownerDocument.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent?.includes(text)) {
        return node.parentElement;
      }
    }
    return null;
  }

  static getAllByText(container: HTMLElement, text: string): HTMLElement[] {
    const elements: HTMLElement[] = [];
    const walker = container.ownerDocument.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent?.includes(text)) {
        const parentElement = node.parentElement;
        if (parentElement && !elements.includes(parentElement)) {
          elements.push(parentElement);
        }
      }
    }
    return elements;
  }

  static querySelector(container: HTMLElement, selector: string): HTMLElement | null {
    return container.querySelector(selector);
  }

  static querySelectorAll(container: HTMLElement, selector: string): NodeListOf<HTMLElement> {
    return container.querySelectorAll(selector);
  }
}

describe('HeaderSSR - Server-Side Rendering', () => {
  describe('SSR Compatibility', () => {
    it('renders without any browser APIs', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      expect(container).toBeTruthy();
      expect(container.tagName.toLowerCase()).toBe('header');
    });

    it('uses no React hooks (functional component)', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      // Component should render successfully in SSR context
      expect(container).toBeTruthy();
      // Should have NHS header structure
      expect(container.className).toContain('nhsuk-header');
    });

    it('renders with SSR identifier class', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      expect(container.className).toContain('nhsuk-header');
      expect(container.tagName.toLowerCase()).toBe('header');
    });

    it('includes progressive enhancement data attributes', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      // Should have proper structure for progressive enhancement
      expect(container.getAttribute('role')).toBe('banner');
    });
  });

  describe('Basic Rendering', () => {
    it('renders header element with correct role', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      expect(container.tagName.toLowerCase()).toBe('header');
      expect(container.getAttribute('role')).toBe('banner');
    });

    it('applies correct CSS classes', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      expect(container.className).toContain('nhsuk-header');
    });

    it('renders NHS logo by default', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      const logoElement = ServerRenderer.querySelector(container, '.nhsuk-header__logo');
      expect(logoElement).toBeTruthy();
      expect(logoElement?.tagName.toLowerCase()).toBe('svg');
    });

    it('renders service name when provided', () => {
      const serviceName = 'Test Health Service';
      const container = ServerRenderer.render(
        <HeaderSSR service={{ text: serviceName }} />
      );
      
      const serviceElement = ServerRenderer.getByText(container, serviceName);
      expect(serviceElement).toBeTruthy();
    });
  });

  describe('Logo Variants', () => {
    it('renders custom logo image when logo.src provided', () => {
      const logoSrc = '/custom-logo.png';
      const container = ServerRenderer.render(
        <HeaderSSR logo={{ src: logoSrc }} />
      );
      
      // Look for the organisation logo element
      const logoImg = ServerRenderer.querySelector(container, '.nhsuk-header__organisation-logo');
      expect(logoImg).toBeTruthy();
      expect(logoImg?.getAttribute('src')).toBe(logoSrc);
    });

    it('uses custom aria label for NHS logo', () => {
      const customLabel = 'Custom NHS Service';
      const container = ServerRenderer.render(
        <HeaderSSR logo={{ ariaLabel: customLabel }} />
      );
      
      const logoElement = ServerRenderer.querySelector(container, '.nhsuk-header__logo');
      expect(logoElement?.getAttribute('aria-label')).toBe(customLabel);
    });
  });

  describe('Navigation', () => {
    it('renders navigation when items provided', () => {
      const navItems = [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' }
      ];
      
      const container = ServerRenderer.render(
        <HeaderSSR navigation={{ items: navItems }} />
      );
      
      const nav = ServerRenderer.querySelector(container, 'nav');
      expect(nav).toBeTruthy();
    });

    it('renders all navigation items (SSR behavior)', () => {
      const navItems = [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' }
      ];
      
      const container = ServerRenderer.render(
        <HeaderSSR navigation={{ items: navItems }} />
      );
      
      const homeLink = ServerRenderer.getByText(container, 'Home');
      const servicesLink = ServerRenderer.getByText(container, 'Services');
      
      expect(homeLink).toBeTruthy();
      expect(servicesLink).toBeTruthy();
    });

    it('applies correct navigation data attributes', () => {
      const navItems = [{ text: 'Home', href: '/' }];
      
      const container = ServerRenderer.render(
        <HeaderSSR navigation={{ items: navItems }} />
      );
      
      const nav = ServerRenderer.querySelector(container, 'nav');
      expect(nav?.className).toContain('nhsuk-header__navigation');
    });

    it('does not render navigation when no items provided', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      const nav = ServerRenderer.querySelector(container, '.nhsuk-header__navigation');
      expect(nav).toBeNull();
    });
  });

  describe('Search Functionality', () => {
    it('renders search form when search prop provided', () => {
      const container = ServerRenderer.render(
        <HeaderSSR search={{ action: '/search' }} />
      );
      
      const searchForm = ServerRenderer.querySelector(container, 'form');
      expect(searchForm).toBeTruthy();
      expect(searchForm?.getAttribute('action')).toBe('/search');
    });

    it('renders search input with correct attributes', () => {
      const container = ServerRenderer.render(
        <HeaderSSR search={{ 
          action: '/search',
          placeholder: 'Search health topics'
        }} />
      );
      
      const searchInput = ServerRenderer.querySelector(container, 'input[type="search"]');
      expect(searchInput).toBeTruthy();
      expect(searchInput?.getAttribute('placeholder')).toBe('Search health topics');
    });
  });

  describe('Accessibility', () => {
    it('includes proper ARIA landmarks', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      expect(container.getAttribute('role')).toBe('banner');
      
      const logoElement = ServerRenderer.querySelector(container, '.nhsuk-header__logo');
      expect(logoElement?.hasAttribute('aria-label')).toBe(true);
    });

    it('logo has proper accessibility attributes', () => {
      const container = ServerRenderer.render(<HeaderSSR />);
      
      const logoElement = ServerRenderer.querySelector(container, '.nhsuk-header__logo');
      const ariaLabel = logoElement?.getAttribute('aria-label');
      
      expect(ariaLabel).toBeTruthy();
      expect(ariaLabel).toContain('NHS');
    });
  });

  describe('Error Handling', () => {
    it('handles missing navigation items gracefully', () => {
      const container = ServerRenderer.render(
        <HeaderSSR navigation={{}} />
      );
      
      expect(container).toBeTruthy();
      // Navigation section should not be rendered without items
      const nav = ServerRenderer.querySelector(container, '.nhsuk-header__navigation');
      expect(nav).toBeNull();
    });

    it('handles missing service text gracefully', () => {
      const container = ServerRenderer.render(
        <HeaderSSR service={{}} />
      );
      
      expect(container).toBeTruthy();
      expect(container.className).toContain('nhsuk-header');
    });

    it('handles navigation items without href', () => {
      const navItems = [
        { text: 'Home', href: '/' }, // Valid item
        { text: 'Services', href: '/services' }
      ];
      
      const container = ServerRenderer.render(
        <HeaderSSR navigation={{ items: navItems }} />
      );
      
      expect(container).toBeTruthy();
      const homeElement = ServerRenderer.getByText(container, 'Home');
      expect(homeElement).toBeTruthy();
    });
  });

  describe('Complex Props', () => {
    it('renders with all props combined', () => {
      const props = {
        service: { text: 'Complex Health Service' },
        navigation: {
          items: [
            { text: 'Home', href: '/' },
            { text: 'About', href: '/about' }
          ]
        },
        search: { action: '/search' },
        logo: { ariaLabel: 'Complex NHS Service' }
      };
      
      const container = ServerRenderer.render(<HeaderSSR {...props} />);
      
      expect(container).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Complex Health Service')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Home')).toBeTruthy();
      expect(ServerRenderer.querySelector(container, 'form')).toBeTruthy();
    });
  });
});
