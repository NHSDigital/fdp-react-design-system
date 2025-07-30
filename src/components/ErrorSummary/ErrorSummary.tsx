import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import './ErrorSummary.scss';
import { ErrorSummaryProps } from './ErrorSummary.types';

export const ErrorSummary: React.FC<ErrorSummaryProps> = ({
  titleText = 'There is a problem',
  titleHtml,
  descriptionText,
  descriptionHtml,
  errorList,
  className,
  children,
  ...props
}) => {
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Auto-focus the error summary when it appears for accessibility
  useEffect(() => {
    if (errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
  }, []);

  const errorSummaryClasses = classNames(
    'nhsuk-error-summary',
    className
  );

  const renderTitle = () => {
    if (titleHtml) {
      return <span dangerouslySetInnerHTML={{ __html: titleHtml }} />;
    }
    return titleText;
  };

  const renderDescription = () => {
    if (descriptionHtml) {
      return <span dangerouslySetInnerHTML={{ __html: descriptionHtml }} />;
    }
    return descriptionText;
  };

  const renderErrorItem = (item: any) => {
    const content = item.html ? (
      <span dangerouslySetInnerHTML={{ __html: item.html }} />
    ) : (
      item.text
    );

    if (item.href) {
      return (
        <a 
          href={item.href}
          {...item.attributes}
        >
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <div
      ref={errorSummaryRef}
      className={errorSummaryClasses}
      aria-labelledby="error-summary-title"
      role="alert"
      tabIndex={-1}
      data-module="nhsuk-error-summary"
      {...props}
    >
      <h2 className="nhsuk-error-summary__title" id="error-summary-title">
        {renderTitle()}
      </h2>
      
      <div className="nhsuk-error-summary__body">
        {children && <p>{children}</p>}
        
        {!children && (descriptionText || descriptionHtml) && (
          <p>{renderDescription()}</p>
        )}
        
        <ul className="nhsuk-list nhsuk-error-summary__list" role="list">
          {errorList.map((item, index) => (
            <li key={index}>
              {renderErrorItem(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
