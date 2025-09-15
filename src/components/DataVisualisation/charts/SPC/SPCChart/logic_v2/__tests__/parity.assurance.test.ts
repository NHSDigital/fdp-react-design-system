import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { computeAssuranceIcon } from "../assurance";
import { AssuranceIcon, ChartType, ImprovementDirection } from "../types";
import { withParityV26 } from "../presets";

function input(values: number[]) {
	const start = new Date(2024, 0, 1);
	return values.map((v, i) => ({
		x: new Date(start.getFullYear(), start.getMonth() + i, 1),
		value: v,
		ghost: false,
		baseline: false,
		target: null as number | null,
	}));
}

describe("parity: assurance behaviour", () => {
	it("suppresses assurance for T and G charts", () => {
		const values = [
			10, 10.2, 9.8, 10.1, 10.0, 9.9, 10.05, 10.1, 10.0, 10.2, 9.9, 10.0, 10.1,
		];
		const rowsT = buildSpcV26a({
			chartType: ChartType.T,
			metricImprovement: ImprovementDirection.Up,
			data: input(values),
			settings: withParityV26(),
		}).rows;
		const rowsG = buildSpcV26a({
			chartType: ChartType.G,
			metricImprovement: ImprovementDirection.Up,
			data: input(values),
			settings: withParityV26(),
		}).rows;
		const lastT = rowsT.filter((r) => !r.ghost && r.value !== null).pop()!;
		const lastG = rowsG.filter((r) => !r.ghost && r.value !== null).pop()!;
		expect(
			computeAssuranceIcon(ChartType.T, lastT, ImprovementDirection.Up, 10)
		).toBe(AssuranceIcon.None);
		expect(
			computeAssuranceIcon(ChartType.G, lastG, ImprovementDirection.Up, 10)
		).toBe(AssuranceIcon.None);
	});

	it("treats target exactly equal to a process limit as pass/fail (XmR)", () => {
		const values = [
			10, 10.2, 9.8, 10.1, 10.0, 9.9, 10.05, 10.1, 10.0, 10.2, 9.9, 10.0, 10.1,
			10.0, 9.95,
		];
		const rows = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: input(values),
			settings: withParityV26(),
		}).rows;
		const last = rows
			.filter(
				(r) =>
					!r.ghost &&
					r.value !== null &&
					r.upperProcessLimit !== null &&
					r.lowerProcessLimit !== null
			)
			.pop()!;
		// Construct targets equal to calculated limits
		const passIcon = computeAssuranceIcon(
			ChartType.XmR,
			last,
			ImprovementDirection.Up,
			last.lowerProcessLimit
		);
		const failIcon = computeAssuranceIcon(
			ChartType.XmR,
			last,
			ImprovementDirection.Up,
			last.upperProcessLimit
		);
		expect(passIcon).toBe(AssuranceIcon.Pass);
		expect(failIcon).toBe(AssuranceIcon.Fail);
	});
});
