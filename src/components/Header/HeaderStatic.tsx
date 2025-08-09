import React from 'react';
import classNames from 'classnames';
import './Header.scss';
import './HeaderStatic.scss'; // Static-specific styles
import { HeaderProps, NavigationItem } from './Header.types';
import { Account } from '../Account/Account';

/**
 * True SSR-Compatible Header Component
 * 
 * This component provides:
 * 1. Zero React hooks - true SSR compatibility
 * 2. CSS-only responsive behavior
 * 3. Works without JavaScript
 * 4. No client-side state management
 * 5. Pure HTML/CSS navigation fallbacks
 * 
 * SSR Strategy:
 * - Server: Renders complete functional header
 * - Client: No hydration needed, works immediately
 * - No-JS: Fully functional with CSS-only responsive behavior
 * - Performance: Zero JavaScript overhead
 */
export const HeaderStatic: React.FC<HeaderProps> = ({
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
  maxVisibleItems = 5, // New prop to control CSS-based overflow
  ...props
}) => {
  // Determine if logo and service name should be combined
  const combineLogoAndServiceNameLinks = 
    (service.href && !logo.href) || 
    (service.href && service.href === logo.href);
  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;

  // CSS classes
  const headerClasses = classNames(
    'nhsuk-header',
    'nhsuk-header--static', // Static version identifier
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
    'nhsuk-header__navigation--static', // Static navigation identifier
    {
      'nhsuk-header__navigation--white': navigation?.white,
      'nhsuk-header__navigation--justified': navigation?.justified,
    },
    navigation?.className
  );

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

  // Render navigation link content
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

  return (
    <header 
      className={headerClasses} 
      role="banner" 
      data-module="nhsuk-header-static"
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

        {/* Account - Now using Account component */}
        <Account 
          {...account}
          variant={variant === 'white' ? 'white' : 'default'}
        />
      </div>

      {/* Static Navigation - CSS-only responsive behavior */}
      {navigation && navigation.items && navigation.items.length > 0 && (
        <nav 
          className={navigationClasses} 
          aria-label={navigation.ariaLabel || "Menu"}
        >
          <div 
            className={classNames(
              'nhsuk-header__navigation-container', 
              'nhsuk-width-container',
              'nhsuk-header__navigation-container--static',
              containerClasses
            )}
          >
            {/* Primary navigation list - always visible items */}
            <ul className="nhsuk-header__navigation-list nhsuk-header__navigation-list--primary">
              {navigation.items.slice(0, maxVisibleItems).map((item, index) => (
                <li 
                  key={index}
                  className={classNames(
                    'nhsuk-header__navigation-item',
                    'nhsuk-header__navigation-item--primary',
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
              
              {/* CSS-only "More" dropdown for overflow items */}
              {navigation.items.length > maxVisibleItems && (
                <li className="nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static">
                  <details className="nhsuk-header__navigation-details">
                    <summary className="nhsuk-header__navigation-summary">
                      <span>More</span>
                      <svg 
                        className="nhsuk-icon nhsuk-icon__chevron-down" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true" 
                        focusable="false"
                      >
                        <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
                      </svg>
                    </summary>
                    <ul className="nhsuk-header__navigation-dropdown">
                      {navigation.items.slice(maxVisibleItems).map((item, index) => (
                        <li 
                          key={`overflow-${maxVisibleItems + index}`}
                          className={classNames(
                            'nhsuk-header__navigation-dropdown-item',
                            {
                              'nhsuk-header__navigation-dropdown-item--current': item.active || item.current,
                            }
                          )}
                        >
                          <a 
                            className="nhsuk-header__navigation-dropdown-link" 
                            href={item.href}
                            {...(item.active || item.current ? {
                              'aria-current': item.current ? "page" : "true"
                            } : {})}
                          >
                            {renderNavigationLinkContent(item)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              )}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default HeaderStatic;
