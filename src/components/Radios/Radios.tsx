import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { RadiosProps, RadioConditionalProps } from './Radios.types';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import './Radios.scss';

export const Radios: React.FC<RadiosProps> = ({
  name,
  value,
  defaultValue,
  hasError = false,
  describedBy,
  className,
  size = 'normal',
  inline = false,
  options,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');

  const radiosClasses = classNames(
    'nhsuk-radios',
    {
      'nhsuk-radios--error': hasError,
      'nhsuk-radios--small': size === 'small',
      'nhsuk-radios--inline': inline,
    },
    className
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={radiosClasses} {...props}>
      {options.map((option, index) => {
        const radioId = `${name}-${index}`;
        const conditionalId = option.conditional ? `${radioId}-conditional` : undefined;
        const isSelected = selectedValue === option.value;

        return (
          <div key={option.value} className="nhsuk-radios__item">
            <input
              className="nhsuk-radios__input"
              id={radioId}
              name={name}
              type="radio"
              value={option.value}
              disabled={option.disabled}
              checked={isSelected}
              aria-describedby={describedBy}
              onChange={handleChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <label className="nhsuk-radios__label" htmlFor={radioId}>
              {option.text}
            </label>
            {option.hint && (
              <div className="nhsuk-radios__hint">
                {option.hint}
              </div>
            )}
            {option.conditional && (
              <div
                className={classNames('nhsuk-radios__conditional', {
                  'nhsuk-radios__conditional--hidden': !isSelected,
                })}
                id={conditionalId}
              >
                {typeof option.conditional === 'object' && 
                 option.conditional !== null && 
                 'label' in option.conditional && 
                 'id' in option.conditional && 
                 'name' in option.conditional ? (
                  <div style={{ marginTop: '16px' }}>
                    {(option.conditional as RadioConditionalProps).label && (
                      <Label htmlFor={(option.conditional as RadioConditionalProps).id}>
                        {(option.conditional as RadioConditionalProps).label}
                      </Label>
                    )}
                    <Input {...(option.conditional as RadioConditionalProps)} />
                  </div>
                ) : (
                  option.conditional as ReactNode
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
