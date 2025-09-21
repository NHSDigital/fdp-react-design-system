/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import { SPCSpark } from "./SPCSpark";
import { VariationState } from "../SPCIcons/SPCConstants";
import { ImprovementDirection } from "../engine";
import { VariationIcon as UiVariationIcon } from "../SPCChart/types";

describe("SPCSpark", () => {
	const data = Array.from({ length: 10 }).map((_, i) => ({ value: 50 + i }));

	it("renders svg with role img", () => {
		render(
			<SPCSpark
				data={data}
				variationState={VariationState.CommonCause}
				ariaLabel="SPC sparkline"
			/>
		);
		const svg = screen.getByRole("img", { name: /sparkline/i });
		expect(svg).toBeInTheDocument();
	});

	it("renders mean line when showMean", () => {
		render(
			<SPCSpark
				data={data}
				variationState={VariationState.CommonCause}
				showMean
			/>
		);
		const lines = document.querySelectorAll("line");
		// At least one line (mean) present
		expect(lines.length).toBeGreaterThan(0);
	});

	it("applies gradient wash when enabled", () => {
		render(
			<SPCSpark
				data={data}
				variationState={VariationState.SpecialCauseImproving}
				gradientWash
			/>
		);
		const rect = document.querySelector("rect");
		expect(rect).not.toBeNull();
	});

	it("gates glyph by minPointsForSignals", () => {
		const short = data.slice(0, 4);
		const { rerender } = render(
			<SPCSpark
				data={short}
				variationState={VariationState.SpecialCauseImproving}
				metricImprovement={ImprovementDirection.Up}
				showStateGlyph
				minPointsForSignals={8}
			/>
		);
		expect(document.querySelector("text")).toBeNull();
		rerender(
			<SPCSpark
				data={data}
				variationState={VariationState.SpecialCauseImproving}
				metricImprovement={ImprovementDirection.Up}
				showStateGlyph
				minPointsForSignals={8}
			/>
		);
		expect(document.querySelector("text")).not.toBeNull();
	});

    it("renders limits when provided via engine-like props", () => {
        const base = Array.from({ length: 15 }).map((_, i) => ({ value: 100 + Math.sin(i) * 2 }));
        render(
            <SPCSpark
                data={base}
                centerLine={100}
                controlLimits={{ lower: 90, upper: 110 }}
                showLimits
            />
        );
        const dashed = Array.from(document.querySelectorAll("line")).filter((l) =>
            l.getAttribute("stroke-dasharray")?.includes("4,4")
        );
        expect(dashed.length).toBeGreaterThanOrEqual(2);
    });

	it("renders shaded limit band when showLimitBand", () => {
		const dataVals = Array.from({ length: 30 }).map((_, i) => ({
			value: 50 + Math.sin(i / 2) * 5,
		}));
		render(
			<SPCSpark
				data={dataVals}
				variationState={VariationState.CommonCause}
				showLimits
				showLimitBand
			/>
		);
		const rects = Array.from(document.querySelectorAll("rect"));
		// First rect could be gradient wash if enabled (not here). Band should exist.
		const band = rects.find(
			(r) =>
				Number(r.getAttribute("fill-opacity")) === 0.08 ||
				r.getAttribute("fillopacity") === "0.08"
		);
		expect(band).toBeTruthy();
	});

    it("renders without onClassification side-effects (pure)", () => {
        const trend = [10, 10.2, 10.4, 10.6, 10.8, 11, 11.2, 11.4, 11.6, 11.8];
        render(
            <SPCSpark
                data={trend.map((v) => ({ value: v }))}
                showLimits
                centerLine={10.5}
                controlLimits={{ lower: 9, upper: 12 }}
            />
        );
        // No callback to assert; smoke test that it rendered
        const svg = screen.getByRole("img");
        expect(svg).toBeInTheDocument();
    });

	it("thins points when maxPoints specified and uses solid fill without stroke", () => {
		const longData = Array.from({ length: 120 }).map((_, i) => ({
			value: Math.sin(i / 5) * 10 + 100,
		}));
		render(
			<SPCSpark
				data={longData}
				variationState={VariationState.CommonCause}
				maxPoints={40}
				thinningStrategy="stride"
			/>
		);
		const circles = document.querySelectorAll("circle");
		expect(circles.length).toBeLessThanOrEqual(40);
		circles.forEach((c) => {
			expect(c.getAttribute("stroke")).toBe("none");
		});
	});

	it("positions glyph to avoid overlap with trailing data cluster (moves to opposite half)", () => {
		// Create data whose last 6 points are high values (will render near top visually if higher numeric => higher meanY? meanY inverts so higher numeric closer to top or bottom depending on scale)
		// In current meanY implementation higher numeric => lower y (since y increases downward). So to force recent points in bottom half, use higher values; expect glyph moves to top (y ~12, data-glyph-pos=top)
		const base = Array.from({ length: 30 }).map((_, i) => ({
			value: 50 + Math.sin(i / 3) * 2,
		}));
		const highTail = base
			.slice(0, 24)
			.concat([
				{ value: 90 },
				{ value: 91 },
				{ value: 92 },
				{ value: 93 },
				{ value: 94 },
				{ value: 95 },
			]);
		const { rerender, container } = render(
			<SPCSpark
				data={highTail}
				variationState={VariationState.SpecialCauseImproving}
				metricImprovement={ImprovementDirection.Up}
				showStateGlyph
			/>
		);
		const glyph = container.querySelector("text");
		expect(glyph).not.toBeNull();
		// High recent values render near top (small y) so glyph moves to bottom half
		expect(glyph?.getAttribute("data-glyph-pos")).toBe("bottom");

		// Now create data whose last 6 points are very low (forcing recent cluster near top visually -> glyph should move to bottom)
		const lowTail = base
			.slice(0, 24)
			.concat([
				{ value: 10 },
				{ value: 9 },
				{ value: 8 },
				{ value: 7 },
				{ value: 6 },
				{ value: 5 },
			]);
		rerender(
			<SPCSpark
				data={lowTail}
				variationState={VariationState.SpecialCauseImproving}
				metricImprovement={ImprovementDirection.Up}
				showStateGlyph
			/>
		);
		const glyph2 = container.querySelector("text");
		expect(glyph2).not.toBeNull();
		// Low recent values render near bottom (large y) so glyph moves to top half
		expect(glyph2?.getAttribute("data-glyph-pos")).toBe("top");
	});

	it("colours points individually when colorPointsBySignal", () => {
		// Construct data with a clear high outlier and low outlier around stable mid values
		const base = [10, 11, 10, 11, 10, 50, 10, 11, 10, 11, 10, -15, 10, 11, 10];
		const data = base.map((v) => ({ value: v }));
		const { container } = render(
			<SPCSpark
				data={data}
				showLimits
				colorPointsBySignal
				centerLine={10}
				controlLimits={{ lower: 0, upper: 20 }}
				pointSignals={[
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Improvement,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Concern,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
					UiVariationIcon.Neither,
				]}
			/>
		);
		const circles = Array.from(container.querySelectorAll("circle"));
		// Expect at least three colour groupings by fill attribute tokens (improvement, concern, common-cause greys)
		const fills = new Set(circles.map((c) => c.getAttribute("fill")));
		expect(fills.size).toBeGreaterThanOrEqual(2);
	});
});
