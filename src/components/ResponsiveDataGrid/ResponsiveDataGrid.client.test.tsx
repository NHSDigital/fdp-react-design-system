import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";
import { ResponsiveDataGrid } from "./ResponsiveDataGrid";

function buildPanels() {
	return [
		{
			id: "patients",
			label: "Patients",
			ariaLabel: "Patients data",
			data: [
				// Include an action property to render a button for internal focusable nav test
				{ id: 1, name: "Alice", action: "View" },
				{ id: 2, name: "Bob" },
			],
			columns: [
				{ key: "name", label: "Name", cardRenderer: (row: any) => row.name },
				{
					key: "action",
					label: "Action",
					cardRenderer: (row: any) =>
						row.action ? (
							<button type="button">{row.action}</button>
						) : null,
				},
			],
		},
		{
			id: "other",
			label: "Other",
			ariaLabel: "Other data",
			data: [{ id: 3, name: "Charlie" }],
			columns: [
				{ key: "name", label: "Name", cardRenderer: (row: any) => row.name },
			],
		},
	];
}

describe("ResponsiveDataGrid (client)", () => {
	it("navigates tabs with ArrowRight and calls onTabChange", () => {
		const handler = vi.fn();
		render(
			<ResponsiveDataGrid
				forceLayout="cards"
				ariaLabel="Demo"
				tabPanels={buildPanels()}
				onTabChange={handler}
			/>
		);
		const tabs = screen.getAllByRole("tab");
		expect(tabs[0]).toHaveAttribute("aria-selected", "true");
		tabs[0].focus();
		act(() => {
			fireEvent.keyDown(tabs[0], { key: "ArrowRight" });
		});
		expect(handler).toHaveBeenCalledWith(1);
		expect(tabs[1]).toHaveAttribute("aria-selected", "true");
	});

	it("selects card with Enter (baseline selection assertion only)", () => {
		render(
			<ResponsiveDataGrid
				forceLayout="cards"
				ariaLabel="Demo"
				tabPanels={buildPanels()}
			/>
		);
		const firstGridCell = screen.getAllByRole("gridcell")[0] as HTMLElement;
		firstGridCell.focus();
		act(() => {
			fireEvent.keyDown(firstGridCell, { key: "Enter" });
		});
		// Selection now indicated by selected modifier class on wrapper
		expect(firstGridCell.className).toContain("--selected");
		// And aria-selected attribute for assistive tech
		expect(firstGridCell).toHaveAttribute("aria-selected", "true");
	});

	it("enters navigation mode with custom card template containing a button", async () => {
		const cardConfig = {
			cardTemplate: (row: any) => (
				<div className="nhsuk-card adaptive-card adaptive-card--generic">
					<div className="nhsuk-card__content">
						<h2 className="nhsuk-heading nhsuk-card__heading">{row.name}</h2>
						{row.action ? <button type="button">{row.action}</button> : null}
					</div>
				</div>
			),
		};

		const { unmount } = render(
			<ResponsiveDataGrid
				forceLayout="cards"
				ariaLabel="Demo"
				tabPanels={buildPanels()}
				cardConfig={cardConfig as any}
			/>
		);
		// Allow initial effects (including the 200ms grid dimension calculation) to run within act
		await act(async () => {
			await new Promise((r) => setTimeout(r, 250));
		});
		const firstWrapper = screen.getAllByRole("gridcell")[0] as HTMLElement;
		// Ensure the wrapper has focus so key events are handled by its onKeyDown
		await act(async () => {
			firstWrapper.focus();
		});
		// Use act-wrapped keyDown events for deterministic state updates
		act(() => {
			fireEvent.keyDown(firstWrapper, { key: 'Enter' });
			fireEvent.keyDown(firstWrapper, { key: 'Enter' });
		});
		// Flush any pending timeouts that move focus into the card
		await act(async () => {
			await new Promise((r) => setTimeout(r, 0));
		});
		await waitFor(() =>
			expect(firstWrapper).toHaveAttribute("aria-expanded", "true")
		);
		// Optional extra: focus should move to the internal button
		await waitFor(() => {
			const btn = screen.getByRole('button', { name: 'View' });
			expect(btn).toHaveFocus();
		});
		// Cleanup to avoid post-test state updates
		unmount();
	});

	it("applies sorting via select and reorders cards", () => {
		render(
			<ResponsiveDataGrid
				forceLayout="cards"
				ariaLabel="Demo"
				tabPanels={buildPanels()}
			/>
		);
		const before = screen
			.getAllByRole("gridcell")
			.map((c) => c.textContent || "");
		const sortSelect = screen.getByLabelText("Sort cards by");
		// Choose descending option (Name Z-A)
		fireEvent.change(sortSelect, { target: { value: "name-desc" } });
		const after = screen
			.getAllByRole("gridcell")
			.map((c) => c.textContent || "");
		expect(after[0]).not.toBe(before[0]);
		expect(after[0]).toMatch(/Bob/);
	});
});
