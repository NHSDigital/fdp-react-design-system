import type { Meta, StoryObj } from "@storybook/react";
import {
	ChartRoot,
	LineScalesProvider,
	Axis,
	GridLines,
	LineSeriesPrimitive,
	type LineSeries,
} from "../../index";

const meta: Meta = {
	title: "Data Visualisation/Primitives/Axis/Break Indicator",
	argTypes: {
		showZeroAxisBreak: { control: { type: "boolean" } },
		zeroAxisBreakGapPx: { control: { type: "number", min: 0, max: 256, step: 1 } },
		// padding controls removed (centered-only)
		zeroAxisBreakZigZagHeightPx: { control: { type: "number", min: 0, max: 256, step: 1 } },
		zeroAxisBreakZigZagAmplitudePx: { control: { type: "number", min: 1, max: 32, step: 1 } },
		zeroAxisBreakZigZagCycles: { control: { type: "number", min: 1, max: 32, step: 1 } },
		zeroAxisBreakZigZagStepXPx: { control: { type: "number", min: 1, max: 16, step: 1 } },
		extraClearancePx: { control: { type: "number", min: 0, max: 128, step: 1 } },
	},
};
export default meta;

type Story = StoryObj<{
	showZeroAxisBreak: boolean;
	zeroAxisBreakGapPx: number;
	// padding removed
	zeroAxisBreakZigZagHeightPx?: number;
	zeroAxisBreakZigZagAmplitudePx?: number;
	zeroAxisBreakZigZagCycles?: number;
	zeroAxisBreakZigZagStepXPx?: number;
	extraClearancePx: number;
}>;

// Small synthetic series with values far from zero to demonstrate the break clearly
const series: LineSeries = {
	id: "s1",
	label: "Example",
	data: Array.from({ length: 14 }).map((_, i) => ({
		x: new Date(Date.now() - (13 - i) * 86400000),
		y: 40 + (i % 5) * 5,
	})),
};

export const Demo: Story = {
	args: {
		showZeroAxisBreak: true,
		zeroAxisBreakGapPx: 128,
		zeroAxisBreakZigZagHeightPx: 96,
		zeroAxisBreakZigZagAmplitudePx: 4,
		zeroAxisBreakZigZagCycles: 6,
		zeroAxisBreakZigZagStepXPx: 3,
		extraClearancePx: 48,
	},
	render: (args) => {
		return (
			<div style={{ width: "100%", maxWidth: 720 }}>
				<ChartRoot
					height={320}
					margin={{ left: 56, bottom: 48, right: 16, top: 12 }}
					ariaLabel="Axis break demo"
				>
					<LineScalesProvider series={[series] as any} yBottomGapPx={args.showZeroAxisBreak ? (args.zeroAxisBreakGapPx + args.extraClearancePx) : 0}>
						<svg width="100%" height="100%" role="img">
							<g transform={`translate(56,12)`}>
								<Axis
									type="x"
									tickValues={series.data.map((d) => d.x)}
									tickFormatPreset="dayShortMonth"
									labelAngle={-35}
								/>
								<Axis
									type="y"
									label="Value"
									yZeroBreak={{
										enabled: args.showZeroAxisBreak,
										gapPx: args.zeroAxisBreakGapPx,
										zigZag: {
											heightPx: args.zeroAxisBreakZigZagHeightPx,
											amplitudePx: args.zeroAxisBreakZigZagAmplitudePx,
											cycles: args.zeroAxisBreakZigZagCycles,
											stepXPx: args.zeroAxisBreakZigZagStepXPx,
										},
									}}
								/>
								<GridLines axis="y" />
								<LineSeriesPrimitive
									series={series as any}
									seriesIndex={0}
									palette="categorical"
									smooth={false}
									strokeWidth={2}
									showPoints
									focusablePoints
									focusIndex={-1}
									parseX={(d) => (d.x instanceof Date ? d.x : new Date(d.x))}
								/>
							</g>
						</svg>
					</LineScalesProvider>
				</ChartRoot>
			</div>
		);
	},
};

// Centered-only behaviour – no anchored variants
