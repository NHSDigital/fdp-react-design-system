import React, { useEffect, useRef, useState } from "react";
import Table from "./Table";
import type { TableProps } from "./Table.types";
import "./SimpleSortableTable.scss";

export interface SimpleSortableTableProps
	extends Omit<TableProps, "head" | "rows" | "columns" | "data"> {
	/**
	 * Column definitions for the sortable table
	 */
	columns: Array<{
		key: string;
		title: string;
		sortable?: boolean;
		format?: string;
		headerClasses?: string;
		cellClasses?: string;
		/** Custom sort value accessor - if not provided, uses the key */
		sortValue?: (row: any) => string | number;
	}>;

	/**
	 * Data rows for the table
	 */
	data: any[];

	/**
	 * Optional initial sort column key
	 */
	initialSort?: {
		key: string;
		direction: "ascending" | "descending";
	};

	/**
	 * Callback when sort changes
	 */
	onSortChange?: (key: string, direction: "ascending" | "descending") => void;
}

type SortDirection = "none" | "ascending" | "descending";

/**
 * SimpleSortableTable - Progressive enhancement sortable table
 *
 * Applies MOJ Frontend SortableTable patterns to NHS FDP Design System Table component.
 *
 * Features:
 * - Progressive enhancement (base table works without JS)
 * - ARIA live region for sort announcements
 * - Visual sort indicators (SVG arrows)
 * - Accessible button-based column headers
 * - Keyboard navigable
 * - Numeric and string sorting with locale awareness
 */
export const SimpleSortableTable: React.FC<SimpleSortableTableProps> = ({
	columns,
	data,
	initialSort,
	onSortChange,
	caption,
	...tableProps
}) => {
	const [sortState, setSortState] = useState<{
		key: string;
		direction: SortDirection;
	}>({
		key: initialSort?.key || "",
		direction: initialSort?.direction || "none",
	});

	const [sortedData, setSortedData] = useState(data);
	const statusRef = useRef<HTMLDivElement>(null);

	// SVG icon definitions
	const icons = {
		ascending:
			'<svg class="nhsuk-sortable-table__icon" xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" aria-hidden="true" focusable="false"><path d="m6.5 0 5.5 7h-11l5.5-7z"/></svg>',
		descending:
			'<svg class="nhsuk-sortable-table__icon" xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" aria-hidden="true" focusable="false"><path d="m6.5 17-5.5-7h11l-5.5 7z"/></svg>',
		sortable:
			'<svg class="nhsuk-sortable-table__icon" xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" aria-hidden="true" focusable="false"><path d="m6.5 0 5.5 7h-11l5.5-7z"/><path d="m6.5 17-5.5-7h11l-5.5 7z"/></svg>',
	};

	// Sort the data
	useEffect(() => {
		if (sortState.direction === "none" || !sortState.key) {
			setSortedData([...data]);
			return;
		}

		const column = columns.find((col) => col.key === sortState.key);
		if (!column) {
			setSortedData([...data]);
			return;
		}

		const sorted = [...data].sort((a, b) => {
			// Extract values
			let valueA: any;
			let valueB: any;

			if (column.sortValue) {
				valueA = column.sortValue(a);
				valueB = column.sortValue(b);
			} else {
				valueA = a[column.key];
				valueB = b[column.key];
			}

			// Handle null/undefined
			if (valueA == null && valueB == null) return 0;
			if (valueA == null) return 1;
			if (valueB == null) return -1;

			// Convert to strings for comparison
			const strA = String(valueA);
			const strB = String(valueB);

			// Check if values are numeric
			const numA = Number(strA);
			const numB = Number(strB);
			const isNumeric =
				!isNaN(numA) && !isNaN(numB) && isFinite(numA) && isFinite(numB);

			let comparison = 0;

			if (isNumeric) {
				// Numeric comparison
				comparison = numA - numB;
			} else {
				// String comparison with locale awareness
				comparison = strA.localeCompare(strB);
			}

			// Apply sort direction
			return sortState.direction === "descending" ? -comparison : comparison;
		});

		setSortedData(sorted);
	}, [data, sortState, columns]);

	// Handle sort button click
	const handleSort = (columnKey: string) => {
		const column = columns.find((col) => col.key === columnKey);
		if (!column || column.sortable === false) return;

		// Calculate new direction
		let newDirection: SortDirection;
		if (sortState.key === columnKey) {
			// Cycling through states for the same column
			if (
				sortState.direction === "none" ||
				sortState.direction === "descending"
			) {
				newDirection = "ascending";
			} else {
				newDirection = "descending";
			}
		} else {
			// Different column, start with ascending
			newDirection = "ascending";
		}

		setSortState({ key: columnKey, direction: newDirection });

		// Announce to screen readers
		if (
			statusRef.current &&
			(newDirection === "ascending" || newDirection === "descending")
		) {
			const directionText =
				newDirection === "ascending" ? "ascending" : "descending";
			statusRef.current.textContent = `Sort by ${column.title} ${directionText}`;
		}

		// Callback
		if (
			onSortChange &&
			(newDirection === "ascending" || newDirection === "descending")
		) {
			onSortChange(columnKey, newDirection);
		}
	};

	// Build table head with sortable buttons
	const buildHead = () => {
		return columns.map((column) => {
			const isSortable = column.sortable !== false;
			const isActive =
				sortState.key === column.key && sortState.direction !== "none";
			const direction = isActive ? sortState.direction : "none";

			if (isSortable) {
				// Create button element
				const icon =
					direction === "ascending"
						? icons.ascending
						: direction === "descending"
							? icons.descending
							: icons.sortable;

				const buttonNode = (
					<button
						type="button"
						className="nhsuk-sortable-table__button"
						onClick={() => handleSort(column.key)}
						data-column-key={column.key}
						aria-label={`${column.title}, ${
							direction === "ascending"
								? "sorted ascending"
								: direction === "descending"
									? "sorted descending"
									: "not sorted, activate to sort ascending"
						}`}
					>
						<span className="nhsuk-sortable-table__button-text" aria-hidden="true">
							{column.title}
						</span>
						<span
							className="nhsuk-sortable-table__icon-wrapper"
							aria-hidden="true"
							dangerouslySetInnerHTML={{ __html: icon }}
						/>
					</button>
				);

				return {
					node: buttonNode,
					format: column.format,
					classes: column.headerClasses,
					attributes: {
						"aria-sort": direction,
					},
				};
			}

			return {
				text: column.title,
				format: column.format,
				classes: column.headerClasses,
			};
		});
	};

	// Build table rows
	const buildRows = () => {
		return sortedData.map((row) => {
			return columns.map((column) => {
				const value = row[column.key];
				return {
					text: value != null ? String(value) : "",
					format: column.format,
					classes: column.cellClasses,
				};
			});
		});
	};

	// Enhance caption with assistive text
	const sortableCount = columns.filter((col) => col.sortable !== false).length;
	const captionSuffix =
		sortableCount > 0 ? ", column headers with buttons are sortable" : "";
	const enhancedCaption = caption ? `${caption}${captionSuffix}` : undefined;

	return (
		<div className="nhsuk-sortable-table-container">
			<Table
				{...tableProps}
				caption={enhancedCaption}
				head={buildHead()}
				rows={buildRows()}
			/>

			{/* ARIA live region for announcements */}
			<div
				ref={statusRef}
				className="nhsuk-sortable-table__status nhsuk-u-visually-hidden"
				aria-live="polite"
				aria-atomic="true"
				role="status"
			/>
		</div>
	);
};

export default SimpleSortableTable;
