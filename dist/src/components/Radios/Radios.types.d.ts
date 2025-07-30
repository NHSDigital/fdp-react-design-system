export interface RadioOption {
    /** The value of the radio option */
    value: string;
    /** The display text for the radio option */
    text: React.ReactNode;
    /** Hint text for this option */
    hint?: React.ReactNode;
    /** Whether this option is disabled */
    disabled?: boolean;
    /** Conditional content to show when this option is selected */
    conditional?: React.ReactNode;
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
