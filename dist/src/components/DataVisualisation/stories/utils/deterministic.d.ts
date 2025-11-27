export declare const BASE_DAY: Date;
export declare const day: (n: number) => Date;
export declare const linearSeries: (length: number, start: number, step: number, wobble?: number[]) => number[];
export declare const valueAt: (base: number) => number;
export declare function seedPRNG(seed: number): () => number;
