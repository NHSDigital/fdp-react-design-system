import React from 'react';
import classNames from 'classnames';
import { HeaderSearchProps } from './HeaderSearch.types';
import './HeaderSearch.scss';

/**
 * HeaderSearch Component
 * 
 * A reusable search component for NHS headers that provides:
 * - Search form with proper NHS styling
 * - Accessible labels and ARIA attributes
 * - SVG search icon
 * - Configurable action URL and form attributes
 */
export const HeaderSearch: React.FC<HeaderSearchProps> = ({
  action = "https://www.nhs.uk/search/",
  name = "q",
  placeholder = "Search",
  visuallyHiddenLabel = "Search the NHS website",
  visuallyHiddenButton = "Search",
  className,
  formAttributes = {},
  inputAttributes = {},
  buttonAttributes = {},
}) => {
  // Search icon SVG - exact copy from NHS.UK
  const renderSearchIcon = () => (
    <svg 
      className="nhsuk-icon nhsuk-icon__search" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      aria-hidden="true" 
      focusable="false"
    >
      <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" />
    </svg>
  );

  return (
    <search className={classNames('nhsuk-header__search', className)}>
      <form 
        className="nhsuk-header__search-form" 
        id="search" 
        action={action} 
        method="get"
        {...formAttributes}
      >
        <label 
          className="nhsuk-u-visually-hidden" 
          htmlFor="search-field"
        >
          {visuallyHiddenLabel}
        </label>
        <input 
          className="nhsuk-header__search-input nhsuk-input" 
          id="search-field" 
          name={name} 
          type="search" 
          placeholder={placeholder} 
          autoComplete="off"
          {...inputAttributes}
        />
        <button 
          className="nhsuk-header__search-submit" 
          type="submit"
          {...buttonAttributes}
        >
          {renderSearchIcon()}
          <span className="nhsuk-u-visually-hidden">
            {visuallyHiddenButton}
          </span>
        </button>
      </form>
    </search>
  );
};
