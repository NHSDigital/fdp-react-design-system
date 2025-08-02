import React, { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import './Header.scss';
import { HeaderProps, AccountItem, NavigationItem } from './Header.types';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false); // Start with no More button
  const [visibleItems, setVisibleItems] = useState<number>(navigation?.items?.length || 0); // Start with all items visible
  const [isInitialized, setIsInitialized] = useState(false); // Track if overflow calculation is complete
  const [isCalculating, setIsCalculating] = useState(false); // Prevent rapid recalculations
  const [dropdownVisible, setDropdownVisible] = useState(false); // Separate state for dropdown visibility
  
  const navigationRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overflowCheckRef = useRef<boolean>(false);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const itemWidthsRef = useRef<number[]>([]);
  const lastContainerWidthRef = useRef<number>(0);
  const lastMobileStateRef = useRef<boolean>(false);
  const moreButtonWidthRef = useRef<number>(0);

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

  // Handle escape key to close menu
  useEffect(() => {
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

  // Mobile detection and overflow detection
  const checkOverflow = useCallback(() => {
    if (overflowCheckRef.current || !navigation?.items || isCalculating) {
      return;
    }

    // Wait for refs to be available
    if (!navigationRef.current || !containerRef.current) {
      // Retry after a short delay if refs aren't ready
      setTimeout(() => checkOverflow(), 10);
      return;
    }

    overflowCheckRef.current = true;
    setIsCalculating(true);

    try {
      const nav = navigationRef.current;
      const container = containerRef.current;
      
      if (!nav || !container || !navigation?.items) {
        overflowCheckRef.current = false;
        return;
      }

      // Get container width
      const containerWidth = container.offsetWidth;
      const mobile = window.innerWidth < 768;
      
      // Skip expensive calculations if container width hasn't changed significantly
      // Use container width for width difference, not window width
      const widthDifference = Math.abs(containerWidth - (lastContainerWidthRef.current || 0));
      const hasItemsChanged = itemWidthsRef.current.length !== navigation.items.length;
      
      // Force recalculation on mobile to desktop transitions (or vice versa)
      // Use dedicated mobile state tracking
      const breakpointChanged = mobile !== lastMobileStateRef.current;
      
      // Use a smaller tolerance during active resizing for better responsiveness
      const tolerance = isInitialized ? 15 : 5; // Increased tolerance for container width changes
      
      if (!hasItemsChanged && !breakpointChanged && widthDifference < tolerance && itemWidthsRef.current.length > 0 && isInitialized) {
        // Use cached measurements for performance
        const cachedItemWidths = itemWidthsRef.current;
        const totalWidth = cachedItemWidths.reduce((sum, width) => sum + width, 0);
        const moreButtonWidth = moreButtonWidthRef.current || (mobile ? 80 : 100);
        
        if (totalWidth <= containerWidth) {
          setShowMoreButton(false);
          setVisibleItems(navigation.items.length);
          setIsInitialized(true);
        } else {
          const availableWidth = containerWidth - moreButtonWidth;
          let itemsToShow = 0;
          let runningWidth = 0;
          
          for (let i = 0; i < cachedItemWidths.length; i++) {
            const newWidth = runningWidth + cachedItemWidths[i];
            if (newWidth <= availableWidth) {
              runningWidth = newWidth;
              itemsToShow = i + 1;
            } else {
              break;
            }
          }
          
          itemsToShow = mobile ? Math.max(0, itemsToShow) : Math.max(1, itemsToShow);
          setShowMoreButton(true);
          setVisibleItems(itemsToShow);
          setIsInitialized(true);
        }
        
        overflowCheckRef.current = false;
        setIsCalculating(false);
        return;
      }
      
      // Update cached container width and mobile state
      lastContainerWidthRef.current = containerWidth;
      lastMobileStateRef.current = mobile;
      
      // Use ResizeObserver if available for more efficient measurements
      if (window.ResizeObserver && !hasItemsChanged && itemWidthsRef.current.length > 0) {
        // Skip expensive DOM queries if we have cached measurements
        overflowCheckRef.current = false;
        return;
      }
      
      // Only do expensive DOM measurements when necessary
      const navItems = nav.querySelectorAll('.nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)');
      
      if (navItems.length === 0) {
        overflowCheckRef.current = false;
        return;
      }

      // Batch DOM reads to avoid layout thrashing
      const measurements = Array.from(navItems).map((item) => {
        const itemElement = item as HTMLElement;
        return itemElement.offsetWidth;
      });
      
      // Cache the measurements
      itemWidthsRef.current = measurements;
      const totalWidth = measurements.reduce((sum, width) => sum + width, 0);
      
      // Measure More button width only once per breakpoint
      if (!moreButtonWidthRef.current || breakpointChanged) {
        moreButtonWidthRef.current = mobile ? 80 : 100;
      }
      const moreButtonWidth = moreButtonWidthRef.current;
      
      // Perform calculations without triggering reflows
      if (totalWidth <= containerWidth) {
        // All items fit, no More button needed
        // Batch state updates
        requestAnimationFrame(() => {
          setShowMoreButton(false);
          setVisibleItems(navigation.items?.length || 0);
          setIsInitialized(true);
          setIsCalculating(false);
        });
      } else {
        // Items overflow, need More button
        const availableWidth = containerWidth - moreButtonWidth;
        
        // Find how many items can fit
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

        // On mobile with very narrow screens, force More button if we have multiple items
        if (mobile && containerWidth < 400 && navigation.items.length > 1) {
          itemsToShow = Math.min(1, itemsToShow);
        }
        
        // Always show at least 1 item on desktop, allow 0 on mobile if needed
        itemsToShow = mobile ? Math.max(0, itemsToShow) : Math.max(1, itemsToShow);
        
        // Batch state updates
        requestAnimationFrame(() => {
          setShowMoreButton(true);
          setVisibleItems(itemsToShow);
          setIsInitialized(true);
          setIsCalculating(false);
        });
      }
      
      overflowCheckRef.current = false;
      setIsCalculating(false);
      
    } catch (error) {
      console.warn('Overflow detection error:', error);
      // Fallback: show all items without More button
      requestAnimationFrame(() => {
        setShowMoreButton(false);
        setVisibleItems(navigation?.items?.length || 0);
        setIsInitialized(true);
        setIsCalculating(false);
      });
      overflowCheckRef.current = false;
    }
  }, [navigation?.items, isInitialized, isCalculating]);

  const checkLayout = useCallback(() => {
    // Close menu on resize to prevent issues
    if (menuOpen) {
      setMenuOpen(false);
      setDropdownVisible(false);
    }

    // Check overflow on both mobile and desktop
    if (navigation?.items && navigation.items.length > 0) {
      checkOverflow();
    }
  }, [menuOpen, navigation?.items, checkOverflow]);

  useEffect(() => {
    // Prevent rapid re-execution
    if (isCalculating) {
      return;
    }

    // Initial check - run immediately for better performance
    if (navigation?.items && navigation.items.length > 0) {
      // Use multiple strategies to ensure DOM is ready
      const runInitialCheck = () => {
        if (navigationRef.current && containerRef.current && !isCalculating) {
          checkLayout();
        } else if (!isCalculating) {
          // Retry if refs aren't ready
          setTimeout(runInitialCheck, 10);
        }
      };
      
      // Try immediate execution
      runInitialCheck();
      
      // Also try with requestAnimationFrame
      requestAnimationFrame(() => {
        runInitialCheck();
      });
      
      // And a fallback with timeout
      setTimeout(() => {
        runInitialCheck();
      }, 100);
    }
    
    // Enhanced resize handling with multiple strategies
    const handleResize = (immediate = false) => {
      // Clear existing timeout if setting a new one
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      if (immediate) {
        // For critical resizes (like orientation change), run immediately
        checkLayout();
      } else {
        // Use different debounce times based on the situation
        const debounceTime = menuOpen ? 50 : 150; // Faster when menu is open
        resizeTimeoutRef.current = setTimeout(checkLayout, debounceTime);
      }
    };

    // Window resize listener for general viewport changes
    const handleWindowResize = () => {
      handleResize(false);
    };

    // Orientation change should trigger immediate resize
    const handleOrientationChange = () => {
      // Wait for orientation change to complete
      setTimeout(() => handleResize(true), 100);
    };

    // Set up ResizeObserver for more efficient container monitoring
    const setupResizeObserver = () => {
      if (typeof ResizeObserver !== 'undefined' && containerRef.current && !resizeObserverRef.current) {
        resizeObserverRef.current = new ResizeObserver((entries) => {
          for (const entry of entries) {
            // Check if the container width actually changed significantly
            const newWidth = entry.contentRect.width;
            const currentWidth = lastContainerWidthRef.current || 0;
            const widthDifference = Math.abs(newWidth - currentWidth);
            
            if (widthDifference > 5) { // Only respond to meaningful changes
              handleResize(false);
            }
          }
        });
        
        resizeObserverRef.current.observe(containerRef.current);
      }
    };

    // Try to set up ResizeObserver immediately and also after a delay
    setupResizeObserver();
    setTimeout(setupResizeObserver, 100);

    // Fallback window resize listeners
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Listen for page visibility changes (user switching tabs, etc.)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Page became visible, check if layout needs updating
        setTimeout(() => handleResize(true), 50);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Listen for CSS media query changes (mobile/desktop transitions)
    let mediaQueryList: MediaQueryList | null = null;
    let handleMediaQueryChange: (() => void) | null = null;
    
    if (window.matchMedia) {
      mediaQueryList = window.matchMedia('(max-width: 767px)');
      handleMediaQueryChange = () => {
        // Breakpoint change should trigger immediate recalculation
        handleResize(true);
      };
      
      // Use the newer addEventListener if available, fallback to addListener
      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handleMediaQueryChange);
      } else {
        mediaQueryList.addListener(handleMediaQueryChange);
      }
    }
    return () => {
      // Cleanup resize observer
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      
      // Cleanup window listeners
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Cleanup media query listener
      if (mediaQueryList && handleMediaQueryChange) {
        if (mediaQueryList.removeEventListener) {
          mediaQueryList.removeEventListener('change', handleMediaQueryChange);
        } else {
          mediaQueryList.removeListener(handleMediaQueryChange);
        }
      }
      
      // Cleanup timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [navigation?.items, isCalculating]); // Add isCalculating to prevent rapid re-runs

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideNavigation = navigationRef.current?.contains(target);
      
      // Handle menu click-outside
      if (menuOpen && !isInsideNavigation) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Separate useEffect for resize handling to prevent re-render loops
  useEffect(() => {
    // Enhanced resize handling with multiple strategies
    const handleResize = (immediate = false) => {
      // Don't resize if already calculating
      if (isCalculating) return;
      
      // Clear existing timeout if setting a new one
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      if (immediate) {
        // For critical resizes (like orientation change), run immediately
        checkLayout();
      } else {
        // Use different debounce times based on the situation
        const debounceTime = menuOpen ? 50 : 300; // Slower debounce to prevent flashing
        resizeTimeoutRef.current = setTimeout(checkLayout, debounceTime);
      }
    };

    // Window resize listener for general viewport changes
    const handleWindowResize = () => {
      handleResize(false);
    };

    // Orientation change should trigger immediate resize
    const handleOrientationChange = () => {
      // Wait for orientation change to complete
      setTimeout(() => handleResize(true), 100);
    };

    // Set up ResizeObserver for more efficient container monitoring
    const setupResizeObserver = () => {
      if (typeof ResizeObserver !== 'undefined' && containerRef.current && !resizeObserverRef.current) {
        resizeObserverRef.current = new ResizeObserver((entries) => {
          for (const entry of entries) {
            // Check if the container width actually changed significantly
            const newWidth = entry.contentRect.width;
            const currentWidth = lastContainerWidthRef.current || 0;
            const widthDifference = Math.abs(newWidth - currentWidth);
            
            if (widthDifference > 15 && !isCalculating) { // Larger threshold and check if calculating
              handleResize(false);
            }
          }
        });
        
        resizeObserverRef.current.observe(containerRef.current);
      }
    };

    // Try to set up ResizeObserver immediately and also after a delay
    setupResizeObserver();
    setTimeout(setupResizeObserver, 100);

    // Fallback window resize listeners
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Listen for CSS media query changes (mobile/desktop transitions)
    let mediaQueryList: MediaQueryList | null = null;
    let handleMediaQueryChange: (() => void) | null = null;
    
    if (window.matchMedia) {
      mediaQueryList = window.matchMedia('(max-width: 767px)');
      handleMediaQueryChange = () => {
        // Breakpoint change should trigger immediate recalculation
        if (!isCalculating) {
          handleResize(true);
        }
      };
      
      // Use the newer addEventListener if available, fallback to addListener
      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handleMediaQueryChange);
      } else {
        mediaQueryList.addListener(handleMediaQueryChange);
      }
    }

    return () => {
      // Cleanup resize observer
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      
      // Cleanup window listeners
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      
      // Cleanup media query listener
      if (mediaQueryList && handleMediaQueryChange) {
        if (mediaQueryList.removeEventListener) {
          mediaQueryList.removeEventListener('change', handleMediaQueryChange);
        } else {
          mediaQueryList.removeListener(handleMediaQueryChange);
        }
      }
      
      // Cleanup timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [checkLayout, isCalculating, menuOpen]); // Include necessary dependencies

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

  // Render account item - following NHS.UK structure exactly
  const renderAccountItem = (item: AccountItem) => {
    const iconContent = item.icon ? (
      <svg 
        className="nhsuk-icon nhsuk-icon__user" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        aria-hidden="true" 
        focusable="false"
      >
        <path d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" />
      </svg>
    ) : null;

    const textContent = item.html ? (
      <span dangerouslySetInnerHTML={{ __html: item.html }} />
    ) : (
      item.text
    );

    const content = (
      <>
        {iconContent}
        {textContent}
      </>
    );

    if (item.href) {
      return (
        <a className="nhsuk-header__account-link" href={item.href}>
          {content}
        </a>
      );
    }

    if (item.action) {
      return (
        <form 
          className="nhsuk-header__account-form" 
          action={item.action} 
          method={item.method || "post"}
        >
          <a className="nhsuk-header__account-button">
            {content}
          </a>
        </form>
      );
    }

    return content;
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
                    {renderAccountItem(item)}
                  </li>
                )
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Navigation - following NHS.UK structure with overflow functionality */}
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
                'nhsuk-header__navigation-container--initializing': !isInitialized
              },
              containerClasses
            )}
            ref={containerRef}
          >
            <ul className="nhsuk-header__navigation-list" ref={navigationRef}>
              {/* Visible navigation items (responsive based on available space) */}
              {navigation.items.slice(0, visibleItems).map((item, index) => (
                <li 
                  key={index}
                  className={classNames(
                    'nhsuk-header__navigation-item',
                    {
                      'nhsuk-header__navigation-item--current': item.active || item.current,
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
              
              {/* More button for overflow items (both mobile and desktop) */}
              {showMoreButton && visibleItems < navigation.items.length && (
                <li 
                  className="nhsuk-header__navigation-item nhsuk-header__navigation-item--more"
                >
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

      {/* Full-width dropdown menu - positioned outside navigation container for true full-width */}
      {navigation && navigation.items && navigation.items.length > 0 && menuOpen && dropdownVisible && (
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