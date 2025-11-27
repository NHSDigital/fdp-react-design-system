import * as React from "react";
import { useMemo } from "react";
import { ChartContainer } from "../../../../../ChartContainer";
import { SPCChart } from "../../../SPCChart";
import { withParityV26 } from "../../presets";
import { ImprovementDirection as V2ImprovementDirection } from "../../types";
import {
	ImprovementDirection as V1ImprovementDirection,
	ChartType as V1ChartType,
} from "../../types";
import {
	staffSicknessChart1,
	staffSicknessChart2,
	staffSicknessChart3,
	staffSicknessChart4,
	staffSicknessChart5,
	toDateSeries,
} from "../data/staffSicknessRuleClash";

function toV1Dir(value: V2ImprovementDirection): V1ImprovementDirection {
	switch (value) {
		case V2ImprovementDirection.Up:
			return V1ImprovementDirection.Up;
		case V2ImprovementDirection.Down:
			return V1ImprovementDirection.Down;
		default:
			return V1ImprovementDirection.Neither;
	}
}

export const RuleClashChart1Trend: React.FC = () => {
	const series = useMemo(() => toDateSeries(staffSicknessChart1), []);
	const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
	const direction = V2ImprovementDirection.Down; // lower is better

	return (
		<ChartContainer
			title="Rule clash – Trend (monotonic)"
			description="Gradual increase with a local dip; trend expected to dominate; shift resets at dip."
			source="Synthetic"
		>
			<SPCChart
				data={series}
				chartType={V1ChartType.XmR}
				metricImprovement={toV1Dir(direction)}
				enableRules
				showPoints
				gradientSequences
				settings={settings as any}
				alwaysShowZeroY={false}
				targets={Array(series.length).fill(4.0)}
			/>
		</ChartContainer>
	);
};

export const RuleClashChart2Shift: React.FC = () => {
	const series = useMemo(() => toDateSeries(staffSicknessChart2), []);
	const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
	const direction = V2ImprovementDirection.Down; // lower is better

	return (
		<ChartContainer
			title="Rule clash – Shift (run one side)"
			description="Sustained run below mean; any isolated outliers should not override shift."
			source="Synthetic"
		>
			<SPCChart
				data={series}
				chartType={V1ChartType.XmR}
				metricImprovement={toV1Dir(direction)}
				enableRules
				showPoints
				gradientSequences
				settings={settings as any}
				alwaysShowZeroY={false}
				targets={Array(series.length).fill(4.0)}
			/>
		</ChartContainer>
	);
};

export const RuleClashChart3TwoOfThree: React.FC = () => {
	const series = useMemo(() => toDateSeries(staffSicknessChart3), []);
	const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
	const direction = V2ImprovementDirection.Down; // lower is better

	return (
		<ChartContainer
			title="Rule clash – Two-of-three (>=2σ)"
			description="Near-limit cluster may co-occur with shift; precedence favours sustained change when present."
			source="Synthetic"
		>
			<SPCChart
				data={series}
				chartType={V1ChartType.XmR}
				metricImprovement={toV1Dir(direction)}
				enableRules
				showPoints
				gradientSequences
				settings={settings as any}
				alwaysShowZeroY={false}
				targets={Array(series.length).fill(4.0)}
			/>
		</ChartContainer>
	);
};

export const RuleClashChart4SinglePoint: React.FC = () => {
	const series = useMemo(() => toDateSeries(staffSicknessChart4), []);
	const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
	const direction = V2ImprovementDirection.Down; // lower is better

	return (
		<ChartContainer
			title="Rule clash – Single point (>3σ)"
			description="Isolated beyond-limit point amid stability; only the outlier should colour."
			source="Synthetic"
		>
			<SPCChart
				data={series}
				chartType={V1ChartType.XmR}
				metricImprovement={toV1Dir(direction)}
				enableRules
				showPoints
				gradientSequences
				settings={settings as any}
				alwaysShowZeroY={false}
				targets={Array(series.length).fill(4.0)}
			/>
		</ChartContainer>
	);
};

export const RuleClashChart5MultipleRules: React.FC = () => {
	const series = useMemo(() => toDateSeries(staffSicknessChart5), []);
	const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
	const direction = V2ImprovementDirection.Down; // lower is better – later decline unfavourable

	return (
		<ChartContainer
			title="Rule clash – Multiple rules over time"
			description="Sequencing: early outlier, mid-series shift, later opposing trend. Emphasise the most recent sustained pattern."
			source="Synthetic"
		>
			<SPCChart
				data={series}
				chartType={V1ChartType.XmR}
				metricImprovement={toV1Dir(direction)}
				enableRules
				showPoints
				gradientSequences
				settings={settings as any}
				alwaysShowZeroY={false}
				targets={Array(series.length).fill(4.0)}
			/>
		</ChartContainer>
	);
};
