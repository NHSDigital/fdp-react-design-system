import { default as React } from '../../../node_modules/react';
/**
 * Care card type options for medical guidance
 */
export type CareCardType = 'non-urgent' | 'urgent' | 'emergency';
/**
 * Heading level options for semantic HTML
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
/**
 * Props for the NHS CareCard component
 */
export interface CareCardProps {
    /**
     * Care card type for medical guidance
     * @default 'non-urgent'
     */
    type: CareCardType;
    /**
     * Card heading text
     */
    heading: string;
    /**
     * Custom heading HTML (overrides heading prop)
     */
    headingHtml?: string;
    /**
     * Semantic heading level
     * @default 3
     */
    headingLevel?: HeadingLevel;
    /**
     * Additional CSS classes for the heading
     */
    headingClasses?: string;
    /**
     * Card description text
     */
    description?: string;
    /**
     * Custom description HTML (overrides description prop)
     */
    descriptionHtml?: string;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Card content (children take precedence over description props)
     */
    children?: React.ReactNode;
    /**
     * Additional HTML attributes
     */
    'data-testid'?: string;
    id?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
}
