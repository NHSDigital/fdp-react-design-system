import React from 'react';
import { DashboardSummaryGridProps } from './DashboardSummaryGrid.types';
import './DashboardSummaryGrid.scss';
/**
 * NHS Dashboard Summary Grid Component
 *
 * A pre-configured grid layout that displays four summary cards in a responsive
 * 2x2 grid on desktop and stacked layout on mobile. Perfect for dashboard KPIs
 * and data overviews.
 *
 * Features:
 * - Responsive grid layout using NHS Grid components
 * - Consistent spacing and alignment
 * - Optimized for exactly four summary cards
 * - Mobile-first responsive design
 * - Accessibility compliant
 *
 * @example
 * ```tsx
 * <DashboardSummaryGrid
 *   cards={[
 *     { title: "Patient Records", value: "1,247" },
 *     { title: "Appointments Today", value: "89" },
 *     { title: "Active Prescriptions", value: "342" },
 *     { title: "Staff On Duty", value: "156" }
 *   ]}
 * />
 * ```
 */
export declare const DashboardSummaryGrid: React.FC<DashboardSummaryGridProps>;
