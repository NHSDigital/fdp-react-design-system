import { describe, it, expect } from "vitest";
import { buildSpc, ImprovementDirection, VariationIcon } from "./spc";
import { ChartType } from "./spc";

function stableSeries(n: number, base = 100, jitter = 1): number[] {
	return Array.from(
		{ length: n },
		(_, i) => base + (i % 2 === 0 ? jitter : -jitter)
	);
}

// Helper to build dataset with final extreme value
function datasetWithExtreme({
	nStable = 12,
	extremeValue,
}: {
	nStable?: number;
	extremeValue: number;
}) {
	const base = stableSeries(nStable);
	return [...base, extremeValue];
}

describe("SPC variation icon matrix (orthodox rule behaviour)", () => {
	it("Up direction: isolated favourable high single 3σ point yields Improvement", () => {
		const values = datasetWithExtreme({ extremeValue: 500 }); // very high
		const data = values.map((v, i) => ({ x: i + 1, value: v }));
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			// strictShewhartMode removed – engine now always orthodox
		});
		const last = rows[rows.length - 1]!;
		expect(last.specialCauseSinglePointUp).toBe(true);
		expect(last.variationIcon).toBe(VariationIcon.Improvement);
	});

	it("Up direction: isolated adverse low single point produces Concern icon", () => {
		const values = datasetWithExtreme({ extremeValue: -200 });
		const data = values.map((v, i) => ({ x: i + 1, value: v }));
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			// strictShewhartMode removed – engine now always orthodox
		});
		const last = rows[rows.length - 1]!;
		expect(last.specialCauseSinglePointDown).toBe(true);
		expect(last.variationIcon).toBe(VariationIcon.Concern);
	});

	it("Down direction: isolated favourable low single 3σ point yields Improvement", () => {
		const values = datasetWithExtreme({ extremeValue: -200 });
		const data = values.map((v, i) => ({ x: i + 1, value: v }));
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Down,
			data,
			// strictShewhartMode removed – engine now always orthodox
		});
		const last = rows[rows.length - 1]!;
		expect(last.specialCauseSinglePointDown).toBe(true);
		expect(last.variationIcon).toBe(VariationIcon.Improvement);
	});

	it("Down direction: isolated high single point produces Concern icon", () => {
		const values = datasetWithExtreme({ extremeValue: 500 });
		const data = values.map((v, i) => ({ x: i + 1, value: v }));
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Down,
			data,
			// strictShewhartMode removed – engine now always orthodox
		});
		const last = rows[rows.length - 1]!;
		expect(last.specialCauseSinglePointUp).toBe(true);
		expect(last.variationIcon).toBe(VariationIcon.Concern);
	});

	it("Neutral direction: high or low single point both yield Neither icon", () => {
		const highValues = datasetWithExtreme({ extremeValue: 500 });
		const lowValues = datasetWithExtreme({ extremeValue: -200 });
		const highData = highValues.map((v, i) => ({ x: i + 1, value: v }));
		const lowData = lowValues.map((v, i) => ({ x: i + 1, value: v }));
		const { rows: highRows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Neither,
			data: highData,
			// strictShewhartMode removed – engine now always orthodox
		});
		const { rows: lowRows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Neither,
			data: lowData,
			// strictShewhartMode removed – engine now always orthodox
		});
		expect(highRows[highRows.length - 1]!.specialCauseSinglePointUp).toBe(
			true
		);
		expect(highRows[highRows.length - 1]!.variationIcon).toBe(
			VariationIcon.Neither
		);
		expect(lowRows[lowRows.length - 1]!.specialCauseSinglePointDown).toBe(
			true
		);
		expect(lowRows[lowRows.length - 1]!.variationIcon).toBe(
			VariationIcon.Neither
		);
	});
});
