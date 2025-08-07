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
 * // Card group
 * <CardGroup>
 *   <CardGroupItem>
 *     <Card heading="Card 1" description="First card" />
 *   </CardGroupItem>
 *   <CardGroupItem>
 *     <Card heading="Card 2" description="Second card" />
 *   </CardGroupItem>
 * </CardGroup>
 * ```
 */
export declare const Card: React.FC<CardProps>;
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
