import React from 'react';
import classNames from 'classnames';
import './Select.scss';
import { SelectProps, SelectOptionProps, type SelectComponent } from './Select.types';

/**
 * Select.Option Component
 * 
 * Individual option component for use within Select component
 */
export const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  disabled = false,
  selected = false, // deprecated in React 19 warnings: we map to parent defaultValue
  className,
  children,
  ...props
}) => {
  const optionClasses = classNames(
    'nhsuk-select__option',
    className
  );

  return (
    <option
      className={optionClasses}
      value={value}
      disabled={disabled}
      {...props}
    >
      {children}
    </option>
  );
};

/**
 * Select Component
 * 
 * Supports two usage patterns:
 * 1. Using options prop: <Select options={[...]} />
 * 2. Using children: <Select><Select.Option>...</Select.Option></Select>
 */
const SelectBase: React.FC<SelectProps> = ({
  id,
  name,
  ariaLabel,
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
  children,
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

  // Render options from the options prop
  const renderOptionsFromProp = () => {
    if (!options) return null;
    return options.map((option, index) => (
      <option
        key={`${option.value}-${index}`}
        value={option.value}
        disabled={option.disabled}
        // React 19: avoid selected attribute warning; rely on defaultValue / value
        data-initial-selected={option.selected || undefined}
      >
        {option.text}
      </option>
    ));
  };

  // Derive a defaultValue if none provided but options include a selected flag
  const derivedDefaultValue = (defaultValue === undefined && value === undefined && options)
    ? options.find(o => o.selected)?.value
    : undefined;

  return (
    <select
      className={selectClasses}
      id={id}
      name={name}
  aria-label={ariaLabel}
      value={value}
      defaultValue={defaultValue !== undefined ? defaultValue : derivedDefaultValue}
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
      {/* Render children if provided, otherwise use options prop */}
      {children || renderOptionsFromProp()}
    </select>
  );
};

// Create the compound component with proper typing
export const Select = SelectBase as SelectComponent;

// Attach the Option component to Select for compound component pattern
Select.Option = SelectOption;
