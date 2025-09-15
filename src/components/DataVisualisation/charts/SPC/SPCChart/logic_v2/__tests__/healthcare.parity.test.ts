import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection, VariationIcon } from "../types";

type Ds = { name: string; dir: ImprovementDirection; values: number[] };

// Reuse the fictive healthcare datasets from the v2 healthcare story (XmR only)
const datasets: Ds[] = [
	{
		name: "ED 4h compliance (%)",
		dir: ImprovementDirection.Up,
		values: [
			69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78,
			82, 81, 80, 79, 81, 80,
		],
	},
	{
		name: "Average Length of Stay (days)",
		dir: ImprovementDirection.Down,
		values: [
			7.4, 7.5, 7.6, 7.3, 7.4, 7.5, 7.2, 7.3, 7.1, 7.2, 7.0, 7.1, 6.8, 6.7, 6.6,
			6.5, 6.4, 6.3, 6.2, 6.1, 6.2, 6.0, 6.1, 6.0,
		],
	},
	{
		name: "30-day Readmission rate (%)",
		dir: ImprovementDirection.Down,
		values: [
			9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.4, 9.6, 9.5,
			9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.0, 9.1, 9.0,
		],
	},
	{
		name: "Hand hygiene compliance (%)",
		dir: ImprovementDirection.Up,
		values: [
			86, 87, 85, 88, 87, 86, 87, 88, 86, 87, 88, 87, 92, 93, 94, 92, 93, 94,
			93, 92, 85, 93, 94, 93,
		],
	},
	{
		name: "Falls per 1000 bed days",
		dir: ImprovementDirection.Down,
		values: [
			5.8, 5.9, 5.7, 5.8, 5.9, 5.6, 5.7, 5.5, 5.6, 5.4, 5.5, 5.3, 5.2, 5.1, 5.0,
			4.9, 5.6, 4.8, 4.7, 4.6, 4.5, 4.4, 4.5, 4.3,
		],
	},
	{
		name: "RTT % patients waiting < 18 weeks",
		dir: ImprovementDirection.Up,
		values: [
			76, 79.7, 76.2, 74.4, 74.5, 74.2, 75.2, 75.8, 74.9, 75.0, 74.8, 74.9, 79,
			81, 80.7, 81.2, 81, 80.8, 81, 81.3, 81.6, 82, 83.2, 84.5, 84,
		],
	},
];

function asInput(values: number[]) {
	// Build simple monthly dates for determinism
	const start = new Date(2023, 0, 1);
	return values.map((v, i) => ({
		x: new Date(start.getFullYear(), start.getMonth() + i, 1),
		value: v,
		ghost: false,
		baseline: false,
		target: null as number | null,
	}));
}

function expectImprovementSide(icon: VariationIcon, dir: ImprovementDirection) {
	if (dir === ImprovementDirection.Up) {
		expect([
			VariationIcon.ImprovementHigh,
			VariationIcon.CommonCause,
		]).toContain(icon);
	} else if (dir === ImprovementDirection.Down) {
		expect([VariationIcon.ImprovementLow, VariationIcon.CommonCause]).toContain(
			icon
		);
	}
}

describe("logic_v2 healthcare parity (XmR)", () => {
	it("computes last-point judgement on the correct improvement side (or common cause)", () => {
		for (const ds of datasets) {
			const rows = buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: ds.dir,
				data: asInput(ds.values),
				settings: { minimumPoints: 12 },
			}).rows;
			const last = rows.filter((r) => !r.ghost && r.value !== null).pop();
			expect(last).toBeTruthy();
			expectImprovementSide(last!.variationIcon, ds.dir);
		}
	});

	it("flags at least one special-cause event for datasets described as having a signal", () => {
		const namesWithSignals = [
			"ED 4h compliance (%)",
			"Average Length of Stay (days)",
			"30-day Readmission rate (%)",
			"Hand hygiene compliance (%)",
			"Falls per 1000 bed days",
			"RTT % patients waiting < 18 weeks",
		];
		for (const ds of datasets.filter((d) =>
			namesWithSignals.includes(d.name)
		)) {
			const rows = buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: ds.dir,
				data: asInput(ds.values),
				settings: { minimumPoints: 12 },
			}).rows;
			const anySpecial = rows.some((r) =>
				[
					VariationIcon.ImprovementHigh,
					VariationIcon.ImprovementLow,
					VariationIcon.ConcernHigh,
					VariationIcon.ConcernLow,
					VariationIcon.NeitherHigh,
					VariationIcon.NeitherLow,
				].includes(r.variationIcon)
			);
			expect(anySpecial).toBe(true);
		}
	});
});
