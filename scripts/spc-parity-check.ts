#!/usr/bin/env tsx
/**
 * SPC Parity Check
 * Compares orthodox engine vs SQL compatibility wrapper for rule-driven directional classification
 * ensuring no unintended divergence in variationIcon on rows where both pathways should agree.
 * Exits non-zero on mismatch; prints a concise diff summary.
 */
import {
	buildSpc,
	ChartType,
	ImprovementDirection,
	SpcResult,
} from "../src/components/DataVisualisation/charts/SPC/SPCChart/logic/spc";
import { buildSpcSqlCompat } from "../src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcSqlCompat";

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
	const orthodox: SpcResult = buildSpc({
		chartType: ChartType.XmR,
		metricImprovement: sc.improvement,
		data: rowsFrom(sc.values),
	});
	const sql = buildSpcSqlCompat({
		chartType: ChartType.XmR,
		metricImprovement: sc.improvement,
		data: rowsFrom(sc.values),
	});
	orthodox.rows.forEach((r, i) => {
		const sqlRow = sql.rows[i];
		const oHas =
			r.specialCauseImprovementValue !== null ||
			r.specialCauseConcernValue !== null;
		const sHas = sqlRow.variationIcon !== "neither";
		if (oHas === sHas && r.variationIcon !== sqlRow.variationIcon) {
			diffs.push({
				scenario: name,
				row: i,
				orthodox: r.variationIcon,
				sql: sqlRow.variationIcon,
			});
		}
	});
}

if (diffs.length) {
	console.error("SPC parity check FAILED with variationIcon mismatches:");
	const byScenario: Record<string, Diff[]> = {};
	for (const d of diffs) {
		(byScenario[d.scenario] ||= []).push(d);
	}
	for (const [scenario, list] of Object.entries(byScenario)) {
		const note = scenarios[scenario].note
			? ` (${scenarios[scenario].note})`
			: "";
		const advisory =
			scenario === "mixedShiftTrend"
				? " [expected early divergence: SQL ranking emphasises emerging favourable side sooner]"
				: "";
		console.error(` > ${scenario}${note} : ${list.length} diff(s)${advisory}`);
		for (const d of list)
			console.error(
				`   - row ${d.row + 1}: orthodox=${d.orthodox} sql=${d.sql}`
			);
	}
	console.error(`Total diffs: ${diffs.length}`);
	process.exit(1);
} else {
	console.log(
		"SPC parity check passed (no unintended variationIcon divergences)."
	);
}
