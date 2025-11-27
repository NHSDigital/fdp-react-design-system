import React from 'react';
import { MainWrapperProps } from './MainWrapper.types';
import './MainWrapper.scss';

/**
 * MainWrapper component provides consistent padding around main content areas
 * following NHS UK spacing conventions.
 * 
 * @example
 * ```tsx
 * <Container>
 *   <MainWrapper>
 *     <h1>Page Title</h1>
 *     <p>Main content goes here...</p>
 *   </MainWrapper>
 * </Container>
 * ```
 * 
 * @example
 * ```tsx
 * // With size variants
 * <MainWrapper size="large">Large padding for spacious layouts</MainWrapper>
 * <MainWrapper size="small">Compact padding for dense layouts</MainWrapper>
 * ```
 */
export const MainWrapper: React.FC<MainWrapperProps> = ({
  as: Component = 'main',
  size = 'default',
  className,
  children,
  ...props
}) => {
  const classes = [
    'nhsuk-main-wrapper',
    size === 'large' && 'nhsuk-main-wrapper--l',
    size === 'small' && 'nhsuk-main-wrapper--s',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
