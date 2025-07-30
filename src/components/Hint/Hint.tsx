import React from 'react';
import classNames from 'classnames';
import './Hint.scss';
import { HintProps } from './Hint.types';

export const Hint: React.FC<HintProps> = ({
  id,
  className,
  children,
  ...props
}) => {
  const hintClasses = classNames('nhsuk-hint', className);

  return (
    <div className={hintClasses} id={id} {...props}>
      {children}
    </div>
  );
};
