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

	it("handles zero-width bands (MR̄=0) by comparing target to center line", () => {
		// Build series with a baseline and then a perfectly flat partition at 42
		const start = new Date(2024, 0, 1);
		const values: number[] = [];
		// First partition: some variation
		for (let i = 0; i < 8; i++) values.push(50 + Math.sin(i));
		// Second partition (after baseline): flat values
		for (let i = 8; i < 16; i++) values.push(42);
		const data = values.map((v, i) => ({
			x: new Date(start.getFullYear(), start.getMonth() + i, 1),
			value: v,
			ghost: false,
			baseline: i === 8,
			target: null as number | null,
		}));
		const rows = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Neither,
			data,
			settings: withParityV26({ minimumPoints: 6 }),
		}).rows;
		const last = rows.filter((r) => !r.ghost && r.value !== null).pop()!;
		// Sanity: zero-width limits collapse to mean
		expect(last.upperProcessLimit).toBe(last.mean);
		expect(last.lowerProcessLimit).toBe(last.mean);
		// Upwards improvement: target below center => Pass; equal (collapses to LCL/UCL) => Pass; above => Fail
		const upPass = computeAssuranceIcon(
			ChartType.XmR,
			last,
			ImprovementDirection.Up,
			(last.mean ?? 42) - 1
		);
		expect(upPass).toBe(AssuranceIcon.Pass);
		const upEqual = computeAssuranceIcon(
			ChartType.XmR,
			last,
			ImprovementDirection.Up,
			last.mean
		);
		expect(upEqual).toBe(AssuranceIcon.Pass);
		const upFail = computeAssuranceIcon(
			ChartType.XmR,
			last,
			ImprovementDirection.Up,
			(last.mean ?? 42) + 1
		);
		expect(upFail).toBe(AssuranceIcon.Fail);
		// Downwards improvement: target above center => Pass; equal (collapses to LCL/UCL) => Pass; below => Fail
		const downPass = computeAssuranceIcon(
			ChartType.XmR,
			last,
			ImprovementDirection.Down,
			(last.mean ?? 42) + 1
		);
		expect(downPass).toBe(AssuranceIcon.Pass);
		const downEqual = computeAssuranceIcon(
			ChartType.XmR,
			last,
			ImprovementDirection.Down,
			last.mean
		);
		expect(downEqual).toBe(AssuranceIcon.Pass);
		const downFail = computeAssuranceIcon(
			ChartType.XmR,
			last,
			ImprovementDirection.Down,
			(last.mean ?? 42) - 1
		);
		expect(downFail).toBe(AssuranceIcon.Fail);
	});
});
