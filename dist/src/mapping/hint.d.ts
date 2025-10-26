export interface HintInputProps {
    className?: string;
    id?: string;
}
export interface NormalisedHintModel {
    classes: string;
    id?: string;
}
export declare function mapHintProps(input: HintInputProps): NormalisedHintModel;
