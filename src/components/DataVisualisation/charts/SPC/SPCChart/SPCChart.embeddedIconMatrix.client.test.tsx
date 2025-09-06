import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SPCChart, type SPCDatum, ImprovementDirection } from "./SPCChart";

// Utility builders replicate story scenarios but with deterministic values to drive engine states.
const makeStable = (len = 18, base = 50): SPCDatum[] => {
	const start = Date.now() - (len - 1) * 86400000;
	return Array.from({ length: len }, (_, i) => ({
		x: new Date(start + i * 86400000),
		y: base + Math.sin(i / 3) * 0.5,
	}));
};

const buildCommon = () => makeStable();
const buildImprovement = () => {
	const d = makeStable();
	for (let i = d.length - 6; i < d.length; i++) d[i].y += 8;
	return d;
};
const buildConcern = () => {
	const d = makeStable();
	d[d.length - 1].y -= 10;
	return d;
};
const buildSuppressed = () => {
	const d = makeStable();
	d[d.length - 1].y += 40;
	return d;
};
// Downward favourable (low) isolated single 3σ point for metricImprovement Down that should suppress to no judgement (purple)
const buildDownwardSuppressed = () => {
	const d = makeStable();
	d[d.length - 1].y -= 40;
	return d;
};

// Helper to extract stroke/fill colour from embedded icon container
const getIconColours = (container: HTMLElement) => {
	const ring = container.querySelector(
		"circle[stroke]"
	) as SVGCircleElement | null;
	const path = container.querySelector("path[fill]") as SVGPathElement | null;
	return {
		stroke: ring?.getAttribute("stroke") || null,
		fill: path?.getAttribute("fill") || null,
		text: container.textContent || "",
	};
};

describe("SPCChart embedded icon matrix", () => {
	it("renders all expected variation states with correct colours/letters", () => {
		const { container, rerender } = render(
			<SPCChart
				data={buildCommon()}
				metricImprovement={ImprovementDirection.Neither}
				showEmbeddedIcon
				showIcons={false}
			/>
		);
	
		const assertCommon = () => {
			const icon = container.querySelector(
				'.fdp-spc-chart__embedded-icon[data-variation="neither"]'
			) as HTMLElement | null;
			expect(icon).toBeTruthy();
			const { stroke, text } = getIconColours(icon!);
			// Some render paths may use stroke='none' with grey points only; accept either direct stroke or presence of a grey circle
			if (stroke && stroke !== "none") {
				expect(stroke).toBe("#A6A6A6");
			} else {
				const anyGrey = icon!.querySelector(
					'[stroke="#A6A6A6"], [fill="#A6A6A6"]'
				);
				expect(anyGrey).toBeTruthy();
			}
			expect(text).not.toMatch(/[HL]/);
		};
		assertCommon();

		// Improvement (blue H)
		rerender(
			<SPCChart
				data={buildImprovement()}
				metricImprovement={ImprovementDirection.Up}
				showEmbeddedIcon
				showIcons={false}
			/>
		);

		const imp = container.querySelector(
			'.fdp-spc-chart__embedded-icon[data-variation="improvement"]'
		) as HTMLElement | null;

		expect(imp).toBeTruthy();

		const impColours = getIconColours(imp!);
		if (impColours.stroke && impColours.stroke !== "none") {
			expect(impColours.stroke).toBe("#00B0F0");
		} else {
			const anyBlue = imp!.querySelector(
				'[stroke="#00B0F0"], [fill="#00B0F0"]'
			);
			expect(anyBlue).toBeTruthy();
		}

		expect(impColours.text).toContain("H");

		// Concern (orange L)
		rerender(
			<SPCChart
				data={buildConcern()}
				metricImprovement={ImprovementDirection.Up}
				showEmbeddedIcon
				showIcons={false}
			/>
		);
		
		const con = container.querySelector(
			'.fdp-spc-chart__embedded-icon[data-variation="concern"]'
		) as HTMLElement | null;

		expect(con).toBeTruthy();
		
		const conColours = getIconColours(con!);

		if (conColours.stroke && conColours.stroke !== "none") {
			expect(conColours.stroke).toBe("#E46C0A");
		} else {
			const anyOrange = con!.querySelector(
				'[stroke="#E46C0A"], [fill="#E46C0A"]'
			);
			expect(anyOrange).toBeTruthy();
		}

		expect(conColours.text).toContain("L");

		// Single-point high and low outliers now classify directly (no suppression heuristic). We skip explicit assertions here since covered in variation icon tests.
	});
});
