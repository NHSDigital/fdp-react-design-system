import type { Meta, StoryObj } from "@storybook/react";
import { SPCChartAutoRecalcBasicExample } from "../doc-examples/SPCChartAutoRecalcBasicExample";
import { SPCChartAutoRecalcTunedExample } from "../doc-examples/SPCChartAutoRecalcTunedExample";
import { SPCChartAutoRecalcMinGapExample } from "../doc-examples/SPCChartAutoRecalcMinGapExample";

const meta: Meta = {
  title: "Data Visualisation/SPC/v2/Auto Recalc",
  parameters: {
    docs: {
      description: {
        component:
          "Auto baseline insertion (UI pre-processor). XmR only. Toggle partition markers to see where baselines are inserted.",
      },
    },
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  name: "Basic (enabled)",
  render: () => <SPCChartAutoRecalcBasicExample />,
};

export const Tuned: Story = {
  name: "Tuned (shiftLength & deltaSigma)",
  render: () => <SPCChartAutoRecalcTunedExample />,
};

export const WithMinGap: Story = {
  name: "With minGap",
  render: () => <SPCChartAutoRecalcMinGapExample />,
};
