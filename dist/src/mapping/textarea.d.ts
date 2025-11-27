export interface TextareaInputProps {
    hasError?: boolean;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    className?: string;
    describedBy?: string;
}
export interface NormalisedTextareaModel {
    classes: string;
    describedBy?: string;
}
export declare function mapTextareaProps(input: TextareaInputProps): NormalisedTextareaModel;
