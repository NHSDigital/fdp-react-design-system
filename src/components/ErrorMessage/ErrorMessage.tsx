import React from 'react';
import classNames from 'classnames';
import './ErrorMessage.scss';
import { ErrorMessageProps } from './ErrorMessage.types';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  id,
  className,
  visuallyHiddenText = 'Error:',
  children,
  ...props
}) => {
  const errorClasses = classNames('nhsuk-error-message', className);

  return (
    <span className={errorClasses} id={id} {...props}>
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText} </span>
      {children}
    </span>
  );
};
