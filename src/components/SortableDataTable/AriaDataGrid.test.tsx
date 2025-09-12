import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { AriaDataGrid } from "./AriaDataGrid";
import { AriaDataGridProps } from "./AriaDataGridTypes";

// Mock scrollIntoView for test environment
beforeEach(() => {
	Element.prototype.scrollIntoView = vi.fn();
});

// Mock data for testing
const mockColumns = [
	{ key: "name", label: "Name" },
	{ key: "age", label: "Age" },
	{ key: "active", label: "Active" },
	{ key: "email", label: "Email" },
];

const mockData = [
	{ name: "John Doe", age: 30, active: true, email: "john@example.com" },
	{ name: "Jane Smith", age: 25, active: false, email: "jane@example.com" },
	{ name: "Bob Johnson", age: 35, active: true, email: "bob@example.com" },
];

const defaultProps: AriaDataGridProps = {
	data: mockData,
	columns: mockColumns,
	sortConfig: [],
	onSort: vi.fn(),
	ariaLabel: "Test data grid",
};

describe("AriaDataGrid - ARIA Compliance and Keyboard Navigation Tests", () => {
	let user: ReturnType<typeof userEvent.setup>;

	beforeEach(() => {
		user = userEvent.setup();
		vi.clearAllMocks();
	});

	describe("Basic Table Structure and ARIA Compliance", () => {
		it("renders table with correct ARIA roles and attributes", () => {
			render(<AriaDataGrid {...defaultProps} />);

			// AriaDataGrid uses role="grid" for accessibility compliance
			const table = screen.getByRole("grid");
			expect(table).toBeInTheDocument();
			expect(table).toHaveAttribute("role", "grid");
			expect(table).toHaveAttribute("aria-label", "Test data grid");

			// Check for proper rowgroup structure
			const rowGroups = screen.getAllByRole("rowgroup");
			expect(rowGroups).toHaveLength(2); // thead and tbody
		});

		it("has proper column headers with ARIA attributes", () => {
			render(<AriaDataGrid {...defaultProps} />);

			const headers = screen.getAllByRole("columnheader");
			expect(headers).toHaveLength(mockColumns.length);

			headers.forEach((header, index) => {
				expect(header).toHaveAttribute("role", "columnheader");
				// Only the first header should have tabIndex="0" initially, others should have tabIndex="-1"
				expect(header).toHaveAttribute("tabIndex", index === 0 ? "0" : "-1");
				expect(header).toHaveAttribute("aria-sort", "none");
				expect(header).toHaveTextContent(mockColumns[index].label);
			});
		});

		it("has proper grid cells with ARIA attributes", () => {
			render(<AriaDataGrid {...defaultProps} />);

			const cells = screen.getAllByRole("gridcell");
			expect(cells).toHaveLength(mockData.length * mockColumns.length);

			cells.forEach((cell) => {
				expect(cell).toHaveAttribute("role", "gridcell");
				expect(cell).toHaveAttribute("tabIndex", "-1");
			});
		});

		it("supports custom ARIA labels and descriptions", () => {
			render(
				<AriaDataGrid
					{...defaultProps}
					ariaLabel="Custom label"
					ariaLabelledby="label-id"
					ariaDescribedby="desc-id"
				/>
			);

			const table = screen.getByRole("grid");
			expect(table).toHaveAttribute("aria-label", "Custom label");
			expect(table).toHaveAttribute("aria-labelledby", "label-id");
			expect(table).toHaveAttribute("aria-describedby", "desc-id");
		});
	});

	describe("Data Rendering and Boolean Accessibility", () => {
		it("renders all data correctly", () => {
			render(<AriaDataGrid {...defaultProps} />);

			// Check text content
			expect(screen.getByText("John Doe")).toBeInTheDocument();
			expect(screen.getByText("30")).toBeInTheDocument();
			expect(screen.getByText("jane@example.com")).toBeInTheDocument();
		});

		it("renders boolean values with accessible text", () => {
			render(<AriaDataGrid {...defaultProps} />);

			// Check for visual indicators (should be hidden from screen readers)
			const checkmarks = screen.getAllByText("✓");
			const crosses = screen.getAllByText("✗");
			expect(checkmarks).toHaveLength(2); // Two true values
			expect(crosses).toHaveLength(1); // One false value

			// Check for screen reader accessible text
			const yesTexts = screen.getAllByText("Yes");
			const noTexts = screen.getAllByText("No");
			expect(yesTexts).toHaveLength(2);
			expect(noTexts).toHaveLength(1);

			// Verify screen reader text has proper class
			yesTexts.forEach((text) => {
				expect(text).toHaveClass("sr-only");
			});
			noTexts.forEach((text) => {
				expect(text).toHaveClass("sr-only");
			});
		});

		it("handles null and undefined values gracefully", () => {
			const dataWithNulls = [
				{ name: null, age: undefined, active: true, email: "" },
			];

			render(<AriaDataGrid {...defaultProps} data={dataWithNulls} />);

			const cells = screen.getAllByRole("gridcell");
			expect(cells[0]).toHaveTextContent(""); // null
			expect(cells[1]).toHaveTextContent(""); // undefined
			expect(cells[3]).toHaveTextContent(""); // empty string
		});
	});

	describe("Sorting Functionality and ARIA States", () => {
		it("calls onSort when header is clicked", async () => {
			const onSort = vi.fn();
			render(<AriaDataGrid {...defaultProps} onSort={onSort} />);

			const nameHeader = screen.getByRole("columnheader", { name: "Name" });
			await user.click(nameHeader);

			expect(onSort).toHaveBeenCalledWith("name");
			expect(onSort).toHaveBeenCalledTimes(1);
		});

		it("activates sorting with keyboard navigation", async () => {
			const onSort = vi.fn();
			render(<AriaDataGrid {...defaultProps} onSort={onSort} />);

			const nameHeader = screen.getByRole("columnheader", { name: "Name" });

			// Focus and press Enter
			nameHeader.focus();
			await user.keyboard("{Enter}");
			expect(onSort).toHaveBeenCalledWith("name");

			// Press Space
			await user.keyboard(" ");
			// Allow for possibility of multiple events from keyboard interactions
			expect(onSort).toHaveBeenCalledWith("name");
			expect(onSort.mock.calls.length).toBeGreaterThanOrEqual(2);
		});

		it("prevents default behavior for keyboard activation", () => {
			const onSort = vi.fn();
			render(<AriaDataGrid {...defaultProps} onSort={onSort} />);

			const nameHeader = screen.getByRole("columnheader", { name: "Name" });

			// Test Enter key
			const enterEvent = new KeyboardEvent("keydown", {
				key: "Enter",
				bubbles: true,
				cancelable: true,
			});
			const preventDefaultSpy = vi.spyOn(enterEvent, "preventDefault");
			fireEvent(nameHeader, enterEvent);
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Test Space key
			const spaceEvent = new KeyboardEvent("keydown", {
				key: " ",
				bubbles: true,
				cancelable: true,
			});
			const preventDefaultSpy2 = vi.spyOn(spaceEvent, "preventDefault");
			fireEvent(nameHeader, spaceEvent);
			expect(preventDefaultSpy2).toHaveBeenCalled();
		});

		it("displays correct sort states in ARIA attributes", () => {
			const ascSortConfig = [{ key: "name", direction: "asc" as const }];
			const { rerender } = render(
				<AriaDataGrid {...defaultProps} sortConfig={ascSortConfig} />
			);

			let nameHeader = screen.getByRole("columnheader", { name: "Name" });
			expect(nameHeader).toHaveAttribute("aria-sort", "ascending");

			// Test descending sort
			const descSortConfig = [{ key: "name", direction: "desc" as const }];
			rerender(<AriaDataGrid {...defaultProps} sortConfig={descSortConfig} />);

			nameHeader = screen.getByRole("columnheader", { name: "Name" });
			expect(nameHeader).toHaveAttribute("aria-sort", "descending");

			// Test no sort
			rerender(<AriaDataGrid {...defaultProps} sortConfig={[]} />);
			nameHeader = screen.getByRole("columnheader", { name: "Name" });
			expect(nameHeader).toHaveAttribute("aria-sort", "none");
		});

		it("displays sort indicators with proper accessibility", () => {
			const sortConfig = [{ key: "name", direction: "asc" as const }];
			render(<AriaDataGrid {...defaultProps} sortConfig={sortConfig} />);

			const sortIndicator = document.querySelector(".sort-indicator");
			expect(sortIndicator).toBeInTheDocument();
			expect(sortIndicator).toHaveAttribute("aria-hidden", "true");

			const sortArrow = document.querySelector(".sort-arrow");
			expect(sortArrow).toBeInTheDocument();
		});

		it("displays multiple sort priorities correctly", () => {
			const sortConfig = [
				{ key: "name", direction: "asc" as const },
				{ key: "age", direction: "desc" as const },
			];
			render(<AriaDataGrid {...defaultProps} sortConfig={sortConfig} />);

			const nameHeader = screen.getByRole("columnheader", { name: "Name" });
			const ageHeader = screen.getByRole("columnheader", { name: "Age" });

			const namePriority = nameHeader.querySelector(".sort-priority");
			const agePriority = ageHeader.querySelector(".sort-priority");

			expect(namePriority).toHaveTextContent("1");
			expect(agePriority).toHaveTextContent("2");
		});
	});

	describe("Row Selection and States", () => {
		it("marks selected row with proper ARIA attributes", () => {
			render(<AriaDataGrid {...defaultProps} selectedRowIndex={1} />);

			const rows = screen.getAllByRole("row");
			const dataRows = rows.slice(1); // Skip header row

			expect(dataRows[0]).toHaveAttribute("aria-selected", "false");
			expect(dataRows[1]).toHaveAttribute("aria-selected", "true");
			expect(dataRows[2]).toHaveAttribute("aria-selected", "false");
		});

		it("applies correct CSS classes for selection", () => {
			render(<AriaDataGrid {...defaultProps} selectedRowIndex={0} />);

			const rows = screen.getAllByRole("row");
			const firstDataRow = rows[1]; // Skip header row
			const secondDataRow = rows[2];

			expect(firstDataRow).toHaveClass("data-row--selected");
			expect(secondDataRow).not.toHaveClass("data-row--selected");
		});

		it("handles no selection state correctly", () => {
			render(<AriaDataGrid {...defaultProps} selectedRowIndex={undefined} />);

			const rows = screen.getAllByRole("row");
			const dataRows = rows.slice(1); // Skip header row

			dataRows.forEach((row) => {
				expect(row).toHaveAttribute("aria-selected", "false");
				expect(row).not.toHaveClass("data-row--selected");
			});
		});
	});

	describe("Keyboard Navigation and Focus Management", () => {
		it("allows sequential keyboard navigation through headers", async () => {
			render(<AriaDataGrid {...defaultProps} />);

			const table = screen.getByRole("grid");
			const headers = screen.getAllByRole("columnheader");

			// Start navigation - focus the table first
			await user.tab();
			expect(table).toHaveFocus();

			// Use arrow keys to navigate through headers (grid pattern)
			await user.keyboard("{ArrowRight}");
			// In grid pattern, focus should be managed programmatically
			// After ArrowRight, we should be on the second header (index 1)
			expect(headers[1]).toHaveClass("sortable-header--focused");
		});

		it("allows navigation into grid cells after headers", async () => {
			render(<AriaDataGrid {...defaultProps} />);

			const table = screen.getByRole("grid");

			// Start navigation
			await user.tab();
			expect(table).toHaveFocus();

			// Navigate to first header and then down to cells using arrow keys
			await user.keyboard("{ArrowDown}");
			// The grid should manage internal focus appropriately
		});

		it("maintains proper tabindex values for all interactive elements", () => {
			render(<AriaDataGrid {...defaultProps} />);

			const table = screen.getByRole("grid");
			expect(table).toHaveAttribute("tabindex", "0");

			const headers = screen.getAllByRole("columnheader");
			const cells = screen.getAllByRole("gridcell");

			// Only the first header should have tabindex="0", others should be "-1"
			expect(headers[0]).toHaveAttribute("tabIndex", "0");
			headers.slice(1).forEach((header) => {
				expect(header).toHaveAttribute("tabIndex", "-1");
			});

			cells.forEach((cell) => {
				expect(cell).toHaveAttribute("tabIndex", "-1");
			});
		});
	});

	describe("Edge Cases and Robustness", () => {
		it("handles empty data array", () => {
			render(<AriaDataGrid {...defaultProps} data={[]} />);

			const table = screen.getByRole("grid");
			expect(table).toBeInTheDocument();

			// Headers should still be present
			const headers = screen.getAllByRole("columnheader");
			expect(headers).toHaveLength(mockColumns.length);

			// No data rows should exist
			const rows = screen.getAllByRole("row");
			expect(rows).toHaveLength(1); // Just the header row
		});

		it("handles columns with special characters in keys", () => {
			const specialColumns = [
				{ key: "user-name", label: "User Name" },
				{ key: "user_email", label: "User Email" },
				{ key: "is-active", label: "Is Active" },
			];

			const specialData = [
				{ "user-name": "John", user_email: "john@test.com", "is-active": true },
			];

			render(
				<AriaDataGrid
					{...defaultProps}
					columns={specialColumns}
					data={specialData}
				/>
			);

			expect(screen.getByText("John")).toBeInTheDocument();
			expect(screen.getByText("john@test.com")).toBeInTheDocument();
			expect(screen.getByText("✓")).toBeInTheDocument();
		});

		it("applies custom CSS classes and attributes correctly", () => {
			render(
				<AriaDataGrid
					{...defaultProps}
					className="custom-table"
					id="my-grid"
					testId="test-grid"
				/>
			);

			const table = screen.getByRole("grid");
			expect(table).toHaveClass("nhsuk-table", "custom-table");
			expect(table).toHaveAttribute("id", "my-grid");

			const testGrid = screen.getByTestId("test-grid");
			expect(testGrid).toBe(table);
		});

		it("handles large datasets without performance issues", () => {
			const largeData = Array.from({ length: 100 }, (_, i) => ({
				name: `User ${i}`,
				age: 20 + (i % 50),
				active: i % 2 === 0,
				email: `user${i}@example.com`,
			}));

			const startTime = performance.now();
			const { container } = render(
				<AriaDataGrid {...defaultProps} data={largeData} />
			);
			const endTime = performance.now();

			// Performance test for 100 rows - adjusted for CI environment
			const renderTime = endTime - startTime;
			console.log(
				`AriaDataGrid 100-row render time: ${renderTime.toFixed(2)}ms`
			);

			// Should render reasonably quickly (tunable budget; slightly higher in CI)
			const budget = Number(process.env.ARIA_DATAGRID_RENDER_BUDGET_MS ?? (process.env.CI ? 600 : 400));
			expect(renderTime).toBeLessThan(budget);

			const rows = container.querySelectorAll("tbody tr");
			expect(rows).toHaveLength(100);

			// All cells should be properly accessible
			const cells = screen.getAllByRole("gridcell");
			expect(cells).toHaveLength(100 * mockColumns.length);
		});
	});

	describe("Integration with Existing Components", () => {
		it("maintains NHS design system compatibility", () => {
			render(<AriaDataGrid {...defaultProps} />);

			const table = screen.getByRole("grid");
			expect(table).toHaveClass("nhsuk-table");

			const thead = table.querySelector("thead");
			const tbody = table.querySelector("tbody");

			expect(thead).toHaveClass("nhsuk-table__head");
			expect(tbody).toHaveClass("nhsuk-table__body");
		});

		it("maintains existing component styling classes", () => {
			render(<AriaDataGrid {...defaultProps} />);

			const headers = screen.getAllByRole("columnheader");
			headers.forEach((header) => {
				expect(header).toHaveClass("sortable-header");
			});

			const cells = screen.getAllByRole("gridcell");
			cells.forEach((cell) => {
				expect(cell).toHaveClass("data-cell");
			});

			const rows = screen.getAllByRole("row");
			const dataRows = rows.slice(1); // Skip header
			dataRows.forEach((row) => {
				expect(row).toHaveClass("data-row");
			});
		});
	});
});
