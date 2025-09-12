import * as React from "react";
import { useChartContext } from "../core/ChartRoot";
import { useScaleContext } from "../core/ScaleContext";
import type { AlertStatus } from "./AlertThreshold";

export interface AlertBandProps {
	orientation?: "horizontal" | "vertical";
	from: number | Date;
	to: number | Date;
	status?: AlertStatus;
	fill?: string;
	opacity?: number; // default 0.12
	/** Optional rounded corners radius */
	rx?: number;
}

const statusFill = (s: AlertStatus | undefined): string => {
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

/** Shaded band across a value range (y or x). Renders inside plot <g>. */
export const AlertBand: React.FC<AlertBandProps> = ({
	orientation = "horizontal",
	from,
	to,
	status,
	fill,
	opacity = 0.12,
	rx = 0,
}) => {
	const chart = useChartContext();
	const scales = useScaleContext();
	if (!chart || !scales) return null;
	const { innerWidth, innerHeight } = chart;
	const color = fill || statusFill(status);
	if (orientation === "horizontal") {
		const y1 = scales.yScale(from);
		const y2 = scales.yScale(to);
		if ([y1, y2].some((v) => Number.isNaN(v))) return null;
		const y = Math.min(y1, y2);
		const h = Math.abs(y2 - y1);
		return (
			<rect
				x={0}
				y={y}
				width={innerWidth}
				height={h}
				fill={color}
				opacity={opacity}
				rx={rx}
			/>
		);
	}
	const x1 = scales.xScale(from instanceof Date ? from : new Date(from as any));
	const x2 = scales.xScale(to instanceof Date ? to : new Date(to as any));
	if ([x1, x2].some((v) => Number.isNaN(v))) return null;
	const x = Math.min(x1, x2);
	const w = Math.abs(x2 - x1);
	return (
		<rect
			x={x}
			y={0}
			width={w}
			height={innerHeight}
			fill={color}
			opacity={opacity}
			rx={rx}
		/>
	);
};

export default AlertBand;
