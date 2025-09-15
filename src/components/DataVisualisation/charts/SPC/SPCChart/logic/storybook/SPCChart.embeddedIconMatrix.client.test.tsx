import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SPCChart, type SPCDatum, ImprovementDirection } from "../../SPCChart";

// Utility builders replicate story scenarios but with deterministic values to drive engine states.
const makeStable = (len = 18, base = 50): SPCDatum[] => {
	// Deterministic base date and lower amplitude to minimise accidental special-cause
	const start = new Date("2024-01-01T00:00:00Z").getTime();
	return Array.from({ length: len }, (_, i) => ({
		x: new Date(start + i * 86400000),
		y: base, // perfectly flat to avoid any special cause
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
// Note: favourable single 3σ points now classify directly as improvement; those cases are covered in other variation tests.

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
			const { text } = getIconColours(icon!);
			// Rendering may rely on CSS variables so inline stroke/fill attributes can be absent in JSDOM.
			// Assert semantics via data-variation and letter content (no H/L for common cause),
			// and ensure no special-cause classes are present on any points.
			expect(text).not.toMatch(/[HL]/);
			const specialPoints = container.querySelectorAll(
				'.fdp-spc__point--sc-concern, .fdp-spc__point--sc-improvement, .fdp-spc__point--sc-no-judgement'
			);
			expect(specialPoints.length).toBe(0);
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

		// Letters now reflect desirable direction (polarity), not side-of-signal.
		// With HigherIsBetter, the letter is 'H' even when the state is a concern.
		expect(conColours.text).toContain("H");

		// Single-point high and low outliers now classify directly (no suppression heuristic). We skip explicit assertions here since covered in variation icon tests.
	});
});
