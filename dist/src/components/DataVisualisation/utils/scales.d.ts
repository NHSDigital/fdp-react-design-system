export declare function createXTimeScale<T>(data: T[], accessor: (d: T) => Date, range: [number, number]): import("d3-scale").ScaleTime<number, number, never>;
export declare function createYLinearScale<T>(data: T[], accessor: (d: T) => number, range: [number, number]): import("d3-scale").ScaleLinear<number, number, never>;
export declare function createLinePath<T>(data: T[], x: (d: T) => number, y: (d: T) => number, options?: {
    smooth?: boolean;
}): string;
