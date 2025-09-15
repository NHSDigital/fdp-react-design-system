import { ImprovementDirection } from "../../types";
export declare const healthcareDatasets: readonly [{
    readonly name: "ED 4h compliance (%)";
    readonly direction: "up";
    readonly unit: "%";
    readonly description: "Improvement shift after month 12; higher is better.";
    readonly values: readonly [69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78, 82, 81, 80, 79, 81, 80];
}, {
    readonly name: "Average Length of Stay (days)";
    readonly direction: "down";
    readonly unit: "days";
    readonly description: "Gradual improvement with downward shift after month 12; lower is better.";
    readonly values: readonly [7.4, 7.5, 7.6, 7.3, 7.4, 7.5, 7.2, 7.3, 7.1, 7.2, 7, 7.1, 6.8, 6.7, 6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6.2, 6, 6.1, 6];
}, {
    readonly name: "30-day Readmission rate (%)";
    readonly direction: "down";
    readonly unit: "%";
    readonly description: "Concern cluster (two-of-three) and an elevated outlier; lower is better.";
    readonly values: readonly [9.1, 9, 9.2, 9.3, 9.1, 9, 9.2, 9.3, 9.1, 9, 9.2, 9.1, 9.4, 9.6, 9.5, 9.2, 9.3, 9.1, 9, 9.2, 9.1, 9, 9.1, 9];
}, {
    readonly name: "Hand hygiene compliance (%)";
    readonly direction: "up";
    readonly unit: "%";
    readonly description: "High-performing shift then a single concern dip; higher is better.";
    readonly values: readonly [86, 87, 85, 88, 87, 86, 87, 88, 86, 87, 88, 87, 92, 93, 94, 92, 93, 94, 93, 92, 85, 93, 94, 93];
}, {
    readonly name: "Falls per 1000 bed days";
    readonly direction: "down";
    readonly unit: "";
    readonly description: "Downward trend with one special-cause high point; lower is better.";
    readonly values: readonly [5.8, 5.9, 5.7, 5.8, 5.9, 5.6, 5.7, 5.5, 5.6, 5.4, 5.5, 5.3, 5.2, 5.1, 5, 4.9, 5.6, 4.8, 4.7, 4.6, 4.5, 4.4, 4.5, 4.3];
}, {
    readonly name: "RTT % patients waiting < 18 weeks";
    readonly direction: "up";
    readonly unit: "%";
    readonly description: "Indicative RTT waiting list performance; higher is better.";
    readonly values: readonly [76, 79.7, 76.2, 74.4, 74.5, 74.2, 75.2, 75.8, 74.9, 75, 74.8, 74.9, 79, 81, 80.7, 81.2, 81, 80.8, 81, 81.3, 81.6, 82, 83.2, 84.5, 84];
}];
export type HealthcareDataset = typeof healthcareDatasets[number];
export declare function datasetOptions(): string[];
export declare function findDataset(name?: string): HealthcareDataset;
export declare function months(count: number, startISO?: string): Date[];
export declare function toV2Dir(key: "up" | "down"): ImprovementDirection;
