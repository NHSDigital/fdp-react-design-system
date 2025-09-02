import React from 'react';
import './ErrorMessage.scss';
import { ErrorMessageProps } from './ErrorMessage.types';
import { mapErrorMessageProps } from '../../mapping/errorMessage';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ id, className, visuallyHiddenText = 'Error:', children, ...rest }) => {
  const model = mapErrorMessageProps({ id, className, visuallyHiddenText });
  return (
    <span className={model.classes} id={model.id} {...rest}>
      <span className="nhsuk-u-visually-hidden">{model.visuallyHiddenText} </span>
      {children}
    </span>
  );
};
