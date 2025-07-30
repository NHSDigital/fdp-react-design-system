import React, { useState, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import './DateInput.scss';
import { DateInputProps, DateInputItem } from './DateInput.types';
import { Input } from '../Input';
import { Hint } from '../Hint';
import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

export const DateInput: React.FC<DateInputProps> = ({
  id,
  className,
  items,
  namePrefix,
  values = {},
  fieldset,
  hint,
  errorMessage,
  onChange,
  ...props
}) => {
  // State to manage the current values of day, month, year
  const [currentValues, setCurrentValues] = useState(() => ({
    day: values.day || '',
    month: values.month || '',
    year: values.year || ''
  }));

  // State to manage individual field errors
  const [fieldErrors, setFieldErrors] = useState<{
    day?: string;
    month?: string;
    year?: string;
  }>({});

  // Helper function to check if a year is a leap year
  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  // Helper function to get the number of days in a month
  const getDaysInMonth = (month: number, year: number): number => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
      return 29;
    }
    return daysInMonth[month - 1];
  };

  // Validation functions
  const validateDay = (day: string, month?: string, year?: string): string | undefined => {
    if (!day) return undefined; // Allow empty values
    if (!/^\d+$/.test(day)) return 'Day must be a number';
    const dayNum = parseInt(day, 10);
    
    // Basic day range check
    if (dayNum < 1 || dayNum > 31) return 'Day must be between 1 and 31';
    
    // If we have month and year, validate against actual days in that month
    if (month && year) {
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);
      if (!isNaN(monthNum) && !isNaN(yearNum) && monthNum >= 1 && monthNum <= 12) {
        const maxDays = getDaysInMonth(monthNum, yearNum);
        if (dayNum > maxDays) {
          const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                             'July', 'August', 'September', 'October', 'November', 'December'];
          return `${monthNames[monthNum - 1]} ${yearNum} only has ${maxDays} days`;
        }
      }
    }
    
    return undefined;
  };

  const validateMonth = (month: string): string | undefined => {
    if (!month) return undefined; // Allow empty values
    if (!/^\d+$/.test(month)) return 'Month must be a number';
    const monthNum = parseInt(month, 10);
    if (monthNum < 1 || monthNum > 12) return 'Month must be between 1 and 12';
    return undefined;
  };

  const validateYear = (year: string): string | undefined => {
    if (!year) return undefined; // Allow empty values
    if (!/^\d+$/.test(year)) return 'Year must be a number';
    const yearNum = parseInt(year, 10);
    const currentYear = new Date().getFullYear();
    if (yearNum < 1900 || yearNum > currentYear + 10) {
      return `Year must be between 1900 and ${currentYear + 10}`;
    }
    return undefined;
  };

  const validateDate = (day: string, month: string, year: string): string | undefined => {
    if (!day || !month || !year) return undefined;
    
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    
    // Check individual field validity first
    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) return undefined;
    if (monthNum < 1 || monthNum > 12) return undefined;
    if (yearNum < 1900) return undefined;
    
    // Check if it's a valid date using our helper function
    const maxDays = getDaysInMonth(monthNum, yearNum);
    if (dayNum < 1 || dayNum > maxDays) {
      return undefined; // Let the day validation handle this specific error
    }
    
    return undefined;
  };

  // Simple onChange handler without immediate validation
  const handleInputChange = useCallback((fieldName: string, value: string) => {
    const newValues = {
      ...currentValues,
      [fieldName]: value
    };
    setCurrentValues(newValues);

    // Call onChange if provided
    if (onChange) {
      onChange(newValues);
    }
  }, [currentValues, onChange]);

  // Validation handler for when user leaves a field (onBlur)
  const handleInputBlur = useCallback((fieldName: string) => {
    const value = currentValues[fieldName as keyof typeof currentValues];
    
    // Validate the specific field
    let fieldError: string | undefined;
    if (fieldName === 'day') {
      fieldError = validateDay(value, currentValues.month, currentValues.year);
    } else if (fieldName === 'month') {
      fieldError = validateMonth(value);
      // If month changes and day exists, revalidate day for month-specific limits
      if (!fieldError && currentValues.day) {
        const dayError = validateDay(currentValues.day, value, currentValues.year);
        setFieldErrors(prev => ({
          ...prev,
          day: dayError
        }));
      }
    } else if (fieldName === 'year') {
      fieldError = validateYear(value);
      // If year changes and day/month exist, revalidate day for leap year
      if (!fieldError && currentValues.day && currentValues.month) {
        const dayError = validateDay(currentValues.day, currentValues.month, value);
        setFieldErrors(prev => ({
          ...prev,
          day: dayError
        }));
      }
    }

    // Update field errors
    setFieldErrors(prev => ({
      ...prev,
      [fieldName]: fieldError
    }));

    // Also validate the complete date if all fields have values
    if (currentValues.day && currentValues.month && currentValues.year) {
      const dateError = validateDate(
        fieldName === 'day' ? value : currentValues.day,
        fieldName === 'month' ? value : currentValues.month,
        fieldName === 'year' ? value : currentValues.year
      );
      if (dateError) {
        // Show date error on the day field for now
        setFieldErrors(prev => ({
          ...prev,
          day: dateError
        }));
      }
    }
  }, [currentValues, validateDay, validateMonth, validateYear, validateDate]);

  // Memoized default items to prevent recreation on every render
  const defaultItems: DateInputItem[] = useMemo(() => [
    {
      name: 'day',
      classes: 'nhsuk-input--width-2',
      inputmode: 'numeric',
      pattern: '[0-9]*'
    },
    {
      name: 'month',
      classes: 'nhsuk-input--width-2',
      inputmode: 'numeric',
      pattern: '[0-9]*'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4',
      inputmode: 'numeric',
      pattern: '[0-9]*'
    }
  ], []);

  const dateInputItems = items || defaultItems;

  // Generate described by attributes
  let describedBy = fieldset?.describedBy || '';
  const hintId = hint ? `${id}-hint` : '';
  const errorId = errorMessage ? `${id}-error` : '';

  if (hintId) {
    describedBy = describedBy ? `${describedBy} ${hintId}` : hintId;
  }
  if (errorId) {
    describedBy = describedBy ? `${describedBy} ${errorId}` : errorId;
  }

  // Check if there are any field errors
  const hasFieldErrors = Object.values(fieldErrors).some(error => error);

  const formGroupClasses = classNames(
    'nhsuk-form-group',
    {
      'nhsuk-form-group--error': errorMessage || hasFieldErrors
    }
  );

  const dateInputClasses = classNames(
    'nhsuk-date-input',
    className
  );

  const renderInputs = () => (
    <>
      {hint && (
        <Hint
          id={hintId}
          className={hint.classes}
        >
          {hint.html ? (
            <span dangerouslySetInnerHTML={{ __html: hint.html }} />
          ) : (
            hint.text
          )}
        </Hint>
      )}
      
      {errorMessage && (
        <ErrorMessage
          id={errorId}
          className={errorMessage.classes}
        >
          {errorMessage.html ? (
            <span dangerouslySetInnerHTML={{ __html: errorMessage.html }} />
          ) : (
            errorMessage.text
          )}
        </ErrorMessage>
      )}

      {/* Show field-specific errors */}
      {Object.entries(fieldErrors).map(([field, error]) => 
        error ? (
          <ErrorMessage
            key={`${field}-error`}
            id={`${id}-${field}-error`}
            className="nhsuk-error-message"
          >
            <span className="nhsuk-u-visually-hidden">Error:</span> {error}
          </ErrorMessage>
        ) : null
      )}

      <div className={dateInputClasses} id={id} {...props}>
        {dateInputItems.map((item) => {
          const inputId = item.id || `${id}-${item.name}`;
          const inputName = namePrefix ? `${namePrefix}[${item.name}]` : item.name;
          const labelText = item.label || item.name.charAt(0).toUpperCase() + item.name.slice(1);
          const fieldError = fieldErrors[item.name as keyof typeof fieldErrors];
          
          // Get current value from state for this field
          const currentValue = currentValues[item.name as keyof typeof currentValues] || '';

          // Build aria-describedby including field-specific errors
          let inputDescribedBy = describedBy;
          if (fieldError) {
            const fieldErrorId = `${id}-${item.name}-error`;
            inputDescribedBy = inputDescribedBy ? `${inputDescribedBy} ${fieldErrorId}` : fieldErrorId;
          }

          return (
            <div key={item.name} className="nhsuk-date-input__item">
              <Label
                htmlFor={inputId}
                className="nhsuk-date-input__label"
              >
                {labelText}
              </Label>
              <Input
                id={inputId}
                name={inputName}
                value={currentValue}
                className={classNames('nhsuk-date-input__input', item.classes, {
                  'nhsuk-input--error': fieldError
                })}
                inputMode={item.inputmode}
                autoComplete={item.autocomplete}
                pattern={item.pattern}
                aria-describedby={inputDescribedBy || undefined}
                hasError={!!fieldError}
                onChange={(e) => handleInputChange(item.name, e.target.value)}
                onBlur={() => handleInputBlur(item.name)}
              />
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <div className={formGroupClasses}>
      {fieldset ? (
        <fieldset 
          className={classNames('nhsuk-fieldset', fieldset.classes)}
          role="group"
          aria-describedby={describedBy || undefined}
        >
          {fieldset.legend && (
            <legend className="nhsuk-fieldset__legend">
              {fieldset.legend}
            </legend>
          )}
          {renderInputs()}
        </fieldset>
      ) : (
        renderInputs()
      )}
    </div>
  );
};