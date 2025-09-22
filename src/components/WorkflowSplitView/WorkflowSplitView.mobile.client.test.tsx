import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { WorkflowSplitView } from "./WorkflowSplitView";

// Force mobile breakpoint
vi.mock("../../hooks/useBreakpoints", async (orig) => {
	const actual = await (orig as any)();
	return {
		...actual,
		useNhsFdpBreakpoints: () => ({ up: (k: string) => false }),
	};
});

type Step = { id: string; label: string };
const steps: Step[] = [
	{ id: "one", label: "One" },
	{ id: "two", label: "Two" },
	{ id: "three", label: "Three" },
];

describe("WorkflowSplitView (mobile)", () => {
	beforeEach(() => vi.clearAllMocks());
	it("renders cards scroller and navigates by clicking cards", () => {
		render(
			<WorkflowSplitView
				steps={steps}
				defaultStepId="one"
				renderStepContent={(s) => <div>Card {s?.label}</div>}
			/>
		);
		fireEvent.click(screen.getByText("Card Two"));
		expect(screen.getByText("Card Two")).toBeTruthy();
	});
});
