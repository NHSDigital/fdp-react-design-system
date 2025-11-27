import React from 'react';
import { CareCardProps } from './CareCard.types';
import { Heading } from '../Heading';
import './CareCard.scss';

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
export const CareCard: React.FC<CareCardProps> = ({
  type,
  heading,
  headingHtml,
  headingLevel = 3,
  headingClasses,
  description,
  descriptionHtml,
  className,
  children,
  'data-testid': dataTestId,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}) => {
  // Build CSS classes
  const cardClasses = [
    'nhsuk-care-card',
    `nhsuk-care-card--${type}`,
    className
  ].filter(Boolean).join(' ');

  const headingClassList = [
    'nhsuk-care-card__heading',
    headingClasses
  ].filter(Boolean).join(' ');

  // Create heading element dynamically
  const renderHeading = () => {
    if (headingHtml) {
      return <div dangerouslySetInnerHTML={{ __html: headingHtml }} />;
    }

    if (!heading) return null;

    const visuallyHiddenText = {
      'non-urgent': 'Non-urgent advice:',
      'urgent': 'Urgent advice:',
      'emergency': 'Immediate action required:'
    }[type];

    const headingContent = (
      <span role="text">
        <span className="nhsuk-u-visually-hidden">{visuallyHiddenText} </span>
        {heading}
      </span>
    );

    // Use the new Heading component instead of React.createElement
    return (
      <Heading
        level={headingLevel}
        className={headingClassList}
      >
        {headingContent}
      </Heading>
    );
  };

  const renderContent = () => {
    if (children) return children;
    if (descriptionHtml) return <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />;
    if (description) return <p className="nhsuk-care-card__text">{description}</p>;
    return null;
  };

  return (
    <div 
      className={cardClasses}
      data-testid={dataTestId}
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      <div className="nhsuk-care-card__heading-container">
        {renderHeading()}
        <span className="nhsuk-care-card__arrow" aria-hidden="true"></span>
      </div>
      
      <div className="nhsuk-care-card__content">
        {renderContent()}
      </div>
    </div>
  );
};
