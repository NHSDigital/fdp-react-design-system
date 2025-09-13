export type FieldsetLegendSize = 'xl' | 'l' | 'm' | 's';
export interface FieldsetLegendInput {
    size?: FieldsetLegendSize;
    className?: string;
    isPageHeading?: boolean;
}
export interface FieldsetInputProps {
    className?: string;
    describedBy?: string;
    legend?: FieldsetLegendInput;
}
export interface NormalisedFieldsetModel {
    fieldsetClasses: string;
    legendClasses?: string;
    legendIsPageHeading: boolean;
    describedBy?: string;
}
export declare function mapFieldsetProps(input: FieldsetInputProps): NormalisedFieldsetModel;
