import React from 'react';
import { WidthUtilitiesProps, WidthFraction } from './WidthUtilities.types';
import './WidthUtilities.scss';

/**
 * WidthUtilities component provides CSS utility classes for element widths
 * following NHS UK width conventions with NHS FDP design tokens.
 * 
 * This component doesn't render visual content but ensures width utility
 * classes are available in the CSS bundle.
 * 
 * @example
 * ```tsx
 * // The utility classes are automatically available:
 * <div className="nhsuk-u-width-full">Full width</div>
 * <div className="nhsuk-u-width-one-half">Half width</div>
 * <div className="nhsuk-u-width-one-third-tablet">One third on tablet+</div>
 * ```
 */
export const WidthUtilities: React.FC<WidthUtilitiesProps> = ({
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
    'nhsuk-width-utilities',
    debug && 'nhsuk-width-utilities--debug',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Export utility class name generators for programmatic use
export const getWidthClass = {
  width: (fraction: WidthFraction) => `nhsuk-u-width-${fraction}`,
  widthTablet: (fraction: WidthFraction) => `nhsuk-u-width-${fraction}-tablet`,
};

// Constants for available width fractions
export const WIDTH_FRACTIONS: WidthFraction[] = [
  'full',
  'three-quarters', 
  'two-thirds',
  'one-half',
  'one-third',
  'one-quarter'
];
