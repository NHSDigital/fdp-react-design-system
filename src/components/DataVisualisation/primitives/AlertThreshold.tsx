import * as React from "react";
import { useChartContext } from "../core/ChartRoot";
import { useScaleContext } from "../core/ScaleContext";

export type AlertStatus = "ok" | "warning" | "critical" | "info";

export interface AlertThresholdProps {
	/** Orientation of the threshold: horizontal (y=value) or vertical (x=value). Default 'horizontal'. */
	orientation?: "horizontal" | "vertical";
	/** Numeric y-value for horizontal line or Date/number x-value for vertical line. */
	value: number | Date;
	/** Optional text label rendered near the end of the line. */
	label?: string;
	/** Semantic status influences default colour. */
	status?: AlertStatus;
	/** Explicit stroke colour to override status default. */
	color?: string;
	/** Dashed line style (default true). */
	dashed?: boolean;
	/** Stroke width (px). Default 2. */
	strokeWidth?: number;
}

const statusColor = (s: AlertStatus | undefined): string => {
	switch (s) {
		case "critical":
			return "var(--nhs-fdp-color-critical,#d5281b)";
		case "warning":
			return "var(--nhs-fdp-color-warning,#ff7f0e)";
		case "info":
			return "var(--nhs-fdp-color-info,#1d70b8)";
		case "ok":
			return "var(--nhs-fdp-color-success,#007f3b)";
		default:
			return "var(--nhs-fdp-color-warning,#ff7f0e)";
	}
};

/** Draws a threshold line across the plot area using current scales. */
export const AlertThreshold: React.FC<AlertThresholdProps> = ({
	orientation = "horizontal",
	value,
	label,
	status,
	color,
	dashed = true,
	strokeWidth = 2,
}) => {
	const chart = useChartContext();
	const scales = useScaleContext();
	if (!chart || !scales) return null;
	const { innerWidth, innerHeight } = chart;
	const stroke = color || statusColor(status);

	if (orientation === "horizontal") {
		const y = scales.yScale(value);
		if (Number.isNaN(y)) return null;
		return (
			<g className="fdp-annot-threshold fdp-annot-threshold--h" aria-hidden>
				<line
					x1={0}
					y1={y}
					x2={innerWidth}
					y2={y}
					stroke={stroke}
					strokeWidth={strokeWidth}
					strokeDasharray={dashed ? "6,6" : undefined}
				/>
				{label && (
					<text
						x={innerWidth - 4}
						y={y - 4}
						textAnchor="end"
						fontSize={12}
						fill={stroke}
					>
						{label}
					</text>
				)}
			</g>
		);
	}
	const x = scales.xScale(
		value instanceof Date ? value : new Date(value as any)
	);
	if (Number.isNaN(x)) return null;
	return (
		<g className="fdp-annot-threshold fdp-annot-threshold--v" aria-hidden>
			<line
				x1={x}
				y1={0}
				x2={x}
				y2={innerHeight}
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeDasharray={dashed ? "6,6" : undefined}
			/>
			{label && (
				<text x={x + 4} y={12} fontSize={12} fill={stroke}>
					{label}
				</text>
			)}
		</g>
	);
};

export default AlertThreshold;
