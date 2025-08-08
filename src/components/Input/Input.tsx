import React, { useState, useEffect } from 'react';
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
  showValueLabels = false,
  showCurrentValue = false,
  valueLabels,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(value || defaultValue || (type === 'range' ? min || '0' : ''));

  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    onChange?.(event);
  };

  const isRange = type === 'range';
  
  const inputClasses = classNames(
    'nhsuk-input',
    {
      'nhsuk-input--error': hasError,
      'nhsuk-input--range': isRange,
      [`nhsuk-input--width-${width}`]: width !== 'full' && !isRange,
    },
    className
  );

  const rangeWrapper = isRange ? (
    <div className="nhsuk-input-range-wrapper">
      {showValueLabels && (
        <div className="nhsuk-input-range-labels">
          <span className="nhsuk-input-range-label nhsuk-input-range-label--min">
            {valueLabels?.min || min || '0'}
          </span>
          <span className="nhsuk-input-range-label nhsuk-input-range-label--max">
            {valueLabels?.max || max || '100'}
          </span>
        </div>
      )}
      <input
        className={inputClasses}
        id={id}
        name={name}
        type={type}
        value={currentValue}
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
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        {...props}
      />
      {showCurrentValue && (
        <div className="nhsuk-input-range-current-value">
          <span className="nhsuk-input-range-current-label">
            {valueLabels?.current || 'Current value:'} <strong>{currentValue}</strong>
          </span>
        </div>
      )}
    </div>
  ) : null;

  if (isRange) {
    return rangeWrapper;
  }

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
