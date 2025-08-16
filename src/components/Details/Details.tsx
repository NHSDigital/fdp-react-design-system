import React, { forwardRef } from 'react';
import './Details.scss';

export interface DetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  /** Text for the summary (visible part that can be clicked) */
  summaryText?: string;
  /** HTML content for the summary (overrides summaryText if provided) */
  summaryHtml?: string;
  /** Text content for the details body */
  text?: string;
  /** HTML content for the details body (overrides text if provided) */
  html?: string;
  /** Whether the details should be open by default */
  open?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Unique identifier */
  id?: string;
  /** Child content (will override text/html props if provided) */
  children?: React.ReactNode;
}

/**
 * Details component for progressive disclosure of content
 * 
 * Used to hide additional information behind a disclosure widget that users can expand
 * when needed. Uses the standard HTML details element with NHS styling.
 */
export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(
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
      'nhsuk-details',
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
  <summary className="nhsuk-details__summary" tabIndex={0}>
          {summaryContent}
        </summary>
        <div className="nhsuk-details__text">
          {bodyContent}
        </div>
      </details>
    );
  }
);

Details.displayName = 'Details';

export default Details;
