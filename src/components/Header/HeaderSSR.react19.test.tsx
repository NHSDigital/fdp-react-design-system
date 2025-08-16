import { describe, test, expect, vi } from 'vitest';
import { HeaderSSR } from './HeaderSSR';
import type { HeaderProps } from './Header.types';
import { renderSSR } from '../../test-utils/renderSSR';

// Mock CSS imports
vi.mock('./Header.scss', () => ({}));
vi.mock('./Header.ssr.scss', () => ({}));

describe('HeaderSSR - React 19 (Unified SSR)', () => {

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
    test('renders without console errors (SSR only)', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const { getByRole } = renderSSR(<HeaderSSR {...defaultProps} />);
      expect(getByRole('banner')).toBeTruthy();
      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    test('SSR output contains required classes', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...defaultProps} />);
      const header = getByRole('banner');
      expect(header.className).toContain('nhsuk-header');
    });

    test('renders with SSR identifier class', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...defaultProps} />);
      const header = getByRole('banner');
      expect(header.className).toContain('nhsuk-header--ssr');
    });

    test('includes progressive enhancement data attributes', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...navigationProps} />);
      const header = getByRole('banner');
      expect(header.getAttribute('data-progressive-enhancement')).toBe('true');
      expect(header.getAttribute('data-navigation-items-count')).toBe('6');
    });
  });

  describe('Basic Rendering', () => {
    test('renders header element with correct role', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...defaultProps} />);
      const header = getByRole('banner');
      expect(header.tagName).toBe('HEADER');
    });

    test('applies correct CSS classes', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...defaultProps} className="custom-class" />);
      const header = getByRole('banner');
      expect(header.className).toContain('nhsuk-header');
      expect(header.className).toContain('nhsuk-header--ssr');
      expect(header.className).toContain('custom-class');
    });

    test('renders NHS logo by default', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...defaultProps} />);
      const logo = getByRole('img', { name: /NHS/ });
      expect(logo.tagName).toBe('svg');
  // In JSDOM SVG className can be an SVGAnimatedString; use getAttribute for robustness
  expect(logo.getAttribute('class') || '').toContain('nhsuk-header__logo');
    });

    test('renders service name when provided', () => {
      const { getByText } = renderSSR(<HeaderSSR {...defaultProps} />);
      const serviceName = getByText('NHS App');
      expect(serviceName.className).toContain('nhsuk-header__service-name');
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
      const { getByRole } = renderSSR(<HeaderSSR {...propsWithCustomLogo} />);
      const customLogo = getByRole('img', { name: 'Custom Organisation Logo' });
      expect(customLogo.tagName).toBe('IMG');
      expect(customLogo.className).toContain('nhsuk-header__organisation-logo');
      expect(customLogo.getAttribute('src')).toBe('/custom-logo.png');
    });

    test('uses custom aria label for NHS logo', () => {
      const propsWithCustomLabel: HeaderProps = {
        ...defaultProps,
        logo: {
          ariaLabel: 'NHS Digital'
        }
      };
      const { getByRole } = renderSSR(<HeaderSSR {...propsWithCustomLabel} />);
      getByRole('img', { name: 'NHS Digital' });
    });
  });

  describe('Navigation', () => {
    test('renders navigation when items provided', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...navigationProps} />);
      const nav = getByRole('navigation');
      expect(nav.className).toContain('nhsuk-header__navigation');
    });

    test('renders all navigation items (SSR behavior)', () => {
      const { getByText } = renderSSR(<HeaderSSR {...navigationProps} />);
      getByText('Health A-Z');
      getByText('Live Well');
      getByText('Mental health');
      getByText('Care and support');
      getByText('Pregnancy');
      getByText('NHS services');
    });

    test('applies correct navigation data attributes', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...navigationProps} />);
      const nav = getByRole('navigation');
      expect(nav.getAttribute('data-navigation-enhanced')).toBe('false');
      expect(nav.getAttribute('aria-label')).toBe('Primary navigation');
    });

    test('does not render navigation when no items provided', () => {
      const { container } = renderSSR(<HeaderSSR {...defaultProps} />);
      expect(container.querySelector('[role="navigation"]')).toBeFalsy();
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
      const { getByRole } = renderSSR(<HeaderSSR {...propsWithSearch} />);
      const searchForm = getByRole('search');
      expect(searchForm.getAttribute('action')).toBe('/search');
      expect(searchForm.getAttribute('method')).toBe('get');
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
      const { container } = renderSSR(<HeaderSSR {...propsWithSearch} />);
      const searchInput = container.querySelector('[placeholder="Search the NHS website"]') as HTMLElement;
      expect(searchInput.getAttribute('type')).toBe('search');
      expect(searchInput.getAttribute('name')).toBe('query');
      expect(searchInput.getAttribute('autocomplete')).toBe('off');
    });
  });

  describe('Accessibility', () => {
    test('includes proper ARIA landmarks', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...navigationProps} />);
      getByRole('banner');
      getByRole('navigation');
    });

    test('logo has proper accessibility attributes', () => {
      const { getByRole } = renderSSR(<HeaderSSR {...defaultProps} />);
      const logo = getByRole('img', { name: /NHS/ });
      expect(logo.getAttribute('focusable')).toBe('false');
      expect(logo.getAttribute('role')).toBe('img');
      expect(logo.getAttribute('aria-label')).toBe('NHS');
    });
  });

  describe('Error Handling', () => {
    test('handles missing navigation items gracefully', () => {
      const propsWithEmptyNav: HeaderProps = {
        ...defaultProps,
        navigation: { items: [] }
      };
      const { container } = renderSSR(<HeaderSSR {...propsWithEmptyNav} />);
      expect(container.querySelector('[role="navigation"]')).toBeFalsy();
    });

    test('handles missing service text gracefully', () => {
      const propsWithoutService: HeaderProps = { service: {} } as any;
      const { getByRole } = renderSSR(<HeaderSSR {...propsWithoutService} />);
      getByRole('banner');
    });

    test('handles navigation items without href', () => {
      const propsWithInvalidNav: HeaderProps = {
        ...defaultProps,
        navigation: { items: [ { text: 'No Link Item' } as any ] }
      };
      const { getByRole } = renderSSR(<HeaderSSR {...propsWithInvalidNav} />);
      getByRole('banner');
    });
  });
});
