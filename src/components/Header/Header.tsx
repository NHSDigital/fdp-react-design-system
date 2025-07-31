import React, { useState, useRef, useEffect } from 'react';
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
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(navigation?.items?.length || 0);
  const navigationRef = useRef<HTMLUListElement>(null);
  const menuToggleRef = useRef<HTMLLIElement>(null);
  const mobileMenuToggleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overflowCheckRef = useRef<boolean>(false);

  // Simple mobile detection and overflow detection
  useEffect(() => {
    const checkLayout = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Close menus on resize to prevent issues
      if (!mobile && menuOpen) {
        setMenuOpen(false);
      }
      if (!mobile && moreMenuOpen) {
        setMoreMenuOpen(false);
      }

      // Only check overflow on desktop and when more menu is not currently open
      if (!mobile && navigation?.items && navigation.items.length > 0 && !moreMenuOpen) {
        checkOverflow();
      } else if (mobile || moreMenuOpen) {
        // Don't change overflow state when mobile or more menu is open
        if (mobile) {
          setShowMoreButton(false);
          setVisibleItems(navigation?.items?.length || 0);
        }
      }
    };

    const checkOverflow = () => {
      if (overflowCheckRef.current || !navigationRef.current || !containerRef.current || !navigation?.items || moreMenuOpen) {
        return; // Don't check overflow when more menu is open
      }

      overflowCheckRef.current = true;

      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        try {
          const nav = navigationRef.current;
          const container = containerRef.current;
          
          if (!nav || !container || !navigation?.items) {
            overflowCheckRef.current = false;
            return;
          }

          // Get all non-More navigation items
          const items = nav.querySelectorAll('.nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)');
          
          // If no items are found in DOM yet, show all items and retry later
          if (items.length === 0) {
            setVisibleItems(navigation.items.length);
            setShowMoreButton(false);
            overflowCheckRef.current = false;
            // Retry after a short delay
            setTimeout(() => checkOverflow(), 100);
            return;
          }

          const containerWidth = container.offsetWidth;
          
          // Simple overflow check: if we have more than 6 items or narrow container, use overflow
          if (navigation.items.length > 6 || containerWidth < 800) {
            const itemsToShow = Math.max(1, Math.floor(containerWidth / 150)); // Rough estimate
            const actualItemsToShow = Math.min(itemsToShow, navigation.items.length - 1);
            
            if (actualItemsToShow < navigation.items.length) {
              setShowMoreButton(true);
              setVisibleItems(actualItemsToShow);
              overflowCheckRef.current = false;
              return;
            }
          }
          
          // Default: show all items
          setShowMoreButton(false);
          setVisibleItems(navigation.items.length);
          
        } catch (error) {
          console.warn('Overflow detection error:', error);
          // Fallback: show all items
          setShowMoreButton(false);
          setVisibleItems(navigation?.items?.length || 0);
        } finally {
          overflowCheckRef.current = false;
        }
      });
    };

    // Initial check
    checkLayout();
    
    const handleResize = () => {
      checkLayout();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen, navigation?.items]); // Removed moreMenuOpen to prevent interference

  // Update visible items when navigation items change
  useEffect(() => {
    if (navigation?.items) {
      setVisibleItems(navigation.items.length);
      setShowMoreButton(false);
    }
  }, [navigation?.items?.length]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideNavigation = navigationRef.current?.contains(target);
      const isInsideMobileToggle = mobileMenuToggleRef.current?.contains(target);
      
      // Handle mobile menu click-outside only
      if (menuOpen && !isInsideNavigation && !isInsideMobileToggle) {
        setMenuOpen(false);
      }
      
      // Handle more menu click-outside - only close if clicking outside navigation entirely
      if (moreMenuOpen && !isInsideNavigation) {
        // Don't close if clicking on the More button itself
        const moreButton = menuToggleRef.current?.querySelector('.nhsuk-header__navigation-button');
        if (!moreButton?.contains(target)) {
          setMoreMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, moreMenuOpen]);

  // Determine if logo and service name should be combined into single link
  const combineLogoAndServiceNameLinks = 
    (service.href && !logo.href) || 
    (service.href && service.href === logo.href);

  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;

  const headerClasses = classNames(
    'nhsuk-header',
    {
      'nhsuk-header--white': variant === 'white',
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
    {
      'nhsuk-header__navigation--white': navigation?.white,
      'nhsuk-header__navigation--justified': navigation?.justified,
    },
    navigation?.className
  );

  const toggleMenu = (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setMenuOpen(prevState => !prevState);
  };

  const toggleMoreMenu = (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    }
    
    // Use a more explicit state update
    const newState = !moreMenuOpen;
    setMoreMenuOpen(newState);
  };

  // NHS Logo SVG
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

  // Render organisation name
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

  // Render account item
  const renderAccountItem = (item: AccountItem) => {
    const content = (
      <>
        {item.icon && (
          <svg 
            className="nhsuk-icon nhsuk-icon__user" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            aria-hidden="true" 
            focusable="false"
          >
            <path d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" />
          </svg>
        )}
        {item.html ? (
          <span dangerouslySetInnerHTML={{ __html: item.html }} />
        ) : (
          item.text
        )}
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
          <button className="nhsuk-header__account-button">
            {content}
          </button>
        </form>
      );
    }

    return content;
  };

  // Render search icon
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

  // Hamburger menu icon
  const renderHamburgerIcon = () => (
    <svg 
      className="nhsuk-icon nhsuk-icon__menu" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  );

  // Close icon for open mobile menu
  const renderCloseIcon = () => (
    <svg 
      className="nhsuk-icon nhsuk-icon__close" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  );



  // Render chevron icon
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

  // Render navigation link content
  // Render navigation link content
  const renderNavigationLinkContent = (item: NavigationItem) => {
    if (item.active || item.current) {
      return (
        <strong className="nhsuk-header__navigation-item-current-fallback">
          {item.html ? (
            <span dangerouslySetInnerHTML={{ __html: item.html }} />
          ) : (
            item.text
          )}
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

        {/* Mobile Menu Toggle - Positioned at header container level */}
        {navigation && navigation.items && navigation.items.length > 0 && isMobile && (
          <div className="nhsuk-header__mobile-menu" ref={mobileMenuToggleRef}>
            <button 
              className="nhsuk-header__menu-toggle nhsuk-header__navigation-link" 
              id="toggle-menu-mobile" 
              aria-expanded={menuOpen}
              onClick={toggleMenu}
              type="button"
            >
              <span className="nhsuk-u-visually-hidden">
                {menuOpen ? 'Close' : 'Open'} navigation menu
              </span>
              <span className="nhsuk-header__menu-toggle-text">
                {menuOpen ? 'Close' : 'Menu'}
              </span>
              <span className="nhsuk-header__menu-toggle-icon">
                {menuOpen ? renderCloseIcon() : renderHamburgerIcon()}
              </span>
            </button>
          </div>
        )}
      </div>

      {navigation && navigation.items && navigation.items.length > 0 && (
        <nav 
          className={navigationClasses} 
          aria-label={navigation.ariaLabel || "Menu"}
        >
          <div 
            className={classNames('nhsuk-header__navigation-container', 'nhsuk-width-container', containerClasses)}
            ref={containerRef}
          >            
            {/* Desktop Navigation List */}
            <ul className="nhsuk-header__navigation-list" ref={navigationRef}>
              {/* Visible navigation items */}
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
              
              {/* More button for overflow items */}
              {showMoreButton && visibleItems < navigation.items.length && (
                <li 
                  className="nhsuk-header__navigation-item nhsuk-header__navigation-item--more"
                  ref={menuToggleRef}
                >
                  <button
                    className="nhsuk-header__navigation-button"
                    id="toggle-more-menu"
                    aria-expanded={moreMenuOpen}
                    onClick={toggleMoreMenu}
                    type="button"
                  >
                    <span>More</span>
                    {renderChevronIcon()}
                  </button>
                  
                  {/* Dropdown menu for overflow items */}
                  {moreMenuOpen && (
                    <ul className="nhsuk-header__dropdown-menu">
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
                            onClick={() => setMoreMenuOpen(false)}
                          >
                            {renderNavigationLinkContent(item)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
            </ul>
            
            {/* Mobile Menu */}
            <ul 
              className="nhsuk-header__menu-list" 
              hidden={!menuOpen}
              role="list"
            >
              {navigation.items.map((item, index) => (
                <li 
                  key={`menu-${index}`}
                  className={classNames(
                    'nhsuk-header__navigation-item',
                    {
                      'nhsuk-header__navigation-item--current': item.active || item.current,
                    },
                    item.className
                  )}
                >
                  <a 
                    className="nhsuk-header__navigation-link" 
                    href={item.href}
                    {...(item.active || item.current ? {
                      'aria-current': item.current ? "page" : "true"
                    } : {})}
                    onClick={() => setMenuOpen(false)} // Close menu when clicking a link
                  >
                    {renderNavigationLinkContent(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};