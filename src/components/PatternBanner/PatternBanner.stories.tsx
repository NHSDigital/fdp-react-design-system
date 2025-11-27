import type { Meta, StoryObj } from "@storybook/react";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";
import { PatternBanner } from "./PatternBanner";
import type { PatternBannerProps } from "./PatternBanner.types";

const meta: Meta<PatternBannerProps> = {
	title: "FDP/Experimental/PatternBanner",
	component: PatternBanner,
	args: {
		height: 420,
		density: 18,
		centrality: 0,
		neighbors: 1,
		connectorWidth: 0.6,
		hexAspectRatio: Math.sqrt(3) / 2,
		allowOverlaps: false,
		overlapColorPolicy: "recolor",
		excludeBoxPct: { w: 50, h: 36 },
		excludeCirclePct: { r: 0 },
		excludeEllipsePct: { rx: 0, ry: 0 },
		featureLayer: "over",
		uniformDistribution: false,
		feature: (
			<div
				style={{
					background: "#768692",
					color: "#fff",
					padding: 24,
					maxWidth: "50%",
				}}
			>
				<h2 style={{ margin: 0 }}>Pattern Banner</h2>
				<p style={{ margin: 0 }}>Programmatically create banner or backgrounds in the new FDP sub-brand style.</p>
			</div>
		),
	},
	argTypes: {
		allowOverlaps: { control: "boolean" },
		overlapColorPolicy: {
			control: "inline-radio",
			options: ["recolor", "skip"],
		},
		excludeBoxPct: { control: "object" },
		excludeCirclePct: { control: "object" },
		excludeEllipsePct: { control: "object" },
		featureLayer: { control: "inline-radio", options: ["over", "under"] },
		uniformDistribution: { control: "boolean" },
	},
	parameters: { layout: "fullscreen" },
};
export default meta;

export const Default: StoryObj<PatternBannerProps> = {
	render: (args) => (
		<BrandThemeProvider brand="fdp" scope="local">
			<PatternBanner {...args} />
		</BrandThemeProvider>
	),
};
