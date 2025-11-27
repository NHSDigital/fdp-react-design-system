import React from 'react';

export interface CheckboxProps {
  /** The HTML id attribute for the checkbox */
  id: string;
  /** The name attribute for the checkbox */
  name?: string;
  /** Whether the checkbox is checked (controlled) */
  checked?: boolean;
  /** Whether the checkbox is checked by default (uncontrolled) */
  defaultChecked?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** The value attribute for the checkbox */
  value?: string;
  /** Hint text to display below the checkbox */
  hint?: string;
  /** Error message to display */
  errorMessage?: string;
  /** Additional CSS classes */
  className?: string;
  /** The label content for the checkbox */
  children: React.ReactNode;
  /** Change event handler that receives the checked state */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Additional HTML attributes for the input element */
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
}
