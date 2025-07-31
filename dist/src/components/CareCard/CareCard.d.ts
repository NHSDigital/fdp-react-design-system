import { default as React } from 'react';
import { CareCardProps } from './CareCard.types';
/**
 * NHS CareCard Component
 *
 * Care cards help users identify and understand the care they need, who to contact
 * and how quickly. They are specifically designed for medical guidance scenarios
 * where users need to decide when and where to get care.
 *
 * Features:
 * - Three types: non-urgent (blue), urgent (red), emergency (red with black content)
 * - Accessibility compliant with proper headings and screen reader support
 * - Hidden text for screen readers to indicate urgency level
 * - Responsive design with design tokens
 * - Clear visual hierarchy with colored headers and arrow indicators
 *
 * @example
 * ```tsx
 * // Non-urgent care card
 * <CareCard
 *   type="non-urgent"
 *   heading="Speak to a GP if:"
 *   description="You have symptoms that are concerning you but are not urgent"
 * />
 *
 * // Urgent care card
 * <CareCard
 *   type="urgent"
 *   heading="Ask for an urgent GP appointment if:"
 *   description="Your symptoms are severe and need prompt medical attention"
 * />
 *
 * // Emergency care card
 * <CareCard
 *   type="emergency"
 *   heading="Call 999 if:"
 *   description="Someone's life is at risk and they need emergency medical treatment"
 * />
 * ```
 */
export declare const CareCard: React.FC<CareCardProps>;
