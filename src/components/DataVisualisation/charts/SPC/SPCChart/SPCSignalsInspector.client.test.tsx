import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SPCChart, TrendVisualMode } from "./SPCChart";
import { ChartType } from "./logic/spc";

function makeData() {
	// Simple ascending trend with enough points; values are arbitrary
	return Array.from({ length: 14 }, (_, i) => ({ x: i + 1, y: 50 + i }));
}

describe("SPCSignalsInspector", () => {
	it("renders and updates when focusing different points", async () => {
		const data = makeData();
		const onSignalFocus = vi.fn();
		render(
			<SPCChart
				data={data}
				chartType={ChartType.XmR}
				announceFocus
				trendVisualMode={TrendVisualMode.Ungated}
				showSignalsInspector
				onSignalFocus={onSignalFocus}
				narrationContext={{ measureName: "Metric", measureUnit: "%" }}
			/>
		);

		// Inspector region present
		const panel = await screen.findByTestId("spc-signals-inspector");
		expect(panel).toBeInTheDocument();

		// Initially no point selected
		expect(panel).toHaveTextContent("No point selected");

		// Move focus right via nav button (uses TooltipContext to drive focus)
		const nextBtn = screen.getByRole("button", { name: /Next point/i });
		fireEvent.click(nextBtn);

		// Inspector should now show a Point: 1 (index 0 + 1) summary
		expect(panel).toHaveTextContent("Point: 1");
		expect(panel).toHaveTextContent("Value:");

		// onSignalFocus should be called once for the first navigation
		expect(onSignalFocus).toHaveBeenCalledTimes(1);
		expect(onSignalFocus.mock.calls[0][0].index).toBe(0);
		expect(typeof onSignalFocus.mock.calls[0][0].y).toBe("number");

		// Advance again and confirm index increments
		fireEvent.click(nextBtn);
		expect(panel).toHaveTextContent("Point: 2");
		expect(onSignalFocus).toHaveBeenCalledTimes(2);
		expect(onSignalFocus.mock.calls[1][0].index).toBe(1);

		// Tooltip overlay should be suppressed when inspector is visible (no tooltip region)
		expect(screen.queryByTestId(/spc-tooltip/i)).toBeNull();
	});
});
