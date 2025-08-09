export interface InputProps {
    /** The HTML id attribute for the input */
    id: string;
    /** The name attribute for the input */
    name: string;
    /** The type of input (text, email, password, etc.) */
    type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' | 'range';
    /** The value of the input */
    value?: string;
    /** Default value for uncontrolled inputs */
    defaultValue?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Whether the input is readonly */
    readOnly?: boolean;
    /** Whether the input is required */
    required?: boolean;
    /** Whether the input has an error */
    hasError?: boolean;
    /** ARIA describedby attribute for accessibility */
    describedBy?: string;
    /** Additional CSS classes */
    className?: string;
    /** Width variant for the input */
    width?: 'full' | '20' | '10' | '5' | '4' | '3' | '2';
    /** Input mode for mobile keyboards */
    inputMode?: 'text' | 'email' | 'tel' | 'url' | 'numeric' | 'decimal' | 'search';
    /** Autocomplete attribute */
    autoComplete?: string;
    /** Maximum length of input */
    maxLength?: number;
    /** Minimum length of input */
    minLength?: number;
    /** Pattern for validation */
    pattern?: string;
    /** Step for number inputs */
    step?: string | number;
    /** Minimum value for number inputs */
    min?: string | number;
    /** Maximum value for number inputs */
    max?: string | number;
    /** Show value labels for range inputs */
    showValueLabels?: boolean;
    /** Show current value for range inputs */
    showCurrentValue?: boolean;
    /** Custom labels for range input values */
    valueLabels?: {
        min?: string;
        max?: string;
        current?: string;
    };
    /** Change event handler */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Blur event handler */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Focus event handler */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Key down event handler */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
