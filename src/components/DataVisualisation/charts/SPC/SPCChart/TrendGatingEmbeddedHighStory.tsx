import React, { useState } from "react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { metricLookup } from "./test-data/parsedDataset";
import { ChartContainer } from "../../ChartContainer";
// Import via components barrel: ../../../.. back to components root then index
import { Radios } from "../../../../index";

/**
 * Embedded chart replicating the "Special cause - High is good" dataset story
 * for inclusion in MDX documentation (trend gating rationale).
 * Kept isolated so MDX can import a concrete React component rather than Storybook's <Story /> runtime lookup.
 */
export const TrendGatingEmbeddedHigh: React.FC = () => {
	const metricKey = "Special cause - High is good";
	const data = (metricLookup as any)[metricKey] || [];
	const [dir, setDir] = useState<ImprovementDirection>(ImprovementDirection.Up);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		switch (val) {
			case "up":
				setDir(ImprovementDirection.Up);
				break;
			case "down":
				setDir(ImprovementDirection.Down);
				break;
			default:
				setDir(ImprovementDirection.Neither);
				break;
		}
	};
	return (
		<>
			<ChartContainer
				title={"Special cause"}
				source="CSV dummy dataset"
			>
			<SPCChart
				data={data}
				metricImprovement={dir}
				enableRules
				showPoints
				narrationContext={{ measureName: metricKey }}
				gradientSequences
				// Explicitly enable trend side-gating for this illustrative example
				disableTrendSideGating={false}
			/>
			</ChartContainer>
			<div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
				<Radios
					name="trend-gating-direction"
					value={
						dir === ImprovementDirection.Up
							? "up"
							: dir === ImprovementDirection.Down
								? "down"
								: "neither"
					}
					onChange={handleChange}
					inline
					options={[
						{ value: "up", text: "High is good" },
						{ value: "down", text: "Low is good" },
						{ value: "neither", text: "Neither" },
					]}
				/>
			</div>
		</>
	);
};

export default TrendGatingEmbeddedHigh;
