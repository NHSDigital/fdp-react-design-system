import React from 'react';
import classNames from 'classnames';
import './Textarea.scss';
import { TextareaProps } from './Textarea.types';

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  hasError = false,
  describedBy,
  className,
  rows = 5,
  cols,
  maxLength,
  minLength,
  wrap = 'soft',
  resize = 'vertical',
  autoComplete,
  spellCheck,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  ...props
}) => {
  const textareaClasses = classNames(
    'nhsuk-textarea',
    {
      'nhsuk-textarea--error': hasError,
      [`nhsuk-textarea--resize-${resize}`]: resize !== 'vertical',
    },
    className
  );

  return (
    <textarea
      className={textareaClasses}
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      aria-describedby={describedBy}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      minLength={minLength}
      wrap={wrap}
      autoComplete={autoComplete}
      spellCheck={spellCheck}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
};
