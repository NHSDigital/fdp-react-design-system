// React import omitted (automatic JSX runtime)
import type { Meta, StoryObj } from "@storybook/react";
import { SPCSpark } from "./SPCSpark";
import { ImprovementDirection } from "../engine";
import { VariationState } from "../SPCIcons/SPCConstants";

const meta: Meta<typeof SPCSpark> = {
	title: "Data Visualisation/SPC/SPC Spark",
	component: SPCSpark,
	decorators: [
		(Story) => (
			<div
				style={{
					fontFamily: "Frutiger W01, Frutiger, Arial, sans-serif",
					display: "inline-block",
				}}
			>
				<Story />
			</div>
		),
	],
};
export default meta;

type Story = StoryObj<typeof SPCSpark>;

const sampleData = Array.from({ length: 20 }).map((_, i) => ({
	value: Math.round(60 + Math.sin(i / 2) * 10 + (i > 14 ? 8 : 0)),
}));
// Deterministic stable series for Common Cause visuals (perfectly flat)
const stableCommonCauseData = Array.from({ length: 20 }).map(() => ({
	value: 60,
}));

export const Basic: Story = {
	args: {
		data: sampleData,
		variationState: VariationState.SpecialCauseImproving,
	metricImprovement: ImprovementDirection.Up,
		showMean: true,
	},
};

export const CommonCause: Story = {
	args: {
		data: stableCommonCauseData,
		variationState: VariationState.CommonCause,
		showMean: true,
	},
};

export const WithLatestMarker: Story = {
	args: {
		data: sampleData,
		variationState: VariationState.SpecialCauseDeteriorating,
	metricImprovement: ImprovementDirection.Down,
		showLatestMarker: true,
		gradientWash: true,
	},
};

export const Dense: Story = {
	args: {
		data: Array.from({ length: 40 }).map((_, i) => ({
			value: 50 + Math.sin(i / 3) * 5,
		})),
		variationState: VariationState.SpecialCauseNoJudgement,
	metricImprovement: ImprovementDirection.Up,
		showLimits: true,
	},
};

// Reuse a 40-point synthetic series for per-point signal colouring example
const denseData = Array.from({ length: 40 }).map((_, i) => ({
	value: 50 + Math.sin(i / 4) * 6 + Math.cos(i / 5) * 3,
}));

export const ColouredPoints: Story = {
	name: "Per-point signal colouring",
	args: {
		data: denseData,
		autoClassify: true,
		showMean: true,
		showLimits: true,
		showLimitBand: true,
		colorPointsBySignal: true,
	},
};

// Thinning examples
const longData = Array.from({ length: 180 }).map((_, i) => ({
	value: 120 + Math.sin(i / 8) * 15 + Math.cos(i / 3) * 5,
}));

// Limits + shaded band
export const WithLimitBand: Story = {
	args: {
		data: sampleData,
		variationState: VariationState.CommonCause,
		showMean: true,
		showLimits: true,
		showLimitBand: true,
	},
};

export const WithInnerSigmaBands: Story = {
	name: "With inner 1σ/2σ bands",
	args: {
		data: sampleData,
		variationState: VariationState.CommonCause,
		showMean: true,
		showLimits: true,
		showLimitBand: true,
		showInnerBands: true,
		// Provide example sigma bands; in production these come from the engine via useSpc
		centerLine: 60,
		controlLimits: { lower: 45, upper: 75 },
		sigmaBands: { lowerTwo: 50, lowerOne: 55, upperOne: 65, upperTwo: 70 },
	},
};

export const ThinningStride: Story = {
	args: {
		data: longData,
		variationState: VariationState.CommonCause,
		showMean: true,
		maxPoints: 40,
		thinningStrategy: "stride",
	},
};

export const ThinningRDP: Story = {
	args: {
		data: longData,
		variationState: VariationState.CommonCause,
		showMean: true,
		maxPoints: 40,
		thinningStrategy: "rdp",
	},
};

// Engine-like auto classification examples
const commonNoiseData = Array.from({ length: 24 }).map((_, i) => ({
	value: 50 + (i % 2 === 0 ? 0.6 : -0.6) + (i % 5 === 0 ? 0.2 : -0.2),
}));

export const CommonCauseAuto: Story = {
	name: "Auto common-cause (grey)",
	args: {
		data: commonNoiseData,
		autoClassify: true,
		showMean: true,
		showLimits: true,
		gradientWash: true,
	},
};

const isolatedSpikeData = [
	...Array.from({ length: 23 }).map((_, i) => ({
		value: 50 + (i % 2 === 0 ? 0.8 : -0.8),
	})),
	{ value: 60 }, // isolated high spike well beyond ~3σ
];

export const NoJudgementIsolatedSpike: Story = {
	name: "Auto no‑judgement (purple) – isolated spike",
	args: {
		data: isolatedSpikeData,
		autoClassify: true,
		showMean: true,
		showLimits: true,
		gradientWash: true,
		colorPointsBySignal: true,
	},
};
