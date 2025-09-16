import * as React from "react";
import clsx from "clsx";
import "../DataVisualisation.scss";

export interface ChartContainerProps {
	title: string;
	description?: string;
	source?: string;
	children: React.ReactNode;
	width?: number | string;
	height?: number;
	className?: string;
	id?: string;
	tabularData?: React.ReactNode;
	showTableToggle?: boolean;
	onToggleTable?: () => void;
	initiallyShowTable?: boolean;
}

/**
 * Accessible chart wrapper providing figure/figcaption semantics and optional
 * table toggle pattern for data transparency.
 */
export const ChartContainer: React.FC<ChartContainerProps> = ({
	title,
	description,
	source,
	children,
	width = "100%",
	height = 320,
	className,
	id,
	tabularData,
	// showTableToggle,
	// onToggleTable,
	initiallyShowTable = false,
}) => {
	const figureId = React.useId();
	const resolvedId = id || figureId;
	const descId = description ? `${resolvedId}-desc` : undefined;
	const sourceId = source ? `${resolvedId}-src` : undefined;
	const [showTable, _] = React.useState(initiallyShowTable);

	return (
		<figure
			id={resolvedId}
			className={clsx("fdp-chart", className)}
			style={{ width }}
			aria-labelledby={`${resolvedId}-title`}
			aria-describedby={clsx(descId, sourceId)}
		>
			<header className="fdp-chart__header">
				<h3 id={`${resolvedId}-title`} className="fdp-chart__title">
					{title}
				</h3>
			</header>
			{description && (
				<p id={descId} className="fdp-chart__description">
					{description}
				</p>
			)}
			<div
				className="fdp-chart__viz"
				style={{ height }}
				role="group"
				aria-label={title}
			>
				{children}
			</div>
			
			{(source || tabularData) && (
				<figcaption className="fdp-chart__caption">
					{source && (
						<small id={sourceId} className="fdp-chart__source">
							Source: {source}
						</small>
					)}
					{ showTable && tabularData && (
						<div id={`${resolvedId}-table`} style={{ marginTop: 8 }}>
							{tabularData}
						</div>
					)}
				</figcaption>
			)}
			
		</figure>
	);
};

export default ChartContainer;
