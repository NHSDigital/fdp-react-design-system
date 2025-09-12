import { describe, it, expect } from "vitest";
import { buildSpc, getDirectionalSignalSummary } from "../spc";
import {
	ChartType,
	ImprovementDirection,
} from "../spcConstants";

// Golden snapshot test for directional summary helper ensuring stable ordering & rank derivation.
// If this snapshot changes unexpectedly it signals a rule precedence or flag propagation regression.

describe("getDirectionalSignalSummary snapshot", () => {
	it("produces expected summary structure for mixed directional dataset", () => {
		// Dataset crafts multiple overlapping signals:
		// - Initial stable mean segment
		// - High run (shift) then low single point then increasing trend tail
		const values = [
			10,
			10,
			10,
			10,
			10,
			10,
			10, // stable
			20,
			20,
			20,
			20,
			20,
			20,
			20, // sustained high -> shift up
			5, // single extreme low -> single point down
			12,
			13,
			14,
			15,
			16,
			17, // monotonic up -> trend up
		];
		const result = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: values.map((v, i) => ({ x: i + 1, value: v })),
			settings: { enableFifteenInInnerThirdRule: false },
		});

		const summaries = result.rows.map((r) => ({
			rowId: r.rowId,
			upRules: getDirectionalSignalSummary(r).upRules,
			downRules: getDirectionalSignalSummary(r).downRules,
			upMax: getDirectionalSignalSummary(r).upMax,
			downMax: getDirectionalSignalSummary(r).downMax,
			variationIcon: r.variationIcon,
		}));

		expect(summaries).toMatchSnapshot();
	});
});
