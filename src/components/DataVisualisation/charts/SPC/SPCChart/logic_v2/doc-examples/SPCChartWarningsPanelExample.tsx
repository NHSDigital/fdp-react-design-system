import * as React from "react";
import { SPCChart } from "../../SPCChart";
import { ChartType, ImprovementDirection } from "../../types";
import { SpcWarningSeverity } from "../../../index";

/**
 * v2-backed example: warnings panel with filtered severities.
 */
export const SPCChartWarningsPanelExample: React.FC = () => {
	// Deliberately too few points and small partition to surface warnings
	const short = [34, 36, 33, 35, 34, 32, 38, 37, 33, 34].map((y, i) => ({
		x: i,
		y,
	}));
	const baselines = short.map((_, i) => (i === 6 ? true : undefined));

	return (
		<SPCChart
			data={short}
			chartType={ChartType.XmR}
			metricImprovement={ImprovementDirection.Down}
			baselines={baselines}
			showWarningsPanel
			warningsFilter={{
				severities: [SpcWarningSeverity.Warning, SpcWarningSeverity.Error],
			}}
			enableRules
			ariaLabel="Warnings panel example"
		/>
	);
};

export default SPCChartWarningsPanelExample;
