import React from 'react';
import classNames from 'classnames';
import './Tag.scss';
import { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({
  text,
  html,
  children,
  color = 'default',
  noBorder = false,
  closable = false,
  onClose,
  disabled = false,
  className,
  ...props
}) => {
  const tagClasses = classNames(
    'nhsuk-tag',
    {
      [`nhsuk-tag--${color}`]: color !== 'default',
      'nhsuk-tag--no-border': noBorder,
      'nhsuk-tag--closable': closable,
      'nhsuk-tag--disabled': disabled,
    },
    className
  );

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };

  return (
    <strong className={tagClasses} {...props}>
      {/* Content - children take precedence, then html, then text */}
      {children ? (
        children
      ) : html ? (
        <span dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        text
      )}
      
      {/* Close button */}
      {closable && (
        <button
          type="button"
          className="nhsuk-tag__close"
          onClick={handleClose}
          disabled={disabled}
          aria-label="Remove"
          title="Remove"
        >
          ×
        </button>
      )}
    </strong>
  );
};
