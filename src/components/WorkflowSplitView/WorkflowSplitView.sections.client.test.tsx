/// <reference types="@testing-library/jest-dom/vitest" />
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { WorkflowSplitView } from "./WorkflowSplitView";
import type { WorkflowStep } from "./WorkflowSplitView.types";

// Force desktop breakpoint: up('xlarge')=true
vi.mock("../../hooks/useBreakpoints", async (orig) => {
  const actual = await (orig as any)();
  return {
    ...actual,
    useNhsFdpBreakpoints: () => ({
      up: (k: string) => (k === "xlarge" ? true : k === "medium" ? true : false),
    }),
  };
});

type Step = WorkflowStep<string>;

const steps: Step[] = [
  {
    id: "location",
    label: "Location",
    sections: [
      { id: "site", label: "Site" },
      { id: "rooms", label: "Rooms" },
    ],
  },
  { id: "review", label: "Review" },
];

describe("WorkflowSplitView – sections (desktop)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("renders default secondary nav when step has sections", async () => {
    render(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="location"
        layoutForStep={({ step, breakpoint }) => ({
          panes: breakpoint === "desktop" ? 3 : 2,
          showPrimaryNav: true,
          showSecondaryNav: !!step.sections?.length,
        })}
        renderStepContent={(s, sec) => (
          <div>
            Content {s?.label} / Section {sec?.label}
          </div>
        )}
      />
    );

    expect(
      screen.getByRole("complementary", { name: "Secondary navigation" })
    ).toBeInTheDocument();

    // Two section buttons exist
    expect(screen.getByRole("button", { name: "Site" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Rooms" })).toBeInTheDocument();
  });
});
