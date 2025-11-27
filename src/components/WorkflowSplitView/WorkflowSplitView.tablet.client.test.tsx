import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WorkflowSplitView } from './WorkflowSplitView';

// Force tablet breakpoint: up('medium')=true, up('xlarge')=false
vi.mock('../../hooks/useBreakpoints', async (orig) => {
  const actual = await (orig as any)();
  return {
    ...actual,
    useNhsFdpBreakpoints: () => ({
      up: (k: string) => (k === 'medium' ? true : k === 'xlarge' ? false : false),
    }),
  };
});

type Step = { id: string; label: string };
const steps: Step[] = [
  { id: 'a', label: 'A' },
  { id: 'b', label: 'B' },
];

describe('WorkflowSplitView (tablet default = mobile pattern)', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders sliding panes (mobile pattern) with no side asides', () => {
    render(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="a"
        renderStepContent={(s) => <div>Content {s?.label}</div>}
      />
    );

    // Mobile container present
    expect(document.querySelector('.nhsfdp-workflow-mobile')).toBeTruthy();

    // Back/Next controls: at first step, Next is present
    expect(screen.getByRole('button', { name: 'Next' })).toBeTruthy();

    // No primary or secondary asides in mobile/tablet pattern
    expect(
      screen.queryByRole('complementary', { name: 'Primary navigation' })
    ).toBeNull();
    expect(
      screen.queryByRole('complementary', { name: 'Secondary navigation' })
    ).toBeNull();
  });
});

describe('WorkflowSplitView (tablet grid when opted-in)', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders grid with primary nav and grid semantics when enableTabletGrid=true and panes>1', () => {
    render(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="a"
        enableTabletGrid
        renderStepContent={(s) => <div>Content {s?.label}</div>}
      />
    );

    // Should NOT use the mobile wrapper
    expect(document.querySelector('.nhsfdp-workflow-mobile')).toBeFalsy();

    // Grid is rendered
    expect(screen.getByRole('grid', { name: 'Workflow layout' })).toBeTruthy();
    expect(screen.getByRole('row')).toBeTruthy();

    // Primary nav aside visible
    expect(
      screen.getByRole('complementary', { name: 'Primary navigation' })
    ).toBeTruthy();

    // Secondary nav is hidden by default on tablet unless step requests it via layoutForStep
    expect(
      screen.queryByRole('complementary', { name: 'Secondary navigation' })
    ).toBeNull();
  });
});
