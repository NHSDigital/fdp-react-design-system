import React from 'react';
import classNames from 'classnames';
import './Grid.scss';
import { ContainerProps, RowProps, ColumnProps, GridProps } from './Grid.types';

/**
 * Grid Container Component
 * 
 * Provides a page-width container with responsive margins.
 * Based on NHS UK's width-container object.
 */
export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  fluid = false,
  maxWidth,
  ...props 
}) => {
  const containerClasses = classNames(
    {
      'nhsuk-width-container': !fluid,
      'nhsuk-width-container-fluid': fluid,
    },
    className
  );

  const style = maxWidth ? { maxWidth } : undefined;

  return (
    <div className={containerClasses} style={style} {...props}>
      {children}
    </div>
  );
};

/**
 * Grid Row Component
 * 
 * Creates a grid row with negative margins to offset column gutters.
 * Based on NHS UK's grid-row object.
 */
export const Row: React.FC<RowProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  const rowClasses = classNames('nhsuk-grid-row', className);

  return (
    <div className={rowClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Grid Column Component
 * 
 * Creates responsive grid columns with CSS Grid layout.
 * Supports different widths at different breakpoints and grid positioning.
 */
export const Column: React.FC<ColumnProps> = ({ 
  children, 
  width = 'full',
  mobileWidth,
  tabletWidth,
  desktopWidth,
  start,
  className,
  forceWidth = false,
  ...props 
}) => {
  const columnClasses = classNames(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${width}`]: !forceWidth,
      
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${width}`]: forceWidth,
      
      // Responsive width overrides
      [`nhsuk-u-${mobileWidth}-mobile`]: mobileWidth,
      [`nhsuk-u-${tabletWidth}-tablet`]: tabletWidth,
      [`nhsuk-u-${desktopWidth}-desktop`]: desktopWidth,
      
      // Grid positioning
      [`nhsuk-grid-column-start-${start}`]: start && start >= 1 && start <= 7,
    },
    className
  );

  return (
    <div className={columnClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Grid Wrapper Component
 * 
 * Convenience component that combines Container and Row.
 * Automatically wraps children in a Row unless the first child is already a Row component.
 */
export const Grid: React.FC<GridProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];
  
  // Check if the first child is a Row component
  const hasRowAsFirstChild = React.isValidElement(firstChild) && 
    (firstChild.type === Row || 
     (typeof firstChild.props === 'object' && firstChild.props && 
      'className' in firstChild.props && 
      typeof firstChild.props.className === 'string' && 
      firstChild.props.className.includes('nhsuk-grid-row')));
  
  return (
    <Container className={className} {...props}>
      { hasRowAsFirstChild ? children : <Row>{children}</Row> }
    </Container>
  );
};
