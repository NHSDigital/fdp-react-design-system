import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox (client)', () => {
  it('renders with label', () => {
    render(<Checkbox id="basic">Basic</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText('Basic')).toBeInTheDocument();
  });
  it('handles controlled mode', () => {
    const handle = vi.fn();
    render(<Checkbox id="ctrl" checked={false} onChange={handle}>Ctrl</Checkbox>);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handle).toHaveBeenCalledWith(true, expect.any(Object));
  });
  it('toggles uncontrolled state', () => {
    render(<Checkbox id="unctrl" defaultChecked>Unctrl</Checkbox>);
    const cb = screen.getByRole('checkbox') as HTMLInputElement;
    expect(cb.checked).toBe(true);
    fireEvent.click(cb);
    expect(cb.checked).toBe(false);
  });
  it('shows hint and error content', () => {
    render(<Checkbox id="hint" hint="H" errorMessage="Err">With extras</Checkbox>);
    expect(screen.getByText('H')).toBeInTheDocument();
    // Error text appears inside visually hidden span + visible node; use getAllByText
    const errs = screen.getAllByText(/Err/);
    expect(errs.length).toBeGreaterThan(0);
  });
  it('disabled prevents interaction', async () => {
    const fn = vi.fn();
    render(<Checkbox id="dis" disabled onChange={fn}>Disabled</Checkbox>);
    const cb = screen.getByRole('checkbox');
    await userEvent.click(cb);
    expect(fn).not.toHaveBeenCalled();
  });
  it('has composed aria-describedby ids', () => {
    render(<Checkbox id="a11y" hint="Hint" errorMessage="Err">A11y</Checkbox>);
    const cb = screen.getByRole('checkbox');
    const described = cb.getAttribute('aria-describedby');
    expect(described?.split(' ').length).toBe(2);
  });
});
