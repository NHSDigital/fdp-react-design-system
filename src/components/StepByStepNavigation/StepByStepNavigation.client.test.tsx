import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, act } from '@testing-library/react';
import { StepByStepNavigation } from './StepByStepNavigation';

const items = [
  { id: 'start', title: 'Start', href: '#start', status: 'completed' as const },
  { id: 'next', title: 'Next', href: '#next' },
];

describe('StepByStepNavigation (client)', () => {
  it('renders list items and current step', () => {
    render(<StepByStepNavigation items={items} currentStepId="next" />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    const current = screen.getByRole('link', { name: 'Next' });
    expect(current).toHaveAttribute('aria-current', 'step');
  });

  it('singleOpen keeps only one expanded at a time', async () => {
    const list = [
      { id: 'a', title: 'A', description: 'alpha' },
      { id: 'b', title: 'B', description: 'beta' },
    ];
    render(<StepByStepNavigation items={list} collapsible singleOpen />);
    const aBtn = screen.getAllByRole('button').find((b) => b.getAttribute('aria-label')?.includes('A'))!;
    const bBtn = screen.getAllByRole('button').find((b) => b.getAttribute('aria-label')?.includes('B'))!;

    // Expand A
    act(() => {
      aBtn.click();
    });
    expect(await screen.findByText('alpha')).toBeInTheDocument();
    expect(screen.queryByText('beta')).not.toBeInTheDocument();

    // Expand B -> A should close
    act(() => {
      bBtn.click();
    });
    expect(await screen.findByText('beta')).toBeInTheDocument();
    expect(screen.queryByText('alpha')).not.toBeInTheDocument();
  });
});
