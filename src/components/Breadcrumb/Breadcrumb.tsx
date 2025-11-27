import React from 'react';
import classNames from 'classnames';
import './Breadcrumb.scss';
import { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbItem } from './Breadcrumb.types';

// Breadcrumb Item Component
const BreadcrumbItemComponent: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  active = false,
  attributes = {},
}) => {
  return (
    <li className="nhsuk-breadcrumb__item">
      {active ? (
        <span
          className="nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current"
          aria-current="page"
          {...attributes}
        >
          {children}
        </span>
      ) : (
        <a
          className="nhsuk-breadcrumb__link"
          href={href}
          {...attributes}
        >
          {children}
        </a>
      )}
    </li>
  );
};

// Define the compound component type
interface BreadcrumbComponent extends React.FC<BreadcrumbProps> {
  Item: React.FC<BreadcrumbItemProps>;
}

const BreadcrumbBase: React.FC<BreadcrumbProps> = ({
  items = [],
  children,
  classes,
  labelText = 'Breadcrumb',
  href,
  text,
  reverse = false,
  attributes = {},
}) => {
  // Extract breadcrumb items from children if provided
  const getItemsFromChildren = (): BreadcrumbItem[] => {
    if (!children) return [];
    
    const childrenArray = React.Children.toArray(children);
    return childrenArray
      .filter((child): child is React.ReactElement<BreadcrumbItemProps> => 
        React.isValidElement(child) && 
        (child.type === BreadcrumbItemComponent || (child.type as any)?.displayName === 'BreadcrumbItem')
      )
      .map((child) => ({
        text: typeof child.props.children === 'string' ? child.props.children : String(child.props.children),
        href: child.props.href,
        active: child.props.active,
        attributes: child.props.attributes,
      }));
  };

  // Create breadcrumb items - priority: children > items > href/text
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    // First check for children (compound component usage)
    if (children) {
      return getItemsFromChildren();
    }
    
    // If href and text are provided directly, create a single item
    if (href && text) {
      return [{ href, text }];
    }
    
    // Otherwise, use the items array (include all items, even active ones)
    return items;
  };

  // Determine the last item for the back link
  const getLastItem = () => {
    const breadcrumbItems = getBreadcrumbItems();
    
    if (breadcrumbItems && breadcrumbItems.length > 0) {
      // Find the last item with an href (non-active item)
      const lastLinkItem = breadcrumbItems
        .slice()
        .reverse()
        .find(item => item.href && !item.active);
      
      if (lastLinkItem) {
        return { href: lastLinkItem.href, text: lastLinkItem.text };
      }
    }
    
    return { text: 'Home' };
  };

  const breadcrumbItems = getBreadcrumbItems();
  const lastItem = getLastItem();
  
  const breadcrumbClasses = classNames(
    'nhsuk-breadcrumb',
    {
      'nhsuk-breadcrumb--reverse': reverse,
    },
    classes
  );

  // Enhanced ARIA compliance: always set aria-label for consistency with tests
  const ariaLabel = labelText;

  return (
    <nav 
      className={breadcrumbClasses} 
      aria-label={ariaLabel}
      role="navigation"
      {...attributes}
    >
      <ol className="nhsuk-breadcrumb__list" role="list">
        {children ? (
          // Render children directly if using compound component pattern
          React.Children.map(children, (child, index) => {
            if (React.isValidElement(child) && 
                (child.type === BreadcrumbItemComponent || (child.type as any)?.displayName === 'BreadcrumbItem')) {
              return React.cloneElement(child, { key: index });
            }
            return null;
          })
        ) : (
          // Render from items array
          breadcrumbItems?.filter(item => item.active || !!item.href).map((item, index) => (
            <li key={index} className="nhsuk-breadcrumb__item" role="listitem">
              {item.active ? (
                <span
                  className="nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current"
                  aria-current="page"
                  role="text"
                  {...(item.attributes || {})}
                >
                  {item.text}
                </span>
              ) : (
                <a
                  className="nhsuk-breadcrumb__link"
                  href={item.href}
                  role="link"
                  {...(item.attributes || {})}
                >
                  {item.text}
                </a>
              )}
            </li>
          ))
        )}
      </ol>
      
      {/* Mobile back link - only show if we have items with hrefs */}
      {lastItem.href && (
        <p className="nhsuk-breadcrumb__back">
          <a
            className="nhsuk-breadcrumb__backlink"
            href={lastItem.href}
            role="link"
            aria-label={`Back to ${lastItem.text}`}
            {...(items.length > 0 ? items[items.length - 1]?.attributes || {} : {})}
          >
            <span className="nhsuk-u-visually-hidden">Back to &nbsp;</span>
            {lastItem.text}
          </a>
        </p>
      )}
    </nav>
  );
};

// Create compound component
export const Breadcrumb = BreadcrumbBase as BreadcrumbComponent;

// Add compound component
Breadcrumb.Item = BreadcrumbItemComponent;
BreadcrumbItemComponent.displayName = 'BreadcrumbItem';
