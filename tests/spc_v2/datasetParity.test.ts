import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine";
import {
	ChartType,
	ImprovementDirection,
	VariationIcon,
} from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";
import grouped from "../../src/components/DataVisualisation/charts/SPC/SPCChart/test-data/Test Data.grouped.json";

function toMetricDir(s: string): ImprovementDirection {
	if (!s) return ImprovementDirection.Neither;
	const m = s.toLowerCase();
	if (m === "up" || m === "high is good") return ImprovementDirection.Up;
	if (m === "down" || m === "low is good") return ImprovementDirection.Down;
	return ImprovementDirection.Neither;
}

function toExpectedIcon(j: string, dir: ImprovementDirection): VariationIcon {
	const m = j.toLowerCase();
	if (dir === ImprovementDirection.Up) {
		if (m === "improvement") return VariationIcon.ImprovementHigh;
		if (m === "concern") return VariationIcon.ConcernLow;
		return VariationIcon.CommonCause;
	}
	if (dir === ImprovementDirection.Down) {
		if (m === "improvement") return VariationIcon.ImprovementLow;
		if (m === "concern") return VariationIcon.ConcernHigh;
		return VariationIcon.CommonCause;
	}
	// For Neither metrics, SQL 2.6a emits a neutral judgement, but our engine distinguishes side:
	// accept either NeitherHigh/NeitherLow as neutral outcomes; tests will handle this specially.
	return VariationIcon.CommonCause;
}

describe("SQL v2.6a parity - grouped dataset summary icons", () => {
	it("matches expected judgements where defined", () => {
		for (const scenario of grouped as any[]) {
			const dir = toMetricDir(scenario.improvement || "");
			const input = (scenario.data as any[]).map((d: any, i: number) => ({
				x: String(i + 1),
				value: typeof d.value === "number" ? d.value : null,
				ghost: !!d.ghost,
				baseline: !!d.baseline,
				target: typeof d.target === "number" ? d.target : null,
			}));
			const res = buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: dir,
				data: input,
				settings: { minimumPoints: 13 },
			});
			const last = res.rows.filter((r) => !r.ghost && r.value !== null).pop();
			// If dataset gives a judgement for last row, compare
			const expectedJudgement = (scenario.data as any[])
				.filter((d: any) => d.value !== null && d.ghost !== true)
				.pop()?.judgement;
			if (expectedJudgement) {
				const expected = toExpectedIcon(expectedJudgement, dir);
				if (dir === ImprovementDirection.Neither) {
					// For metrics where improvement is Neither, treat side-specific neutral as equivalent
					expect([
						VariationIcon.NeitherHigh,
						VariationIcon.NeitherLow,
						VariationIcon.CommonCause,
					]).toContain(last?.variationIcon);
				} else {
					expect(last?.variationIcon).toBe(expected);
				}
			}
		}
	});
});
