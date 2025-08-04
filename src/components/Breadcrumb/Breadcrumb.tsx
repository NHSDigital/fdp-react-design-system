import React from 'react';
import classNames from 'classnames';
import './Breadcrumb.scss';
import { BreadcrumbProps } from './Breadcrumb.types';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [],
  classes,
  labelText = 'Breadcrumb',
  href,
  text,
  reverse = false,
  attributes = {},
}) => {
  // Create breadcrumb items - either from items prop or from href/text props
  const getBreadcrumbItems = () => {
    // If href and text are provided directly, create a single item
    if (href && text) {
      return [{ href, text }];
    }
    
    // Otherwise, use the items array
    return items.filter(item => item.href);
  };

  // Determine the last item for the back link
  const getLastItem = () => {
    const breadcrumbItems = getBreadcrumbItems();
    
    if (breadcrumbItems.length > 0) {
      const lastItem = breadcrumbItems[breadcrumbItems.length - 1];
      return { href: lastItem.href, text: lastItem.text };
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

  return (
    <nav className={breadcrumbClasses} aria-label={labelText} {...attributes}>
      <ol className="nhsuk-breadcrumb__list">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="nhsuk-breadcrumb__item">
            <a
              className="nhsuk-breadcrumb__link"
              href={item.href}
              {...(item.attributes || {})}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
      
      {/* Mobile back link - only show if we have items with hrefs */}
      {lastItem.href && (
        <p className="nhsuk-breadcrumb__back">
          <a
            className="nhsuk-breadcrumb__backlink"
            href={lastItem.href}
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
