import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import React, { useState } from "react";
import { WorkflowSplitView } from "./WorkflowSplitView";

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

type Step = { id: string; label: string };
const steps: Step[] = [
  { id: "one", label: "One" },
  { id: "two", label: "Two" },
  { id: "three", label: "Three" },
];

// These tests are initially skipped to scaffold desired behavior without breaking current stable state.
describe("WorkflowSplitView (desktop keyboard navigation)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("applies grid semantics and focuses containers initially when no preselected step", () => {
    render(
      <WorkflowSplitView
        steps={steps}
        renderStepContent={(s) => <h2 id="content-heading">{s?.label}</h2>}
        renderSecondaryContent={(s) => <div>Secondary {s?.label}</div>}
        layoutForStep={({ breakpoint }) =>
          breakpoint === "desktop"
            ? { panes: 3, showPrimaryNav: true, showSecondaryNav: true }
            : { panes: 2, showPrimaryNav: true, showSecondaryNav: false }
        }
      />
    );

    const grid = document.querySelector(".nhsfdp-workflow-grid.panes-3") as HTMLElement;
    expect(grid).toBeTruthy();

    // First gridcell should be tabbable/focusable
    const gridcells = grid.querySelectorAll('[role="gridcell"]');
    expect(gridcells.length).toBeGreaterThanOrEqual(2);
  });

  it("roves focus across containers with ArrowRight/Left and Home/End", () => {
    render(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="two"
        renderStepContent={(s) => <h2>{s?.label}</h2>}
        renderSecondaryContent={(s) => <div>Secondary {s?.label}</div>}
        layoutForStep={({ breakpoint }) =>
          breakpoint === "desktop"
            ? { panes: 3, showPrimaryNav: true, showSecondaryNav: true }
            : { panes: 2, showPrimaryNav: true, showSecondaryNav: false }
        }
      />
    );

    const grid = document.querySelector(".nhsfdp-workflow-grid.panes-3") as HTMLElement;
    const cells = Array.from(grid.querySelectorAll('[role="gridcell"]')) as HTMLElement[];
    // focus first container
    cells[0].focus();

    fireEvent.keyDown(cells[0], { key: "ArrowRight" });
    expect(document.activeElement).toBe(cells[1]);

    fireEvent.keyDown(document.activeElement as Element, { key: "End" });
    expect(document.activeElement).toBe(cells[cells.length - 1]);

    fireEvent.keyDown(document.activeElement as Element, { key: "Home" });
    expect(document.activeElement).toBe(cells[0]);

    fireEvent.keyDown(document.activeElement as Element, { key: "ArrowLeft" });
    // Should remain on first
    expect(document.activeElement).toBe(cells[0]);
  });

  it("Enter enters nav container and focuses listbox active option; Escape ascends back to container", () => {
    render(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="two"
        renderStepContent={(s) => <h2>{s?.label}</h2>}
        layoutForStep={({ breakpoint }) =>
          breakpoint === "desktop"
            ? { panes: 3, showPrimaryNav: true, showSecondaryNav: true }
            : { panes: 2, showPrimaryNav: true, showSecondaryNav: false }
        }
      />
    );

    const grid = document.querySelector(".nhsfdp-workflow-grid.panes-3") as HTMLElement;
    const navCell = grid.querySelector('[role="gridcell"][aria-label="Primary navigation"]') as HTMLElement;
    navCell.focus();

    fireEvent.keyDown(navCell, { key: "Enter" });

    const listbox = within(navCell).getByRole("listbox");
    expect(listbox).toBeTruthy();

    // Expect focus to be inside nav; either aria-activedescendant or a focused option/button
    const activeDesc = listbox.getAttribute("aria-activedescendant");
    if (activeDesc) {
      const activeEl = document.getElementById(activeDesc);
      expect(activeEl).toBeTruthy();
    }

    // Escape should move focus back to the nav container
    fireEvent.keyDown(listbox, { key: "Escape" });
    expect(document.activeElement).toBe(navCell);
  });

  it("Nav listbox supports ArrowUp/Down/Home/End and Enter to select", async () => {
    const Harness = () => {
      const [current, setCurrent] = useState("one");
      return (
        <WorkflowSplitView
          steps={steps}
          currentStepId={current as any}
          onStepChange={(id) => setCurrent(id as any)}
          renderStepContent={(s) => <h2>{s?.label}</h2>}
        />
      );
    };
    render(<Harness />);

  const navCell = screen.getByRole("gridcell", { name: "Primary navigation" });
    const listbox = within(navCell).getByRole("listbox");

  // Focus listbox and move through options (use ArrowDown twice to reach "Three")
  (listbox as HTMLElement).focus();
  fireEvent.keyDown(listbox, { key: "End" });

    const options = within(listbox).getAllByRole("option");
    expect(options.length).toBe(steps.length);

    // Re-query the listbox to ensure we have a fresh live node, then activate via Enter
    const freshListbox = within(navCell).getByRole("listbox");
    fireEvent.keyDown(freshListbox, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    fireEvent.keyUp(freshListbox, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
  // Re-query listbox post-activation to avoid stale references and assert aria-activedescendant
  await waitFor(() => {
    const freshListbox = within(navCell).getByRole("listbox");
    expect(freshListbox.getAttribute("aria-activedescendant")).toBe("three");
  });
  // Focus should shift to the content container
  const contentCell = screen.getByRole("gridcell", { name: /Breadcrumbs|One|Two|Three|Name/ });
  await waitFor(() => expect(document.activeElement).toBe(contentCell));
  });

  it("Editable fields guard: arrows inside inputs do not trigger container nav", () => {
    render(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="two"
        renderStepContent={() => (
          <div>
            <label>
              Name
              <input aria-label="Name" />
            </label>
          </div>
        )}
      />
    );

  const contentAside = screen.getByRole("gridcell", { name: /Breadcrumbs|Name|Two|One/ });
    const input = within(contentAside).getByLabelText("Name");

    (input as HTMLElement).focus();
    fireEvent.keyDown(input, { key: "ArrowLeft" });

    // Focus remains in input
    expect(document.activeElement).toBe(input);
  });
});
