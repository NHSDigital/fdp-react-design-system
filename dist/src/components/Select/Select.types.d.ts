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
export interface SelectProps {
    /** The HTML id attribute for the select */
    id: string;
    /** The name attribute for the select */
    name: string;
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
    /** The options for the select */
    options: SelectOption[];
    /** Change event handler */
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    /** Blur event handler */
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    /** Focus event handler */
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}
