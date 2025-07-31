import { ReactNode } from '../../../node_modules/react';
export interface CheckboxConditionalProps {
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
export interface CheckboxItem {
    /** The value of the checkbox */
    value: string;
    /** The text label for the checkbox */
    text: string;
    /** Optional hint text that appears below the label */
    hint?: string;
    /** Whether the checkbox is checked by default */
    checked?: boolean;
    /** Whether the checkbox is disabled */
    disabled?: boolean;
    /** Conditional content to show when this checkbox is selected - can be custom ReactNode or structured input props */
    conditional?: ReactNode | CheckboxConditionalProps;
    /** Additional attributes to pass to the input element */
    attributes?: React.InputHTMLAttributes<HTMLInputElement>;
}
export interface CheckboxesProps {
    /** Array of checkbox items */
    items: CheckboxItem[];
    /** The name attribute for all checkboxes in this group */
    name: string;
    /** ID prefix for the fieldset and checkboxes */
    idPrefix?: string;
    /** Legend text for the checkbox group */
    legend?: string;
    /** Whether the legend is rendered as a page heading */
    isPageHeading?: boolean;
    /** Size of the legend text */
    legendSize?: 'xl' | 'l' | 'm' | 's';
    /** Hint text for the entire checkbox group */
    hint?: string;
    /** Error message for the checkbox group */
    errorMessage?: string;
    /** Additional CSS classes */
    className?: string;
    /** Whether the checkboxes are arranged in small size */
    small?: boolean;
    /** Callback fired when any checkbox changes */
    onChange?: (values: string[]) => void;
    /** Additional attributes for the fieldset */
    fieldsetAttributes?: React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
    /** Additional attributes for the outer div */
    attributes?: React.HTMLAttributes<HTMLDivElement>;
}
export interface CheckboxStyleProps {
    size: 'default' | 'small';
    disabled: boolean;
    hasError: boolean;
}
