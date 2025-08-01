import { default as React } from '../../../node_modules/react';
/**
 * Card variant options following NHS design guidelines
 */
export type CardVariant = 'default' | 'feature' | 'clickable' | 'secondary' | 'primary';
/**
 * Heading level options for semantic HTML
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
/**
 * Props for the NHS Card component
 */
export interface CardProps {
    /**
     * The variant of the card
     * @default 'default'
     */
    variant?: CardVariant;
    /**
     * Card heading text
     */
    heading?: string;
    /**
     * Custom heading HTML (overrides heading prop)
     */
    headingHtml?: string;
    /**
     * Semantic heading level
     * @default 2
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
     * URL for clickable cards
     */
    href?: string;
    /**
     * Image URL for card with image
     */
    imgURL?: string;
    /**
     * Alt text for card image
     */
    imgAlt?: string;
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
/**
 * Props for the Card Group component
 */
export interface CardGroupProps {
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Card group content
     */
    children: React.ReactNode;
    /**
     * Additional HTML attributes
     */
    'data-testid'?: string;
    id?: string;
}
/**
 * Props for Card Group Item component
 */
export interface CardGroupItemProps {
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Card item content
     */
    children: React.ReactNode;
    /**
     * Additional HTML attributes
     */
    'data-testid'?: string;
}
