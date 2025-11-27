import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import RunChart, { type RunSeries, RunChartColor } from "./RunChart";

function series(n = 12): RunSeries[] {
	const start = Date.UTC(2025, 0, 1);
	const data = Array.from({ length: n }, (_, i) => ({
		x: new Date(start + i * 86400000),
		y: 50 + (i >= 6 ? 3 : 0),
	}));
	return [{ id: "metric", data }];
}

describe("RunChart SSR", () => {
	it("renders static SVG with axes and points without crashing", () => {
		const html = renderToString(
			<RunChart
				series={series()}
				yLabel="Value"
				lineColor={RunChartColor.NHSBlue}
			/>
		);
		expect(html).toContain("fdp-run-chart");
		expect(html).toContain("<svg");
		// Points are circles rendered by LineSeriesPrimitive
		expect(html).toContain("fdp-line-point");
		// Median baseline (default enabled)
		expect(html).toContain("fdp-run-baseline");
	});
});
