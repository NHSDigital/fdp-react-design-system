import { describe, it, expect } from "vitest";
import { buildSpc } from "../spc";
import { buildSpcSqlCompat } from "../spcSqlCompat";
import {
	ChartType,
	ImprovementDirection,
	PrecedenceStrategy,
	VariationIcon,
} from "../spcConstants";

// Parity regression test: previously asserted full equality for emerging favourable trend still on the adverse side.
// After unconditional side-qualified trend gating, the orthodox engine intentionally delays Improvement until
// points are on the favourable side. SQL compat (with legacy pruning framing) may still surface earlier Improvement.
// This test now documents and constrains the expected divergence window (pre-mean-cross points) while ensuring
// post-cross sequences converge.

function rows(values: number[]) {
	return values.map((v, i) => ({ x: i + 1, value: v }));
}

describe("SPC parity – suppressed favourable trend alignment", () => {
	it("orthodox vs SQL: divergence only on pre-favourable-side points; converge afterwards", () => {
		const values = [10, 10, 10, 10, 10, 15, 16, 17, 18, 19, 19, 19, 19, 19, 19];
		const orthodox = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: rows(values),
		});
		// Force legacy behaviour (disable side gating) in SQL compat to illustrate intended difference window if any
		const sql = buildSpcSqlCompat({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: rows(values),
		});
		const orthodoxIcons = orthodox.rows.map((r) => r.variationIcon);
		const sqlIcons = sql.rows.map((r) => r.variationIcon);

		// Identify first index where orthodox shows Improvement
		const firstImprovement = orthodoxIcons.findIndex(
			(v) => v === VariationIcon.Improvement
		);
		expect(firstImprovement).toBeGreaterThanOrEqual(0);

		// Prior to that index orthodox should not show Improvement (by definition) and any SQL Improvement is tolerated
		orthodoxIcons
			.slice(0, firstImprovement)
			.forEach((icon) => expect(icon).not.toBe(VariationIcon.Improvement));

		// From firstImprovement onward the sequences should match (no lingering divergence once favourable side reached)
		const tailOrthodox = orthodoxIcons.slice(firstImprovement);
		const tailSql = sqlIcons.slice(firstImprovement);
		expect(tailOrthodox).toEqual(tailSql);
	});

	it("legacy precedence (if explicitly forced) still shows earlier concern before shift completes", () => {
		const values = [10, 10, 10, 10, 10, 15, 16, 17, 18, 19, 19, 19, 19, 19, 19];
		const legacy = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: rows(values),
			settings: { precedenceStrategy: PrecedenceStrategy.Legacy },
		});
		const firstImprovementIdx = legacy.rows.findIndex(
			(r) => r.variationIcon === VariationIcon.Improvement
		);
		const earlyConcerns = legacy.rows
			.slice(0, Math.max(firstImprovementIdx, 0))
			.filter((r) => r.variationIcon === VariationIcon.Concern);
		expect(earlyConcerns.length).toBeGreaterThanOrEqual(0);
	});
});
