import { render } from "@testing-library/react";
import { SPCChart, ImprovementDirection } from "../../SPCChart";
import { SpcEmbeddedIconVariant } from "./SPCChart.constants";

// Simple deterministic dataset (>=13 non-ghost points so embedded icon shows)
const data = Array.from({ length: 15 }, (_, i) => ({
	x: i + 1,
	y: 50 + (i % 3),
}));

/**
 * Snapshot-ish structural tests to assert embeddedIconVariant wiring.
 * We don't assert exact SVG path data (already covered in SPCIcon tests); here we just
 * confirm the variant prop plumbs through and changes rendered structure (triangle glyph + run dots).
 */
describe("SPCChart embedded icon variant wiring", () => {
	it("renders classic (default) when no variant specified", () => {
		const { container } = render(
			<SPCChart data={data} metricImprovement={ImprovementDirection.Up} />
		);
		// Should include embedded icon wrapper
		expect(
			container.querySelector(".fdp-spc-chart__embedded-icon")
		).toBeTruthy();
		// Classic variant should have an svg with no run dot group (heuristic: absence of data-run-points attr)
		expect(container.querySelector("[data-run-points]")).toBeFalsy();
	});

	it('renders triangle variant when embeddedIconVariant="triangle"', () => {
		const { container } = render(
			<SPCChart
				data={data}
				metricImprovement={ImprovementDirection.Up}
				embeddedIconVariant={SpcEmbeddedIconVariant.Triangle}
			/>
		);
		// Triangle variant should still have no run points
		expect(
			container.querySelector(".fdp-spc-chart__embedded-icon")
		).toBeTruthy();
		expect(container.querySelector("[data-run-points]")).toBeFalsy();
	});

	it('renders triangleWithRun variant with run dots when embeddedIconVariant="triangleWithRun" and run length provided', () => {
		const { container } = render(
			<SPCChart
				data={data}
				metricImprovement={ImprovementDirection.Up}
				embeddedIconVariant={SpcEmbeddedIconVariant.TriangleWithRun}
				embeddedIconRunLength={3}
			/>
		);
		// Heuristic: triangleWithRun renders 5 small run circles (r=10). Count them.
		const runDots = Array.from(container.querySelectorAll("circle")).filter(
			(c) => c.getAttribute("r") === "10"
		);
		expect(runDots.length).toBe(5);
	});
});
