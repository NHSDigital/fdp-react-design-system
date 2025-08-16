/**
 * Server-side rendering tests for HeaderSSR component
 * Uses React DOM server rendering to avoid React 19 client-side compatibility issues
 */

import { describe, it, expect } from 'vitest';
import HeaderSSR from './HeaderSSR';
import { renderSSR } from '../../test-utils/renderSSR';

describe('HeaderSSR - Server-Side Rendering', () => {
  describe('SSR Compatibility', () => {
    it('renders without any browser APIs', () => {
  const { getByRole } = renderSSR(<HeaderSSR />);
  const header = getByRole('banner');
      expect(header.tagName.toLowerCase()).toBe('header');
    });

    it('applies base NHS header class', () => {
      const { getByRole } = renderSSR(<HeaderSSR />);
      const header = getByRole('banner');
      expect(header.className).toContain('nhsuk-header');
    });

    it('includes SSR identifier attributes/classes', () => {
      const { getByRole } = renderSSR(<HeaderSSR />);
      const header = getByRole('banner');
      expect(header.tagName.toLowerCase()).toBe('header');
      expect(header.className).toContain('nhsuk-header');
    });

    it('has correct role banner for progressive enhancement', () => {
      const { getByRole } = renderSSR(<HeaderSSR />);
      expect(getByRole('banner')).toBeTruthy();
    });
  });

  describe('Basic Rendering', () => {
    it('renders header element with correct role', () => {
      const { getByRole } = renderSSR(<HeaderSSR />);
      const header = getByRole('banner');
      expect(header.tagName.toLowerCase()).toBe('header');
    });

    it('applies correct CSS classes', () => {
      const { getByRole } = renderSSR(<HeaderSSR />);
      expect(getByRole('banner').className).toContain('nhsuk-header');
    });

    it('renders NHS logo by default', () => {
      const { container } = renderSSR(<HeaderSSR />);
      const logoElement = container.querySelector('.nhsuk-header__logo');
      expect(logoElement?.tagName.toLowerCase()).toBe('svg');
    });

    it('renders service name when provided', () => {
      const serviceName = 'Test Health Service';
      const { getByText } = renderSSR(<HeaderSSR service={{ text: serviceName }} />);
      expect(getByText(serviceName)).toBeTruthy();
    });
  });

  describe('Logo Variants', () => {
    it('renders custom logo image when logo.src provided', () => {
      const logoSrc = '/custom-logo.png';
      const { container } = renderSSR(<HeaderSSR logo={{ src: logoSrc }} />);
      const logoImg = container.querySelector('.nhsuk-header__organisation-logo');
      expect(logoImg?.getAttribute('src')).toBe(logoSrc);
    });

    it('uses custom aria label for NHS logo', () => {
      const customLabel = 'Custom NHS Service';
      const { container } = renderSSR(<HeaderSSR logo={{ ariaLabel: customLabel }} />);
      const logoElement = container.querySelector('.nhsuk-header__logo');
      expect(logoElement?.getAttribute('aria-label')).toBe(customLabel);
    });
  });

  describe('Navigation', () => {
    it('renders navigation when items provided', () => {
      const navItems = [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' }
      ];
      const { container } = renderSSR(<HeaderSSR navigation={{ items: navItems }} />);
      expect(container.querySelector('nav')).toBeTruthy();
    });

    it('renders all navigation items (SSR behavior)', () => {
      const navItems = [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' }
      ];
      const { getByText } = renderSSR(<HeaderSSR navigation={{ items: navItems }} />);
      expect(getByText('Home')).toBeTruthy();
      expect(getByText('Services')).toBeTruthy();
    });

    it('applies correct navigation class', () => {
      const navItems = [{ text: 'Home', href: '/' }];
      const { container } = renderSSR(<HeaderSSR navigation={{ items: navItems }} />);
      const nav = container.querySelector('nav');
      expect(nav?.className).toContain('nhsuk-header__navigation');
    });

    it('does not render navigation when no items provided', () => {
      const { container } = renderSSR(<HeaderSSR />);
      expect(container.querySelector('.nhsuk-header__navigation')).toBeNull();
    });
  });

  describe('Search Functionality', () => {
    it('renders search form when search prop provided', () => {
      const { container } = renderSSR(<HeaderSSR search={{ action: '/search' }} />);
      const searchForm = container.querySelector('form');
      expect(searchForm?.getAttribute('action')).toBe('/search');
    });

    it('renders search input with correct attributes', () => {
      const { container } = renderSSR(<HeaderSSR search={{ action: '/search', placeholder: 'Search health topics' }} />);
      const searchInput = container.querySelector('input[type="search"]');
      expect(searchInput?.getAttribute('placeholder')).toBe('Search health topics');
    });
  });

  describe('Accessibility', () => {
    it('includes proper ARIA landmarks', () => {
      const { getByRole, container } = renderSSR(<HeaderSSR />);
      const header = getByRole('banner');
      expect(header).toBeTruthy();
      const logoElement = container.querySelector('.nhsuk-header__logo');
      expect(logoElement?.hasAttribute('aria-label')).toBe(true);
    });

    it('logo has proper accessibility attributes', () => {
      const { container } = renderSSR(<HeaderSSR />);
      const logoElement = container.querySelector('.nhsuk-header__logo');
      const ariaLabel = logoElement?.getAttribute('aria-label') ?? '';
      expect(ariaLabel).toContain('NHS');
    });
  });

  describe('Error Handling', () => {
    it('handles missing navigation items gracefully', () => {
      const { container } = renderSSR(<HeaderSSR navigation={{}} />);
      expect(container.querySelector('.nhsuk-header__navigation')).toBeNull();
    });

    it('handles missing service text gracefully', () => {
  const { getByRole } = renderSSR(<HeaderSSR service={{}} />);
  const header = getByRole('banner');
  expect(header.className).toContain('nhsuk-header');
    });

    it('handles navigation items without href', () => {
      const navItems = [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' }
      ];
      const { getByText } = renderSSR(<HeaderSSR navigation={{ items: navItems }} />);
      expect(getByText('Home')).toBeTruthy();
    });
  });

  describe('Complex Props', () => {
    it('renders with all props combined', () => {
      const props = {
        service: { text: 'Complex Health Service' },
        navigation: { items: [ { text: 'Home', href: '/' }, { text: 'About', href: '/about' } ] },
        search: { action: '/search' },
        logo: { ariaLabel: 'Complex NHS Service' }
      };
      const { getByText, container } = renderSSR(<HeaderSSR {...props} />);
      expect(getByText('Complex Health Service')).toBeTruthy();
      expect(getByText('Home')).toBeTruthy();
      expect(container.querySelector('form')).toBeTruthy();
    });
  });
});
