import type { Meta, StoryObj } from "@storybook/react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { ChartContainer } from "../../ChartContainer.tsx";
import { metricLookup } from "./test-data/parsedDataset";
import { SpcEmbeddedIconVariant } from "./SPCChart.constants.ts";
import Table from "../../../../Tables/Table";
// Import grouped JSON to surface expected colours in the table beneath the chart
import grouped from "./test-data/Test Data.grouped.json";

const metricNames = Object.keys(metricLookup) as string[];
// Collapse special-cause polarity variants into a single option. Direction control drives semantics.
const SPECIAL_CAUSE_KEYS = [
	"Special cause - High is good",
	"Special cause - Low is good",
	"Special cause - Neither",
];
const SPECIAL_CAUSE_UNIFIED_LABEL = "Special cause — polarity-controlled";
const metricOptions = metricNames.reduce<string[]>((acc, name) => {
	if (SPECIAL_CAUSE_KEYS.includes(name)) {
		if (!acc.includes(SPECIAL_CAUSE_UNIFIED_LABEL))
			acc.push(SPECIAL_CAUSE_UNIFIED_LABEL);
	} else {
		acc.push(name);
	}
	return acc;
}, []);

const meta: Meta = {
	title: "Data Visualisation/SPC/v1/Dataset",
	parameters: {
		docs: {
			description: {
				component:
					'Dataset-driven SPC Playground. Use the controls to switch metric, improvement direction, and embedded icon variant. This replaces multiple duplicated stories.\n\nNote: The three "Special cause" variants are collapsed into one option (polarity-controlled). Choose improvement direction to see High/Low/Neither behavior.',
			},
		},
	},
	argTypes: {
		metric: {
			control: { type: "select" },
			options: metricOptions,
			description: "Select a dataset metric from the parsed CSV.",
		},
		improvementDirection: {
			control: { type: "radio" },
			options: ["neither", "higher", "lower"],
			description:
				"Direction considered an improvement for variation & assurance logic.",
		},
		embeddedIconVariant: {
			control: { type: "radio" },
			options: ["classic", "triangle", "triangleWithRun"],
			description: "Embedded variation icon style.",
		},
		embeddedIconRunLength: {
			control: { type: "number" },
			description: 'Run length (only shown when variant is triangleWithRun).',
			if: { arg: 'embeddedIconVariant', eq: 'triangleWithRun' }
			// Note: conditional display of this control is not enforced to maintain broad Storybook compatibility.
		},
		useV2Adapter: {
			control: { type: "boolean" },
			description: "Experimental: use v2 engine adapter for rows/limits and visuals.",
		},
	},
	args: {
		metric: metricOptions[0],
		improvementDirection: "neither",
		embeddedIconVariant: "classic",
		embeddedIconRunLength: 3,
		useV2Adapter: false,
	},
};
export default meta;

type Story = StoryObj<{
	metric: string;
	improvementDirection: "neither" | "higher" | "lower";
	embeddedIconVariant?: "classic" | "triangle" | "triangleWithRun";
	embeddedIconRunLength?: number;
	useV2Adapter?: boolean;
}>;

export const Dataset: Story = {
	name: "Playground",
	render: ({
		metric,
		improvementDirection,
		embeddedIconVariant,
		embeddedIconRunLength,
		useV2Adapter,
	}) => {
		// Determine which dataset to use for the chart series
		const effectiveMetric =
			metric === SPECIAL_CAUSE_UNIFIED_LABEL
				? "Special cause - Neither"
				: metric;
		const displayMetric = metric; // Show the selected label (unified name when chosen)
		const data = ((metricLookup as any)[effectiveMetric] || []) as { x: Date; y: number }[];
		const dir =
			improvementDirection === "higher"
				? ImprovementDirection.Up
				: improvementDirection === "lower"
					? ImprovementDirection.Down
					: ImprovementDirection.Neither;

		// Resolve expected colours for the tabular view by referencing the grouped JSON export.
		// For the unified Special cause option, pick the matching dataset based on the selected polarity.
		const groups = (grouped as unknown as { metric: string; data: { date: string; value: number; colour: string }[] }[]);
		const expectedMetricKey =
			metric === SPECIAL_CAUSE_UNIFIED_LABEL
				? dir === ImprovementDirection.Up
					? "Special cause - High is good"
					: dir === ImprovementDirection.Down
						? "Special cause - Low is good"
						: "Special cause - Neither"
				: effectiveMetric;
		const expectedGroup = groups.find((g) => g.metric === expectedMetricKey);

		return (
			<ChartContainer
				title={displayMetric}
				description={`Points: ${data.length}`}
				source="CSV dataset (expected colours from grouped JSON)"
				showTableToggle
				initiallyShowTable
				tabularData={expectedGroup && (
					<Table
						caption="Expected colours"
						visuallyHiddenCaption
						responsive
						firstCellIsHeader={false}
						columns={[
							{ key: "date", title: "Date" },
							{ key: "value", title: "Value", format: "numeric" },
							{
								key: "colour",
								title: "Expected colour",
								render: (hex: string) => ({
									node: (
										<span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
											<span
												aria-label={`colour swatch ${hex}`}
												title={hex}
												style={{
													display: "inline-block",
													width: 14,
													height: 14,
													borderRadius: 3,
													background: hex,
													border: "1px solid #ccc",
												}}
											/>
											<span>{hex}</span>
										</span>
									),
								}),
							},
						]}
									data={(data || []).map((pt: { x: Date; y: number }, i: number) => ({
							date: pt?.x ? new Date(pt.x).toLocaleDateString("en-GB") : "",
							value: pt?.y,
							colour: expectedGroup?.data?.[i]?.colour,
						}))}
					/>
				)}
			>
				<SPCChart
					data={data}
					announceFocus
					metricImprovement={dir}
					narrationContext={{ measureName: displayMetric }}
					showPoints
					enableRules
					embeddedIconVariant={embeddedIconVariant as SpcEmbeddedIconVariant}
					embeddedIconRunLength={embeddedIconRunLength}
					gradientSequences
					useV2Adapter={!!useV2Adapter}
				/>
			</ChartContainer>
		);
	},	
};
