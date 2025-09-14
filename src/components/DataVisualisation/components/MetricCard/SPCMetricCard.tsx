import * as React from "react";
import MetricCard, { type MetricCardProps } from "./MetricCard";
import { SPCSpark } from "../../charts/SPC/SPCSpark/SPCSpark";
import useSpc from "../../hooks/useSpc";

import { ImprovementDirection } from "../../charts/SPC/SPCChart/logic/spcConstants";

export interface SPCMetricCardProps extends Omit<MetricCardProps, "visual"> {
	/** Sparkline data points (value series) */
	sparkData: Array<{ value: number | null }>; // SPCSparkPoint compatible shape
	/** Directionality for interpretation (prefer MetricPolarity; legacy support for enum/string union) */
	direction?: ImprovementDirection;
	/** Use SQL-compatibility wrapper for parity with SPCChart defaults */
	useSqlCompatEngine?: boolean;
	/** Show mean and control limits */
	showMean?: boolean;
	showLimits?: boolean;
	showLimitBand?: boolean;
	/** Show 1σ/2σ inner bands when available (engine-provided) */
	showInnerBands?: boolean;
	/** Auto classify last state from spark values */
	autoClassify?: boolean;
	/** Cap rendered points (thinning strategy is stride by default) */
	maxPoints?: number;
}

/**
 * SPCMetricCard – specialised MetricCard for healthcare quality dashboards.
 * Embeds an SPCSpark below the headline value and wires SPC defaults.
 */
export const SPCMetricCard: React.FC<SPCMetricCardProps> = ({
	sparkData,
	direction = ImprovementDirection.Neither,
	useSqlCompatEngine = true,
	showMean = false,
	showLimits = true,
	showLimitBand = false,
	showInnerBands = false,
	autoClassify = true,
	maxPoints,
	...rest
}) => {
	// Normalise direction from MetricPolarity to ImprovementDirection for hook/component pipeline
	
	const spc = useSpc({
		values: sparkData.map((d) => d.value ?? null),
		metricImprovement: direction,
		useSqlCompatEngine,
		showLimits,
		showLimitBand,
		showInnerBands,
		showMean,
		autoClassify,
	});

	const visual = <SPCSpark {...spc.sparkProps} maxPoints={maxPoints} />;

	return <MetricCard {...rest} visual={visual} style={spc.metricCardStyle} />;
};

export default SPCMetricCard;
