export interface ButtonInputProps {
    variant?: string;
    size?: string;
    fullWidth?: boolean;
    className?: string;
    preventDoubleClick?: boolean;
    href?: string;
}
export interface NormalisedButtonModel {
    tag: 'button' | 'a';
    classes: string;
    data: Record<string, string>;
    attrs: Record<string, any>;
    preventDoubleClick: boolean;
}
export declare function mapButtonProps(input: ButtonInputProps): NormalisedButtonModel;
