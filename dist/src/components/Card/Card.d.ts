import React from 'react';
import { CardProps, CardGroupProps, CardGroupItemProps } from './Card.types';
import './Card.scss';
/**
 * NHS Card Component
 *
 * A versatile card component that follows NHS design guidelines.
 * Can be used for content cards, feature cards, and clickable cards.
 *
 * Features:
 * - Multiple variants (default, feature, clickable, secondary, primary)
 * - Accessibility compliant with proper headings and ARIA attributes
 * - Responsive design with design tokens
 * - Support for images, custom content, and interactive states
 * - Full HTML div attributes support including keyboard navigation
 *
 * @example
 * ```tsx
 * // Basic card
 * <Card heading="Basic Card" description="This is a basic card" />
 *
 * // Clickable card
 * <Card
 *   variant="clickable"
 *   heading="Clickable Card"
 *   href="/example"
 *   description="This card is clickable"
 * />
 *
 * // Card with keyboard navigation
 * <Card
 *   heading="Navigable Card"
 *   tabIndex={0}
 *   onKeyDown={handleKeyDown}
 *   ref={cardRef}
 * />
 * ```
 */
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
/**
 * NHS Card Group Component
 *
 * Container for multiple cards displayed in a flex layout.
 * Cards in a group will have equal height on desktop.
 */
export declare const CardGroup: React.FC<CardGroupProps>;
/**
 * NHS Card Group Item Component
 *
 * Individual item wrapper for cards within a CardGroup.
 */
export declare const CardGroupItem: React.FC<CardGroupItemProps>;
