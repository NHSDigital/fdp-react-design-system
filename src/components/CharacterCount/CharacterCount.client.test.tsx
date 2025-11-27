import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CharacterCount } from './CharacterCount';

describe('CharacterCount (client)', () => {
  it('updates message as user types (over threshold)', async () => {
    render(<CharacterCount id="cc5" name="f" maxLength={10} threshold={10} />);
    const ta = screen.getByRole('textbox');
    await userEvent.type(ta, 'hello');
    expect(screen.getByText(/You have 5 characters remaining/)).toBeTruthy();
    await userEvent.type(ta, 'world!!'); // exceed
    expect(screen.getByText(/You have 2 characters too many/)).toBeTruthy();
  });
  it('fires onCountChange callback', async () => {
    const spy = vi.fn();
    render(<CharacterCount id="cc6" name="f" maxLength={5} threshold={0} onCountChange={spy} />);
    const ta = screen.getByRole('textbox');
    await userEvent.type(ta, 'abc');
    expect(spy).toHaveBeenCalled();
  const last = spy.mock.calls[spy.mock.calls.length - 1];
  expect(last && last[0]).toBe(3); // count
  });
});
