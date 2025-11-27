import type { Meta, StoryObj } from "@storybook/react";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";
import { ParallaxScene } from "./ParallaxScene";
import type { ParallaxSceneProps } from "./ParallaxScene.types";

const meta: Meta<ParallaxSceneProps & { brand?: "fdp" | "nhs" }> = {
	title: "FDP/Experimental/ParallaxScene",
	component: ParallaxScene,
	args: {
		seed: 42,
		mode: "scroll",
		height: "100vh",
		axis: "y",
		strength: 160,
		scrub: 0.4,
		scrollStart: "top 50%",
		scrollEnd: "+=300%",
		reducedMotion: "off",
		debugMarkers: true,
		pin: true,
		density: 16,
		direction: "se",
		callout: {
			content: (
				<div>
					<h2 style={{ marginTop: 0 }}>
						Holding space for Lock-up or information
					</h2>
					<p style={{ marginBottom: 0 }}>
						This is a sample callout. Shapes remain behind this panel.
					</p>
				</div>
			),
			width: 1920,
			backgroundToken: "",
			padding: "m",
			elevation: "soft",
		},
		gradients: [
			// Hooks – these class names are resolved in SCSS to paint servers or fallback colours
			"nhs-fdp-gradient-blue",
			"nhs-fdp-gradient-aqua",
			"nhs-fdp-gradient-green",
		],
	},
	parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<ParallaxSceneProps & { brand?: "fdp" | "nhs" }>;

export const Scroll: Story = {
	render: (args) => (
		<BrandThemeProvider brand="fdp" scope="local">
			<div style={{ height: '120vh' }} />
			<ParallaxScene {...args} />
			<div style={{ height: '120vh' }} />
		</BrandThemeProvider>
	),
};

export const Timed: Story = {
	args: { mode: "timed" },
	render: (args) => (
		<BrandThemeProvider brand="fdp" scope="local">
			<ParallaxScene {...args} />
		</BrandThemeProvider>
	),
};
