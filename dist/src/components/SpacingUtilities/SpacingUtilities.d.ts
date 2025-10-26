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
export declare const SpacingUtilities: React.FC<SpacingUtilitiesProps>;
export declare const getSpacingClass: {
    margin: (size: number) => string;
    marginTop: (size: number) => string;
    marginRight: (size: number) => string;
    marginBottom: (size: number) => string;
    marginLeft: (size: number) => string;
    padding: (size: number) => string;
    paddingTop: (size: number) => string;
    paddingRight: (size: number) => string;
    paddingBottom: (size: number) => string;
    paddingLeft: (size: number) => string;
    marginResponsive: (size: number) => string;
    marginTopResponsive: (size: number) => string;
    marginRightResponsive: (size: number) => string;
    marginBottomResponsive: (size: number) => string;
    marginLeftResponsive: (size: number) => string;
    paddingResponsive: (size: number) => string;
    paddingTopResponsive: (size: number) => string;
    paddingRightResponsive: (size: number) => string;
    paddingBottomResponsive: (size: number) => string;
    paddingLeftResponsive: (size: number) => string;
};
