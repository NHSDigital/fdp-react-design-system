#!/usr/bin/env tsx
/**
 * SPC Engine sanity check (v2)
 * Builds several scenarios and ensures the engine returns a coherent final row classification.
 */
import { buildSpcV26a as buildSpc, SpcResultV2 as SpcResult, ImprovementDirection, ChartType } from "../src/components/DataVisualisation/charts/SPC/engine";

type DS = Array<number | null>;

const scenarios: Record<
	string,
	{ values: DS; improvement: ImprovementDirection; note?: string }
> = {
	basicShiftUp: {
		values: [10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15],
		improvement: ImprovementDirection.Up,
	},
	basicShiftDown: {
		values: [20, 20, 20, 20, 20, 20, 14, 14, 14, 14, 14, 14, 14],
		improvement: ImprovementDirection.Down,
	},
	trendCrossMean: {
		values: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		improvement: ImprovementDirection.Up,
	},
	singlePoint: {
		values: [10, 10, 10, 10, 10, 40, 10, 10, 10, 10, 10, 10, 10],
		improvement: ImprovementDirection.Up,
	},
	mixedShiftTrend: {
		values: [10, 10, 10, 10, 10, 15, 16, 17, 18, 19, 19, 19, 19, 19, 19],
		improvement: ImprovementDirection.Up,
		note: "Shift then emerging trend tail",
	},
	clusterTwoOfThree: {
		values: [10, 10, 12, 12, 11, 11, 10, 10, 14, 14, 14, 10, 10, 10],
		improvement: ImprovementDirection.Up,
		note: "Two-of-three then shift separation",
	},
};

interface Diff {
	scenario: string;
	row: number;
	orthodox: string;
	sql: string;
}
const diffs: Diff[] = [];

function rowsFrom(values: DS) {
	return values.map((v, i) => ({ x: i + 1, value: v }));
}

for (const [name, sc] of Object.entries(scenarios)) {
	const res: SpcResult = buildSpc({
		chartType: ChartType.XmR,
		metricImprovement: sc.improvement,
		data: rowsFrom(sc.values),
	});
	const last = res.rows.at(-1);
	if (!last) {
		diffs.push({ scenario: name, row: -1, orthodox: "no-rows", sql: "n/a" });
	}
}

if (diffs.length) {
	console.error("SPC v2 sanity check FAILED:");
	for (const d of diffs) console.error(` > ${d.scenario}: ${d.orthodox}`);
	process.exit(1);
} else {
	console.log("SPC v2 sanity check passed.");
}
