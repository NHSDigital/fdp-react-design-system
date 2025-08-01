import React, { forwardRef } from 'react';
import { Heading } from '../Heading';
import './DoDontList.scss';

export interface DoDontListItem {
  /** Text content for the do/don't item */
  item: string;
}

export interface DoDontListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title to be displayed on the do and don't list component */
  title: string;
  /** Type of do and don't list component – 'tick' for Do lists or 'cross' for Don't lists */
  type: 'tick' | 'cross';
  /** Array of do and don't items */
  items: DoDontListItem[];
  /** If set to true when type is 'cross', removes the default 'do not' text prefix to each item */
  hidePrefix?: boolean;
  /** Optional heading level for the title heading. Defaults to 3 */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Additional CSS classes */
  className?: string;
}

export const DoDontList = forwardRef<HTMLDivElement, DoDontListProps>(
  (
    { 
      title, 
      type, 
      items, 
      hidePrefix = false, 
      headingLevel = 3, 
      className,
      ...props 
    },
    ref
  ) => {
    const classes = ['nhsuk-do-dont-list'];
    
    if (className) {
      classes.push(className);
    }

    const listClasses = [
      'nhsuk-list',
      type === 'tick' ? 'nhsuk-list--tick' : 'nhsuk-list--cross'
    ];

    const renderIcon = () => {
      if (type === 'cross') {
        return (
          <svg 
            className="nhsuk-icon nhsuk-icon__cross" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            aria-hidden="true" 
            width="34" 
            height="34"
          >
            <path 
              d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" 
              fill="#d5281b"
            />
            <path 
              d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" 
              fill="#d5281b"
            />
          </svg>
        );
      } else {
        return (
          <svg 
            className="nhsuk-icon nhsuk-icon__tick" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            aria-hidden="true" 
            width="34" 
            height="34"
          >
            <path 
              strokeWidth="4" 
              strokeLinecap="round" 
              d="M18.4 7.8l-8.5 8.4L5.6 12" 
              stroke="#007f3b"
            />
          </svg>
        );
      }
    };

    const formatItemText = (itemText: string) => {
      if (type === 'cross' && !hidePrefix) {
        return `do not ${itemText}`;
      }
      return itemText;
    };

    const renderHeading = () => {
      return (
        <Heading
          level={headingLevel}
          className="nhsuk-do-dont-list__label"
          text={title}
        />
      );
    };

    return (
      <div 
        ref={ref}
        className={classes.join(' ')}
        {...props}
      >
        {renderHeading()}
        <div className="nhsuk-do-dont-list__content--feature">
          <ul className={listClasses.join(' ')} role="list">
            {items.map((item, index) => (
              <li key={index}>
                {renderIcon()}
                {formatItemText(item.item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

DoDontList.displayName = 'DoDontList';
