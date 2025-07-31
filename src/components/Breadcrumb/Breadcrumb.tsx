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
  // Determine the last item for the back link
  const getLastItem = (): { href?: string; text: string } => {
    if (href && text) {
      return { href, text };
    }
    
    if (items.length > 0) {
      const lastItem = items[items.length - 1];
      return { href: lastItem.href, text: lastItem.text };
    }
    
    return { text: 'Home' };
  };

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
        {items.map((item, index) => (
          item.href ? (
            <li key={index} className="nhsuk-breadcrumb__item">
              <a
                className="nhsuk-breadcrumb__link"
                href={item.href}
                {...(item.attributes || {})}
              >
                {item.text}
              </a>
            </li>
          ) : (
            <li key={index} className="nhsuk-breadcrumb__item">
              {item.text}
            </li>
          )
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
