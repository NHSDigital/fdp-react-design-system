import { ReactNode } from 'react';
export interface RadioConditionalProps {
    /** The label for the conditional input */
    label: string;
    /** The id for the conditional input */
    id: string;
    /** The name for the conditional input */
    name: string;
    /** The type of input (text, email, tel, etc.) */
    type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';
    /** Placeholder text for the conditional input */
    placeholder?: string;
    /** Default value for the conditional input */
    defaultValue?: string;
    /** Width of the conditional input */
    width?: 'full' | '20' | '10' | '5' | '4' | '3' | '2';
    /** Additional attributes for the conditional input */
    inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}
export interface RadioOption {
    /** The value of the radio option */
    value: string;
    /** The display text for the radio option */
    text: React.ReactNode;
    /** Hint text for this option */
    hint?: React.ReactNode;
    /** Whether this option is disabled */
    disabled?: boolean;
    /** Conditional content to show when this option is selected - can be custom ReactNode or structured input props */
    conditional?: ReactNode | RadioConditionalProps;
}
export interface RadiosProps {
    /** The name attribute for all radio inputs in the group */
    name: string;
    /** The currently selected value */
    value?: string;
    /** Default value for uncontrolled radios */
    defaultValue?: string;
    /** Whether the radio group has an error */
    hasError?: boolean;
    /** ARIA describedby attribute for accessibility */
    describedBy?: string;
    /** Additional CSS classes */
    className?: string;
    /** Inline style applied to the radios container */
    style?: React.CSSProperties;
    /** Size variant */
    size?: 'normal' | 'small';
    /** Whether to display radios inline */
    inline?: boolean;
    /** The radio options */
    options: RadioOption[];
    /** Change event handler */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Blur event handler */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Focus event handler */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
