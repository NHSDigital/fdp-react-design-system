import React from 'react';
import classNames from 'classnames';
import './Fieldset.scss';
import { FieldsetProps } from './Fieldset.types';

export const Fieldset: React.FC<FieldsetProps> = ({
  children,
  legend,
  className,
  describedBy,
  ...fieldsetProps
}) => {
  const fieldsetClasses = classNames(
    'nhsuk-fieldset',
    className
  );

  const legendClasses = classNames(
    'nhsuk-fieldset__legend',
    {
      [`nhsuk-fieldset__legend--${legend?.size}`]: legend?.size,
    },
    legend?.className
  );

  const renderLegendContent = () => {
    const content = legend?.html ? (
      <span dangerouslySetInnerHTML={{ __html: legend.html }} />
    ) : (
      legend?.text
    );

    if (legend?.isPageHeading) {
      return (
        <h1 className="nhsuk-fieldset__heading">
          {content}
        </h1>
      );
    }

    return content;
  };

  return (
    <fieldset
      className={fieldsetClasses}
      aria-describedby={describedBy}
      {...fieldsetProps}
    >
      {legend && (legend.text || legend.html) && (
        <legend className={legendClasses}>
          {renderLegendContent()}
        </legend>
      )}
      {children}
    </fieldset>
  );
};
