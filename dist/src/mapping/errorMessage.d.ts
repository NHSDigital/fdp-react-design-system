export interface ErrorMessageInputProps {
    id?: string;
    className?: string;
    visuallyHiddenText?: string;
}
export interface NormalisedErrorMessageModel {
    classes: string;
    id?: string;
    visuallyHiddenText: string;
}
export declare function mapErrorMessageProps(input: ErrorMessageInputProps): NormalisedErrorMessageModel;
