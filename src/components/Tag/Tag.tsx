import React from 'react';
import classNames from 'classnames';
import './Tag.scss';
import { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({
  text,
  html,
  color = 'default',
  noBorder = false,
  className,
  ...props
}) => {
  const tagClasses = classNames(
    'nhsuk-tag',
    {
      [`nhsuk-tag--${color}`]: color !== 'default',
      'nhsuk-tag--no-border': noBorder,
    },
    className
  );

  return (
    <strong className={tagClasses} {...props}>
      {html ? (
        <span dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        text
      )}
    </strong>
  );
};
