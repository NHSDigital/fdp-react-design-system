import React, { createElement } from 'react';
import './WarningCallout.scss';

export interface WarningCalloutProps {
  /**
   * The heading text for the warning callout
   */
  heading: string;
  
  /**
   * The heading level for the warning callout title
   * @default 3
   */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * Text content to display in the warning callout
   */
  text?: string;
  
  /**
   * HTML content to display in the warning callout (takes precedence over text)
   */
  html?: string;
  
  /**
   * Children content to display in the warning callout (takes precedence over html and text)
   */
  children?: React.ReactNode;
  
  /**
   * Additional CSS classes to apply to the warning callout
   */
  className?: string;
  
  /**
   * Additional HTML attributes to apply to the warning callout
   */
  [key: string]: any;
}

/**
 * WarningCallout component for displaying important warnings and alerts
 * 
 * Used to warn users about something important, like legal consequences of not doing something.
 * Has a yellow/amber background to stand out and grab attention.
 */
export const WarningCallout: React.FC<WarningCalloutProps> = ({
  heading,
  headingLevel = 3,
  text,
  html,
  children,
  className,
  ...props
}) => {
  // Check if heading already contains "Important" (case insensitive)
  const headingContainsImportant = /important/i.test(heading);
  
  const renderContent = () => {
    if (children) {
      return children;
    }
    
    if (html) {
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
    
    if (text) {
      return <p>{text}</p>;
    }
    
    return null;
  };

  // Build CSS classes
  const classes = [
    'nhsuk-warning-callout',
    className
  ].filter(Boolean).join(' ');

  const headingTag = `h${headingLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <div
      className={classes}
      {...props}
    >
      {createElement(
        headingTag,
        { className: 'nhsuk-warning-callout__label' },
        headingContainsImportant ? (
          <>
            {heading}
            <span className="nhsuk-u-visually-hidden">:</span>
          </>
        ) : (
          <span role="text">
            <span className="nhsuk-u-visually-hidden">Important: </span>
            {heading}
          </span>
        )
      )}
      {renderContent()}
    </div>
  );
};

export default WarningCallout;
