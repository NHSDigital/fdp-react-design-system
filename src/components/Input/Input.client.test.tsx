import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

// Client interaction tests (focus, typing, class changes that rely on jsdom)
describe('Input (client)', () => {
  it('focuses and types text', async () => {
    const user = userEvent.setup();
    render(<Input id="txt" name="txt" placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    await user.click(input);
    await user.type(input, 'Hello');
    expect(input).toHaveValue('Hello');
  });

  it('invokes onChange for text input', async () => {
    const user = userEvent.setup();
    const values: string[] = [];
    render(<Input id="chg" name="chg" onChange={(e) => values.push((e.target as HTMLInputElement).value)} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'A');
    expect(values.includes('A')).toBe(true);
  });

  it('range slider updates internal value on typing digits', async () => {
    const user = userEvent.setup();
    const calls: string[] = [];
    render(<Input id="rngc" name="rngc" type="range" min="0" max="100" showCurrentValue onChange={(e) => calls.push((e.target as HTMLInputElement).value)} />);
    const slider = screen.getByRole('slider');
    await user.type(slider, '5'); // triggers keydown handler path
    expect(calls.some(v => v.includes('5'))).toBe(true);
  });

  it('applies error class when hasError', () => {
    render(<Input id="err" name="err" hasError />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('nhsuk-input--error');
  });
});
