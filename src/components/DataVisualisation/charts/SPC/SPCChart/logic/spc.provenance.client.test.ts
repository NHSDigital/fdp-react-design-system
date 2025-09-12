import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ImprovementDirection, ChartType, SpcRawRuleTag } from "./spcConstants";

// Provenance tests: ensure ruleTags capture raw rule triggers. Heuristic tagging removed.

describe("SPC provenance tagging", () => {
	const baseData = Array.from({ length: 30 }).map((_, i) => ({
		x: i,
		label: `P${i + 1}`,
		value: i < 6 ? 10 : i < 18 ? 10 + (i - 5) * 0.05 : 14 + (i - 17) * 0.02, // slight upward drift leading to shift
	}));

	it("populates ruleTags for raw rule-based signals", () => {
		const res = buildSpc({
			chartType: ChartType.XmR,
			data: baseData,
			metricImprovement: ImprovementDirection.Up,
			settings: {
				specialCauseShiftPoints: 6,
			},
		});
		const rowsWithShift = res.rows.filter((r) =>
			r.ruleTags?.includes(SpcRawRuleTag.ShiftHigh)
		);
		expect(rowsWithShift.length).toBeGreaterThanOrEqual(6); // sustained run
		// ruleTags should not include heuristic tags
		for (const r of rowsWithShift) {
			expect(r.ruleTags?.some((t) => t.startsWith("comparative_"))).toBeFalsy();
		}
	});

	// Removed comparative baseline emulation heuristics; corresponding provenance test dropped.

	// Heuristic provenance removed – no heuristicTags assertions required.
});
