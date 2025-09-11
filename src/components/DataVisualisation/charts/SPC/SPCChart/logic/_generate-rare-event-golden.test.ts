import { describe, it, expect } from "vitest";
import spcModule, { ImprovementDirection, VariationIcon, ChartType } from "./spc";

// Golden parity test for rare-event charts T and G using deterministic synthetic datasets.
describe("SPC rare-event golden parity (T & G)", () => {
	const tol = 1e-9;
	const tData = [5, 7, 9, 4, 6, 8, 30, 7, 6, 5, 4, 3, 2, 1].map((v, i) => ({
		x: i + 1,
		value: v,
		target: 10,
		ghost: i === 5,
	}));
	const gData = [10, 11, 9, 10, 12, 8, 7, 6, 40, 7, 8, 9, 10, 11].map(
		(v, i) => ({ x: i + 1, value: v, target: 10, ghost: i === 4 })
	);

	it("T chart matches expected transformed mean, MR-based limits, and signals", () => {
		const { rows, warnings } = spcModule.buildSpc({
			chartType: ChartType.T,
			metricImprovement: ImprovementDirection.Up,
			data: tData,
			settings: { enableFourOfFiveRule: true },
		});
		const last = rows[rows.length - 1];
		expect(Math.abs((last.mean ?? 0) - 5.402500624503446)).toBeLessThan(tol);
		expect(Math.abs((last.mrMean ?? 0) - 0.27682757240148353)).toBeLessThan(
			tol
		);
		expect(
			Math.abs((last.upperProcessLimit ?? 0) - 21.145227234488576)
		).toBeLessThan(tol);
		expect(
			Math.abs((last.lowerProcessLimit ?? 0) - 0.5843168368945615)
		).toBeLessThan(tol);
		expect(
			Math.abs((last.upperTwoSigma ?? 0) - 14.17404506313916)
		).toBeLessThan(tol);
		expect(
			Math.abs((last.lowerTwoSigma ?? 0) - 1.4409720340212195)
		).toBeLessThan(tol);
		expect(
			Math.abs((last.upperOneSigma ?? 0) - 9.037161449882735)
		).toBeLessThan(tol);
		expect(
			Math.abs((last.lowerOneSigma ?? 0) - 2.9635683393412235)
		).toBeLessThan(tol);
		// Special cause single point above at row 7
		const row7 = rows.find((r) => r.rowId === 7)!;
		expect(row7.specialCauseSinglePointUp).toBe(true);
		// Decreasing trend flagged on last three rows (12,13,14)
		[12, 13, 14].forEach((id) =>
			expect(
				rows.find((r) => r.rowId === id)!.specialCauseTrendDown
			).toBe(true)
		);
		// Variation icon for row 7: allow 'improvement', 'neither' or 'suppressed' (purple no‑judgement)
		expect([
			VariationIcon.Improvement,
			VariationIcon.Neither,
			VariationIcon.Suppressed,
		]).toContain(row7.variationIcon);
		const codes = warnings.map((w) => w.code).sort();
		const allowed = [
			["ghost_rows_rare_event", "target_ignored_rare_event"],
			[
				"ghost_rows_rare_event",
				"target_ignored_rare_event",
				"variation_conflict_row",
			],
		];
		expect(allowed).toContainEqual(codes);
	});

	it("G chart matches expected probability-based limits and emits expected warnings", () => {
		const { rows, warnings } = spcModule.buildSpc({
			chartType: ChartType.G,
			metricImprovement: ImprovementDirection.Up,
			data: gData,
			settings: { enableFourOfFiveRule: true },
		});
		const last = rows[rows.length - 1];
		expect(Math.abs((last.mean ?? 0) - 7.126223234002321)).toBeLessThan(tol);
		expect(last.mrMean).toBeNull(); // G has no MR concept
		expect(
			Math.abs((last.upperProcessLimit ?? 0) - 76.46674882554701)
		).toBeLessThan(tol);
		expect(Math.abs((last.lowerProcessLimit ?? 0) - 0)).toBeLessThan(tol);
		expect(
			Math.abs((last.upperTwoSigma ?? 0) - 43.35277428850645)
		).toBeLessThan(tol);
		expect(Math.abs((last.lowerTwoSigma ?? 0) - 0)).toBeLessThan(tol);
		expect(
			Math.abs((last.upperOneSigma ?? 0) - 20.583515431024434)
		).toBeLessThan(tol);
		expect(
			Math.abs((last.lowerOneSigma ?? 0) - 1.0253069072922854)
		).toBeLessThan(tol);
		// No single point signals expected
		expect(rows.some((r) => r.specialCauseSinglePointUp)).toBe(false);
		expect(rows.some((r) => r.specialCauseSinglePointDown)).toBe(false);
		const codes = warnings.map((w) => w.code).sort();
		expect(codes).toEqual([
			"ghost_rows_rare_event",
			"target_ignored_rare_event",
		]);
	});
});
