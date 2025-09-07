import React from 'react';
import classNames from 'classnames';
import { TableProps, TableCellData, TableHeaderCell } from './Table.types';
import './Table.scss';
import { Panel } from '../Panel';
import { Heading } from '../Heading';

/**
 * Table component for displaying structured data
 * 
 * Features:
 * - Responsive design with mobile-friendly stacked layout
 * - Accessible table structure with proper headers
 * - Support for complex cell types (headers, numeric, spans)
 * - Optional panel wrapper with heading
 * - Customizable caption and styling
 * 
 * @param props - Table component props
 * @returns JSX element
 */
const Table: React.FC<TableProps> = ({
	rows,
	head,
	caption,
	captionSize,
	firstCellIsHeader = false,
	responsive = false,
	heading,
	headingLevel = 3,
	panel = false,
	panelClasses,
	tableClasses,
	classes,
	attributes,
	'data-testid': testId,
}) => {
  // Build caption classes
	const captionClass = `nhsuk-table__caption ${captionSize ? `nhsuk-table__caption--${captionSize}` : ''}`.trim();

  // Build table classes
  const tableClassList = classNames(
	'nhsuk-table',
	{
	  'nhsuk-table-responsive': responsive,
	},
	tableClasses
  );

  // Build container classes
  const containerClassList = classNames(classes);

  const renderHeaderCell = (cell: TableHeaderCell, index: number) => {
	const headerClasses = classNames('nhsuk-table__header', {
	  [`nhsuk-table__header--${cell.format}`]: cell.format,
	}, cell.classes);

	const headerAttributes = {
		scope: 'col' as const,
		...(cell.colspan && { colSpan: cell.colspan }),
		...(cell.rowspan && { rowSpan: cell.rowspan }),
		...(responsive && { role: 'columnheader' }),
		...cell.attributes,
	};

	return (
	  <th key={index} className={headerClasses} {...headerAttributes}>
		{cell.node != null ? (
		  <>{cell.node}</>
		) : cell.html ? (
		  <span dangerouslySetInnerHTML={{ __html: cell.html }} />
		) : (
		  cell.text
		)}
	  </th>
	);
  };

  const renderCell = (cell: TableCellData, cellIndex: number, isFirstCell: boolean) => {
	const isHeaderCell = firstCellIsHeader && isFirstCell;
	
	const cellClasses = classNames(
	  isHeaderCell ? 'nhsuk-table__header' : 'nhsuk-table__cell',
	  {
		[`nhsuk-table__${isHeaderCell ? 'header' : 'cell'}--${cell.format}`]: cell.format,
	  },
	  cell.classes
	);

	const cellAttributes = {
		...(isHeaderCell && { scope: 'row' as const }),
		...(cell.colspan && { colSpan: cell.colspan }),
		...(cell.rowspan && { rowSpan: cell.rowspan }),
		...(responsive && { 
		role: isHeaderCell ? 'rowheader' : 'cell',
		...(cell.header && { 'data-label': cell.header })
		}),
		...cell.attributes,
	};

	const cellContent = (
	  <>
		{responsive && cell.header && (
		  <span className="nhsuk-table-responsive__heading" aria-hidden="true">
			{cell.header}{' '}
		  </span>
		)}
		{cell.node != null ? (
		  <>{cell.node}</>
		) : cell.html ? (
		  <span dangerouslySetInnerHTML={{ __html: cell.html }} />
		) : (
		  cell.text
		)}
	  </>
	);

	const Component = isHeaderCell ? 'th' : 'td';

	return (
	  <Component key={cellIndex} className={cellClasses} {...cellAttributes}>
		{cellContent}
	  </Component>
	);
  };

  const renderTable = () => (
	<table 
	  className={tableClassList}
	  {...(responsive && { role: 'table' })}
	  {...attributes}
	  {...(testId && { 'data-testid': testId })}
	>
	  { caption && (
		<caption className={captionClass}>
		  {caption}
		</caption>
	  )}
	  
	  { head && head.length > 0 && (
		<thead 
		  className="nhsuk-table__head"
		  {...(responsive && { role: 'rowgroup' })}
		>
		  <tr {...(responsive && { role: 'row' })}>
			{head.map((cell: any, index: number) => renderHeaderCell(cell, index))}
		  </tr>
		</thead>
	  )}
	  
	  <tbody className="nhsuk-table__body">
		{rows && rows.map((row: any, rowIndex: number) => (
		  <tr 
			key={rowIndex} 
			className="nhsuk-table__row"
			{...(responsive && { role: 'row' })}
		  >
			{row.map((cell: any, cellIndex: number) => 
				renderCell(cell, cellIndex, cellIndex === 0)
			)}
		  </tr>
		))}
	  </tbody>
	</table>
  );

if (panel) {
	return (
		<Panel className={panelClasses}>
			{ heading && (
				<Heading level={headingLevel} className="nhsuk-table__heading-tab">
					{heading}
				</Heading>
			)}
			{ renderTable() }
		</Panel>
	);
}

  if (containerClassList) {
	return (
	  <div className={containerClassList}>
		{ renderTable() }
	  </div>
	);
  }

  return renderTable();
};

export default Table;
