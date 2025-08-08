import React from 'react';
import { describe, it, test, expect, vi } from 'vitest';
import { HeaderSSR } from './HeaderSSR';
import type { HeaderProps } from './Header.types';
import { renderToString } from 'react-dom/server';
import { JSDOM } from 'jsdom';

// Mock CSS imports
vi.mock('./Header.scss', () => ({}));
vi.mock('./Header.ssr.scss', () => ({}));

// Test utility to render server-side and parse HTML (React 19 compatible)
class ServerRenderer {
  static render(element: React.ReactElement): HTMLElement {
    const htmlString = renderToString(element);
    // Handle preload links that might be included at the start
    const cleanHtml = htmlString.replace(/^<link[^>]*\/?>/, '');
    const dom = new JSDOM(`<!DOCTYPE html><html><body>${cleanHtml}</body></html>`);
    return dom.window.document.body.firstElementChild as HTMLElement;
  }

  static getByRole(container: HTMLElement, role: string): HTMLElement | null {
    // Check if the container itself has the role
    if (container.getAttribute('role') === role) {
      return container;
    }
    // Otherwise look for children with the role
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

  static getAllByRole(container: HTMLElement, role: string): HTMLElement[] {
    return Array.from(container.querySelectorAll(`[role="${role}"]`));
  }

  static querySelector(container: HTMLElement, selector: string): HTMLElement | null {
    return container.querySelector(selector);
  }

  static querySelectorAll(container: HTMLElement, selector: string): NodeListOf<HTMLElement> {
    return container.querySelectorAll(selector);
  }

  static getByPlaceholderText(container: HTMLElement, text: string): HTMLElement | null {
    return container.querySelector(`[placeholder*="${text}"]`);
  }

  static getByLabelText(container: HTMLElement, text: string): HTMLElement | null {
    // Look for elements with aria-label or associated labels
    const byAriaLabel = container.querySelector(`[aria-label*="${text}"]`) as HTMLElement;
    if (byAriaLabel) return byAriaLabel;
    
    // Look for labels and find associated inputs
    const labels = container.querySelectorAll('label');
    for (const label of labels) {
      if (label.textContent?.includes(text)) {
        const forAttr = label.getAttribute('for');
        if (forAttr) {
          return container.querySelector(`#${forAttr}`);
        }
        // Check for nested input
        const nestedInput = label.querySelector('input, textarea, select');
        if (nestedInput) return nestedInput as HTMLElement;
      }
    }
    return null;
  }

  static queryByRole(container: HTMLElement, role: string): HTMLElement | null {
    // Check if the container itself has the role
    if (container.getAttribute('role') === role) {
      return container;
    }
    // Otherwise look for children with the role
    return container.querySelector(`[role="${role}"]`);
  }
}

describe('HeaderSSR', () => {
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
    test('renders without any browser APIs', () => {
      // Server-side rendering doesn't use browser APIs
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} />);
      
      expect(container).toBeTruthy();
      expect(container.tagName.toLowerCase()).toBe('header');
    });

    test('uses no React hooks', () => {
      // Component should render successfully in SSR context
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} />);
      
