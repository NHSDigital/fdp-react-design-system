import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { StepByStepNavigation } from './StepByStepNavigation';

const items = [
  { id: 'a', title: 'A', description: 'Alpha details' },
  { id: 'b', title: 'B' },
];

describe('StepByStepNavigation (hydration)', () => {
  it('toggles a panel after hydration', async () => {
    render(<StepByStepNavigation items={items} collapsible defaultExpandedIds={['b']} />);
    // Initially B open, A closed
    expect(screen.queryByText('Alpha details')).not.toBeInTheDocument();
    const toggles = screen.getAllByRole('button');
    // Find the button for A by accessible label
    const aToggle = toggles.find((b) => b.getAttribute('aria-label')?.includes('A'))!;
    fireEvent.click(aToggle);
    expect(await screen.findByText('Alpha details')).toBeInTheDocument();
  });
});
