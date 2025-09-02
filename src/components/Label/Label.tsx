import React from 'react';
import './Label.scss';
import { LabelProps } from './Label.types';
import { mapLabelProps } from '../../mapping/label';

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  className,
  isPageHeading = false,
  size = 'm',
  children,
  ...props
}) => {
  const model = mapLabelProps({ size, isPageHeading, className, htmlFor });
  const LabelElement = model.tag;

  return (
  <LabelElement className={model.classes} htmlFor={model.htmlFor} {...props}>
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
