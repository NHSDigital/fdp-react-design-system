import React from 'react';
import classNames from 'classnames';
import './Select.scss';
import { SelectProps } from './Select.types';

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  value,
  defaultValue,
  disabled = false,
  required = false,
  hasError = false,
  describedBy,
  className,
  multiple = false,
  size,
  autoComplete,
  options,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const selectClasses = classNames(
    'nhsuk-select',
    {
      'nhsuk-select--error': hasError,
    },
    className
  );

  return (
    <select
      className={selectClasses}
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      aria-describedby={describedBy}
      multiple={multiple}
      size={size}
      autoComplete={autoComplete}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      {...props}
    >
      {options.map((option, index) => (
        <option
          key={`${option.value}-${index}`}
          value={option.value}
          disabled={option.disabled}
          selected={option.selected}
        >
          {option.text}
        </option>
      ))}
    </select>
  );
};
