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
export declare const WidthUtilities: React.FC<WidthUtilitiesProps>;
export declare const getWidthClass: {
    width: (fraction: WidthFraction) => string;
    widthTablet: (fraction: WidthFraction) => string;
};
export declare const WIDTH_FRACTIONS: WidthFraction[];
