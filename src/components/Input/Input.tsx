import React from 'react';
import classNames from 'classnames';
import './Input.scss';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  hasError = false,
  describedBy,
  className,
  width = 'full',
  inputMode,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  step,
  min,
  max,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  ...props
}) => {
  const inputClasses = classNames(
    'nhsuk-input',
    {
      'nhsuk-input--error': hasError,
      [`nhsuk-input--width-${width}`]: width !== 'full',
    },
    className
  );

  return (
    <input
      className={inputClasses}
      id={id}
      name={name}
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      aria-describedby={describedBy}
      inputMode={inputMode}
      autoComplete={autoComplete}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      step={step}
      min={min}
      max={max}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
};
