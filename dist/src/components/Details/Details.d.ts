import React from 'react';
import './Details.scss';
export interface DetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
    /** Text for the summary (visible part that can be clicked) */
    summaryText?: string;
    /** HTML content for the summary (overrides summaryText if provided) */
    summaryHtml?: string;
    /** Text content for the details body */
    text?: string;
    /** HTML content for the details body (overrides text if provided) */
    html?: string;
    /** Whether the details should be open by default */
    open?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Unique identifier */
    id?: string;
    /** Child content (will override text/html props if provided) */
    children?: React.ReactNode;
}
/**
 * Details component for progressive disclosure of content
 *
 * Used to hide additional information behind a disclosure widget that users can expand
 * when needed. Uses the standard HTML details element with NHS styling.
 */
export declare const Details: React.ForwardRefExoticComponent<DetailsProps & React.RefAttributes<HTMLDetailsElement>>;
export default Details;
