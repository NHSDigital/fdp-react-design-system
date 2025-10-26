import React from 'react';
import './Expander.scss';
export interface ExpanderProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
    /** Text for the summary (visible part that can be clicked) */
    summaryText?: string;
    /** HTML content for the summary (overrides summaryText if provided) */
    summaryHtml?: string;
    /** Text content for the expander body */
    text?: string;
    /** HTML content for the expander body (overrides text if provided) */
    html?: string;
    /** Whether the expander should be open by default */
    open?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Unique identifier */
    id?: string;
    /** Child content (will override text/html props if provided) */
    children?: React.ReactNode;
}
/**
 * Expander component for progressive disclosure with card-like styling
 *
 * An enhanced version of the Details component with card-like appearance,
 * plus/minus icons, and expanded touch targets for better usability.
 */
export declare const Expander: React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLDetailsElement>>;
export default Expander;
