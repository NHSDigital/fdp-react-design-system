import * as React from "react";
import MetricCard, { type MetricCardProps } from "./MetricCard";
import { SPCSpark } from "../../charts/SPC/SPCSpark/SPCSpark";
import useSpc from "../../hooks/useSpc";

import { ImprovementDirection } from "../../charts/SPC/SPCChart/types";
import computeAutoMetrics from "../../charts/SPC/utils/autoMetrics";

export interface SPCMetricCardProps extends Omit<MetricCardProps, "visual"> {
	/** Sparkline data points (value series) */
	sparkData: Array<{ value: number | null; date?: string | number | Date }>; // SPCSparkPoint compatible shape + optional date
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

	/** Automatically derive the headline value from the final data point (default true). */
	autoValue?: boolean;
	/** Automatically derive the delta from recent points (default true). */
	autoDelta?: boolean;
	/** Automatically derive metadata like "Latest: Aug 2025" from dates (default true). */
	autoMetadata?: boolean;
	/** If provided and unit not already set, render values with this unit (e.g. "%", "ms"). */
	defaultUnit?: string;
	/** Treat data as a known regular interval when dates are absent or partial. */
	intervalHint?: "hourly" | "daily" | "weekly" | "monthly" | "quarterly" | "annually";
	/** Starting date used with intervalHint to synthesise dates when none are provided. */
	startDate?: string | number | Date;
	/** Configure how delta is calculated. */
	deltaConfig?: {
		/** Strategy for baseline comparison. */
		strategy?: "previous" | "n-points" | "year-over-year";
		/** Number of periods back when using n-points (default 1). */
		n?: number;
		/** When true, compute delta as absolute difference in unit; when false and unit is '%', still renders with '%' suffix (percentage points). Default: true. */
		absolute?: boolean;
		/** Skip nulls when seeking the baseline point (default true). */
		skipNulls?: boolean;
	};
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
	autoValue = true,
	autoDelta = true,
	autoMetadata = true,
	defaultUnit,
	intervalHint,
	startDate,
	deltaConfig,
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

	// ----- Auto value/delta/metadata derivation via shared helper -----
	const auto = React.useMemo(() => {
		return computeAutoMetrics({
			values: sparkData.map((d) => (typeof d.value === "number" ? d.value : null)),
			dates: sparkData.map((d) => d.date as any),
			intervalHint,
			startDate,
			providedUnit: rest.unit,
			defaultUnit,
			autoValue,
			autoDelta,
			autoMetadata,
			deltaConfig,
		});
	}, [sparkData, intervalHint, startDate, rest.unit, defaultUnit, autoValue, autoDelta, autoMetadata, deltaConfig]);

	// Final props assembly – prefer auto when enabled and data available, else fall back to provided props
	const finalValue = autoValue && auto.value != null ? auto.value : (rest.value as any);
	const finalDelta = autoDelta && auto.delta ? auto.delta : rest.delta;
	const finalUnit = auto.unit || rest.unit;
	const computedMetadata = autoMetadata && auto.metadata ? auto.metadata : rest.metadata;

	return (
		<MetricCard
			{...rest}
			value={finalValue as any}
			unit={finalUnit}
			delta={finalDelta}
			metadata={computedMetadata}
			visual={visual}
			style={spc.metricCardStyle}
		/>
	);
};

export default SPCMetricCard;
