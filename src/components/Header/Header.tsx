import React, { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import './Header.scss';
import './Header.ssr.scss'; // SSR fallback styles
import { HeaderProps, NavigationItem } from './Header.types';
import { Account } from '../Account';

/**
 * SSR-compatible Header Component with Progressive Enhancement
 * 
 * This component is designed to work with Next.js SSR by:
 * 1. Rendering a functional header on the server
 * 2. Progressively enhancing with responsive overflow handling on the client
 * 3. Providing fallback navigation that works without JavaScript
 */
export const Header: React.FC<HeaderProps> = ({
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
  // SSR-safe state initialization
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(navigation?.items?.length || 0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if we're on client side
  
  const navigationRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overflowCheckRef = useRef<boolean>(false);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigationItemsRef = useRef<NavigationItem[]>([]);
  const lastBreakpointRef = useRef<boolean | null>(null); // Track breakpoint changes

  // Simple initialization effect - runs once
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setIsClient(true);
    setIsInitialized(true); // Just mark as initialized immediately
  }, []); // Run once on mount

  // Simple effect to run overflow check when client loads and navigation changes
  useEffect(() => {
    if (!isClient || !navigation?.items?.length) return;
    
    navigationItemsRef.current = navigation.items;
    
    // Simple timeout to run overflow check
    const timer = setTimeout(() => {
      if (navigationRef.current && containerRef.current) {
        checkOverflow();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [isClient, navigation?.items]);

  // Determine if logo and service name should be combined into single link
  // Following NHS.UK logic exactly
  const combineLogoAndServiceNameLinks = 
    (service.href && !logo.href) || 
    (service.href && service.href === logo.href);

  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;

  const headerClasses = classNames(
    'nhsuk-header',
    {
      'nhsuk-header--organisation': variant === 'organisation' || organisation,
      'nhsuk-header--white': variant === 'white',
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
    {
      'nhsuk-header__navigation--white': navigation?.white,
      'nhsuk-header__navigation--justified': navigation?.justified,
    },
    navigation?.className
  );

  // Simple overflow detection function
  const checkOverflow = useCallback(() => {
    if (typeof window === 'undefined' || overflowCheckRef.current) return;
    if (!navigationRef.current || !containerRef.current || !navigationItemsRef.current.length) return;

    overflowCheckRef.current = true;

    try {
      const container = containerRef.current;
      const nav = navigationRef.current;
      const containerWidth = container.offsetWidth;
      const navItems = nav.querySelectorAll('.nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)');
      
      if (navItems.length === 0 || containerWidth === 0) {
        overflowCheckRef.current = false;
        return;
      }

      // Account for NHS width-container margins (gutters)
      const mobile = window.innerWidth < 768;
      const gutterSize = mobile ? 16 : 32; // Half gutter on mobile, full gutter on desktop
      const totalGutters = gutterSize * 2; // Left and right gutters
      const availableContainerWidth = containerWidth - totalGutters;

      const measurements = Array.from(navItems).map(item => (item as HTMLElement).offsetWidth);
      const totalWidth = measurements.reduce((sum, width) => sum + width, 0);
      const moreButtonWidth = mobile ? 80 : 100;
      
      // Check if breakpoint changed
      const breakpointChanged = lastBreakpointRef.current !== null && lastBreakpointRef.current !== mobile;
      lastBreakpointRef.current = mobile;
      
      console.log('Overflow check:', {
        containerWidth,
        availableContainerWidth,
        totalGutters,
        gutterSize,
        totalWidth,
        mobile,
        breakpointChanged,
        itemCount: measurements.length,
        measurements
      });
      
      if (totalWidth <= availableContainerWidth) {
        setShowMoreButton(false);
        setVisibleItems(navigationItemsRef.current.length);
      } else {
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
        
        itemsToShow = Math.max(1, itemsToShow);
        const shouldShowMore = itemsToShow < measurements.length;
        
        setShowMoreButton(shouldShowMore);
        setVisibleItems(itemsToShow);
      }
      
      overflowCheckRef.current = false;
      
    } catch (error) {
      console.error('Overflow detection error:', error);
      setShowMoreButton(false);
      setVisibleItems(navigationItemsRef.current.length);
      overflowCheckRef.current = false;
    }
  }, []); // Stable function

  // SSR-safe escape key handler
  useEffect(() => {
    // Only run on client side
    if (typeof document === 'undefined') return;
    
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [menuOpen]);

  // Enhanced resize handling with breakpoint detection
  useEffect(() => {
    if (typeof window === 'undefined' || !isClient) return;
    
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
        if (navigationItemsRef.current.length > 0) {
          checkOverflow();
        }
      }, 250);
    };

    // Handle breakpoint changes using media query
    let mediaQueryList: MediaQueryList | null = null;
    let handleBreakpointChange: (() => void) | null = null;
    
    if (window.matchMedia) {
      mediaQueryList = window.matchMedia('(max-width: 767px)');
      handleBreakpointChange = () => {
        console.log('Breakpoint changed:', mediaQueryList?.matches ? 'mobile' : 'desktop');
        // Immediate check on breakpoint change
        if (navigationItemsRef.current.length > 0) {
          // Small delay to let layout settle
          setTimeout(() => checkOverflow(), 50);
        }
      };
      
      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handleBreakpointChange);
      } else {
        mediaQueryList.addListener(handleBreakpointChange);
      }
    }

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Cleanup media query listener
      if (mediaQueryList && handleBreakpointChange) {
        if (mediaQueryList.removeEventListener) {
          mediaQueryList.removeEventListener('change', handleBreakpointChange);
        } else {
          mediaQueryList.removeListener(handleBreakpointChange);
        }
      }
      
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [isClient, menuOpen, checkOverflow]);

  // SSR-safe click outside handler
  useEffect(() => {
    // Only run on client side
    if (typeof document === 'undefined') return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideNavigation = navigationRef.current?.contains(target);
      
      // Handle menu click-outside
      if (menuOpen && !isInsideNavigation) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen]);

  const toggleMenu = (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    
    if (newMenuState) {
      // Small delay before showing dropdown to prevent flashing
      setTimeout(() => {
        setDropdownVisible(true);
      }, 50);
    } else {
      setDropdownVisible(false);
    }
  };

  // NHS Logo SVG - exact copy from NHS.UK
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

  // Render service logo (NHS logo or custom image)
  const renderServiceLogo = () => {
    if (logo.src) {
      return (
        <img 
          className="nhsuk-header__organisation-logo" 
          src={logo.src} 
          width="280" 
          alt={logo.ariaLabel || "NHS"} 
        />
      );
    }
    return renderNHSLogo();
  };

  // Render organisation name - following NHS.UK structure exactly
  const renderOrganisationName = () => {
    if (!organisation) return null;
    
    return (
      <>
        <span className="nhsuk-header__organisation-name">
          {organisation.name}
          {organisation.split && (
            <span className="nhsuk-header__organisation-name-split">
              {' '}{organisation.split}
            </span>
          )}
        </span>
        {organisation.descriptor && (
          <span className="nhsuk-header__organisation-name-descriptor">
            {organisation.descriptor}
          </span>
        )}
      </>
    );
  };

  // Render service name
  const renderServiceName = (text?: string, href?: string) => {
    if (!text) return null;
    
    if (href) {
      return (
        <a className="nhsuk-header__service-name" href={href}>
          {text}
        </a>
      );
    }
    return <span className="nhsuk-header__service-name">{text}</span>;
  };

  // Search icon - exact copy from NHS.UK
  const renderSearchIcon = () => (
    <svg 
      className="nhsuk-icon nhsuk-icon__search" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      aria-hidden="true" 
      focusable="false"
    >
      <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" />
    </svg>
  );

  // Chevron icon for More button - exact copy from NHS.UK
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

  // Render navigation link content - following NHS.UK structure exactly
  const renderNavigationLinkContent = (item: NavigationItem) => {
    // Wrap active links in strong element for accessibility
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

  return (
    <header 
      className={headerClasses} 
      role="banner" 
      data-module="nhsuk-header"
      {...attributes}
      {...props}
    >
      <div className={containerClass}>
        {/* Service section - logo, organisation, service name */}
        <div className="nhsuk-header__service">
          {logoHref ? (
            <a className="nhsuk-header__service-logo" href={logoHref}>
              {renderServiceLogo()}
              {renderOrganisationName()}
              {combineLogoAndServiceNameLinks && renderServiceName(service.text)}
            </a>
          ) : (
            <>
              {renderServiceLogo()}
              {renderOrganisationName()}
              {combineLogoAndServiceNameLinks && renderServiceName(service.text)}
            </>
          )}
          
          {service.text && !combineLogoAndServiceNameLinks && 
            renderServiceName(service.text, service.href)
          }
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
                {renderSearchIcon()}
                <span className="nhsuk-u-visually-hidden">
                  {search.visuallyHiddenButton || "Search"}
                </span>
              </button>
            </form>
          </search>
        )}

        {/* Account */}
        <Account 
          {...account}
          variant={variant === 'white' ? 'white' : 'default'}
        />
      </div>

      {/* Navigation - SSR-safe with progressive enhancement */}
      { navigation && navigation.items && navigation.items.length > 0 && (
        <nav 
          className={navigationClasses} 
          aria-label={navigation.ariaLabel || "Menu"}
        >
          <div 
            className={classNames(
              'nhsuk-header__navigation-container', 
              'nhsuk-width-container',
              {
                'nhsuk-header__navigation-container--initializing': !isInitialized && isClient,
                'nhsuk-header__navigation-container--ssr': !isClient
              },
              containerClasses
            )}
            ref={containerRef}
          >
            <ul className="nhsuk-header__navigation-list" ref={navigationRef}>
              {/* SSR Fallback: Show all navigation items on server, enhance on client */}
              {(!isClient ? navigation.items : navigation.items.slice(0, visibleItems)).map((item, index) => (
                <li 
                  key={index}
                  className={classNames(
                    'nhsuk-header__navigation-item',
                    {
                      'nhsuk-header__navigation-item--current': item.active || item.current,
                      'nhsuk-header__navigation-item--ssr-fallback': !isClient && index >= 4 // Mark items that would be hidden on client
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
              
              {/* More button - only show on client after overflow calculation */}
              {isClient && showMoreButton && visibleItems < navigation.items.length && (
                <li 
                  className="nhsuk-header__navigation-item nhsuk-header__navigation-item--more"
                >
                  <a
                    className="nhsuk-header__navigation-button"
                    id="toggle-more-menu"
                    onClick={toggleMenu}
                    type="button"
                  >
                    <span>More</span>
                    {renderChevronIcon()}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      )}

      {/* Full-width dropdown menu - only show on client with JavaScript */}
      {isClient && navigation && navigation.items && navigation.items.length > 0 && menuOpen && dropdownVisible && (
        <div 
          className="nhsuk-header__dropdown-menu" 
          hidden={!dropdownVisible}
        >
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