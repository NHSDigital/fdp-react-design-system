import React, { useState, useMemo, useEffect, useRef } from 'react';
import jsonData from './patients_with_ews.json';
import { PatientData, SortConfig, tabColumns } from './patient';
import { bedIcon, completeIcon, transportStatusIcon, booleanIcon } from './icons';
import { tabs, tabStyles, srOnlyStyles, getEWSColor, NHS_FOCUS_COLOR, type FocusArea } from './constants';
import { formatHeader, parseDate } from './utils';
import classNames from 'classnames';
import './tabs.scss';

type PatientList = PatientData[];

const BoardRoundDataTable: React.FC = () => {

	const [data] = useState<PatientList>(jsonData as unknown as PatientList);
	const [sortConfig, setSortConfig] = useState<SortConfig[]>([]);
	const [activeTab, setActiveTab] = useState<string>('overview');
	const [selectedRow, setSelectedRow] = useState<PatientData | null>(null);
	const [selectedRowIndex, setSelectedRowIndex] = useState<number>(-1);
	const [focusedRowIndex, setFocusedRowIndex] = useState<number>(-1);
	const [focusedColumnIndex, setFocusedColumnIndex] = useState<number>(-1);
	const [focusedTabIndex, setFocusedTabIndex] = useState<number>(-1);
	const [focusArea, setFocusArea] = useState<FocusArea>('tabs');
	
	const tableRef = useRef<HTMLTableElement>(null);
	const tbodyRef = useRef<HTMLTableSectionElement>(null);
	const tabListRef = useRef<HTMLUListElement>(null);
	const headerRowRef = useRef<HTMLTableRowElement>(null);

	const filteredHeaders = tabColumns[activeTab] || [];

	// Initialize focus to first tab on mount and ensure consistency
	useEffect(() => {
		if (focusedTabIndex === -1) {
			setFocusedTabIndex(0);
		}
		if (focusedColumnIndex === -1) {
			setFocusedColumnIndex(0);
		}
	}, [focusedTabIndex, focusedColumnIndex]);

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

	// Toggle the sort configuration for a column
	const toggleSortColumn = (key: keyof PatientData) => {
		setSortConfig(prevConfig => {

			// Check if the column is already in the sort config
			const existingConfigIndex = prevConfig.findIndex(config => config.key === key);
			
			// If the column is already in the sort config, cycle through states
			if (existingConfigIndex !== -1) {

				// Column is already in sort config - cycle through states
				const existingConfig = prevConfig[existingConfigIndex];

				// If the current direction is descending, change to ascending
				if (existingConfig.direction === 'desc') {
					
					// Second click: change to ascending
					return prevConfig.map((config, index) =>
						index === existingConfigIndex
							? { ...config, direction: 'asc' as const }
							: config
					);
				} else {
					// Third click: remove column from sort (deselect)
					return prevConfig.filter((_, index) => index !== existingConfigIndex);
				}
			// Otherwise, add the column with descending sort
			} else {
				// First click: add column with descending sort
				return [...prevConfig, { key, direction: 'desc' as const }];
			}
		});
	};

	// Render the boolean (tick / cross) icons
	const renderBooleanIcon = (value: boolean) => {
		const iconEntry = booleanIcon.find(icon => icon.value === value);
		return iconEntry ? iconEntry.icon : null;
	};

	const renderBedIcon = (value: string) => {
		const iconEntry = bedIcon.find(icon => icon.value === value);
		return iconEntry ? iconEntry.icon : null;
	};

	const renderTransportIcon = (value: string) => {
		const iconEntry = transportStatusIcon.find(icon => icon.value === value);
		return iconEntry ? iconEntry.icon : null;
	};

	const renderCompleteIcon = (value: string) => {
		const iconEntry = completeIcon.find(icon => icon.value === value);
		return iconEntry ? iconEntry.icon : null;
	};

	const handleRowSelect = (row: PatientData, index: number) => {
		setSelectedRow(selectedRow !== row ? row : null);
		setSelectedRowIndex(selectedRow !== row ? index : -1);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		const rowCount = sortedData.length;
		const columnCount = filteredHeaders.length;
		const tabCount = tabs.length;

		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				if (focusArea === 'tabs') {
					// Move from tabs to headers
					setFocusArea('headers');
					// Ensure column index is valid for current tab's columns
					const validColumnIndex = Math.min(focusedTabIndex, columnCount - 1);
					setFocusedColumnIndex(Math.max(0, validColumnIndex));
					// Focus the corresponding header immediately
					requestAnimationFrame(() => {
						const headerCell = headerRowRef.current?.children[Math.max(0, validColumnIndex)] as HTMLElement;
						headerCell?.focus();
					});
				} else if (focusArea === 'headers') {
					// Move from headers to table
					setFocusArea('table');
					setFocusedRowIndex(0);
					// Keep the same column index
				} else if (focusArea === 'table') {
					// Move within table rows
					setFocusedRowIndex(prev => Math.min(prev + 1, rowCount - 1));
				}
				break;
			case 'ArrowUp':
				e.preventDefault();
				if (focusArea === 'table') {
					if (focusedRowIndex === 0) {
						// Move from table to headers
						setFocusArea('headers');
						setFocusedRowIndex(-1);
						// Focus the corresponding header immediately
						requestAnimationFrame(() => {
							const headerCell = headerRowRef.current?.children[focusedColumnIndex] as HTMLElement;
							headerCell?.focus();
						});
					} else {
						// Move within table rows
						setFocusedRowIndex(prev => Math.max(prev - 1, 0));
					}
				} else if (focusArea === 'headers') {
					// Move from headers to tabs
					setFocusArea('tabs');
					// Ensure tab index is valid for the tab count
					const validTabIndex = Math.min(focusedColumnIndex, tabCount - 1);
					setFocusedTabIndex(Math.max(0, validTabIndex));
					// Focus the corresponding tab immediately
					requestAnimationFrame(() => {
						const tab = tabListRef.current?.children[Math.max(0, validTabIndex)]?.querySelector('button');
						tab?.focus();
					});
				}
				break;
			case 'ArrowRight':
				e.preventDefault();
				if (focusArea === 'tabs') {
					const nextIndex = Math.min(focusedTabIndex + 1, tabCount - 1);
					setFocusedTabIndex(nextIndex);
					const nextTab = tabListRef.current?.children[nextIndex]?.querySelector('button');
					nextTab?.focus();
				} else if (focusArea === 'headers') {
					const nextColIndex = Math.min(focusedColumnIndex + 1, columnCount - 1);
					setFocusedColumnIndex(nextColIndex);
					const nextHeader = headerRowRef.current?.children[nextColIndex] as HTMLElement;
					nextHeader?.focus();
				} else if (focusArea === 'table') {
					setFocusedColumnIndex(prev => Math.min(prev + 1, columnCount - 1));
				}
				break;
			case 'ArrowLeft':
				e.preventDefault();
				if (focusArea === 'tabs') {
					const prevIndex = Math.max(focusedTabIndex - 1, 0);
					setFocusedTabIndex(prevIndex);
					const prevTab = tabListRef.current?.children[prevIndex]?.querySelector('button');
					prevTab?.focus();
				} else if (focusArea === 'headers') {
					const prevColIndex = Math.max(focusedColumnIndex - 1, 0);
					setFocusedColumnIndex(prevColIndex);
					const prevHeader = headerRowRef.current?.children[prevColIndex] as HTMLElement;
					prevHeader?.focus();
				} else if (focusArea === 'table') {
					setFocusedColumnIndex(prev => Math.max(prev - 1, 0));
				}
				break;
			case 'Enter':
				// Handle Enter key
				e.preventDefault();
				if (focusArea === 'tabs') {
					const selectedTab = tabs[focusedTabIndex];
					if (selectedTab) {
						setActiveTab(selectedTab.name);
					}
				} else if (focusArea === 'headers') {
					const selectedHeader = filteredHeaders[focusedColumnIndex];
					if (selectedHeader) {
						toggleSortColumn(selectedHeader);
					}
				} else if (focusArea === 'table' && focusedRowIndex >= 0) {
					handleRowSelect(sortedData[focusedRowIndex], focusedRowIndex);
				}
				break;
			case ' ':
				// Handle space key for activating current focus area
				e.preventDefault();
				if (focusArea === 'tabs') {
					const selectedTab = tabs[focusedTabIndex];
					if (selectedTab) {
						setActiveTab(selectedTab.name);
					}
				} else if (focusArea === 'headers') {
					const selectedHeader = filteredHeaders[focusedColumnIndex];
					if (selectedHeader) {
						toggleSortColumn(selectedHeader);
					}
				} else if (focusArea === 'table' && focusedRowIndex >= 0) {
					handleRowSelect(sortedData[focusedRowIndex], focusedRowIndex);
				}
				break;
			case 'Home':
				e.preventDefault();
				if (e.ctrlKey) {
					// Go to top-left (first tab)
					setFocusArea('tabs');
					setFocusedTabIndex(0);
					setFocusedColumnIndex(0);
					setFocusedRowIndex(-1);
					const firstTab = tabListRef.current?.children[0]?.querySelector('button');
					firstTab?.focus();
				} else {
					// Go to start of current row/area
					if (focusArea === 'tabs') {
						setFocusedTabIndex(0);
						const firstTab = tabListRef.current?.children[0]?.querySelector('button');
						firstTab?.focus();
					} else {
						setFocusedColumnIndex(0);
						if (focusArea === 'headers') {
							const firstHeader = headerRowRef.current?.children[0] as HTMLElement;
							firstHeader?.focus();
						}
					}
				}
				break;
			case 'End':
				e.preventDefault();
				if (e.ctrlKey) {
					// Go to bottom-right (last row, last column)
					setFocusArea('table');
					setFocusedRowIndex(rowCount - 1);
					setFocusedColumnIndex(columnCount - 1);
				} else {
					// Go to end of current row/area
					if (focusArea === 'tabs') {
						const lastTabIndex = tabCount - 1;
						setFocusedTabIndex(lastTabIndex);
						const lastTab = tabListRef.current?.children[lastTabIndex]?.querySelector('button');
						lastTab?.focus();
					} else {
						const lastColIndex = columnCount - 1;
						setFocusedColumnIndex(lastColIndex);
						if (focusArea === 'headers') {
							const lastHeader = headerRowRef.current?.children[lastColIndex] as HTMLElement;
							lastHeader?.focus();
						}
					}
				}
				break;
		}
	};

	const handleTabKeyDown = (e: React.KeyboardEvent) => {
		// Prevent event bubbling and let the unified handleKeyDown handle navigation
		e.stopPropagation();
		handleKeyDown(e);
	};

	const handleColumnHeaderKeyDown = (e: React.KeyboardEvent) => {
		// Prevent event bubbling and let the unified handleKeyDown handle navigation
		e.stopPropagation();
		handleKeyDown(e);
	};

	// Use imported tabStyles configuration

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0px', width: '100%' }}>
			<div 
				className="nhsuk-tabs" 
				data-module="nhsuk-tabs" 
				role="tablist" 
				aria-label="Data view tabs"
				aria-orientation="horizontal"
				style={{
					marginBottom: 0,
					width: '100%'
				}}
			>
				<ul 
					ref={tabListRef}
					className={tabStyles.tabsList} 
					role="none"
					style={{display: 'flex', justifyContent: 'center', marginBottom: 0, width: '100%'}}
				>
				{ tabs.map( (tab, index) => {
					const isActiveTab = activeTab === tab.name;
					const isFocusedTab = focusedTabIndex === index;
					return (
						<li
							key={tab.name}
							className={classNames(tabStyles.tabsItem, {
								[tabStyles.activeTab]: isActiveTab
							})}
							role="presentation"
							style={{ cursor : "pointer" }}
						>
							<button
								role="tab"
								aria-selected={isActiveTab}
								aria-controls={`${tab.name}-panel`}
								id={`${tab.name}-tab`}
								tabIndex={isActiveTab || (focusedTabIndex === -1 && index === 0) ? 0 : -1}
								onClick={() => {
									setActiveTab(tab.name);
									setFocusedTabIndex(index);
									setFocusArea('tabs');
								}}
								onKeyDown={handleTabKeyDown}
								onFocus={() => {
									setFocusedTabIndex(index);
									setFocusArea('tabs');
								}}
								style={{
									background: 'none',
									border: 'none',
									color: 'inherit',
									font: 'inherit',
									cursor: 'pointer',
									padding: '0.5rem 1rem',
									textDecoration: 'none',
									outline: isFocusedTab && focusArea === 'tabs' ? `2px solid ${NHS_FOCUS_COLOR}` : 'none',
									borderRadius: '4px'
								}}
								aria-describedby={`${tab.name}-description`}
							>
								{tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
								<span 
									id={`${tab.name}-description`}
									style={srOnlyStyles}
								>
									View {tab.name} data for patients
								</span>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
		<div 
			role="tabpanel"
			id={`${activeTab}-panel`}
			aria-labelledby={`${activeTab}-tab`}
			style={{ overflow: 'auto', maxHeight: '80vh', maxWidth: '100%' }}
		>
			<table 
				ref={tableRef}
				role="grid"
				aria-label={`${activeTab} patient data`}
				aria-rowcount={sortedData.length + 1}
				aria-colcount={filteredHeaders.length}
				style={{ width: '100%', borderCollapse: 'collapse' }} 
				className="nhsuk-table"
				onKeyDown={handleKeyDown}
			>
				<thead role="rowgroup" className="nhsuk-table__head">
					<tr ref={headerRowRef} role="row" aria-rowindex={1}>
						{ filteredHeaders.map( (key, index) => {
							const isSorted = sortConfig.some(config => config.key === key);
							const sortDirection = sortConfig.find(config => config.key === key)?.direction;
							const headerLabel = formatHeader(key);
							const isFocused = focusArea === 'headers' && focusedColumnIndex === index;
							
							return (
								<th
									role="columnheader" 
									className="" 
									scope="col"
									aria-sort={ isSorted ? (sortDirection === 'asc' ? 'ascending' : 'descending') : 'none'}
									aria-colindex={index + 1}
									key={key}
									tabIndex={isFocused ? 0 : -1}
									onKeyDown={handleColumnHeaderKeyDown}
									onFocus={() => {
										setFocusedColumnIndex(index);
										setFocusArea('headers');
									}}
									style={{
										position: 'sticky',
										top: 0,
										background: isSorted ? '#e0e0e0' : '#fff',
										zIndex: 1,
										textAlign: 'center',
										cursor: 'pointer',
										paddingLeft: 8,
										paddingRight: index == filteredHeaders.length-1 ? 16 : 8,
										height: '60px',
										outline: isFocused ? '2px solid #005eb8' : 'none',
									}}
									aria-describedby={`${key}-sort-description`}
								>
									<div
										onClick={() => toggleSortColumn(key)}
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'flex-end',
											height: '100%',
										}}>
										<span
											style={{ cursor: 'pointer', marginBottom: '5px' }}
										>
											{headerLabel}
										</span>
										<span 
											id={`${key}-sort-description`}
											style={srOnlyStyles}
										>
											{isSorted 
												? `Column ${headerLabel} is sorted in ${sortDirection === 'asc' ? 'ascending' : 'descending'} order. This is sort level ${sortConfig.findIndex(config => config.key === key) + 1} of ${sortConfig.length}. Press Enter to cycle to ${sortDirection === 'desc' ? 'ascending' : 'remove sort'}.`
												: `Column ${headerLabel} is not sorted. Press Enter to add ${headerLabel} sort to the current sort configuration.`
											}
										</span>
										{ isSorted && (
											<span
												aria-hidden="true"
												style={{
													color: '#555',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													gap: '4px'
												}}
											>
												{sortConfig.length > 1 && (
													<span style={{
														fontSize: '12px',
														fontWeight: 'bold',
														background: '#005eb8',
														color: 'white',
														borderRadius: '50%',
														width: '16px',
														height: '16px',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}>
														{sortConfig.findIndex(config => config.key === key) + 1}
													</span>
												)}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													aria-hidden="true"
												>
													{sortDirection === 'asc' ? (
														<polyline points="6 15 12 9 18 15" />
													) : (
														<polyline points="6 9 12 15 18 9" />
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
				<tbody ref={tbodyRef} className="nhsuk-table__body" role="rowgroup">
					{ sortedData.map((row, rowIndex) => (
						<tr 
							key={rowIndex} 
							role="row" 
							className="nhsuk-table__row" 
							aria-rowindex={rowIndex + 2}
							aria-selected={selectedRowIndex === rowIndex}
							onClick={() => handleRowSelect(row, rowIndex)} 
							style={{
								backgroundColor: selectedRowIndex === rowIndex ? '#e0f7fa' : 
											   focusedRowIndex === rowIndex && focusArea === 'table' ? '#f0f8ff' : 'transparent',
								cursor: 'pointer',
								outline: focusedRowIndex === rowIndex && focusArea === 'table' ? '2px solid #005eb8' : 'none',
							}}
						>
							{ filteredHeaders.map((key, colIndex) => {
								
								const value = row[key as keyof PatientData];
								const parsedValue =
									key.includes('date') && typeof value === 'string' ? parseDate(value) : value;
								
								const isFocused = focusedRowIndex === rowIndex && focusedColumnIndex === colIndex;
								
								// Apply color coding for EWS score
								if ( key === 'ews_score' && typeof value === 'number' ) {
									return (
										<td
											key={key}
											role="gridcell"
											aria-colindex={colIndex + 1}
											tabIndex={isFocused ? 0 : -1}
											style={{
												paddingLeft: colIndex === 0 ? 16 : 8,
												textAlign: 'center',
												color: getEWSColor(value),
												fontWeight: 'bold',
												fontSize: 18,
												outline: isFocused && focusArea === 'table' ? '2px solid #005eb8' : 'none',
											}}
											className="nhsuk-table__cell"
										>
											{value}
										</td>
									);
								} else if ( key === "early_discharge_notification" && typeof value === 'string' ) { 
									return <td 
										key={key} 
										role="gridcell"
										aria-colindex={colIndex + 1}
										tabIndex={isFocused ? 0 : -1}
										style={{ 
											paddingLeft: colIndex == 0 ? 16 : 8, 
											textAlign: 'center',
											outline: isFocused && focusArea === 'table' ? '2px solid #005eb8' : 'none',
										}} 
										className="nhsuk-table__cell" 
									>
										{renderCompleteIcon(value)}
										<span style={srOnlyStyles}>{String(parsedValue ?? '')}</span>
									</td>;
								} else if (key === "bed_type" && typeof value === 'string') { 
									return <td 
										key={key} 
										role="gridcell"
										aria-colindex={colIndex + 1}
										tabIndex={isFocused ? 0 : -1}
										style={{ 
											paddingLeft: colIndex == 0 ? 16 : 8, 
											textAlign: 'center',
											outline: isFocused && focusArea === 'table' ? '2px solid #005eb8' : 'none',
										}} 
										className="nhsuk-table__cell" 
									>
										{renderBedIcon(value)}
										<span style={srOnlyStyles}>{String(parsedValue ?? '')}</span>
									</td>;
								} else if (key === "transport_status" && typeof value === 'string') { 
									return <td 
										key={key} 
										role="gridcell"
										aria-colindex={colIndex + 1}
										tabIndex={isFocused ? 0 : -1}
										style={{ 
											paddingLeft: colIndex == 0 ? 16 : 8, 
											textAlign: 'center',
											outline: isFocused && focusArea === 'table' ? '2px solid #005eb8' : 'none',
										}} 
										className="nhsuk-table__cell" 
									>
										{renderTransportIcon(value)}
										<span style={srOnlyStyles}>{String(parsedValue ?? '')}</span>
									</td>;
								}
								
								return <td 
									key={key} 
									role="gridcell"
									aria-colindex={colIndex + 1}
									tabIndex={isFocused ? 0 : -1}
									style={{ 
										paddingLeft: colIndex == 0 ? 16 : 8, 
										textAlign: 'center',
										outline: isFocused && focusArea === 'table' ? '2px solid #005eb8' : 'none',
									}} 
									className="nhsuk-table__cell" 
								>
									{typeof value === 'boolean' ? (
										<>
											{renderBooleanIcon(value)}
											<span style={srOnlyStyles}>{value ? 'Yes' : 'No'}</span>
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

// Use imported srOnlyStyles from constants

// Add display name for better debugging in React DevTools
BoardRoundDataTable.displayName = 'BoardRoundDataTable';

export default BoardRoundDataTable;
