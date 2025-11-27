export interface TextareaProps {
    /** The HTML id attribute for the textarea */
    id: string;
    /** The name attribute for the textarea */
    name: string;
    /** The value of the textarea */
    value?: string;
    /** Default value for uncontrolled textareas */
    defaultValue?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Whether the textarea is disabled */
    disabled?: boolean;
    /** Whether the textarea is readonly */
    readOnly?: boolean;
    /** Whether the textarea is required */
    required?: boolean;
    /** Whether the textarea has an error */
    hasError?: boolean;
    /** ARIA describedby attribute for accessibility */
    describedBy?: string;
    /** Additional CSS classes */
    className?: string;
    /** Number of visible text lines (rows) */
    rows?: number;
    /** Number of visible character widths (cols) */
    cols?: number;
    /** Maximum length of input */
    maxLength?: number;
    /** Minimum length of input */
    minLength?: number;
    /** How text wraps */
    wrap?: 'hard' | 'soft' | 'off';
    /** Whether to resize the textarea */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    /** Autocomplete attribute */
    autoComplete?: string;
    /** Spell check */
    spellCheck?: boolean;
    /** Change event handler */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** Blur event handler */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** Focus event handler */
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** Key down event handler */
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
