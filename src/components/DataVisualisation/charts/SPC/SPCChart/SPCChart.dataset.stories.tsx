import type { Meta, StoryObj } from "@storybook/react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { ChartContainer } from "../../ChartContainer.tsx";
import { metricLookup } from "./test-data/parsedDataset";
import { SpcEmbeddedIconVariant } from "./SPCChart.constants.ts";

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
	title: "Data Visualisation/SPC/Dataset",
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
	},
	args: {
		metric: metricOptions[0],
		improvementDirection: "neither",
		embeddedIconVariant: "classic",
		embeddedIconRunLength: 3,
	},
};
export default meta;

type Story = StoryObj<{
	metric: string;
	improvementDirection: "neither" | "higher" | "lower";
	embeddedIconVariant?: "classic" | "triangle" | "triangleWithRun";
	embeddedIconRunLength?: number;
}>;

export const Dataset: Story = {
	name: "Playground",
	render: ({
		metric,
		improvementDirection,
		embeddedIconVariant,
		embeddedIconRunLength,
	}) => {
		const effectiveMetric =
			metric === SPECIAL_CAUSE_UNIFIED_LABEL
				? "Special cause - Neither"
				: metric;
		const displayMetric = metric; // Show the selected label (unified name when chosen)
		const data = (metricLookup as any)[effectiveMetric] || [];
		const dir =
			improvementDirection === "higher"
				? ImprovementDirection.Up
				: improvementDirection === "lower"
					? ImprovementDirection.Down
					: ImprovementDirection.Neither;

		return (
			<ChartContainer
				title={displayMetric}
				description={`Points: ${data.length}`}
				source="CSV dataset"
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
				/>
			</ChartContainer>
		);
	},	
};
