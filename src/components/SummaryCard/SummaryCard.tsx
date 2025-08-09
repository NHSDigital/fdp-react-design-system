import React from 'react';
import { SummaryCardProps } from './SummaryCard.types';
import './SummaryCard.scss';
import { Heading } from '../Heading';

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
export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  subtitle,
  variant = 'default',
  href,
  className = '',
  ariaLabel,
  ...props
}) => {
  const baseClasses = [
    'nhs-fdp-summary-card',
    `nhs-fdp-summary-card--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <Heading level={3} className="nhs-fdp-summary-card__title">{title}</Heading>
      <p className="nhs-fdp-summary-card__value">{value}</p>
      {subtitle && (
        <p className="nhs-fdp-summary-card__subtitle">{subtitle}</p>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={`${baseClasses} nhs-fdp-summary-card--clickable`}
        href={href}
        aria-label={ariaLabel || `${title}: ${value}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={baseClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </div>
  );
};
