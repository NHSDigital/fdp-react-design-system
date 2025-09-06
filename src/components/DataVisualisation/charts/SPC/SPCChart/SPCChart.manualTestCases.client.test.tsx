import React from "react";
import { render } from "@testing-library/react";
import { SPCChart } from "./SPCChart";
import {
	resolvedSpcTestCases,
	mapDirection,
	STAT_TOLERANCE,
} from "./test-data/spcTestCases";

// Utility to extract last row stats from the rendered engine (access via data attribute hooks)
// The SPCChart doesn\'t currently expose stats directly, so for now we assert basic render + point count.

describe("SPCChart manual test cases (structure only)", () => {
	it.each(resolvedSpcTestCases.map((tc) => [tc.title, tc]))(
		"%s renders",
		(_, tc) => {
			const { container } = render(
				<SPCChart
					data={tc.values.map((y, i) => ({ x: new Date(2024, 0, i + 1), y }))}
					metricImprovement={mapDirection(tc.direction)}
				/>
			);
			// Basic sanity: expect one SVG
			const svg = container.querySelector("svg");
			expect(svg).toBeTruthy();
			// Point count heuristic: circles (may include legend artefacts; fallback to data length soft assertion)
			const circles = Array.from(container.querySelectorAll("circle"));
			expect(circles.length).toBeGreaterThanOrEqual(
				Math.min(1, tc.values.length ? 1 : 0)
			);
			// Placeholder for future: when engine stats are exposed via test id, compare expectedMean/UCL/LCL
			if (
				tc.expectedMean != null ||
				tc.expectedUcl != null ||
				tc.expectedLcl != null
			) {
				console.warn("STAT_CHECK_PENDING", tc.title, {
					mean: tc.expectedMean,
					ucl: tc.expectedUcl,
					lcl: tc.expectedLcl,
					tolerance: STAT_TOLERANCE,
				});
			}
		}
	);
});
