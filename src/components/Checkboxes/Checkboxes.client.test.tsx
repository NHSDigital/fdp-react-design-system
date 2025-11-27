import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkboxes } from './Checkboxes';

const items = [
  { value: 'one', text: 'One' },
  { value: 'two', text: 'Two' },
  { value: 'three', text: 'Three', conditional: <div data-testid="cond">Conditional content</div> },
];

describe('Checkboxes (client)', () => {
  it('toggles selections and calls onChange', async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<Checkboxes name="grp" items={items} onChange={fn} />);
    const one = screen.getByRole('checkbox', { name: 'One' });
    const two = screen.getByRole('checkbox', { name: 'Two' });
    await user.click(one);
    expect(fn).toHaveBeenLastCalledWith(['one']);
    await user.click(two);
    expect(fn).toHaveBeenLastCalledWith(['one','two']);
    await user.click(one);
    expect(fn).toHaveBeenLastCalledWith(['two']);
  });
  it('handles conditional content visibility', async () => {
    const user = userEvent.setup();
    render(<Checkboxes name="grp2" items={items} />);
    const cond = screen.getByTestId('cond').closest('.nhsuk-checkboxes__conditional');
    expect(cond).toHaveClass('nhsuk-checkboxes__conditional--hidden');
    const three = screen.getByRole('checkbox', { name: 'Three' });
    await user.click(three);
    expect(cond).not.toHaveClass('nhsuk-checkboxes__conditional--hidden');
  });
  it('supports keyboard toggle', async () => {
    const user = userEvent.setup();
    render(<Checkboxes name="grp3" items={items} />);
    const first = screen.getByRole('checkbox', { name: 'One' });
    await user.tab();
    expect(first).toHaveFocus();
    await user.keyboard(' ');
    expect(first).toBeChecked();
  });
});
