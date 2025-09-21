import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { WorkflowSplitView } from './WorkflowSplitView';

type Step = { id: string; label: string };

const steps: Step[] = [
  { id: 'one', label: 'One' },
  { id: 'two', label: 'Two' },
  { id: 'three', label: 'Three' },
];

describe('WorkflowSplitView (client)', () => {
  it('navigates between panes using mobile controls', () => {
    render(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="one"
        renderStepContent={(s) => <div role="region">{s?.label}</div>}
      />
    );
    // Use Next button to move to the next pane (mobile/tablet pattern)
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    // Assert within the current pane labelled 'Two'
    const currentPane = screen.getByRole('group', { name: 'Two' });
    expect(within(currentPane).getByRole('region').textContent).toBe('Two');
  });
});
