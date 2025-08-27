import React from 'react';
import './WarningCallout.scss';
export interface WarningCalloutProps {
    /**
     * The heading text for the warning callout
     */
    heading: string;
    /**
     * The heading level for the warning callout title
     * @default 3
     */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Text content to display in the warning callout
     */
    text?: string;
    /**
     * HTML content to display in the warning callout (takes precedence over text)
     */
    html?: string;
    /**
     * Children content to display in the warning callout (takes precedence over html and text)
     */
    children?: React.ReactNode;
    /**
     * Additional CSS classes to apply to the warning callout
     */
    className?: string;
    /**
     * Additional HTML attributes to apply to the warning callout
     */
    [key: string]: any;
}
/**
 * WarningCallout component for displaying important warnings and alerts
 *
 * Used to warn users about something important, like legal consequences of not doing something.
 * Has a yellow/amber background to stand out and grab attention.
 */
export declare const WarningCallout: React.FC<WarningCalloutProps>;
export default WarningCallout;
