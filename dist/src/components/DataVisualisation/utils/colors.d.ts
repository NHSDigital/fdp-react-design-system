type CategoricalStrategy = 'optimized' | 'raw';
export declare function setCategoricalColorStrategy(strategy: CategoricalStrategy): void;
export declare function getCategoricalColorStrategy(): CategoricalStrategy;
export declare function pickSeriesColor(i: number): string;
export declare function getCategoricalPalette(): string[];
export declare function getOptimizedCategoricalPalette(): string[];
export declare function getRawCategoricalPalette(): string[];
export declare function getExtendedCategoricalPalette(): string[];
export declare function pickSeriesStroke(i: number): string;
export declare function getRegionStroke(id: string): string | undefined;
export declare function pickRegionStroke(id: string, fallbackIndex: number): string;
export declare const SEVERITY_IDS: readonly ["low", "moderate", "high", "critical"];
export type SeverityId = typeof SEVERITY_IDS[number];
export declare function getSeverityColor(id: string): string | undefined;
export declare function pickSeverityColor(id: string, fallbackIndex: number): string;
export declare function getSeverityStroke(id: string): string | undefined;
export declare function pickSeverityStroke(id: string, fallbackIndex: number): string;
export declare const REGION_IDS: readonly ["north-east", "north-west", "east-of-england", "midlands", "london", "south-west", "south-east"];
export type RegionId = typeof REGION_IDS[number];
export declare function normalizeRegionId(id: string): string;
export declare function getRegionColor(id: string): string | undefined;
export declare function pickRegionColor(id: string, fallbackIndex: number): string;
export declare function getAvailableRegionIds(): string[];
export declare function invalidateColorCaches(options?: {
    regions?: boolean;
    categorical?: boolean;
    strokes?: boolean;
}): void;
export interface AssignColorOptions {
    palette?: 'categorical' | 'region';
    random?: boolean;
}
export declare function assignSeriesColors<T extends {
    id: string;
    color?: string;
}>(series: T[], { palette, random }?: AssignColorOptions): T[];
export interface SequentialScaleOptions {
    domain: [number, number];
    colors?: string[];
    steps?: number;
    clamp?: boolean;
    baseColor?: string;
    lightnessSpan?: number;
}
/** Create a sequential colour scale (continuous). */
export declare function createSequentialColorScale({ domain, colors, steps, clamp, baseColor, lightnessSpan }: SequentialScaleOptions): (value: number) => string;
export interface DivergingScaleOptions {
    domain: [number, number, number];
    colors?: string[];
    negativeColor?: string;
    positiveColor?: string;
    neutralColor?: string;
    stepsPerSide?: number;
    clamp?: boolean;
}
/** Create a diverging colour scale. */
export declare function createDivergingColorScale({ domain, colors, negativeColor, // NHS error/red
positiveColor, // NHS green
neutralColor, stepsPerSide, clamp }: DivergingScaleOptions): (value: number) => string;
export type ColorScale = (value: number) => string;
export type ColorScaleConfig = ({
    type: 'sequential';
} & SequentialScaleOptions) | ({
    type: 'diverging';
} & DivergingScaleOptions);
export declare function createColorScale(config: ColorScaleConfig): ColorScale;
export {};
