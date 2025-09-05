export interface CsvRow {
    metric: string;
    date: Date;
    value: number;
}
export interface MetricSeries {
    metric: string;
    points: {
        x: Date;
        y: number;
    }[];
}
export declare const metricSeries: MetricSeries[];
export declare const metricLookup: Record<string, {
    x: Date;
    y: number;
}[]>;
export declare function metricToExportName(metric: string): string;
