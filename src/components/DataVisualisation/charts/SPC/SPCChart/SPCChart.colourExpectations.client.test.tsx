import React from "react";
import { render } from "@testing-library/react";
import { SPCChart } from "./SPCChart";
import { PrecedenceStrategy } from "./logic/spc";
import {
	resolvedSpcTestCases,
	SPC_POINT_COLOURS,
	mapDirection,
} from "./test-data/spcTestCases";

// Mapping from point CSS class (assigned in SPCChart.tsx) to canonical hex colour. We rely on fallback hex values
// defined in CSS variables. This test asserts logical classification rather than computed styles to avoid
// environment dependency (JSDOM does not compute CSS vars by default).
const CLASS_TO_HEX: Record<string, string> = {
	"fdp-spc__point--sc-improvement": SPC_POINT_COLOURS.improvement,
	"fdp-spc__point--sc-concern": SPC_POINT_COLOURS.concern,
	// Newly surfaced neutral special-cause (no judgement) purple styling
	"fdp-spc__point--sc-no-judgement": SPC_POINT_COLOURS.noJudgement,
};

// Default (common cause) point when no special-cause class present
const DEFAULT_COMMON = SPC_POINT_COLOURS.common;

// Neutral special-cause points now surface purple via class fdp-spc__point--sc-no-judgement.

describe("SPCChart colour expectations", () => {
	it('matches expectedPointColours for "Special cause - High is good"', () => {
		const tc = resolvedSpcTestCases.find(
			(t) => t.title === "Special cause - High is good"
		);
		expect(tc).toBeTruthy();
		if (!tc) return; // type guard
		expect(tc.expectedPointColours).toBeTruthy();
		const { container } = render(
			<SPCChart
				data={tc.values.map((y, i) => ({ x: new Date(2023, 0, i + 1), y }))}
				metricImprovement={mapDirection(tc.direction)}
				enableRules
				showPoints
					// Enforce engine behavior expected by this suite: directional-first + grace
					settings={{
						precedenceStrategy: PrecedenceStrategy.DirectionalFirst,
						emergingDirectionGrace: true,
					}}
				enableTrendSideGating
			/>
		);
		const circles = Array.from(
			container.querySelectorAll("circle.fdp-spc__point")
		);
		// Build actual colour sequence via class inspection
		const actual = circles.map((c) => {
			const classList = Array.from(c.classList);
			const mapped = classList.find((cls) => CLASS_TO_HEX[cls]);
			return mapped ? CLASS_TO_HEX[mapped] : DEFAULT_COMMON;
		});
		const expected = tc.expectedPointColours!;
		// Diagnostic logging of both sequences when lengths differ
		if (actual.length !== expected.length) {
			console.warn("COLOUR_LENGTH_MISMATCH", {
				expectedLength: expected.length,
				actualLength: actual.length,
				expected,
				actual,
			});
		}
		const compareLength = Math.min(actual.length, expected.length);
		for (let i = 0; i < compareLength; i++) {
			if (expected[i] !== actual[i]) {
				console.error("COLOUR_MISMATCH", {
					index: i,
					expected: expected[i],
					actual: actual[i],
				});
			}
			expect(actual[i]).toBe(expected[i]);
		}
		// Still enforce equality in length to catch dataset drift
		expect(actual.length).toBe(expected.length);
	});

	it('matches expectedPointColours for "Special cause - Neither" including purple no-judgement points', () => {
		const tc = resolvedSpcTestCases.find(
			(t) => t.title === "Special cause - Neither"
		);
		expect(tc).toBeTruthy();
		if (!tc) return; // type guard
		expect(tc.expectedPointColours).toBeTruthy();
		const { container } = render(
			<SPCChart
				data={tc.values.map((y, i) => ({ x: new Date(2023, 0, i + 1), y }))}
				metricImprovement={mapDirection(tc.direction)}
				enableRules
				showPoints
				enableTrendSideGating
			/>
		);
		const circles = Array.from(
			container.querySelectorAll("circle.fdp-spc__point")
		);
		const actual = circles.map((c) => {
			const classList = Array.from(c.classList);
			const mapped = classList.find((cls) => CLASS_TO_HEX[cls]);
			return mapped ? CLASS_TO_HEX[mapped] : DEFAULT_COMMON;
		});
		const expected = tc.expectedPointColours!;
		const compareLength = Math.min(actual.length, expected.length);
		for (let i = 0; i < compareLength; i++) {
			expect(actual[i]).toBe(expected[i]);
		}
		expect(actual.length).toBe(expected.length);
	});
});
