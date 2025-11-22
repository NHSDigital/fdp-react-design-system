import * as React from "react";
import { Row, Column } from "../Grid";
import { Select } from "../Select";
import { GridWidth } from "../Grid/Grid.types";
import "./Subnav.scss";

export interface SubnavFilterProps {
	id: string;
	name: string;
	label: string;
	value: string;
	disabled?: boolean;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	options: Array<{ value: string; label: string }>;
}

export interface SubnavProps {
	/** Array of filter configurations */
	filters: SubnavFilterProps[];
	/** Additional CSS classes */
	className?: string;
	/** Background color (default: #f0f4f5) */
	backgroundColor?: string;
	/** Border color (default: #d8dde0) */
	borderColor?: string;
}

export const Subnav: React.FC<SubnavProps> = ({
	filters,
	className,
	backgroundColor = '#f0f4f5',
	borderColor = '#d8dde0',
}) => {
	return (
		<div
			className={`fdp-subnav ${className || ''}`}
			style={{
				backgroundColor,
				borderBottom: `1px solid ${borderColor}`,
			}}
		>
			<div className="nhsuk-width-container">
				<Row className="fdp-subnav__row">
					{filters.map((filter) => (
						<Column
							key={filter.id}
							width={GridWidth.OneThird}
							mobileWidth={GridWidth.Full}
							className="fdp-subnav__column"
						>
							<label htmlFor={filter.id} className="fdp-subnav__label">
								{filter.label}
							</label>
							<Select
								id={filter.id}
								name={filter.name}
								value={filter.value}
								onChange={filter.onChange}
								disabled={filter.disabled}
							>
								{filter.options.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</Select>
						</Column>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Subnav;
