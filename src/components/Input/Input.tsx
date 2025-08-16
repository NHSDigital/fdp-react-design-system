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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    const el = event.target as HTMLInputElement;
    setCurrentValue(el.value);
    // Only forward real change events (have nativeEvent) or synthesized key events where value changed
    if ('type' in event && (event as any).nativeEvent) {
      onChange?.(event as any);
    } else if (event.type === 'keydown') {
      onChange?.(event as any);
    }
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

  const isControlled = value !== undefined;
  const sharedRangeProps = {
    id,
    name,
    type,
    placeholder,
    disabled,
    readOnly,
    required,
    'aria-describedby': describedBy,
    inputMode,
    autoComplete,
    maxLength,
    minLength,
    pattern,
    step,
    min,
    max,
    onChange: handleChange,
    onBlur,
    onFocus,
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      // For range sliders, jsdom may not update value when typing numbers; manually adjust
      if (isRange && /[0-9]/.test(e.key)) {
        const next = (currentValue?.toString() || '') + e.key;
        (e.target as HTMLInputElement).value = next;
        handleChange(e);
      }
      onKeyDown?.(e);
    },
    ...props,
  } as const;

  // Range input handling: avoid React warning by not passing both value and defaultValue for uncontrolled inputs
  const uncontrolledRangeProps = (!isControlled && defaultValue !== undefined)
    ? { defaultValue }
    : {};
  const controlledRangeProps = isControlled ? { value } : {};

  const renderRangeInput = () => (
    <input
      className={inputClasses}
      // Only supply value if controlled; otherwise rely on defaultValue
      {...controlledRangeProps}
      {...uncontrolledRangeProps}
      // For internal current value display we still keep state, but don't force React controlled mode
      data-current-value={currentValue}
      {...sharedRangeProps}
    />
  );

  const rangeWrapper = isRange ? (
    <div className="nhsuk-input-range-wrapper">
      {showValueLabels && (
        <div className="nhsuk-input-range-labels">
          <span className="nhsuk-input-range-label nhsuk-input-range-label--min">
            {valueLabels?.min || min || '0'}
          </span>
          {renderRangeInput()}
          <span className="nhsuk-input-range-label nhsuk-input-range-label--max">
            {valueLabels?.max || max || '100'}
          </span>
        </div>
      )}
      {!showValueLabels && renderRangeInput()}
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
      {...(value === undefined && defaultValue !== undefined ? { defaultValue } : {})}
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
