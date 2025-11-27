import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react"; // used by JSX
import { WorkflowSplitView } from "./WorkflowSplitView";
import type { WorkflowSplitViewProps, WorkflowStep } from "./WorkflowSplitView.types";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";

type Step = WorkflowStep<string>;

const steps: Step[] = [
  {
    id: "location",
    label: "Location",
    sections: [
      { id: "site", label: "Site" },
      { id: "rooms", label: "Rooms", guidance: <>Pick multiple rooms if needed.</> },
    ],
  },
  { id: "review", label: "Review" },
];

const SectionsStory = (props: WorkflowSplitViewProps<string, Step>) => (
  <WorkflowSplitView {...props} />
);

type Story = StoryObj<WorkflowSplitViewProps<string, Step> & { brand?: "nhs" | "fdp" }>;

const meta: Meta<Story["args"]> = {
  title: "FDP/Components/WorkflowSplitView/Sections",
  component: SectionsStory as any,
  args: {
    steps,
    defaultStepId: "location",
    // Show secondary pane when sections exist
    layoutForStep: ({ step, breakpoint }) => ({
      panes: breakpoint === "desktop" ? 3 : 2,
      showPrimaryNav: true,
      showSecondaryNav: !!step.sections?.length,
    }),
    renderStepContent: (step?: Step, section?: Step["sections"] extends Array<infer S> ? S : any) => {
      if (!step) return null;
      if (step.id === "location") {
        switch (section?.id) {
          case "site":
            return <div>Location – Section: Site</div>;
          case "rooms":
            return <div>Location – Section: Rooms</div>;
          default:
            return <div>Please select a section</div>;
        }
      }
      if (step.id === "review") return <div>Review</div>;
      return null;
    },
    renderSecondaryContent: (_step?: Step, section?: any) =>
      section?.guidance ? <aside style={{ padding: 12 }}>{section.guidance}</aside> : null,
  },
  decorators: [
    (Story, context) => {
      const brand = (context.args as any).brand ?? "nhs";
      return (
        <BrandThemeProvider brand={brand} scope="local">
          <Story />
        </BrandThemeProvider>
      );
    },
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Demonstrates per-step sections with default secondary navigation.",
      },
    },
  },
};

export default meta;

export const Default: Story = {};
