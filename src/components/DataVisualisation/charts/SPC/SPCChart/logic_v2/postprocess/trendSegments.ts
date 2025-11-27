import {
	ImprovementDirection,
	SpcRowV2,
	TrendSegmentationStrategy,
} from "../types";

export enum TrendDirection { Up = "Up", Down = "Down" }
export enum MeanSide { Above = "Above", Below = "Below" }

export interface TrendSegment {
	trendDirection: TrendDirection;
	start: number; // inclusive index in the provided rows array
	end: number; // inclusive index
	side: MeanSide; // side of mean for all rows in this segment
	minValue: number;
	maxValue: number;
	maxAbsDeltaFromMean: number; // max |value-mean| within segment
}

export interface TrendRun {
	trendDirection: TrendDirection;
	start: number;
	end: number; // inclusive
	segments: TrendSegment[];
}

function signOf(x: number): -1 | 0 | 1 {
	if (x > 0) return 1;
	if (x < 0) return -1;
	return 0;
}

function sideFor(delta: number): MeanSide | undefined {
	const s = signOf(delta);
	if (s > 0) return MeanSide.Above;
	if (s < 0) return MeanSide.Below;
	return undefined;
}

/**
 * Compute contiguous trend runs from backfilled trend flags, and split them into
 * mean-side-consistent segments (Above/Below) across partition mean steps.
 * Points equal to mean are treated as a boundary (not included in either side),
 * so segments will not include rows where value === mean.
 */
export function computeTrendSegments(
	rows: ReadonlyArray<SpcRowV2>
): TrendRun[] {
	const runs: TrendRun[] = [];

	// Small helpers to keep the loop readable while preserving control flow
	const startSegment = (
		k: number,
		initialSide: MeanSide,
		value: number
	): {
		segStart: number;
		segSide: MeanSide;
		minV: number;
		maxV: number;
		maxAbsDelta: number;
	} => ({
		segStart: k,
		segSide: initialSide,
		minV: value,
		maxV: value,
		maxAbsDelta: 0, // caller sets initial delta immediately after
	});

	const extendSegment = (
		value: number,
		deltaAbs: number,
		minV: number,
		maxV: number,
		maxAbsDelta: number
	): { minV: number; maxV: number; maxAbsDelta: number } => ({
		minV: Math.min(minV, value),
		maxV: Math.max(maxV, value),
		maxAbsDelta: Math.max(maxAbsDelta, deltaAbs),
	});

	const flushSegment = (
		segments: TrendSegment[],
		segStart: number,
		endIdx: number,
		segSide: MeanSide,
		minV: number,
		maxV: number,
		maxAbsDelta: number,
		dir: TrendDirection
	) => {
		segments.push({
			trendDirection: dir,
			start: segStart,
			end: endIdx,
			side: segSide,
			minValue: minV,
			maxValue: maxV,
			maxAbsDeltaFromMean: maxAbsDelta,
		});
	};

	// Build contiguous runs for trendUp and trendDown separately
	let i = 0;
	while (i < rows.length) {
		const r = rows[i];
		if (!r || r.value == null || r.ghost || (!r.trendUp && !r.trendDown)) {
			i++;
			continue;
		}
		const dir: TrendDirection = r.trendUp
			? TrendDirection.Up
			: r.trendDown
				? TrendDirection.Down
				: (undefined as any);
		// start of run
		let start = i;
		let j = i;
		for (; j < rows.length; j++) {
			const rr = rows[j];
			if (!rr || rr.value == null || rr.ghost) break;
			const sameDir = dir === TrendDirection.Up ? rr.trendUp : rr.trendDown;
			if (!sameDir) break;
		}
		const end = j - 1; // inclusive

		// Segment this run into above/below-mean pieces
		const segments: TrendSegment[] = [];
		let segStart: number | undefined = undefined;
		let segSide: MeanSide | undefined = undefined;
		let minV = Infinity,
			maxV = -Infinity,
			maxAbsDelta = 0;

		for (let k = start; k <= end; k++) {
			const row = rows[k]!;
			if (row.value == null) continue;
			const delta = row.value - (row.mean ?? 0);
			const side = sideFor(delta);

			if (!side) {
				// value equals mean → boundary: close current seg (if any) and skip this row
				if (segStart !== undefined) {
					flushSegment(segments, segStart, k - 1, segSide!, minV, maxV, maxAbsDelta, dir);
					segStart = undefined;
					segSide = undefined;
					minV = Infinity;
					maxV = -Infinity;
					maxAbsDelta = 0;
				}
				continue;
			}

			if (segStart === undefined) {
				// start new segment
				({ segStart, segSide, minV, maxV, maxAbsDelta } = (() => {
					const s = startSegment(k, side, row.value);
					return {
						segStart: s.segStart,
						segSide: s.segSide,
						minV: s.minV,
						maxV: s.maxV,
						maxAbsDelta: Math.abs(delta),
					};
				})());
			} else if (side !== segSide) {
				// flush previous segment and start new
				flushSegment(segments, segStart, k - 1, segSide!, minV, maxV, maxAbsDelta, dir);
				({ segStart, segSide, minV, maxV, maxAbsDelta } = (() => {
					const s = startSegment(k, side, row.value);
					return {
						segStart: s.segStart,
						segSide: s.segSide,
						minV: s.minV,
						maxV: s.maxV,
						maxAbsDelta: Math.abs(delta),
					};
				})());
			} else {
				// extend
				const updated = extendSegment(row.value, Math.abs(delta), minV, maxV, maxAbsDelta);
				minV = updated.minV;
				maxV = updated.maxV;
				maxAbsDelta = updated.maxAbsDelta;
			}
		}
		if (segStart !== undefined) {
			flushSegment(segments, segStart, end, segSide!, minV, maxV, maxAbsDelta, dir);
		}

		runs.push({ trendDirection: dir, start, end, segments });
		i = end + 1;
	}

	return runs;
}

