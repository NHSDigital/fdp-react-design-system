import React from 'react';
import classNames from 'classnames';
import './Label.scss';
import { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  className,
  isPageHeading = false,
  size = 'm',
  children,
  ...props
}) => {
  const labelClasses = classNames(
    'nhsuk-label',
    {
      [`nhsuk-label--${size}`]: size !== 'm',
    },
    className
  );

  const LabelElement = isPageHeading ? 'h1' : 'label';

  return (
    <LabelElement
      className={labelClasses}
      htmlFor={isPageHeading ? undefined : htmlFor}
      {...props}
    >
      {isPageHeading ? (
        <label className="nhsuk-label-wrapper" htmlFor={htmlFor}>
          {children}
        </label>
      ) : (
        children
      )}
    </LabelElement>
  );
};
