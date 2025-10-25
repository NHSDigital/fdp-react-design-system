export interface RadiosInputProps {
    hasError?: boolean;
    inline?: boolean;
    size?: 'normal' | 'small';
    className?: string;
    describedBy?: string;
}
export interface NormalisedRadiosModel {
    classes: string;
    describedBy?: string;
}
export declare function mapRadiosProps(input: RadiosInputProps): NormalisedRadiosModel;
