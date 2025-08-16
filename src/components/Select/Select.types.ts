import React from 'react';

export interface SelectOption {
  /** The value of the option */
  value: string;
  /** The display text for the option */
  text: string;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Whether the option is selected by default */
  selected?: boolean;
}

export interface SelectOptionProps {
  /** The value of the option */
  value: string;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Whether the option is selected by default */
  selected?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** The content/text for the option */
  children: React.ReactNode;
}

export interface SelectProps {
  /** The HTML id attribute for the select */
  id: string;
  /** The name attribute for the select */
  name: string;
  /** Optional accessible label for cases where external label element isn't used */
  ariaLabel?: string;
  /** The selected value */
  value?: string;
  /** Default value for uncontrolled selects */
  defaultValue?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether the select is required */
  required?: boolean;
  /** Whether the select has an error */
  hasError?: boolean;
  /** ARIA describedby attribute for accessibility */
  describedBy?: string;
  /** Additional CSS classes */
  className?: string;
  /** Allow multiple selections */
  multiple?: boolean;
  /** Number of visible options (for multiple select) */
  size?: number;
  /** Autocomplete attribute */
  autoComplete?: string;
  /** The options for the select (alternative to children) */
  options?: SelectOption[];
  /** Select.Option components as children (alternative to options prop) */
  children?: React.ReactNode;
  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  /** Focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

// Type for the compound component
export interface SelectComponent extends React.FC<SelectProps> {
  Option: React.FC<SelectOptionProps>;
}
