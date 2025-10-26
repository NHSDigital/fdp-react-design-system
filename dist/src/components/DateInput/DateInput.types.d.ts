export interface DateInputItem {
    /** Name of the input field (day, month, year) */
    name: string;
    /** Label text for the input */
    label?: string;
    /** Current value */
    value?: string;
    /** CSS classes to apply */
    classes?: string;
    /** Input ID (auto-generated if not provided) */
    id?: string;
    /** Input mode for mobile keyboards */
    inputmode?: 'search' | 'text' | 'numeric' | 'tel' | 'url' | 'email' | 'decimal';
    /** Autocomplete attribute */
    autocomplete?: string;
    /** Pattern attribute for validation */
    pattern?: string;
}
export interface DateInputProps {
    /** Unique identifier for the date input group */
    id: string;
    /** Additional CSS classes */
    className?: string;
    /** Array of date input items (day, month, year) */
    items?: DateInputItem[];
    /** Name prefix for form submission */
    namePrefix?: string;
    /** Default values for day, month, year */
    values?: {
        day?: string;
        month?: string;
        year?: string;
    };
    /** Fieldset configuration */
    fieldset?: {
        /** Legend text for the fieldset */
        legend?: string;
        /** Additional CSS classes for fieldset */
        classes?: string;
        /** Described by IDs */
        describedBy?: string;
    };
    /** Hint text configuration */
    hint?: {
        /** Hint text content */
        text?: string;
        /** HTML content (alternative to text) */
        html?: string;
        /** Additional CSS classes */
        classes?: string;
    };
    /** Error message configuration */
    errorMessage?: {
        /** Error message text */
        text?: string;
        /** HTML content (alternative to text) */
        html?: string;
        /** Additional CSS classes */
        classes?: string;
    };
    /** Callback when any of the date inputs change */
    onChange?: (values: {
        day: string;
        month: string;
        year: string;
    }) => void;
}
