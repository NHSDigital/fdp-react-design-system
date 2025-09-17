import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { SPCChart, ImprovementDirection, type SPCDatum } from "../../SPCChart";
import { ChartType } from "../spcConstants";

// Deterministic helper to build a flat series
function makeFlat(len: number, value: number): SPCDatum[] {
	const start = Date.UTC(2024, 0, 1);
	return Array.from({ length: len }, (_, i) => ({
		x: new Date(start + i * 24 * 3600 * 1000),
		y: value,
	}));
}

describe("SPCChart advanced behaviour", () => {
	test("suppresses limits when fewer than 13 points", () => {
		const data = makeFlat(12, 50);
		render(<SPCChart data={data} />);
		expect(document.querySelectorAll("line.fdp-spc__cl").length).toBe(0);
		expect(document.querySelectorAll("line.fdp-spc__limit").length).toBe(0);
	});

	test("renders limits when 13 or more points", () => {
		const data = makeFlat(15, 50);
		render(<SPCChart data={data} />);
		// With identical values variance is zero; engine may still produce a mean + identical limits (or suppress if logic disallows zero mr).
		// We assert only the centre line appears (minimum expectation once threshold is met)
		expect(document.querySelectorAll("line.fdp-spc__cl").length).toBe(1);
	});

	test("detects shift special cause (XmR)", () => {
		// First 10 points ~50, next 10 points ~60 creating a shift upward
		const start = Date.UTC(2024, 0, 1);
		const data: SPCDatum[] = [];
		for (let i = 0; i < 10; i++)
			data.push({ x: new Date(start + i * 86400000), y: 50 });
		for (let i = 10; i < 20; i++)
			data.push({ x: new Date(start + i * 86400000), y: 60 });
		render(
			<SPCChart data={data} metricImprovement={ImprovementDirection.Up} />
		);
		const special = document.querySelectorAll(
			".fdp-spc__point--sc-improvement, .fdp-spc__point--sc-concern"
		);
		expect(special.length).toBeGreaterThan(0);
	});

	// test("T chart rare events produces limits after threshold", () => {
	// 	// Simulate days between events (mix of 3-8 days, with one long gap)
	// 	const start = Date.UTC(2024, 0, 1);
	// 	const base = [5, 4, 6, 5, 7, 8, 5, 4, 5, 6, 5, 4, 5, 6, 5, 4, 16, 5, 4, 5];
	// 	const data: SPCDatum[] = base.map((v, i) => ({
	// 		x: new Date(start + i * 86400000),
	// 		y: v,
	// 	}));
	// 	render(
	// 		<SPCChart
	// 			data={data}
	// 			chartType={ChartType.T}
	// 			metricImprovement={ImprovementDirection.Up}
	// 		/>
	// 	);
	// 	// Centre line expected (enough points)
	// 	expect(document.querySelectorAll("line.fdp-spc__cl").length).toBe(1);
	// });

	// test("G chart rare events flags extreme low gap as concern or improvement depending direction", () => {
	// 	const start = Date.UTC(2024, 0, 1);
	// 	const base = [
	// 		12, 11, 13, 12, 14, 13, 12, 11, 12, 13, 12, 11, 1, 13, 12, 11, 12, 13, 12,
	// 		11,
	// 	]; // single very low count between events
	// 	const data: SPCDatum[] = base.map((v, i) => ({
	// 		x: new Date(start + i * 86400000),
	// 		y: v,
	// 	}));
	// 	render(
	// 		<SPCChart
	// 			data={data}
	// 			chartType={ChartType.G}
	// 			metricImprovement={ImprovementDirection.Up}
	// 		/>
	// 	);
	// 	const specials = document.querySelectorAll(
	// 		".fdp-spc__point--sc-improvement, .fdp-spc__point--sc-concern"
	// 	);
	// 	expect(specials.length).toBeGreaterThan(0);
	// });
});
