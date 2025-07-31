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
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  heading,
  headingHtml,
  headingLevel = 2,
  headingClasses,
  description,
  descriptionHtml,
  href,
  imgURL,
  imgAlt,
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
    'nhsuk-card',
    variant === 'clickable' && 'nhsuk-card--clickable',
    variant === 'secondary' && 'nhsuk-card--secondary',
    variant === 'feature' && 'nhsuk-card--feature',
    className
  ].filter(Boolean).join(' ');

  const contentClasses = [
    'nhsuk-card__content',
    variant === 'feature' && 'nhsuk-card__content--feature',
    variant === 'primary' && 'nhsuk-card__content--primary',
    variant === 'secondary' && 'nhsuk-card__content--secondary'
  ].filter(Boolean).join(' ');

  const headingClassList = [
    'nhsuk-card__heading',
    variant === 'feature' && 'nhsuk-card__heading--feature',
    headingClasses
  ].filter(Boolean).join(' ');

  // Create heading element
  const renderHeading = () => {
    if (headingHtml) {
      return <div dangerouslySetInnerHTML={{ __html: headingHtml }} />;
    }

    if (!heading) return null;

    const headingContent = () => {
      if (href && variant !== 'feature') {
        return <a className="nhsuk-card__link" href={href}>{heading}</a>;
      }

      return heading;
    };

    // Dynamically create heading element based on headingLevel
    return React.createElement(
      `h${headingLevel}`,
      { className: headingClassList },
      headingContent()
    );
  };

  const renderContent = () => {
    if (children) return children;
    if (descriptionHtml) return <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />;
    if (description) return <p className="nhsuk-card__description">{description}</p>;
    return null;
  };

  const renderPrimaryIcon = () => {
    if (variant !== 'primary') return null;
    return (
      <svg 
        className="nhsuk-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        width="27" 
        height="27" 
        aria-hidden="true" 
        focusable="false"
      >
        <circle cx="13.333" cy="13.333" r="13.333" fill="" />
        <g fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.667">
          <path d="M15.438 13l-3.771 3.771" />
          <path d="M11.667 9.229L15.438 13" />
        </g>
      </svg>
    );
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
      {imgURL && (
        <img 
          className="nhsuk-card__img" 
          src={imgURL} 
          alt={imgAlt || ''} 
        />
      )}
      
      <div className={contentClasses}>
        {renderHeading()}
        {renderContent()}
        {renderPrimaryIcon()}
      </div>
    </div>
  );
};

/**
 * NHS Card Group Component
 * 
 * Container for multiple cards displayed in a flex layout.
 * Cards in a group will have equal height on desktop.
 */
export const CardGroup: React.FC<CardGroupProps> = ({
  className,
  children,
  'data-testid': dataTestId,
  id,
}) => {
  const classes = ['nhsuk-card-group', className].filter(Boolean).join(' ');

  return (
    <ul 
      className={classes}
      data-testid={dataTestId}
      id={id}
    >
      {children}
    </ul>
  );
};

/**
 * NHS Card Group Item Component
 * 
 * Individual item wrapper for cards within a CardGroup.
 */
export const CardGroupItem: React.FC<CardGroupItemProps> = ({
  className,
  children,
  'data-testid': dataTestId,
}) => {
  const classes = ['nhsuk-card-group__item', className].filter(Boolean).join(' ');

  return (
    <li 
      className={classes}
      data-testid={dataTestId}
    >
      {children}
    </li>
  );
};
