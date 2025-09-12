import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ChartType, ImprovementDirection, VariationIcon } from "./spcConstants";

const toRows = (vals: number[]) => vals.map((v, i) => ({ x: i + 1, value: v }));

describe("SPC trend gating – cross-mean & equal-to-mean interruptions", () => {
	it("Increasing trend that straddles mean: only post-cross points become Improvement (Up direction)", () => {
		// Construct dataset: low baseline, then 6-point monotonic increase crossing mean, then sustained high.
		// Mean lifted by high tail; early increasing window starts below mean for first few points.
		const values = [
			50,
			51,
			50,
			52,
			51, // noisy low baseline
			60,
			62,
			64,
			66,
			68,
			70, // monotonic increase (length 6) starts below eventual mean, ends above
			72,
			73,
			74,
			75,
			74,
			73, // sustained high
		];
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: toRows(values),
			settings: { minimumPoints: 15 },
		});
		const meanVal = rows[0].mean!;
		// Identify the monotonic segment indices (we know where we placed it)
		const segmentStart = 5; // value 60
		const segmentEnd = 10; // value 70
		// Sanity: mark which of these are below vs above mean
		const below: number[] = [];
		const above: number[] = [];
		for (let i = segmentStart; i <= segmentEnd; i++) {
			const r = rows[i]!;
			if (r.value! > meanVal) above.push(i);
			else if (r.value! < meanVal) below.push(i);
			else {
				/* equal not expected here */
			}
		}
		// All below-mean points in the increasing trend should not get Improvement (may be Concern or Neither)
		for (const i of below) {
			const r = rows[i]!;
			if (r.specialCauseTrendUp) {
				expect(r.value! < meanVal).toBe(true);
				expect(r.variationIcon).not.toBe(VariationIcon.Improvement);
			}
		}
		// At least one above-mean trend point should become Improvement.
		const anyAboveImprovement = above.some(
			(i) => rows[i]!.variationIcon === VariationIcon.Improvement
		);
		expect(anyAboveImprovement).toBe(true);
	});

	it("Equal-to-mean value breaks shift/trend continuity and is not classified as Improvement while below-mean trend still forming", () => {
		// Symmetric sequence around mean 15; increasing ramp hits the mean exactly then continues.
		// Mean = 15 for values 10..20.
		const values = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: toRows(values),
			settings: { minimumPoints: 11 },
		});
		const meanVal = rows[0].mean!; // expect 15
		expect(meanVal).toBeGreaterThan(14.9);
		// Row with value exactly equal to mean
		const equalIdx = rows.findIndex((r) => r.value === meanVal);
		expect(equalIdx).toBeGreaterThan(-1);
		const equalRow = rows[equalIdx]!;
		// Equal value should not be counted as above or below => no single-point / two-of-three flag, no shift extension
		expect(equalRow.value).toBe(meanVal);
		// Variation icon should not be Improvement merely due to surrounding increasing pattern
		expect(equalRow.variationIcon).not.toBe(VariationIcon.Improvement);
		// Ensure any Improvement icons (if present) occur only after moving above mean
		const firstImprovementIdx = rows.findIndex(
			(r) => r.variationIcon === VariationIcon.Improvement
		);
		if (firstImprovementIdx !== -1) {
			expect(rows[firstImprovementIdx]!.value! > meanVal).toBe(true);
		}
	});
});
