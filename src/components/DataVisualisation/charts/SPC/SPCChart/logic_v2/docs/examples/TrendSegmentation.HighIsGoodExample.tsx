import * as React from "react";
import { SPCChart } from "../../../SPCChart";
import { ImprovementDirection, ChartType } from "../../../types";

/**
 * Minimal SPC example used by the Trend Segmentation guide.
 * Practical example: “Special cause conflict – High is good”
 *
 * Shape (values): 43, 41, 37, 36, 31, 23, 15, 13, 15, 18, 23, 27, 31
 * Settings per guide: chartLevelEligibility, trendPoints=6, segmentation on, CrossingAfterUnfavourable.
 * Note: The chart component maps legacy/v1 settings into v2 where needed for visuals.
 */
export function TrendSegmentationHighIsGoodExample(): React.ReactElement {
	const values = [43, 41, 37, 36, 31, 23, 15, 13, 15, 18, 23, 27, 31];
	const data = values.map((y, i) => ({ x: i + 1, y }));

	return (
		<React.Fragment>
			<SPCChart
				ariaLabel="Trend segmentation example – High is good"
				height={260}
				chartType={ChartType.XmR}
				metricImprovement={ImprovementDirection.Up}
				data={data}
				// Keep visuals straightforward for the doc example
				showPartitionMarkers={false}
				gradientSequences={false}
				enableNeutralNoJudgement={true}
				// Engine settings to match the guide's code block
				settings={
					{
						// Make early rows eligible once overall threshold met (doc example intent)
						minimumPoints: 13,
						chartLevelEligibility: true as any, // accepted and normalized by v2 mapping in chart
						trendPoints: 6,
						// Enable favourable trend segmentation and choose Unfavourable crossing strategy
						// The v1 chart maps these to v2 segmentation controls in the adapter path
						trendFavourableSegmentation: true as any,
						trendSegmentationStrategy: "CrossingAfterUnfavourable" as any,
					} as any
				}
			/>
		</React.Fragment>
	);
}

export default TrendSegmentationHighIsGoodExample;
