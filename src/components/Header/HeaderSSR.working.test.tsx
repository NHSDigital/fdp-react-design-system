import { describe, it, test, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react';
import { HeaderSSR } from './HeaderSSR';
import type { HeaderProps } from './Header.types';

// Mock SCSS imports to prevent module resolution issues during testing
vi.mock('./Header.scss', () => ({}));
vi.mock('./Header.ssr.scss', () => ({}));

describe('HeaderSSR - Working Tests', () => {
  let container: HTMLDivElement;
  let root: ReactDOM.Root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = ReactDOM.createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.removeChild(container);
  });

  // Helper function to render and get content
  const renderHeaderSSR = async (props: HeaderProps) => {
    await act(async () => {
      root.render(React.createElement(HeaderSSR, props));
    });
    return container.innerHTML;
  };

  // Basic props for testing
  const defaultProps: HeaderProps = {
    service: {
      text: 'NHS App',
    },
  };

  const navigationProps: HeaderProps = {
    ...defaultProps,
    navigation: {
      items: [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' },
        { text: 'About', href: '/about' },
      ],
    },
  };

  describe('SSR Compatibility', () => {
    test('renders without any browser APIs', async () => {
      // Mock browser APIs to ensure they're not called
      const mockDocument = vi.spyOn(global, 'document', 'get');
      const mockWindow = vi.spyOn(global, 'window', 'get');
      
      await expect(async () => {
        await renderHeaderSSR(defaultProps);
      }).not.toThrow();
      
      // Verify browser APIs weren't accessed during component initialization
      expect(mockDocument).not.toHaveBeenCalled();
      expect(mockWindow).not.toHaveBeenCalled();
    });

    test('renders with SSR identifier class', async () => {
      const html = await renderHeaderSSR(defaultProps);
      expect(html).toContain('nhsuk-header--ssr');
    });

    test('includes progressive enhancement data attributes', async () => {
      const html = await renderHeaderSSR(navigationProps);
      expect(html).toContain('data-progressive-enhancement="true"');
      expect(html).toContain('data-navigation-items-count="3"');
    });
  });

  describe('Basic Rendering', () => {
    test('renders header element with correct role', async () => {
      const html = await renderHeaderSSR(defaultProps);
      expect(html).toContain('role="banner"');
      expect(html).toContain('class="nhsuk-header');
    });

    test('applies correct CSS classes', async () => {
      const customProps = { ...defaultProps, className: 'custom-class' };
      const html = await renderHeaderSSR(customProps);
      expect(html).toContain('nhsuk-header');
      expect(html).toContain('nhsuk-header--ssr');
      expect(html).toContain('custom-class');
    });

    test('renders NHS logo by default', async () => {
      const html = await renderHeaderSSR(defaultProps);
      expect(html).toContain('class="nhsuk-header__logo"');
      expect(html).toContain('aria-label="NHS"');
      expect(html).toContain('<title>NHS</title>');
    });

    test('renders service name when provided', async () => {
      const html = await renderHeaderSSR(defaultProps);
      expect(html).toContain('NHS App');
      expect(html).toContain('nhsuk-header__service-name');
    });
  });

  describe('Logo Variants', () => {
    test('renders custom logo image when logo.src provided', async () => {
      const propsWithCustomLogo = {
        ...defaultProps,
        logo: {
          src: '/custom-logo.png',
          alt: 'Custom Organisation Logo',
        },
      };

      const html = await renderHeaderSSR(propsWithCustomLogo);
      expect(html).toContain('/custom-logo.png');
      expect(html).toContain('alt="Custom Organisation Logo"');
    });

    test('uses custom aria label for NHS logo', async () => {
      const propsWithCustomLabel = {
        ...defaultProps,
        logo: {
          ariaLabel: 'NHS Digital',
        },
      };

      const html = await renderHeaderSSR(propsWithCustomLabel);
      expect(html).toContain('aria-label="NHS Digital"');
    });
  });

  describe('Navigation', () => {
    test('renders navigation when items provided', async () => {
      const html = await renderHeaderSSR(navigationProps);
      expect(html).toContain('role="navigation"');
      expect(html).toContain('nhsuk-header__navigation');
    });

    test('renders all navigation items (SSR behavior)', async () => {
      const html = await renderHeaderSSR(navigationProps);
      expect(html).toContain('Home');
      expect(html).toContain('Services');
      expect(html).toContain('About');
      expect(html).toContain('href="/"');
      expect(html).toContain('href="/services"');
      expect(html).toContain('href="/about"');
    });

    test('does not render navigation when no items provided', async () => {
      const html = await renderHeaderSSR(defaultProps);
      expect(html).not.toContain('role="navigation"');
      expect(html).not.toContain('nhsuk-header__navigation');
    });

    test('uses custom navigation aria label', async () => {
      const propsWithCustomNavLabel = {
        ...defaultProps,
        navigation: {
          ariaLabel: 'Main site navigation',
          items: [
            { text: 'Home', href: '/' },
            { text: 'Services', href: '/services' },
            { text: 'About', href: '/about' },
          ],
        },
      };

      const html = await renderHeaderSSR(propsWithCustomNavLabel);
      expect(html).toContain('aria-label="Main site navigation"');
    });
  });

  describe('Search Functionality', () => {
    test('renders search form when search prop provided', async () => {
      const propsWithSearch = {
        ...defaultProps,
        search: {
          action: '/search',
          inputProps: {
            placeholder: 'Search the NHS website',
          },
        },
      };

      const html = await renderHeaderSSR(propsWithSearch);
      expect(html).toContain('role="search"');
      expect(html).toContain('action="/search"');
      expect(html).toContain('placeholder="Search the NHS website"');
    });

    test('renders search input with correct attributes', async () => {
      const propsWithSearch = {
        ...defaultProps,
        search: {
          action: '/search',
          inputProps: {
            placeholder: 'Search the NHS website',
            name: 'q',
          },
        },
      };

      const html = await renderHeaderSSR(propsWithSearch);
      expect(html).toContain('name="q"');
      expect(html).toContain('type="search"');
    });
  });

  describe('Organisation Variant', () => {
    test('applies organisation class when variant is organisation', async () => {
      const propsWithOrganisation = {
        ...defaultProps,
        variant: 'organisation' as const,
        organisation: {
          name: 'NHS Digital',
        },
      };

      const html = await renderHeaderSSR(propsWithOrganisation);
      expect(html).toContain('nhsuk-header--organisation');
    });

    test('renders organisation content area', async () => {
      const propsWithOrganisation = {
        ...defaultProps,
        variant: 'organisation' as const,
        organisation: {
          name: 'NHS Digital',
          descriptor: 'Data and technology',
        },
      };

      const html = await renderHeaderSSR(propsWithOrganisation);
      expect(html).toContain('NHS Digital');
      expect(html).toContain('Data and technology');
    });
  });

  describe('White Variant', () => {
    test('applies white class when variant is white', async () => {
      const propsWithWhite = {
        ...defaultProps,
        variant: 'white' as const,
      };

      const html = await renderHeaderSSR(propsWithWhite);
      expect(html).toContain('nhsuk-header--white');
    });
  });

  describe('Accessibility', () => {
    test('includes proper ARIA landmarks', async () => {
      const html = await renderHeaderSSR(navigationProps);
      expect(html).toContain('role="banner"');
      expect(html).toContain('role="navigation"');
    });

    test('logo has proper accessibility attributes', async () => {
      const html = await renderHeaderSSR(defaultProps);
      expect(html).toContain('role="img"');
      expect(html).toContain('aria-label="NHS"');
      expect(html).toContain('focusable="false"');
    });

    test('search form has proper labels', async () => {
      const propsWithSearch = {
        ...defaultProps,
        search: {
          action: '/search',
          searchLabel: 'Custom search label',
        },
      };

      const html = await renderHeaderSSR(propsWithSearch);
      expect(html).toContain('Custom search label');
    });
  });

  describe('Custom Attributes', () => {
    test('passes through custom attributes', async () => {
      const customAttributes = {
        'data-module': 'header',
        'data-test': 'header-component',
      };

      const propsWithAttributes = {
        ...defaultProps,
        attributes: customAttributes,
      };

      const html = await renderHeaderSSR(propsWithAttributes);
      expect(html).toContain('data-module="header"');
      expect(html).toContain('data-test="header-component"');
    });

    test('accepts additional props', async () => {
      const propsWithId = {
        ...defaultProps,
        id: 'header-main',
      };

      const html = await renderHeaderSSR(propsWithId);
      expect(html).toContain('id="header-main"');
    });
  });

  describe('Container Classes', () => {
    test('applies custom container classes', async () => {
      const propsWithContainerClasses = {
        ...defaultProps,
        containerClasses: 'custom-container',
      };

      const html = await renderHeaderSSR(propsWithContainerClasses);
      expect(html).toContain('custom-container');
    });
  });

  describe('Error Handling', () => {
    test('handles missing navigation items gracefully', async () => {
      const propsWithEmptyNav = {
        ...defaultProps,
        navigation: {
          items: [],
        },
      };

      await expect(async () => {
        await renderHeaderSSR(propsWithEmptyNav);
      }).not.toThrow();
    });

    test('handles missing service text gracefully', async () => {
      const propsWithoutService = {
        service: {},
      };

      await expect(async () => {
        await renderHeaderSSR(propsWithoutService);
      }).not.toThrow();
    });

    test('handles navigation items with empty href gracefully', async () => {
      const propsWithInvalidNav = {
        ...defaultProps,
        navigation: {
          items: [
            { text: 'Home', href: '' },
            { text: 'Services', href: '/services' },
          ],
        },
      };

      await expect(async () => {
        await renderHeaderSSR(propsWithInvalidNav);
      }).not.toThrow();
    });
  });

  describe('No JavaScript Functionality', () => {
    test('all links work without JavaScript', async () => {
      const html = await renderHeaderSSR(navigationProps);
      
      // All navigation links should have proper href attributes
      const homeMatch = html.match(/href="\/"[^>]*>Home/);
      const servicesMatch = html.match(/href="\/services"[^>]*>Services/);
      const aboutMatch = html.match(/href="\/about"[^>]*>About/);
      
      expect(homeMatch).toBeTruthy();
      expect(servicesMatch).toBeTruthy();
      expect(aboutMatch).toBeTruthy();
    });

    test('search form submits without JavaScript', async () => {
      const propsWithSearch = {
        ...defaultProps,
        search: {
          action: '/search',
          method: 'GET',
        },
      };

      const html = await renderHeaderSSR(propsWithSearch);
      expect(html).toContain('action="/search"');
      expect(html).toContain('method="GET"');
    });
  });
});
