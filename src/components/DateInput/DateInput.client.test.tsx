import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateInput } from './DateInput';

describe('DateInput (client)', () => {
  it('allows typing and keeps values', async () => {
    render(<DateInput id="d5" />);
    const day = screen.getByLabelText('Day');
    await userEvent.type(day, '12');
    expect((day as HTMLInputElement).value).toBe('12');
  });
  it('shows field error after invalid blur', async () => {
    render(<DateInput id="d6" />);
    const day = screen.getByLabelText('Day');
    await userEvent.type(day, '40');
  // Move focus away to trigger the React onBlur (userEvent.tab fires proper blur/focusout sequence)
  await userEvent.tab();
  await waitFor(() => expect(screen.getByText(/Day must be between 1 and 31/)).toBeTruthy());
  });
});
