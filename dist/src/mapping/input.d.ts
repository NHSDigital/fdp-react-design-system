export interface InputMapperProps {
    id: string;
    name: string;
    type?: string;
    hasError?: boolean;
    width?: string;
    className?: string;
    range?: {
        isRange: boolean;
        showValueLabels: boolean;
        showCurrentValue: boolean;
    };
}
export interface NormalisedInputModel {
    classes: string;
    isRange: boolean;
}
export declare function mapInputProps(p: InputMapperProps): NormalisedInputModel;
