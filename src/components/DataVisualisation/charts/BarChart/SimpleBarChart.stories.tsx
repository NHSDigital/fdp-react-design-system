import type { Meta, StoryObj } from "@storybook/react";
import { SimpleBarChart } from "../../index";

const meta: Meta = { title: "Data Visualisation/SimpleBarChart" };
export default meta;
type Story = StoryObj;

export const FromObject: Story = {
  render: () => (
    <SimpleBarChart ariaLabel="Flat object bars" data={{ A: 5, B: 10, C: 7, D: 12 }} />
  ),
};

export const FromArray: Story = {
  render: () => (
    <SimpleBarChart
      ariaLabel="Array bars"
      data={[
        { label: "Alpha", value: 8 },
        { label: "Bravo", value: 14 },
        { label: "Charlie", value: 6 },
      ]}
    />
  ),
};

export const WithCustomPalette: Story = {
  render: () => (
    <SimpleBarChart
      ariaLabel="Custom palette bars"
      data={{ One: 9, Two: 11, Three: 4, Four: 13 }}
      colors={["#1b9e77", "#d95f02", "#7570b3", "#e7298a"]}
    />
  ),
};
