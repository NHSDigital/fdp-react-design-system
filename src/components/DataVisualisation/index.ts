export {
	default as ChartContainer,
	type ChartContainerProps,
} from "./charts/ChartContainer.tsx";
// Corrected path to LineChart implementation (was missing nested directory)
export {
	default as LineChart,
	type LineChartProps,
	type LineSeries,
	type LineDatum,
} from "./charts/LineChart/LineChart.tsx";
export {
	default as ChartWithTableTabs,
	type ChartWithTableTabsProps,
} from "./charts/ChartWithTableTabs/ChartWithTableTabs.tsx";
import Legend, {
	type LegendProps,
	type LegendItem,
} from "./charts/Legend/Legend.tsx";
import VisuallyHiddenLiveRegion from "./primitives/VisuallyHiddenLiveRegion.tsx";
export { Legend };
export type { LegendProps, LegendItem };
export {
	default as FilterableLineChart,
	type FilterableLineChartProps,
} from "./FilterableLineChart";
export { default as ChartRoot, type ChartRootProps } from "./core/ChartRoot";
// Expose chart layout context hook so consuming apps can compose custom primitives
export { useChartContext } from "./core/ChartRoot";
export {
	useScaleContext,
	LineScalesProvider,
	type ScaleContextValue,
} from "./core/ScaleContext";
export { default as Axis } from "./charts/Axis/Axis.tsx";
export type {
	AxisProps,
	AxisTickFormatPreset,
	AxisYZeroBreakConfig,
	AxisZigZagConfig,
} from "./charts/Axis/Axis.types";
export {
	AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
	AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
		AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
	AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
	AXIS_ZIGZAG_DEFAULT_CYCLES,
	AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
	AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
} from "./charts/Axis/Axis.tokens";
export {
	default as GridLines,
	type GridLinesProps,
} from "./charts/GridLines/GridLines.tsx";
export {
	default as LineSeriesPrimitive,
	type LineSeriesPrimitiveProps,
} from "./series/LineSeriesPrimitive";
export {
	default as AreaSeriesPrimitive,
	type AreaSeriesPrimitiveProps,
	type AreaSeries,
	type AreaDatum,
} from "./series/AreaSeriesPrimitive";
export {
	default as BarSeriesPrimitive,
	type BarSeriesPrimitiveProps,
	type BarSeries,
	type BarDatum,
} from "./series/BarSeriesPrimitive";
export { default as SimpleBarChart, type SimpleBarChartProps } from "./charts/BarChart/SimpleBarChart";
export { BandScalesProvider } from "./core/BandScalesProvider";
export { VisibilityProvider, useVisibility } from "./core/VisibilityContext";
export { TooltipProvider, useTooltipContext } from "./core/TooltipContext";
export { default as TooltipOverlay } from "./primitives/TooltipOverlay";
export {
	default as AlertThreshold,
	type AlertThresholdProps,
} from "./primitives/AlertThreshold";
export {
	default as AlertBand,
	type AlertBandProps,
} from "./primitives/AlertBand";
export {
	default as AlertMarkers,
	type AlertMarkersProps,
	type AlertMarkerPoint,
} from "./primitives/AlertMarkers";
export { VisuallyHiddenLiveRegion };
export {
	default as ChartNoScript,
	type ChartNoScriptProps,
} from "./charts/ChartNoScript/ChartNoScript.tsx";
export {
	default as ChartEnhancer,
	type ChartEnhancerProps,
} from "./charts/ChartEnhancer/ChartEnhancer.tsx";
export {
	default as MetricCard,
	type MetricCardProps,
	type MetricDelta,
	type MetricStatus,
} from "./components/MetricCard/MetricCard.tsx";
export {
  default as SPCMetricCard,
  type SPCMetricCardProps,
} from "./components/MetricCard/SPCMetricCard";
export { default as DataVizWizard, type DataVizWizardProps } from "./wizard/DataVizWizard";
export { default as useSpc } from "./hooks/useSpc";
export {
	default as SPCChart,
} from "./charts/SPC/SPCChart/SPCChart.tsx";
export type { SPCChartProps, SPCDatum } from "./charts/SPC/SPCChart/SPCChart.props";
// SPC barrel (charts/SPC) aggregates SPCChart, engine, icons, descriptors for ergonomic imports
export * as SPC from "./charts/SPC";

export { default as RunChart, type RunChartProps, type RunSeries, type RunDatum } from "./charts/RunChart/RunChart";

export { default as PriestleyTimeline, type PriestleyTimelineProps, type Interval as PriestleyInterval } from "./charts/PriestleyTimeline/PriestleyTimeline";
export { default as CUSUMChart, type CUSUMChartProps, type CUSUMSeries, type CUSUMDatum } from "./charts/CUSUM/CUSUMChart";
