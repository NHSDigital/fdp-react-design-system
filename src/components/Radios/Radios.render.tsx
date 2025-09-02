import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { RadiosProps, RadioConditionalProps } from './Radios.types';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { Fieldset } from '../Fieldset/Fieldset';
import './Radios.scss';

// Pure render function used by both client (interactive) and server (static) variants.
// The caller supplies: selectedValue (string), event handlers (possibly no-ops for server),
// and flags controlling whether runtime behaviours should be activated.
export interface RenderRadiosOptions {
  variant: 'client' | 'server';
  selectedValue: string;
  enableBehaviourAttr?: boolean; // whether to include data-nhs-behaviour attribute
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  itemsRef?: React.MutableRefObject<HTMLInputElement[]>; // only for client roving focus
}

export function renderRadiosMarkup(
  props: RadiosProps,
  {
    variant,
    selectedValue,
    enableBehaviourAttr,
    handleChange,
    handleBlur,
    handleFocus,
    handleKeyDown,
    itemsRef,
  }: RenderRadiosOptions
) {
  const {
    name,
    hasError = false,
    describedBy,
    className,
    size = 'normal',
    inline = false,
    options,
    ...rest
  } = props;

  const radiosClasses = classNames(
    'nhsuk-radios',
    {
      'nhsuk-radios--error': hasError,
      'nhsuk-radios--small': size === 'small',
      'nhsuk-radios--inline': inline,
    },
    className
  );

  return (
    <Fieldset>
      <div
        className={radiosClasses}
        {...rest}
        {...(enableBehaviourAttr ? { 'data-nhs-behaviour': 'radios' } : {})}
      >
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
                {...(variant === 'client'
                  ? { checked: isSelected, onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, onKeyDown: handleKeyDown, ref: (el: HTMLInputElement) => { if (el && itemsRef) itemsRef.current[index] = el; } }
                  : { defaultChecked: isSelected, 'data-nhs-radios-input': true })}
                aria-describedby={describedBy}
              />
              <label className="nhsuk-radios__label" htmlFor={radioId}>
                {option.text}
              </label>
              {option.hint && (
                <div className="nhsuk-radios__hint">{option.hint}</div>
              )}
              {option.conditional && (
                <div
                  className={classNames('nhsuk-radios__conditional', {
                    'nhsuk-radios__conditional--hidden': !isSelected,
                  })}
                  id={conditionalId}
                  {...(variant === 'server' ? { 'data-nhs-radios-conditional': true } : {})}
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
    </Fieldset>
  );
}
