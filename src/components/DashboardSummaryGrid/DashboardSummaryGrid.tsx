import React from "react";
import { DashboardSummaryGridProps } from "./DashboardSummaryGrid.types";
import { SummaryCard } from "../SummaryCard";
import { Grid, Row, Column, GridWidth } from "../Grid";
import "./DashboardSummaryGrid.scss";

/**
 * NHS Dashboard Summary Grid Component
 *
 * A pre-configured grid layout that displays four summary cards in a responsive
 * 1x4 grid on desktop and stacked layout on mobile. Perfect for dashboard KPIs
 * and data overviews.
 *
 * Features:
 * - Responsive grid layout using NHS Grid components
 * - Consistent spacing and alignment
 * - Optimized for exactly four summary cards
 * - Mobile-first responsive design
 * - Accessibility compliant
 *
 * @example
 * ```tsx
 * <DashboardSummaryGrid
 *   cards={[
 *     { title: "Patient Records", value: "1,247" },
 *     { title: "Appointments Today", value: "89" },
 *     { title: "Active Prescriptions", value: "342" },
 *     { title: "Staff On Duty", value: "156" }
 *   ]}
 * />
 * ```
 */
export const DashboardSummaryGrid: React.FC<DashboardSummaryGridProps> = ({
	cards,
	className = "",
	...props
}) => {
	const baseClasses = ["nhs-fdp-dashboard-summary-grid", className]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={baseClasses} {...props}>
			<Grid /* container applies width constraints */>
				<Row>
					{cards.map((cardProps, index) => (
						<Column
							key={index}
							width={GridWidth.OneQuarter}
							className="nhs-fdp-dashboard-summary-grid__column"
							data-card-index={index}
						>
							<SummaryCard {...cardProps} />
						</Column>
					))}
				</Row>
			</Grid>
		</div>
	);
};
