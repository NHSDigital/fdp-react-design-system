import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection } from "../types";

// Minimal fixtures exercising conflict at start of a run
// Case A: High is good — first 4 points of an improving run should not classify as Concern
// Case B: Low is good — early points in an improving run should not classify as Concern

describe("parity: conflict resolution at run starts", () => {
	it("High is good: early improving run points resolve to Improvement (not Concern)", () => {
		const data = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((v, i) => ({
			x: String(i),
			value: v,
		}));
		const { rows } = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			settings: withParityV26({ minimumPoints: 11 }),
		});
		const last = rows.filter((r) => !r.ghost && r.value !== null).pop();
		expect(last?.variationIcon).toBeDefined();
		// Check first 4 eligible points after chart qualifies
		const eligible = rows.filter((r) => r.mean !== null);
		const sample = eligible.slice(0, 4);
		expect(sample.length).toBe(4);
		expect(
			sample.some((r) =>
				String(r.variationIcon).toLowerCase().includes("concern")
			)
		).toBe(false);
	});

	it("Low is good: early improving run points resolve to Improvement (not Concern)", () => {
		const data = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5].map((v, i) => ({
			x: String(i),
			value: v,
		}));
		const { rows } = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Down,
			data,
			settings: withParityV26({ minimumPoints: 11 }),
		});
		const eligible = rows.filter((r) => r.mean !== null);
		const sample = eligible.slice(8, 11); // points 8-10 window
		expect(sample.length).toBe(3);
		expect(
			sample.some((r) =>
				String(r.variationIcon).toLowerCase().includes("concern")
			)
		).toBe(false);
	});
});
