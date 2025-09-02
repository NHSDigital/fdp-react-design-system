import React from 'react';
import './Hint.scss';
import { HintProps } from './Hint.types';
import { mapHintProps } from '../../mapping/hint';

export const Hint: React.FC<HintProps> = ({ id, className, children, ...rest }) => {
  const model = mapHintProps({ id, className });
  return (
    <div className={model.classes} id={model.id} {...rest}>
      {children}
    </div>
  );
};
