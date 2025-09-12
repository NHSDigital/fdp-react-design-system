import { render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SPCChart, ImprovementDirection, type SPCDatum } from "./SPCChart";
import { ChartType } from "./logic/spcConstants";

describe("SPCChart target line rendering", () => {
	it("renders a single horizontal target line when all targets are identical numbers", async () => {
		const data: SPCDatum[] = Array.from({ length: 18 }, (_, i) => ({
			x: i + 1,
			y: 50 + Math.sin(i / 3),
		}));
		const targets = Array(data.length).fill(52); // constant target
		const { container } = render(
			<SPCChart
				data={data}
				targets={targets}
				chartType={ChartType.XmR}
				metricImprovement={ImprovementDirection.Up}
				announceFocus={false}
			/>
		);
		await waitFor(() => {
			const line = container.querySelector('[data-testid="spc-target-line"]');
			expect(line).not.toBeNull();
		});
		const label = container.querySelector('[data-testid="spc-target-label"]');
		expect(label?.textContent).toMatch(/Target 52/);
	});

	it("does not render target line when targets are not uniform", () => {
		const data: SPCDatum[] = Array.from({ length: 10 }, (_, i) => ({
			x: i + 1,
			y: 30 + i,
		}));
		const targets = data.map((_, i) => 40 + (i % 2)); // alternating 40 / 41
		const { container } = render(
			<SPCChart
				data={data}
				targets={targets}
				chartType={ChartType.XmR}
				metricImprovement={ImprovementDirection.Up}
				announceFocus={false}
			/>
		);
		const line = container.querySelector("line.fdp-spc__target");
		expect(line).toBeNull();
	});
});
