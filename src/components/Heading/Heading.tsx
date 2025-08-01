import React, { createElement } from 'react';
import classNames from 'classnames';
import './Heading.scss';
import { HeadingProps } from './Heading.types';

/**
 * A reusable Heading component that abstracts heading level logic and provides consistent styling.
 * Separates semantic meaning (level) from visual appearance (size).
 * 
 * If level is not provided, it will be automatically determined from the size prop:
 * - xxl/xl → h1
 * - l → h2 
 * - m → h3
 * - s → h4
 * - xs → h5
 * 
 * @example
 * <Heading level={1} size="xl">Page Title</Heading>
 * <Heading level={2} size="l" text="Section Title" />
 * <Heading size="xl" text="Auto h1 from size" />
 * <Heading size="m" text="Auto h3 from size" />
 * <Heading level={2} text="Custom Spacing" marginBottom="32px" />
 */
export const Heading: React.FC<HeadingProps> = ({
  level,
  className,
  text,
  html,
  children,
  size,
  marginBottom,
  ...props
}) => {
  // Map size to default heading levels (NHS long content pattern)
  const getDefaultLevelFromSize = (size?: string): 1 | 2 | 3 | 4 | 5 | 6 => {
    switch (size) {
      case 'xxl':
      case 'xl':
        return 1;
      case 'l':
        return 2;
      case 'm':
        return 3;
      case 's':
        return 4;
      case 'xs':
        return 5;
      default:
        return 2; // Default fallback
    }
  };

  // Use explicit level if provided, otherwise derive from size
  const headingLevel = level ?? getDefaultLevelFromSize(size);
  const headingClasses = classNames(
    'nhsuk-heading',
    {
      [`nhsuk-heading--${size}`]: size,
    },
    className
  );

  const content = children || (html ? (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  ) : text);

  const tagName = `h${headingLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  // Apply custom margin-bottom if provided
  const style = marginBottom ? { ...props.style, marginBottom } : props.style;

  return createElement(
    tagName,
    { className: headingClasses, ...props, style },
    content
  );
};
