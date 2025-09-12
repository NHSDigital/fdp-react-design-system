import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { SPCChart } from "./SPCChart";
import { metricSeries } from "./test-data/parsedDataset";

// Basic client test ensuring each metric dataset renders the correct number of plotted points.

describe("SPCChart dataset metrics", () => {
	test.each(
		metricSeries.map((s) => [s.metric, s.points.length]) as [string, number][]
	)("renders %s with %d points", (metric, count) => {
		const series = metricSeries.find((m) => m.metric === metric)!;
		render(<SPCChart data={series.points} />);
		// Points are <circle> with class fdp-spc__point
		const points = document.querySelectorAll("circle.fdp-spc__point");
		expect(points.length).toBe(count);
		// Logic suppresses limits until minimum recommended points (~13)
		const cl = document.querySelectorAll("line.fdp-spc__cl");
		if (count >= 13) expect(cl.length).toBe(1);
		else expect(cl.length).toBe(0);
	});
});