      expect(container).toBeTruthy();
      expect(container.className).toContain('nhsuk-header');
    });

    test('renders with SSR identifier class', () => {
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      expect(header?.className).toBeDefined();
      expect(header?.className).toMatch(/nhsuk-header--ssr/);
    });

    test('includes progressive enhancement data attributes', () => {
      const container = ServerRenderer.render(<HeaderSSR {...navigationProps} />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      expect(header?.getAttribute('data-progressive-enhancement')).toBe('true');
      expect(header?.getAttribute('data-navigation-items-count')).toBe('6');
    });
  });

  describe('Basic Rendering', () => {
    test('renders header element with correct role', () => {
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      expect(header).toBeTruthy();
      expect(header?.tagName.toLowerCase()).toBe('header');
    });

    test('applies correct CSS classes', () => {
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} className="custom-class" />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      expect(header?.className).toBeDefined();
      expect(header?.className).toMatch(/nhsuk-header/);
      expect(header?.className).toMatch(/nhsuk-header--ssr/);
      expect(header?.className).toMatch(/custom-class/);
    });

    test('renders NHS logo by default', () => {
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} />);
      
      const logo = ServerRenderer.querySelector(container, '.nhsuk-header__logo');
      expect(logo).toBeTruthy();
      expect(logo?.tagName.toLowerCase()).toBe('svg');
    });

    test('renders service name when provided', () => {
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} />);
      
      const serviceName = ServerRenderer.getByText(container, 'NHS App');
      expect(serviceName).toBeTruthy();
      expect(serviceName?.className).toContain('nhsuk-header__service-name');
    });
  });

  describe('Logo Variants', () => {
    test('renders custom logo image when logo.src provided', () => {
      const propsWithCustomLogo: HeaderProps = {
        ...defaultProps,
        logo: {
          src: '/custom-logo.png',
          ariaLabel: 'Custom Organisation Logo'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithCustomLogo} />);
      
      const customLogo = ServerRenderer.querySelector(container, '.nhsuk-header__organisation-logo');
      expect(customLogo).toBeTruthy();
      expect(customLogo?.tagName.toLowerCase()).toBe('img');
      expect(customLogo?.getAttribute('src')).toBe('/custom-logo.png');
      expect(customLogo?.getAttribute('alt')).toBe('Custom Organisation Logo');
    });

    test('uses custom aria label for NHS logo', () => {
      const propsWithCustomLabel: HeaderProps = {
        ...defaultProps,
        logo: {
          ariaLabel: 'NHS Digital'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithCustomLabel} />);
      
      const logo = ServerRenderer.querySelector(container, '.nhsuk-header__logo');
      expect(logo?.getAttribute('aria-label')).toBe('NHS Digital');
    });
  });

  describe('Navigation', () => {
    test('renders navigation when items provided', () => {
      const container = ServerRenderer.render(<HeaderSSR {...navigationProps} />);
      
      const nav = ServerRenderer.getByRole(container, 'navigation');
      expect(nav).toBeTruthy();
      expect(nav?.className).toContain('nhsuk-header__navigation');
    });

    test('renders all navigation items (SSR behavior)', () => {
      const container = ServerRenderer.render(<HeaderSSR {...navigationProps} />);
      
      // All navigation items should be visible in SSR mode
      expect(ServerRenderer.getByText(container, 'Health A-Z')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Live Well')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Mental health')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Care and support')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Pregnancy')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'NHS services')).toBeTruthy();
    });

    test('applies correct navigation data attributes', () => {
      const container = ServerRenderer.render(<HeaderSSR {...navigationProps} />);
      
      const nav = ServerRenderer.getByRole(container, 'navigation');
      expect(nav?.getAttribute('data-navigation-enhanced')).toBe('false');
      expect(nav?.getAttribute('aria-label')).toBe('Primary navigation');
    });

    test('applies data attributes to navigation items', () => {
      const container = ServerRenderer.render(<HeaderSSR {...navigationProps} />);
      
      const navItems = ServerRenderer.querySelectorAll(container, 'li');
      navItems.forEach(item => {
        expect(item.getAttribute('data-navigation-item')).toBe('true');
      });
    });

    test('does not render navigation when no items provided', () => {
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} />);
      
      expect(ServerRenderer.queryByRole(container, 'navigation')).toBeNull();
    });

    test('uses custom navigation aria label', () => {
      const propsWithCustomNavLabel: HeaderProps = {
        ...navigationProps,
        navigation: {
          ...navigationProps.navigation!,
          ariaLabel: 'Custom navigation'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithCustomNavLabel} />);
      
      const nav = ServerRenderer.getByRole(container, 'navigation');
      expect(nav?.getAttribute('aria-label')).toBe('Custom navigation');
    });
  });

  describe('Search Functionality', () => {
    test('renders search form when search prop provided', () => {
      const propsWithSearch: HeaderProps = {
        ...defaultProps,
        search: {
          action: '/search',
          placeholder: 'Search the NHS website'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithSearch} />);
      
      const searchForm = ServerRenderer.getByRole(container, 'search');
      expect(searchForm).toBeTruthy();
      expect(searchForm?.getAttribute('action')).toBe('/search');
      expect(searchForm?.getAttribute('method')).toBe('get');
    });

    test('renders search input with correct attributes', () => {
      const propsWithSearch: HeaderProps = {
        ...defaultProps,
        search: {
          action: '/search',
          placeholder: 'Search the NHS website',
          name: 'query'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithSearch} />);
      
      const searchInput = ServerRenderer.getByPlaceholderText(container, 'Search the NHS website');
      expect(searchInput).toBeTruthy();
      expect(searchInput?.getAttribute('type')).toBe('search');
      expect(searchInput?.getAttribute('name')).toBe('query');
      expect(searchInput?.getAttribute('autocomplete')).toBe('off');
    });

    test('uses default search values when not provided', () => {
      const propsWithSearch: HeaderProps = {
        ...defaultProps,
        search: {}
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithSearch} />);
      
      const searchForm = ServerRenderer.getByRole(container, 'search');
      expect(searchForm?.getAttribute('action')).toBe('/search');
      
      const searchInput = ServerRenderer.getByPlaceholderText(container, 'Search');
      expect(searchInput?.getAttribute('name')).toBe('q');
    });

    test('includes visually hidden labels for accessibility', () => {
      const propsWithSearch: HeaderProps = {
        ...defaultProps,
        search: {
          visuallyHiddenLabel: 'Custom search label',
          visuallyHiddenButton: 'Custom search button'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithSearch} />);
      
      const searchLabel = ServerRenderer.getByText(container, 'Custom search label');
      const searchButton = ServerRenderer.getByText(container, 'Custom search button');
      
      expect(searchLabel?.className).toContain('nhsuk-u-visually-hidden');
      expect(searchButton?.className).toContain('nhsuk-u-visually-hidden');
    });
  });

  describe('Account Management', () => {
    test('renders account section when account prop provided', () => {
      const propsWithAccount: HeaderProps = {
        ...defaultProps,
        account: {
          items: [
            { text: 'Your account', href: '/account' },
            { text: 'Sign out', href: '/signout' }
          ]
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithAccount} />);
      
      expect(ServerRenderer.getByText(container, 'Your account')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Sign out')).toBeTruthy();
    });

    test('applies correct classes to account links', () => {
      const propsWithAccount: HeaderProps = {
        ...defaultProps,
        account: {
          items: [
            { text: 'Your account', href: '/account' }
          ]
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithAccount} />);
      
      const accountLink = ServerRenderer.getByText(container, 'Your account');
      expect(accountLink?.className).toContain('nhsuk-header__account-link');
      expect(accountLink?.parentElement?.className).toContain('nhsuk-header__account-item');
    });
  });

  describe('Organisation Variant', () => {
    test('applies organisation class when variant is organisation', () => {
      const propsWithOrganisation: HeaderProps = {
        ...defaultProps,
        variant: 'organisation'
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithOrganisation} />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      expect(header?.className).toBeDefined();
      expect(header?.className).toMatch(/nhsuk-header--organisation/);
    });

    test('renders organisation content area', () => {
      const propsWithOrganisation: HeaderProps = {
        ...defaultProps,
        variant: 'organisation',
        organisation: {
          name: 'NHS Digital',
          descriptor: 'Part of the NHS'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithOrganisation} />);
      
      expect(ServerRenderer.getByText(container, 'NHS Digital')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Part of the NHS')).toBeTruthy();
    });

    test('handles organisation with split text', () => {
      const propsWithOrganisation: HeaderProps = {
        ...defaultProps,
        organisation: {
          name: 'NHS Foundation',
          split: 'Trust'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithOrganisation} />);
      
      expect(ServerRenderer.getByText(container, 'NHS Foundation')).toBeTruthy();
      expect(ServerRenderer.getByText(container, 'Trust')).toBeTruthy();
    });
  });

  describe('White Variant', () => {
    test('applies white class when variant is white', () => {
      const propsWithWhite: HeaderProps = {
        ...defaultProps,
        variant: 'white'
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithWhite} />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      expect(header?.className).toBeDefined();
      expect(header?.className).toMatch(/nhsuk-header--white/);
    });
  });

  describe('Link Combinations', () => {
    test('combines logo and service name links when hrefs match', () => {
      const propsWithCombinedLinks: HeaderProps = {
        service: {
          text: 'NHS App',
          href: '/app'
        },
        logo: {
          href: '/app'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithCombinedLinks} />);
      
      const serviceLink = ServerRenderer.querySelector(container, '.nhsuk-header__service-logo');
      expect(serviceLink).toBeTruthy();
      expect(serviceLink?.getAttribute('href')).toBe('/app');
    });

    test('renders separate links when hrefs differ', () => {
      const propsWithSeparateLinks: HeaderProps = {
        service: {
          text: 'NHS App',
          href: '/app'
        },
        logo: {
          href: '/home'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithSeparateLinks} />);
      
      const serviceLink = ServerRenderer.getByText(container, 'NHS App');
      expect(serviceLink?.className).toContain('nhsuk-header__service-name');
      expect(serviceLink?.getAttribute('href')).toBe('/app');
    });
  });

  describe('Accessibility', () => {
    test('includes proper ARIA landmarks', () => {
      const container = ServerRenderer.render(<HeaderSSR {...navigationProps} />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      const nav = ServerRenderer.getByRole(container, 'navigation');
      
      expect(header).toBeTruthy();
      expect(nav).toBeTruthy();
    });

    test('logo has proper accessibility attributes', () => {
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} />);
      
      const logo = ServerRenderer.querySelector(container, '.nhsuk-header__logo');
      expect(logo?.getAttribute('focusable')).toBe('false');
      expect(logo?.getAttribute('role')).toBe('img');
      expect(logo?.getAttribute('aria-label')).toBe('NHS');
    });

    test('search form has proper labels', () => {
      const propsWithSearch: HeaderProps = {
        ...defaultProps,
        search: {
          action: '/search'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithSearch} />);
      
      const searchInput = ServerRenderer.getByLabelText(container, 'Search the NHS website');
      expect(searchInput).toBeTruthy();
    });

    test('navigation has proper structure', () => {
      const container = ServerRenderer.render(<HeaderSSR {...navigationProps} />);
      
      const nav = ServerRenderer.getByRole(container, 'navigation');
      const list = nav?.querySelector('ul');
      const items = nav?.querySelectorAll('li');
      
      expect(list?.className).toContain('nhsuk-header__navigation-list');
      expect(items?.length).toBe(6);
      
      items?.forEach(item => {
        const link = item.querySelector('a');
        expect(link?.className).toContain('nhsuk-header__navigation-link');
      });
    });
  });

  describe('Custom Attributes', () => {
    test('passes through custom attributes', () => {
      const customAttributes = {
        'data-testid': 'custom-header',
        'data-analytics': 'header'
      };

      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} attributes={customAttributes} />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      expect(header?.getAttribute('data-testid')).toBe('custom-header');
      expect(header?.getAttribute('data-analytics')).toBe('header');
    });

    test('accepts additional props', () => {
      const customProps: HeaderProps = {
        ...defaultProps,
        attributes: { id: 'header-main' }
      };
      
      const container = ServerRenderer.render(<HeaderSSR {...customProps} />);
      
      const header = ServerRenderer.getByRole(container, 'banner');
      expect(header?.getAttribute('id')).toBe('header-main');
    });
  });

  describe('Container Classes', () => {
    test('applies custom container classes', () => {
      const container = ServerRenderer.render(<HeaderSSR {...defaultProps} containerClasses="custom-container" />);
      
      const headerContainer = ServerRenderer.getByRole(container, 'banner')?.querySelector('.nhsuk-header__container');
      expect(headerContainer?.className).toBeDefined();
      expect(headerContainer?.className).toMatch(/nhsuk-header__container/);
      expect(headerContainer?.className).toMatch(/nhsuk-width-container/);
      expect(headerContainer?.className).toMatch(/custom-container/);
    });
  });

  describe('No JavaScript Functionality', () => {
    test('all links work without JavaScript', () => {
      const container = ServerRenderer.render(<HeaderSSR {...navigationProps} />);
      
      const links = ServerRenderer.querySelectorAll(container, 'a');
      links.forEach(link => {
        expect(link.getAttribute('href')).toBeTruthy();
      });
    });

    test('search form submits without JavaScript', () => {
      const propsWithSearch: HeaderProps = {
        ...defaultProps,
        search: {
          action: '/search'
        }
      };

      const container = ServerRenderer.render(<HeaderSSR {...propsWithSearch} />);
      
      const form = ServerRenderer.getByRole(container, 'search');
      expect(form?.getAttribute('method')).toBe('get');
      expect(form?.getAttribute('action')).toBe('/search');
    });
  });

  describe('Error Handling', () => {
    test('handles missing navigation items gracefully', () => {
      const propsWithEmptyNav: HeaderProps = {
        ...defaultProps,
        navigation: {
          items: []
        }
      };

      expect(() => {
        ServerRenderer.render(<HeaderSSR {...propsWithEmptyNav} />);
      }).not.toThrow();
      
      const container = ServerRenderer.render(<HeaderSSR {...propsWithEmptyNav} />);
      expect(ServerRenderer.queryByRole(container, 'navigation')).toBeNull();
    });

    test('handles missing service text gracefully', () => {
      const propsWithoutService: HeaderProps = {
        service: {}
      };

      expect(() => {
        ServerRenderer.render(<HeaderSSR {...propsWithoutService} />);
      }).not.toThrow();
    });

    test('handles navigation items without href', () => {
      const propsWithValidNav: HeaderProps = {
        ...defaultProps,
        navigation: {
          items: [
            { text: 'Valid Link Item', href: '/valid' }
          ]
        }
      };

      expect(() => {
        ServerRenderer.render(<HeaderSSR {...propsWithValidNav} />);
      }).not.toThrow();
    });
  });
});
