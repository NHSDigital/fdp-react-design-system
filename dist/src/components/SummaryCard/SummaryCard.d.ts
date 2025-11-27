import React from 'react';
import { SummaryCardProps } from './SummaryCard.types';
import './SummaryCard.scss';
/**
 * NHS Summary Card Component
 *
 * A card component designed for displaying key metrics and data summaries,
 * commonly used in dashboards and data visualization interfaces.
 *
 * Features:
 * - Clean, accessible design following NHS patterns
 * - Support for different variants and states
 * - Optional clickable functionality
 * - Responsive design with design tokens
 * - Optimized for displaying numerical data and KPIs
 *
 * @example
 * ```tsx
 * // Basic summary card
 * <SummaryCard title="Patient Records" value="1,247" />
 *
 * // With subtitle
 * <SummaryCard
 *   title="Appointments Today"
 *   value="89"
 *   subtitle="15% increase from yesterday"
 * />
 *
 * // Clickable card
 * <SummaryCard
 *   title="Active Prescriptions"
 *   value="342"
 *   href="/prescriptions"
 * />
 * ```
 */
export declare const SummaryCard: React.FC<SummaryCardProps>;
