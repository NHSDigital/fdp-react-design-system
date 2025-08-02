import React from 'react';
import { bedIcon, completeIcon, transportStatusIcon, booleanIcon } from './icons';
import { getEWSColor, srOnlyStyles, NHS_FOCUS_COLOR } from './constants';

interface TableCellProps {
	value: unknown;
	key: string;
	colIndex: number;
	isFocused: boolean;
	focusArea: string;
	parsedValue?: string | number | boolean | null;
}

export const TableCell: React.FC<TableCellProps> = ({ 
	value, 
	key, 
	colIndex, 
	isFocused, 
	focusArea, 
	parsedValue 
}) => {
	const cellStyle = {
		paddingLeft: colIndex === 0 ? 16 : 8,
		textAlign: 'center' as const,
		outline: isFocused && focusArea === 'table' ? `2px solid ${NHS_FOCUS_COLOR}` : 'none',
	};

	// Apply color coding for EWS score
	if (key === 'ews_score' && typeof value === 'number') {
		return (
			<td
				role="gridcell"
				aria-colindex={colIndex + 1}
				tabIndex={isFocused ? 0 : -1}
				style={{
					...cellStyle,
					color: getEWSColor(value),
					fontWeight: 'bold',
					fontSize: 18,
				}}
				className="nhsuk-table__cell"
			>
				{value}
			</td>
		);
	}

	// Handle early discharge notification
	if (key === "early_discharge_notification" && typeof value === 'string') {
		const iconEntry = completeIcon.find(icon => icon.value === value);
		return (
			<td 
				role="gridcell"
				aria-colindex={colIndex + 1}
				tabIndex={isFocused ? 0 : -1}
				style={cellStyle}
				className="nhsuk-table__cell" 
			>
				{iconEntry ? iconEntry.icon : null}
				<span style={srOnlyStyles}>{String(parsedValue ?? '')}</span>
			</td>
		);
	}

	// Handle bed type
	if (key === "bed_type" && typeof value === 'string') {
		const iconEntry = bedIcon.find(icon => icon.value === value);
		return (
			<td 
				role="gridcell"
				aria-colindex={colIndex + 1}
				tabIndex={isFocused ? 0 : -1}
				style={cellStyle}
				className="nhsuk-table__cell" 
			>
				{iconEntry ? iconEntry.icon : null}
				<span style={srOnlyStyles}>{String(parsedValue ?? '')}</span>
			</td>
		);
	}

	// Handle transport status
	if (key === "transport_status" && typeof value === 'string') {
		const iconEntry = transportStatusIcon.find(icon => icon.value === value);
		return (
			<td 
				role="gridcell"
				aria-colindex={colIndex + 1}
				tabIndex={isFocused ? 0 : -1}
				style={cellStyle}
				className="nhsuk-table__cell" 
			>
				{iconEntry ? iconEntry.icon : null}
				<span style={srOnlyStyles}>{String(parsedValue ?? '')}</span>
			</td>
		);
	}

	// Default cell rendering
	return (
		<td 
			role="gridcell"
			aria-colindex={colIndex + 1}
			tabIndex={isFocused ? 0 : -1}
			style={cellStyle}
			className="nhsuk-table__cell" 
		>
			{typeof value === 'boolean' ? (
				<>
					{(() => {
						const iconEntry = booleanIcon.find(icon => icon.value === value);
						return iconEntry ? iconEntry.icon : null;
					})()}
					<span style={srOnlyStyles}>{value ? 'Yes' : 'No'}</span>
				</>
			) : String(parsedValue ?? '')}
		</td>
	);
};
