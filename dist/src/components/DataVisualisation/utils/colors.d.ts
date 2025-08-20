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
export {};
