import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	title: "Data Visualisation/SPC/v1/DEPRECATED - noJudgementWithCard (use Dataset)",
	tags: ["hidden"],
	parameters: {
		docs: {
			description: {
				component:
					"This story has been retired. Use the consolidated v1/Dataset story.",
			},
		},
	},
};

export default meta;
type Story = StoryObj;
export const Deprecated: Story = { render: () => <></> };
