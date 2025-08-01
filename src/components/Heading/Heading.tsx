import React, { createElement } from 'react';
import classNames from 'classnames';
import './Heading.scss';
import { HeadingProps } from './Heading.types';

/**
 * A reusable Heading component that abstracts heading level logic and provides consistent styling.
 * Separates semantic meaning (level) from visual appearance (size).
 * 
 * @example
 * <Heading level={1} size="xl">Page Title</Heading>
 * <Heading level={2} size="l" text="Section Title" />
 * <Heading level={3} html="<em>Emphasized</em> Title" />
 */
export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  className,
  text,
  html,
  children,
  size,
  ...props
}) => {
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

  const tagName = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return createElement(
    tagName,
    { className: headingClasses, ...props },
    content
  );
};
