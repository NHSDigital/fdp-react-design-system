import React, { forwardRef } from 'react';
import './Expander.scss';

export interface ExpanderProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  /** Text for the summary (visible part that can be clicked) */
  summaryText?: string;
  /** HTML content for the summary (overrides summaryText if provided) */
  summaryHtml?: string;
  /** Text content for the expander body */
  text?: string;
  /** HTML content for the expander body (overrides text if provided) */
  html?: string;
  /** Whether the expander should be open by default */
  open?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Unique identifier */
  id?: string;
  /** Child content (will override text/html props if provided) */
  children?: React.ReactNode;
}

/**
 * Expander component for progressive disclosure with card-like styling
 * 
 * An enhanced version of the Details component with card-like appearance,
 * plus/minus icons, and expanded touch targets for better usability.
 */
export const Expander = forwardRef<HTMLDetailsElement, ExpanderProps>(
  (
    {
      summaryText,
      summaryHtml,
      text,
      html,
      open = false,
      className = '',
      id,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      'nhsuk-expander',
      className
    ].filter(Boolean).join(' ');

    // Determine summary content
    const summaryContent = summaryHtml ? (
      <span
        className="nhsuk-details__summary-text"
        dangerouslySetInnerHTML={{ __html: summaryHtml }}
      />
    ) : (
      <span className="nhsuk-details__summary-text">
        {summaryText}
      </span>
    );

    // Determine body content
    let bodyContent;
    if (children) {
      bodyContent = children;
    } else if (html) {
      bodyContent = <div dangerouslySetInnerHTML={{ __html: html }} />;
    } else if (text) {
      bodyContent = text;
    }

    return (
      <details
        ref={ref}
        id={id}
        className={classes}
        open={open}
        {...props}
      >
        <summary className="nhsuk-details__summary">
          {summaryContent}
        </summary>
        <div className="nhsuk-details__text">
          {bodyContent}
        </div>
      </details>
    );
  }
);

Expander.displayName = 'Expander';

export default Expander;