export interface SegmentHighlightOptions {
	metricImprovement: ImprovementDirection;
	strategy?: TrendSegmentationStrategy;
}

/** Map metricImprovement to favourable mean side */
function favourableSide(impr: ImprovementDirection): MeanSide | undefined {
	if (impr === ImprovementDirection.Up) return MeanSide.Above;
	if (impr === ImprovementDirection.Down) return MeanSide.Below;
	return undefined;
}

function oppositeSide(side: MeanSide | undefined): MeanSide | undefined {
	if (!side) return undefined;
	return side === MeanSide.Above ? MeanSide.Below : MeanSide.Above;
}

/**
 * Choose segments to highlight from a computed run set using a strategy.
 * - FavourableSide: highlight all segments on the favourable side of mean
 * - CrossingAfterFavourable: if a side change occurs, highlight only the first favourable-side
 *   segment after a crossing; otherwise fall back to FavourableSide
 * - ExtremeFavourable: pick the favourable-side segment with the largest |value-mean| extremum
 */
export function chooseSegmentsForHighlight(
	runs: TrendRun[],
	opts: SegmentHighlightOptions
): TrendSegment[] {

	const strategy = opts.strategy ?? TrendSegmentationStrategy.CrossingAfterFavourable;
	const fav = favourableSide(opts.metricImprovement);
	const unfav = oppositeSide(fav);

	const highlight: TrendSegment[] = [];

	for (const run of runs) {
		if (!fav) {
			// Neither: no inherent favourable side; choose the segment with largest absolute distance
			if (
				strategy === TrendSegmentationStrategy.ExtremeFavourable ||
				strategy === TrendSegmentationStrategy.CrossingAfterFavourable
			) {
				const all = run.segments;
				if (all.length === 0) continue;
				let best = all[0];
				for (const s of all)
					if (s.maxAbsDeltaFromMean > best.maxAbsDeltaFromMean) best = s;
				highlight.push(best);
			} else {
				// FavourableSide in Neither -> nothing by default
			}
			continue;
		}

		if (strategy === TrendSegmentationStrategy.FavourableSide) {
			highlight.push(...run.segments.filter((s) => s.side === fav));
			continue;
		}

		if (strategy === TrendSegmentationStrategy.UnfavourableSide) {
			highlight.push(...run.segments.filter((s) => s.side === unfav));
			continue;
		}

		if (strategy === TrendSegmentationStrategy.CrossingAfterFavourable) {
			// Detect first segment with fav side that is preceded by a different side
			const segs = run.segments;
			let chosen: TrendSegment | undefined = undefined;
			for (let idx = 0; idx < segs.length; idx++) {
				const s = segs[idx];
				if (s.side === fav) {
					if (idx > 0 && segs[idx - 1].side !== fav) {
						chosen = s;
						break;
					}
					// if run starts already on favourable side and never crosses, fall back later
				}
			}
			if (!chosen) {
				// fall back: pick the longest favourable segment (by length) if any
				const favSegs = segs.filter((s) => s.side === fav);
				if (favSegs.length > 0) {
					chosen = favSegs.reduce(
						(a, b) => (b.end - b.start > a.end - a.start ? b : a),
						favSegs[0]
					);
				}
			}
			if (chosen) highlight.push(chosen);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.CrossingAfterUnfavourable) {
			const segs = run.segments;
			let chosen: TrendSegment | undefined = undefined;
			for (let idx = 0; idx < segs.length; idx++) {
				const s = segs[idx];
				if (s.side === unfav) {
					if (idx > 0 && segs[idx - 1].side !== unfav) {
						chosen = s;
						break;
					}
				}
			}
			if (!chosen) {
				const unSegs = segs.filter((s) => s.side === unfav);
				if (unSegs.length > 0) {
					chosen = unSegs.reduce(
						(a, b) => (b.end - b.start > a.end - a.start ? b : a),
						unSegs[0]
					);
				}
			}
			if (chosen) highlight.push(chosen);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.ExtremeFavourable) {
			const favSegs = run.segments.filter((s) => s.side === fav);
			if (favSegs.length === 0) continue;
			const chosen = favSegs.reduce((a, b) =>
				b.maxAbsDeltaFromMean > a.maxAbsDeltaFromMean ? b : a
			);
			highlight.push(chosen);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.ExtremeUnfavourable) {
			const unSegs = run.segments.filter((s) => s.side === unfav);
			if (unSegs.length === 0) continue;
			const chosen = unSegs.reduce((a, b) => (b.maxAbsDeltaFromMean > a.maxAbsDeltaFromMean ? b : a));
			highlight.push(chosen);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.FirstFavourable) {
			const seg = run.segments.find((s) => s.side === fav);
			if (seg) highlight.push(seg);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.FirstUnfavourable) {
			const seg = run.segments.find((s) => s.side === unfav);
			if (seg) highlight.push(seg);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.LongestFavourable) {
			const favSegs = run.segments.filter((s) => s.side === fav);
			if (favSegs.length === 0) continue;
			const chosen = favSegs.reduce((a, b) =>
				b.end - b.start > a.end - a.start ? b : a
			);
			highlight.push(chosen);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.LongestUnfavourable) {
			const unSegs = run.segments.filter((s) => s.side === unfav);
			if (unSegs.length === 0) continue;
			const chosen = unSegs.reduce((a, b) => (b.end - b.start > a.end - a.start ? b : a));
			highlight.push(chosen);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.LastFavourable) {
			const favSegs = run.segments.filter((s) => s.side === fav);
			if (favSegs.length === 0) continue;
			highlight.push(favSegs[favSegs.length - 1]);
			continue;
		}

		if (strategy === TrendSegmentationStrategy.LastUnfavourable) {
			const unSegs = run.segments.filter((s) => s.side === unfav);
			if (unSegs.length === 0) continue;
			highlight.push(unSegs[unSegs.length - 1]);
			continue;
		}
	}

	return highlight;
}
