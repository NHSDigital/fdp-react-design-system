export interface TagInputProps {
    color?: string;
    noBorder?: boolean;
    closable?: boolean;
    disabled?: boolean;
    className?: string;
}
export interface NormalisedTagModel {
    classes: string;
    showClose: boolean;
    disabled: boolean;
}
export declare function mapTagProps(input: TagInputProps): NormalisedTagModel;
