import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { WorkflowSplitView } from "./WorkflowSplitView";
import type { WorkflowStep } from "./WorkflowSplitView.types";

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
];

describe("WorkflowSplitView – sections (SSR)", () => {
  it("renders with an initial section server-side", () => {
    const html = renderToString(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="location"
        renderStepContent={(s, sec) => (
          <div>SSR {s?.label} / {sec?.label}</div>
        )}
      />
    );
    expect(html).toContain("SSR");
    expect(html).toContain("Location");
    expect(html).toContain("Site");
  });
});
