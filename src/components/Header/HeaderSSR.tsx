import React, { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import './Header.scss';
import './Header.ssr.scss';
import { HeaderProps, NavigationItem } from './Header.types';

/**
 * SSR-Compatible Header Component with Progressive Enhancement
 * 
 * This component provides:
 * 1. Full SSR compatibility - no browser APIs called during render
 * 2. Progressive enhancement - basic functionality without JavaScript
 * 3. Enhanced responsive behavior when JavaScript is available
 * 4. Graceful fallback for all navigation items
 * 
 * SSR Strategy:
 * - Server: Renders all navigation items in a simple layout
 * - Client: Enhances with responsive overflow handling and dropdowns
 * - No-JS: Fully functional navigation without JavaScript
 */
export const HeaderSSR: React.FC<HeaderProps> = ({
  className,
  logo = {},
  service = {},
  organisation,
  search,
  account,
  navigation,
  containerClasses,
  variant = 'default',
  attributes = {},
  ...props
}) => {
  // Client-side enhancement state
  const [isClient, setIsClient] = useState(false);
  const [isEnhanced, setIsEnhanced] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(navigation?.items?.length || 0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  // Refs for progressive enhancement
  const navigationRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // SSR-safe client detection
  useEffect(() => {
    setIsClient(true);
    // Add a small delay to prevent hydration mismatches
    const timer = setTimeout(() => {
      setIsEnhanced(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Determine if logo and service name should be combined
  const combineLogoAndServiceNameLinks = 
    (service.href && !logo.href) || 
    (service.href && service.href === logo.href);
  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;

  // CSS classes
  const headerClasses = classNames(
    'nhsuk-header',
    {
      'nhsuk-header--organisation': variant === 'organisation' || organisation,
      'nhsuk-header--enhanced': isEnhanced,
      'nhsuk-header--ssr': !isClient,
    },
    className
  );

  const containerClass = classNames(
    'nhsuk-header__container',
    'nhsuk-width-container',
    containerClasses
  );

  const navigationClasses = classNames(
    'nhsuk-header__navigation',
    navigation?.className
  );

  // Progressive enhancement: simplified responsive overflow handling
  const calculateOverflow = useCallback(() => {
    if (!isClient || !isEnhanced || !navigationRef.current || !containerRef.current || !navigation?.items) {
      return;
    }

    try {
      const container = containerRef.current;
      const nav = navigationRef.current;
      const containerWidth = container.offsetWidth;
      const navItems = nav.querySelectorAll('.nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)');
      
      if (navItems.length === 0 || containerWidth === 0) return;

      // Account for NHS width-container margins (gutters) - simplified version
      const mobile = window.innerWidth < 768;
      const gutterSize = mobile ? 16 : 32; // Half gutter on mobile, full gutter on desktop
      const totalGutters = gutterSize * 2; // Left and right gutters
      const availableContainerWidth = containerWidth - totalGutters;

      // Calculate item widths
      const measurements = Array.from(navItems).map(item => (item as HTMLElement).offsetWidth);
      const totalWidth = measurements.reduce((sum, width) => sum + width, 0);
      const moreButtonWidth = mobile ? 80 : 100;
      
      console.log('SSR Header overflow check:', {
        containerWidth,
        availableContainerWidth,
        totalGutters,
        totalWidth,
        mobile,
        itemCount: measurements.length
      });
      
      if (totalWidth <= availableContainerWidth) {
        // All items fit
        setShowMoreButton(false);
        setVisibleItems(navigation.items.length);
      } else {
        // Need overflow handling
        const availableWidth = availableContainerWidth - moreButtonWidth;
        let itemsToShow = 0;
        let runningWidth = 0;
        
        for (let i = 0; i < measurements.length; i++) {
          const newWidth = runningWidth + measurements[i];
          if (newWidth <= availableWidth) {
            runningWidth = newWidth;
            itemsToShow = i + 1;
          } else {
            break;
          }
        }
        
        // Always show at least 1 item
        itemsToShow = Math.max(1, itemsToShow);
        setShowMoreButton(true);
        setVisibleItems(itemsToShow);
      }
    } catch (error) {
      console.warn('SSR Header overflow calculation error:', error);
      // Fallback: show all items
      setShowMoreButton(false);
      setVisibleItems(navigation?.items?.length || 0);
    }
  }, [isClient, isEnhanced, navigation?.items]);

  // Separate effect for initial calculation
  useEffect(() => {
    if (!isClient || !isEnhanced || !navigation?.items) return;
    
    const timer = setTimeout(() => {
      calculateOverflow();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [isClient, isEnhanced, navigation?.items, calculateOverflow]);

  // Resize handling for SSR component
  useEffect(() => {
    if (!isClient || !isEnhanced) return;

    const handleResize = () => {
      // Close menu on resize
      if (menuOpen) {
        setMenuOpen(false);
        setDropdownVisible(false);
      }
      
      // Simple debounced overflow check
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        if (navigation?.items && !menuOpen) { // Don't recalculate if menu is open
          calculateOverflow();
        }
      }, 250);
    };

    // Basic window resize listener (simpler than ResizeObserver for SSR fallback)
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [isClient, isEnhanced, menuOpen, calculateOverflow, navigation?.items]);

  // Enhanced keyboard and click handling (client-side only)
  useEffect(() => {
    if (!isClient || !menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setDropdownVisible(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideNavigation = navigationRef.current?.contains(target);
      
      // Handle menu click-outside
      if (menuOpen && !isInsideNavigation) {
        setMenuOpen(false);
        setDropdownVisible(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isClient, menuOpen]);

  // Menu toggle handler
  const toggleMenu = useCallback((event?: React.MouseEvent) => {
    if (!isClient) return; // No-op on server
    
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    
    if (newMenuState) {
      setTimeout(() => setDropdownVisible(true), 50);
    } else {
      setDropdownVisible(false);
    }
  }, [isClient, menuOpen]);

  // Render navigation item content
  const renderNavigationLinkContent = (item: NavigationItem) => {
    if (item.active || item.current) {
      const content = item.html ? (
        <span dangerouslySetInnerHTML={{ __html: item.html }} />
      ) : (
        item.text
      );
      
      return (
        <strong className="nhsuk-header__navigation-item-current-fallback">
          {content}
        </strong>
      );
    }

    return item.html ? (
      <span dangerouslySetInnerHTML={{ __html: item.html }} />
    ) : (
      item.text
    );
  };

  // Render NHS Logo
  const renderNHSLogo = () => (
    <svg 
      className="nhsuk-header__logo" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 80" 
      height="40" 
      width="100" 
      focusable="false" 
      role="img" 
      aria-label={logo.ariaLabel || "NHS"}
    >
      <title>{logo.ariaLabel || "NHS"}</title>
      <path 
        fill="currentcolor" 
        d="M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
      />
    </svg>
  );

  // Render service logo
  const renderServiceLogo = () => {
    if (logo.src) {
      return (
        <img 
          className="nhsuk-header__logo" 
          src={logo.src} 
          alt={logo.ariaLabel || ""} 
          width="100" 
          height="40" 
        />
      );
    }
    return renderNHSLogo();
  };

  // Render chevron icon for more button
  const renderChevronIcon = () => (
    <svg 
      className="nhsuk-icon nhsuk-icon__chevron-down" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      aria-hidden="true" 
      focusable="false"
    >
      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
    </svg>
  );

  return (
    <header 
      className={headerClasses} 
      role="banner" 
      data-module="nhsuk-header"
      {...attributes}
      {...props}
    >
      <div className={containerClass}>
        {/* Service section */}
        <div className="nhsuk-header__service">
          {logoHref ? (
            <a className="nhsuk-header__service-logo" href={logoHref}>
              {renderServiceLogo()}
              {organisation && (
                <span className="nhsuk-header__service-name">
                  {organisation.name}
                </span>
              )}
              {combineLogoAndServiceNameLinks && service.text && (
                <span className="nhsuk-header__service-name">
                  {service.text}
                </span>
              )}
            </a>
          ) : (
            <>
              {renderServiceLogo()}
              {organisation && (
                <span className="nhsuk-header__service-name">
                  {organisation.name}
                </span>
              )}
              {combineLogoAndServiceNameLinks && service.text && (
                <span className="nhsuk-header__service-name">
                  {service.text}
                </span>
              )}
            </>
          )}
          
          {service.text && !combineLogoAndServiceNameLinks && (
            <a className="nhsuk-header__service-name" href={service.href}>
              {service.text}
            </a>
          )}
        </div>

        {/* Search */}
        {search && (
          <search className="nhsuk-header__search">
            <form 
              className="nhsuk-header__search-form" 
              id="search" 
              action={search.action || "https://www.nhs.uk/search/"} 
              method="get"
            >
              <label 
                className="nhsuk-u-visually-hidden" 
                htmlFor="search-field"
              >
                {search.visuallyHiddenLabel || "Search the NHS website"}
              </label>
              <input 
                className="nhsuk-header__search-input nhsuk-input" 
                id="search-field" 
                name={search.name || "q"} 
                type="search" 
                placeholder={search.placeholder || "Search"} 
                autoComplete="off" 
              />
              <button className="nhsuk-header__search-submit" type="submit">
                <span className="nhsuk-u-visually-hidden">
                  {search.visuallyHiddenButton || "Search"}
                </span>
              </button>
            </form>
          </search>
        )}

        {/* Account */}
        {account && account.items && account.items.length > 0 && (
          <nav 
            className={classNames('nhsuk-header__account', account.className)} 
            aria-label={account.ariaLabel || "Account"}
          >
            <ul className="nhsuk-header__account-list">
              {account.items.map((item, index) => (
                item && (
                  <li 
                    key={index} 
                    className={classNames('nhsuk-header__account-item', item.className)}
                  >
                    <a href={item.href} className="nhsuk-header__account-link">
                      {item.text}
                    </a>
                  </li>
                )
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Navigation with SSR fallback */}
      {navigation && navigation.items && navigation.items.length > 0 && (
        <nav 
          className={navigationClasses} 
          aria-label={navigation.ariaLabel || "Menu"}
        >
          <div 
            className={classNames(
              'nhsuk-header__navigation-container', 
              'nhsuk-width-container',
              {
                'nhsuk-header__navigation-container--ssr': !isClient,
                'nhsuk-header__navigation-container--enhanced': isEnhanced,
              },
              containerClasses
            )}
            ref={containerRef}
          >
            <ul className="nhsuk-header__navigation-list" ref={navigationRef}>
              {/* Navigation items - SSR shows all, enhanced shows calculated visible items */}
              {(!isClient || !isEnhanced ? navigation.items : navigation.items.slice(0, visibleItems)).map((item, index) => (
                <li 
                  key={index}
                  className={classNames(
                    'nhsuk-header__navigation-item',
                    {
                      'nhsuk-header__navigation-item--current': item.active || item.current,
                      'nhsuk-header__navigation-item--ssr-fallback': !isClient && index >= 4,
                    },
                    item.className
                  )}
                  {...(item.attributes || {})}
                >
                  <a 
                    className="nhsuk-header__navigation-link" 
                    href={item.href}
                    {...(item.active || item.current ? {
                      'aria-current': item.current ? "page" : "true"
                    } : {})}
                  >
                    {renderNavigationLinkContent(item)}
                  </a>
                </li>
              ))}
              
              {/* More button - only show when enhanced and needed */}
              {isEnhanced && showMoreButton && visibleItems < navigation.items.length && (
                <li className="nhsuk-header__navigation-item nhsuk-header__navigation-item--more">
                  <button
                    className="nhsuk-header__navigation-button"
                    id="toggle-more-menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                    type="button"
                  >
                    <span>More</span>
                    {renderChevronIcon()}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      )}

      {/* Dropdown menu - only show when enhanced and open */}
      {isEnhanced && navigation && navigation.items && navigation.items.length > 0 && menuOpen && dropdownVisible && (
        <div className="nhsuk-header__dropdown-menu">
          <ul className="nhsuk-header__dropdown-list">
            {/* Show overflow items (items beyond visibleItems) */}
            {navigation.items.slice(visibleItems).map((item, index) => (
              <li 
                key={`overflow-${visibleItems + index}`}
                className={classNames(
                  'nhsuk-header__dropdown-item',
                  {
                    'nhsuk-header__dropdown-item--current': item.active || item.current,
                  }
                )}
              >
                <a 
                  className="nhsuk-header__dropdown-link" 
                  href={item.href}
                  {...(item.active || item.current ? {
                    'aria-current': item.current ? "page" : "true"
                  } : {})}
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownVisible(false);
                  }}
                >
                  {renderNavigationLinkContent(item)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderSSR;
