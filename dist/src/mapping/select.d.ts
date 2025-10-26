export interface SelectInputProps {
    hasError?: boolean;
    className?: string;
}
export interface NormalisedSelectModel {
    classes: string;
}
export declare function mapSelectProps(input: SelectInputProps): NormalisedSelectModel;
