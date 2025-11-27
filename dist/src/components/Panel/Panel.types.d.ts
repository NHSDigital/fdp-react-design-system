export interface PanelProps {
    /** Unique identifier for the panel */
    id?: string;
    /** Additional CSS classes */
    className?: string;
    /** Panel heading text */
    headingText?: string;
    /** Panel heading HTML (takes precedence over headingText) */
    headingHtml?: string;
    /** Heading level (1-6) */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Panel body text */
    bodyText?: string;
    /** Panel body HTML (takes precedence over bodyText) */
    bodyHtml?: string;
    /** Panel content as React nodes */
    children?: React.ReactNode;
    /** Additional HTML attributes */
    [key: string]: any;
}
