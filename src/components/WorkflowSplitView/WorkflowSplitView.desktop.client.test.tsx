/// <reference types="@testing-library/jest-dom/vitest" />
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { WorkflowSplitView } from "./WorkflowSplitView";

// Force desktop breakpoint: up('xlarge')=true
vi.mock("../../hooks/useBreakpoints", async (orig) => {
	const actual = await (orig as any)();
	return {
		...actual,
		useNhsFdpBreakpoints: () => ({
			up: (k: string) =>
				k === "xlarge" ? true : k === "medium" ? true : false,
		}),
	};
});

type Step = { id: string; label: string };
const steps: Step[] = [
	{ id: "a", label: "A" },
	{ id: "b", label: "B" },
];

describe("WorkflowSplitView (desktop, 3 panes)", () => {
	beforeEach(() => vi.clearAllMocks());

	it("renders 3-pane grid with secondary pane visible", async () => {
		render(
			<WorkflowSplitView
				steps={steps}
				defaultStepId="a"
				layoutForStep={({ breakpoint }) =>
					breakpoint === "desktop"
						? { panes: 3, showPrimaryNav: true, showSecondaryNav: true }
						: { panes: 2, showPrimaryNav: true, showSecondaryNav: false }
				}
				renderStepContent={(s) => <div>Content {s?.label}</div>}
				renderSecondaryContent={(s) => <div>Side {s?.label}</div>}
			/>
		);

		await waitFor(() => {
			const grid = document.querySelector(".nhsfdp-workflow-grid.panes-3");
			expect(grid).toBeTruthy();
		});

		expect(
			screen.getByRole("complementary", { name: "Primary navigation" })
		).toBeTruthy();
		expect(screen.getByRole("main")).toHaveTextContent("Content A");
		expect(
			screen.getByRole("complementary", { name: "Secondary navigation" })
		).toHaveTextContent("Side A");
	});

	it("can force single-pane on desktop via layoutForStep", async () => {
		render(
			<WorkflowSplitView
				steps={steps}
				defaultStepId="a"
				layoutForStep={() => ({
					panes: 1,
					showPrimaryNav: false,
					showSecondaryNav: false,
				})}
				renderStepContent={(s) => <div>Content {s?.label}</div>}
			/>
		);

		// When panes=1, component takes the mobile rendering path
		await waitFor(() => {
			const mobile = document.querySelector(".nhsfdp-workflow-mobile");
			expect(mobile).toBeTruthy();
		});

		// No side asides should be present
		expect(
			screen.queryByRole("complementary", { name: "Primary navigation" })
		).toBeNull();
		expect(
			screen.queryByRole("complementary", { name: "Secondary navigation" })
		).toBeNull();
	});
});
