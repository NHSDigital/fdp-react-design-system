import { ReactNode, HTMLAttributes } from '../../../node_modules/react';
export interface SummaryListItem {
    /** The term or label for this summary item */
    key: {
        /** Plain text content for the key */
        text?: string;
        /** HTML content for the key (takes precedence over text) */
        html?: string;
        /** React children content for the key (takes precedence over text and html) */
        children?: ReactNode;
    };
    /** The value or description for this summary item */
    value: {
        /** Plain text content for the value */
        text?: string;
        /** HTML content for the value (takes precedence over text) */
        html?: string;
        /** React children content for the value (takes precedence over text and html) */
        children?: ReactNode;
    };
    /** Optional actions for this summary item */
    actions?: {
        /** Array of action items */
        items: Array<{
            /** The href for the action link */
            href: string;
            /** Plain text content for the action */
            text?: string;
            /** HTML content for the action (takes precedence over text) */
            html?: string;
            /** React children content for the action (takes precedence over text and html) */
            children?: ReactNode;
            /** Visually hidden text for screen readers */
            visuallyHiddenText?: string;
            /** Additional attributes for the action link */
            attributes?: HTMLAttributes<HTMLAnchorElement>;
        }>;
    };
}
export interface SummaryListProps extends HTMLAttributes<HTMLDListElement> {
    /** Array of summary list items to display */
    items: SummaryListItem[];
    /** Whether to display the summary list without borders */
    noBorder?: boolean;
    /** Additional CSS classes to apply to the summary list */
    className?: string;
}
