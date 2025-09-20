import * as React from "react";
import { useScaleContext } from "../../core/ScaleContext";
import { useChartContext } from "../../core/ChartRoot";

export interface GridLinesProps {
	axis?: "x" | "y"; // draw lines perpendicular to specified axis ticks (default y -> horizontal lines)
	tickCount?: number;
	stroke?: string;
	dasharray?: string;
	className?: string;
}

export const GridLines: React.FC<GridLinesProps> = ({
	axis = "y",
	tickCount,
	stroke = "var(--fdp-chart-grid,#e5e5e5)",
	dasharray = "2 4",
	className,
}) => {
	const scaleCtx = useScaleContext();
	const dims = useChartContext();
	if (!scaleCtx || !dims) return null;
	const ticks =
		axis === "y"
			? scaleCtx.getYTicks(tickCount)
			: scaleCtx.getXTicks(tickCount);
	return (
		<g className={["fdp-grid", className].filter(Boolean).join(" ")}>
			{axis === "y" &&
				ticks.map((t, i) => (
					<line
						key={i}
						x1={0}
						x2={dims.innerWidth}
						y1={scaleCtx.yScale(t)}
						y2={scaleCtx.yScale(t)}
						stroke={stroke}
						strokeDasharray={dasharray}
					/>
				))}
			{axis === "x" &&
				ticks.map((t, i) => (
					<line
						key={i}
						y1={0}
						y2={dims.innerHeight}
						x1={scaleCtx.xScale(t)}
						x2={scaleCtx.xScale(t)}
						stroke={stroke}
						strokeDasharray={dasharray}
					/>
				))}
		</g>
	);
};

export default GridLines;
