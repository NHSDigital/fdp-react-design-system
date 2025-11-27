import React from 'react';
import classNames from 'classnames';
import './List.scss';
import { ListProps, ListItemProps } from './List.types';

/**
 * List Component
 * 
 * Creates accessible lists with NHS styling.
 * Based on NHS UK Frontend list styles with NHS FDP design tokens.
 */
const ListComponent: React.FC<ListProps> = ({
  children,
  type = 'bullet',
  size = 'medium',
  border = false,
  className,
  role,
  as,
  ...props
}) => {
  // Determine the HTML element to use
  const Element = as || (type === 'number' ? 'ol' : 'ul');
  
  const listClasses = classNames(
    'nhsuk-list',
    {
      'nhsuk-list--bullet': type === 'bullet',
      'nhsuk-list--number': type === 'number',
      'nhsuk-list--none': type === 'none',
      'nhsuk-list--border': border,
      [`nhsuk-list--${size}`]: size !== 'medium',
    },
    className
  );

  return (
    <Element className={listClasses} role={role} {...props}>
      {children}
    </Element>
  );
};

/**
 * List Item Component
 * 
 * Individual list item with proper NHS styling and spacing.
 */
export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  ...props
}) => {
  const itemClasses = classNames('nhsuk-list__item', className);

  return (
    <li className={itemClasses} {...props}>
      {children}
    </li>
  );
};

// Create a compound component with proper typing
interface ListComponent extends React.FC<ListProps> {
  Item: React.FC<ListItemProps>;
}

export const List = ListComponent as ListComponent;
List.Item = ListItem;
