export interface HeadingInputProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    className?: string;
    marginBottom?: string;
}
export interface NormalisedHeadingModel {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    classes: string;
    style: Record<string, any> | undefined;
}
export declare function mapHeadingProps(input: HeadingInputProps): NormalisedHeadingModel;
