/**
 * GroupableDataGrid Component
 *
 * Unified table component supporting:
 * - Flat mode: Standard data table
 * - Grouped mode: Multi-level row grouping with aggregations
 * - Tree mode: Hierarchical parent-child relationships
 * - Pivot mode: Cross-tabulation (future)
 *
 * Built on D3 hierarchy for consistent data visualization patterns
 */

import React, { useMemo, useCallback, useRef, useEffect } from "react";
import classNames from "classnames";
import {
	GroupableDataGridProps,
	FlattenedNode,
} from "./GroupableDataGrid.types";

import { HierarchyDataManager } from "./utils/HierarchyDataManager";
import { useGroupExpansion } from "./hooks/useGroupExpansion";
import { useTreeNavigation } from "./hooks/useTreeNavigation";
import { enhanceDataWithCalculatedFields } from "./utils/aggregations";
import { GroupHeader } from "./components/GroupHeader";
import { TreeNode } from "./components/TreeNode";
import { ColumnDefinition } from "../SortableDataTable/AriaDataGridTypes";
import { Button } from "../Button";
import "./GroupableDataGrid.scss";

/**
 * Chevron icon for sorting indicators (matches expander icon style)
 */
const ChevronUpIcon: React.FC = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M12 10L8 6L4 10"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ChevronDownIcon: React.FC = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M4 6L8 10L12 6"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const SortableIcon: React.FC = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M12 6L8 2L4 6"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M4 10L8 14L12 10"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

/**
 * Render a regular data row (flat mode or grouped/tree leaf nodes)
 */
function renderDataRow<T>(
	node: FlattenedNode<T>,
	columns: ColumnDefinition[],
	rowIndex: number,
	isFocused: boolean,
	isSelected: boolean,
	onKeyDown?: (event: React.KeyboardEvent) => void,
	onClick?: (event: React.MouseEvent) => void
): React.ReactNode {
	if (!node.data) return null;

	return (
		<tr
			key={node.id}
			className={classNames("groupable-datagrid__data-row", {
				"groupable-datagrid__data-row--focused": isFocused,
				"groupable-datagrid__data-row--selected": isSelected,
			})}
			role="row"
			aria-selected={isSelected}
			tabIndex={isFocused ? 0 : -1}
			onKeyDown={onKeyDown}
			onClick={onClick}
			data-row-index={rowIndex}
			data-node-id={node.id}
			style={{ cursor: onClick ? "pointer" : undefined }}
		>
			{columns.map((column) => {
				const value = (node.data as any)[column.key];
				const cellContent = column.customRenderer
					? column.customRenderer(value, node.data)
					: column.render
						? column.render(node.data)
						: value !== null && value !== undefined
							? String(value)
							: "—";

				// Wrap content in a div when maxWidth is specified for proper truncation
				const wrappedContent = column.maxWidth ? (
					<div
						style={{
							maxWidth: column.maxWidth,
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						}}
						title={typeof cellContent === 'string' ? cellContent : undefined}
					>
						{cellContent}
					</div>
				) : cellContent;

				return (
					<td
						key={column.key}
						className="groupable-datagrid__data-cell"
						role="gridcell"
						style={{
							width: column.width,
							minWidth: column.minWidth,
							maxWidth: column.maxWidth,
							textAlign: column.align,
						}}
					>
						{wrappedContent}
					</td>
				);
			})}
		</tr>
	);
}

/**
 * GroupableDataGrid Component
 */
