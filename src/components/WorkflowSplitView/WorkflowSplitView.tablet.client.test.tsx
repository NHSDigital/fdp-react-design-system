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

describe('WorkflowSplitView (tablet behaves like mobile)', () => {
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
