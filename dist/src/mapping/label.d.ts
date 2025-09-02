export interface LabelInputProps {
    size?: 'xl' | 'l' | 'm' | 's';
    isPageHeading?: boolean;
    className?: string;
    htmlFor?: string;
}
export interface NormalisedLabelModel {
    tag: 'label' | 'h1';
    classes: string;
    size: string;
    htmlFor?: string;
    isPageHeading: boolean;
}
export declare function mapLabelProps(input: LabelInputProps): NormalisedLabelModel;
