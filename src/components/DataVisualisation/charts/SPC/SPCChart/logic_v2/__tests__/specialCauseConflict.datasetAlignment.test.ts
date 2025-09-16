import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection, TrendSegmentationStrategy } from "../types";
import {
	findGroup,
	normaliseSeries,
	toV2ImprovementDir,
} from "../storybook/data/groupedDataset";
import { iconToHex } from "../storybook/data/variationIconColours";

function getMetricNames() {
	return [
		"Special cause conflict - High is good",
		"Special cause conflict - Low is good",
	];
}

describe("logic_v2: Special cause conflict dataset alignment", () => {
	it("Parity mode: early eligible points exhibit conflict and yield valid directional icons", () => {
		const metricNames = getMetricNames();
		for (const metric of metricNames) {
			const grp = findGroup(metric)!;
			const { data } = normaliseSeries(grp);
			const dir = toV2ImprovementDir(grp.improvement as any);
			expect(
				dir === ImprovementDirection.Up || dir === ImprovementDirection.Down
			).toBe(true);

			const input = data.map((d) => ({
				x: d.x,
				value: d.value,
				ghost: false,
				baseline: false,
				target: null,
			}));
			const settings = withParityV26();
			const rows = buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: dir,
				data: input,
				settings,
			}).rows;

			// Consider only eligible rows (mean != null); inspect the first window of up to 6 eligible points
			const eligible = rows.filter((r) => !r.ghost && r.mean !== null);
			const sample = eligible.slice(0, Math.min(6, eligible.length));
			expect(sample.length).toBeGreaterThan(0);
			// Icons should remain valid for the metric direction
			const allowed = dir === ImprovementDirection.Up
				? ["ImprovementHigh", "ConcernLow", "CommonCause"]
				: ["ImprovementLow", "ConcernHigh", "CommonCause"];
			expect(sample.every((r) => allowed.includes(String(r.variationIcon)))).toBe(true);
			// And there should be at least one special-cause icon (not CommonCause) in the early window
			const anySpecial = sample.some((r) => String(r.variationIcon) !== "CommonCause");
			expect(anySpecial).toBe(true);
		}
	});

	it("Excel-like override: computed colours match dataset on eligible rows when preferImprovementWhenConflict=true", () => {
		const metricNames = getMetricNames();
		for (const metric of metricNames) {
			const grp = findGroup(metric)!;
			const { data } = normaliseSeries(grp);
			const dir = toV2ImprovementDir(grp.improvement as any);

			const input = data.map((d) => ({
				x: d.x,
				value: d.value,
				ghost: false,
				baseline: false,
				target: null,
			}));
			const settings = {
				minimumPoints: 12,
				preferImprovementWhenConflict: true,
			} as const;
			const rows = buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: dir,
				data: input,
				settings,
			}).rows;

			// Compare only eligible rows to the dataset's expected colour hex to avoid pre-eligibility greys
			const eligible = rows.filter((r) => !r.ghost && r.mean !== null);
			for (let i = 0; i < eligible.length; i++) {
				const globalIndex = rows.findIndex((r) => r === eligible[i]);
				const expectedHex = String(
					(grp.data[globalIndex] as any)?.colour ?? ""
				);
				const computedHex = iconToHex(eligible[i].variationIcon);
				// Dataset entries are expected to have colours; when present, assert equality
				if (expectedHex) {
					expect(computedHex).toBe(expectedHex);
				}
			}
		}
	});

	it("Trend segmentation: 'Low is good' aligns with dataset using CrossingAfterUnfavourable", () => {
		const metric = "Special cause conflict - Low is good";
		const grp = findGroup(metric)!;
		const { data } = normaliseSeries(grp);
		const dir = toV2ImprovementDir(grp.improvement as any);
		// Expect the dataset to declare a clear improvement direction
		expect(
			dir === ImprovementDirection.Up || dir === ImprovementDirection.Down
		).toBe(true);

		const input = data.map((d) => ({
			x: d.x,
			value: d.value,
			ghost: false,
			baseline: false,
			target: null,
		}));
		const settings = withParityV26({
			trendFavourableSegmentation: true,
			trendSegmentationStrategy:
				TrendSegmentationStrategy.CrossingAfterUnfavourable,
		});
		const rows = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: dir,
			data: input,
			settings,
		}).rows;

		// Compare only eligible rows to the dataset's expected colour hex to avoid pre-eligibility greys
		const eligible = rows.filter((r) => !r.ghost && r.mean !== null);
		let compared = 0;
		for (let i = 0; i < eligible.length; i++) {
			const globalIndex = rows.findIndex((r) => r === eligible[i]);
			const expectedHex = String((grp.data[globalIndex] as any)?.colour ?? "");
			if (!expectedHex) continue; // skip rows without an expected colour in dataset
			compared++;
			const computedHex = iconToHex(eligible[i].variationIcon);
			expect(computedHex).toBe(expectedHex);
		}
		expect(compared).toBeGreaterThan(0); // ensure the dataset provided colours to compare
	});
});
