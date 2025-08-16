import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Radios } from './Radios';

const base = [
  { value: 'email', text: 'Email', hint: 'Hint A' },
  { value: 'phone', text: 'Phone', disabled: true },
  { value: 'post', text: 'Post' }
];

describe('Radios (client)', () => {
  it('selects value and calls onChange', () => {
    const fn = vi.fn();
    render(<Radios name="c" options={base} onChange={fn} />);
    fireEvent.click(screen.getByRole('radio', { name: 'Email' }));
    expect(fn).toHaveBeenCalled();
    expect(screen.getByRole('radio', { name: 'Email' })).toBeChecked();
  });

  it('respects defaultValue uncontrolled', () => {
    render(<Radios name="c2" options={base} defaultValue="post" />);
    expect(screen.getByRole('radio', { name: 'Post' })).toBeChecked();
  });

  it('applies modifiers & custom class', () => {
    render(<Radios name="c3" options={base} inline size="small" hasError className="extra" />);
    const container = document.querySelector('.nhsuk-radios');
    expect(container?.className).toContain('nhsuk-radios--inline');
    expect(container?.className).toContain('nhsuk-radios--small');
    expect(container?.className).toContain('nhsuk-radios--error');
    expect(container?.className).toContain('extra');
  });

  it('handles conditional reveal content toggling', () => {
    const conditional = [
      { value: 'a', text: 'A', conditional: 'Shown A' },
      { value: 'b', text: 'B', conditional: 'Shown B' }
    ];
    render(<Radios name="rc" options={conditional} />);
    // Initially hidden
    expect(document.querySelectorAll('.nhsuk-radios__conditional--hidden').length).toBe(2);
    fireEvent.click(screen.getByRole('radio', { name: 'A' }));
    expect(screen.getByText('Shown A').closest('.nhsuk-radios__conditional')).not.toHaveClass('nhsuk-radios__conditional--hidden');
  });
});
