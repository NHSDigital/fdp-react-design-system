export type MonthPoint = {
    x: string;
    y: number;
};
export declare const staffSicknessChart1: MonthPoint[];
export declare const staffSicknessChart2: MonthPoint[];
export declare const staffSicknessChart3: MonthPoint[];
export declare const staffSicknessChart4: MonthPoint[];
export declare const staffSicknessChart5: MonthPoint[];
export declare function toDateSeries(series: MonthPoint[]): {
    x: Date;
    y: number;
}[];
