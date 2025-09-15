import type { Meta, StoryObj } from "@storybook/react";
import { SPCMetricCard } from "../../../index";
import { buildSpcV26a } from "../../../charts/SPC/SPCChart/logic_v2/engine.ts";
import { ChartType, ImprovementDirection, VariationIcon, type SpcRowV2 } from "../../../charts/SPC/SPCChart/logic_v2/types.ts";

const meta: Meta<typeof SPCMetricCard> = {
  title: "Data Visualisation/SPC/SPC MetricCard/v2/SPC MetricCard (v2 engine)",
  component: SPCMetricCard,
  parameters: {
    docs: {
      description: {
        component: "SPCMetricCard integrated with the v2 engine. The status accent maps from the engine's VariationIcon.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SPCMetricCard>;

const ed4h = [
  69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78,
  82, 81, 80, 79, 81, 80,
];

function toSpark(values: number[]) {
  return values.map(v => ({ value: v }));
}

function months(count: number, start = new Date(2023, 0, 1)) {
  return Array.from({ length: count }, (_, i) => new Date(start.getFullYear(), start.getMonth() + i, 1));
}

function mapIconToStatus(icon: VariationIcon): "positive" | "negative" | "neutral" | "warning" {
  switch (icon) {
    case VariationIcon.ImprovementHigh:
    case VariationIcon.ImprovementLow:
      return "positive";
    case VariationIcon.ConcernHigh:
    case VariationIcon.ConcernLow:
      return "negative";
    case VariationIcon.NeitherHigh:
    case VariationIcon.NeitherLow:
      return "warning"; // neutral special-cause → warning accent
    default:
      return "neutral";
  }
}

export const ED4hV2: Story = {
  name: "A&E 4-hour performance (v2)",
  args: {
    label: "A&E 4-hour performance",
    intervalHint: "monthly",
    startDate: new Date(2023, 0, 1),
    sparkData: toSpark(ed4h),
    // Other props (value/delta/metadata) are auto-derived by the component
  },
  render: (args: React.ComponentProps<typeof SPCMetricCard>) => {
    // Compute v2 result on the same values to pick a status accent
    const dates = months(ed4h.length);
    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: ed4h.map((v, i) => ({ x: dates[i], value: v, ghost: false, baseline: false, target: null })),
      settings: { minimumPoints: 12 },
    }).rows;
    const last = (rows as SpcRowV2[]).filter((r) => !r.ghost && r.value !== null).pop();
    const status = mapIconToStatus(last?.variationIcon ?? VariationIcon.CommonCause);
    return (
      <SPCMetricCard {...args} status={status} />
    );
  },
};
