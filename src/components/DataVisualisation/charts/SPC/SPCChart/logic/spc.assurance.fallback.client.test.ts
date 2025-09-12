import { describe, it, expect } from "vitest";
import spcModule from "./spc";
import { ImprovementDirection, AssuranceIcon, ChartType } from "./spcConstants";

describe("SPC assurance fallback (point-based) vs capability mode", () => {
	it("returns None in capability mode but Pass in fallback when last point above target inside band (Up)", () => {
		const values = [50, 51, 49, 50, 51, 49, 50, 50, 50, 51, 49, 50, 50];
		// Build once to derive a target within band but below final point
		const seed = spcModule.buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: values.map((v, i) => ({ x: i + 1, value: v })),
		});
		const last = seed.rows[seed.rows.length - 1]!;
		const target = (last.mean! + last.lowerProcessLimit!) / 2; // inside band, below mean
		const capability = spcModule.buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: values.map((v, i) => ({ x: i + 1, value: v, target })),
			settings: { assuranceCapabilityMode: true },
		});
		const fallback = spcModule.buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: values.map((v, i) => ({ x: i + 1, value: v, target })),
			settings: { assuranceCapabilityMode: false },
		});
		expect(capability.rows[capability.rows.length - 1]!.assuranceIcon).toBe(
			AssuranceIcon.None
		);
		expect(fallback.rows[fallback.rows.length - 1]!.assuranceIcon).toBe(
			AssuranceIcon.Pass
		);
	});
});