export const GroupableDataGrid = <T extends any = any>({
	mode,
	data,
	columns,
	groupConfig,
	treeConfig,
	// pivotConfig, // Future use
	calculatedFields = [],
	initialExpanded,
	expandedIds: controlledExpandedIds,
	onExpansionChange,
	// enableVirtualization = false, // Future use
	// virtualizationConfig, // Future use
	// onDataChange, // Future use
	// enableInlineEditing = false, // Future use
	// onCellEditStart, // Future use
	// onCellEditComplete, // Future use
	selectedRow,
	onGlobalRowSelectionChange,
	onRowClick,
	sortConfig,
	onSortChange,
	enableMultiSort = false,
	showControls = true,
	controlsRenderer,
	isLoading = false,
	error = null,
	ariaLabel,
	ariaDescription,
	className,
	"data-testid": testId,
	mobileDisplay = "auto",
	mobileBreakpoint = 768,
}: GroupableDataGridProps<T>): React.ReactElement => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = React.useState(false);

	// Detect mobile viewport
	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < mobileBreakpoint);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, [mobileBreakpoint]);

	// Determine if we should show cards
	const showCards =
		mobileDisplay === "cards" || (mobileDisplay === "auto" && isMobile);
	const showScroll =
		mobileDisplay === "scroll" || (mobileDisplay === "auto" && !isMobile);

	// Sorting logic
	const sortedData = useMemo(() => {
		if (!sortConfig || sortConfig.length === 0) return data;

		const sorted = [...data];

		// Apply sorting (last to first for multi-column sort)
		for (let i = sortConfig.length - 1; i >= 0; i--) {
			const config = sortConfig[i];
			const column = columns.find((c) => c.key === config.key);

			sorted.sort((a, b) => {
				let aVal = (a as any)[config.key];
				let bVal = (b as any)[config.key];

				// Use column render function if available for comparison
				if (column?.render) {
					aVal = column.render(a);
					bVal = column.render(b);
				}

				// Handle null/undefined
				if (aVal == null && bVal == null) return 0;
				if (aVal == null) return 1;
				if (bVal == null) return -1;

				// Numeric comparison
				if (typeof aVal === "number" && typeof bVal === "number") {
					return config.direction === "asc" ? aVal - bVal : bVal - aVal;
				}

				// String comparison
				const aStr = String(aVal);
				const bStr = String(bVal);
				const comparison = aStr.localeCompare(bStr);
				return config.direction === "asc" ? comparison : -comparison;
			});
		}

		return sorted;
	}, [data, sortConfig, columns]);

	// Handle column header click for sorting
	const handleSort = useCallback(
		(columnKey: string) => {
			if (!onSortChange) return;

			const currentSort = sortConfig?.find((s) => s.key === columnKey);

			if (enableMultiSort) {
				// Multi-column sort: cycle through asc -> desc -> remove
				let newSortConfig = [...(sortConfig || [])];

				if (!currentSort) {
					// Add new sort
					newSortConfig.push({ key: columnKey, direction: "asc" });
				} else if (currentSort.direction === "asc") {
					// Change to desc
					newSortConfig = newSortConfig.map((s) =>
						s.key === columnKey ? { ...s, direction: "desc" as const } : s
					);
				} else {
					// Remove this sort
					newSortConfig = newSortConfig.filter((s) => s.key !== columnKey);
				}

				onSortChange(newSortConfig);
			} else {
				// Single-column sort: cycle through asc -> desc -> none
				if (!currentSort) {
					onSortChange([{ key: columnKey, direction: "asc" }]);
				} else if (currentSort.direction === "asc") {
					onSortChange([{ key: columnKey, direction: "desc" }]);
				} else {
					// Remove sort (back to unsorted)
					onSortChange([]);
				}
			}
		},
		[sortConfig, onSortChange, enableMultiSort]
	);

	// Handle row click for selection
	const handleRowClick = useCallback(
		(rowData: T, event: React.MouseEvent) => {
			if (onRowClick) {
				onRowClick(rowData, event);
			}

			if (onGlobalRowSelectionChange) {
				// Toggle selection: if already selected, deselect; otherwise select
				const isAlreadySelected = selectedRow === rowData;
				onGlobalRowSelectionChange(isAlreadySelected ? null : rowData);
			}
		},
		[onRowClick, onGlobalRowSelectionChange, selectedRow]
	);

	// Step 1: Enhance data with calculated fields
	const enhancedData = useMemo(() => {
		const sourceData = sortedData; // Use sorted data
		if (calculatedFields.length === 0) return sourceData;
		return enhanceDataWithCalculatedFields(sourceData, calculatedFields);
	}, [sortedData, calculatedFields]);

	// Step 2: Create hierarchy manager based on mode
	const hierarchyManager = useMemo(() => {
		if (mode === "flat" || mode === "pivot") {
			return null; // Flat mode doesn't need hierarchy
		}

		if (mode === "grouped") {
			if (!groupConfig) {
				console.warn("GroupableDataGrid: grouped mode requires groupConfig");
				return null;
			}
			return new HierarchyDataManager(enhancedData, "grouped", groupConfig);
		}

		if (mode === "tree") {
			if (!treeConfig) {
				console.warn("GroupableDataGrid: tree mode requires treeConfig");
				return null;
			}
			return new HierarchyDataManager(enhancedData, "tree", treeConfig);
		}

		return null;
	}, [mode, enhancedData, groupConfig, treeConfig]);

	// Step 3: Expansion state management
	const expansion = useGroupExpansion({
		initialExpanded,
		expandedIds: controlledExpandedIds,
		onExpansionChange,
		hierarchyManager: hierarchyManager || undefined,
		maxAutoExpandDepth:
			groupConfig?.maxAutoExpandDepth || treeConfig?.maxAutoExpandDepth,
	});

	// Step 4: Get flattened nodes for rendering
	const flattenedNodes = useMemo(() => {
		if (!hierarchyManager) {
			// Flat mode - create simple flattened nodes
			return enhancedData.map((item, index) => ({
				id: `flat-${index}`,
				type: "item" as const,
				level: 0,
				isExpandable: false,
				isExpanded: false,
				data: item,
				path: [`flat-${index}`],
			}));
		}

		return hierarchyManager.getFlattenedNodes(expansion.expandedIds);
	}, [hierarchyManager, expansion.expandedIds, enhancedData]);

	// Step 5: Tree navigation (keyboard)
	const navigation = useTreeNavigation({
		flattenedNodes,
		expansionState: expansion,
		hierarchyManager: hierarchyManager!,
		columnCount: columns.length,
		enableColumnNavigation: mode === "tree",
	});

	// Step 5.5: Programmatically focus the DOM element when focusedNodeId changes
	useEffect(() => {
		if (navigation.focusedNodeId && containerRef.current) {
			// Find the row element by data-node-id
			const focusedRow = containerRef.current.querySelector<HTMLElement>(
				`[data-node-id="${navigation.focusedNodeId}"]`
			);

			if (focusedRow && document.activeElement !== focusedRow) {
				// Blur any currently focused element first
				if (
					document.activeElement instanceof HTMLElement &&
					document.activeElement !== document.body &&
					containerRef.current.contains(document.activeElement)
				) {
					document.activeElement.blur();
				}

				// Focus the new row
				focusedRow.focus();
			}
		}
	}, [navigation.focusedNodeId]);

	// Step 6: Render functions
	const renderNode = useCallback(
		(node: FlattenedNode<T>, index: number): React.ReactNode => {
			const isFocused = navigation.focusedNodeId === node.id;

			if (node.type === "group") {
				// Group header row
				if (!hierarchyManager || !groupConfig) return null;

				const hierarchyNode = hierarchyManager.findNode(node.id);
				if (!hierarchyNode) return null;

				const context = {
					node: {
						id: node.id,
						key: node.groupMetadata!.key,
						label: node.groupMetadata!.label,
						level: node.level,
						items: hierarchyNode.data.items || [],
						aggregations: node.groupMetadata!.aggregations,
						totalCount: node.groupMetadata!.itemCount,
					},
					level: node.level,
					isExpanded: node.isExpanded,
					toggleExpansion: () => expansion.toggle(node.id),
					aggregations: node.groupMetadata!.aggregations,
					totalCount: node.groupMetadata!.itemCount,
					childCount: hierarchyNode.children?.length || 0,
				};

				const levelConfig = groupConfig.levels[node.level];
				const customRenderer = levelConfig?.headerRenderer;

				return (
					<GroupHeader
						key={node.id}
						context={context}
						columnCount={columns.length}
						customRenderer={customRenderer}
						isFocused={isFocused}
						onKeyDown={navigation.handleKeyDown}
						tabIndex={isFocused ? 0 : -1}
					/>
				);
			}

			if (node.type === "tree-node") {
				// Tree node row
				if (!hierarchyManager || !treeConfig) return null;

				const hierarchyNode = hierarchyManager.findNode(node.id);
				if (!hierarchyNode) return null;

				const context = {
					node: {
						id: node.id,
						data: node.data!,
						depth: node.level,
						children: hierarchyNode.children?.map((c) => ({
							id: c.data.id,
							data: c.data.data!,
							depth: c.depth,
						})),
						aggregations: hierarchyNode.data.aggregations,
					},
					depth: node.level,
					isExpanded: node.isExpanded,
					toggleExpansion: () => expansion.toggle(node.id),
					hasChildren: node.isExpandable,
					aggregations: hierarchyNode.data.aggregations,
					path: node.path.map((id) => {
						const n = hierarchyManager.findNode(id);
						return n
							? { id, data: n.data.data!, depth: n.depth }
							: { id, data: {} as T, depth: 0 };
					}),
				};

				const customRenderer = treeConfig.nodeRenderer;

				return (
					<TreeNode
						key={node.id}
						context={context}
						columns={columns}
						customRenderer={customRenderer}
						isFocused={isFocused}
						onKeyDown={navigation.handleKeyDown}
						tabIndex={isFocused ? 0 : -1}
					/>
				);
			}

			// Regular item row
			const isSelected = selectedRow === node.data;
			const onClick =
				onGlobalRowSelectionChange || onRowClick
					? (event: React.MouseEvent) => handleRowClick(node.data!, event)
					: undefined;

			return renderDataRow(
				node,
				columns,
				index,
				isFocused,
				isSelected,
				navigation.handleKeyDown,
				onClick
			);
		},
		[
			navigation,
			hierarchyManager,
			groupConfig,
			treeConfig,
			columns,
			expansion,
			selectedRow,
			handleRowClick,
			onGlobalRowSelectionChange,
			onRowClick,
		]
	);

	// Step 7: Render controls
	const renderControls = useCallback(() => {
		if (!showControls) return null;

		if (controlsRenderer) {
			const context = {
				mode,
				expansion,
				totalItems: enhancedData.length,
				visibleItems: flattenedNodes.length,
				groupLevels: groupConfig?.levels,
			};
			return (
				<div className="groupable-datagrid__controls">
					{controlsRenderer(context)}
				</div>
			);
		}

		// Default controls
		if (mode === "flat") return null;

		return (
			<div className="groupable-datagrid__controls">
				<div className="groupable-datagrid__controls-left">
					<Button variant="secondary" onClick={() => expansion.expandAll()}>
						Expand All
					</Button>
					<Button variant="secondary" onClick={() => expansion.collapseAll()}>
						Collapse All
					</Button>
				</div>
				<div className="groupable-datagrid__controls-right">
					<span className="groupable-datagrid__controls-info">
						Showing {flattenedNodes.filter((n) => n.type === "item").length} of{" "}
						{enhancedData.length} items
					</span>
				</div>
			</div>
		);
	}, [
		showControls,
		controlsRenderer,
		mode,
		expansion,
		enhancedData.length,
		flattenedNodes.length,
		groupConfig,
	]);

	// Step 7b: Render mobile card view
	const renderCard = useCallback(
		(node: FlattenedNode<T>): React.ReactNode => {
			if (node.type === "group") {
				const level = node.level || 0;
				const isExpanded = node.isExpanded;

				return (
					<div
						key={node.id}
						className={classNames(
							"groupable-datagrid__card",
							"groupable-datagrid__card--group",
							`groupable-datagrid__card--level-${level}`,
							{
								"groupable-datagrid__card--expanded": isExpanded,
							}
						)}
						//style={{ marginLeft: `${level * 16}px` }}
						onClick={() => expansion.toggle(node.id)}
					>
						<div className="groupable-datagrid__card-group-header">
							<button
								className="groupable-datagrid__card-group-toggle"
								aria-label={isExpanded ? "Collapse group" : "Expand group"}
								aria-expanded={isExpanded}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className={classNames(
										"groupable-datagrid__card-group-chevron",
										{
											"groupable-datagrid__card-group-chevron--expanded":
												isExpanded,
										}
									)}
								>
									<path
										d="M6 8L10 12L14 8"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
							<span className="groupable-datagrid__card-group-label">
								{node.groupMetadata?.label || "Group"}
							</span>
							{node.groupMetadata?.itemCount !== undefined && (
								<span className="groupable-datagrid__card-group-count">
									({node.groupMetadata.itemCount})
								</span>
							)}
						</div>
					</div>
				);
			}

		if (node.type === "item" && node.data) {
			const isSelected = selectedRow === node.data;
			
			// Find the primary field (metricName, name, or first column)
			const primaryField = columns.find(c => 
				c.key === 'metricName' || c.key === 'name' || c.key === 'title'
			) || columns[0];				const otherFields = columns.filter(c => c.key !== primaryField.key);

				return (
					<div
						key={node.id}
						className={classNames("groupable-datagrid__card", {
							"groupable-datagrid__card--selected": isSelected,
						})}
						//style={{ marginLeft: `${level * 16}px` }}
						onClick={(e) => {
							if (onGlobalRowSelectionChange) {
								onGlobalRowSelectionChange(
									isSelected ? null : (node.data as T)
								);
							}
							if (onRowClick) {
								onRowClick(node.data as T, e);
							}
						}}
					>
						{/* Primary field - prominent at top */}
						{(() => {
							const value = (node.data as any)[primaryField.key];
							const cellContent = primaryField.customRenderer
								? primaryField.customRenderer(value, node.data)
								: primaryField.render
									? primaryField.render(node.data)
									: value !== null && value !== undefined
										? String(value)
										: "—";

							return (
								<div className="groupable-datagrid__card-title">
									{cellContent}
								</div>
							);
						})()}
						
						{/* Other fields */}
						{otherFields.map((column) => {
							const value = (node.data as any)[column.key];
							const cellContent = column.customRenderer
								? column.customRenderer(value, node.data)
								: column.render
									? column.render(node.data)
									: value !== null && value !== undefined
										? String(value)
										: "—";

							return (
								<div
									key={column.key}
									className="groupable-datagrid__card-field"
								>
									<div className="groupable-datagrid__card-label">
										{column.label}
									</div>
									<div className="groupable-datagrid__card-value">
										{cellContent}
									</div>
								</div>
							);
						})}
					</div>
				);
			}

			return null;
		},
		[
			columns,
			expansion,
			groupConfig,
			selectedRow,
			onGlobalRowSelectionChange,
			onRowClick,
			hierarchyManager,
		]
	);

	// Step 8: Loading and error states
	if (isLoading) {
		return (
			<div
				className={classNames(
					"groupable-datagrid",
					"groupable-datagrid--loading",
					className
				)}
			>
				<p>Loading data...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div
				className={classNames(
					"groupable-datagrid",
					"groupable-datagrid--error",
					className
				)}
			>
				<p>Error: {error}</p>
			</div>
		);
	}

	// Step 9: Empty state
	if (enhancedData.length === 0) {
		return (
			<div className={classNames("groupable-datagrid", className)}>
				<div className="groupable-datagrid__empty">No data available</div>
			</div>
		);
	}

	// Step 10: Main render
	return (
		<div
			ref={containerRef}
			className={classNames("groupable-datagrid", className, {
				"groupable-datagrid--mobile-cards": showCards,
				"groupable-datagrid--mobile-scroll": showScroll,
			})}
			data-testid={testId}
			data-mode={mode}
		>
			{renderControls()}

			{/* Mobile card view */}
			{showCards && (
				<div className="groupable-datagrid__cards">
					{flattenedNodes.map((node) => renderCard(node))}
				</div>
			)}

			{/* Desktop/tablet table view or horizontal scroll */}
			{!showCards && (
				<div className="groupable-datagrid__table-wrapper">
					<table
						className="groupable-datagrid__treegrid"
						role={mode === "flat" ? "table" : "treegrid"}
						aria-label={ariaLabel}
						aria-describedby={ariaDescription}
					>
						<thead>
							<tr className="groupable-datagrid__header-row" role="row">
								{columns.map((column) => {
									const columnSort = sortConfig?.find(
										(s) => s.key === column.key
									);
									const isSortable = column.sortable !== false && onSortChange;
									const sortIndex = sortConfig?.findIndex(
										(s) => s.key === column.key
									);

								return (
									<th
										key={column.key}
										role="columnheader"
										aria-sort={
											columnSort
												? columnSort.direction === "asc"
													? "ascending"
													: "descending"
												: undefined
										}
										className={classNames("groupable-datagrid__header-cell", {
											"groupable-datagrid__header-cell--sortable": isSortable,
											"groupable-datagrid__header-cell--sorted": !!columnSort,
										})}
										onClick={
											isSortable ? () => handleSort(column.key) : undefined
										}
										style={{ 
											cursor: isSortable ? "pointer" : undefined,
											width: column.width,
											minWidth: column.minWidth,
											maxWidth: column.maxWidth,
											textAlign: column.align,
										}}
									>
											<div className="groupable-datagrid__header-content">
												<span>{column.label}</span>
												{isSortable && (
													<span className="groupable-datagrid__sort-indicator">
														{!columnSort && <SortableIcon />}
														{columnSort?.direction === "asc" && (
															<ChevronUpIcon />
														)}
														{columnSort?.direction === "desc" && (
															<ChevronDownIcon />
														)}
														{enableMultiSort &&
															columnSort &&
															sortIndex !== undefined &&
															sortIndex >= 0 && (
																<span className="groupable-datagrid__sort-order">
																	{sortIndex + 1}
																</span>
															)}
													</span>
												)}
											</div>
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody role="rowgroup">
							{flattenedNodes.map((node, index) => renderNode(node, index))}
						</tbody>
						{/* Summary footer (if global aggregations exist) */}
						{hierarchyManager && groupConfig?.showSummaryFooter && (
							<tfoot>
								<tr className="groupable-datagrid__summary-row" role="row">
									<td colSpan={columns.length}>
										<strong>Total:</strong> {hierarchyManager.getTotalCount()}{" "}
										items
									</td>
								</tr>
							</tfoot>
						)}
					</table>
				</div>
			)}
		</div>
	);
};

GroupableDataGrid.displayName = "GroupableDataGrid";

export default GroupableDataGrid;
