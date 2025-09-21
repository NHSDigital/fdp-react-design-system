import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { WorkflowSplitView } from './WorkflowSplitView';

type Step = { id: string; label: string };

const steps: Step[] = [
  { id: 'one', label: 'One' },
  { id: 'two', label: 'Two' },
  { id: 'three', label: 'Three' },
];

describe('WorkflowSplitView (SSR)', () => {
  it('renders a single content pane server-side (hydration-safe)', () => {
    const { getByText, queryByLabelText } = renderSSR(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="one"
        renderStepContent={(s) => <div>Content {s?.label}</div>}
      />
    );
    expect(getByText('Content One')).toBeTruthy();
    // Does not render primary or secondary nav asides server-side by default
    expect(queryByLabelText('Primary navigation')).toBeNull();
    expect(queryByLabelText('Secondary navigation')).toBeNull();
  });

  it('accepts custom breadcrumbs renderer (SSR)', () => {
    const { getByText } = renderSSR(
      <WorkflowSplitView
        steps={steps}
        defaultStepId="two"
        renderStepContent={(s) => <div>Body {s?.label}</div>}
        renderBreadcrumbs={({ steps, current }) => (
          <nav aria-label="Steps"><ol>{steps.map(x => <li key={x.id}>{x.label}{x === current ? ' (current)' : ''}</li>)}</ol></nav>
        )}
      />
    );
    expect(getByText('Two (current)')).toBeTruthy();
  });
});
