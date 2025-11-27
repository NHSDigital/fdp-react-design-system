import React from 'react';
import { SpacingUtilitiesProps } from './SpacingUtilities.types';
import './SpacingUtilities.scss';

/**
 * SpacingUtilities component provides CSS utility classes for spacing
 * following NHS UK spacing conventions with NHS FDP design tokens.
 * 
 * This component doesn't render visual content but ensures spacing utility
 * classes are available in the CSS bundle.
 * 
 * @example
 * ```tsx
 * // The utility classes are automatically available:
 * <div className="nhsuk-u-margin-4">Content with margin</div>
 * <div className="nhsuk-u-padding-top-2">Content with top padding</div>
 * <div className="nhsuk-u-margin-responsive-6">Responsive margin</div>
 * ```
 */
export const SpacingUtilities: React.FC<SpacingUtilitiesProps> = ({
  debug = false,
  className,
  children,
  ...props
}) => {
  if (!children) {
    // Component used only to ensure CSS is loaded
    return null;
  }

  const classes = [
    'nhsuk-spacing-utilities',
    debug && 'nhsuk-spacing-utilities--debug',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Export utility class name generators for programmatic use
export const getSpacingClass = {
  margin: (size: number) => `nhsuk-u-margin-${size}`,
  marginTop: (size: number) => `nhsuk-u-margin-top-${size}`,
  marginRight: (size: number) => `nhsuk-u-margin-right-${size}`,
  marginBottom: (size: number) => `nhsuk-u-margin-bottom-${size}`,
  marginLeft: (size: number) => `nhsuk-u-margin-left-${size}`,
  
  padding: (size: number) => `nhsuk-u-padding-${size}`,
  paddingTop: (size: number) => `nhsuk-u-padding-top-${size}`,
  paddingRight: (size: number) => `nhsuk-u-padding-right-${size}`,
  paddingBottom: (size: number) => `nhsuk-u-padding-bottom-${size}`,
  paddingLeft: (size: number) => `nhsuk-u-padding-left-${size}`,
  
  // Responsive variants
  marginResponsive: (size: number) => `nhsuk-u-margin-responsive-${size}`,
  marginTopResponsive: (size: number) => `nhsuk-u-margin-top-responsive-${size}`,
  marginRightResponsive: (size: number) => `nhsuk-u-margin-right-responsive-${size}`,
  marginBottomResponsive: (size: number) => `nhsuk-u-margin-bottom-responsive-${size}`,
  marginLeftResponsive: (size: number) => `nhsuk-u-margin-left-responsive-${size}`,
  
  paddingResponsive: (size: number) => `nhsuk-u-padding-responsive-${size}`,
  paddingTopResponsive: (size: number) => `nhsuk-u-padding-top-responsive-${size}`,
  paddingRightResponsive: (size: number) => `nhsuk-u-padding-right-responsive-${size}`,
  paddingBottomResponsive: (size: number) => `nhsuk-u-padding-bottom-responsive-${size}`,
  paddingLeftResponsive: (size: number) => `nhsuk-u-padding-left-responsive-${size}`,
};
