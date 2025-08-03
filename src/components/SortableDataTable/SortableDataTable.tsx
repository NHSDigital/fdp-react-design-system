import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import jsonData from './patients_with_ews.json';
import { PatientData, SortConfig, tabColumns } from './patient';
import { booleanIcon } from './icons';
import { tabs, type FocusArea } from './constants';
import { formatHeader } from './utils';
import { Tabs, TabsHandle } from '../Tabs/Tabs';
import classNames from 'classnames';
import './SortableDataTable.scss';

type PatientList = PatientData[];

// Navigation modes following react-aria patterns
type NavigationMode = 'browse' | 'navigate';

const SortableDataTable: React.FC = () => {
	const [data] = useState<PatientList>(jsonData as unknown as PatientList);
	const [sortConfig, setSortConfig] = useState<SortConfig[]>([]);
	const [activeTab, setActiveTab] = useState<string>('overview');
	const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
	const [focusedRowIndex, setFocusedRowIndex] = useState<number>(0);
	const [focusedColumnIndex, setFocusedColumnIndex] = useState<number>(0);
	const [focusArea, setFocusArea] = useState<FocusArea>('tabs');
	const [navigationMode, setNavigationMode] = useState<NavigationMode>('browse');
	
	const tableRef = useRef<HTMLTableElement>(null);
	const tbodyRef = useRef<HTMLTableSectionElement>(null);
	const headerRowRef = useRef<HTMLTableRowElement>(null);
	const tabsRef = useRef<TabsHandle>(null);

	const filteredHeaders = tabColumns[activeTab] || [];
	
	// Derived values for keyboard navigation
	const columnCount = filteredHeaders.length;

	// Initialize focus 
	useEffect(() => {
		if (focusedColumnIndex === -1) {
			setFocusedColumnIndex(0);
		}
	}, [focusedColumnIndex]);

	// Ensure column index stays valid when switching tabs
	useEffect(() => {
		const columnCount = filteredHeaders.length;
		if (focusedColumnIndex >= columnCount && columnCount > 0) {
			setFocusedColumnIndex(columnCount - 1);
		}
	}, [activeTab, filteredHeaders.length, focusedColumnIndex]);

	// Sort data based on the current sort configuration
	const sortedData = useMemo(() => {
		if (sortConfig.length === 0) return data;

		const sorted = [...data];
		sorted.sort((a, b) => {
			for (const { key, direction } of sortConfig) {
				const aValue = a[key] ?? '';
				const bValue = b[key] ?? '';
				if (aValue < bValue) return direction === 'asc' ? -1 : 1;
				if (aValue > bValue) return direction === 'asc' ? 1 : -1;
			}
			return 0;
		});
		return sorted;
	}, [data, sortConfig]);

	// Helper function to parse cell values
	const parseValue = (value: any) => {
		if (value === null || value === undefined) return '';
		if (typeof value === 'boolean') return value;
		if (typeof value === 'number') return value;
		if (typeof value === 'string') {
			const trimmed = value.trim();
			if (trimmed === '') return '';
			
			// Only try to parse as number if it's actually numeric
			const num = Number(trimmed);
			if (!isNaN(num) && /^\d+(\.\d+)?$/.test(trimmed)) return num;
			
			// Only try to parse as date if it's in a proper ISO date format
			if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(trimmed)) {
				const date = Date.parse(trimmed);
				if (!isNaN(date)) return new Date(date);
			}
			
			return trimmed;
		}
		return String(value);
	};

	// Toggle the sort configuration for a column
	const toggleSortColumn = (key: keyof PatientData) => {
		setSortConfig(prevConfig => {
			const existingConfigIndex = prevConfig.findIndex(config => config.key === key);
			
			if (existingConfigIndex !== -1) {
				const existingConfig = prevConfig[existingConfigIndex];
				if (existingConfig.direction === 'desc') {
					return prevConfig.map((config, index) =>
						index === existingConfigIndex
							? { ...config, direction: 'asc' as const }
							: config
					);
				} else {
					return prevConfig.filter((_, index) => index !== existingConfigIndex);
				}
			} else {
				return [...prevConfig, { key, direction: 'desc' as const }];
			}
		});
	};

	// Render the boolean (tick / cross) icons
	const renderBooleanIcon = (value: boolean) => {
		const iconEntry = booleanIcon.find(icon => icon.value === value);
		return iconEntry ? iconEntry.icon : null;
	};

	// Focus a specific cell and scroll it into view
	const focusCell = useCallback((rowIndex: number, colIndex: number) => {
		setTimeout(() => {
			const targetCell = tableRef.current?.querySelector(
				`tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
			);
			if (targetCell) {
				(targetCell as HTMLElement).focus();
				
				// Scroll the cell into view smoothly
				targetCell.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'nearest'
				});
			}
		}, 0);
	}, []);

	// Focus a specific header and scroll it into view
	const focusHeader = useCallback((colIndex: number) => {
		setTimeout(() => {
			const headerCell = tableRef.current?.querySelector(`th:nth-child(${colIndex + 1})`);
			if (headerCell) {
				(headerCell as HTMLElement).focus();
				
				// Scroll the header into view smoothly
				headerCell.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'nearest'
				});
			}
		}, 0);
	}, []);

	// React-aria style hierarchical keyboard navigation
	const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
		const { key } = event;
		console.log('Key pressed:', key, 'Focus area:', focusArea, 'Navigation mode:', navigationMode);

		switch (key) {
			case 'Enter':
				event.preventDefault();
				console.log('Enter pressed, focus area:', focusArea, 'navigation mode:', navigationMode);
				
				if (focusArea === 'tabs') {
					// Enter from tabs -> go to table headers (browse mode)
					console.log('Moving from tabs to header browse mode');
					setFocusArea('headers');
					setNavigationMode('browse');
					setFocusedColumnIndex(0);
					// Don't auto-focus yet, let user navigate with arrow keys first
				} else if (focusArea === 'headers' && navigationMode === 'browse') {
					// Enter from header browse -> navigate within headers
					console.log('Entering header navigation mode');
					setNavigationMode('navigate');
					focusHeader(focusedColumnIndex);
				} else if (focusArea === 'headers' && navigationMode === 'navigate') {
					// Enter on a header -> sort the column
					console.log('Sorting column');
					const currentColumn = filteredHeaders[focusedColumnIndex];
					if (currentColumn) {
						toggleSortColumn(currentColumn);
					}
				} else if (focusArea === 'cells' && navigationMode === 'browse') {
					// Enter from row browse -> navigate within that row
					console.log('Entering row navigation mode');
					setNavigationMode('navigate');
					focusCell(focusedRowIndex, 0);
					setFocusedColumnIndex(0);
				} else if (focusArea === 'cells' && navigationMode === 'navigate') {
					// Enter on a cell -> select the row
					console.log('Selecting row');
					setSelectedRowIndex(focusedRowIndex);
				}
				break;
				
			case 'Escape':
				event.preventDefault();
				
				if (focusArea === 'headers' && navigationMode === 'navigate') {
					// Escape from header navigation -> header browse
					setNavigationMode('browse');
					focusHeader(focusedColumnIndex);
				} else if (focusArea === 'headers' && navigationMode === 'browse') {
					// Escape from header browse -> tabs
					setFocusArea('tabs');
					setNavigationMode('browse');
					tabsRef.current?.focusTab(activeTab);
				} else if (focusArea === 'cells' && navigationMode === 'navigate') {
					// Escape from cell navigation -> row browse
					setNavigationMode('browse');
					focusCell(focusedRowIndex, 0);
					setFocusedColumnIndex(0);
				} else if (focusArea === 'cells' && navigationMode === 'browse') {
					// Escape from row browse -> headers
					setFocusArea('headers');
					setNavigationMode('browse');
					setFocusedRowIndex(-1);
					setTimeout(() => focusHeader(focusedColumnIndex), 0);
				}
				break;
				
			case 'ArrowLeft':
				event.preventDefault();
				if (navigationMode === 'navigate') {
					if (focusArea === 'headers') {
						const newIndex = Math.max(0, focusedColumnIndex - 1);
						setFocusedColumnIndex(newIndex);
						focusHeader(newIndex);
					} else if (focusArea === 'cells') {
						const newIndex = Math.max(0, focusedColumnIndex - 1);
						setFocusedColumnIndex(newIndex);
						focusCell(focusedRowIndex, newIndex);
					}
				} else if (navigationMode === 'browse' && focusArea === 'headers') {
					// Browse mode header navigation
					const newIndex = Math.max(0, focusedColumnIndex - 1);
					setFocusedColumnIndex(newIndex);
					focusHeader(newIndex);
				}
				break;
				
			case 'ArrowRight':
				event.preventDefault();
				if (navigationMode === 'navigate') {
					if (focusArea === 'headers') {
						const newIndex = Math.min(columnCount - 1, focusedColumnIndex + 1);
						setFocusedColumnIndex(newIndex);
						focusHeader(newIndex);
					} else if (focusArea === 'cells') {
						const newIndex = Math.min(columnCount - 1, focusedColumnIndex + 1);
						setFocusedColumnIndex(newIndex);
						focusCell(focusedRowIndex, newIndex);
					}
				} else if (navigationMode === 'browse' && focusArea === 'headers') {
					// Browse mode header navigation
					const newIndex = Math.min(columnCount - 1, focusedColumnIndex + 1);
					setFocusedColumnIndex(newIndex);
					focusHeader(newIndex);
				}
				break;
				
			case 'ArrowUp':
				event.preventDefault();
				if (focusArea === 'cells') {
					if (navigationMode === 'browse') {
						// Browse mode: move to previous row
						const newIndex = Math.max(0, focusedRowIndex - 1);
						setFocusedRowIndex(newIndex);
						focusCell(newIndex, 0);
						setFocusedColumnIndex(0);
					} else if (navigationMode === 'navigate') {
						// Navigate mode: move to previous row in same column
						if (focusedRowIndex > 0) {
							const newIndex = focusedRowIndex - 1;
							setFocusedRowIndex(newIndex);
							focusCell(newIndex, focusedColumnIndex);
						}
					}
				}
				break;
				
			case 'ArrowDown':
				event.preventDefault();
				if (focusArea === 'cells') {
					const maxRowIndex = sortedData.length - 1;
					if (navigationMode === 'browse') {
						// Browse mode: move to next row
						const newIndex = Math.min(maxRowIndex, focusedRowIndex + 1);
						setFocusedRowIndex(newIndex);
						focusCell(newIndex, 0);
						setFocusedColumnIndex(0);
					} else if (navigationMode === 'navigate') {
						// Navigate mode: move to next row in same column
						if (focusedRowIndex < maxRowIndex) {
							const newIndex = focusedRowIndex + 1;
							setFocusedRowIndex(newIndex);
							focusCell(newIndex, focusedColumnIndex);
						}
					}
				} else if (focusArea === 'headers' && navigationMode === 'browse') {
					// From headers browse mode, move to first row browse mode
					console.log('Moving from headers to cells browse mode');
					setFocusArea('cells');
					setFocusedRowIndex(0);
					setFocusedColumnIndex(0);
					focusCell(0, 0);
				}
				break;
				
			case 'Tab':
				// Let default tab behavior work for moving between major areas
				if (!event.shiftKey && focusArea === 'headers' && navigationMode === 'browse') {
					// Tab from headers -> first row
					event.preventDefault();
					setFocusArea('cells');
					setFocusedRowIndex(0);
					setFocusedColumnIndex(0);
					setTimeout(() => focusCell(0, 0), 0);
				}
				break;
		}
	}, [
		focusArea, 
		navigationMode, 
		focusedColumnIndex, 
		focusedRowIndex, 
		filteredHeaders, 
		columnCount, 
		sortedData.length, 
		activeTab,
		focusCell,
		focusHeader,
		toggleSortColumn
	]);

	// Handle tab changes with proper focus management
	const handleTabChange = useCallback((tabId: string) => {
		setActiveTab(tabId);
		setNavigationMode('browse');
		setFocusArea('headers');
		// Reset focus positions when switching tabs and focus on first header
		setFocusedRowIndex(0);
		setFocusedColumnIndex(0);
		// Auto-focus the first header after tab change
		setTimeout(() => {
			focusHeader(0);
		}, 100);
	}, [focusHeader]);

	// Handle escape from tabs
	const handleTabEscape = useCallback(() => {
		setNavigationMode('browse');
		setFocusArea('tabs');
	}, []);

	// Function to render table content for a given tab
	const renderTableContent = (tabName: string) => {
		const tabHeaders = tabColumns[tabName] || [];
		
		return (
			<div 
				role="tabpanel"
				id={`${tabName}-panel`}
				aria-labelledby={`${tabName}-tab`}
				style={{ overflow: 'auto', maxHeight: '80vh', maxWidth: '100%' }}
			>
				<div
					tabIndex={focusArea === 'tabs' ? 0 : -1}
					onFocus={() => {
						// When the table container gets focus, enter header browse mode
						console.log('Table container focused, current focus area:', focusArea);
						if (focusArea === 'tabs') {
							console.log('Entering headers browse mode');
							setFocusArea('headers');
							setFocusedColumnIndex(0);
							setNavigationMode('browse');
							setTimeout(() => {
								console.log('Focusing first header');
								focusHeader(0);
							}, 0);
						}
					}}
					onKeyDown={handleKeyDown}
					style={{ 
						outline: 'none',
						padding: '0'
					}}
					data-focus-area={focusArea}
					data-navigation-mode={navigationMode}
					aria-label="Table container. Press Enter to navigate to table headers."
				>
					<table 
						ref={tableRef}
						role="grid"
						aria-label={`${tabName} patient data with ${sortedData.length} rows. Press Enter to navigate within the table, Escape to exit navigation mode.`}
						aria-rowcount={sortedData.length + 1}
						aria-colcount={tabHeaders.length}
						aria-describedby="keyboard-instructions"
						style={{ width: '100%', borderCollapse: 'collapse' }} 
						className="nhsuk-table"
					>
					<thead role="rowgroup" className={classNames('nhsuk-table__head', {
						'header-row--focused': focusArea === 'headers'
					})}>
						<tr ref={headerRowRef} role="row" aria-rowindex={1}>
							{tabHeaders.map((key, index) => {
								const isSorted = sortConfig.some(config => config.key === key);
								const sortDirection = sortConfig.find(config => config.key === key)?.direction;
								const headerLabel = formatHeader(key);
								const isHeaderFocused = focusArea === 'headers' && focusedColumnIndex === index;
								const headerClasses = classNames('sortable-header', {
									'header--focused': isHeaderFocused && navigationMode === 'browse',
									'header--navigating': isHeaderFocused && navigationMode === 'navigate'
								});
								
								return (
									<th
										role="columnheader" 
										className={headerClasses} 
										scope="col"
										aria-sort={isSorted ? (sortDirection === 'asc' ? 'ascending' : 'descending') : 'none'}
										aria-colindex={index + 1}
										key={key}
										tabIndex={
											focusArea === 'headers' && 
											((navigationMode === 'browse' && index === focusedColumnIndex) || 
											 (navigationMode === 'navigate' && focusedColumnIndex === index)) 
											? 0 : -1
										}
										onKeyDown={handleKeyDown}
										onFocus={() => {
											setFocusedColumnIndex(index);
											setFocusArea('headers');
											if (navigationMode === 'browse') {
												// In browse mode, we just track focus
											}
										}}
										onClick={() => toggleSortColumn(key)}
										aria-describedby={`${key}-sort-description`}
									>
										<div className="header-content">
											<span className="header-label">
												{headerLabel}
											</span>
											<span 
												id={`${key}-sort-description`}
												className="sr-only"
											>
												{focusArea === 'headers' && navigationMode === 'browse' 
													? `Column ${headerLabel}. Press Enter to navigate within headers using arrow keys.`
													: focusArea === 'headers' && navigationMode === 'navigate'
													? isSorted 
														? `Column ${headerLabel} is sorted in ${sortDirection === 'asc' ? 'ascending' : 'descending'} order. This is sort level ${sortConfig.findIndex(config => config.key === key) + 1} of ${sortConfig.length}. Press Enter to cycle to ${sortDirection === 'desc' ? 'ascending' : 'remove sort'}. Press Escape to return to header browse mode.`
														: `Column ${headerLabel} is not sorted. Press Enter to add ${headerLabel} sort to the current sort configuration. Press Escape to return to header browse mode.`
													: `Column ${headerLabel}. ${isSorted ? `Sorted ${sortDirection === 'asc' ? 'ascending' : 'descending'}` : 'Not sorted'}`
												}
											</span>
											{isSorted && (
												<span
													aria-hidden="true"
													className="sort-indicator"
												>
													{sortConfig.length > 1 && (
														<span className="sort-priority">
															{sortConfig.findIndex(config => config.key === key) + 1}
														</span>
													)}
													<svg
														width="12"
														height="12"
														viewBox="0 0 12 12"
														fill="currentColor"
														className="sort-arrow"
													>
														{sortDirection === 'asc' ? (
															<path d="M6 2L2 8h8L6 2z" />
														) : (
															<path d="M6 10L2 4h8L6 10z" />
														)}
													</svg>
												</span>
											)}
										</div>
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody ref={tbodyRef} role="rowgroup" className="nhsuk-table__body">
						{sortedData.map((row: any, rowIndex: number) => (
							<tr 
								key={rowIndex} 
								role="row" 
								aria-rowindex={rowIndex + 2}
								aria-selected={selectedRowIndex === rowIndex}
								className={classNames('data-row', {
									'data-row--selected': selectedRowIndex === rowIndex,
									'data-row--browse-focused': navigationMode === 'browse' && focusArea === 'cells' && focusedRowIndex === rowIndex,
									'data-row--navigate-focused': navigationMode === 'navigate' && focusArea === 'cells' && focusedRowIndex === rowIndex
								})}
								onClick={() => {
									setSelectedRowIndex(rowIndex);
								}}
							>
								{tabHeaders.map((key, colIndex) => {
									const value = row[key];
									const parsedValue = parseValue(value);
									const isFocused = navigationMode === 'navigate' && focusArea === 'cells' && focusedRowIndex === rowIndex && focusedColumnIndex === colIndex;
									const isRowFocused = navigationMode === 'browse' && focusArea === 'cells' && focusedRowIndex === rowIndex;
									
									return <td
										key={`${rowIndex}-${key}`}
										role="gridcell"
										aria-colindex={colIndex + 1}
										tabIndex={
											focusArea === 'cells' && focusedRowIndex === rowIndex && 
											((navigationMode === 'browse' && colIndex === 0) || 
											 (navigationMode === 'navigate' && focusedColumnIndex === colIndex)) 
											? 0 : -1
										}
										className={classNames('data-cell', {
											'data-cell--focused': isFocused,
											'data-cell--row-focused': isRowFocused && colIndex === 0
										})}
										onKeyDown={handleKeyDown}
										onFocus={() => {
											setFocusedRowIndex(rowIndex);
											setFocusedColumnIndex(colIndex);
											setFocusArea('cells');
										}}
									>
										{typeof value === 'boolean' ? (
											<>
												{renderBooleanIcon(value)}
												<span className="sr-only">{value ? 'Yes' : 'No'}</span>
											</>
										) : String(parsedValue ?? '')}
									</td>;
								})}
							</tr>
						))}
					</tbody>
				</table>
				</div>
			</div>
		);
	};

	// Create tab items for the Tabs component
	const tabItems = tabs.map(tab => ({
		id: tab.name,
		label: tab.name.charAt(0).toUpperCase() + tab.name.slice(1),
		content: renderTableContent(tab.name)
	}));

	return (
		<div 
			className="sortable-data-table" 
			data-focus-area={focusArea}
			data-navigation-mode={navigationMode}
			style={{ display: 'flex', flexDirection: 'column', gap: '0px', width: '100%' }}
		>
			<div className="sr-only" id="keyboard-instructions">
				Hierarchical navigation: Press Enter on a tab to enter table headers (browse mode). 
				Press Enter again to navigate within headers (use left/right arrows). 
				Press Down arrow or Tab to move to table rows (browse mode). 
				Press Enter on a row to navigate within that row (use left/right arrows). 
				Press Escape at any time to go back up the navigation hierarchy.
				Press Enter or Space when focused on a header to sort, or on a cell to select the row.
			</div>
			<Tabs
				ref={tabsRef}
				items={tabItems}
				activeTab={activeTab}
				onTabChange={handleTabChange}
				onEscape={handleTabEscape}
				autoActivate={false}
				aria-describedby="keyboard-instructions"
			/>
		</div>
	);
};
SortableDataTable.displayName = 'SortableDataTable';
export default SortableDataTable;
