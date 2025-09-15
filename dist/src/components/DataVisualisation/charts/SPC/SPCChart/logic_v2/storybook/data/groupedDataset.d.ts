import { ImprovementDirection } from "../../types";
export type Group = {
    metric: string;
    improvement?: "up" | "down" | "neither" | "";
    data: {
        date: string;
        value: number;
        colour: string;
        judgement: string;
    }[];
};
export declare function getGroups(): Group[];
export declare function getMetricOptions(): string[];
export declare function findGroup(metric?: string): Group | undefined;
export declare function toV2ImprovementDir(key: "neither" | "up" | "down" | undefined): ImprovementDirection;
export declare function normaliseSeries(group: Group): {
    data: {
        x: Date;
        value: number;
    }[];
};
export declare function deriveBaselines(group: Group, length: number): (boolean | null | undefined)[] | undefined;
