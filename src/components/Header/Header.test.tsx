import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';
import type { HeaderProps } from './Header.types';

describe('Header', () => {
  it('renders with basic props', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('nhsuk-header');
  });

  it('renders NHS logo by default', () => {
    render(<Header />);
    
    const logo = screen.getByRole('img', { name: /NHS/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('nhsuk-header__logo');
  });

  it('renders custom logo when provided', () => {
    const props: HeaderProps = {
      logo: {
        src: '/custom-logo.png',
        ariaLabel: 'Custom Logo'
      }
    };

    render(<Header {...props} />);
    
    const logo = screen.getByRole('img', { name: 'Custom Logo' });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('nhsuk-header__organisation-logo');
    expect(logo).toHaveAttribute('src', '/custom-logo.png');
  });

  it('renders service name', () => {
    const props: HeaderProps = {
      service: {
        text: 'NHS Digital Service'
      }
    };

    render(<Header {...props} />);
    
    expect(screen.getByText('NHS Digital Service')).toBeInTheDocument();
  });

  it('renders service name as link when href provided', () => {
    const props: HeaderProps = {
      logo: {
        href: '/logo'  // Different href to prevent combining
      },
      service: {
        text: 'NHS Digital Service',
        href: '/service'
      }
    };

    render(<Header {...props} />);
    
    const link = screen.getByRole('link', { name: 'NHS Digital Service' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/service');
  });

  it('combines logo and service name links when hrefs match', () => {
    const props: HeaderProps = {
      logo: {
        href: '/home'
      },
      service: {
        text: 'NHS Digital Service',
        href: '/home'
      }
    };

    render(<Header {...props} />);
    
    // Should have one combined link, not separate ones
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', '/home');
    expect(links[0]).toHaveTextContent('NHS Digital Service');
  });

  it('renders organisation variant correctly', () => {
    const props: HeaderProps = {
      variant: 'organisation',
      organisation: {
        name: 'NHS Trust',
        split: 'Foundation',
        descriptor: 'Leading Healthcare'
      }
    };

    render(<Header {...props} />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('nhsuk-header--organisation');
    
    expect(screen.getByText('NHS Trust')).toBeInTheDocument();
    expect(screen.getByText('Foundation')).toBeInTheDocument();
    expect(screen.getByText('Leading Healthcare')).toBeInTheDocument();
  });

  it('renders white variant correctly', () => {
    const props: HeaderProps = {
      variant: 'white'
    };

    render(<Header {...props} />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('nhsuk-header--white');
  });

  it('renders search functionality', () => {
    const props: HeaderProps = {
      search: {
        action: '/search',
        name: 'query',
        placeholder: 'Search NHS',
        visuallyHiddenLabel: 'Search the NHS',
        visuallyHiddenButton: 'Submit search'
      }
    };

    render(<Header {...props} />);
    
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('placeholder', 'Search NHS');
    expect(searchInput).toHaveAttribute('name', 'query');
    
    const searchForm = searchInput.closest('form');
    expect(searchForm).toHaveAttribute('action', '/search');
    
    const searchButton = screen.getByRole('button', { name: /Submit search/i });
    expect(searchButton).toBeInTheDocument();
    
    const searchLabel = screen.getByLabelText('Search the NHS');
    expect(searchLabel).toBeInTheDocument();
  });

  it('renders account navigation', () => {
    const props: HeaderProps = {
      account: {
        ariaLabel: 'User account',
        items: [
          {
            href: '/profile',
            text: 'Your profile',
            icon: true
          },
          {
            action: '/logout',
            method: 'post',
            text: 'Sign out'
          },
          {
            text: 'Static item'
          }
        ]
      }
    };

    render(<Header {...props} />);
    
    const accountNav = screen.getByRole('navigation', { name: 'User account' });
    expect(accountNav).toBeInTheDocument();
    
    const profileLink = screen.getByRole('link', { name: /Your profile/i });
    expect(profileLink).toHaveAttribute('href', '/profile');
    
    const signOutButton = screen.getByRole('button', { name: 'Sign out' });
    expect(signOutButton).toBeInTheDocument();
    
    expect(screen.getByText('Static item')).toBeInTheDocument();
    
    // Check for user icon
    const userIcon = accountNav.querySelector('.nhsuk-icon__user');
    expect(userIcon).toBeInTheDocument();
  });

  it('renders navigation with current page indicator', () => {
    const props: HeaderProps = {
      navigation: {
        ariaLabel: 'Main navigation',
        items: [
          {
            href: '/home',
            text: 'Home'
          },
          {
            href: '/services',
            text: 'Services',
            current: true
          },
          {
            href: '/about',
            text: 'About',
            active: true
          }
        ]
      }
    };

    render(<Header {...props} />);
    
    const mainNav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(mainNav).toBeInTheDocument();
    
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/home');
    expect(homeLink).not.toHaveAttribute('aria-current');
    
    const servicesLink = screen.getByRole('link', { name: 'Services' });
    expect(servicesLink).toHaveAttribute('aria-current', 'page');
    
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toHaveAttribute('aria-current', 'true');
  });

  it('renders navigation with HTML content', () => {
    const props: HeaderProps = {
      navigation: {
        items: [
          {
            href: '/special',
            html: '<span class="icon">🏥</span> Hospital Services'
          }
        ]
      }
    };

    render(<Header {...props} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('🏥 Hospital Services');
    expect(link.querySelector('.icon')).toBeInTheDocument();
  });

  it('renders white navigation variant', () => {
    const props: HeaderProps = {
      navigation: {
        white: true,
        items: [
          {
            href: '/home',
            text: 'Home'
          }
        ]
      }
    };

    render(<Header {...props} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nhsuk-header__navigation--white');
  });

  it('renders justified navigation variant', () => {
    const props: HeaderProps = {
      navigation: {
        justified: true,
        items: [
          {
            href: '/home',
            text: 'Home'
          }
        ]
      }
    };

    render(<Header {...props} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nhsuk-header__navigation--justified');
  });

  it('handles menu toggle functionality', () => {
    // Mock mobile screen size to trigger mobile menu
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });

    const props: HeaderProps = {
      navigation: {
        items: [
          {
            href: '/home',
            text: 'Home'
          }
        ]
      }
    };

    render(<Header {...props} />);
    
    // Trigger resize event to update isMobile state
    fireEvent(window, new Event('resize'));
    
    // The menu button has mobile-specific ID
    const menuButton = document.querySelector('[id="toggle-menu-mobile"]') as HTMLButtonElement;
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('applies custom CSS classes', () => {
    const props: HeaderProps = {
      className: 'custom-header',
      containerClasses: 'custom-container',
      navigation: {
        className: 'custom-nav',
        items: [
          {
            href: '/home',
            text: 'Home',
            className: 'custom-item'
          }
        ]
      },
      account: {
        className: 'custom-account',
        items: [
          {
            href: '/profile',
            text: 'Profile',
            className: 'custom-account-item'
          }
        ]
      }
    };

    render(<Header {...props} />);
    
    expect(screen.getByRole('banner')).toHaveClass('custom-header');
    expect(document.querySelector('.nhsuk-header__container')).toHaveClass('custom-container');
    expect(screen.getByRole('navigation', { name: /Menu/i })).toHaveClass('custom-nav');
    expect(screen.getByRole('navigation', { name: /Account/i })).toHaveClass('custom-account');
  });

  it('passes through custom attributes', () => {
    const props: HeaderProps = {
      attributes: {
        'data-testid': 'main-header',
        'data-version': '1.0'
      }
    };

    render(<Header {...props} />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveAttribute('data-testid', 'main-header');
    expect(header).toHaveAttribute('data-version', '1.0');
  });

  it('handles empty or undefined navigation items gracefully', () => {
    const props: HeaderProps = {
      navigation: {
        items: []
      }
    };

    render(<Header {...props} />);
    
    // Should not render navigation if no items
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('handles empty or undefined account items gracefully', () => {
    const props: HeaderProps = {
      account: {
        items: []
      }
    };

    render(<Header {...props} />);
    
    // Should not render account navigation if no items
    expect(screen.queryByRole('navigation', { name: /Account/i })).not.toBeInTheDocument();
  });
});
