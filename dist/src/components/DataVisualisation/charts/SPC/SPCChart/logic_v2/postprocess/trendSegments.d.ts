import { ImprovementDirection, SpcRowV2, TrendSegmentationStrategy } from "../types";
export type TrendDirection = "Up" | "Down";
export type MeanSide = "Above" | "Below";
export interface TrendSegment {
    trendDirection: TrendDirection;
    start: number;
    end: number;
    side: MeanSide;
    minValue: number;
    maxValue: number;
    maxAbsDeltaFromMean: number;
}
export interface TrendRun {
    trendDirection: TrendDirection;
    start: number;
    end: number;
    segments: TrendSegment[];
}
/**
 * Compute contiguous trend runs from backfilled trend flags, and split them into
 * mean-side-consistent segments (Above/Below) across partition mean steps.
 * Points equal to mean are treated as a boundary (not included in either side),
 * so segments will not include rows where value === mean.
 */
export declare function computeTrendSegments(rows: ReadonlyArray<SpcRowV2>): TrendRun[];
export interface SegmentHighlightOptions {
    metricImprovement: ImprovementDirection;
    strategy?: TrendSegmentationStrategy;
}
/**
 * Choose segments to highlight from a computed run set using a strategy.
 * - FavourableSide: highlight all segments on the favourable side of mean
 * - CrossingAfterFavourable: if a side change occurs, highlight only the first favourable-side
 *   segment after a crossing; otherwise fall back to FavourableSide
 * - ExtremeFavourable: pick the favourable-side segment with the largest |value-mean| extremum
 */
export declare function chooseSegmentsForHighlight(runs: TrendRun[], opts: SegmentHighlightOptions): TrendSegment[];
