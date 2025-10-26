export interface CheckboxesInputProps {
    small?: boolean;
    className?: string;
    hasError?: boolean;
}
export interface NormalisedCheckboxesModel {
    classes: string;
    formGroupClasses: string;
}
export declare function mapCheckboxesProps(input: CheckboxesInputProps): NormalisedCheckboxesModel;
