export interface EventLike {
    x: string | number | Date;
}
export declare function toTimeBetweenEvents<T extends EventLike>(events: T[], opts?: {
    toMillis?: (x: T["x"]) => number;
}): {
    x: T["x"];
    value: number;
}[];
export declare function toCountBetweenEvents<T extends {
    x: string | number | Date;
    occurred?: boolean | number;
}>(rows: T[]): {
    x: T["x"];
    value: number;
}[];
