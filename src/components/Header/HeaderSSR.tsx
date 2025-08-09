import React from 'react';
import classNames from 'classnames';
import { HeaderProps, NavigationItem } from './Header.types';
import { Account } from '../Account/Account';
import { HeaderSearch } from '../HeaderSearch';

/**
 * True SSR-Compatible Header Component
 * 
 * This component provides:
 * 1. Full SSR compatibility - no browser APIs called during render
 * 2. Zero React hooks - works in Next.js App Router and other SSR environments
 * 3. Progressive enhancement - basic functionality without JavaScript
 * 4. Enhanced responsive behavior when JavaScript is available via data attributes
 * 5. Graceful fallback for all navigation items
 * 
 * SSR Strategy:
 * - Server: Renders all navigation items in a simple layout
 * - Client: Can be enhanced with external JavaScript for responsive behavior
 * - No-JS: Fully functional navigation without JavaScript
 * 
 * IMPORTANT: This component uses NO React hooks and NO client-side APIs
 * to ensure full compatibility with Next.js App Router and other SSR environments.
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
  // Determine if logo and service name should be combined
  const combineLogoAndServiceNameLinks = 
    (service.href && !logo.href) || 
    (service.href && service.href === logo.href);
  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;

  // CSS classes
  const headerClasses = classNames(
    'nhsuk-header',
    'nhsuk-header--ssr', // SSR version identifier
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

  // Render navigation items (all visible for SSR)
  const renderNavigationItems = () => {
    if (!navigation?.items || navigation.items.length === 0) return null;

    return navigation.items.map((item: NavigationItem, index: number) => (
      <li 
        key={item.href || index} 
        className="nhsuk-header__navigation-item"
        data-navigation-item="true"
      >
        <a 
          className="nhsuk-header__navigation-link" 
          href={item.href}
          {...(item.attributes || {})}
        >
          {item.text}
        </a>
      </li>
    ));
  };

  // Render search form
  const renderSearch = () => {
    if (!search) return null;
    return <HeaderSearch {...search} />;
  };

  return (
    <header 
      className={headerClasses} 
      role="banner"
      data-progressive-enhancement="true"
      data-navigation-items-count={navigation?.items?.length || 0}
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

        {/* Content area for organisation/white variants */}
        {(variant === 'organisation' || organisation) && (
          <div className="nhsuk-header__content" id="content-header">
            {organisation && (
              <div className="nhsuk-header__organisation">
                <span className="nhsuk-header__organisation-name">
                  {organisation.name}
                </span>
                {organisation.descriptor && (
                  <span className="nhsuk-header__organisation-descriptor">
                    {organisation.descriptor}
                  </span>
                )}
              </div>
            )}
            {renderSearch()}
          </div>
        )}

        {/* Search for non-organisation variants */}
        {variant !== 'organisation' && !organisation && renderSearch()}

        {/* Account - Now using Account component */}
        <Account 
          {...account}
          variant={variant === 'white' ? 'white' : 'default'}
        />
      </div>

      {/* Navigation */}
      {navigation && navigation.items && navigation.items.length > 0 && (
        <nav 
          className={navigationClasses} 
          id="header-navigation" 
          role="navigation" 
          aria-label={navigation.ariaLabel || 'Primary navigation'}
          data-navigation-enhanced="false"
        >
          <div className="nhsuk-width-container">
            <ul 
              className="nhsuk-header__navigation-list"
              data-navigation-list="true"
            >
              {renderNavigationItems()}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default HeaderSSR;
