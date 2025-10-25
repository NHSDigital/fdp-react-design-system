import type { SPCDatum } from "../SPCChart.props";
/** Compute y-domain given data, optional limits, flags, and targets. */
export declare function computeYDomain(data: SPCDatum[], limits: {
    mean?: number | null;
    ucl?: number | null;
    lcl?: number | null;
    onePos?: number | null;
    oneNeg?: number | null;
    twoPos?: number | null;
    twoNeg?: number | null;
}, flags: {
    alwaysShowZeroY: boolean;
    alwaysShowHundredY: boolean;
    percentScale: boolean;
}, targets?: Array<number | null | undefined> | null): [number, number] | undefined;
